// const express = require('express')
// const Board = require('../models/board')
// const Task = require('../models/task')
// const Card = require('../models/card')
// const router = express.Router()


// //cards
// //get
// router.get('/:boardId/cards', async (req, res) => {
//     try {
//         res.json(await Card.find({ boardId: req.params.boardId}))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// router.get('/cards/:id', async (req, res) => {
//     try {
//         res.json(await Card.findById(req.params.id))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //post 
// router.post('/:boardId/cards', async (req, res) => {
//     try{
//         res.json(await Card.create({...req.body, boardId: req.params.boardId }))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //put 
// router.put('/cards/:id', async (req, res) => {
//     try{
//         res.json(await Card.findByIdAndUpdate(req.params.id, req.body))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// //delete
// router.delete('/cards/:id', async (req, res) => {
//     try{
//         res.json(await Card.findByIdAndRemove(req.params.id))
//     } catch (error) {
//         res.status(400).json(error)
//     }
// })

// module.exports = router

const express = require('express');
const Board = require('../models/board');
const Task = require('../models/task');
const Card = require('../models/card');
const router = express.Router();

// Cards
// Get all cards for a board
router.get('/:boardId/cards', async (req, res) => {
  try {
    const cards = await Card.find({ boardId: req.params.boardId });
    res.json(cards);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Get a single card by ID
router.get('/cards/:id', async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    res.json(card);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Create a new card for a board
router.post('/:boardId/cards', async (req, res) => {
  try {
    const newCard = await Card.create({ ...req.body, boardId: req.params.boardId });
    res.json(newCard);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Update a card by ID
router.put('/cards/:id', async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedCard);
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a card by ID
router.delete('/cards/:id', async (req, res) => {
  try {
    const deletedCard = await Card.findByIdAndRemove(req.params.id);
    res.json(deletedCard);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
