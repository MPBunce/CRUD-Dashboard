const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('../Backend/middleware/errorMiddleware')
const connectDB = require('./Config/Database')
const port = process.env.PORT || 8000


connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/items', require('./Routes/crudRoutes'))
app.use(errorHandler)


app.listen(port, () => console.log(`Server started on port ${port}`))