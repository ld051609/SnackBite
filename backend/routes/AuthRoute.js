const {Signup, Login} = require('../controllers/AuthorController');
const { userVerification } = require('../middleware/AuthMiddleware');
const router = require('express').Router();
router.post("/signup", Signup);
router.post("/login", Login);
router.pose('/', userVerification);
module.exports = router;

