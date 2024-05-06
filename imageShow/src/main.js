/*
 * @Author: jinxudong 1766551722@qq.com
 * @Date: 2024-04-30 15:33:09
 * @LastEditors: jinxudong 1766551722@qq.com
 * @LastEditTime: 2024-04-30 15:58:25
 * @FilePath: \extensions\imageShow\src\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * 显示网络图片的内存大小
 * @param {*} src 
 * @returns 
 */
function getByte(src) {
    return fetch(src).then(function (res) {
        return res.blob()
    }).then(function (data) {
        return (data.size / (1024)).toFixed(2) + 'kB'
    })
}

/**
 * 基于dom的title属性来设置显示图片信息
 * @param {*} el 
 * @param {number} byte zijie
 */
function showInfo(el, byte) {
    var html = `真实尺寸:${el.naturalWidth}*${el.naturalHeight}\n显示尺寸:${el.width}*${el.height}\n存储大小:${byte}`;
    el.title = html
}

/**
 * 在document上代理mouseover事件
 */
document.addEventListener('mouseover', function (e) {
    //移动到图片元素上时、则显示信息
    if (e.target.tagName == 'IMG') {
        getByte(e.target.src).then(byte => {
            showInfo(e.target, byte)
        })
    }
}, true)

document.addEventListener('dragend',async function(e){
    if(e.target.tagName=='IMG'){
        //发生消息，从content_scripts发送到扩展页面
        console.log('发送了消息',e.target.src)
        await chrome.runtime.sendMessage({type:'down',data:e.target.src});
    }
})
