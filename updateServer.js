var process = require('child_process');
// 晖哥专用
process.exec('fileName',function (error, stdout, stderr) {
    if (error !== null) {
        // 失败回调
      console.log('exec error: ' + error);
    }
});