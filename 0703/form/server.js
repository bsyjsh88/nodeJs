const express = require('express');
const { userInfo } = require('os');
const app = express();
const PORT = 8000;

// 뷰엔진
app.set('view engine', 'ejs');
app.set('views', './views');

// 미들웨어 body-parsar
app.use(express.urlencoded({ extended: true}));
// extended:true : qs모듈 사용 body 데이터를 해석
// extended:false : 내장된 querystring 모듈 사용

// 라우터
app.get('/', (req,res) =>{
    res.render('form');
});

app.get('/form', (req, res)=>{
    res.render('index');
});



//get 방식일때
app.get('/getForm', (req,res)=>{
    console.log(req.query);
    res.render("result", {title: 'GET요청 결과', userInfo: req.query});
});
// post 방식일떄
app.post('/postForm', (req, res)=>{
    console.log(req.body);
    res.render("result", {title : 'POST요청 결과', userInfo: req.body});
});
// 서버실행
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});