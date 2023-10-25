import express from "express";
//var express = require('express');



let configViewEngine=(app)=> {
    //arrow function
    app.use(express.static("./src/public"));
    app.set("view engine","ejs"); //jsp(java), blade(php): for if else
    app.set("views","./src/views");
}

module.exports=configViewEngine;