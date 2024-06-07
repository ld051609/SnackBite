const Snack = require('../models/Snack')
module.exports.getAllSnacks = async (req, res, next) => {
    try {
        const snacks = await Snack.find();
        res.status(200).json({message: 'Snacks fetched successfully', success: true, snacks});
        next();
    } catch (error) {
        console.log(error)
    }
};
