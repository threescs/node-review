var User = require('./user.js');

/**
 * 插入
 */
function insert() {
    var user = new User({
        username: '尚成帅',
        userpwd: 'abcdefg',
        userage: 37,
        logindate: new Date() //最近登录时间
    })

    user.save(function(err, res) {
        if(err) {
            console.log('Error:' + err);
        }else {
            console.log('Res:' + res)
        }
    });
}
insert();