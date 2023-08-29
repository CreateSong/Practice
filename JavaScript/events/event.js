const title = document.querySelector("div.hello h1")
const titleHere = document.querySelector("div.hello h2")

// element의 내부를 보고 싶을 때 사용. obcject로 표시한 element를 볼 수 있음
// console.dir(title);


// title을 click하면 h1 color를 blue로 변경
function handleTitleClick() {
  title.style.color = "green";
}

function handleMouseEnter() {
  titleHere.innerText = "마우스가 저를 가르키고 있군요!! 😆";
}

function handleMouseLeave() {
  titleHere.innerText = "저를 떠나셨군요..😥"
}

function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("복사하셨군요!");
}

function handleWindowPaste() {
  alert("붙여넣기 하셨군요!");
}

function handleWindowOffline() {
  alert("Wifi 연결이 되지 않았어요!!")
}

function handleWindowOnline() {
  alert("Wifi 연결이 잘 되었습니다!")
}

// JavaScript가 title을 지켜보고 있다가, 누군가가 title을 click하는 것을 listen 할 것임
// click event를 listen하고, 이 click event가 발생하면 handleTitleClick 이라는 function 동작.
title.addEventListener("click", handleTitleClick)
/* title.onclick = handleTitleClick 위 코드와 동작은 같지만,
addEventListener로 사용하는 이유는 나중에 removeEventLisenter를 통해서 event listener를 제거할 수 있기 때문임 */

// 마우스 포인터를 요소에 올려놓았을 때, hanndleMouseEnter실행
titleHere.addEventListener("mouseenter", handleMouseEnter)

// 마우스 포인터가 요소를 벗어날 때, hanndleMouseEnter실행
titleHere.addEventListener("mouseleave", handleMouseLeave)

// 화면이 resize 될 때, handleWindowResize 실행
window.addEventListener("resize", handleWindowResize);

// 복사(ctrl+c) 할 때, handleWindowCopy 실행
window.addEventListener("copy", handleWindowCopy);

// 붙여넣기(ctrl+v) 할 때, handleWindowPaste 실행
window.addEventListener("paste", handleWindowPaste);

// wifi 연결이 안된 경우
window.addEventListener("offline", handleWindowOffline);

// wifi 연결이 안된 경우
window.addEventListener("online", handleWindowOnline);