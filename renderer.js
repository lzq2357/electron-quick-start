// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.


// 这是渲染进程的js，就是index.html 引入的
// 要使用node js，需要 main.js 中 createWindow 时配置
// const fs = require("fs");




function readData() {
    alert("惊喜!");
}


//window 加载时，绑定 按钮的click 事件
window.onload = function () {
    const readBtn = document.getElementById("readDataBtn");
    readBtn.onclick = function () {
        alert("惊喜!");
    }
};









const myNotification = new Notification('Title', {
    body: 'Notification from the Renderer process'
})

myNotification.onclick = () => {
    console.log('Notification clicked')
};




