const mongoose = require("mongoose");

mongoose.connection.createCollection("bookings", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "booking_Id", "date","service_Id","user_Id"],
          properties: {

            booking_Id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            service_Id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            user_Id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            date: {
                bsonType: "Date",
                description: "must be a string and is required"
            }
          }
        }
    }
});