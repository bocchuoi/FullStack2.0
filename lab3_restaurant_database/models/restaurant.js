const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
    "address": {"building": String, "street": String, "zipcode": String},
    "city": String,
    "cuisine": String,
    "name": String,
    "restaurant_id": String
})

const Restaurant = mongoose.model("Restaurant", RestaurantSchema)
module.exports = Restaurant

// {
//     "address": {
//       "building": "1008",
//       "street": "Morris Park Ave",
//       "zipcode": "10462"
//    },
//    "city": "Bronx",
//    "cuisine": "Bakery",
//    "name": "Morris Park Bake Shop",
//    "restaurant_id": "30075445"