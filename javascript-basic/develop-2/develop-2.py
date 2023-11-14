student_list = [
  "김우진",
  "김현",
  "방승희",
  "변호녕",
  "소사무엘",
  "송영준",
  "신동현",
  "오승민",
  "유승민",
  "윤준현",
  "이민구",
  "이유안",
  "이은정",
  "정영식",
  "최성민",
  "최은철",
  "홍문기"
]

def develop_practics(array, name, start_text, end_text) :
  for item in array:
    if item == name:
      print(f"{start_text}{item}{end_text}")
    else:
      print(item)

develop_practics(student_list, "유승민", "나는 ", " 이다!")