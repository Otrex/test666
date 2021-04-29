
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

class GoogleAuth {
	constructor(CLIENT_ID, CLIENT_SECRET, CALLBACK) {
		passport.use(new GoogleStrategy({
		    clientID: CLIENT_ID,
		    clientSecret: CLIENT_SECRET,
		    callbackURL: CALLBACK
		  },
		  function(accessToken, refreshToken, profile, done) {
		    let user = profile
		    this.user = user
		    done(null, user);
		  }
		));
	}

	route(){
		return passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
	}
	callback(uri) {
		return passport.authenticate('google', { failureRedirect: uri })
	}
	getUser() {
		return this.user
	}
}

class FacebookAuth {
	constructor(APP_ID, APP_SECRET, CALLBACK) {
		passport.use(new FacebookStrategy({
		    clientID: APP_ID,
		    clientSecret: APP_SECRET,
		    callbackURL: CALLBACK
		  },
		  function(accessToken, refreshToken, profile, done) {
		    let user = profile
		    done(null, user);
		  }
		));
	}

	route(){
		return passport.authenticate('facebook')
	}

	callback(uri) {
		return passport.authenticate('facebook', { failureRedirect: '/login' })
	}

	getUser() {
		return this.user
	}
}

module.exports  = {
	googleAuth : new GoogleAuth(process.env.GOOGLE_CLIENT_ID, process.env.GOOGLE_CLIENT_SECRET, process.env.GOOGLE_FAIL_CALLBACK),
	facebookAuth : new FacebookAuth(process.env.FACEBOOK_APP_ID, process.env.FACEBOOK_APP_SECRET, process.env.FACEBOOK_FAIL_CALLBACK),
	passport
}