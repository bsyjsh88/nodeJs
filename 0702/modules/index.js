const fs = require('fs');

//파일쓰기
// fs.writeFile("file.txt", "Hello World", (err)=>{
//     if (err) throw err;
//     console.log('저장완료');
// });

// 파일읽기
fs.readFile("file.txt", "utf-8", (err, data) =>{
    if(err) throw err;
    console.log(data);
});