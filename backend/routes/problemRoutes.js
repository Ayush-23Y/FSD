const express = require("express");
const router = express.Router();
const Problem = require("../models/Problem");

// Create
router.post("/", async (req, res) => {
    try {
        const problem = await Problem.create(req.body);
        res.status(201).json(problem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Read all
router.get("/", async (req, res) => {
    try {
        res.json(await Problem.find());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Read by ID
router.get("/:id", async (req, res) => {
    try {
        const problem = await Problem.findById(req.params.id);
        if (!problem) return res.status(404).json({ message: "Not found" });
        res.json(problem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update
router.put("/:id", async (req, res) => {
    try {
        const problem = await Problem.findByIdAndUpdate(
            req.params.id, req.body, { new: true, runValidators: true }
        );
        if (!problem) return res.status(404).json({ message: "Not found" });
        res.json(problem);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete
router.delete("/:id", async (req, res) => {
    try {
        const problem = await Problem.findByIdAndDelete(req.params.id);
        if (!problem) return res.status(404).json({ message: "Not found" });
        res.json({ message: "Problem deleted successfully" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
