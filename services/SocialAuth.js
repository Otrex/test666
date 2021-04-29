const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require('passport')

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
		  }
		));
	}

	route(){
		return passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
	}
	_callback(uri) {
		return passport.authenticate('google', { failureRedirect: uri })
	}

	getUser() {
		return this.user
	}
}

module.exports  = {
	GoogleAuth,
	passport
}