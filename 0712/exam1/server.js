const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use(express.json());

// router
// page(프론트)

//api 서버
const userRouter = require('./routes/user');
app.use('/api/user', userRouter);

// 404
app.use('*', (req, res) => {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});