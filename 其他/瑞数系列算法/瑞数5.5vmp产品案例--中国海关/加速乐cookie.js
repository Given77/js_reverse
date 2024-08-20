// 代理器封装
function get_enviroment(proxy_array) {
    for (var i = 0; i < proxy_array.length; i++) {
        handler = '{\n' +
            '    get: function(target, property, receiver) {\n' +
            '        console.log("方法:", "get  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return target[property];\n' +
            '    },\n' +
            '    set: function(target, property, value, receiver) {\n' +
            '        console.log("方法:", "set  ", "对象:", ' +
            '"' + proxy_array[i] + '" ,' +
            '"  属性:", property, ' +
            '"  属性类型:", ' + 'typeof property, ' +
            // '"  属性值:", ' + 'target[property], ' +
            '"  属性值类型:", typeof target[property]);\n' +
            '        return Reflect.set(...arguments);\n' +
            '    }\n' +
            '}'
        eval('try{\n' + proxy_array[i] + ';\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}catch (e) {\n' + proxy_array[i] + '={};\n'
            + proxy_array[i] + '=new Proxy(' + proxy_array[i] + ', ' + handler + ')}')
    }
}

var cryptojs = require('crypto-js')
proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen']
get_enviroment(proxy_array)
window = global;
navigator = {
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}


