// analysis.js
// Handles POST requests from extension, forwards to Python AI

const express = require('express');
const router = express.Router();
const pythonBridge = require('../services/pythonBridge');

router.post('/', async (req, res) => {
  try {
    const prediction = await pythonBridge.analyzeBehavior(req.body);
    res.json(prediction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
