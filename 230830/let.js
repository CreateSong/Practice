// let은 중복 선언 불가하며, 재정의는 가능

let hello = "first hello";
// let hello = "second hello"; // 중복 선언 불가

hello = "second hello"; // 재정의 가능

// let의 경우, {} 블록 스코프 안에서 선언되면 그 안에서만 사용 가능
if(true) {
  let hello = "second hello";
  console.log(hello);
}