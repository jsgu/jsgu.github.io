
### JSGU 工程实例

1. 初始化工程(package.json)

```
$ npm init
```


2. 安装常用打包工具
```
npm i  -D autoprefixer-loader babel-core babel-loader babel-preset-es2015 clean-webpack-plugin css-loader extract-text-webpack-plugin file-loader html-webpack-plugin  less-loader style-loader url-loader  webpack webpack-dev-server
```

3. 配置webpack.config.js

4. 配置package.json
```
"scripts": {
    "watch": "webpack --watch",
    "build": "webpack --config webpack.config.js",
    "server": "webpack-dev-server --open",
    "clear": "rm -rf ./dist/**",
    "commit": "git pull  && git add . && git commit -m 'update' &&  git push",
  }
```
5. github 操作
```

//初始化github
echo "# case" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/jsgu/case.git
git push -u origin master

//添加提交(常用 可配置在package.json [ $ npm run commit ])
git pull  && git add . && git commit -m "update" &&  git push
```

6. 常用命令行
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
