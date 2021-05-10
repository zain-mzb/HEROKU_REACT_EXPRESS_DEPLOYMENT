var express = require('express');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/api/products', function(req, res, next) {
  res.send(["Laptop", "Car", "Something"]);
});

module.exports = router;
