const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getTransactions, addTransaction } = require('../controllers/transactionController');

router.get('/', auth, getTransactions);
router.post('/', auth, addTransaction);

module.exports = router;
