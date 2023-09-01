// part 3. CSS 기존 class name 유지하면서 JS로 제어하기
// 추가설명: part 2에서 작성했던 JS는, 기존 CSS class name을 제거하고 추가되기 때문에 버그 발생. 해당 버그를 해결하기 위한 코드를 짜보자!


const h1 = document.querySelector('div.hello:first-child h1');

// classList는 말 그대로 class들의 목록으로 작업할 수 있게끔 해줌 (반면에 className은 이전 class를 상관하지 않고 모든걸 교체해버림)
// 결론: h1의 sexy-font는 그대로 남아있고, classList(remove,add)를 통하여 특정 class만 제어해주는 것
function handleTitleClick() {
  const clickedClass = "clicked"
  if (h1.classList.contains(clickedClass)){
    h1.classList.remove(clickedClass)
  } else {
    h1.classList.add(clickedClass)
  }
}

h1.addEventListener("click", handleTitleClick);


/* 위 동작은 실무에서 많이 사용되며, 더욱 쉽게 제어할 수 있는 방법은 "toggle"임!! (스위치 on/off같은 존재)
part 3-1에서 살펴보자!*/