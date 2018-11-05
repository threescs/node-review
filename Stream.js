// 可读流
// // Stream(流)
// var fs = require('fs');
// var data = "";

// var readerStream = fs.createReadStream("input.txt");
// // 设置编码为utf-8

// readerStream.setEncoding('UTF8');

// // 处理流事件 --> data, end, and error
// readerStream.on('data', function(chunk){
//     data += chunk;
// })

// readerStream.on('end', function(){
//     console.log(data);
// })

// readerStream.on('error', function(err){
//     console.log(err.stack);
// })
// console.log("程序执行完毕");




// 写入流
var fs = require("fs");
var data = "// 小帅是个帅哥"

var writeStream = fs.createWriteStream('shuai.txt');

writeStream.write(data,'UTF8');

// 标记文件末尾
writeStream.end();

// 处理流事件 --> data, end, and error
writeStream.on("finish", function(){
    console.log("写入完成");
})
writeStream.on("error", function(){
    console.log(err.stack);
})

console.log("程序执行完毕");


// readerStream.pipe(writerStream); pipe复制操作