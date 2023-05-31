
// module.exports = router;
const express = require('express');
const Board = require('../models/board');
const { Task } = require('../models/task');
const Card = require('../models/card');
const router = express.Router({ mergeParams: true });


router.get('/:id', async (req, res) => {
    try {
      const task= await Task.findById(req.params.id)
      res.json(task);
    } catch (error) {
      res.status(400).json(error);
    }
  });

//
router.get('/', async (req, res) => {
    try {
      const tasks = await Task.find({ cardId: req.params.cardId })
      console.log(req.params.cardId);
      res.json(tasks);
    } catch (error) {
      res.status(400).json(error);
    }
  });

// Create a new task for a specific card
router.post('/', async (req, res) => {
    try {
      console.log('Creating a new task...'); 
      const card = await Card.findById(req.params.cardId);
      console.log('Card found:', card); 
  
      const task = await Task.create({ ...req.body, cardId: card._id });
      console.log('Task created:', task); 
  
      card.tasks.push(task._id);
      await card.save();
      console.log('Card updated:', card); 
  
      res.json(task);
    } catch (error) {
      console.error('Error creating task:', error); 
      res.status(400).json(error);
    }
  });
  

// Update a task
router.put('/:id', async (req, res) => {
  try {
    // Update cards to move the taskId from one to the other.
    const task = await Task.findById(req.params.id);
    const oldCardId = task.cardId.toString();

    const newCardId = req.body.cardId;
    if (oldCardId != newCardId) {
      const card = await Card.findById(oldCardId);
      const index = card.tasks.indexOf(task._id);
      card.tasks.splice(index, 1);
      await card.save();
      const newCard = await Card.findById(newCardId);
      newCard.tasks.push(task._id);
      await newCard.save()
    }
    // update task with new card ID
    res.json(await Task.findByIdAndUpdate(req.params.id, req.body));
  } catch (error) {
    res.status(400).json(error);
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndRemove(req.params.id);
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
});

module.exports = router;
