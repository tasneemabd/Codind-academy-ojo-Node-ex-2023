const fs = require('fs');


fs.readFile('./example.txt', (err, data) => {
    if (err) {
      console.log(err);
    }  
    console.log(data.toString());
  });