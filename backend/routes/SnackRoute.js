const router = require('express').Router();
const {getAllSnacks, getOneSnack} = require('../controllers/SnackController.js');
router.get('/snacks', getAllSnacks);
router.post('/oneSnack', getOneSnack)
module.exports = router;