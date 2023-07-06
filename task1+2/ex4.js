const fs = require('fs');
const readline = require('readline');

const filePath = 'output.txt';

// Check if the file already exists
if (fs.existsSync(filePath)) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('The file "output.txt" already exists. Do you want to overwrite it? (yes/no) ', (answer) => {
    rl.close();

    if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
      fs.writeFileSync(filePath, 'hello this is a page created ');
      console.log('successfully!');
    } else {
      console.log('Operation cancelled.');
    }
  });
} else {
  fs.writeFileSync(filePath, 'page not found , page created   ');
  console.log('File created successfully!');
}
