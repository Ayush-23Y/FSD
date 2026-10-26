const mongoose = require("mongoose");

const problemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    difficulty: { type: String, required: true },
    topic: { type: String, required: true },
    description: { type: String }
});

module.exports = mongoose.model("Problem", problemSchema);