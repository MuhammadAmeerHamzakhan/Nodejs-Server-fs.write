let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.readFile('example.txt', (err, data) => {
        if (err) {
            console.log(err);
            res.end('Err');
        } else {
            console.log(data); 
            res.end(data);
        }
    });
}).listen(5000, () => {
    console.log("Server is running on port 5000");
});
