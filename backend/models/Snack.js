const mongoose = require('mongoose')
const SnackSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        unique: true,
    },
    image:{
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        default: 0,
    },
    reviews:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review',
    }]
    
}, {timestamps: true})

module.exports = mongoose.model('Snack', SnackSchema)