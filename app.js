var http=require('http');

http.createServer(function (req,res){
	res.writeHead(200,{'Content-Type':'text/html'});
	res.write('<h1>Node.js</h1>');
	res.write('<i class="err">error</i>');
	res.end('<p>hello world</p>');
}).listen(3000);