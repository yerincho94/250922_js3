//접근자
/**
    [] -> 키 & = 대입연산자 주입.
    뭐가 문제??? -> accessor/access : validation
    - 이름 name에 빈 문자열이 오면 let name = ""  <<- 방어할 수 있는 방법이 없음.
    - 함수화를 하면 에러처리하거나 무시하거나 여러가지 방어처리를 할 수 있다. (getter, setter)
*/
class Rectangle {
  constructor(width, height) {
    // this.width = width;
    // this.height = height;
    this._width = width; //._ --> 구분적으로 private?
    this._height = height;
  }

  get width() {
    //getter
    return this._width;
  }

  set width(new_width) {
    //setter
    if (new_width < 0) {
      console.log("0보다 작게 입력할 수 없습니다.");
      return;
    }
    if (typeof new_width != "number") {
      console.log("숫자가 아닌 값을 입력할 수 없습니다!");
      return;
    }
    this._width = new_width;
  }

  get height() {
    return this._height;
  }

  set height(new_height) {
    this._height = new_height;
  }

  get size() {
    return this._width * this._height;
  }
}
const r = new Rectangle(100, 100);
r.width = 100; //함수인데, 프로퍼티값을 다루는 것처럼 취급시킬 수 있다.
r.width = "fff";
console.log(r.size);
