const express = require('express')
const cors = require('cors')
require('dotenv').config();

const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/AuthRoute');
app.use(cors())

// MongoDB connection
connectDB();


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

app.use(
    cors({
        origin: ['http://localhost:3000'],
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

