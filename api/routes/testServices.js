const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

router.get('/', function(req, res, next) {
    mongoose.connection.collection('services').find({}).toArray(function(err, result) {
        res.render('service', { services: result }
        );
    });
});

module.exports = router;