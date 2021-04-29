const router = require('express').Router()
const { route } = require('../services/AuthServices')

// route.get ('/callback', (req, res)=>{
// 	console.log(req)
// 	res.send("<h1> Working </h1>")
// })
router.get('/facebook', route.facebookAuth)
router.get('/facebook/callback', route.facebookAuthCallback, (req, res)=>res.redirect("/"))

router.get('/google', route.googleAuth)
router.get('/callback', route.googleAuthCallback, (req,res)=>{
	console.log(req.user)
	res.redirect('/')
})

module.exports = router