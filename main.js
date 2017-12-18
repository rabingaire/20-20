const {app, BrowserWindow, Menu} = require('electron')
const path = require('path')
const url = require('url')
const template = require('./menu.js');

let win

function createWindow () {
  win = new BrowserWindow({width: 300, height: 150, resizable: false})
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  win.on('closed', () => {
    win = null
  })

  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})