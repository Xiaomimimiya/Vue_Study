// import "css-loader!../css/style.css"
// 内联方式配置Css-loader
import "../css/style.css";
import "../css/title.less";
import "../css/image.css";
import zznhImage from "../img/zznh.png";
import "../font/iconfont.css";

const divEl = document.createElement("div");
divEl.className = "title";
divEl.innerHTML = "hello world";

// 设置背景图片
const imgDiv = document.createElement("div");
imgDiv.className = "image-bg";

// 注意路径的设置
const imgEl = document.createElement("img");
imgEl.src = zznhImage;

const iEL = document.createElement("i");
iEL.className = "iconfont icon-ashbin";

document.body.appendChild(divEl);
document.body.appendChild(imgDiv);
document.body.appendChild(imgEl);
document.body.appendChild(iEL);