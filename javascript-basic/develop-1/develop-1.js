// ? studentList === 학생들 이름목록
// ? length === 길이값, 총원
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
for(let i = 0; i < studentList.length; i++) {
  if(studentList[i] === "홍문기") {
    console.log("나는 " + studentList[i] + " 이다!");
  } else {
    console.log(studentList[i]);
  }
}