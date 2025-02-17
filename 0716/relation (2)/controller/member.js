const { Member, Profile } = require('../models');

//회원가입
exports.signup = async (req, res) => {
    const { userId, password, username, age, email } = req.body;
    //존재여부확인
    const find = await Member.findOne({ where: { userId } });
    console.log('find', find);
    if (find) {
        res.json({ result: false, message: '이미존재하는회원' });
    } else {
        const result = await Member.create({ userId, password });
        console.log('signup', result);
        await Profile.create({ username, age, email, memberId: result.id });
        res.json({ result: true });
    }
};
//로그인
exports.login = async (req, res) => {
    const { userId, password } = req.body;
    const find = await Member.findOne({ where: { userId } });
    if (find) {
        if (find.password === password) {
            const response = {
                id: find.id,
                userId: find.userId,
            };
            res.json({ result: true, code: 100, response, message: '로그인 성공' });
        } else {
            res.json({ result: false, code: 1000, response: null, message: '비밀번호 틀렸습니다.' });
        }
    } else {
        res.json({ result: false, code: 1001, response: null, message: '회원이 아닙니다.' });
    }
};
//회원조회
exports.find = async (req, res) => {
    const { id } = req.params;
    const result = await Member.findByPk(id, {
        attributes: ['userId'],
        //include: 쿼리를 실행할때 관련된 모델의 데이터도 함께 조회할 수 있도록하는 옵션
        include: [{ model: Profile, attributes: ['username', 'age', 'email'] }],
    });
    console.log('find', result);
    res.json({ result: true, response: result });
};
