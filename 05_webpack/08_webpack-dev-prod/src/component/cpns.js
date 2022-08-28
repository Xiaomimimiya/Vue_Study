// 引入css

// 但是在引入css时 需要配置 css-loader -D
//  同时需要 style-loader -D 来进行解析

import '../css/div-cpn.css'

// 对于less的解析

import "../css/title-h2.less"

import "../css/bg-style.css"

import imgRecode  from "../img/recommd.png" 

import {createApp} from "vue"
import hello from "../vue/hello"


// div
const divEl = document.createElement("div")

divEl.textContent = "hello world"

divEl.classList.add("content")

document.body.append(divEl)

// h2
const titleEl = document.createElement("h2")

titleEl.textContent = "hello title"

titleEl.classList.add("title")

document.body.append(titleEl)


// img
// 引入图片


const imgEl = document.createElement("img")
// 图片在前面引入 import
imgEl.src = imgRecode
document.body.append(imgEl)

// 设置背景
const divbgEl = document.createElement("div")
divbgEl.classList.add("img-bg")
document.body.append(divbgEl)

// 全局变量
console.log(why);

console.log("11212e1");
createApp(hello).mount("#app")

