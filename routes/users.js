const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/User.js');

// GET /users/:id - Fetch user by ID with age filter
router.get('/:id', async (req, res) => {
    const { id } = req.params;

    // Check if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid user ID format" });
    }

    try {
        const user = await User.findOne({ _id: id, age: { $gt: 21 } });

        if (!user) {
            return res.status(404).json({ error: "User not found or under 21" });
        }

        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;
