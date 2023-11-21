const http = require('http');

const server = http.createServer(function (requset, response) {
  console.log(requset.url);

  function docMaker(title, href, text) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
</head>
<body>
  <a href="${href}">${text}</a>
</body>
</html>
`;
  }
  if (requset.url === "/") {
    let doc = docMaker("메인페이지", "/sub", "서브페이지로 이동!");
    response.writeHead(200, { "Content-Type": "text/html"});
    response.end(doc);
  }
  if (requset.url === "/sub") {
    let doc = docMaker("서브페이지", "/", "메인페이지로 이동!");
    response.writeHead(200, {"Content-Type": "text/html"});
    response.end(doc);
  }
});

server.listen(1234);
