const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Main Router API Configuration Pipelines
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/turfs", require("./routes/turfRoutes"));
app.use("/api/bookings", require("./routes/bookingRoutes"));
app.use("/api/user", require("./routes/userRoutes"));

app.get("/", (req, res) => {
    res.status(200).json({
        message: "Turf Booking API Running Perfectly", status: "success"
    });
});

app.listen(5000, () =>
    console.log("Server running on port 5000"));