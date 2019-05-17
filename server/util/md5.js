let crypto = require('crypto');
let CryptoJS = require('crypto-js');

const key = CryptoJS.enc.Utf8.parse('0880076B18D7EE81'); // 十六位十六进制数作为密钥
const _iv = CryptoJS.enc.Utf8.parse('CB3EC842D7C69578');
const secretKey = 'song_jwt_token';
function md5(mima) {
  let hash = crypto.createHash('md5');
  let password = hash.update(mima).digest('base64');
  return password;
}

function md5PWD(pwd) {
  const salt = 'song_tian_en_is_good@#IUHJh~~';
  return md5(md5(pwd + salt));
}

// 加密方法
function Encrypt(word) {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString().toUpperCase();
}
// 解密方法

function Decrypt(word) {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
}

module.exports = {
  md5PWD,
  Encrypt,
  Decrypt,
  secretKey,
};
