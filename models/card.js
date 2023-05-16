const mongoose = require('./connection.js')
const TaskSchema = require('./task.js')

const CardSchema = new mongoose.Schema({
    title: String,
    tasks: [{TaskSchema}],
})


const Card = mongoose.model('Card', CardSchema)

module.exports = Card