const express = require('express');
const { signup,login, info, updateFunc, deleteFunc, all } = require('../controller/user');
const router = express.Router();

router.post('/signup', signup);

router.post('/login',  login);

router.get('/info/:id', info);

router.patch('/update', updateFunc);

router.delete('/delete', deleteFunc);

router.get('/all', all);

module.exports = router;