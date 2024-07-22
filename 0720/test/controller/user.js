const userModel = require('../model/user');

const signup = async (req, res) => {
    console.log('요청값:', req.body);
    const { userid , name, pw} = req.body;
    const result = await userModel.signup(userid, name, pw);
    res.json({ result: true });
};

const login = async (req, res) => {
    const { userid, pw} = req.body;
    const result = await userModel.login(userid, pw);
    console.log('login', result);
    if ( result.length > 0) {
        res.json({ result: true, message: '로그인 성공', id: result[0].id});
    } else {
        res.json({ result: false, message: '로그인 실패', id: null});
    }
};

module.exports = {signup, login};