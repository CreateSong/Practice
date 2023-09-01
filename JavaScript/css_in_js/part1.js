// part 1. JS에서 h1 스타일 변경하기

// const h1 = document.querySelector('div.hello:first-child h1');: HTML 문서에서 div 요소 중 클래스가 "hello"인 첫 번째 요소의 하위에 있는 첫 번째 h1 요소를 선택하여 h1 변수에 할당합니다.
const h1 = document.querySelector('div.hello:first-child h1');

// h1의 색상이 블루면, 클릭했을 때 레드로 바꾸고, h1의 색상이 레드면 클릭했을 때 블루로 바꾸기
function handleTitleClick() {
  const currentColor = h1.style.color;
  let newColor;
  if(currentColor === "blue"){
      newColor = "red";
  } else {
      newColor = "blue"
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);


// 코드 해석
/*
h1 요소의 기본 색상이 검은색이고, 클릭했을 때 파란색(blue)으로 바뀌는 이유는 JavaScript 코드에 의해 동적으로 색상이 변경되기 때문입니다. 다음은 원리를 설명하는 단계입니다:

1. h1 요소가 초기에 페이지에 로드될 때, 브라우저의 기본 스타일이나 CSS 스타일 시트에 의해 텍스트의 색상이 검은색으로 설정됩니다.

2. 사용자가 <h1> 요소를 클릭하면, h1 요소에 등록된 클릭 이벤트 리스너(handleTitleClick 함수)가 실행됩니다.

3. handleTitleClick 함수 내에서 currentColor 변수에 h1 요소의 현재 색상을 저장합니다. 이때, h1.style.color를 사용하여 현재의 CSS 스타일을 가져옵니다.

4. currentColor 변수에 저장된 현재 색상이 검은색이라면 (기본값이 검은색이므로), 조건문에서 currentColor === "blue"는 거짓이 됩니다.

5. 따라서 newColor 변수는 "blue"로 설정됩니다. 이것은 새로운 색상으로 파란색을 나타냅니다.

6. 마지막으로, h1.style.color를 사용하여 h1 요소의 색상을 newColor 값인 "blue"로 변경합니다. 이로써 <h1> 요소의 텍스트가 파란색으로 변경됩니다.
*/