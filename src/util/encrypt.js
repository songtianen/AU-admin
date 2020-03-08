/* eslint-disable object-shorthand */
// const CryptoJS = require('crypto-js');
import CryptoJS from 'crypto-js';

const key = CryptoJS.enc.Utf8.parse('0880076B18D7EE81'); // 十六位十六进制数作为密钥
const _iv = CryptoJS.enc.Utf8.parse('CB3EC842D7C69578');

// 加密方法
const Encrypt = (word) => {
  let srcs = CryptoJS.enc.Utf8.parse(word);
  let encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encrypted.ciphertext.toString().toUpperCase();
};

const Decrypt = (word) => {
  let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
  let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  let decrypt = CryptoJS.AES.decrypt(srcs, key, {
    iv: _iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });
  let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
  return decryptedStr.toString();
};
export { Encrypt, Decrypt };
