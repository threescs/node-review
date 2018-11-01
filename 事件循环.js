
// EventEmitter 类
// EventEmitter的核心就是事件触发与事件监听器功能的封装

// Node.js是单线程应用程序 很多相应的api都支持回调函数
// on 就是绑定事件 (event[注册一个监听器],lister[接受一个回调函数]);
// addListener 为指定事件添加一个监听器 在监听数组的尾部
// emit 就是触发绑定的事件
// once(event, listener) 为指定事件注册一个单次监听器 就是只会触发一次
// removeListener(event, listener)移除指定事件的某个监听器，监听器必须是该事件已经注册过的监听器。
// 	removeAllListeners([event]) 移除所有的
// 	setMaxListeners(n)  EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
// 	listeners(event) 返回指定事件的监听器数组
// 	emit(event, [arg1], [arg2], [...]) 执行每个监听器
var events = require('events');

// 常见eventEmitter 对象
var eventEmitter = new events.EventEmitter();

// 创建事件处理程序
var connectHandler = function connected() {
    console.log("连接成功");

    // 触发data_receives事件
    eventEmitter.emit('data_received');
}
// 绑定connection事件处理程序
eventEmitter.on("connection", connectHandler);

// 使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function() {
    console.log("数据接收成功");
})

// 触发 connection 事件
eventEmitter.emit('connection');
console.log("程序执行完毕");