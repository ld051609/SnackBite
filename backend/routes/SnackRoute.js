const router = require('express').Router();
const {} = require('../controllers/SnackController.js');
router.get('/snacks', getAllSnacks);
module.exports = router;