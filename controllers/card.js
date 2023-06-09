
// module.exports = router;
const express = require('express');
const Board = require('../models/board');
const Card = require('../models/card');
const Task = require('../models/task');
const router = express.Router({ mergeParams: true });

// Get all cards for a specific board
router.get('/', async (req, res) => {
  try {
    const cards = await Card.find({ boardId: req.params.boardId });
    res.json(cards);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Get a specific card
router.get('/:id', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id).populate('tasks');
    res.json(card);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create a new card
router.post('/', async (req, res) => {
  try {
    const card = await Card.create({ ...req.body, boardId: req.params.boardId });
    const board = await Board.findByIdAndUpdate(
      req.params.boardId,
      { $push: { cards: card._id } },
      { new: true }
    );
    res.json(card);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update a card
router.put('/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(card);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a card
router.delete('/:id', async (req, res) => {
  try {
    const card = await Card.findByIdAndRemove(req.params.id);
    res.json(card);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
