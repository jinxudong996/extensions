document.addEventListener('mouseup', function (event) {
    let selectedText = window.getSelection().toString().trim();
    console.log(selectedText)
    if (selectedText.length > 0) {
        chrome.runtime.sendMessage({ text: selectedText });
    }
});

document.addEventListener('click',function(e){
    console.log(e)
})