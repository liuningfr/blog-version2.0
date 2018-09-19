const Article = require('../model/article');

exports.getArticle = async (ctx) => {
  const { id } = ctx.query;
  const data = await Article.getArticle(id);
  ctx.body = data;
};