const mongoose = require('mongoose');
const ReviewSchema = new mongoose.Schema({
    username:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    snack:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Snack",
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    comment:{
        type: String,
        required: true,
    }

}, {timestamps: true})

module.exports = mongoose.model('Review', ReviewSchema) 