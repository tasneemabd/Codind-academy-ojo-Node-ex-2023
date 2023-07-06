const url = require('url');
const adr = 'http://www.example.com:8080/path?query=value#fragmen';
const q = url.parse(adr, true);

console.log(q.host); 
console.log(q.pathname); 
console.log(q.search); 

console.log(q.hash)