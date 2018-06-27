var fs = require('fs');

module.exports = {
	test : function () {
		return fs.readFileSync('views/test.html');
	},
	profile : function () {
		return fs.readFileSync('views/profile.html');
	},
	formations : function () {
		return fs.readFileSync('views/formations.html');
	},
	competences : function () {
		return fs.readFileSync('views/competences.html');
	},
	projets : function () {
		return fs.readFileSync('views/projets.html');
	},
	caller : function (action) {

		return this[action]();
	}
}
