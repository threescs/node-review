"use strict"
var a = 2;
function foo() {
    console.log(this.a)
}
foo();
// 意思就是说不在默认的给function指定一个this对象了, 一般情况下, 我们的function一定会有一个调用对象, 不管是字符还是数组什么的, 或者全局变量, 这种转换很损耗性能, 而且危险, 因为暴露了全局对象, 所以严格模式下, 不会再封装this对象了, 如果没有, 就是undefined
