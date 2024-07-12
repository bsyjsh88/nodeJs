const loginModel = require('../model/result');

const allLogin = async (req, res) => {
    const data = await loginModel.allLogin();
    res.json({ result: data});
};
// 회원가입
const insertSignup = async (req, res) => {
    const data = await loginModel.insertSignup();
}
// 회원검색
const readSignup = async (req, res) => {
    const data = await loginModel.readSignup();
}

module.exports = {allLogin, insertSignup, readSignup}

