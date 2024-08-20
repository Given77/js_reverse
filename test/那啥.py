# 直接使用Unicode escape序列
unicode_string = '\u4e92'
print(unicode_string)

encoded_string = '\\u751f'
decoded_string = bytes(encoded_string, "utf-8").decode("unicode_escape")
# decoded_string = encoded_string.encode('utf8').decode("unicode_escape")

print(decoded_string)