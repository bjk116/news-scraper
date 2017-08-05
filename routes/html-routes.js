//Dependencies
var path = require('path');

//Routes
module.exports = function(app) {

	app.get('/', function(req, res) {
		//Send landing page
		res.render('index');
	});
};