const express = require('express');
const {} = require('../controller/post');
const { createPost, createComment, all, getPost} = require('../controller/post');
const router = express.Router();

//글생성
router.post('/create',createPost);
router.post('/comment', createComment);
router.get('/all', all)
router.get('/getpost/:id', getPost)

module.exports = router;