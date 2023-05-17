// dependencies 
require('dotenv').config()
const { PORT, MONGODB_URL } = process.env;
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const boardRouter = require('./controllers/board')


//middleware
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use('/boards', boardRouter)




app.get('/', (req, res) => {
    res.send('hello')
})


app.listen(PORT, () => console.log(`listening on PORT ${PORT}`))