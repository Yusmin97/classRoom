/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 4. '_pokemon' 배열에서 이름이 '리'로 시작하는 포켓몬만을 새로운 배열에
// 담아 출력해 주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽'];
let filteredPokemon = [];
let wantText = "리";
for (let i = 0; i < _pokemon.length; i++) {
  if (_pokemon[i][0] === wantText) {
    for (let j = filteredPokemon.length; j <= filteredPokemon.length; j++) {
      if (j === filteredPokemon.length) {
        filteredPokemon[j] = _pokemon[i];
        break; // break를 사용하지 않으면 무한루프가 발생
      }
    }
  }
}
console.log(filteredPokemon);