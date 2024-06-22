const router = require('express').Router();
const { Review, FetchReviews } = require('../controllers/ReviewController');
router.post('/review', Review);
router.post('/fetchReviews', FetchReviews);  
module.exports = router;