var _0x5567 = ['aUE9wow=', 'w6tcQCM=', 'wrXDkiPDhQ==', 'UMOkw5DDuw==', 'w7JZTCo=', 'asKiwoPClQ==', 'UcKBwrLCiw==',
    'w7YewrJK', 'TjZKw7Y=', 'JsOJwqwv', 'WcKpP1M=', 'wqBfw4xg', 'FBfDvcKQ', 'w6fCnsOJeA==', 'bS5vBA==', 'w5nDosKZHw==',
    'e8OEw4DDlg==', 'AgXCmww=', 'wrBne08=', 'wrwAQMKJ', 'QHHCrHQ=', 'w5kHwoRt', 'clnCk10=', 'wqcvwog=', 'FkLCscKb',
    'ecOAw5jDmA==', 'w6LDlCnDgQ==', 'HXfCjcKw', 'w7nCqMO7Nw==', 'w7w1QVs=', 'WcKSwoTClA==', 'wpjDu8OjLw==',
    'wrXCqcKUXA==', 'wqNvwqMu', 'w6RVWsOL', 'w43Cu8O9wqY=', 'wqh0akE=', 'L8KVw6kn', 'w5DCh8OBwpU=', 'S8K7Lk4=',
    'AkbCrcKa', 'w4jDmcKLwow=', 'Cncbw6U=', 'w5TDhUfCtw==', 'wps3Cg==', 'w7nDlCvDjQ==', 'w61kcR8=', 'wrtuwqXDiw==',
    'wr8lwot7', 'cMKAwrXCpg==', 'w6JgdzY=', 'AmfCgcKk', 'U8KVwr7Cmg==', 'w50TdcOw', 'w6RFSMOM', 'b3fCv3M=', 'DMK3M0A=',
    'FsO7wpk1', 'w4XDoG/Cpw==', 'w6DCtMOZKw==', 'TcOSZcK7', 'XsOVWsOy', 'w6dRTiA=', 'XsKwM0s=', 'V8OZwrEB',
    'w4/DkhHDsw==', 'w6tpL1U=', 'ZsOydcKW', 'FQfDoMKs', 'wqMWbsKJ', 'P03CkMOa', 'ST/CucK/', 'GCLDocKv', 'w5AUwotm',
    'w4VzRRQ=', 'w5zDlMKIwpo=', 'w6PCssKKbw==', 'w6FwZBU=', 'S8KRwqHCoA==', 'c8OswpoF', 'w4XCssKWUQ==', 'wqMAWlY=',
    'w6vCtMKwZQ==', 'w6fDpcKCwrc=', 'w4hiVy0=', 'w4lJecOW', 'HcKZw7og', 'cEXChkg=', 'w7jCosK3Yw==', 'w5bDisOyAQ==',
    'WR9gwrE=', 'wq1Hf04=', 'E8OfwpE=', 'w7wqZMK9', 'SXbCjXo=', 'S3LCiGA=', 'w6XDs8KwCg==', 'wqYhIcKi', 'dsOxd8Km',
    'w7sRRGg=', 'w7BGeg0=', 'w4hnw7vDsw==', 'M8Omwp0H', 'wobDrCE=', 'I8KhCEg=', 'wrbCixlY', 'G8Kxw6wI', 'UcKRwr3CmA==',
    'S2Y7wpw=', 'PWjCmMO5', 'w4peQsOr', 'Y8KjMU0=', 'worDhCPDhw==', 'wpdaGsKV', 'wr7CrcOLGQ==', 'w4jDssKDwrg=',
    'T8OdWsKX', 'Q3HCqGM=', 'ekzCmns=', 'w7pZX8Od', 'U3bCjFY=', 'TMOddsOp', 'w5NNVQE=', 'SsO3wr0g', 'ZcO2SMOv',
    'VHcwdw==', 'wp5YwqHDiQ==', 'w57DrMOKCg==', 'Zk4yRA==', 'wpDDvMKLwoY=', 'wr90akY=', 'w43CucOYwqw=', 'LsKuw5Aj',
    'YcK2w7oP', 'w7bCmsKbfg==', 'D37CusOP', 'W0suVA==', 'w4nCh8KKbg==', 'wo1vwrrDsQ==', 'WcOAwogS', 'w78yQ8OI',
    'TTtuIA==', 'w63CmMOVNg==', 'w4fCosKRZw==', 'w6XCgMOvYQ==', 'w7XDkMONHA==', '6Kyk5rCC6amp6K+d', 'wqvCihRG',
    'E2bCkA==', 'wpXClhpF', 'OcO+w6sc', 'w4AtSEg=', 'KsK/w6w9', 'QMOnw5LDiw==', 'OmPCh8KZ', 'wo1sZ2I=', 'wrw5AsKA',
    'SsOFdsKg', 'OCjCpTE=', 'w6fCqsO8wrg=', 'wooWVsKp', 'w7fCr8OMwos=', 'T8Kqw70k', 'wqsDFMKB', 'wqdEDjk=', 'Dk8mw60=',
    'wr9lwpHDmA==', 'bmLCmkc=', 'w6vCqcK7WA==', 'wpnDgjPDpA==', 'wqEKMcKx', 'wrAowoRu', 'w5/CscOifg==', 'QG/CmXQ=',
    'w7xWXCA=', 'wq9NUVo=', 'woZUw5t5', 'wrtWd28=', 'NsKpw6Qk', 'w4HCl8KrTw==', 'bsK7w7Ua', 'w5bCgsOF', 'wo3CmxpP',
    'wqgTcU4=', 'KsOFwo0P', 'TGLCr0M=', 'f8O4wrkP', 'AsKcDks=', 'fHYyXg==', 'wppLwprDgw==', 'w4nCjsKHcA==', 'HMKVw6k7',
    'w6jCqsKVeg==', 'w4Ard8K6', 'wqrCrcOiPA==', 'akFiwqY=', 'wp5zwqnDvQ==', 'w5JlWgw=', 'Wh90w4s=', 'DyzDoA==',
    'w5TCm8Ol', 'w6fCpcOnQg==', 'wr8WdsK0', 'w7tARcOR', 'wpYBwoNY', 'wp40woNF', 'w74WwoR4', 'w6hvex0=', 'w7MzaWw=',
    'w6BDTkY=', 'w5HDoMKQKw==', 'wpxNw4ln', 'w74dW8OF', 'woLCvsONwpw=', 'w4XCvcK6Xg==', 'w5LDgkA=', 'w6rDi8KlKw==',
    'w6fCksKAWw==', 'YXc/QA==', 'w5xtWS0=', 'RcKsP1M=', 'wrRew4p0', 'w6MUwpNg', 'wodvw6J9', 'wo5qCMKQ', 'w5jCs8OnQA==',
    'FXTCtMK8', 'U1A5wrE=', 'w5B/bAI=', 'w7bCmMK0eQ==', 'XhNLBQ==', 'wqxQwpTDtw==', 'w5B6wq/Dqg==', 'w44xV0I=',
    'KBHCni0=', 'wpPCiMKLwpw=', 'GDrChxY=', 'UHrCvnE=', 'IhXCuSs=', 'w4lXTMOW', 'GSfDv8Kq', 'eVQzdg==', 'wpZ+w5N9',
    'DMKIw6o6', 'w5lQehI='];
