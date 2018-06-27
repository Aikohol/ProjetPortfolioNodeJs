var querystring = require('querystring');
var url = require('url');
var fs = require('fs');


exports.ret = function (request, response) {

	var page = url.parse(request.url).pathname;
	var params = querystring.parse(url.parse(request.url).query);

	page = page.split('/');
	if(page.length < 2) {
		return fs.readFileSync('views/404.html');
	}
	else {
		var controller = page[1];
		var action = page[2];
	}


	try {
		try {
			var object = require("./controller/" + controller + "Controller");
		}
		catch (e) {
			return fs.readFileSync('views/404.html');
		}
		return object.caller(action);
	}
	catch (e) {
		return fs.readFileSync('views/404.html');
	}
}
