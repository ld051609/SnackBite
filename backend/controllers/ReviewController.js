const Review = require('../models/Review');
// create a review 
module.exports.Review = async (req, res, next) => {
    try {
        const {snack, rating, comment} = req.body;
        const review = await Review.create({user: req.user._id, snack, rating, comment});
        res
        .status(201)
        .json({message: 'Review created successfully', success: true, review});
        next();
    } catch (error) {
        console.log(error)
        
    }
}
// get all reviews
module.exports.FetchReviews = async (req, res, next) => {
    try {
        const {snackName} = req.body;
        const reviews = await Review.find(snackName);
        if(!reviews) {
            res
            .status(404)
            .json({message: `Reviews not found for ${snackName}`, success: false});
            next();
        }

        res
        .status(200)
        .json({message: 'Reviews fetched successfully', success: true, reviews});
        next();

    } catch (error) {
        console.log(error)
        
    }
}