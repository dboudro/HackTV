var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('login', {username: req.user});
});

// router.get('/',function(req,res) {
//   if (req.session && req.session.uid) {
//       return res.redirect('/board');
//   }
//   res.render('login');
// });

module.exports = router;
