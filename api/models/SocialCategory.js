const mongoose = require("mongoose");

const SocialCategorySchema = new mongoose.Schema({
    socialcategory_id: {
        type: "string",
        description: "must be an integer and is required"
    },
    name: {
        type: "string",
        required: true,
        description: "must be a string and is required"
    },
    description: {
        type: "string",
        description: "must be a string "
    }
});

const SocialCategory = mongoose.model("SocialCategory", SocialCategorySchema);

module.exports = SocialCategory;