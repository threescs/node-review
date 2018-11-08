const fs = require("fs");
const download = require('download');

download('http://pic1.nipic.com/2008-12-23/200812232331478_2.jpg').then(data => {
    fs.writeFileSync('lsy.jpg', data);
})