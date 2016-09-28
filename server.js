//requiring express mysql and method-override.
var methodOverride = require('method-override')
var express = require("express");
var app = express();
// Adding in the components of the mysql library. Outlining the parameters tied to the mysql db
var mysql = require('mysql');
//========================================================================//
var connection = mysql.createConnection({
	PORT: 3306,
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'burgers_db'
});


