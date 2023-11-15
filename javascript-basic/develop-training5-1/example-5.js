/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 5. '_pokemon' 배열에서 특정 포켓몬이 있는지 확인하고 결과를 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨'];
let checkPokemon = '파이리';
let isExist = false;
for (let i = 0; i < _pokemon.length; i++) {
  if (_pokemon[i] === checkPokemon) {
    isExist = true;
    break;
  }
};
console.log(isExist)