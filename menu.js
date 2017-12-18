const {app, shell} = require('electron')
const template = [
  {
    role: 'window',
    submenu: [
      {role: 'minimize'},
      {role: 'close'}
    ]
  },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn About Developer',
        click () { shell.openExternal('http://rabingaire.com.np') }
      }
    ]
  }
]
  
if (process.platform === 'darwin') {
  template.unshift({
    label: app.getName(),
    submenu: [
      {role: 'about'},
      {type: 'separator'},
      {role: 'quit'}
    ]
  })
}

module.exports = template;