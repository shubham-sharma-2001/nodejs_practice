const fs = require('fs');

const f1 = fs.readFileSync('./files/first.txt','utf-8');
const f2 = fs.readFileSync('./files/second.txt','utf-8');

fs.writeFileSync(
    './files/third.txt',
    `Here is the both files :${f1}, ${f2}`,
    {flag:'a'}
)