var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");

var users = mongoose.connection.collection("users");

/* GET users listing. */
router.get('/', function(req, res, next) {
  users.find({}).toArray(function(err, result) {
    if (err) throw err;
    res.send(result);
  });
});

router.get('/:id', function(req, res, next){
  users.findOne({ userId: req.params.id },function(err,result){
    if (err) throw err;
    res.send(result);
  });
});

router.post('/',function(req,res,next){
  users.insertOne(req.body,(err,result)=> {
    if (err) throw err;
    res.send("User added");
  });
});

router.put('/:id/update', function(req,res,next){
  users.findOneAndUpdate({query:{ userId: req.params.id},
  update:{name:"SuperTrop"}}, (req.body,(err,result)=> {
    if (err) throw err;
    res.send("User updated");
  }));
});

router.delete('/:id/delete', function(req,res,next){
  users.findOneAndDelete({query:{userId: req.params.id}},function(err,result){
    if (err) throw err;
    res.send("User deleted");
  });
});

module.exports = router;
