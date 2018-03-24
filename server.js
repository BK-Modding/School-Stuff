var express = require("express");
var zip = require('express-zip');
var path = './udemy_stuff/java-the-complete-java-developer-course/07 OOP Part 1 - Classes Constructors and Inheritance';

var app = express();

app.get("/", (req, res) => {
    res.send("kappa");
});

app.get("/chapter8", (req, res) => {
    res.download('./udemy_stuff/java-the-complete-java-developer-course/08 OOP Part 2 - Composition Encapsulation and Polymorphism/chapter8.zip');
});

app.listen(8080);
