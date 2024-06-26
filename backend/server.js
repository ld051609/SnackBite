const express = require('express')
const cors = require('cors')
require('dotenv').config();
const importData2 = require('./middleware/importData');
const mongoose = require('mongoose')
const app = express()
const PORT = 5000
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/AuthRoute');
const reviewRoutes = require('./routes/ReviewRoute');
const snackRoutes = require('./routes/SnackRoute');
const fs = require('fs');

app.use(cors())

// MongoDB connection
connectDB();

// import data to MongoDB
// importData2();


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
app.use('/', reviewRoutes);
app.use('/', snackRoutes);

