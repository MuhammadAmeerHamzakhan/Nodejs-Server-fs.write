let http = require("http");
let fs = require("fs");

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    fs.writeFile('example.txt', "Hello World", function(err){
        console.log(err)
    })
    fs.readFile('example.txt', (err, data) => {
        res.end=(data.toString())
    //     if (err) {
    //         console.log(err);
    //         res.end('Err');
    //     } else {
    //         console.log(data); 
            // res.end(data);
    //     }
    });
}).listen(5000, () => {
    console.log("Server is running on port 5000");
});
