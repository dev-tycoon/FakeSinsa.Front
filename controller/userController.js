const userService = require('../service/userService');


module.exports = {
    getUsers: function (req, res, next) {
        return userService.getUsers().then((val) => {
            res.send(val);
        });
    },
    signIn : function (req, res, next) {
        let email = req.body.email;
        let password = req.body.password;

        return userService.getUserByEmail(email).then(user => {
            if (user) {
                //TODO password 비교
                if (user.password === password) {
                    //TODO 세션에 유저 정보 저장
                    return res.send(true);
                } else {
                    //TODO 비밀번호 틀렸다고 메세지 보냄
                    return res.send(false);
                }
            } else {
                //TODO 존재하지 않는 유저 정보
                return res.send(false);
            }
        });
    }
};