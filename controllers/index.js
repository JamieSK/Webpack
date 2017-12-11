let express = require('express');
let router = new express.Router();

router.use('/films', require('./films'));

router.get('/', function(req, res) {
  let options = {
    root: __dirname + '/../client/build/',
  };
  res.sendFile('index.html', options);
});

module.exports = router;