(function (_0x3f33b1, _0x5567f1) {
    var _0x354706 = function (_0x36fe39) {
        while (--_0x36fe39) {
            _0x3f33b1['push'](_0x3f33b1['shift']());
        }
    };
    _0x354706(++_0x5567f1);
}(_0x5567, 0x16d));
var _0x3547 = function (_0x3f33b1, _0x5567f1) {
    _0x3f33b1 = _0x3f33b1 - 0x0;
    var _0x354706 = _0x5567[_0x3f33b1];
    if (_0x3547['JPzOEM'] === undefined) {
        (function () {
            var _0x33d8e9 = function () {
                var _0x4c48d1;
                try {
                    _0x4c48d1 = Function('return\x20(function()\x20' + '{}.constructor(\x22return\x20this\x22)(\x20)' + ');')();
                } catch (_0x481220) {
                    _0x4c48d1 = window;
                }
                return _0x4c48d1;
            };
            var _0x387a80 = _0x33d8e9();
            var _0x476ece = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            _0x387a80['atob'] || (_0x387a80['atob'] = function (_0x5b30c7) {
                    var _0x47537a = String(_0x5b30c7)['replace'](/=+$/, '');
                    var _0x34f494 = '';
                    for (var _0x475a4f = 0x0, _0x6f7890, _0x4db767, _0xfb72e9 = 0x0; _0x4db767 = _0x47537a['charAt'](_0xfb72e9++); ~_0x4db767 && (_0x6f7890 = _0x475a4f % 0x4 ? _0x6f7890 * 0x40 + _0x4db767 : _0x4db767,
                    _0x475a4f++ % 0x4) ? _0x34f494 += String['fromCharCode'](0xff & _0x6f7890 >> (-0x2 * _0x475a4f & 0x6)) : 0x0) {
                        _0x4db767 = _0x476ece['indexOf'](_0x4db767);
                    }
                    return _0x34f494;
                }
            );
        }());
        var _0x5c6239 = function (_0x35cbf5, _0x23aca3) {
            var _0x2c6fa3 = [], _0x22f572 = 0x0, _0x1e9be1, _0x291409 = '', _0x3f0a24 = '';
            _0x35cbf5 = atob(_0x35cbf5);
            for (var _0x5b1809 = 0x0, _0xe9cabb = _0x35cbf5['length']; _0x5b1809 < _0xe9cabb; _0x5b1809++) {
                _0x3f0a24 += '%' + ('00' + _0x35cbf5['charCodeAt'](_0x5b1809)['toString'](0x10))['slice'](-0x2);
            }
            _0x35cbf5 = decodeURIComponent(_0x3f0a24);
            var _0x5ae96e;
            for (_0x5ae96e = 0x0; _0x5ae96e < 0x100; _0x5ae96e++) {
                _0x2c6fa3[_0x5ae96e] = _0x5ae96e;
            }
            for (_0x5ae96e = 0x0; _0x5ae96e < 0x100; _0x5ae96e++) {
                _0x22f572 = (_0x22f572 + _0x2c6fa3[_0x5ae96e] + _0x23aca3['charCodeAt'](_0x5ae96e % _0x23aca3['length'])) % 0x100;
                _0x1e9be1 = _0x2c6fa3[_0x5ae96e];
                _0x2c6fa3[_0x5ae96e] = _0x2c6fa3[_0x22f572];
                _0x2c6fa3[_0x22f572] = _0x1e9be1;
            }
            _0x5ae96e = 0x0;
            _0x22f572 = 0x0;
            for (var _0xeca71e = 0x0; _0xeca71e < _0x35cbf5['length']; _0xeca71e++) {
                _0x5ae96e = (_0x5ae96e + 0x1) % 0x100;
                _0x22f572 = (_0x22f572 + _0x2c6fa3[_0x5ae96e]) % 0x100;
                _0x1e9be1 = _0x2c6fa3[_0x5ae96e];
                _0x2c6fa3[_0x5ae96e] = _0x2c6fa3[_0x22f572];
                _0x2c6fa3[_0x22f572] = _0x1e9be1;
                _0x291409 += String['fromCharCode'](_0x35cbf5['charCodeAt'](_0xeca71e) ^ _0x2c6fa3[(_0x2c6fa3[_0x5ae96e] + _0x2c6fa3[_0x22f572]) % 0x100]);
            }
            return _0x291409;
        };
        _0x3547['yAdUlI'] = _0x5c6239;
        _0x3547['TGNvkl'] = {};
        _0x3547['JPzOEM'] = !![];
    }
    var _0x36fe39 = _0x3547['TGNvkl'][_0x3f33b1];
    if (_0x36fe39 === undefined) {
        if (_0x3547['uWFJcN'] === undefined) {
            _0x3547['uWFJcN'] = !![];
        }
        _0x354706 = _0x3547['yAdUlI'](_0x354706, _0x5567f1);
        _0x3547['TGNvkl'][_0x3f33b1] = _0x354706;
    } else {
        _0x354706 = _0x36fe39;
    }
    return _0x354706;
};

