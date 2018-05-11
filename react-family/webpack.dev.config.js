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
 },
 devServer:{
    contentBase: path.join(__dirname, './'),//url根目录，默认指向项目根目录
    historyApiFallback: true,//当使用HTML5 History API 时，任意的404响应都可能需要被替代为 index.html
    open:false, //自动打开浏览器
    port:8099 //在指定的端口打开
}
}

