const express = require('express');
const mongoose = require("mongoose");
const router = express.Router();

const socialcategory = mongoose.model("SocialCategory");

router.get('/', function (req, res, next) {
    const query = req.query;
    socialcategory.find(query, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/:id', function (req, res, next) {
    socialcategory.finById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/', function (req, res, next) {
    const newsocialcategory = new socialcategory({
        name: req.body.name,
        socialcategory_id: req.body.user_id,
        description: req.body.description
    });
    newsocialcategory.save();
    res.send("Social Category updated");
});

router.put('/:id', function (req, res, next) {
    socialcategory.findByIdAndUpdate(req.params.id,
        {
            name: req.body.name,
            socialcategory_id: req.body.user_id,
            description: req.body.description
        });
    res.send("Social Category updated");
});

router.delete('/:id', function (req, res, next) {
    socialcategory.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) throw err;
        res.send("Social Category deleted");
    });
});

module.exports = router;