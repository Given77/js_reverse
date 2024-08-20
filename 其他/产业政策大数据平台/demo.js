// 定义字节流
const byteArray = new Uint8Array([10, 12, 230, 149, 176, 229, 173, 151, 231, 187, 143, 230, 181, 142, 18, 1, 48, 26, 1, 48, 34, 2, 45, 49, 42, 1, 48, 50, 0, 58, 0, 66, 2, 45, 49, 74, 2, 45, 49, 82, 2, 45, 49, 90, 1, 48, 96, 1, 104, 0, 112, 1, 120, 2, 128, 1, 10]);

// 使用TextDecoder将字节流解码为字符串
const decoder = new TextDecoder('utf-8');
let decodedString;

try {
    decodedString = decoder.decode(byteArray);
    console.log("Decoded string (UTF-8):", decodedString);
} catch (e) {
    console.log("Unable to decode using UTF-8");
}

// 尝试解码为其他编码格式（例如GBK）
// 注意：TextDecoder不支持GBK编码，所以我们需要使用其他方法
// 这里只是一个示例，展示如何处理不同的编码
try {
    const iconv = require('iconv-lite');
    decodedString = iconv.decode(Buffer.from(byteArray), 'gbk');
    console.log("Decoded string (GBK):", decodedString);
} catch (e) {
    console.log("Unable to decode using GBK");
}