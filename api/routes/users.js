var express = require('express');
var passport = require("passport");
var mongoose = require("mongoose");
var router = express.Router();

var users = mongoose.connection.collection("User");

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
  console.log(req.body);
  users.insertOne(req.body,(err,result)=> {
    if (err) throw err;
    res.send("User added");
  });
});

router.put('/:id/update', function(req,res,next){
  users.findOneAndUpdate({query:{ _id: req.params.id},
  update:{name:"SuperTrop"}}, (req.body,(err,result)=> {
    if (err) throw err;
    res.send("User updated");
  }));
});

router.delete('/:id', function(req,res,next){
  users.findOneAndDelete({query:{_id: req.params.id}},function(err,result){
    if (err) throw err;
    res.send("User deleted");
    users.find({}).toArray(function(err, result) {
      if (err) throw err;
      console.log(result);
    });
  });
});

router.post('/login',
  passport.authenticate('local', { 
    successRedirect: '/',
    failureRedirect: '/',
    failureFlash: true 
  })
);

router.get('/logout', (req, res) => {
  req.logout();
});

module.exports = router;
