const path = require('path')
module.exports = {
 //入口文件，刚才初始化项目填写信息时有写，因人而异
 entry:path.join(__dirname, '/src/index.js'),
 mode: "development",
 //输出到dist文件夹，输出的名字叫bundle.js
 output:{
     path:path.join(__dirname, './dist'),
     filename:'bundle.js'
 },
 module: {
     rules: [{
         test: /\.js$/,
         use: ['babel-loader?cacheDirectory=true'],
         include: path.join(__dirname, 'src')
     }]
 }
}

