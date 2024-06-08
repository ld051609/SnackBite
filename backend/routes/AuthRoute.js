// server/routes/AuthRoute.js
const router = require('express').Router();
const { Signup, Login, getPersonInfo, addWishlist } = require('../controllers/AuthorController');
const { userVerification } = require('../middleware/AuthMiddleware');

router.post("/signup", Signup);
router.post("/login", Login);
router.post('/', userVerification);
router.get('/person', getPersonInfo);
router.post('/wishlist', addWishlist);

module.exports = router;
