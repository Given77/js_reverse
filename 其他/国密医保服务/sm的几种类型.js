// 导入sm-crypto库
const sm2 = require('sm-crypto').sm2;
const sm3 = require('sm-crypto').sm3;
const sm4 = require('sm-crypto').sm4;

// SM2 密钥对生成
function generateSM2KeyPair() {
  return sm2.generateKeyPairHex();
}

// SM2 加密
function sm2Encrypt(plaintext, publicKey) {
  return sm2.doEncrypt(plaintext, publicKey);
}

// SM2 解密
function sm2Decrypt(ciphertext, privateKey) {
  return sm2.doDecrypt(ciphertext, privateKey);
}

// SM3 哈希
function sm3Hash(message) {
  return sm3(message);
}

// SM4 密钥生成
function generateSM4Key() {
  return '0123456789ABCDEF0123456789ABCDEF';
}

// SM4 加密
function sm4Encrypt(plaintext, key) {
  return sm4.encrypt(plaintext, key);
}

// SM4 解密
function sm4Decrypt(ciphertext, key) {
  return sm4.decrypt(ciphertext, key);
}

// 使用示例
function main() {
  // SM2 示例
  const keyPair = generateSM2KeyPair();
  console.log('SM2 密钥对:', keyPair);

  const sm2PlainText = 'Hello, SM2!';
  const sm2Encrypted = sm2Encrypt(sm2PlainText, keyPair.publicKey);
  console.log('SM2 加密结果:', sm2Encrypted);

  const sm2Decrypted = sm2Decrypt(sm2Encrypted, keyPair.privateKey);
  console.log('SM2 解密结果:', sm2Decrypted);

  // SM3 示例
  const sm3Message = 'Hello, SM3!';
  const sm3Result = sm3Hash(sm3Message);
  console.log('SM3 哈希结果:', sm3Result);

  // SM4 示例
  const sm4Key = generateSM4Key();
  console.log('SM4 密钥:', sm4Key);

  const sm4PlainText = 'Hello, SM4!';
  const sm4Encrypted = sm4Encrypt(sm4PlainText, sm4Key);
  console.log('SM4 加密结果:', sm4Encrypted);

  const sm4Decrypted = sm4Decrypt(sm4Encrypted, sm4Key);
  console.log('SM4 解密结果:', sm4Decrypted);
}

main();