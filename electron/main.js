const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')
const { isCreateAdmin, isDev, UiUrl, AdminUrl, openDevTools } = require('./config')
const { initChannelMessage } = require('./utils/ChannelMain')

console.log(isCreateAdmin, isDev);
let mainWin = null, childWin = null

const init = () => {
    Menu.setApplicationMenu(null) //设置菜单栏为空 即使按住alt也不会呼出.setApplicationMenu(null) //设置菜单栏为空 即使按住alt也不会呼出

    const options = {
        webPreferences: {
            preload: path.join(__dirname, './preload.js'),
        },
    }

    mainWin = new BrowserWindow({
        ...options
    })
    if (openDevTools.includes('ui')) mainWin.webContents.openDevTools()
    if (isDev) mainWin.loadURL(UiUrl)
    else mainWin.loadFile(UiUrl)



    if (isCreateAdmin) {
        childWin = new BrowserWindow({
            ...options
        })
        if (openDevTools.includes('admin')) childWin.webContents.openDevTools()
        if (isDev) childWin.loadURL(AdminUrl)
        else childWin.loadFile(AdminUrl)

    }

    initChannelMessage(mainWin)
}


// 作为其 ready 事件的专用监听器，这样可以避免直接监听 .on 事件带来的一些问题。
app.whenReady().then(res => {
    init()
})
// 在 Windows 和 Linux 上，我们通常希望在关闭一个应用的所有窗口后让它退出。 若要在 Electron 中实现这一点，您可以监听 window-all-closed 事件，并调用 app.quit() 来让应用退出。这不适用于 macOS。
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})