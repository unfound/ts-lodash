# 用TypeScript重写lodash

## 创建ts项目
1. 新建一个文件夹，然后npm init一个package.json
2. npm i webpack webpack-cli --save-dev安装webpack和webpack命令行依赖
3. 创建build，build下创建webpack.common.js、webpack.dev.js、webpack.prod.js分别对应公用，开发，线上的打包配置。
4. 创建src，按照文档目录创建文件夹
5. npm i html-webpack-plugin clean-webpack-plugin --save-dev安装这两插件并且配置
6. npm i webpack-merge webpack-dev-server --save-dev 安装这两个依赖并且配置
7. npm i typescript ts-loader --save-dev安装这两个依赖并配置
8. tsc --init初始化创建一个tsconfig.json配置文件并配置
9. npx eslint --init然后跟随提示进行安装需要的依赖
10. npm i eslint-loader --save-dev安装eslint-loader依赖并且配置
11. 添加一段代码，然后npm i --save-dev jest ts-jest @types/jest安装jest测试依赖
12. npx ts-jest config:init初始化jest的配置文件，可参考 [ts-jest helper](https://kulshekhar.github.io/ts-jest/user/install)
13. 运行建立test文件夹编写测试用例，然后运行jest会发现报test等变量未定义
14. npm i eslint-plugin-jest -D 安装jest的eslint插件并配置, 参考 [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest)
15. 修改package.json里的test为jest后执行依然会报'test'未定义的错误，是因为node版本过低，要求至少v10.14.2，参考[Getting Started sample fails with ReferenceError: test is not defined #10192](https://github.com/facebook/jest/issues/10192)