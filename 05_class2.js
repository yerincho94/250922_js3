//상속 (inheritance) -> 상위(포함) -> 하위에 영향을 미침
/**
    class 상속:
        - B가 A를 상속한다. : A에 이미 구현되어 있는 것들을 가져다 쓸 수 있다.
 */
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name}(이)가 소리를 냅니다.`);
  }
}

const animal = new Animal("동물");
animal.speak();

class Dog extends Animal {
  constructor(name, breed) {
    //내가 상속받고자 하는 상위(부모) 클래스의 생성자/대상을 지칭하려면
    super(name); // <- Animal.constructor()을 불러옴
    //Animal.name = name 이라는 뜻
    // -> 별도의 name이 없다면, this.name과 같다.
    this.breed = breed;
  }

  speak() {
    //재정의
    console.log(`${this.name}(이)가 짖는다`);
  }
}

const dog = new Dog("강아지", "푸들");
dog.speak();

class Cat extends Animal {
  speak() {
    //재정의
    console.log(`${this.name}(이)가 야옹한다.`);
  }
}
const cat = new Cat("고양이");
cat.speak();

class Bird extends Animal {
  speak() {
    //재정의
    super.speak();
    console.log(`${this.name}(이)가 짹짹거린다.`);
  }
}
const bird = new Bird("참새");
bird.speak();

class Tiger extends Animal {
  run() {
    //재정의
    console.log(`${this.name}(이)가 달린다.`);
  }
}
const tiger = new Tiger("호랑이");
tiger.speak();
tiger.run();
