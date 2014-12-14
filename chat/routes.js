var express = require('express');
var router = express.Router();

router.get('/jq', function(req, res) {
  res.render('chat/index', { title: 'Chat by jquery' });
});

router.get('/ng', function(req, res) {
  res.render('chat/index-tpl', { title: 'Chat by angular' });
});

module.exports = router;
