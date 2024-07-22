require('dotenv').config();
const mysql = require('mysql2/promise');

const conn = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASS,
    database: process.env.DATA,
    connectionLimit: 20,
});

const signup = async (userid, name, pw) => {
    const query = 'insert into test_mvc (userid, name, pw) values (?,?,?)';
    const [result] = await conn.query(query, [userid, name, pw]);
    return result;
};

const login = async (userid , pw) => {
    const query = 'select * from test_mvc where userid = ? and pw = ?';
    const [row] = await conn.query(query, [userid, pw]);
    return row;
};

module.exports = {signup, login};