// import "css-loader!../css/style.css"
// 内联方式配置Css-loader
import "../css/style.css";
import "../css/title.less";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "hello world";
document.body.appendChild(divEl);