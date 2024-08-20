import requests
import json
import execjs

# address: https://fuwu.nhsa.gov.cn/nationalHallSt/#/search/medical?code=90000&flag=false&gbFlag=true
with open('decrypt.js', 'r', encoding='utf8') as f:
    js_code = f.read()
func = execjs.compile(js_code).call('hello')
headers = {
    "Accept": "application/json",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Content-Type": "application/json",
    "Origin": "https://fuwu.nhsa.gov.cn",
    "Pragma": "no-cache",
    "Referer": "https://fuwu.nhsa.gov.cn/nationalHallSt/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "X-Tingyun": "c=B|4Nl_NnGbjwY;x=39e261ce0eb044c4",
    "channel": "web",
    "contentType": "application/x-www-form-urlencoded",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "x-tif-nonce": "D9yUBu8c",
    "x-tif-paasid": "undefined",
    "x-tif-signature": "6ed45831ae95deccf644803144f3e7ab8a12bcd91ef982b45672852e914a2813",
    "x-tif-timestamp": "1722664805"
}
url = "https://fuwu.nhsa.gov.cn/ebus/fuwu/api/nthl/api/CommQuery/queryFixedHospital"
data = {
    "data": {
        "data": {
            "encData": func['encData']
        },
        "appCode": "T98HPCGN5ZVVQBS8LZQNOAEXVI9GYHKQ",
        "version": "1.0.0",
        "encType": "SM4",
        "signType": "SM2",
        "timestamp": func['timestamp'],
        "signData": func['signData'],
    }
}
data = json.dumps(data, separators=(',', ':'))
response = requests.post(url, headers=headers, data=data)
json_data = response.json()

decrypt_data = execjs.compile(js_code).call('decrypt', json_data)

data_list = decrypt_data['list']
for data in data_list:
    print(data)

