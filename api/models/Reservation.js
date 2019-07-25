const mongoose = require("mongoose");
const Service = require('./Service');
const User = require('./User');

const ReservationSchema = new mongoose.Schema({
    reservation_id: {
        type: String,
        description: "must be an integer and is required"
    },
    date: {
        type: Date,
        required: true,
        description: "must be a string and is required"
    },
    hour: {
        type: String,
        required: true,
        description: "must be a string and is required"
    },
    service: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Service,
        required: true,
        description: "service"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
        required: true,
        description: 'user'
    }
});

const Reservation = mongoose.model("Reservation", ReservationSchema);

module.exports = Reservation;