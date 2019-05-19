const qiniu = require('qiniu');
const fs = require('fs');
const path = require('path');

const cdnConfig = require('../app.config').cdn;

// 声明 定义不许要上传cdn的文件
const excludeFiles = ['index.html'];

const { ak, sk, bucket } = cdnConfig;

let mac = new qiniu.auth.digest.Mac(ak, sk); // 创建各种上传凭证之前，我们需要定义好其中鉴权对象mac

/*
服务端直传是指客户利用七牛服务端SDK从服务端直接上传文件到七牛云，交互的双方一般都在机房里面，
所以服务端可以自己生成上传凭证，然后利用SDK中的上传逻辑进行上传，最后从七牛云获取上传的结果，
这个过程中由于双方都是业务服务器，所以很少利用到上传回调的功能，而是直接自定义returnBody来获取自定义的回复内容。

七牛存储支持空间创建在不同的机房，在使用七牛的 Node.js SDK 中的FormUploader和ResumeUploader上传文件之前，
必须要构建一个上传用的config对象，在该对象中，可以指定空间对应的zone以及其他的一些影响上传的参数。
*/
let config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z2;
// 是否使用https域名
// config.useHttpsDomain = true;
// 上传是否使用cdn加速
// config.useCdnDomain = true;

const doUpload = (key, file) => {
  const options = {
    scope: `${bucket}:${key}`,
  };
  let formUploader = new qiniu.form_up.FormUploader(config);
  let putExtra = new qiniu.form_up.PutExtra();
  let putPolicy = new qiniu.rs.PutPolicy(options);
  let uploadToken = putPolicy.uploadToken(mac);
  return new Promise((resolve, reject) => {
    // 上传的逻辑
    formUploader.putFile(uploadToken, key, file, putExtra, (respErr, ret) => {
      if (!respErr) {
        resolve(ret);
      } else {
        reject(respErr);
      }
    });
  });
};

const CDNFiles = fs.readdirSync(path.join(__dirname, '../dist'));

const uploads = CDNFiles.map((file) => {
  if (excludeFiles.indexOf(file) === -1) {
    return doUpload(file, path.join(__dirname, '../dist', file));
  }
  return Promise.resolve(`${file} no need to uploader`);
});

console.log('这是数组吗', uploads);
// 执行所有的uploads
Promise.all(uploads)
  .then((resp) => console.log('upload success', resp))
  .catch((err) => {
    console.log('upload fail', err);
    process.exit(0); // 其中一个上传失败， 结束掉进程
  });

// node pack/upload.js
