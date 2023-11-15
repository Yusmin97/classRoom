/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 11. '_pokemon' 배열에서 특정 인덱스의 포켓몬 이름을 새로운 이름으로 변경해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽'];
let indexToChange = 1;
let newName = '마자용';
for (let i = 0; i < _pokemon.length; i++) {
  if (i === indexToChange) {
    _pokemon[i] = newName;
    break
  }
}
console.log(_pokemon);