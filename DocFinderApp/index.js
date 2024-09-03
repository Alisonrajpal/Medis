var express = require("express");
var bodyParser = require("body-parser");
const mysql = require("mysql");
var app = express(); // store my express in a variable
var PORT = 3500;

app.use(bodyParser.json());
//Create a connection to mysql database

var conn =
  mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Longchain83#!",
    database: "docfinder",
  }) /
  //routing and path load app,].js file to bowser
  app.get("/api/Dog", function (request, response) {
    const query = "SELECT * FROM doctors";
    conn.query(query, (err, results) => {
      if (err) throw err;
      response.json(results);
    });
    response.sendFile(path.join(_dirname, "App.js"));
  });

//For connecting the mysql database connection server to check iif it is working sucessfully or not
conn.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL Database.");
});

app.listen(3500, function () {
  console.log("Express app is working");
});
