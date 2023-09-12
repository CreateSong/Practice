// 랜덤으로 배경이미지 출력(js에서 랜덤 이미지를 만들고 html에 추가해보기)

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// appendChild()는 body에 html추가하기
document.body.appendChild(bgImage)