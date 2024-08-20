from selenium import webdriver

options = webdriver.ChromeOptions()
# options.add_argument("--headless")
driver = webdriver.Chrome(options=options)
driver.get("file:///D:\APythonProject\js逆向学习\其他\补环境\补环境.html")
input()
driver.close()
