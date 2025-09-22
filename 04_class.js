//객체 만드는 방법
/**
    1. {} 중괄호를 이용하여 정의하는 방법
 */
const obj = {
  name: "Kim",
  hello: function () {
    console.log("hello");
    console.log(`my name is ${this.name}입니다!`);
  },
};
console.log(obj.name);
obj.hello();

//패턴화해서 사용하고 싶을때?
// 2. 프로토타입 (상식으로 알고 있으면 댐)
function Person(name) {
  this.name = name; //this를 사용해서 속성을 주입하여 만드는 '생성자 함수'
}

const p = new Person("김자바");
console.log(p.name);
const p2 = new Person("박철수"); //객체를 재활용을 하기위해 사용
console.log(p2.name);

Person.prototype.hello = function () {
  console.log("안녕하세요! " + this.name + "입니다.");
};
p2.hello();
p.hello();
//-------- 구식 문법이라 자세하게 알 필요가 없다! (프로토타입)

//프로토타입 기반이 되어서!
// js, java 개발자 별개였는데, 이제는 위아더 월드다!
//그래서, Class 개념이 js에는 없다가, 나중에 추가가 되어버림.

//클래스 (Class)
/*
    Java에서 볼 클래스랑 미묘하게 차이점이 있음. 
    1) JS에는 접근제어자가 X 
        -> Java에서는 특정한 속성, 메서드(함수)를 임의 외부의 접근을 원척적으로 막을 수 있음.
        -> 내부에서 알아서 작업한 뒤, 외부에서 특정한 통으로만 호출할 수 있게만...
        -> js는 같은 파일이라면 원칙으로 다 접근 할 수 있다. (모듈화 한 다음엔 private의 경우엔 일부 작동)
    2) 오버로딩이 없음
        -> 매개변수의 다른 조합에 따른 같은 이름의 메서드 / 함수 돌려쓰기가 없다.
        -> 생성자가 하나다.
    3) 상속은 있지만,
        -> interface, extends는 존재하는데 implements는 없다.
        (typescript, interface vs java interface)
*/

//객체 / 참조타입
class User {
  //2-1. 프로퍼티 (field) - 공통적으로 / 일괄적으로 만들어질 값
  // 프로퍼티명 = 값
  job = "programmer";

  //1. 생성자 - js에는 생성자를 하나밖에 못씀
  constructor(name) {
    //this.프로퍼티명 -> 클래스 설계를 통해 만들 객체가 가질 프로퍼티명
    //2. 프로퍼티 (생성자 내부에서 주로 정의함)
    this.name = name || "cho"; //생성자의 매개변수를 통해서 프로퍼티랑 연결
    // || "cho" --> default 값은 cho (단축 연산을 통한 디폴트 연산)
  }

  //3. 메서드(function) - 객체에 묶여서 같이 행동하면 '메서드'라고 불리움
  sayHi() {
    //this가 있다 + 클래스에 속한다. 외 나머지는 다 함수와 동일하다.
    console.log("hi!");
    console.log(this.name);
    console.log(this.job);
  }
}

const user1 = new User();
console.log(user1);
console.log(user1.name);

const user2 = new User("park");
console.log(user2.name);
user2.sayHi();
