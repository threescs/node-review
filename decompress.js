var fs = require("fs");
var zlib = require("zlib");

// 解压 input.txt.gz 文件为input.txt
fs.createReadStream("input.txt.gz")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt"));

  console.log("文件解压完成")