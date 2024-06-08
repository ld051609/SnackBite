const router = require('express').Router();
const {getAllSnacks} = require('../controllers/SnackController.js');
router.get('/snacks', getAllSnacks);
module.exports = router;