const fs = require('fs');
const readlineSync = require('readline-sync');

const checkFileExists = async (filename) => {
  try {
    await fs.promises.access(filename, fs.constants.F_OK);
    return true;
  } catch (err) {
    return false;
  }
};

const promptConfirmation = () => {
  const confirmation = readlineSync.keyInYN(
    'Do you want to write it?: '
  );
  return confirmation;
};

const writeFile = async () => {
  // Write file logic here
  const content = 'write to the file.';
  try {
    await fs.promises.writeFile('output.txt', content);
    console.log(' successfully written.');
  } catch (err) {
    console.log('Error writing to file:');
  }
};

const main = async () => {
  const fileExists = await checkFileExists('output.txt');

  if (fileExists) {
    const confirmation = promptConfirmation();

    if (confirmation) {
      await writeFile();
    } else {
      console.log('File was not written.');
      return; 
    }
  } else {
    console.log('File does not exist');
  }

  await writeFile(); 
};

main();
