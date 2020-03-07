let http = require("http");

let fs = require("fs");



let server = http.createServer(function (req, res) {
  console.log('request was made:' + req.url)
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  let myReadStream = fs.createReadStream(__dirname + "/readme.txt", "utf8");
  myReadStream.pipe(res)
})

server.listen(3000, '127.0.0.1')
console.log('I love you 3000!')