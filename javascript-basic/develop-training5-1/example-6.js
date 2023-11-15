/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 6. '_pokemon' 배열의 원소들의 순서를 뒤집어 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽'];
let reversedPokemon = [];
for (let i = _pokemon.length -1; i >= 0; i--) {
  for (let j = reversedPokemon.length; j <= reversedPokemon.length; i++) {
    if (j === reversedPokemon.length) {
      reversedPokemon[j] = _pokemon[i];
      break; // break를 사용하지 않으면 무한루프가 발생
    }
  }
};
console.log(reversedPokemon);