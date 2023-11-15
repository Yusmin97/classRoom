/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 3. '_pokemon' 배열에서 찾고자 하는 포켓몬의 인덱스를
// 찾아주세요. 포켓몬이 배열에 없다면 -1을 출력하세요.
let _pokemon = ['피카츄', '파이리', '이상해씨'];
let searchPokemon = '네루미';
let index = -1;
for (let i = 0; i < _pokemon.length; i++) {
  if (_pokemon[i] === searchPokemon) {
    index = i;
    break;
  }
};
console.log(index);