const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 일반적으로 string만 포함된 변수는 대문자로 표기하고, string을 저장하고 싶을 때 사용함
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // preventDefault는 event의 기본 행동을 막는 함수
  // ex) submit의 기본행동은 브라우저가 새로고침 되는데, preventDefault를 사용함으로써 새로고침을 막을 수 있음
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings();
  }


function paintGreetings(){
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `반갑습니다~ ${username} 님!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

// 만약, localStorage에 username이 없다면 로그인 폼이 나타나게 하고,
// localStorage에 username이 저장되어 있다면 greeting을 보여줌
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    // submit 이벤트는 엔터를 누르거나 버튼을 클릭할 때 발생
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings();
}