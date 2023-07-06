const fs = require('fs');


// writing files
fs.writeFile('./example1.txt', 'hello, world', () => {
    console.log('file was written');
  });