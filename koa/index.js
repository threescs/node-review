const Koa = require('koa')
const app = new Koa()
// 搭建最简单的web服务器, 
app.use( async(ctx) => {
    ctx.body = "hello world"
})
app.listen(3000)
console.log("demo in run")

// koa 大规模的用到了async await
const wait1 = () => {
    return new Promise(resolve => {
        resolve(setTimeout(() => {
            console.log("1s loater")
        },1000))
    })
}

const wait2 = () => {
    return new Promise(resolve => {
        resolve(setTimeout(() => {
            console.log("2s loater")
        },2000))
    })
}

async function  test() {
    const a = await wait1()
    const b = await wait2()
    console.log("end")
}
console.log("start")
test()