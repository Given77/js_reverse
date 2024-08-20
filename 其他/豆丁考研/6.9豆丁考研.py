import json

import requests
import execjs
headers = {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Content-Type': 'application/json',
    'Origin': 'https://kaoyan.docin.com',
    'Pragma': 'no-cache',
    'Referer': 'https://kaoyan.docin.com/',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
    'X-Application': 'Pdfreader.Web',
    'X-Nonce': '26d88c1d-7cc9-2dbd-f8a4-2e5e0eb1051b',
    'X-Sign': '785C808046070B73C9D60038351DACBE',
    'X-Timestamp': '1717914772',
    'X-Token': 'null',
    'X-Version': 'V2.2',
    'sec-ch-ua': '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
}

json_data = {
    'SearchKeyword': ' 0620',
    'UniversityCode': '',
    'MajorCode': '',
    'PageIndex': 2,
    'PageSize': 30,
}

with open('douding.js', 'r', encoding='utf8') as f:
    js_code = f.read()
    ctx = execjs.compile(js_code)
    result = ctx.call('returnData', json.dumps(json_data))


headers['X-Sign'] = result['sign']
headers['X-Timestamp'] = str(result['timestamp'])
headers['X-Nonce'] = result['nonce']
response = requests.post('https://www.handebook.com/api/web/document/list', headers=headers, json=json_data)

print(response.json())
