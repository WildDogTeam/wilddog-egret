# wild-egret

## 在白鹭引擎中使用野狗sdk

在白鹭中使用外部的第三方lib需要做一些额外的工作，参考文档：['构建第三方库'](http://developer.egret.com/cn/2d/projectConfig/libraryProject),
['使用第三方库'](http://developer.egret.com/cn/github/egret-docs/extension/threes/instructions/index.html)

下面介绍如何在白鹭引擎中引入野狗。

**第1步**

 将此项目clone到本地某个路径下,下文用 `<path-to-wildegret>` 代替这个路径

**第2步**

 此项目尚未进行构建。在项目中执行 `egret build`，可以看到会在 bin 下生成几个文件

**第3步**

 在需要引入野狗的egret项目（下文用目标项目代替）中修改 `egretProperties.json` ,在 modules 下面增加一项

```json
{
    "name":"wilddog",
    "path":"<path-to-wildegret>"
}
```

**第4步**

最后命令行里使用 egret build -e 命令，egret 引擎会把 wilddog 库引用进来，在 libs/modules 路径下，你会看到 wilddog 这个库。

**第5步**

使用野狗进行数据同步
比如：

#### 在 index.html 中开发

```js
// index.html
// 在 loadScript 回调中填入代码
wilddog.initializeApp({
    syncURL: "https://<appid>.wilddogio.com",
    authDomain:"<appid>.wilddog.com"
})
wilddoog.sync().ref().on('child_added',function(snapshot){
    console.log(snapshot.val())
})

//...
```

或者手动添加 script 标签，
```html
<script egret='lib' src="libs/modules/wilddog/wilddog.js" src-release='libs/modules/wilddog/wilddog.min.js'></script>
<script>
// 此时不需等 loadScript 执行后再调用 wilddog
wilddog.initializeApp({
    syncURL: "https://<appid>.wilddogio.com",
    authDomain:"<appid>.wilddog.com"
})
wilddoog.sync().ref().on('child_added',function(snapshot){
    console.log(snapshot.val())
})
</script>
```

#### 在 Main.ts 中开发

手动将 libs/modules/wilddog/wilddog.d.ts 移到 src 目录下

删除最后的export = wilddog;
