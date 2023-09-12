const quotes = [
  {
    quote: "Only I can change me life, no one can do it for me.",
    author: "Carol Burnett",
  },
  {
    quote: "Don’t be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote: "There are better starters than me but I’m a strong finisher.",
    author: "Usain Bolt",
  },
  {
    quote: "Habit is second nature.",
    author: "Michel de Montaigne",
  },
  {
    quote: "To improve is to change. to be perfect is to change often.",
    author: "Winston Churchill",
  },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


// 명언의 갯수만큼 랜덤으로 표시하고싶다면? Math.random()사용
// Math.random() * 5를 하면 0~5까지 랜덤한 숫자를 출력해주지만 float(실수)형태로 출력됨
/* 소숫점을 없애기 위한 방법은 3가지임 
1. Math.round() = 반올림 ex) Math.round(1.4) == 1 , Math.round(1.5) == 2
2. Math.ceil() = 숫자를 천장(ceil)까지 높여줌. 말 그대로 저 머리 꼭대기 천장까지 올려줌 ex) Math.ceil(1.1) == 2 , Math.ceil(1.01) == 2
3. Math.floor() = 숫자를 바닥(floor)까지 내려줌. ex) Math.floor(1.9999) == 1 
*/


// quotes의 인덱스값 랜덤하게 출력하기

// 방법1. Math.floor()와 Math.random()을 사용하여 0~4 랜덤한 숫자 정수로 얻기
// console.log(quotes[Math.floor(Math.random() * 5)]);

// 방법2. 명언 갯수를 직접 작성하는 대신 .length 사용하기 
// 방법 1의 경우 명언 갯수의 증감이 있을 때, 일일이 숫자를 변경해줘야하기 때문에 비효율적임
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);