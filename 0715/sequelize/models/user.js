const {DataTypes} = require('sequelize');

const user = (seq) => {
    return seq.define('user', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userid: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING(31),
            allowNull: false,
        },
        pw: {
            type: DataTypes.STRING(127),
            allowNull: false,
        }
    });
}

module.exports = user;