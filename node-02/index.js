var fs = require("fs");

//阻塞实例
// var data = fs.readFileSync(__dirname + '/index.txt');
// console.log(__dirname + '/index.txt')
// console.log(data.toString());
// console.log("程序执行结束!");

//非阻塞实例
fs.readFile(__dirname + '/index.txt', function(err, data) {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
})

console.log("程序执行完毕")
