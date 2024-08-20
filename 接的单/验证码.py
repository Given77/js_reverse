import json

import requests
import base64

headers = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
    "Authorization": "pM9MBBi21mchdie6422VEokQkoDofsp1Qmi7hyBz5qw=",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Pragma": "no-cache",
    "Referer": "https://tiaokuan.iachina.cn/",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
    "identity": "4qSP7hBnlsBE9wACSs0DPvrvdRH779K6ffuSoLj8Kwg=",
    "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\""
}
cookies = {
    "insert_cookie": "33487981"
}
url = "https://tiaokuan.iachina.cn/sinopipi/captcha"
response = requests.get(url, headers=headers, cookies=cookies)

img = response.json().get('img')
with open('img.png', 'wb') as f:
    f.write(base64.b64decode(img))
