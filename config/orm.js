//require to connection.js
//Here is the O.R.M where you write functions that takes inputs and conditions and turn them into database commands like SQL.
var connection = require('../config/connection.js');

function printQuestionMark(num){
	var arr = [];
	for (var i = 0; i < num; i++){
		arr.push('?');
	}
	return arr.toString();
}

function objToSql(ob) {
	var arr = [];

	for(var key in ob){
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}
	return arr.toString();
}

var orm = {
	//selectall
	all: function (tableInput, cb) {
		var queryString = 'SELECT * FROM ' + tableInput + ';';
		connection.query(queryString, function (err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	//insertOne
	create: function(table,cols,vals,cb){
		var queryString = 'INSERT INTO' + table;

		queryString = queryString + '(';
		queryString = queryString + cols.toString();
		queryString = queryString + 'VALUES (';
		queryString = queryString + printQuestionMark(vals.length);
		queryString = queryString + ') ';

		console.log(queryString);

		connection.query(queryString, function(err, result){
			if(err) throw err;
			cb(result);

		});
	},
	//updateOne
	update: function(table, objCalVals, conditon, cb) {
		var queryString = 'UPDATE ' + table;

		queryString = queryString + ' SET ';
		queryString = queryString + objToSql(objCalVals);
		queryString = queryString + ' WHERE ';
		queryString = queryString + conditon;

		console.log(queryString);
		
		connection.query(queryString, function(err,result){
			if(err) throw err;
			cb(result);
		});
	},



};

module.exports = orm;



