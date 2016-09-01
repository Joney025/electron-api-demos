# 文档

这个程序作为轻量的Electron程序被开发，除了少量的由代码组织做出的问候自身的代码外，将演示如何创建基本的Electron程序。

程序中显示的所有例子代码都_是程序中实际执行的代码_。这些 文件被放置到它们自己文件中，并组织到对应章节(通讯、菜单、原生用户接口、媒体、系统和窗口)的进程(主进程或者处理进程)中。 

这样做是为了方便代码维护——代码只需要在一个地方更新——也可以方便的组织和查找。

所有的页面(或称为 视图)都是`.html`文件，使用[HTML imports](http://www.html5rocks.com/en/tutorials/webcomponents/imports/)把它们添加到`index.html`中。

你想了解如何添加演示？跳到[添加新的演示章节](#添加章节或演示).

## 目录结构

![程序结构和操作框图](/assets/img/diagram.png)

#### `assets`
这个目录包括所有程序自身的资源: CSS文件, 字体文件, 图片 和共享的JavaScript库或者帮助。

#### `main-process`
这个目录的子目录是每个演示章节主进程需要的JavaScript文件。它的结构与`renderer-process`目录镜像。

`main.js`文件放置在项目根目录，会获取目录下每个`.js`文件并执行它们。

#### `renderer-process`
这个目录包含的子目录是每个演示章节处理进程需要的JavaScript文件。它的结构和`main-process`镜像。

演示的每个HTML页面视图请求对应的renderer-process目录下`.js`文件。

每个页面视图读取它关联的主进程和处理进程文件，并作为片段添加到(代码)页面中。

#### `sections`
这个目录的子目录对应于每个演示章节。这些子目录包括了每个演示页面需要的HTML文件。它们会添加到根目录下的`index.html`中。

#### `index.html`
是程序的主要视图。它包括一个导航条和使用[HTML imports](http://www.html5rocks.com/en/tutorials/webcomponents/imports/)添加到`body`的章节HTML页面。
#### `main.js`
这个文件提供程序生命周期实例，如如何开始和退出，它是程序的主进程。它会链接到`main-process`目录下的每个`.js`文件并执行。

在`package.json`中设置其作为主要(`main`)文件。

#### `package.json`
这个文件是`npm`和Electron.js必须的。它提供关于程序的描述信息: author, dependencies, repository 和指向`main.js`来作为程序主进程文件

#### Docs
文件: `CODE_OF_CONDUCT`, `README`, `docs` 和 `CONTRIBUTING` 等，是这个项目的文档。

## UI术语

![UI术语](/assets/img/ui-terminology.png)

## CSS命名约定

没有什么过于严格要求和更多指南:

- 需要避免直接对元素设置样式，不过也有例外，如`<p>`或者`<code>`。
- 属于一起的元素均以其父类作为前缀。 `.section`, `.section-header`, `.section-icon`.
- 状态使用`is-`前缀。
- 公共的使用`u-`前缀。

## 添加章节或演示

这里是一些添加新章节或演示的提示。常规提示——它们一般仅仅是复制了类似存在项目中的一行或者文件即开始!

### 新章节

一个或者多个演示需要一个完整的新页

#### index.html

这个页面包含章节列表边栏以及通过HTML imports引入的每个章节模板。

- 添加演示到`index.html`边栏的适当分类下
 - 更新 `id` 例如 `id="button-dialogs"`
 - 更新 `data-section` 例如`data-section="dialogs"`
- 添加演示模板路径到`index.html`的`head`的import链接部分 
 - 例如 `<link rel="import" href="sections/native-ui/dialogs.html">`

#### 模板

模板被添加进程序的`index.html`。

- 在`sections`目录下，从你添加章节分类中复制一个存在的`html`模板文件
- 更新它们的`id`
 - 例如`id="dialogs-section"`
- 更新所有`header`标签中的文字为你新章节相关内容
 - 根据演示需要添加或者移除专业提示

### 演示

任何你演示需要的代码均需要正确放置到'main-process'或者'renderer-process'目录中运行位置下

所有需要在程序开始时运行但不需要显示在你的演示中的JavaScript文件放置在'main-process'目录下(见后说明)。

处理进程代码是演示中需要读取和显示的，因为会在模板页面中请求，所以它们运行在处理进程中(见后说明)。

- 从模板页面`<div class="demo">`部分复制和粘贴存的。
- 更新演示按钮`id`
 - 例如 `<button class="demo-button" id="information-dialog">观看演示</button>`
- 如果演示包括对DOM写入的请求，则更新`id`，否则删除掉:
 - 例如 `<span class="demo-response" id="info-selection"></span>`
- 更新你演示的文本描述。
- 如果你显示主进程或者处理进程样例代码，则包括或者移除对应标签
 - 样例代码通过`data-path`附加的路径信息读取并添加到DOM
   - 例如 `<pre><code data-path="renderer-process/native-ui/dialogs/information.js"></pre></code>`
 - 在模板的脚本标签中请求你的处理进程代码
   - 例如  `require('./renderer-process/native-ui/dialogs/information')`

#### 尝试一下

至此，你应该可以运行程序了，执行`npm start`并且观看你的章节和/或者 演示。:tada:
