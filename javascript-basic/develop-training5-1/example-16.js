/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 16. '_pokemon' 배열의 중간지점에 해당하는 인덱스 이후의 원소를 모두 제거해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽', '물짱이'];
let midpoint = Math.floor(_pokemon.length / 2);
for (let i = _pokemon.length - 1; i >= midpoint; i--) {
  _pokemon.length = i;
}
console.log(_pokemon);