const mysql = require('../../../common/drivers/mysql');


class AuthenticateService {

  static getMessage(name) {
    return `HEllo ${name}`;
  }

  static testGet(id) {
    let sql = 'SELECT * FROM users WHERE ? LIMIT 1';

    return mysql().query(sql, [{
      user_id: parseInt(id)
    }]);
  }

  static testCreate(userName, userAge) {
    let sql = 'INSERT INTO users SET ?';

    return mysql().query(sql, {
      user_name: userName,
      user_age: parseInt(userAge)
    });
  }

  static testUpdate(userId, userName, userAge) {
    let sql = 'UPDATE users SET ? WHERE ?';

    return mysql().query(sql, [
      { //set value
        user_name: userName,
        user_age: parseInt(userAge)
      },
      { //where value
        user_id: parseInt(userId)
      }
    ]);
  }

  static testDelete(userId) {
    let sql = 'DELETE FROM users WHERE ?';

    return mysql().query(sql, [{
      user_id: parseInt(userId)
    }]);
  }


}

module.exports = AuthenticateService;


//  PAGINATION 
// vars page count
// let sql = "SELECT * FROM users WHERE ?";
//    sql += "LIMIT parseInt(count) OFFSET" + (parseInt(page)-1) * parseInt(count)  
