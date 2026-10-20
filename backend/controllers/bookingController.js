const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
    try {
        const { turfId, bookingDate, slot, totalAmount } = req.body;
        const booking = await Booking.create({
            userId: req.user.id,
            turfId,
            bookingDate,
            slot,
            totalAmount,
            status: "Booked"
        });
        res.status(201).json({ message: "Turf booked successfully", booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getMyBookings = async (req, res) => {
    try {
        const bookings = await Booking.find({ userId: req.user.id }).populate("turfId");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🚨 COMPULSORY EXPORT: Owner dashboard verification module handle cheyadaaniki logic hook
const getAllBookingsForOwner = async (req, res) => {
    try {
        const bookings = await Booking.find().populate("turfId");
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const cancelBooking = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: "Booking not found" });

        booking.status = "Cancelled";
        await booking.save();
        res.status(200).json({ message: "Booking cancelled successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🚨 CHECK HERE: Ikkada 4 functions module list accurate ga export avvali!
module.exports = {
    createBooking,
    getMyBookings,
    getAllBookingsForOwner,
    cancelBooking
};