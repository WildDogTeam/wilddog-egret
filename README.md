# wild-egret

## 在白鹭引擎中使用野狗sdk

在白鹭中使用外部的第三方lib需要做一些额外的工作，参考文档：http://edn.egret.com/cn/docs/page/172

下面介绍如何在白鹭引擎中引入野狗。

**第1步** 

 将此项目clone到本地某个路径下,下文用`<path-to-wildegret>` 代替这个路径
**第2步** 

 在此项目中执行 `egret build`，可以看到会在 bin 下生成几个文件

**第3步** 

 在需要引入野狗的egret项目（下文用目标项目代替）中修改`egretProperties.json`,在modules 下面增加一项 

```json
{
    "name":"wilddog",
    "path":"<path-to-wildegret>"
}
```

**第4步** 

把wilddog.d.ts 复制到目标项目的 `src` 目录下，并稍做修改，如果最后一行是 `export = wilddog;` 把这行注释掉或删除掉，下文会解释原因。

**第5步** 

使用野狗进行数据同步
比如：


```ts
//Main.ts
//...
wilddog.initializeApp({
    syncURL: "https://<appid>.wilddogio.com",
    authDomain:"<appid>.wilddog.com"
})
wilddoog.sync().ref().on('child_added',function(snapshot){
    console.log(snapshot.val())
})

//...
```

## 说明

需要删除`export = wilddog;` 的原因：白鹭并不支持commonjs以及es6模块化的语法的语法。