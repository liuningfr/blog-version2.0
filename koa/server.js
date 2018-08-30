const Koa = require('koa');
const Router = require('koa-router');
const KoaBody = require('koa-body');
const Mysql = require('mysql2/promise');
const Wrapper = require('co-mysql');

const app = new Koa();
const router = new Router();

const options = {
  host: 'localhost',
  user: 'root',
  password: 'avril1993',
  database: 'blog',
};

const pool = Mysql.createPool(options);
const p = Wrapper(pool);

router
  .get('/list', async ctx => {
    const data = await p.query('select * from articles');
    ctx.body = data;
  })
  .post('/getdetail', async ctx => {
    const id = JSON.parse(ctx.request.body).id;
    const data = await p.query(`select * from articles where id=${id}`);
    ctx.body = data;
  });

app.use(KoaBody());
app
  .use(router.routes())
  .use(router.allowedMethods());
app.listen(3000);
