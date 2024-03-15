const http = require('node:http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html;charset=utf-8');
  res.end(`<p>thẻ p</p>
  <h1>Phùng Đức Tâm</h1>
  <h2>Phùng Đức Tâm</h2>
  <h3>Phùng Đức Tâm</h3>`);
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});