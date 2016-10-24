var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');
var db = require('./db.js');
// var bcrypt = require('bcrypt');
var middleware = require('./middleware.js')(db);

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// list down and register all controllers files
require('./controllers/indexController.js')(app, middleware, db);
require('./controllers/todoController.js')(app, middleware, db);
require('./controllers/userController.js')(app, middleware, db);

db.sequelize.sync({force: true}).then(function() {
	app.listen(PORT, function() {
		console.log('Express listening on port ' + PORT + '!');
	});
});
