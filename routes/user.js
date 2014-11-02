var express = require('express');
var router = express.Router();
// var express = require('express')
var passport = require('passport-github')
  , util = require('util')
  , GitHubStrategy = require('passport-github').Strategy;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

passport.use(new GitHubStrategy({
    clientID: '42c48e20cbd747597af6',
    clientSecret: 'aa602af23a2e236936afcf5ea28a5b2192d1ae18',
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate({ githubId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));



router.get('/',
  passport.authenticate('github')); 

router.get('/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }); 

module.exports = router;
