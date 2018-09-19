const mysql = require('mysql2');
const { mysql: { host, database, username, password } } = require('../config');

class MysqlClient {
  constructor(options) {
    this.pool = mysql.createPool(options);
  }
  query(sql, placeholder) {
    return new Promise((resolve, reject) => {
      this.pool.getConnection((err, connection) => {
        if (err) {
          return reject(err);
        }
        connection.query(sql, placeholder, (error, results) => {
          connection.release();
          if (error) {
            reject(error);
          } else {
            resolve(results);
          }
        });
      });
    });
  }
}

module.exports = new MysqlClient({
  connectionLimit: 10,
  host,
  user: username,
  database,
  password,
});
