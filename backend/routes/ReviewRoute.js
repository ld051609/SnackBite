const router = require('express').Router();
const { Review, FetchReviews } = require('../controllers/ReviewController');
router.post('/review', Review);
router.get('/fetchReviews', FetchReviews);  
module.exports = router;