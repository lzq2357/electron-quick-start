// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.


// dom 加载完成后，回调
// 执行了里面的 replaceText() 方法 : 获取 chrome-version 等的值
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {

    replaceText(`${type}-version`, process.versions[type])
  }
})
