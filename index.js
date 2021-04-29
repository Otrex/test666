const express = require('express')
require("dotenv").config({path : "./.env"})

const app = express()

const { passport } = require('./services/AuthServices')

app.use(passport.initialize())

app.use('/', require('./route/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
	console.log(`Server Started on PORT::${PORT}`)
})