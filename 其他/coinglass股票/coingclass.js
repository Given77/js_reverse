const ee = require("crypto-js");
const pako = require('pako')
const t = 'itF6iAucjlicArMV9zGp2SxYCQSiCuNag2X2JeE8Hptu9pUemCFAeFQizjIK09HwGydO1TUxoLzk/uPE44wWPECTeSAdNOkm73QgxcXpYHO4+1SXq2PLYy/0rEELfKHnEBn9vIm4hkAk8bX0wBoFNvdCpAJ86GdHPeTePsupDjnyhgLSezNMhnwvE6ydzLKTwsNVsp5ANOzQAvD27e82SLW0XqfHbzpKnQRHrY6iOW0='
const e = '10c6d893245044cd'
en = function (t) {
    var e, n = pako.inflate(new Uint8Array(t.match(/[\da-f]{2}/gi).map(function (t) {
        return parseInt(t, 16)
    }))), r = "";
    for (e = 0; e < n.length / 16384; e++) r += String.fromCharCode.apply(null, n.slice(16384 * e, (e + 1) * 16384));
    return decodeURIComponent(escape(r += String.fromCharCode.apply(null, n.slice(16384 * e))))
}
en(ee.AES.decrypt(t, ee.enc.Utf8.parse(e), {
    mode: ee.mode.ECB,
    padding: ee.pad.Pkcs7
}).toString(ee.enc.Hex))

var n = en(ee.AES.decrypt(t, ee.enc.Utf8.parse(e), {
                mode: ee.mode.ECB,
                padding: ee.pad.Pkcs7
            }).toString(ee.enc.Hex));

console.log(n)