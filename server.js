var express = require('express'); // requre the express framework
const cors = require("cors");
var app = express();
var fs = require('fs'); //require file system object

// Endpoint to Get a list of users
app.use(cors());
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "users.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); // you can also use res.send()
    });
})

// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})

// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.get("/", (req,res)=>{
// res.send("server working");
// });

// app.listen(8080, ()=>{
// console.log("Server Listen on http://localhost:8080");
// });