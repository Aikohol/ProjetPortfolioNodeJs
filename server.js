var http = require('http');
var router = require('./router');
var fs = require('fs');

var onRequest = function (request, response) {
	var url = require('url');
	var page = url.parse(request.url).pathname;
	var extension = page.split('.').pop();
	var mime = {
		"css" : "text/css",
		"gif" : "image/gif",
		"jpg" : "image/jpeg",
		"jpeg": "image/jpeg",
		"js" : "application/javascript",
		"ttf" : "font/ttf",
		"png" : "image/png"
	}
	if (extension != page && extension in mime) {

		response.writeHead(200, {'Content-Type': mime[extension] });

		if(extension == 'js' || extension == 'img') {
			page = page.split("/");
				page = page[1] + '/' + page[2];
			try {
				response.end(fs.readFileSync('./' + page));
			}
			catch (e) {

			}
		}
		else {
			try {
				response.end(fs.readFileSync('.' + page));
			}
			catch (e) {

			}
		}
	}
	else {
		var content = router.ret(request, response);
		if(content){
			response.writeHead(200, {"Content-Type" : "text/html"});
			response.write(fs.readFileSync('./layout.html'));
			response.write(fs.readFileSync('./views/header.html'));
			response.write(fs.readFileSync('./views/about.html'));
			response.write(content);
			response.end(fs.readFileSync('./views/footer.html'));
		}
	}
};

var server = http.createServer(onRequest);


server.listen(8080);
