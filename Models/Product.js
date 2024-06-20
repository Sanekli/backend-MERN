const mongoose = require('mongoose')


const Product = new mongoose.Schema (
    {
        title :{type:String , required:true} , 
        description :{type:String , required:true}, 
        url_images :{type : String} ,
        price :{type:String}, 
        duration : {type : String},
        location : {type : String}
    }
)
module.exports = mongoose.model('Products' , Product )