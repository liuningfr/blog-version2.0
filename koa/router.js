const Router = require('koa-router');
const list = require('./controller/list');
const article = require('./controller/article');

const api = new Router();
const router = new Router();

api
  .get('/list', list.list)
  .get('/getdetail', article.getArticle);

router.use('/api', api.routes());

module.exports = router;