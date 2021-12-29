"use strict"

class UserStorage {
    static #users = {
    id: ["joongs1", "개발자", "홍길동"],
    psword: ["1234", "12345", "12345"],
    name: ["Jay", "prince", "Haby"]
  };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;