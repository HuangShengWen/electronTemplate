const {ipcRenderer,contextBridge} = require('electron')

ipcRenderer.on('port',(e)=>{
    console.log(e);
})

contextBridge.exposeInIsolatedWorld('IPC',{
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    test:()=>{
        return '测试通信~'
    }
})