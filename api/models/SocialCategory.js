const mongoose = require("mongoose");

mongoose.connection.createCollection("socialCategorys", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          required: [ "socialCategory_Id", "name"],
          properties: {

            socialCategory_Id: {
                bsonType: "int",
                description: "must be an integer and is required"
            },
            name: {
                bsonType: "string",
                description: "must be a string and is required"
            }
          }
        }
    }
});