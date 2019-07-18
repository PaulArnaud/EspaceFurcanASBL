const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema( {
    user_id: {
        type: "string",
        required: true,
        description: "must be an integer and is required"
    },
    name: {
        type: "string",
        required: true,
        description: "must be a string and is required"
    },
    email: {
        type: "string",
        description: "must be a string and is required"
    },
    phone: {
        type: "string",
        description: "must be a string"
    },
    password: {
        type: "string",
        required: true,
        description: "must be a string and is required"
    }
});

const User =  mongoose.model("User", UserSchema);

module.exports = User;