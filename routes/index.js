const express = require('express');
const homeController = require('../controllers/homeController');

//Using express router 
const router = express.Router();
console.log('routes/index');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/posts', require('./posts'));
// for any further route we simply write
// router.use('/routerName', require('./routerFile'));

module.exports = router;