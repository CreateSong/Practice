// input, button 선택을 합니다.
const inputMoney = document.querySelector('#input-money')
const inputBtn = document.querySelector('#input-money + button.btn')  // 명시적으로 표시하기 위해 input-money + butoon.btn 사용
const balanceMoney = document.querySelector("#balance-money");
const myMoney = document.querySelector("#my-money");

// 입금한 금액을 확인합니다.

// 버튼을 클릭하면 인풋의 값을 가져옵니다.
inputBtn.addEventListener('click', function(){
  // 입금으로 입력한 금액을 가져옵니다.
  const value = parseInt(getInputValue(inputMoney));
  // 입금한 금액을 잔액에 표시해줍니다.
  // 1. 현재 잔액을 가져옵니다.
  const balance = parseInt(balanceMoney.textContent.replaceAll(",", ""));
  // 2. 현재 잔액과 입금액을 더해줍니다.
  const valueAddBalance = add(value, balance);
  // 2-1. 단위마다 ',' 추가해주기
  // numberReplace(valueAddBalance)
  // 3. 더한 금액을 표시해줍니다.
  balanceMoney.textContent = numberReplace(valueAddBalance) + "원";
  inputMoney.value = "";

  const money = parseInt(myMoney.textContent.replaceAll(",", ""));
  myMoney.textContent = numberReplace(money - value) + "원";

});


// input값을 가져오는 함수 : event 내부에서만 작동
function getInputValue(input){
  return input.value;
}
// 더하기 함수
/** add: 두 인자를 받아서 두 수르르 더해줍니다. **/
function add(a, b) {a
  return a + b;
}

//숫자 자릿수 쉼표찍어주기
function numberReplace(number) {
  const length = (number + "").length;
  //10000
  const string = number + "";
  const arr = [];
  for (let i = length; i > 0; i -= 3) {
    if (i - 3 < 0) {
      arr.unshift(string.slice(0, i));
      break;
    }
    arr.unshift(string.slice(i - 3, i));
  }
  return arr.join(",");
}
// const add = (a, b) => a + b;
// 잔액을 바꿔서 표시해줍니다.
