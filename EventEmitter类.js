let events = require("events");

let eventEmitter = new events.EventEmitter();
// 监听器
let listener1 = function listener1() {
    console.log("我只有一个女朋友")
}
let listener2 = function listener2() {
    console.log("我有两个女朋友")
}
eventEmitter.addListener('connection', listener1);
eventEmitter.on('connection', listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + "个女朋友")

eventEmitter.emit('connection');

// 移除
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再监听")
eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners + '个监听器听链接事件');

console.log("女朋友死了");