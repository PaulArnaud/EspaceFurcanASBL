const mongoose = require("mongoose");

mongoose.connection.createCollection("costs", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "socialCategory_Id", "service_Id", "cost"],
          properties: {
            socialCategory_Id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            service_Id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            cost: {
                bsonType: "double",
                minimum: 0,
                description: "must be a double and is required"
            }
          }
        }
    }
});