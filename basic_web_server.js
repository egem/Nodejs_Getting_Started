const http = require('http');

const requestListener = (req, res) => {
    console.log('---------req------------------');
    console.dir(req, {depth: 0});
    console.log("---------res-------------------");
    console.dir(res, {depth: 0});
    res.write('Hello World\n');
    res.end(); // To finalize session
    // Or, we can compose two lines as follows.
    // res.end('Hello World\n');
}

const server = http.createServer();
server.on('request', requestListener);

// Or, simply use
// const server = http.createServer(requestListener);

server.listen(4242, ()=> {
    console.log('Server is running...');
});

// Use nodemon to see the changes, when you change anything in code
// To install nodemon
// npm install -g nodemon
