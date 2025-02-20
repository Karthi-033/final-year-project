const mongoose = require("mongoose");
const express = require("express");

mongoose.connect("mongodb://0.0.0.0:27017/users");

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
    
});
const UserModel=mongoose.model("info",UserSchema);
module.exports= UserModel
