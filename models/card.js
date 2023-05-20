const mongoose = require('./connection.js')
const {TaskSchema} = require('./task.js')
//adding object destructuring when introducing taskmodel
//syntax for extracting values from an object property and assigning them to a variable.

const CardSchema = new mongoose.Schema({
    title: String,
    tasks: [TaskSchema]
})

const Card = mongoose.model('Card', CardSchema)
module.exports = Card;