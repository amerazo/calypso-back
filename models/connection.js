require('dotenv').config()
const { MONGODB_URL } = process.env
const mongoose = require("mongoose")
mongoose.connect(MONGODB_URL)
mongoose.connection

    .on('open', () => console.log('you are connected'))
    .on('close', () => console.log('you are disconnected'))
    .on('error', (error) => console.log(error))

module.exports = mongoose