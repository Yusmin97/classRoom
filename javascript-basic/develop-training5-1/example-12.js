/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 12. '_pokemon' 배열의 모든 포켓몬 이름 뒤에 'Lv2'를 붙여
// 새로운 배열을 만들어 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨'];
let upgradedPokemon = [];
for (let i = 0; i < _pokemon.length; i++) {
  for (let j = upgradedPokemon.length; j <= upgradedPokemon.length; j++) {
    if (j === upgradedPokemon.length) {
      upgradedPokemon[j] = _pokemon[i] + 'Lv2';
      break;
    }
  }
}
console.log(upgradedPokemon);