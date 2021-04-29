const express = require('express')
require("dotenv").config({path : "./.env"})

const app = express()

const { passport, googleAuth, facebookAuth } = require('./services/SocialAuth')

// User is been added to the request object after the callback

app.use(passport.initialize())

app.use('/google', googleAuth.route())

app.use('/callback', googleAuth.callback('/login'), (req, res)=> {
	console.log(req.user)
})

app.use('/facebook', facebookAuth.route())

app.use('/f/callback', facebookAuth.callback('/login'), (req, res)=> {
	console.log(req.user)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
	console.log(`Server Started on PORT::${PORT}`)
})