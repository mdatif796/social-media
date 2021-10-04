const express = require('express');
// const homeController = require('../controllers/homeController');

const router = express.Router();
console.log('routes/index');

router.get('/', require('../controllers/homeController').home);

module.exports = router;