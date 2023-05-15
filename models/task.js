const mongoose = require('mongoose')


const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
    card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' }
  });

  