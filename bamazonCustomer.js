var mysql = require("mysql"),
	inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	port: "3306",
	user: "root",
	password: "!ntr0_Retr",
	database: "Bamazon"

});

connection.connect();

connection.query("SELECT * FROM products", function (err, data) {
	if(err) throw err;

	// console.log(data);
});

// var questions = [
// 	{
// 		type: "list",
// 		name: "view",
// 		message: "Please Select",
// 		choices: ["View products for sale", "view low inventory", "Add inventory", "Add new Product"]
// 	}
// ];

// inquirer.prompt(questions)
// 	.then(function(data){
// 		console.log(data);
// 	})
// 	.catch(function(err){
// 		console.log(err);
// 	});

var questions = [
	{
		type: "input",
		name: "id",
		message: "What's the ID of the product?"
	},
	{
		type: "input",
		name: "product",
		message: "How many would you like to buy?"
	}
];

inquirer.prompt(questions)
	.then(function (data){
		console.log(data);
	})
	.catch(function (err){
		console.log(err);
	});