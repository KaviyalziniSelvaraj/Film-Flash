const mongoose=require('mongoose');
const express=require('express');
let loginschema=mongoose.Schema({
    name:String,
    email:String,
    pwd:String,
});
var loginmodel=mongoose.model('loginmodel',loginschema)
module.exports=loginmodel;