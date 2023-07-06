const http = require('http');
const fs=require('fs')

const hostname='127.0.0.1';
const port ="8080";

const server = http.createServer((req, res) => {

  res.writeHead(200,{"Content-Type":"text/html"})

  const ReadStream=fs.createReadStream('index.html')
  ReadStream.pipe(res)

});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
