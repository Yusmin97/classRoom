/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 2. '_pokemon' 배열의 마지막 원소를 제거하고, 그 원소의 이름을 출력하세요
let _pokemon = ['피카츄', '파이리', '이상해씨'];
let lastPokemon = '';
for (let i = 0; i < _pokemon.length; i++) {
  if (i === _pokemon.length -1) {
    lastPokemon = _pokemon[i];
    _pokemon.length = _pokemon.length -1;
  }
};
console.log(_pokemon);
console.log(lastPokemon);
