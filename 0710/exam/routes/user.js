const express = require('express');
const controller = require('../controller/login');
const router = express.Router();

//router
//=======페이지
router.get('/', controller.main);
router.get('/get', controller.get);
router.get('/post', controller.post);
router.get('/resultGet', controller.resultGet );
router.post('/resultPost',controller.resultPost );

module.exports = router;