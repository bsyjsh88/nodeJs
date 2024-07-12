require('dotenv').config();
const mysql = require('mysql2/promise');

const getConn = async() => {
    return await mysql.createConnection({
        host: process.env.HOST,
        user: process.env.MYUSER,
        password: process.env.PASS,
        database: process.env.DATA,
    });
};

const insertSignup = async (userid, name, pw) => {
    const conn = await getConn();
    const query = 'INSERT INTO users (userid, name, pw) VALUES (?, ?, ?)';
    await conn.query(query, [userid, name, pw]);
    await conn.end();
    return row;
}

const readSignup = async(id) => {
    const conn = await getConn();
    const query = 'SELECT * FROM users WHERE id = ?';
    const row = await conn.query(query, [id]);
    await conn.end();
    return row;
}

const patchSignup = async( userid, name, pw) => {
    const conn = await getConn();
    const query = 'update users set id= ?, userid=?, name=?, pw=?'
    // const 

}
const allLogin = async (id) => {
    const conn = await getConn();
    const query = 'SELECT * FROM login';
    const row = await conn.query(query, [id]);
    console.log('model', row);
    await conn.end();
    return row;
};

module.exports = { allLogin, insertSignup, readSignup, patchSignup }