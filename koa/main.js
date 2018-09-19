const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const logger = require('koa-logger');
const error = require('./middleware/error');
const router = require('./router');

const app = new Koa();

app.use(logger())
   .use(error())
   .use(bodyParser({ enableTypes: ['json'] }))
   .use(router.routes())

app.listen(3009);
