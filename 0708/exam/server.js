const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

// view engine
app.set('view engine', 'ejs');

// 정적파일세팅
app.use("/uploads", express.static(__dirname + '/uploads'));

// multer설정
const storage = multer.diskStorage({
    // 파일이 저장될 경로
    destination: (req, filem , callback) => {
        callback(null, 'uploads/');

    },
    // 파일이름
    filename: (req, file, callback) =>{
        // 확장자 추출
        const ext = path.extname(file.originalname);
        // 파일이름 추출
        const newName = path.basename(file.originalname, ext) + Date.now() + ext
        callback(null, newName);
    }
});
// 파일 용량제한
const limits = {
    fileSize: 1024 * 1024 * 5, //5mb제한
};
const upload = multer({ storage, limits }); //storage: storage, limits: limits

// router
// ======페이지
app.get('/', (req, res) =>{
    res.render('index');
});
// ======요청, 응답 데이터
app.post('/upload', upload.single('userfile'), (req, res) =>{
    //요청 받은데이터
    console.log('file', req.file);
    console.log('data', req.body);
    const {id, pw, username, age} = req.body;
    // 응답 데이터
    res.json({filename: req.file.path, id, pw, username, age });
});

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});