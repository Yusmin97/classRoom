# 텍스트 파일 만들기

list_test = ["유승민", "소사무엘"]

for i in range(len(list_test)):
  file_name = list_test[i] + ".txt"
  file_create = open(file_name, 'w', encoding="utf-8")
  file_create.write('텍스트 내용입니다.')
  file_create.close()