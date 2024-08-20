delete __dirname
delete __filename

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
            // 'if(typeof target[property] === "undefined"){debugger}' +
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

proxy_array = ['window', 'document', 'location', 'navigator', 'history', 'screen'];

// 补window环境
window = global;
window.top = window;
window.name = '$_YWTU=rCgXuZzgAbzQgu9CCOBiuIITdTwOckb18cvAFE1NwD7&$_YVTX=Wsl&vdFm='
window.addEventListener = function (args) {
    console.log('window的addEventListener接受的参数:', args)
}
window.HTMLFormElement = function () {}
window.XMLHttpRequest = function () {
    debugger;
    return {
        onabort: null,
        onerror: null,
        onload: null,
        onloadend: null,
        onloadstart: null,
        onprogress: null,
        onreadystatechange: mull,
        ontimeout: null,
        readyState: 0,
        response: "",
        responseText: "",
        responseType: "",
        responseURL: "",
        responseXML: null,
        status: 0,
        statusText: "",
        timeout: 0,
        toString: function () {
            return 'function XMLHttpRequest() { [native code] }'

        }
    }
};
window. DOMParser =function (){}
window.localStorage =function (){}
window.sessionStorage=function (){}
// 补document环境
document = {
    createElement: function (args) {
        console.log('document的createElement接受的参数:', args)
        if (args == 'div') {
            return {
                getElementsByTagName: function (args) {
                    console.log('document的createElement的getElementsByTagName接受的参数:', args)
                    return []
                }
            }
        }
        if (args == 'form') {
            return {length: 0}
        }
        if (args == 'a') {
            return {length: 0}
        }

    },
    getElementsByTagName: function (args) {
        console.log('document的getElementsByTagName接受的参数:', args)
        if (args == 'script') {
            return [
                {
                    getAttribute: function (args) {
                        console.log('document的getElementsByTagName的getAttribute接受的参数:', args)
                        if (args == 'r') {
                            return 'm'
                        }
                    },
                    parentElement: {
                        removeChild: function (args) {
                            console.log('document的getElementsByTagName的removeChild接受的参数:', args)
                        }
                    }
                },
                {
                    getAttribute: function (args) {
                        console.log('document的getElementsByTagName的getAttribute接受的参数:', args)
                        if (args == 'r') {
                            return 'm'
                        }
                    },
                    parentElement: {
                        removeChild: function () {
                            console.log('document的getElementsByTagName的removeChild接受的参数:', args)
                        }
                    }
                }
            ]
        }
        if (args == 'meta') {
            debugger
            return [
                {},
                {
                    getAttribute: function (args) {
                        if (args == 'r') {
                            return 'm'
                        }
                    },
                    parentNode: {
                        removeChild: function (args) {
                            console.log('document的getElementsByTagName的meta的parentNode接受的参数:', args)

                        }
                    },
                    content: '"content_code"'
                }
            ]
        }
        if (args == 'base') {
            return []
        }

    },
    getElementById: function (args) {
        console.log('document的getElementById接受的参数:', args)
    },
    addEventListener: function (args) {
        console.log('document的addEventListener接受的参数:', args)
    },
    attachEvent: undefined,
    documentElement: {
        addEventListener: function (res) {
            console.log("当前documentElement.addEventListener接受的值:", res)
        }
    },
}

location = {
    "ancestorOrigins": {},
    "href": "http://www.customs.gov.cn/",
    "origin": "http://www.customs.gov.cn",
    "protocol": "http:",
    "host": "www.customs.gov.cn",
    "hostname": "www.customs.gov.cn",
    "port": "",
    "pathname": "/",
    "search": "",
    "hash": ""
}
navigator = {
    appCodeName: "Mozilla",
    appName: "Netscape",
    languages: ["zh-CN", "zh"],
    appVersion: "5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    connection: {
        downlink: 10,
        effectiveType: "4g",
        rtt: 100,
        saveData: false,
    },
    webdriver: false,
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    vendor: "Google Inc.",
    webkitPersistentStorage: {},
    platform: "Win32",
}

setTimeout = function () {
}
setInterval = function () {
}
get_enviroment(proxy_array)

'ts_code'
require("./func_code.js")

function get_cookie() {
    return document.cookie
}
console.log(get_cookie())
console.log(get_cookie().length);