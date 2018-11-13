const mysql = require('mysql');
const config = require('../../config');

const singleton = () => {

  let instance;

  function init() {
    const pool = mysql.createPool({
      host       : config['mysql'].host,
      user       : config['mysql'].user,
      password   : config['mysql'].password,
      database   : config['mysql'].database,
    });

    return {
      query: (sql, props) => new Promise( (resolve, reject) => {
        pool.getConnection( (err,connection) => {
          connection.query(sql, props, (err, result) => {
            connection.release();
            // console.log(sql);

            if (err) {

              // dev mode
              reject({ message: err.message });

              // prod mode
              // reject({ message: 'db error' });

            } else {
              resolve(result);
            }
          })
        });
      })

      
    }
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = init();
      }

      return instance;
    }
  }
}

module.exports = singleton().getInstance;
