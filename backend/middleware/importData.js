const fs = require('fs');
const Snack = require('../models/Snack');
const Review = require('../models/Review');

// import data to MongoDB
const data = JSON.parse(fs.readFileSync('./sample.json', 'utf-8'))
const importData = async() => {
    try {
        await Snack.create(data);
        console.log('Data imported');
    } catch (error) {
        console.log(error)        
    }
}
const data2 = JSON.parse(fs.readFileSync('./sample2.json', 'utf-8'))
const importData2 = async() => {
    try {
        await Review.create(data2);
        console.log('Data imported');
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = importData2;