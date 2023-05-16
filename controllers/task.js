const express = require('express')
const Board = require('../models/board')
const Task = require('../models/task')
const Card = require('../models/card')
const router = express.Router()


//tasks
//get
router.get('/cards/:cardId/tasks', async (req, res) => {
    try {
        res.json(await Task.find({ cardId: req.params.cardId}))
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/task/:id', async (req, res) => {
    try {
        res.json(await Task.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

//put
router.put('/tasks/:id', async (req, res) => {
    try{
        res.json(await Task.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

//delete
router.delete('/tasks/:id', async (req, res) => {
    try{
        res.json(await Task.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;