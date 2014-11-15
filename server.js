var http = require('http');
var port = 18080;
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<link rel="stylesheet" href="http://cdn.bootcss.com/bootstrap/3.3.0/css/bootstrap.min.css">');
    res.write('<script src="http://cdn.bootcss.com/jquery/1.11.1/jquery.min.js"></script>');
    res.write('<script src="http://cdn.bootcss.com/bootstrap/3.3.0/js/bootstrap.min.js"></script>');
    res.write('<h1>Node.js</h1>');
    res.write('<div class="alert alert-success" role="alert">well done!</div>');
    res.end('<p>Hello World</p>');
}).listen(port);
