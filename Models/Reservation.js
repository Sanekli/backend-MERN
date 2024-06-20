const mongoose = require('mongoose')


const reservationSchema = new mongoose.Schema (
    {
        name :{type:String , required:true} , 
        lastName :{type:String , required:true} , 
        email : {type:String , required:true} ,
        phoneNumber : {type :Number},
        address : {type : String },
        date:{type: Date },
        choose : {type:String}
        
    }
)
module.exports = mongoose.model('Reservation' , reservationSchema )
