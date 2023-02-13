const express = require('express')
const mongoose = require('mongoose')
const userModel = require("./models/users.js")

const app = express()
app.use(express.json())
app.use(express.urlencoded())

const atlasDbLink = 'mongodb+srv://user:user@cluster0.yojbzm5.mongodb.net/fs?retryWrites=true&w=majority'

mongoose.connect(`${atlasDbLink}`, { useNewUrlParser: true, useUnifiedTopology: true });


app.post('/users', async(req, res) => {
    const newUser = new userModel(req.body)
    try {
        await newUser.save(req.body)
        res.status(200).send({"msg": "Ok"})
    }
    catch (e) {
        res.status(412).send(e)
        console.log(e)
    }
})


app.listen(3000, () => console.log("Running on port 3000"))