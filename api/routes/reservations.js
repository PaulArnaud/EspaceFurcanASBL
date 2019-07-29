const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

var reservations = mongoose.connection.model("Reservation");

router.get('/', function (req, res, next) {
    reservations.find({}, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.get('/:id', function (req, res, next) {
    reservations.finById(req.params.id, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

router.post('/', function (req, res, next) {
    const newReservation = new reservations({
        reservation_id: req.body.reservation_id,
        date: req.body.date,
        hour: req.body.hour,
        service: req.body.service_id,
        user: req.body.user_id
    });
    newReservation.save();
    res.send("Reservation added")
});

router.put('/:id', function (req, res, next) {
    reservations.findByIdAndUpdate(req.params.id,
        {
            reservation_id: req.body.reservation_id,
            date: req.body.date,
            hour: req.body.hour,
            service: req.body.service_id,
            user: req.body.user_id
        });
    res.send("Reservation updated");
});

router.delete('/:id', function (req, res, next) {
    reservations.findByIdAndRemove(req.params.id, (err, result) => {
        if (err) throw err;
        res.send("Reservation deleted");
    });
});

router.get('/user/:id',function (req,res,next) {
    reservations.find({user: req.params.id}, (err,result) => {
        if (err) throw err;
        res.send(result);
    });
});

module.exports = router;