// 비구조화 할당이란? 객체, 배열 안의 값을 추출해서 변수, 상수에 바로 선언하는 문법

const object = { a: 1, b: 2};
const array = [3, 4];

/* object 안에 객체(키,값)가 많은 경우 아래와 같이 불러오는 방법은 비효율적임
const a = object.a;
const b = object.b;
*/

// 그래서 만들어진게 비구조화 할당
const {a , b} = object;
const [one, two] = array;

console.log(a);
console.log(b);

console.log(one);
console.log(two);