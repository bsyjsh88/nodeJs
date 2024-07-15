const { User } = require('../models');

const signup = async(req, res) => {
    console.log('요청값:',req.body);
    const { userid, name, pw } = req.body;
    const result = await userModel.signup(userid, name, pw);
    res.json({ result: true });
}

module.exports = {signup}

