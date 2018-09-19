const mysql = require('../lib/mysql');

exports.getList = async () => {
  const list = await mysql.query('select * from articles');
  return list;
};