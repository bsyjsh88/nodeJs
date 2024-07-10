const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

// const commentRouter = require('./routes')
const commentRouter = require('./routes/index');
app.use('/', commentRouter);

const userRouter = require('./routes/user')
app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});
