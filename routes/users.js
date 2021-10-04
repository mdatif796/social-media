const express = require('express');
const router = express.Router();

console.log('user controller');
router.get('/profile', require('../controllers/userController').profile);

module.exports = router;