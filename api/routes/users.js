var express = require('express');
var mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../keys");


var router = express.Router();

const validateRegisterInput = require("../register");
const validateLoginInput = require("../login");

var User = mongoose.model("User");


// CRUD //
router.get('/', function(req, res, next) {
  User.find({},(err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get('/:id', function(req, res, next){
  User.finById(req.params.id,(err,result) => {
    if (err) throw err;
    res.send(result);
  });
});


router.post('/',function(req,res,next){
  const newUser = new User({
    name:req.body.name,
    email:req.body.email,
    password:req.body.password,
    phone:req.body.phone,
    user_id:req.body.user_id
  });
  newUser.save();
  res.send("User updated");
});

router.put('/:id', function(req,res,next){
  User.findByIdAndUpdate(req.params.id,
    { name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      phone: req.body.phone,
      user_id: req.body.user_id,
    });
    res.send("User updated");
});

router.delete('/:id', function(req,res,next){
  User.findByIdAndRemove(req.params.id,(err,result)=>{
    if (err) throw err;
    console.log(result);
    res.send("User deleted");
  });
});


// Register & Login 

router.post('/register', (req, res) => {
  // Form validation
  const { errors, isValid } = validateRegisterInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
  // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

router.post("/login", (req, res) => {
  // Form validation
  const { errors, isValid } = validateLoginInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const email = req.body.email;
  const password = req.body.password;
  // Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
  // Check password
   bcrypt.compare(password, user.password).then(isMatch => {
    if (isMatch) {
      // User matched
      // Create JWT Payload
      const payload = {
        id: user.id,
        name: user.name
      };
    // Sign token
      jwt.sign(
        payload,
        keys.secretOrKey,
        {
          expiresIn: 31556926 // 1 year in seconds
        },
        (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        }
      );
    } else {
      return res
        .status(400)
        .json({ passwordincorrect: "Password incorrect" });
    }
    });
  });
});

module.exports = router;
