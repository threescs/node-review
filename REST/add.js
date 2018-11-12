var express = require('express');
var app = express();
var fs = require('fs');

var user = {
    "user4" : {
        "name" : "mohit",
        "password" : "password4",
        "profession" : "teacher",
        "id": 4
    }
}
app.get('/addUser', function (req, res) {
    fs.readFile(__dirname + "/" + "users.json", "utf8", function(err, data){
        data = JSON.parse(data);
        // 添加用户
        data["user4"] = user["user4"];
        res.end(JSON.stringify(data));
        console.log(data);
    })
})

var server = app.listen(8081, function() {
    var host = server.address().address
    var port = server.address().port
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})