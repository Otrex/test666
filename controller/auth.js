
const { passport } = require('../services/AuthServices')

exports.facebookAuth = passport.authenticate('facebook')
exports.facebookAuthCallback = passport.authenticate('facebook', { failureRedirect: '/login' })


exports.googleAuth = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] })
exports.googleAuthCallback = passport.authenticate('google', { failureRedirect: '/login' })