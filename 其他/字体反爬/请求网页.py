import re

import feapder
import io
from fontTools.ttLib import TTFont
from lxml import etree


class AirSpiderDemo(feapder.AirSpider):
    def __init__(self, thread_count=None):
        super().__init__(thread_count)

    def start_requests(self):
        url = "https://www.shixiseng.com/interns"
        params = {
            "page": "3",
            "type": "intern",
            "keyword": "互联网/IT",
            "area": "",
            "months": "",
            "days": "",
            "degree": "",
            "official": "",
            "enterprise": "",
            "salary": "-0",
            "publishTime": "",
            "sortType": "",
            "city": "全国",
            "internExtend": ""
        }
        yield feapder.Request(url, params=params, method="GET")

    def download_midware(self, request):
        request.headers = {
            "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            "accept-language": "zh-CN,zh;q=0.9,en;q=0.8",
            "cache-control": "no-cache",
            "pragma": "no-cache",
            "priority": "u=0, i",
            "referer": "https://www.bing.com/",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36"
        }
        request.cookies = {
            "utm_source_first": "PC",
            "utm_source": "PC",
            "utm_campaign": "PC",
            "position": "pc_default",
            "__jsluid_s": "86aa815fa76e9aa7f7c38e4e2287d263",
            "Hm_lvt_03465902f492a43ee3eb3543d81eba55": "1723703932",
            "Hm_lpvt_03465902f492a43ee3eb3543d81eba55": "1723703932",
            "HMACCOUNT": "84E7766C058DAEAE",
            "bottom_banner": "true",
            "SXS_XSESSION_ID": "\"2|1:0|10:1723703939|15:SXS_XSESSION_ID|48:ZWNjNmFlZDQtZWYxZi00M2MyLWIxYmUtOWVlZTg2M2M0Yjhj|dc5e134a721d315bcb02d788f2c85993d710e790322dff8c827c3ed645f06367\"",
            "SXS_XSESSION_ID_EXP": "\"2|1:0|10:1723703939|19:SXS_XSESSION_ID_EXP|16:MTcyMzc5MDMzOQ==|80f5f982782a25839870608d01f591888b64fc000aca16907842f92219e9f89c\""
        }
        return request

    def parse(self, request, response):
        font_url = ('https://www.shixiseng.com' +
                    re.search(r'@font-face \{\s+font-family: myFont;\s+src: url\((.*?)\)', response.text).group(1))
        yield feapder.Request(font_url, callback=self.parse_font, web_page=response)

    def parse_font(self, request, response):
        # with open('font.woff', 'wb') as f:
        #     f.write(response.content)
        font_file = io.BytesIO(response.content)
        font = TTFont(font_file)
        font_dict = {}
        for k, v in font.getBestCmap().items():
            if v[3:]:
                con = '\\u00' + v[3:] if len(v[3:]) == 2 else '\\u' + v[3:]
                val = con.encode('utf-8').decode('unicode_escape')
                key = hex(k).replace('0x', '&#x')
                font_dict[key] = val

        data = request.web_page.text
        for k, v in font_dict.items():
            print(k, v)
            data = data.replace(k, v)
            # print(data)
        html_data = etree.HTML(data)
        div_list = html_data.xpath('//div[@class="clearfix intern-detail"]')
        for i in div_list:
            comp = i.xpath('./div/p/a[@class="title ellipsis"]/text()')[0]
            price = i.xpath('.//span[@class="day font"]/text()')[0]
            title = i.xpath('.//div[@class="f-l intern-detail__job"]/p/a[1]/text()')[0]
            print(comp, price, title)
        # html = request.web_page.xpath()


if __name__ == "__main__":
    AirSpiderDemo(thread_count=1).start()
