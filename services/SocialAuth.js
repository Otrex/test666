const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

class GoogleAuth {
	constructor(CLIENT_ID, CLIENT_SECRET, CALLBACK) {
		passport.use(new GoogleStrategy({
		    clientID: CLIENT_ID,
		    clientSecret: CLIENT_SECRET,
		    callbackURL: CALLBACK
		  },
		  function(accessToken, refreshToken, profile, done) {
		    console.log({accessToken, refreshToken, profile})
		    // Register of find the user in our db via profile
		    // Then return user
		    let user = profile
		    done(null, user);
		  }
		));
	}
}