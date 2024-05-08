/*
 * @Author: jinxudong 1766551722@qq.com
 * @Date: 2024-05-08 14:22:45
 * @LastEditors: jinxudong 1766551722@qq.com
 * @LastEditTime: 2024-05-08 14:46:30
 * @FilePath: \extensions\chrome02\popup.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
console.log(123123123)
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    document.getElementById('selected-text').textContent = request.text;
});