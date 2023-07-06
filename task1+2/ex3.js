const fs = require('fs/promises');

async function updatePage() {
  const content = 'Some content!';

  try {
    await fs.appendFile('output.txt', content);
    console.log('File "output.txt" has been successfully updated.');
  } catch (err) {
    console.error('Error updating file:', err);
  }
}

fs.unlink('input.txt', (error) => {
    if (error) {
      console.error('Error deleting the input file:', error);
      return;
    }

    console.log('successfully deleted.');
  });


function main() {
  updatePage();

}

main();
