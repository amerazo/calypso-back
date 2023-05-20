const express = require('express')
const Board = require('../models/board')
const Task = require('../models/task')
const Card = require('../models/card')
const router = express.Router()


//cards
//get
router.get('/:boardId/cards', async (req, res) => {
    try {
        res.json(await Card.find({ boardId: req.params.boardId}))
    } catch (error) {
        res.status(400).json(error)
    }
})

router.get('/cards/:id', async (req, res) => {
    try {
        res.json(await Card.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

//post 
router.post('/:boardId/cards', async (req, res) => {
    try{
        res.json(await Card.create({...req.body, boardId: req.params.boardId }))
    } catch (error) {
        res.status(400).json(error)
    }
})

//put 
router.put('/cards/:id', async (req, res) => {
    try{
        res.json(await Card.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

//delete
router.delete('/cards/:id', async (req, res) => {
    try{
        res.json(await Card.findByIdAndRemove(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router
