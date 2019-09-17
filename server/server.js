//这个案例展示get请求参数如何获得
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')//之前安装的两个依赖
var http = require('http')
var url = require('url')
var fs = require('fs')//node内置模块
// Serve up public/ftp folder
//配置静态资源服务器，将public文件夹静态化出来

var serve = serveStatic('public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function onRequest (req, res) {
    //路由
    const pathname = url.parse(req.url).pathname;
    const data = fs.readFileSync('data.json', 'utf8');
    if(pathname == '/addPraise'){
        console.log('addPraise');
        //拿到GET请求参数，就是拿到地址栏中的东西。
        // const queryJSON = url.parse(req.url, true).query;
        // const praiseList = JSON.parse(data.toString()); 
        // praiseList.push(queryJSON);
        // fs.writeFile('data.json', JSON.stringify(praiseList), (err) => {
        fs.writeFile('data.json', JSON.stringify(req.url), (err) => {
            //返回状态码
            if(err){
                res.end('error');
            }else{
                res.end('ok');
            }
        })
        return;
    } else if(pathname === '/getPraiseList') {
        res.end(data);
        return;
    } else if(pathname === '/clearPraiseList') {
        fs.writeFile('./data.json', JSON.stringify([]), (err) => {
            //返回状态码
            if(err){
                res.end('error');
            }else{
                res.end('ok');
            }
        })
        return;
    }
    serve(req, res, finalhandler(req, res))
})

// Listen
server.listen(3002)
console.log('server open on 3002 port')