// 比如按照范围去查询

var User = require('./user.js');

function getByConditions() {
    var wherestr = {'username': '尚成帅'};
    var opt = {'username': 1,'_id': 1};
    // 上面 1 表示查询输出该字段, 0 表示不输出
    User.find(wherestr, opt, function(err, res) {  
        if(err) {
            console.log('Error: ' + err);
        }
        else {
            console.log('Res: ' + res);
        }
    })
}

getByConditions();