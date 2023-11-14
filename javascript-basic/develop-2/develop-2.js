const studentList = [
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
];

function developPractics(array, name, startText, endText) {
  for (let i=0; i < array.length; i++){
    if(array[i] === name) {
      console.log(startText + array[i] + endText);
    } else {
      console.log(array[i]);
    }
  }
}

developPractics(studentList, "유승민", "나는 ", " 이다!");