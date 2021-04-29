const express = require('express')
require("dotenv").config({path : "./.env"})

const app = express()

const { GoogleAuth } = require('./services/SocialAuth')

const googleAuth = new GoogleAuth(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.AUTH_FAILED_CALLBACK)

app.use(googleAuth.init())

app.use('/', googleAuth.route(), (res, req) => {
	console.log(googleAuth.getUser())
})

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
	console.log(`Server Started on PORT::${PORT}`)
})