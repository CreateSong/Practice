/* 
local: 현재 컴퓨터의 내부 주소, 서버 개발할 때 테스트 용으로 많이 사용됨
localhost=127.0.0.1 여기서 숫자는 IP(Internet Protocol)임. 이러한 주소를 통해 서버에 접속할 수 있는 것임
포트(port): 서버 내의 프로세스를 구분하는 번호
*/

const http = require("http");

/* http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<p>Hello World~^^</p>");
}).listen(3000, () => {
  console.log("3000번 포트 서버 접속 완료~!!")
});
*/

http.createServer((req, res) => {
  if(req.url === "/") {
    res.writeHead(200);
    res.end("main url");
  } else if (req.url === "/upload") {
    res.writeHead(200);
    res.end("upload url")
  } else if (req.url === "/delete") {
    res.writeHead(200);
    res.end("delete url");
  } else {
    res.writeHead(404);
    res.end("Not found!!!");
  }
}).listen(3000, () => {
  console.log("3000번 포트 서버 접속 완료~!!")
});
