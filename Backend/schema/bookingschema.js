const mongoose=require('mongoose');
const express=require('express');
let bookingschema=mongoose.Schema({
    name:String,
    movie:String,
    theatre:String,
    showtime:String,
    date:Number,
    seats:String,
    count:Number,
});
var bookingmodel=mongoose.model('bookingmodel',bookingschema)
module.exports=bookingmodel;