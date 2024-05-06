/*
 * @Author: jinxudong 1766551722@qq.com
 * @Date: 2024-04-30 15:45:14
 * @LastEditors: jinxudong 1766551722@qq.com
 * @LastEditTime: 2024-04-30 16:04:54
 * @FilePath: \extensions\imageShow\src\service_worker.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function download(url){
    var options={
        url:url
    }
    chrome.downloads.download(options)
}
//接收消息处理器
chrome.runtime.onMessage.addListener(function(message, sender,sendResponse) {
	if (message.type == 'down') {
        //调用下载方法
		download(message.data)
	}
});
