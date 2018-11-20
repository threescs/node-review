const Koa = require("koa")
const app = new Koa()

app.use(async(ctx) => {
    if (ctx.url === '/' && ctx.method === 'GET') {
        let html = `
        <h2>This is demo2</h2>
        <form method="POST" action="/">
            <p>username:</p>
            <input name="username">
            <p>age:</p>
            <input name="age">
            <p>website</p>
            <input name="website">
            <button type="submit">submit</button>                   
        </form>
        `
        ctx.body = html
    } else if (ctx.url === '/' && ctx.method === 'POST') {
        let postData = await parsePostDate(ctx)
        ctx.body = postData
    } else {
        ctx.body = '<h2>404</h2>'
    }
})

const parsePostDate = (ctx) => {
    return new Promise((resolve, reject) => {
        try{
            let postData = ""
            ctx.req.on('data', (data) => {
                postData += data
            })
            ctx.req.addListener("end", function() {
                let parseData = parseQueryStr(postData)
                resolve(parseData)
            })
        } catch(error) {
            reject(error)
        }
    })
}

const parseQueryStr = (queryStr) => {
    const queryData = {}
    const queryStrList = queryStr.split('&')
    for(let [index, queryStr] of queryStrList.entries()) {
        let itemList = queryStr.split('=')
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
    return queryData
}

app.listen(3000, () => {
    console.log('dom2 is run');
})