import requests

data = {
    "group": "rpc-test",
    "action": "ths",
}
res = requests.get("http://127.0.0.1:5612/business-demo/invoke", params=data)
print(res.text)