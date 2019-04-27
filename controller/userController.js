const getUsersService = require('../service/userService');

function getUsers(req, res, next) {
    return getUsersService.getUsers().then((val) => {
        res.send(val);
    });
}


module.exports = {
    getUsers: getUsers,
    redirectSignUp: function (req, res, next) {
        return res.render('signup')
    }
};