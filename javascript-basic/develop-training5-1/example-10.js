/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 10. '_pokemon' 배열의 길이(length 프로퍼티 사용제외)를 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽'];
let length = 0;
let index = 0; // index 변수가 사실상 length와 같은 셈으로 처리되었다.
while (typeof _pokemon[index] !== 'undefined') {
  length++;
  index++;
}
console.log(length);