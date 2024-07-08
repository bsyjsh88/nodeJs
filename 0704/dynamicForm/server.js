const { name } = require('ejs');
const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// view engine
app.set('view engine', 'ejs');

// router
// ===========페이지
app.get("/", (req, res)=>{
    res.render('index');
});

// render(): 뷰페이지렌더링, render(뷰페이지이름, 데이터(선택))
// send(): 모든타입 데이터 전송(문자열, 배열, 객체 숫자 등)
// json(): 객체타입 데이터 전송

// 요청과 응답
// ajax
app.get('/ajax', (req, res)=>{
    console.log('요청값', req.query);
    const{ username, email} =req.query;
    // 응딥데이터(프론트로 보내는 데이터)
    res.send({user: `${username}님`, email: `이메일주소는 ${email}` });
});
app.post('/ajax', (req, res) =>{
    console.log('요청값', req.body);
    const{ username, email} = req.body;
    // 응답
    res.send({user: `${username}님`, email: `이메일주소는 ${email}` });
});



app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});