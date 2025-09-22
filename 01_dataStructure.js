//자료구조
//Object (객체)
const obj = {
  //키 : 값
  key1: 1234,
  1: 1234, //값은 중복되도 상관X : 숫자의 경우에는 문자열로 변환되어서 키로 들어가는 것!
  1: 3456, //키가 중복될 경우에는? -> 가장 최신으로 작성한 내용이 덮어씌운다!
  // ...rest연산자로 default로 한다음에, 추가로 수정하고자하는 키:값으로 테크닉으로 사용한다. (덮어씌우기)
  // 다른 변수를 키값으로 삼는더던가, 갑자기 function() 등을 키로 쓸 순 없음!!
};
console.log(obj);
console.log(obj.key1); // 변수명명의 규칙을 준수했을 경우(알파벳과 $_로 시작하고, 중간에 공백없을 것)
console.log(obj[1]); // 숫자로 시작하거나 공백을 포함하는 경우

console.log(Object.keys(obj)); //키들의 배열
console.log(Object.values(obj)); // 값들의 배열
console.log(Object.entries(obj)); // [키, 값]의 배열
//for in을 사용해서 키값 조회

//Array
// 0개 이상의 데이터의 묶음 -> 0개 이상의 뜻 : [] 빈 배열이 존재하기 때문에! (빈 배열도 아무런 문제가 없음)
const arr = [1, 3, 4];
//CRUD는 저번 교안 참고!
// for of을 사용해서 반복 탐색
console.log(arr); // [1,3,4]
arr.length = 0; //js에서는 length를 수정가능
console.log(arr); //length를 0으로 하면 지워진다. -> []
