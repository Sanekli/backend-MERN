const mongoose = require('mongoose')

const ConnectDB = async () => {
    try {
        await mongoose.connect (process.env.MONGO_URI) ; 
        console.log ('db is connected' ) ; 
    } catch (error) {
        console.log ({msg: 'Error connecting to db atlas'} , error)
    
    }
}

module.exports = ConnectDB