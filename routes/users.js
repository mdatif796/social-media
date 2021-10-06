const express = require('express');
const router = express.Router();

console.log('user controller');
router.get('/profile', require('../controllers/userController').profile);
router.get('/sign-up',require('../controllers/userController').signUp);
router.get('/sign-in',require('../controllers/userController').signIn);

module.exports = router;