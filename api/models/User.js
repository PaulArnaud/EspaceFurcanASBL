const mongoose = require("mongoose");

mongoose.connection.createCollection("user", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "user_id", "lastname","firstname","email","phone","password"],
          properties: {

            user_id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            lastname: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            firstname: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            email: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            phone: {
                bsonType: "string",
                description: "must be a string and is required"
            },
            password: {
                bsonType: "string",
                description: "must be a string and is required"
            }
          }
        }
    }
});