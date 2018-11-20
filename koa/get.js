const Koa = require('koa');
const app = new Koa()

app.use(async(ctx) => {
    const url = ctx.url
    // 使用ctx.request
    const request = ctx.request
    const req_query = request.query
    const req_querystring = request.querystring

    // 直接用ctx来获取
    const req_ctx = ctx.query
    const req_ctx1 = ctx.querystring
    ctx.body = {
        url,
        req_query,
        req_querystring,
        req_ctx,
        req_ctx1,
    }
})
app.listen(3000,() => {
    console.log("demo1 is run")
})