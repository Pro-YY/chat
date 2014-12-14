var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('chat/index-tpl', { title: 'Chat by angular' });
});

router.get('/jq', function(req, res) {
  res.render('chat/index', { title: 'Chat by jquery' });
});

module.exports = router;
