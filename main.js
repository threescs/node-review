// console.log(__filename);
// console.log(__dirname);

// function printHello() {
//     console.log("Hello, World!")
// }
// var t = setTimeout(printHello, 2000);

// clearTimeout(t)

process.on('exit', function(code) {
    setTimeout(function() {
        console.log("该代码不会执行")
    }, 0);
    console.log("退出码为:", code);
})
console.log("程序执行结束");