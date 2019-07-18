const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema( {
    service_id: {
        type: "string",
        required: true,
        description: "must be an integer and is required"
    },
    name: {
        type: "string",
        required: true,
        description: "must be a string and is required"
    },
    description: {
        type: "string",
        description: "must be a string and is required"
    },
    price: {
        type: "string",
        description: "must be a string"
    }
});

const Service =  mongoose.model("Service", ServiceSchema);

module.exports = Service;