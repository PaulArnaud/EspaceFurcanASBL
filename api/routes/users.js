var express = require('express');
var passport = require("passport");
var mongoose = require("mongoose");
var router = express.Router();

var users = mongoose.connection.model("User");

router.get('/', function(req, res, next) {
  users.find({},(err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get('/:id', function(req, res, next){
  users.finById({_id: req.params.id },(err,result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/',function(req,res,next){
  const newUser = new users({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone,
    user_id:req.body.user_id
  });
  newUser.save().then(data => {
    res.send(data);
  }).catch(err => {console.log(err)});
});

router.put('/:id', function(req,res,next){
  users.findOneAndUpdate({_id: req.params.id,
  update:{name:"SuperTrop"}}, (req.body,(err,result)=> {
    if (err) throw err;
    res.send("User updated");
  }));
});

router.delete('/:id', function(req,res,next){
  users.findByIdAndRemove({_id:req.params.id},(err,result)=>{
    if (err) throw err;
    console.log(result);
    res.send("User deleted");
  });
});

router.post('/login',
  passport.authenticate('local', { 
    successFlash: 'Connected' 
  })

);

router.get('/logout', (req, res) => {
  req.logout();
});

module.exports = router;
