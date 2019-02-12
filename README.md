
### JSGU 工程实例

[web开发规范及建议](https://jsgu.github.io/book/)、[综合整理文档及工具](https://jsgu.github.io/dist/doc/index.html)、[D3](https://jsgu.github.io/dist/d3/index.html)、[canvas](https://jsgu.github.io/dist/canvas/index.html)

#### 初始化工程(自动生成package.json)

```
$ npm init
```


#### 安装常用打包工具

```
npm i  -D autoprefixer-loader babel-core babel-loader babel-preset-es2015 clean-webpack-plugin css-loader extract-text-webpack-plugin file-loader html-webpack-plugin  less-loader style-loader url-loader  webpack webpack-dev-server
```

#### 配置webpack.config.js

```
const config={
    pathName:'d3',
    pageTitle:'D3 数据可视化',
}

const distPath='dist/'+config.pathName;
const srcPath='src/'+config.pathName;

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: './'+srcPath+'/app.js',
    output: {
        path: path.join(__dirname, distPath),// 指定打包之后的文件夹
        filename: 'js/[name].[hash:8].js',// 可以打包为多个文件
    library: "jsgu",
        publicPath: '',
    libraryTarget: "umd"
    },
    devServer: {
      hot: true,
      contentBase: path.join(__dirname, distPath),
      compress: true,
    port: 9000//设置默认监听端口，如果省略，默认为"8080"
  },
  module: {
      rules: [
        {
          test: /\.css$/,
          exclude: /^node_modules$/,//需要排除的目录
          use: ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader!autoprefixer-loader",publicPath:"../"}),
      },
      {
        test: /\.less$/,
        exclude: /^node_modules$/,
        use: ExtractTextPlugin.extract({fallback: "style-loader",use: "css-loader!autoprefixer-loader!less-loader",publicPath:"../"})
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf|svg)$/,
          exclude: /^node_modules$/,
          use: 'file-loader?name=[sha512:hash:base64:7].[ext]&outputPath=font/'
      }, {
          test: /\.(png|jpe?g|gif)(\?.*)?$/,
          exclude: /^node_modules$/,
          use: 'url-loader?limit=10000&name=[sha512:hash:base64:7].[ext]&outputPath=img/', //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图片
      },
      {
          test: /\.(js|es6)$/,
          exclude: /^node_modules$/,
          loader: 'babel-loader?presets[]=es2015&compact=true', //此处不能用use
      }
      ]
    },
    plugins: [
      new CleanWebpackPlugin([distPath]),
      new HtmlWebpackPlugin({title:config.pageTitle,template: './src/index.html', minify:{removeComments:true,collapseWhitespace:true}}),
      new webpack.optimize.CommonsChunkPlugin('common'),//提取公共代码
      new webpack.HotModuleReplacementPlugin(), // 热加载插件
      new webpack.LoaderOptionsPlugin({minimize: true}),//压缩css等
      new webpack.BannerPlugin('© 2017 道心. @mail=>liuhangbiaoo@gmail.com,@url=>www.jsgu.net'),
      new webpack.optimize.UglifyJsPlugin({compress:{warnings:false}}),//压缩
      new ExtractTextPlugin("css/[name].[hash:8].css"),//输出css目录名称
  ]
}
```

#### 配置package.json

```
"scripts": {
    "watch": "webpack --watch",
    "build": "webpack --config webpack.config.js",
    "server": "webpack-dev-server --open",
    "clear": "rm -rf ./dist/**",
    "commit": "git pull  && git add . && git commit -m 'update' &&  git push",
  }
```

#### github 操作

```
//初始化github
echo "# case" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jsgu/jsgu.github.git
git push -u origin master

//添加提交(常用 可配置在package.json [ $ npm run commit ])
git pull  && git add . && git commit -m "update" &&  git push
```

#### 常用命令行

```
//监听
$ npm run watch
//编译打包
$ npm run build
//启动本地服务
$ npm run server
//清空目录
$ npm run clear
//git提交
$ npm run commit
```
