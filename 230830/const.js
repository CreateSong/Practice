// const는 상수이며 중복 선언, 재선언 불가

const hello = "first hello"
// hello = "second hello"  // 재선언 불가


// const의 경우, {} 블록 스코프 안에서 선언되면 그 안에서만 사용 가능
if (true) {
  const hello = "second hello";
  console.log(hello); // second hello
}

console.log(hello); // first hello