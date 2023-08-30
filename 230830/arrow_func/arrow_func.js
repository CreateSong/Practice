const foo = () => {
  console.log("arrow function");
};

foo();

/* 위 코드와 동일 
function foo () {
  console.log("arrow function")
}
*/

const foo2 = (매개변수, 매개변수2) => 매개변수 + 매개변수2

console.log(foo2(1, 5));