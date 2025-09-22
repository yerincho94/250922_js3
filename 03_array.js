//고차함수
// forEach
// for.
const arr1 = [1, 2, 3];
arr1.forEach((v, i) => {
  console.log(v, i);
});
console.log("----------------");
arr1.forEach(console.log); // console.log -> () => function 함수 값 자체
//전달 받은 패러미터(매개변수)를 다 쓰겠다
// 자바에서는 전달받은 패러미터와 구현된 패러미터의 갯수가 맞아야 쓰겠다.
// 자바스크립트에서는 쓸 수 있으면 쓰겠다.

// map : 길이가 보존되는 사본 =>

//filter : 통과 여부 -> 조건을 만족하는 경우만 남긴다.
const arr2 = [1, 2, 3, 4, 5, 5, 6, 7, 8];
console.log(arr2.filter((v) => v % 2 == 0)); //true인 것만 남김 (정석)
console.log(arr2.filter((v) => !(v % 2))); //syntatic suger

const arr3 = [
  {
    language: "java",
    score: 50,
  },
  {
    language: "python",
    score: 70,
  },
  {
    language: "c#",
    score: 88,
  },
  {
    language: "java",
    score: 90,
  },
];
console.log(arr3.filter((v) => v.language == "java" && v.score >= 80));

//java이거나, 80점 이상
console.log(arr3.filter((v) => v.language == "java" || v.score >= 80));

//java이고, (필터링하고) / 80점 이상(필터링)
console.log(
  arr3.filter((v) => v.language == "java").filter((v) => v.score >= 80)
);

//reduce : 합쳐진 결과물이 나오는데, 내가 지정할 수 있다.
// 압축이다
let sum = 0;
const data = [1, 3, 5, 7, 9];
for (const v of data) {
  //하나하나 데이터를 불러와서
  sum += v; //sum으로 집어넣음
}
console.log(sum);
console.log("------------------");

//배열.reduce(함수, 초기값) -> 초기값 생략시 배열의 첫째값
console.log(data);
const result = data.reduce((prev, curr) => {
  console.log(prev, curr);
  return prev * curr;
});
console.log(result);

console.log(
  data.reduce(
    (prev, curr) => {
      console.log(prev, curr);
      //return prev + curr;
      prev[curr] = curr * 2;
      return prev;
    }, //여기까지는 화살표 함수
    //"" //문자열을 넣어(초기값)
    {} //객체를 넣어
  )
);

// sort : 정렬
const num = [1, 5, 2, 7, 8];
num.sort();
console.log("sort: ", num); //오름차순 -> 데이터의 등장 순서가 커지는 순서와 일치

num.reverse();
console.log("reverse: ", num);

console.log(num.toSorted());
console.log("toSorted: ", num); //원본에는 영향을 안미치면서

console.log(num.toReversed()); //뒤집기 (가장 큰게 앞으로)
console.log("toReversed: ", num);

console.log(num.sort((a, b) => a - b)); // -가 나오면 b가 더 큰 것 -> b가 뒤로 가게 하는 (결과값이 -가 나오면 a, b 중에 b가 뒤로 가게)
console.log(num.sort((a, b) => b - a));
// 내림차순 (descending)
// A -> ... a -> ... 텍스트도 정렬.

//map, filter, reduce로 연결해서 작업이 가능하다.
const users = [
  {
    name: "kim",
    age: 30,
    job: "developer",
  },
  {
    name: "lee",
    age: 25,
    job: "designer",
  },
  {
    name: "park",
    age: 35,
    job: "manager",
  },
  {
    name: "choi",
    age: 28,
    job: "engineer",
  },
  {
    name: "jung",
    age: 40,
    job: "architect",
  },
  {
    name: "kang",
    age: 22,
    job: "intern",
  },
  {
    name: "yoon",
    age: 33,
    job: "product owner",
  },
  {
    name: "jang",
    age: 29,
    job: "data scientist",
  },
  {
    name: "han",
    age: 38,
    job: "project manager",
  },
  {
    name: "oh",
    age: 26,
    job: "frontend developer",
  },
  {
    name: "seo",
    age: 31,
    job: "backend developer",
  },
];

// 30대 이상의 평균 나이를 구하시오
const user30 = users
  .map((u) => u.age) //특정한 속성만 남낄때나, 타입이나 단위, 일괄적인 메서드, 함수등을 적용할 때 많이 사용됨.
  .filter((age) => age >= 30); //30 이상인 값만 필터링해서 남긴다.

const sum30 = user30.reduce((prev, curr) => prev + curr); //30이상의 나이를 합산

const count30 = users.length;
console.log(sum30 / count30);
