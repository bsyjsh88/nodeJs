const express = require('express');
const app = express();
const PORT = 8000;

// body-parser
app.use(express.urlencoded({ extended: true})); //post 전송
// view engine
app.set('view engine', 'ejs');

// 라우터
app.get('/', (req, res) =>{
    res.render('index');
});

app.get('/postPage', (req,res) =>{
    res.render('post')
})
app.get('/getPage', (req,res) =>{
    res.render('get')
})

app.get('/resultGet', (req, res)=>{
    console.log(req.query);
    // 객체 구조 분해할당
    const {username, gender, birthY, birthM, birthD, hobby } = req.query;
    res.render('result', {title: 'GET전송 결과', 
        userInfo: {
            username,
            gender,
            birthY,
            birthM,
            birthD,
            hobby,
            color: { result: false, color:null},
            number: { result: false, number:null},
        },
    });
});

app.post('/resultPost', (req, res)=>{
    console.log(req.body);
    const {username, gender, birthY, birthM, birthD, hobby, color, number } = req.body;
    res.render("result", {title: 'POST결과 전송',
        userInfo: {
            username,
            gender,
            birthY,
            birthM,
            birthD,
            hobby,
            // key-value형태에서 key값과 value의 변수이름이 동일할때
            // 하나로 합치기 가능
            color: {result:true, color: color},
            number: {result:true, number: number},
        },

    });
});

app.listen(PORT, () =>{
    console.log(`http://localhost:${PORT}`);
});