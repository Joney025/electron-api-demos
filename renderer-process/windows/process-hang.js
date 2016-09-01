const BrowserWindow = require('electron').remote.BrowserWindow
const dialog = require('electron').remote.dialog

const path = require('path')

const processHangBtn = document.getElementById('process-hang')

processHangBtn.addEventListener('click', function (event) {
  const hangWinPath = path.join('file://', __dirname, '../../sections/windows/process-hang.html')
  let win = new BrowserWindow({ width: 400, height: 320 })

  win.on('unresponsive', function () {
    const options = {
      type: 'info',
      title: '渲染进程挂起事件触发',
      message: '进程挂起',
      buttons: ['重新加载', 'close']
    }
    dialog.showMessageBox(options, function (index) {
      if (index === 0) win.reload()
      else win.close()
    })
  })

  win.on('close', function () { win = null })
  win.loadURL(hangWinPath)
  win.show()
})
