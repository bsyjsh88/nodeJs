const { DataTypes } = require('sequelize');

const member = (seq) => {
    return seq.define('member', {
        userId: {
            type: DataTypes.STRING(31),
            allowNull: false,
            unique: true, // 똑같은 값이 오지 못하게함
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
}

module.exports = member