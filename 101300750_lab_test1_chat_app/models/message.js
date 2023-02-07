const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    fromUser: {
        type: String,
        required: true,
    },
    room: {
        type: String,
        required: true,
    },        
    message: {
        type: String,
        required: true,
    },    
    dateSent: {
        type: Date,
        required: true,
    }  
})

const User = mongoose.model("User", userSchema)
module.exports = Restaurant
