//Here is where you setup a model for how to interface with the database.
//requesting orm.js. 
var orm = require('../confi/orm.js');

var burger = {
	all: function(cb) {
		orm.all('burger', function (res) {
			cd(res);
		});
	},
	//cols and vals are arrays
	create: function (cols, vals, cb) {
		orm.create('burger', cols, vals, function (res){
			cb(res);
		});
	},
	update: function (objColVals, condition, cb){
		orm.update('burger', objColVals, condition, function (res){
			cb(res);
		});
	}
};

module.exports = burger;
