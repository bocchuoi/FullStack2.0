const express = require('express')
const mongoose = require('mongoose')
const restaurantModel = require("./models/restaurant.js")

const app = express()
app.use(express.json())
app.use(express.urlencoded())

const atlasDbLink = 'mongodb+srv://user:user@cluster0.yojbzm5.mongodb.net/fs?retryWrites=true&w=majority'

mongoose.connect(`${atlasDbLink}`, { useNewUrlParser: true, useUnifiedTopology: true });


app.get('/restaurants', async(req, res) => {
    const sort = req.query.sortBy
    let restaurants = []
    // if sort query parameter is in the link, return all the restaurants with specifications of lab question 6
    if (sort) {
        const sortNum = (sort == 'ASC') ? 1 : -1
        restaurants = await restaurantModel.find({}, { _id: 1, cuisine: 1, name: 1, city: 1, restaurant_id: 1 }).sort({restaurant_id:sortNum})
    } 
    // return all restaurants and all of their details (lab question 4)
    else {
        restaurants = await restaurantModel.find({})
    }
    try {
        res.send(restaurants)
    }
    catch (err) {
        res.status(500).send(err)
    }
})


app.get('/restaurants/cuisine/:cusineType', async(req, res) => {
    const restaurants = await restaurantModel.find({"cuisine": req.params.cusineType})
    try {
        res.send(restaurants)
    }
    catch (err) {
        res.status(500).send(err)
    }
})


app.get('/restaurants/Delicatessen', async(req, res) => {
    const restaurants = await restaurantModel.find({"cuisine": "Delicatessen", "city": {$ne: 'Brooklyn'}}, {cuisine:1, name:1, city:1}).sort({name:1})
    try {
        res.send(restaurants)
    }
    catch (err) {
        res.status(500).send(err)
    }
})

app.listen(3000, () => console.log("Running on port 3000"))