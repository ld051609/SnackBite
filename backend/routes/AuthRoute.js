const {Signup, Login} = require('../controllers/AuthorController');
const { userVerification } = require('../middleware/AuthMiddleware');
const router = require('express').Router();
router.post("/signup", Signup);
router.post("/login", Login);
router.post('/', userVerification);
router.get('/person', getPersonInfo);
router.post('/wishlist', addWishlist);
module.exports = router;

