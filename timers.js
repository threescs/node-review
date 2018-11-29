/**
 * @name timer
 * @description node中的定时器
 */

 setTimeout(()=> console.log('setTimeout 1s'),1000)
 setInterval(() => console.log('setInterval 1s'),1000)

 /**    
  * 加到下一个队列
  */
 process.nextTick(() => console.log('process nexTick')) //会在所有异步任务之前, 当前主线程的末尾, 虽然nextTick也会异步执行但是不会给其他的io事件执行的任何机会.
 setImmediate(() => console.log('setImmediate 1s'), 1000) //和setTimeout(fn, 0)差不多
 console.log('222');