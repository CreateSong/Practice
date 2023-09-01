// part 3-1. 이전 파트(part 3)에서 작성했던 코드를 더 간결하고 효율적인 코드로 짜보자!


const h1 = document.querySelector('div.hello:first-child h1');

/* 이 코드에서 toggle의 역할: toggle은 h1의 classList에 clicked class가 이미 있는지 확인해서 만약 있다면, toggle이 clicked를 제거해줌.
만약 h1의 classList clicked가 존재하지 않는다면, toggle은 clicked를 classList에 추가해줌 */
function handleTitleClick() {
  h1.classList.toggle("clicked")
}

h1.addEventListener("click", handleTitleClick);
