const express = require('express');
const router = express.Router();

console.log('Post controller');
router.get('/post', require('../controllers/postController').post);

module.exports = router;