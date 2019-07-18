const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

var services = mongoose.connection.model("Service");

router.get('/', function(req, res, next) {
  services.find({},(err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.get('/:id', function(req, res, next){
  services.finById({ _id: req.params.id },(err,result) => {
    if (err) throw err;
    res.send(result);
  });
});

router.post('/',function(req,res,next){
  const newService = new services({
    service_id:req.body.user_id,
    name:req.body.name,
    description:req.body.description
  });
  newService.save().then(data => {
    res.send(data);
  }).catch(err => {console.log(err)});
});

router.put('/:id', function(req,res,next){
  services.findByIdAndUpdate({ _id: req.params.id},
  {update:{name:"SuperTrop"}}, (req.body,(err,result)=> {
    if (err) throw err;
    res.send("Service updated");
  }));
});

router.delete('/:id', function(req,res,next){
  services.findByIdAndRemove({_id: req.params.id},(err,result) => {
    if (err) throw err;
    res.send("Service deleted");
  });
});
  
module.exports = router;