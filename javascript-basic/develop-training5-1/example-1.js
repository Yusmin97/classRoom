/** ? Develop-Training-5 크드트 게임 문제풀이
 */
// 1. 포켓몬스터 배열 '_pokemon'에 새로운 포켓몬을 추가해주세요.
// if나 for문을 사용하여 _pokemon배열의 마지막에 새로운 포켓몬 이름을 추가하세요.
let _pokemon = ['피카츄', '파이리', '이상해씨'];
let newPokemon = '꼬부기';
for (let i = 0; i <= _pokemon.length; i++) {
  if (i === _pokemon.length) {
    _pokemon[i] = newPokemon;
    break; // break를 사용하지 않으면 무한루프가 발생
  }
};
console.log(_pokemon);