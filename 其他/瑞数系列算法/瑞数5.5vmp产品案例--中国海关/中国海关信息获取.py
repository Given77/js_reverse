# encoding: utf-8
# @author: 龙鹏辉
# @file: 中国海关信息获取.py
# @time: 2024/6/8 16:35
import requests
import execjs
import re
from lxml import etree
from loguru import logger

url = 'http://www.customs.gov.cn/'
headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh-CN,zh;q=0.9',
    'Cache-Control': 'no-cache',
    'Connection': 'keep-alive',
    'Pragma': 'no-cache',
    'Referer': 'http://www.customs.gov.cn/',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36',
}


def first_request():
    response = requests.get(url=url, headers=headers, verify=False)
    logger.info("返回第一次响应的cookie:{}".format(response.cookies.get_dict()['__jsluid_h']))
    __jsluid_h = response.cookies.get_dict()['__jsluid_h']
    coo = re.findall("document.cookie=(.*?);location", response.text)[0]
    # cookie取值之后前面的不用
    __jsl_clearance = execjs.eval(coo).split('=')[1].split(';')[0]
    logger.info("返回第一次执行的cookie:{}".format(__jsl_clearance))
    cookies = {'__jsluid_h': __jsluid_h, '__jsl_clearance': __jsl_clearance, }
    res = requests.get(url, headers=headers, cookies=cookies)
    return res.text, cookies


def second_request():
    response, cookies = first_request()
    go_code = execjs.eval(re.findall(';go\((.*?)\)</s', response)[0])
    js = execjs.compile(open('加速乐cookie.js', encoding='utf-8').read())
    __jsl_clearance = js.call('main123', go_code).split('=')[1].split(';')[0]
    logger.info("返回第二次执行的cookie:{}".format(__jsl_clearance))
    cookies['__jsl_clearance'] = __jsl_clearance
    return cookies


def third_request():
    cookies = second_request()
    response = requests.get(url=url, headers=headers, cookies=cookies)
    logger.info("返回第三次响应的cookie:{}".format(response.cookies.get_dict()['AV7KYchI7HHaS']))
    cookies['AV7KYchI7HHaS'] = response.cookies.get_dict()['AV7KYchI7HHaS']
    obj_html = etree.HTML(response.text)
    content_code = obj_html.xpath('//meta[2]/@content')[0]
    ts_code = obj_html.xpath('//script[1]/text()')[0]
    return content_code, ts_code, cookies


def end_request():
    content_code, ts_code, cookies = third_request()
    with open('中国海关逆向.js', encoding='utf-8') as f:
        js_code = f.read().replace('"content_code"', content_code).replace("'ts_code'", ts_code)
    two_cookie = execjs.compile(js_code).call("get_cookie").split(';')[0].split('=')[1]
    logger.info("返回瑞数5.5vmp加密的cookie:{}".format(two_cookie))
    cookies['AV7KYchI7HHaT'] = two_cookie
    response = requests.get(url=url, headers=headers, cookies=cookies)
    logger.info("返回辉最后请求响应状态码:{}".format(response.status_code))
    logger.info("返回请求响应的数据:{}".format(response.text))


if __name__ == '__main__':
    end_request()

# print(first_request())