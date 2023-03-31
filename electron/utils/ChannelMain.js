const { MessageChannelMain } = require('electron')

function initChannelMessage(win){
    const { port1, port2 } = new MessageChannelMain()
    win.webContents.postMessage('port', null, [port2])
    port1.postMessage({ some: 'message' })    
}

module.exports = {
    initChannelMessage
}

