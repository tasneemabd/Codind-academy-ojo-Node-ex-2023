const fs = require('fs');

// reading files
fs.readFile('./blog1.txt', (err, data) => {
  if (err) {
    console.log(err);
  }  
  console.log(data.toString());
});

fs.writeFile('./blog1.txt','hello, world',() =>{
    console.log('file was written');

})
fs.mkdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  });

  fs.rmdir('./assets', err => {
    if (err) {
      console.log(err);
    }
    console.log('folder deleted');
  });
