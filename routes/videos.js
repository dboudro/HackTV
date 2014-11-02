var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('videos', { title: 'Express' });
   // res.send('respond with a resource');

});

module.exports = router;
