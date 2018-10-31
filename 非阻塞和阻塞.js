// 阻塞实例
// let fs = require("fs");
// let data = fs.readFileSync('input.txt');
// console.log(data.toString());
// console.log("程序执行结束");

// 非阻塞实例
let fs = require("fs");
fs.readFile("input.txt", function(err, data) {
    if(err) return console.error(err);
    console.log(data.toString());
});

console.log("程序执行结束");