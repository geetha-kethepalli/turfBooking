const express = require("express");
const router = express.Router();
const { addTurf, getTurfs, getTurfById, updateTurf, deleteTurf } = require("../controllers/turfController");
const { protect } = require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");

// Public routes
router.get("/", getTurfs);
router.get("/:id", getTurfById); // 🚨 FIXED: Core endpoint single parameter link trace matching added

// Protected manager routes
router.post("/", protect, roleMiddleware("admin", "manager"), addTurf);
router.put("/:id", protect, roleMiddleware("admin", "manager"), updateTurf);
router.delete("/:id", protect, roleMiddleware("admin", "manager"), deleteTurf);

module.exports = router;