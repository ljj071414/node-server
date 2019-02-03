var http = require('http')
var path = require('path')
var fs = require('fs')
var url = require('url')


function staticRoot(staticPath, req, res){
    console.log(req.url)
    var pathObj = url.parse(req.url, true)
    console.log(pathObj)
}

var filepath = path.join(staticPath, pathObj.pathname)

fs.readfile(filePath, 'binary', function(err, fileContent){
    if(err){
        console.log('404')
        res.wirteHead(404, 'not found')
        res.end('<h1>404 not found </h1>')
    }else{
        console.log('ok')
        res.writeHead(200, 'ok')
        res.write(fileContent, 'birary')
        res.end()
    }
})

console.log(path.join(__dirname, 'node-server'))

var server = http.createServer(function(req, res){
    staticRoot(path.join(__dirname, 'node-server'), req, res)
})

server.listen(8080)
console.log()