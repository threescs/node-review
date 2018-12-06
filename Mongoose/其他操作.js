var mongoose = require('./db.js'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, index: true},  //index建索引
    userpwd: {type: String},
    userage: {type: Number},
    logindata: { type: Date, default: Date.now} //默认值
})

module.exports = mongoose.model('User', UserSchema);