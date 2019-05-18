const Q = require('q');
const userRepository = require('../persistence/userRepository');

function getUsers() {
    return userRepository.getUsers();
}

module.exports = {
    getUsers: getUsers,
    getUserByEmail : function (email) {
        let deferred = Q.defer();
        if (email === "jhleed") {
            deferred.resolve({
                email: "jhleed",
                password: "1234",
                name: "이종호"
            });
        } else {
            deferred.resolve(null);
        }
        return deferred.promise;
    }
};