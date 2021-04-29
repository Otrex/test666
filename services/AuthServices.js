const passport = require('passport')

const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const route = {}

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

module.exports = {
	passport, route
}