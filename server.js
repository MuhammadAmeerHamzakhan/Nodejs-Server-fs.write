let http = require("http");
let fs = require("fs");
var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://AmeerHamzaKhan:bagrisami123@cluster0.70pzv8u.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB', err);
});

const userSchema = new mongoose.schema({
    fname:string,
    lastname:string,
    email:string,
    password: string,
    dateofbirth: Date,
    gender : string,
});

const user=mongoose.model('user', userSchema);

var app = express();
app.use(cors());
app.use(bodyParser.json());
let database=[];
app.post ("/signup", (req , res)=>{
    console.log(req);
    const{fname, lastname, email, password, dateofbirth, gender} = req.body;
    var data = database.push (req.body);
    console.log(database);

    res.send({
        status:401,
        message:"Responce not send"
    });
});

app.post("/login", (req, res) => {
    console.log(req.body);
  
    if (database.length > 0) {
      database.map((value) => {
        console.log(database);
        if (value.email === req.body.email) {
          if (value.password === req.body.password) {
            res.send({
              satus: 200,
              message: "Login success",
            });
          } else {
            res.send({
              satus: 401,
              message: "Invalid Credentials",
            });
          }
        } else {
          res.send({
            status: 401,
            message: "Invalid Credentials",
          });
        }
      });
    }else{
      res.send({statu: 401, message: 'user Not Found'})
    }
  });
console.log("Server is running on port 5000");
// http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     fs.writeFile('example.txt', "Welcome To My Server", function(err){
//         console.log(err)
//     })
//     fs.readFile('example.txt', (err, data) => {
//         console.log(data)
//         if (err) {
//             console.log(err);
//             res.end('Err');
//         } else {
//             console.log(data); 
//             // res.end(data);
//         }
//         res.end(data.toString())
//     });
// }).listen(5000, () => {
// });