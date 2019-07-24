var express = require('express');
var mongoose = require("mongoose");

var router = express.Router();

var socialcategory = mongoose.model("SocialCategory");

// CRUD //
router.get('/', function (req, res, next) {
    socialcategory.find({}, (err, result) => {
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