const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        minLength: [4, "Username must has 4 or more characters"]

    },
    email: {
        type: String,
        required: true,
        // Google!
        match: [/.+\@.+\..+/, 'Not a valid email address']
    },
    address: {
        street: {type: String, required: true},
        suite: {type: String, required: true},
        city: {type: String, required: true, match: [/^[A-Za-z ]*$/, "Only alphabet characters and spaces are allowed"]},
        zipcode: {type: String, required: true, match: [/^\d{5}-\d{4}$/, "Must be in DDDDD-DDDD format"]},
        geo: {
          lat: {type: Number, required: true},
          lng: {type: Number, required: true}
        }
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{1}-\d{3}-\d{3}-\d{4}$/, "D-DDD-DDD-DDDD format only"]
    },
    website: {
        type: String,
        required: true,
        match: [/^(https|http)\:\/\/.*/, "Must be a valid link"]
    },
    company: {
        name: {type: String, required: true},
        catchPhrase: {type: String, required: true},
        bs: {type: String, required: true},
      }
})

const User = mongoose.model("User", UserSchema)
module.exports = User
