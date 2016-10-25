var Sequelize = require('sequelize');
var env = process.env.NODE_ENV || 'development';
var sequelize;

if (env === 'production') {
	sequelize = new Sequelize(process.env.DATABASE_URL, {
		dialect: 'postgres'
	});
} else {
	// sequelize = new Sequelize(undefined, undefined, undefined, {
		// 'dialect': 'sqlite',
		// 'storage': __dirname + '/data/dev-todo-api.sqlite'
	// });
	sequelize = new Sequelize('act', 'root', 'Password#1604', {
		'dialect': 'mysql',
	  pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	  }
	});
}

var db = {};

// db.todo = sequelize.import(__dirname + '/models/todo.js');
// db.user = sequelize.import(__dirname + '/models/user.js');
// db.token = sequelize.import(__dirname + '/models/token.js');

db.appParam = sequelize.import(__dirname + '/models/appParam.js');
db.branch = sequelize.import(__dirname + '/models/branch.js');
db.currency = sequelize.import(__dirname + '/models/currency.js');
db.lookupCode = sequelize.import(__dirname + '/models/lookupCode.js');
db.lookupType = sequelize.import(__dirname + '/models/lookupType.js');
db.menu = sequelize.import(__dirname + '/models/menu.js');
db.organization = sequelize.import(__dirname + '/models/organization.js');
db.popupType = sequelize.import(__dirname + '/models/popupType.js');
db.respMenu = sequelize.import(__dirname + '/models/respMenu.js');
db.responsibility = sequelize.import(__dirname + '/models/responsibility.js');
db.user = sequelize.import(__dirname + '/models/user.js');
db.userBranch = sequelize.import(__dirname + '/models/userBranch.js');
db.userResp = sequelize.import(__dirname + '/models/userResp.js');


db.sequelize = sequelize;
db.Sequelize = Sequelize;

// db.todo.belongsTo(db.user);
// db.user.hasMany(db.todo);

module.exports = db;
