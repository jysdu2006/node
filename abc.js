var http=require('http');
var fs=require('fs');

fs.readFile('clock.html','utf-8',function(err,data){
	if(err)
		console.error(err);
	else{
		http.createServer(function(req,res){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<meta charset="utf-8"/>');
		 res.write('<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">');
    res.write('<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>');
    res.write('<script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>');
		res.write(data,'utf8');
		res.end('<p>Hello World</p>');
}).listen(3000);
	}
});
