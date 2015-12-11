var express = require('express');
var router = express.Router();

var crawler = require('../crawler/index');

/* GET home page. */
router.get('/', function(req, res) {
  crawler.crawl(function(content) {
    console.log(content);
  });
  res.render('index', { title: 'Express' });
});

module.exports = router;
