/* interval은 '매번'일어나야 하는 무언가를 말함
예를 들어, '매 2초'라고 하면 이게 interval임
결론, 매 2초마다 무슨 일이 일어나게 하고 싶을 때 interval을 사용함 */

const clock = document.querySelector("h2#clock");


function sayHello() {
  console.log("hello");
}

// setInterval은 2개의 argument를 받음. 첫 번째는 실행할 함수, 두 번째는 호출되는 함수 간격을 몇 ms(milliseconds)로 할지 작성
setInterval(sayHello, 5000);