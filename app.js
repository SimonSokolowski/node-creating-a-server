var http = require("http");

var server = http.createServer(function(req, res){
    //this will show what extra url you are trying to request, eg 127.0.0.1:3000/hello
    //will show "request was made: hello"
    console.log("request was made: " + req.url);
    
    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hey, this is a test.");
});

server.listen(3000, "127.0.0.1")
console.log("Now listening to port 3000");