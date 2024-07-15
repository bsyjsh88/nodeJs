const express = require('express');
const { signup,} = require('../controller/user');
const { UPDATE } = require('sequelize/lib/query-types');
const router = express.Router();

router.post('/signup', signup);

module.exports = router;