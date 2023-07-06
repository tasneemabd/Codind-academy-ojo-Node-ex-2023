const fs = require('fs');

async function checkfile(){

    try{

        await fs.promises.access('input.txt');
    console.log('File exists');

    }

    catch(err){
        console.error('Error: input.txt file does not exist');

    }
}

async function readFile() {
    try {
      const data = await fs.promises.readFile('input.txt', 'utf8');
      console.log('File contents:', data);
    } catch (err) {
      console.error('Error reading input.txt:', err);
    }
  };

function main(){
    checkfile();
    readFile();
}
main()