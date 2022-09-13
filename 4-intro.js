funs = () =>{
    const name = require('./1-intro')
    const sayhi = require('./2-intro')

// console.log(name);
// console.log(require('./3-intro'));

sayhi('shubham');
sayhi(name.harry);
sayhi(name.potter);




}

module.exports = funs();


// carries the code of 1-intro.js and 2-intro.js