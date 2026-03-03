// server/src/routes/inventory.routes.js
const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');

// GET: Fetch all inventory items for a specific mess
router.get('/:messId', async (req, res) => {
  try {
    const items = await Inventory.find({ messId: req.params.messId });
    res.json(items);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// POST: Add a new inventory item
router.post('/', async (req, res) => {
  try {
    const newItem = new Inventory(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: "Error adding item", error });
  }
});

// PUT: Update item quantity or details
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: "Error updating item", error });
  }
});

// DELETE: Remove an item
router.delete('/:id', async (req, res) => {
  try {
    await Inventory.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting item", error });
  }
});

module.exports = router;