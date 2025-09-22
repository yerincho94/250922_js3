//고차함수
const data1 = [1, 2, 3, 5, 6, 19];

//배열 : 탐색, 변환이 많기 때문에 기능과 내장된 함수(메서드)가 많다.

// 자료구조의 Map : key가 있고, key가 값을 호출한다, 키는 겹쳐서는 안된다(덮어 씌워진다)
// 고차함수의 Map : 입력 받은 것을 변환해서, 일괄적으로 새로운 형태의 다른 나열된 형태의 사본을 만든다.

const data1Copy = [];
for (const v of data1) {
  //data1Copy.push(v * 2); //각각 요소의 2배
  //data1Copy.push(v * 3); //각각 요소의 2배
  data1Copy.push(func(v));
}
console.log(data1Copy);

function func(a) {
  return a * 2;
}

const data1Copy2 = data1.map(func); //data1의 사본을 만들어서
/*
    배열.map(매개변수가 1개 이상인 변수)
    - 제공받은 배열의 원소를 1개씩 받아서 제공받은 함수를 통과시킨 새로운 배열을 만들어서 결과값을 리턴
 */
console.log(data1Copy2);

//함수 표현식
const data1Copy3 = data1.map(function (v) {
  return v * 100;
});

//함수 화살표식
const data1Copy4 = data1.map((v) => {
  return v * 100;
});
console.log(data1Copy4);

//함수 화살표식을 더 응축된 버전
const data1Copy5 = data1.map((v) => v * 1024);
console.log(data1Copy5);

data1.map((value, index, array) => {
  console.log(value, index, array);
});

const textData = ["aPple", "bAnaNa", "CheRRy"];
console.log(textData.map((v) => v.toLowerCase())); //일괄소문자
console.log(textData.map((v) => v.toUpperCase())); //일괄대문자
