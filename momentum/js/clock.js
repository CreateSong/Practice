/* interval은 '매번'일어나야 하는 무언가를 말함
예를 들어, '매 2초'라고 하면 이게 interval임
결론, 매 2초마다 무슨 일이 일어나게 하고 싶을 때 interval을 사용함 */

const clock = document.querySelector("h2#clock");

// "1".padStart(2,"0")
// 해석: 길이가 1개인 문자열이 있다고 가정할 때, padStart()를 써서 string("1)의 앞쪽 시작 부분에 padding("0")을 추가하여 문자열 길이가 2가 됨
function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = (`${hours}:${minutes}:${seconds}`)
}

// setInterval은 2개의 argument를 받음. 첫 번째는 실행할 함수, 두 번째는 호출되는 함수 간격을 몇 ms(milliseconds)로 할지 작성
// setInterval은 5초마다 sayHello 실행
// setInterval(sayHello, 5000);

// setTimeout은 딱 한번만 호출하되, 일정시간(설정한 ms)이 지난 후에 실행 됨

getClock()
setInterval(getClock, 1000);
