/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 15. '_pokemon' 배열의 모든 원소마다 쉼표를 추가하여
// 하나의 문자열로 합쳐 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨'];
let joinedString = '';
for (let i = 0; i < _pokemon.length; i++) {
  joinedString += _pokemon[i];
  if (i < _pokemon.length -1) {
    joinedString += ', ';
  }
}
console.log(joinedString);