const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  // preventDefault는 event의 기본 행동을 막는 함수
  // ex) submit의 기본행동은 브라우저가 새로고침 되는데, preventDefault를 사용함으로써 새로고침을 막을 수 있음
  event.preventDefault();
  console.log(loginInput.value);
  }

function handleLinkClick(event){
  event.preventDefault();
  console.dir(event);
}

  // submit 이벤트는 엔터를 누르거나 버튼을 클릭할 때 발생
loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
