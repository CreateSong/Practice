// part 2. JS와 CSS연동하여 h1 스타일 변경하기

const h1 = document.querySelector('div.hello:first-child h1');

// 핸들링되는 class name은 변수(const)에 저장해놓는 것이 좋다. 왜냐하면, 오타 때문에 오류를 범할 가능성도 줄일 수 있고, 변수로 저장해서 불러오면 변경된 class 이름만 복사+붙여넣기 하면 되기 때문이다. 뿐만 아니라, class이름에 오타가 난 경우, console에서 알려주기 때문에 어디에서 오류가 났는지 찾기가 쉽다!
function handleTitleClick() {
  const clickedClass = "clicked"
  if(h1.className === "clicked"){
    h1.className = "";
  } else {
    h1.className = "clicked";
  }
}

h1.addEventListener("click", handleTitleClick);