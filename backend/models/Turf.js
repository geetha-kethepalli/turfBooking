const mongoose = require("mongoose");

const turfSchema = new mongoose.Schema({

    name: String,
    location: String,
    image: String,
    description: String,
    pricePerHour: Number,
    manager: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
}
);

module.exports = mongoose.model("Turf", turfSchema);