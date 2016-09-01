const clipboard = require('electron').clipboard

const pasteBtn = document.getElementById('paste-to')

pasteBtn.addEventListener('click', function () {
  clipboard.writeText('What a demo!')
  const message = `剪贴板内容: ${clipboard.readText()}`
  document.getElementById('paste-from').innerHTML = message
})
