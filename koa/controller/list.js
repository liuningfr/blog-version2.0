const List = require('../model/list');

exports.list = async (ctx) => {
  const data = await List.getList();
  ctx.body = data;
};