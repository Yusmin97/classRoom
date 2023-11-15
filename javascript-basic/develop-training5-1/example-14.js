/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 14. '_pokemon' 배열에서 포켓몬스터 이름 '피'로 시작하는 조건에 알맞는
// 포켓몬 중 찾은 목록에서 두번째 포켓몬을 찾아 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '피죤', '피츄', '피츄리나'];
let filteredPokemon = [];
for (let i = 0; i < _pokemon.length; i++) {
  if (_pokemon[i][0] === '피') {
    for (let j = filteredPokemon.length; j <= filteredPokemon.length; j++) {
      if (j === filteredPokemon.length) {
        filteredPokemon[j] = _pokemon[i];
        break;
      }
    }
  }
};

let secondPokemon;
if (filteredPokemon.length >= 2) {
  secondPokemon = filteredPokemon[1];
} else {
  secondPokemon = '두번째 포켓몬 없음';
};
console.log(secondPokemon);