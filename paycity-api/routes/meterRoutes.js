const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getMeters, addMeter } = require('../controllers/meterController');

router.get('/', auth, getMeters);
router.post('/', auth, addMeter);

module.exports = router;
