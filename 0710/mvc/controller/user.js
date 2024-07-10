const userModel = require('../model/uesr');

exports.user = (req, res) => {
    res.render('user', {userInfo: userModel.userInfo() });
};