var express = require('express');
var router = express.Router();
// var passport = require('passport-github');
// var express = require('express')
var passport = require('passport')
  , util = require('util')
  , GitHubStrategy = require('passport-github').Strategy;

// router.use(express.json());       // to support JSON-encoded bodies
// router.use(express.urlencoded()); // to support URL-encoded bodies

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});


passport.use(new GitHubStrategy({
    clientID: '42c48e20cbd747597af6',
    clientSecret: 'aa602af23a2e236936afcf5ea28a5b2192d1ae18',
    callbackURL: "http://localhost:5000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    process.nextTick(function () {
      return done(null, profile);
    });
  }
));

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
  // console.log(req)
});

// Webhook
router.get('/webhook', function(req, res) {

});

router.get('/auth/github',
  passport.authenticate('github')); 

router.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/' }),
  function(req, res) {
    console.log(req.user.username)
    // Successful authentication, redirect home.
    // res.redirect('/');
    res.render('index', { title: req.user.username })
    // res.render('login', { username: req.user });
    // var request = require('request');
    // var post_options = 
    //   {
    //     "name": "web",
    //     "active": true,
    //     "events": [
    //       "push"
    //     ],
    //     "config": {
    //       "url": "http://localhost:5000/webhook",
    //       "content_type": "json"
    //     }
    //   }
    //   var post_string = JSON.stringify(post_options);
    //   // var headers = {
    //   //   'Content-Type': 'application/json',
    //   //   'Content-Length': post_string.length
    //   // };
    //   request.post(
    //       post_options,
    //       function (error, response, body) {
    //           if (!error && response.statusCode == 200) {
    //               console.log(body)
    //           }
    //       }
    //   );
    
  }); 
var gith = require('gith').create( 5000 );
gith({
  repo: 'maxlever/sample_app'
}).on( 'all', function( payload ) {
  console.log( 'Post-receive happened!' );
});
router.post ('/webhook', function(req, res) {
    res.render('index', { title: req.ref })
});
module.exports = router;
