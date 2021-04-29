const route = require('express').Router()
const AuthController = require('../controller/auth')

route.get ('/callback', (req, res)=>{
	console.log(req)
	res.send("<h1> Working </h1>")
})
route.get('/facebook', AuthController.facebookAuth)
route.get('/facebook/callback', AuthController.facebookAuthCallback, (req, res)=>res.redirect("/"))

route.get('/google', AuthController.googleAuth)
route.get('/google/callback', AuthController.googleAuthCallback, (req,res)=>res.redirect('/'))

module.exports = route