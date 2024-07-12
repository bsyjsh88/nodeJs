const userModel = require('../model/user');

// 회원가입
const signup = async(req, res) => {
    console.log('요청값:', req.body);
    const { userid, name, pw} = req.body;
    const result = await userModel.signup(userid, name, pw);
    res.json({ result: true });
};
// 로그인
const login = async (req, res) => {
    console.log('요청값:', req.body);
    const {userid, pw} = req.body;
    const result = await userModel.login(userid, pw);
    console.log('login', result);
    if(result.length > 0) {
        res.json({result: true, massage: '로그인 성공', id:result[0].userid });
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
};
// 회워정보 한명 조회
const info = async(req, res) => {
    console.log('요청값', res.parms.id);
    const result = await userModel.info(req.parms.id);
    if( result.length > 0) {
        res.json({result:true, info: result[0], message: '조회완료'});
    } else {
        res.json({ result: false, message: '조회실패'})
    }
};
// 회원정보 수정
const update = async (req, res) => {
    console.log('요청값' ,req.body );
    
};
module.exports = { signup, login, info, update };