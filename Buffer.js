// const buf = Buffer.from('runoob', 'asvli');

// console.log(buf.toString('hex')); //将每个字节编码为两个十六进制字符
// console.log(buf.toString('base64')); 




/**
 * 将Buffer转换为JSON对象
 */
const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);


/**
 * 缓冲区比较
 */

 var buffer1 = Buffer.from("ABC");
 var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + '在' + buffer2 + "之前");
}else if(result == 0) {
    console.log(buffer1 + '与' + buffer2 + '相同');
}else {
    console.log(buffer1 + '在' + buffer2 + '之后')
}
console.log(result);