// 230821 프로그래머스 코딩테스트 입문

// 반환값이 음수, 양수 소숫점 일 때 테스트


// parseInt
const solution = (a, b) => parseInt((a / b) * 1000)
console.log(solution(3, 2))
console.log(solution(-7, 3))
console.log(solution(1, -16))

// Math.floor
const solution2 = (a, b) => Math.floor((a / b) * 1000)
console.log(solution2(3, 2))
console.log(solution2(-7, 3))
console.log(solution2(1, -16))


// Math.trunc
const solution3 = (a, b) => Math.trunc((a / b) * 1000)
console.log(solution3(3, 2))
console.log(solution3(-7, 3))
console.log(solution3(1, -16))


// 숫자 비교하기
//정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.
function solution (a, b) {
  if (a === b) {
      return (1)
  } else {
      return (-1)
  }
};

// 숫자 비교하기 삼항 연산자
function solution(num1, num2) {
  var answer = num1 === num2 ? 1 : -1;
  return answer;
}