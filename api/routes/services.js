const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

var services = mongoose.connection.collection("services");

router.get('/', function(req, res, next) {
    services.find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  router.get('/:id', function(req, res, next){
    services.findOne({ serviceId: req.params.id },function(err,result){
      if (err) throw err;
      res.send(result);
    });
  });
  
  router.post('/',function(req,res,next){
    services.insertOne(req.body,(err,result)=> {
      if (err) throw err;
      res.send("Service added");
    });
  });
  
  router.put('/:id/update', function(req,res,next){
    services.findOneAndUpdate({query:{ serviceId: req.params.id},
    update:{name:"SuperTrop"}}, (req.body,(err,result)=> {
      if (err) throw err;
      res.send("Service updated");
    }));
  });
  
  router.delete('/:id/delete', function(req,res,next){
    services.findOneAndDelete({query:{serviceId: req.params.id}},function(err,result){
      if (err) throw err;
      res.send("Service deleted");
    });
  });
  

module.exports = router;