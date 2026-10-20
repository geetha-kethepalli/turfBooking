const Turf = require("../models/Turf");

// GET ALL TURFS
const getTurfs = async (req, res) => {
    try {
        const turfs = await Turf.find().populate("manager", "name email");
        res.status(200).json(turfs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// 🚨 FIXED: SINGLE ID FETCH CONFIGURATION SETUP ADDED
const getTurfById = async (req, res) => {
    try {
        const turf = await Turf.findById(req.params.id).populate("manager", "name email");
        if (!turf) {
            return res.status(404).json({ message: "Requested turf details missing." });
        }
        res.status(200).json(turf);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addTurf = async (req, res) => {
    try {
        const turf = await Turf.create(req.body);
        res.status(201).json(turf);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTurf = async (req, res) => {
    try {
        const updated = await Turf.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updated) return res.status(404).json({ message: "Turf not found" });
        res.json(updated);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTurf = async (req, res) => {
    try {
        const deleted = await Turf.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ message: "Turf not found" });
        res.json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addTurf, getTurfs, getTurfById, updateTurf, deleteTurf };