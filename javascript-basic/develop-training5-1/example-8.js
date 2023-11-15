/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 8. '_pokemon' 배열에서 총 6개의 포켓몬만을 새로운 배열에
// 담아 출력해 주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽', 
'꼬북기', '버터플', '냐옹마', '냐옹', '푸린'];
let sixPokemon = [];
for (let i = 0; i < 6 && i < _pokemon.length; i++) {
  for (let j = sixPokemon.length; j <= sixPokemon.length; j++) {
    if (j === sixPokemon.length) {
      sixPokemon[j] = _pokemon[i];
      break;
    }
  }
};
console.log(sixPokemon);