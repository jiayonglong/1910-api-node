var express = require('express');
var router = express.Router();
var requests = require('requests');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/reg', function(req, res, next) {
  console.log(req.body);
});
router.post('/login', function(req, res, next) {
  requests('http://passport.1910.com/web/login', { streaming })
      .on('data', function (chunk) {
        console.log(chunk)
      })
      .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);

        console.log('end');
      });
  console.log(req.body);
  res.send({errno:0,msg:"ok"});
});
module.exports = router;
