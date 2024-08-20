import requests
from lxml import etree
import subprocess
from functools import partial
import execjs
from loguru import logger

# 处理execjs编码报错问题, 需在 import execjs之前
subprocess.Popen = partial(subprocess.Popen, encoding="utf-8")

requests = requests.session()
url = "http://www.fangdi.com.cn/index.html"
headers = {
    'Host': 'www.fangdi.com.cn',
    'Referer': 'http://www.fangdi.com.cn/service/service_law_detail_img2.html',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
}


def get_one_html():
    response = requests.get(url, headers=headers)
    logger.info("返回第一次响应的cookie:{}".format(response.cookies.get_dict()))
    obj_html = etree.HTML(response.text)
    content_data = obj_html.xpath('//meta[2]/@content')[0]
    func_code = obj_html.xpath('//script[2]/text()')[0]
    return content_data, func_code


def second_request():
    content_data, func_code = get_one_html()
    with open('瑞数4逆向.js', encoding='utf-8') as f:
        js_code = f.read().replace('"content_code"', content_data).replace("'func_code'", func_code)
    cookie = execjs.compile(js_code).call('get_cookie')
    cookies = {'FSSBBIl1UgzbN7N80T': cookie.split(';')[0].split('=')[-1]}
    logger.info("瑞数4-->返回加密的cookie:{}".format(cookies['FSSBBIl1UgzbN7N80T']))
    # 构建第二次请求，加上加密的cookie
    response = requests.get(url, headers=headers, cookies=cookies)
    response.encoding = 'utf-8'
    logger.info("返回响应的状态码:{}".format(response.status_code))
    logger.info("返回响应的数据:{}".format(response.text))


if __name__ == '__main__':
    second_request()
