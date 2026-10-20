const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        turfId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Turf",
            required: true,
        },

        bookingDate: Date,
        slot: String,
        totalAmount: Number,
        status: {
            type: String,
            enum: ["Booked", "Cancelled"],
            default: "Booked",
        },
    }

);

module.exports = mongoose.model("Booking", bookingSchema);