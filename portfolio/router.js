const express = require('express');
const app = express();
const router = express.Router();
const http = require("http");

http.createServer(function (req, res) {
    router(req,res);
}).listen(8080);


app.use(express.static(__dirname), router);

const path = __dirname;



router.get('/',function(req, res){
res.sendFile(__dirname + '/src/index.html');
 });

router.get('/projects.html',function(req, res){
res.sendFile(path + 'projects.html');
});

router.get('/about',function(req, res){
res.sendFile(path + 'about.html');
});

router.get('/contact',function(req, res){
    res.sendFile(path + 'contact.html');
});


app.listen(3000,function(){
    console.log("Server running at Port 3000");
});

