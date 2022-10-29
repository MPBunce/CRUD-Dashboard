const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 8000

const app = express()

app.use('/api/items', require('./Routes/crudRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))