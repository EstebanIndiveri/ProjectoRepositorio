'use strict'

var mongoose=require('mongoose');

var schema=mongoose.Schema;

var ProjectSchema= schema({
    name:String,
    description:String,
    category:String,
    year:Number,
    langs:String,
    image:String
});

module.exports = mongoose.model('Project',ProjectSchema);
// lo pone en minuscula y en plucar
//projects sería entonces ...