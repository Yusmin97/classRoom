/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 9. '_pokemon' 배열과 다른 하나인 '_digimon' 배열을 연결해 새로운 배열을 생성해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨'];
let _digimon = ['아구몬', '가부몬'];
let combinedArray = [];
for (let i = 0; i < _pokemon.length; i++) {
  for (let j = combinedArray.length; j <= combinedArray.length; j++) {
    if (j === combinedArray.length) {
      combinedArray[j] = _pokemon[i];
      break;
    }
  }
}
for (let i = 0; i < _digimon.length; i++) {
  for (let j = combinedArray.length; j <= combinedArray.length; j++) {
    if (j === combinedArray.length) {
      combinedArray[j] = _digimon[i];
      break;
    }
  }
}
console.log(combinedArray);