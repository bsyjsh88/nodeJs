const { response } = require('express');
const { User } = require('../models');
// 회원가입
const signup = async (req, res) => {
    console.log('요청값:', req.body);
    const { userid, username, pw } = req.body;
    // const result = await userModel.signup(userid, name, pw);
    const result = await User.create({ userid, username, pw });
    res.json({ result: true, message: '회원가입 완료' });
};
// 로그인
const login = async (req, res) => {
    console.log('요청값:', req.body);
    const { userid, pw } = req.body;
    // const result = await userModel.login(userid, pw);
    // const find = await User.findOne({ where: {userid }});
    // console.log('find', find);
    // if(find.pw === pw) {
    //     const data = {
    //         userid: find.userid,
    //         username: find.username,
    //     }
    // }else {
    //     res.json({ result: false, data: null, message:})
    // }

    const result = await User.findOne({ where: { userid, pw } });
    console.log('login', result);
    if (result !== null) {
        res.json({ result: true, message: '로그인 성공', id: result.id });
    } else {
        res.json({ result: false, message: '로그인 실패', id: null });
    }
};
// 회원 정보조회
const info = async (req, res) => {
    console.log('요청값', req.params.id);
    // const result = await userModel.info(req.params.id);
    
    const result = await User.findOne({ where: { id: req.params.id } });
    if (result !== null) {
        res.json({ result: true, info: result[0], message: '조회완료' });
    } else {
        res.json({ result: false, info: null, message: '존재하는 회원없음' });
    }
    // const { id } = req.params;
    // const { id: pkId, userid, username, pw} = await User.findByPk(id);
    // const = {
    //     userid,
    //     username
    //     id: pkId,
    //     pw,
    // }
    res.json({ result: true, response})
};
// 회원 정보수정
const updateFunc = async (req, res) => {
    console.log('요청값', req.body);
    const { id, name, pw } = req.body;
    // const result = await userModel.update(id, name, pw);
    const result = await User.update({ name, pw }, { where: { id } });
    res.json({ result: true });
};
// 회원 정보삭제
const deleteFunc = async (req, res) => {
    console.log('요청값', req.body);
    // const result = await userModel.deleteFunc(req.body.id);
    const result = await User.destroy({where: {id: req.body.id }});
    res.json({ result: true });
};
// 회원 전체 조회
const all = async (req, res) => {
    // const result = await userModel.all();
    const result = await User.findAll({
        //attributes:원하는 컬럼 조회(배열형태)
        attributes: ['id', 'name', 'userid'],
    });
    console.log(result);
    res.json({ result });
};

module.exports = { signup, login, info, updateFunc, deleteFunc, all };