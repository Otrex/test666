const passport = require('passport')

const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

let route = {}

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.AUTH_FAILED_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
  	// console.log({accessToken, refreshToken, profile})
    // Register of find the user in our db via profile
    // Then return user
    let user = profile
    // done(null, user);
  }
));

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.AUTH_FAILED_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
    // console.log({accessToken, refreshToken, profile})
    // Register of find the user in our db via profile
    // Then return user
    let user = profile
    // done(null, user);
  }
));


// Edit this to setu the failure
route.facebookAuth = passport.authenticate('facebook')
route.facebookAuthCallback = passport.authenticate('facebook', { failureRedirect: '/login' })


route.googleAuth = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
route.googleAuthCallback = passport.authenticate('google', { failureRedirect: '/login' })

const router = require('express').Router()
const { route } = require('../services/AuthServices')

// route.get ('/callback', (req, res)=>{
//   console.log(req)
//   res.send("<h1> Working </h1>")
// })
router.get('/facebook', route.facebookAuth)
router.get('/facebook/callback', route.facebookAuthCallback, (req, res)=>res.redirect("/"))

router.get('/google', route.googleAuth)
router.get('/callback', route.googleAuthCallback, (req,res)=>{
  console.log(req.user)
  res.redirect('/')
})

route.user = (req, res) =>{

}

module.exports = {
	passport, route
}