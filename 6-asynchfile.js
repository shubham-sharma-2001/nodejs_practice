const fs = require('fs');

fs.readFile('./files/first.txt', 'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }

  const first = result;
  fs.readFile('./files/first.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    fs.writeFile(
      './files/third.txt',
      `Here are the both files: ${first},${second}`,
      
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
