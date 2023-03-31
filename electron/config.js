const path = require('path')

const isCreateAdmin = true
const isDev = true
const UiUrl = isDev ? 'http://127.0.0.1:5173/' : path.join(__dirname,'../uidist/index.html')
const AdminUrl = isCreateAdmin ? (isDev ? 'http://172.16.18.244:8081/' : path.join(__dirname,'../admindist/index.html')) : ''
const openDevTools =  ['admin']//['ui','admin']
module.exports = {
    isCreateAdmin,
    isDev,
    UiUrl,
    AdminUrl,
    openDevTools
}