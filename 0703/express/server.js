const express = require('express');
const app = express();
const PORT = 8000;

// 뷰 템플릿
app.set('view engine', 'ejs');
app.set('views', './views');
// 정적파일세팅
app.use('/public', express.static(__dirname + '/public'));
// 시간값출력
app.use((req, res, next) => {
    console.log('Time:', Date.now());
    next();
});

// 라우터(도메인 설정)
//  "/"는 http://localhost:8000
app.get('/', (req, res) => {
    // send() 클라이언트에 응답 데이터를 보낼때
    res.send({ name: 'KDT 13기' });
});

// /kdt 는 http://localhost:8000/kdt
app.get("/kdt", (req, res) => {
    // render() 뷰 템플릿 랜더링, 템플릿 이름과 랜더링이름 동일해야함
    res.render("test", { age: 20 });
});
// "/gugu" http://localhost:8000/gugu
app.get('/gugu', (req, res) => {
    res.render("gugudan", { dan: 2, leng: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] });
});
// "/fruit" http://localhost:8000/fruit
app.get('/fruit', (req, res) => {
    res.render("fruit", {
        fruit: [
            { name: 'apple', kor: '사과' },
            { name: 'banana', kor: '바나나' },
            { name: 'grapes', kor: '포도' },
            { name: 'peache', kor: '복숭아' }
        ],
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});