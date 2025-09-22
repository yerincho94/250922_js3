try {
  a.b;
} catch (e) {
  console.log("에러가 발생했습니다.");
}

try {
  //실행코드
  a.b;
} catch (e) {
  //매개변수로 받아줘야 한다.
  // console.log(e);  //실행이 정지되진 않고 error stack --> 여기까지 실행하면서 무슨 에러가 났었는지 알려주는 과정
  console.log(e.name); //에러 이름
  //name을 활욜해서 if문으로 분기함. (네트워크 에러 처리할 때 보여줌)

  console.log(e.message); // 에러 메세지
}

try {
  if (Math.random() < 0.5) {
    a.b;
  }
  console.log("버그 안남");
} catch (e) {
  console.log("버그남");
} finally {
  //어떠한 상황이던 실행하는 구간
  console.log("어쨌든 실행됨");
}

function f() {
  //finally 없을 땐 catch가 없어도 된다.
  try {
    return "a";
  } finally {
    return "b"; //finally는 정말 마지막에 실행되기 때문에, return으로 심지어 함수가 종료되어도 그 다음에 다시 return을 덮어씌움
  }
}
console.log(f());

let a = 0; //바깥에 빈 값이라도 초기화를 해놓아야 한다.
try {
  //try도 블럭이다 : try 내부에 들어간 변수는 외부에서 사용 X
  //try는 외부 네트워크 호출할 때 많이 씀. <-- 데이터를 받아온다는 의미
  //이게 전달이 되어야 하는데, return 되는 거면 상관 없음.
  //try문을 넘어서 '가공'되어야 한다면 전역으로 뺴줘야한다.
  //   let a = 0;
  a += 100;
} catch {}
console.log(a); //ReferenceError: a is not defined

//custom error 내기 -> 에러를 던진다 (throw)
try {
  //강제 탈출 비슷한 너낌
  for (let i = 0; i < 50; i++) {
    if (Math.random() > 0.5) {
      throw new Error("새로운 에러!!" + i); //return과 비슷한 방식
    }
  }
} catch (e) {
  console.log("name: ", e.name);
  console.log("message:", e.message);
  throw e; //다시 던질 수도 있음 --> rethrow 행위
}
