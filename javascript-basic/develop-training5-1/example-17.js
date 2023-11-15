/* ? Develop-Training-5 크드트 게임 문제 풀이 */
// 17. '_pokemon' 배열을 새로운 배열에 복사해 문서에 적절한 태그로
// 생성하여 출력해주세요.
let _pokemon = ['피카츄', '파이리', '이상해씨', '리자드', '리자몽', '꼬부기',
'버터플', '냐옹마', '냐옹', '푸린'];
let clonedPokemon = [];
let listString = "";

// 클론 배열 만들기
for (let i = 0; i < _pokemon.length; i++) {
  clonedPokemon[i] = _pokemon[i];
}

// <ul>과 <li> 태그들을 하나의 문자열로 합침
listString += "<ul>";
for (let i = 0; i < clonedPokemon.length; i++) {
  listString += "<li>" + clonedPokemon[i] + "</li>";
}
listString += "</ul>";

console.log(listString);