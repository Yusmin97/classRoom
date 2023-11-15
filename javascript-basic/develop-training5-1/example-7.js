/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 7. '_pokemon' 배열의 원소들을 가나다 순으로 정렬해
// 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽'];

for (let i = 0; i < _pokemon.length -1; i++) {
  for (let j = i + 1; j < _pokemon.length; j++) {
    if (_pokemon[i] > _pokemon[j]) {
      let temp = _pokemon[i];
      _pokemon[i] = _pokemon[j];
      _pokemon[j] = temp;
    }
  }
};
console.log(_pokemon);