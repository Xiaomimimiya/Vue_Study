// 一、传统的方式 引入外部包

// const foo = require("./bar.js")
// console.log(foo.name);
// console.log(foo.age);
// console.log(foo.sayHello());

// 二、引入内置的包
// const path = require("path")
// console.log(path);
// const http = require("http")
// console.log(http);

// 三、不是内置也不是引入的 而是通过npm进行安装 或者自定义的

    // 需要在node_modules下进行新建

    // const why = require("why")
    // console.log(why);

// 通过npm install axios 会在文件夹中建立 node_modules 文件夹
// 然后require 会自动去里面进行查找到axios 再自动找到index.js

// 也会去上层的文件夹中去进行查找

// const axios = require("axios")