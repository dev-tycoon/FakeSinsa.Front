const getUsersService = require('../service/userService');


module.exports = {
    getUsers: function (req, res, next) {
        return getUsersService.getUsers().then((val) => {
            res.send(val);
        });
    },
};