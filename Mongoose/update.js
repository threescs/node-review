var User = require('./user.js');

function update() {
    var wherestr = {'username': '尚成帅'};
    var updatestr = {'userpwd': 'zzzz'};

    User.update(wherestr, updatestr, function(err, res) {
        if(err) {
            console.log('Error: ' + err);
        }else{
            console.log('Res: ' + res);
        }
    }) 
}
update();

// 也可以根据id 常用的方法findByIdAndUpdate 

User.findByIdAndUpdate(id, updatestr, function(err, res) {
    if(err) {
        console.log('Error: ' + err);
    } else {
        console.log('Res: ' + res);
    }
})

// 删除方法 跟上面类似
// remove代替
// 也可以用findByIdAndRemove

// 查询 跟上面类似
// find代替