const mongoose = require('mongoose')


const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    cardId: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' }
  });

const Task = mongoose.model('Task', TaskSchema)
module.exports = {Task, TaskSchema};