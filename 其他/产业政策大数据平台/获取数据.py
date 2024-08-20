import feapder
import execjs


class AirSpiderDemo(feapder.AirSpider):
    def start_requests(self):
        url = "https://www.spolicy.com/info_api/policyinfoSearchController/searchEsPolicyinfo"
        data = execjs.compile(open('./decrypt.js', 'r', encoding='utf-8').read()).call('encrypt')
        data = bytes(data['data'])
        yield feapder.Request(url, data=data, method="POST")

    def download_midware(self, request):
        request.headers = {
            "Accept": "application/json, text/plain, */*",
            "Accept-Language": "zh-CN,zh;q=0.9,en;q=0.8",
            "Cache-Control": "no-cache",
            "Connection": "keep-alive",
            "Content-Type": "application/octet-stream",
            "Origin": "https://www.spolicy.com",
            "Pragma": "no-cache",
            "Referer": "https://www.spolicy.com/search?keyword=%E6%95%B0%E5%AD%97%E7%BB%8F%E6%B5%8E&type=0&key=c4105aa8-af74-4bfb-a222-43617ed132dc",
            "Sec-Fetch-Dest": "empty",
            "Sec-Fetch-Mode": "cors",
            "Sec-Fetch-Site": "same-origin",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"99\", \"Google Chrome\";v=\"127\", \"Chromium\";v=\"127\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\""
        }
        request.cookies = {
            "Hm_lvt_6146f11e5afab71309b3accbfc4a932e": "1722826900,1722846786,1722867980",
            "HMACCOUNT": "FEB3822C49CF7D25",
            "JSESSIONID": "126A8FB0DB475F150407F3A9110B46F4",
            "Hm_lpvt_6146f11e5afab71309b3accbfc4a932e": "1722910005"
        }
        return request

    def parse(self, request, response):
        print(response.text)
        print(response)


if __name__ == "__main__":
    AirSpiderDemo(thread_count=1).start()
