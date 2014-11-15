var express=require('express');
var fs=require('fs');

var app=new express();
app.get('/',function(req,res){
	res.send("hello world");
});

app.get('/about',function(req,res){
	console.log(req.url);
	res.send("about page!");
});

app.get('/test',function(req,res){
	console.log(req.url);
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write('<meta charset="utf-8">');
    res.write('<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">');
    res.write('<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>');
    res.write('<script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>');
    res.write('<script src="http://sdumicro.qiniudn.com/add.js"></script>')
    fs.readFile('./clock.html','utf-8',function(err,data){
    	if(err)
    		console.error(err);
    	else
    		res.end(data);
    });
});



app.listen(3000);