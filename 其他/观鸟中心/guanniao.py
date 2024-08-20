import requests
import execjs


class GN:
    def __init__(self):
        self.headers = {
            'Accept': 'application/json, text/javascript, */*; q=0.01',
            'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'Origin': 'https://www.birdreport.cn',
            'Pragma': 'no-cache',
            'Referer': 'https://www.birdreport.cn/',
            'Sec-Fetch-Dest': 'empty',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'same-site',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
            'requestId': f'',
            'sec-ch-ua': '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"Windows"',
            'sign': f'',
            'timestamp': f'',
        }
        self.data = f''

    def get_header(self, page):
        with open('gn_headers.js', 'r', encoding='utf-8') as f:
            js_code = f.read()
            return execjs.compile(js_code).call('getHeaders', page)

    def get_data(self, page):
        data = self.get_header(page)
        self.headers['sign'] = data['sign']
        self.headers['timestamp'] = str(data['timestamp'])
        self.headers['requestId'] = data['requestId']
        self.data = data['data']
        url = 'https://api.birdreport.cn/front/activity/search'
        response = requests.post(url, headers=self.headers, data=self.data).json()
        return response

    def decode_data(self, data):
        with open('gn_headers.js', 'r', encoding='utf-8') as f:
            js_code = f.read()
            return execjs.compile(js_code).call('decode', data)

    def run(self):
        for i in range(1, 6):
            data = self.get_data(i)['data']
            print(self.decode_data(data))


if __name__ == '__main__':
    GN().run()

