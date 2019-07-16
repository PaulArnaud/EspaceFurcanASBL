var express = require('express');
var router = express.Router();
var mongoose = require("mongoose");
var User = require("../models/User");
var passport = require("passport");

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

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true
  })(req, res, next);
});

router.get('/logout', (req, res) => {
  req.logout();
  req.flash('success_msg', 'You are logged out');
});

module.exports = router;
