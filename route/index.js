const route = require('express').Router()
const AuthController = require('../controller/auth')

route.get('/facebook', AuthController.facebookAuth)
route.get('/facebook/callback', AuthController.facebookAuthCallback, (req, res)=>res.redirect("/"))

route.get('/google', AuthController.googleAuth)
route.get('/google/callback', AuthController.googleAuthCallback, (req,res)=>res.redirect('/'))

module.exports = route