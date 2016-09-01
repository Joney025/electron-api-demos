const ipc = require('electron').ipcMain
const dialog = require('electron').dialog

ipc.on('open-error-dialog', function (event) {
  dialog.showErrorBox('一条错误信息', '演示一条错误信息。')
})
