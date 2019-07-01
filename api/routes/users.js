var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.connection.collection('users').find({}).toArray(function(err, result) {
    res.send(result);
  });
});

router.get('/:userId', function(req, res, next){
  console.log(req.params.userId);
  var query = { userId: parseInt(req.params.userId) };
  console.log(query);
  mongoose.connection.collection('users').findOne(query,function(err,result){
    if (err) throw err;
    console.log(result);
    res.send(result);
  });
});

module.exports = router;
