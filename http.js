const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/')
    {
        res.write('Hey this is home page');
        res.end();
    }
    if(req.url ==='/about')
    {
        res.write('Hey this is about page');
        res.end();
    }

    
}).listen(5000);

