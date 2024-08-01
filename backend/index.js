require('dotenv').config();

const config = require('./config.json')
const mongoose = require('mongoose')

mongoose.connect(config.connectionString)
console.log("Connected")
const User = require("./models/user.model")

const express = require('express')
const cors = require('cors')
const app = express()

const jwt = require('jsonwebtoken')
const { authenticationToken } = require('./utilities')
app.use(express.json())


app.use(
    cors(
        {
            origin:"*",
        }
    )
)

app.get("/", (req, res) => {
    res.json({data: "Hello"});
})

// account create
app.post('/create-account', async(req, res) => {
    // res.send("Hello")
    const {name, email, password} = req.body
    
    // const isUser = await User.findOne( { email: email });
    // res.send(isUser)

    // if(isUser){
    //     return res.json({
    //         user: isUser,
    //         error: true,
    //         message: "User already exists"
    //     })
    // }

    const user = new User({name:"ds", email:"adfs@dsv.com", password:"afsafs"})
    await user.save()

    const accessToken = jwt.sign( {user}, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1hr",
    })

    return res.json({
        error: false, 
        user, 
        accessToken,
        message: "Registration Successful"
    })
})

const PORT = 8000

app.listen(PORT)

module.exports = app;