const express = require('express');
const controller = require('../controller/result');
const { readSignup, insertSignup, allLogin } = require('../model/result');
const router = express.Router();

//localhost:8000/api/login
//POST /signup 회원가입
router.post('/signup', controller.insertSignup);
//POST /login  로그인
router.post('/login', controller.readSignup);
// //GET /info 회원정보
// router.get('/info/:id', ?);
// //PATCH /update 회원수정
// router.patch('/update', ?);
// //DELETE /delete 회원삭제
// router.delete('/delete', ?);

//GET /all 회원전체정보
router.get('/all', controller.allLogin);

module.exports = { allLogin, insertSignup, readSignup };

module.exports = router;