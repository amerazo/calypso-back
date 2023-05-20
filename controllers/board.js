const express = require('express');
const Board = require('../models/board');
const Card = require('../models/card');
const router = express.Router();

// Get all boards
router.get('/', async (req, res) => {
  try {
    const boards = await Board.find({}).populate('cards');
    res.json(boards);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Get a specific board
router.get('/:id', async (req, res) => {
  try {
    const board = await Board.findById(req.params.id).populate('cards');
    res.json(board);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create a new board
router.post('/', async (req, res) => {
  try {
    const board = await Board.create(req.body);
    res.json(board);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update a board
router.put('/:id', async (req, res) => {
  try {
    const board = await Board.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(board);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a board
router.delete('/:id', async (req, res) => {
  try {
    const board = await Board.findByIdAndRemove(req.params.id);
    res.json(board);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
