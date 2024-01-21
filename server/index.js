const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const UsersModel = require('./models/users')

const app = express();
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Application")

app.post('/register', (req, res) => {
    UsersModel.create(req.body)
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UsersModel.findOne({ email: email })
        .then(user => {
           if(user){
            if (user.password === password) {
                res.json("success")
            } else {
                res.json("password is incorrect")
            }
           }else{
            res.json("user not found")
           }
        })
})



app.listen(3001, () => {
    console.log("Serve is running")
})