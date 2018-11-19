// 因为详情页做了防爬虫, 只能爬接口
// nodejs里一个非常方便的客户端代理模块
const superagent = require('superagent');
// Node.js版本的Jquery
const cheerio = require("cheerio");

const async = require("async");
// fs操作IO
const fs = require("fs");

const url = require("url");

const request = require("request");
const hupuUrl = 'https://bbs.hupu.com/selfie-1';

let str = []; // 存信息

let allUrl = []; //存url的
let curCount = 0;

// 缺图片的方法
const downloadImg = (url, filename) => {
    request.head(url,(err, res, body) => {
        request(url).pipe(fs.createWriteStream(path.resolve(__dirname,`images/${filename}.${path.extname(url)}`)))
    })
}

for (let i = 1; i <= 4; i++) {
    hupuUrl2 = 'https://bbs.hupu.com/selfie-' + i;
    hupuUrl3 = 'https://bbs.hupu.com';
    // hupuUrl2="https://bbs.hupu.com/24195588.html"
    // for循环把五页的叶念循环出来
    superagent.get(hupuUrl2)
    //通过superagent去请求每一页
            .end(function (err, res) {
                if (err) {
                    return console.error(err);
                }
                let $ = cheerio.load(res.text);
                // 获取首页所有的链接
                $('.titlelink>a:first-child').each(function (idx, element) {
                    let $element = $(element);
                    let href = hupuUrl3 + $element.attr("href");
                    allUrl.push(href);
                    curCount++;
                    // 获取到此url, 异步进行以下操作, 此操作为进入到这个帖子中爬取数据
                    superagent.get(href)
                        .end(function (err, res) {
                            if(err) {
                                return console.error(err);
                            }
                            let $ = cheerio.load(res.text);
                            let add = href;
                            let title = $('.bbs-hd-h1>h1').attr('data-title');//帖子标题
                            let tximg = $('.headpic:first-child>img').attr('src');//用户头像
                            let txname = $('.j_u:first-child').attr('uname');//用户ID
                            let contentimg1 = $('.quote-content>p:nth-child(1)>img').attr('src');//爆照图1
                            let contentimg2 = $('.quote-content>p:nth-child(2)>img').attr('src');//爆照图2
                            let contentimg3 = $('.quote-content>p:nth-child(3)>img').attr('src');//爆照图3
                            str.push({
                                'tx': tximg,
                                'name': txname,
                                'pic': contentimg1, contentimg2, contentimg3
                            });
                            console.log($('.bbs-hd-h1>h1'))
                            let stad = {
                                'address': add,
                                'title': title,
                                'ID': txname,
                                'touxiang': tximg,
                                'pic1': contentimg1,
                                'pic2': contentimg2,
                                'pic3': contentimg3,                            
                            };
                            let picArr = [contentimg1, contentimg2, contentimg3];
                            // 通过fs模块我把数据写入本地json
                            fs.appendFile('data/result1.json', JSON.stringify(stad), 'utf-8', function(err) {
                                if(err) throw new Error("appendFile failed...");

                            })
                            // 定义一个以title为文件夹名的路径,作为以后下载图片时使用
                            let lujin = 'data/' + title + '/';
                            fs.exists('data/pic', function(exists) {
                                if(!exists) {
                                    // 异步的创建目录
                                    fs.mkdir("data/pic", function(err) {
                                        if(err) {
                                            throw err
                                        }
                                        async.mapSeries(picArr, function(item, callback) {
                                            setTimeout(function() {
                                                // downloadPic方法下载图片
                                                downloadPic(item, 'data/' + (new Date().getTime() + '.jpg'));
                                                console.log(item);
                                                callback(null, item);
                                            },400)
                                        }, function(err, results) {});
                                    });
                                } else {
                                    
                                }
                            })
                        })
                })
            })
     
}