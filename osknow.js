const os = require('os');


//Info about current user
const userInfo = os.userInfo();
console.log(userInfo);

// info about 
console.log(`The system uptime is ${os.uptime} seconds`);


const currentOS = {
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
}; 

console.log(currentOS)