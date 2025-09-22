//자료구조 (Data Structure)
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
//CRUD는 저번 교안 참고! -> push, pop ....
// for of을 사용해서 반복 탐색
console.log(arr); // [1,3,4]
arr.length = 0; //js에서는 length를 수정가능
console.log(arr); //length를 0으로 하면 지워진다. -> []

// Map
/*
    Object & Map의 차이
 */
const dataObj = {
  name: "cho",
  job: "developer",
  age: 20,
};
//for in을 사용하던가, Object.entries로 조회가능
for (const v of Object.entries(dataObj)) {
  //for (const v of dataObj) { //TypeError: dataObj is not iterable
  console.log(v);
}

// Map : 고정된 키 호출 -> 고정적인 값을 받는 저장 형태.
/*
    - 다양한 타입의 키를 지원
    - 관련된 존재 여부 관련된 연산들...
    -> 자바스크립트는 원래 별도로 지원을 안해주다가 (Object가 충분히 비슷하니까 )
*/
const map = new Map(); //비어있는 용기를 하나 만들고.
//map.set(키,값) : 데이터를 추가
map.set("name", "kim"); // key - value를 세팅
map.set("job", "engineer");
map.set("age", 50);
console.log(map);
//map.get(키) : 해당 데이터를 조회
console.log(map.get("age"));
console.log(map.get("carrer")); //undefined (없는 데이터 조회시)

//map.has(키) : 특정한 키 존재 여부 확인
console.log(map.has("name")); // boolean -> true/false
console.log(map.size); //크기

for (const v of map) {
  //entries랑 똑같은
  console.log(v);
}

for (const [key, value] of map) {
  //받을 때 부터 '구조분해' 할당 가능
  console.log(key, value);
}
//map. keys, entries, values ==> Object와 유사
map.clear();
console.log(map); //내용을 지워줌

//Set
const set = new Set();
// set의 특징 : 키가 곧 값임! (키 = 값)
/*
    map/set은 호출할 key가 있음.
    hashing(주소값) 방식 통해서 값이 저장이 됨.
    hashing 중복이 안일어나게하고, 중복허용을 하지 않음.
    중복 허용하지 않는다?
    1) 같은 값이 들어오려고 하면 에러를 도출한다. --> unique하다  <== 검사하는 과정이 필요. SW의 영역
    2) (없으면 추가하고) 같은 값이 들어오면 덮어씌워버린다. (upsert한다.) --> map, set
 */
const data = [
  "김자바",
  "김자바",
  "김자바",
  "이디비",
  "이디비",
  "박코딩",
  "박코딩",
  "박코딩",
  "박코딩",
];
console.log(data);
const result = [];
for (const name of data) {
  //   console.log(v);
  if (!result.includes(name)) {
    // 특정한 배열에 특정한 요소가 포함되어 있는지는 includes로 검사
    // ! -> 없으면
    console.log(name);
    result.push(name); // 2번째부터는 이미 있는 이름이니까 안잡히겠죠?
  }
}
console.log(result);

const setResult = new Set(data);
console.log(setResult); // 중복을 추려줌
const setArray = [...setResult];
console.log(setArray);

const set1 = new Set();
set1.add(1);
set1.add(2);
set1.add(1); // 똑같은 데이터를 넣었을 때 무시된다 (이미 존재하는 데이터를 넣었을 때 무시된다)
// 추가할 때 set이 아니라 add를 쓴다는 것 제외하곤 map가 거의 똑같은데
// get은 없다. 왜 없을까?
console.log(set1);
