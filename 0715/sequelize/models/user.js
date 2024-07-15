const {DataTypes} = require('sequelize');

const user = (seq) => {
    return seq.define('user', {
        userid: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        pw: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });
}

module.exports = user;