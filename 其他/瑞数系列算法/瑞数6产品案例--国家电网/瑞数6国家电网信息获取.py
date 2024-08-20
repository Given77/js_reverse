import execjs
import requests
from lxml import etree
from loguru import logger


class GJDW():
    def __init__(self):
        self.url = 'http://www.sgcc.com.cn/html/sgcc/col2022121225/column_2022121225_1.shtml'
        self.headers = {
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Pragma": "no-cache",
            "Upgrade-Insecure-Requests": "1",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36 Edg/125.0.0.0"
        }
        self.js_code = open('国家电网逆向.js', encoding='utf-8').read()
        self.requests = requests.session()

    def get_cookie(self, url):
        res = self.requests.get(url, headers=self.headers)
        logger.info("返回第一次响应的cookie:{}".format(res.cookies.get_dict()))
        html_data = etree.HTML(res.text)
        ts_code = html_data.xpath('//script[1]/text()')[0]
        meta_content = html_data.xpath('//meta[2]/@content')[0]
        js = execjs.compile(self.js_code.replace('"ts_code"', ts_code).replace('"content1"', meta_content))
        # print(js.call('get_cookie'))
        cookies = {
            js.call('get_cookie').split('=')[0]: js.call('get_cookie').split('=')[1]
        }
        return cookies

    def get_data(self, cookies):
        res = self.requests.get(url=self.url, headers=self.headers, cookies=cookies)
        logger.info("返回响应的状态码:{}".format(res.status_code))
        logger.info("返回响应的数据:{}".format(res.text.replace('\u00A0','')))

    def main(self):
        cookies = self.get_cookie(self.url)
        logger.info("返回瑞数6加密的cookie值:{}".format(cookies['Rq9ZlcGkVvC3T']))
        self.get_data(cookies)


if __name__ == '__main__':
    gj = GJDW()
    gj.main()