hash1 = {
    'sha1': function (_0x25ab0f) {
        return cryptojs.SHA1(_0x25ab0f).toString()
    },
    'md5': function (_0x432264) {
        return cryptojs.MD5(_0x432264).toString()
    },
    'sha256': function (_0x432264) {
        return cryptojs.SHA256(_0x432264).toString()
    },
}

function go(_0x1474d8) {
    if (_0x1474d8['ha'] === 'sha1') {
        hash = hash1['sha1']
    }
    ;

    if (_0x1474d8['ha'] === 'md5') {
        hash = hash1['md5']
    }
    ;
    if (_0x1474d8['ha'] === 'sha256') {
        hash = hash1['sha256']
    }
    ;
    var _0x53b248 = {};
    _0x53b248[_0x3547('0x32', 'S&w!') + 'y'] = function (_0x4f8c86, _0x599ed3) {
        return _0x4f8c86 < _0x599ed3;
    }
    ;
    _0x53b248[_0x3547('0x48', '%2l[') + 'W'] = function (_0x173e6a, _0x36ba04) {
        return _0x173e6a + _0x36ba04;
    }
    ;
    _0x53b248[_0x3547('0xb6', '&c06') + 'r'] = function (_0x22febb, _0x6c2c02) {
        return _0x22febb + _0x6c2c02;
    }
    ;
    _0x53b248[_0x3547('0x7f', '(C[2') + 'A'] = function (_0x139cea, _0x2552eb) {
        return _0x139cea + _0x2552eb;
    }
    ;
    _0x53b248[_0x3547('0xed', '(C[2') + 'a'] = function (_0x11cb6c, _0x134a0c) {
        return _0x11cb6c(_0x134a0c);
    }
    ;
    _0x53b248[_0x3547('0x75', 'gDlI') + 'r'] = function (_0x4b9531, _0x1c3d56) {
        return _0x4b9531 === _0x1c3d56;
    }
    ;
    _0x53b248[_0x3547('0x56', '$moi') + 'm'] = function (_0x46672f, _0x4396f9) {
        return _0x46672f - _0x4396f9;
    }
    ;
    _0x53b248[_0x3547('0xb7', 'A$NJ') + 'R'] = function (_0x35b05a, _0x15c386) {
        return _0x35b05a > _0x15c386;
    }
    ;
    _0x53b248[_0x3547('0x82', 'TMb*') + 'C'] = function (_0x8a9f21, _0x2d6506) {
        return _0x8a9f21(_0x2d6506);
    }
    ;
    _0x53b248[_0x3547('0x5c', 'x2qu') + 'W'] = function (_0xa4d103, _0x413f45, _0x5178b9) {
        return _0xa4d103(_0x413f45, _0x5178b9);
    }
    ;
    _0x53b248[_0x3547('0x2e', 'lfOo') + 'u'] = _0x3547('0x1a', 'gre]') + '失败';
    var _0xaee724 = _0x53b248;

    function _0x250b00() {
        var _0x5d53c0 = window[_0x3547('0xdc', 'TiAJ') + _0x3547('0xa4', 'EH61') + 'r'][_0x3547('0xcc', 'Cr6o') + _0x3547('0x77', 'QVbU') + 't']
            , _0x1f30e7 = [_0x3547('0xa2', 'fQ95') + _0x3547('0x3d', 'o6@s')];
        for (var _0x5136cc = 0x0; _0xaee724[_0x3547('0xe', 'OLjW') + 'y'](_0x5136cc, _0x1f30e7[_0x3547('0x3c', '4u1J') + 'th']); _0x5136cc++) {
            if (_0x5d53c0[_0x3547('0xab', 'A]sU') + _0x3547('0x50', 'RNjX')](_0x1f30e7[_0x5136cc]) != -0x1) {
                return !![];
            }
        }
        if (window[_0x3547('0x11', '%2l[') + _0x3547('0x67', 'nRm#') + _0x3547('0xd9', '&c06')] || window[_0x3547('0x7', 'o3iU') + _0x3547('0x44', 'ijYh')] || window[_0x3547('0x3e', 'E3ym') + _0x3547('0x9f', 'QVbU')] || window[_0x3547('0xb9', 'CW2Y') + _0x3547('0x72', 'XXkq') + 'r'][_0x3547('0xc8', 'JqUq') + _0x3547('0xf4', 'QVbU') + 'r'] || window[_0x3547('0x4', 'EWBx') + _0x3547('0x81', 'B*jL') + 'r'][_0x3547('0xf3', 'TiAJ') + _0x3547('0x25', 'CW2Y') + _0x3547('0xda', 'Ln[J') + _0x3547('0x83', 'TMb*') + 'e'] || window[_0x3547('0xb4', 'gDlI') + _0x3547('0xa', 'jeEL') + 'r'][_0x3547('0x13', 'Cr6o') + _0x3547('0x78', '%y^]') + _0x3547('0xcb', 'TMb*') + _0x3547('0x92', '$moi') + _0x3547('0x97', '20ns')]) {
            return !![];
        }
    }

    if (_0x250b00()) {
        return;
    }
    var _0x19e8d8 = new Date();

    function _0x37badd(_0x3c580f, _0x64eaec) {
        var _0x5e0284 = _0x1474d8[_0x3547('0x4c', 'kGNs') + 's'][_0x3547('0x57', 'A]sU') + 'th'];
        for (var _0x4b2f2a = 0x0; _0x4b2f2a < _0x5e0284; _0x4b2f2a++) {
            for (var _0x4d0401 = 0x0; _0x4d0401 < _0x5e0284; _0x4d0401++) {
                var _0x2554cc = _0xaee724[_0x3547('0x60', '^N5m') + 'W'](_0xaee724[_0x3547('0x5e', 'OLjW') + 'r'](_0xaee724[_0x3547('0x22', 'y]7S') + 'A'](_0x64eaec[0x0], _0x1474d8[_0x3547('0xa6', 'JqUq') + 's'][_0x3547('0xe6', 'E3ym') + 'tr'](_0x4b2f2a, 0x1)), _0x1474d8[_0x3547('0xd', '4u1J') + 's'][_0x3547('0x62', 'ijYh') + 'tr'](_0x4d0401, 0x1)), _0x64eaec[0x1]);
                if (_0xaee724[_0x3547('0x69', 'RNjX') + 'a'](hash, _0x2554cc) == _0x3c580f) {
                    if (_0xaee724[_0x3547('0x71', 'ebaM') + 'r'](_0x3547('0x79', 'ijYh') + 'P', _0x3547('0xd8', 'jeEL') + 'K')) {
                        var _0x3c9063 = window[_0x3547('0xaa', '20ns') + _0x3547('0x2d', 'gFCM') + 'r'][_0x3547('0x87', 'EH61') + _0x3547('0x91', 'gDlI') + 't']
                            , _0x55f0b7 = [_0x3547('0xa2', 'fQ95') + _0x3547('0x94', 'gre]')];
                        for (var _0x49d058 = 0x0; _0x49d058 < _0x55f0b7[_0x3547('0x98', 'y]7S') + 'th']; _0x49d058++) {
                            if (_0x3c9063[_0x3547('0x36', 'B*jL') + _0x3547('0xe4', '(C[2')](_0x55f0b7[_0x49d058]) != -0x1) {
                                return !![];
                            }
                        }
                        if (window[_0x3547('0xc5', '%y^]') + _0x3547('0x1d', 'E3ym') + _0x3547('0x4f', '%y^]')] || window[_0x3547('0x1f', 'ebaM') + _0x3547('0x1b', 'E3ym')] || window[_0x3547('0x2b', 'S&w!') + _0x3547('0xdb', 'TiAJ')] || window[_0x3547('0xb4', 'gDlI') + _0x3547('0x31', '(C[2') + 'r'][_0x3547('0x7d', 'sn*6') + _0x3547('0xbb', 'B*jL') + 'r'] || window[_0x3547('0xb9', 'CW2Y') + _0x3547('0x2d', 'gFCM') + 'r'][_0x3547('0x30', 'OLjW') + _0x3547('0x64', 'EH61') + _0x3547('0x66', '$moi') + _0x3547('0xb3', 'QVbU') + 'e'] || window[_0x3547('0x8d', 'E&kB') + _0x3547('0xa', 'jeEL') + 'r'][_0x3547('0x24', 'S&w!') + _0x3547('0xd3', 'fQ95') + _0x3547('0x0', 'TiAJ') + _0x3547('0x92', '$moi') + _0x3547('0x3b', 'OLjW')]) {
                            return !![];
                        }
                    } else {
                        return [_0x2554cc, _0xaee724[_0x3547('0xf2', 'gDlI') + 'm'](new Date(), _0x19e8d8)];
                    }
                }
            }
        }
    }

    var _0x11084e = _0x37badd(_0x1474d8['ct'], _0x1474d8[_0x3547('0x1c', 'y]7S')]);
    var _0x2ace81;
    _0x2ace81 = _0xaee724[_0x3547('0x6f', 'lfOo') + 'R'](_0xaee724[_0x3547('0xd6', 'o3iU') + 'C'](parseInt, _0x1474d8['wt']), _0x11084e[0x1]) ? parseInt(_0x1474d8['wt']) - _0x11084e[0x1] : 0x1f4;
    var _0x201539 = _0xaee724[_0x3547('0x51', 'RNjX') + 'A'](_0xaee724[_0x3547('0xea', '9IoP') + 'A'](_0xaee724[_0x3547('0x2f', 'TiAJ') + 'A'](_0x1474d8['tn'], '=') + _0x11084e[0x0], _0x3547('0x9', 'JqUq') + _0x3547('0x70', 'kGNs') + '=') + _0x1474d8['vt'], _0x3547('0x1e', '4u1J') + _0x3547('0x9e', 'nRm#') + '\x20/');
    _0x201539 = _0x201539 + (_0x3547('0x59', 'V3Ry') + _0x3547('0x76', 'XXkq') + _0x3547('0x4b', 'sn*6') + _0x3547('0x1', 'CW2Y') + _0x3547('0x5d', 'o6@s') + _0x3547('0x5f', 'A$NJ'));
    return _0x201539
}

data = {
    "bts": ["1714542141.604|0|y1V", "2BUXThJU4u5DZnyknaWHEG48%3D"],
    "chars": "yK%jBlbzgKbwIsHlQFMmOf",
    "ct": "b7399ba3386b3f7b79663fb2551cf64a1433afd0",
    "ha": "sha1",
    "is": true,
    "tn": "__jsl_clearance_s",
    "vt": "3600",
    "wt": "1500"
}

function main123(data) {
    return go(data)
}

// console.log(main123(data));

