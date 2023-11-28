const http = require('http');
const url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const queryObject = url.parse(req.url, true).query;
  const num1 = parseFloat(decodeURIComponent(queryObject.num1));
  const num2 = parseFloat(decodeURIComponent(queryObject.num2));
  const operation = decodeURIComponent(queryObject.operation);


  let result;

  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
  }

  res.end(result.toString());
}).listen(8080);

console.log("Server is running ...");
