const ipc = require('electron').ipcRenderer

const printPDFBtn = document.getElementById('print-pdf')

printPDFBtn.addEventListener('click', function (event) {
  ipc.send('print-to-pdf')
})

ipc.on('wrote-pdf', function (event, path) {
  const message = `输出PDF到: ${path}`
  document.getElementById('pdf-path').innerHTML = message
})
