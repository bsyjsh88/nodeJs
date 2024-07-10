const express = require('express');
const controller = require('../controller/comment')
const router = express.Router(); //express에 있는 라우터를 쓰겠다.



router.get('/', controller.main );
router.get('/comments', controller.comments );
// :변수값은 {변수명: "값"} 형태
router.get('/comment/:page', controller.comment );

module.exports = router;