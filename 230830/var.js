var hello = "hello";

// function scope (함수 범위)
function sayHello() {
  var hello = "hello hello";
  console.log(hello); // hello hello
}

// var의 경우 아래와 같이 function없이 {}만 사용할 경우 var hello="hello hello"가 불러와짐
if(true) {
  var hello = "hello hello";
}

sayHello();
console.log(hello); // hello