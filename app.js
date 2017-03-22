const Koa = require('koa');
const router = require('koa-router')();
const path = require('path');
const serve = require('koa-static');
const logger = require('koa-logger');


//数据
var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;


const app = new Koa();
app.use(logger());
router.get('/', async(ctx, next) => {
    ctx.request.path = '/index.html';
    await next();
});
router.get('/api/seller', async(ctx, next) => {
    ctx.response.body = {
        errNo: 0,
        data: seller
    };
});
router.get('/api/goods', async(ctx, next) => {
    ctx.response.body = {
        errNo: 0,
        data: goods
    };
});
router.get('/api/ratings', async(ctx, next) => {
    ctx.response.body = {
        errNo: 0,
        data: ratings
    };
});

// add router middleware:
app.use(router.routes());

app.use(serve(path.join(__dirname, '.', 'dist')));
app.listen(3000);
console.log('app started at port 3000...');