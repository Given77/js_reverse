import requests
from lxml import etree
import execjs
from loguru import logger

headers = {
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'accept-language': 'zh-CN,zh;q=0.9',
    'cache-control': 'no-cache',
    'pragma': 'no-cache',
    'priority': 'u=0, i',
    'referer': 'https://sugh.szu.edu.cn/',
    'sec-ch-ua': '"Chromium";v="124", "Google Chrome";v="124", "Not-A.Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'document',
    'sec-fetch-mode': 'navigate',
    'sec-fetch-site': 'same-origin',
    'sec-fetch-user': '?1',
    'upgrade-insecure-requests': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
}
url = 'https://sugh.szu.edu.cn/Html/News/Columns/7/Index.html'


def first_requests():
    response = requests.get(url=url, headers=headers)
    logger.info("返回第一次响应的cookie:{}".format(response.cookies.get_dict()))
    one_cookie = response.cookies.get_dict()
    obj_html = etree.HTML(response.text)
    content_data = obj_html.xpath('//meta[2]/@content')[0]
    func_code = obj_html.xpath('//script[2]/text()')[0]
    return content_data, func_code, one_cookie


def second_requests():
    content_data, func_code, cookies = first_requests()
    with open('瑞数5--深圳大学逆向.js', encoding='utf-8') as f:
        js_code = f.read().replace('"content_code"', content_data).replace("'func_code'", func_code)
    two_cookie = execjs.compile(js_code).call("get_cookie").split(';')[0].split('=')[1]
    logger.info("返回瑞数5加密的cookie:{}".format(two_cookie))
    cookies['ihkYnttrQXfVP'] = two_cookie
    response = requests.get(url=url, headers=headers, cookies=cookies)
    response.encoding = 'utf-8'
    logger.info("返回响应的状态码:{}".format(response.status_code))
    logger.info("返回响应的数据:{}".format(response.text))


if __name__ == '__main__':
    second_requests()
