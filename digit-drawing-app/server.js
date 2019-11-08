var http = require('http');
var url = require('url');
var fs = require('fs');

var server = http.createServer(function(request, response){
	pathName = url.parse(request.url).pathname;

	fs.readFile(__dirname + pathName, function(err, data){
		if(err){
			response.writeHead(404, {'Content-Type':'text/plain'});
			response.write('Page was not found' + JSON.stringify(err));
			response.end();
		} else {
			response.writeHead(200);
			response.write(data);
			response.end();
		}
	})
});

server.listen(3000, function(){
	console.log('Server is running at 3000');
});