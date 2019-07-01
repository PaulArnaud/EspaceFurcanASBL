const mongoose = require("mongoose");

mongoose.connection.createCollection("services", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "service_Id", "name", "description"],
          properties: {
            service_Id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            name: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            description: {
                bsonType: "string",
                description: "must be a string and is required"
            }
          }
        }
    }
});