const express = require('express');
const app = express();
const PORT = 8000;

//body-parser
app.use(express.json());
//view engine
app.set('view engine', 'ejs');

const loginRouter = require('./routes/user');
app.use('/', loginRouter);


//=======데이터 요청, 응답


app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
