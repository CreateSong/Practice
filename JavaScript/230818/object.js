const player = {
  name: "song",
  age: 28,
  points: 100,
};

console.log(player);
console.log(player.name);


// function은 어떤 코드를 캡슐화해서, 실행을 여러번 할 수 있게 해줌
// function의 규칙 () < 괄호를 작성해야함(실행한다는 뜻), 그리고 실행할 코드 블럭 {} 이 필요함
function sayHello(nameOfPerson, age) {    // sayHello를 실행하면 안에 내용이 반복됨
  console.log("Hello my name is " + nameOfPerson + " and I'm " + age);  // 안에 값을 바꾸려면 argument(인자)를 사용함. 아규먼트는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
}

// 연습해보기
sayHello("song", 10);
sayHello("kim", 20);
sayHello("park", 34);

function setMenu(burger, drink) {
  console.log("주문하신 세트 구성품은 " + burger + "와 " + drink + " 입니다. 맛있게 드세요!🥰")
}

setMenu("새우버거","오렌지주스");
setMenu("불고기버거","사이다");
setMenu("치즈버거","콜라");

// 간단한 계산기 만들기
function plus(a, b) {    // argument(인자) 이름은 어떻게 지어도 상관없음. 작성된 순서가 중요한 것!
    console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

plus(10,5)
divide(10,5)


const player2 = {
  name: "nick",
  sayHello2: function(ohterPersonsName) {
      console.log("hello! " + ohterPersonsName + " nice to meet you!");
  }
};

console.log(player2.name)
player2.sayHello2("song");