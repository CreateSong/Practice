// promise의 3가지 상태
/* pending: 대기상태 (promise를 호출하면 나타남)
pulfilled: 이행상태
rejected: 실패상태
*/

// resolve (성공 상태일 때)
/* function sayHello() {
  return new Promise((resolve, reject) => {
    const hello = "Hello Hello";
    resolve(hello);
  });
}

sayHello().then((resolvedData) => {
  console.log(resolvedData);
})
*/

// reject (실패 상태일 때)
/* function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello~!");
  });
}

sayHello()
.then((resolvedData) => {
  console.log(resolvedData);
  return resolvedData;
})
.then((resolvedData) => {
  console.log(resolvedData);
  return resolvedData;
})
.then((resolvedData) => {
  console.log(resolvedData);
})
  .catch((error) => {
  console.log(error);
});
*/

// 위에 작성된 then 자체가 복잡해보일 때, 이를 해결하기 위해 나온게 async,await임
function sayHello() {
  return new Promise((resolve, reject) => {
    resolve("hello~!");
  });
}

// await을 쓰려면 함수 앞에 async써줘야함
async function test() {
  const hello1 = await sayHello();
  console.log(hello1);
}

test();