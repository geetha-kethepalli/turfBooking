const express = require("express");
const router = express.Router(); // Fixed local router scope call injection

// 🚨 FIXED IMPORT: Import controllers accurately matching names
const {
    createBooking,
    getMyBookings,
    getAllBookingsForOwner,
    cancelBooking
} = require("../controllers/bookingController");

const { protect } = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Routing Pipelines Configuration Points
router.post("/", protect, createBooking);
router.get("/mybookings", protect, getMyBookings);

// 🚨 LINE 12 TARGET FIXED: Arguments variables error missing parameter bypass checked
router.get("/all-bookings", protect, roleMiddleware("admin", "manager"), getAllBookingsForOwner);

router.delete("/:id", protect, cancelBooking);

module.exports = router;