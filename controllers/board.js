const express = require('express');
const Board = require('../models/board');
const Task = require('../models/task');
const Card = require('../models/card');
const router = express.Router();

// get
router.get('/', async (req, res) => {
  try {
    res.json(await Board.find({})).status(200);
  } catch (error) {
    res.status(400).json(error);
    console.log('error', error);
  }
});

router.get('/:id', async (req, res) => {
  try {
    res.json(await Board.findById(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

// post
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const createdBoard = await Board.create(req.body);
    res.status(201).json(createdBoard);
  } catch (error) {
    res.status(400).json(error);
  }
});

// put
router.put('/:id', async (req, res) => {
  try {
    res.json(await Board.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// delete
router.delete('/:id', async (req, res) => {
  try {
    res.json(await Board.findByIdAndRemove(req.params.id));
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
