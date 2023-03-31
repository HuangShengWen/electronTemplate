const path = require('path')

const isCreateAdmin = true
const isDev = true
const UiUrl = isDev ? '' : path.join(__dirname,'../uidist/index.html')
const AdminUrl = isCreateAdmin ? (isDev ? '' : path.join(__dirname,'../admindist/index.html')) : ''
const openDevTools =  ['admin']//['ui','admin']
module.exports = {
    isCreateAdmin,
    isDev,
    UiUrl,
    AdminUrl,
    openDevTools
}