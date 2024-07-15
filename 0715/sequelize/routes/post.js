const express = require('express');
const { all, write, one, updateFunc, deleteFunc } = require('../controller/post');
const { UPDATE } = require('sequelize/lib/query-types');
const router = express.Router();

// get / all 전체글 조회
router.get('/all', all);
// post / write 글하나 생성
router.post('/write', write);
//get /:id 글하나 조회
router.get('/:id', one);
//patch /update
router.patch('/update', updateFunc);
//delete /delete
router.delete('/delete', deleteFunc)

module.exports = router;