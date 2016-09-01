const versionInfoBtn = document.getElementById('version-info')

const electronVersion = process.versions.electron

versionInfoBtn.addEventListener('click', function () {
  const message = `这个程序使用的Electron版本是: ${electronVersion}`
  document.getElementById('got-version-info').innerHTML = message
})
