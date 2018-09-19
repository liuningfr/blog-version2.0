const mysql = require('../lib/mysql');

exports.getArticle = async (article_id) => {
  const article = await mysql.query(`select * from articles where id=${article_id}`);
  return article;
};