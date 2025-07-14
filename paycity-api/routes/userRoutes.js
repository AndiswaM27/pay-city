const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const { getProfile, deleteProfile, updateProfile } = require('../controllers/userController');

router.get('/me', auth, getProfile);
router.delete('/me', auth, deleteProfile);
router.put('/me', auth, updateProfile);

module.exports = router;
