const mongoose = require('./connection.js')


const BoardSchema = new mongoose.Schema({
    title: String,
    cards: [{ type: mongoose.Schema.Types.ObjectId, ref:'Card' }]
})

const Board = mongoose.model('Board', BoardSchema)

module.exports = BoardSchema;
