const passport = require('passport')

const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: process.env.AUTH_FAILED_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
  	console.log({accessToken, refreshToken, profile})
    // Register of find the user in our db via profile
    // Then return user
    let user = profile
    done(null, user);
  }
));



passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.AUTH_FAILED_CALLBACK
  },
  function(accessToken, refreshToken, profile, done) {
    // Register of find the user in our db via profile
    // Then return user
    let user = profile
    done(null, user);
  }
));


// passport.serializeUser(function(user, cb) {
//   cb(null, user);
// });

// passport.deserializeUser(function(obj, cb) {
//   cb(null, obj);
// });

module.exports = {
	passport
}