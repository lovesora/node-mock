const Koa = require('koa');
const app = new Koa();


const bodyParser = require('koa-bodyparser');
app.use(bodyParser());


const cors = require('koa-cors');
app.use(cors());


// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}\n`);
    await next();
});


const controller = require('./config/controller.config.js');
app.use(controller());


const mock = require('./middleware/mock/index');
app.use(mock());


app.listen(8800);
console.log('app started at port 8800');
