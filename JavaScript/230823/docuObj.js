// javaScript가 어떻게 HTML을 가져오는가?
// JS를 사용하는 이유는 HTML과 상호작용하기 위함
// document라는 object를 이용하여 HTML 상호작용 가능

// HTML title 바꿔보기
document.title = "Document Practice"

// document. 안에 수많은 정보가 있으니 많이 연습해볼 것




// JS로 정보를 가져올 수 있는 방법은, document객체와 element를 가져오는 수 많은 함수를 이용
// document를 사용하여, html안에 h1 가져오기
document.getElementById("title") // 콘솔 결과값: <h1 id="title">자바스크립트 연습장</h1>
const title = document.getElementById("title");
console.log(title);
console.dir(title); // element를 더 자세하게 보여줌 1. autofocus = true 2. classNae = hello

// html의 id=title 요소 값 불러오기(찾기)
console.log(title.id);
console.log(title.className);


// h2 텍스트 변경
const text = document.getElementById("text");
text.innerText = "JS로 바꿔보자~";


// class=heollo인 요소 다 가져오기
const hellos = document.getElementsByClassName("hello")
console.log(hellos)


// div안에 있는 h4 가져오기
// const hi = document.getElementsByTagName("h4"); // className(hi)만 가져옴
const hi = document.querySelector(".hi h4") // querySelector는 element를 CSS방식으로 검색할 수 있음. 단, 첫번째 element를 return해줌. 모두 가져오고 싶다면 querySelectorAll() 사용!
console.log(hi)