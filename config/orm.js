//require to connection.js
var connection = require('../config/connection.js');

var orm = {
	//selectAll
	selectAll: function(cb){
		var queryString = "SELECT * FROM " + tableInput + ";";
		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);
		});
	};
	//insertOne
	insertOne: function(cb){
		var queryString = "INSERT INTO " + tableInput + ""????
		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);

		});
	};
	//updateOne
	updateOne: function(cb){
		var queryString = "UPDATE" ??????
		connection.query(queryString, function(err,result){
			if(err) throw err;
			cb(result);
		});
	};



};

module.exports = orm;