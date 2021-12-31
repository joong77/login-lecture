"use strict"

const db = require("../config/db");

class UserStorage {

    static getUserInfo(id) {
      return new Promise((resolve, reject) => {
        const query_ = "SELECT * FROM users WHERE id = ?;" ; 
        db.query(query_, [id], (err, data) => {
            if (err) reject(`${err}`);
            resolve(data[0]);
        });
      });
    }

    
    static async save(userInfo) {
      return new Promise((resolve, reject) => {
        const query_ = "INSERT INTO users(id, name, psword) VALUES(?,?,?);" ; 
        db.query(
            query_, 
            [userInfo.id, userInfo.name, userInfo.psword],
            (err) => {
            if (err) reject(`${err}`);
            resolve({ success: true });
        });
      });
    }
}

module.exports = UserStorage;