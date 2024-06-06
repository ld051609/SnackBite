const express = require('express')
const cors = require('cors')
require('dotenv').config();

const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const connectDB = require('./config/db')
app.use(cors())

// MongoDB connection
connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

