(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2383bd"],{ff07:function(a,t,e){"use strict";e.r(t);var n=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("article",[e("h2",[a._v("介绍")]),e("p",[a._v("开发思路和express差不多，最大的特点就是可以避免异步嵌套。")]),e("p",[a._v("文档："),e("a",{attrs:{href:"https://www.itying.com/koa/"}},[a._v("https://www.itying.com/koa/")])]),e("h2",[a._v("安装")]),e("h3",[a._v("（1）安装nodejs")]),e("h3",[a._v("（2）安装koa：")]),e("p",[a._v("1、新建一个文件夹")]),e("p",[a._v("2、npm init 生成一个package.json文件【用来管理项目和项目中的各种依赖】")]),e("p",[a._v("3、安装koa：npm i koa --save【就像引入一个模块】")]),e("h2",[a._v("配置")]),e("p",[a._v("learn-koa2的app.js文件中")]),e("h2",[a._v("es6常用语法")]),e("p",[a._v("let，const，模板字符串【``】，对象属性简写、方法简写，箭头函数【this指向上下文】，promise")]),e("h3",[a._v("promise")]),e("p",[a._v("一个函数getData：可以内部获取ajax返回数据。")]),e("p",[a._v("现在想要方法外部获取ajax返回数据：getData函数不能实现，这时就想到回调函数。")]),e("p",[a._v("回调函数：将getData函数的参数设置为callback，最后在获取到返回数据data后return callback(data)，\n    其中参数callback是一个方法，就可以在外部调用getData(data => { 操作data })。")]),e("p",[a._v("除了回调函数，还可以使用promise来实现方法外部获取异步数据。")]),e("p",[a._v("promise的参数是两个回调函数，第一个resolve是成功的回调函数，第二个reject是失败的回调函数。")]),e("p",[a._v("我们可以const getData = new Promise((resolve, reject) => { 获取异步数据的方法，然后在获取到数据data\n    后resolve(data) })，就可以使用getDta.then(data => { 操作data })，捕捉失败的回调函数reject返回的数据\n    就用getData.catch(data => { 错误操作 })")]),e("h2",[a._v("async/await")]),e("p",[a._v("async【Athink（读音）】创建一个异步方法，await等待一个异步方法完成，获取它的返回数据。")]),e("p",[a._v("async使用方式：async function getData() { 获取数据并return }【async () => {}用箭头函数就没有名字】，返回一个promise")]),e("p",[a._v("拿到异步方法的数据：getData().then(data => { 操作异步数据 })")]),e("h3",[a._v("以上方式还是用到了回调的思维，这时es7的await就起作用了")]),e("p",[a._v("await使用方式：await必须用在异步async方法里面。async function getName() { const data = await getData()【\n    getData()不是一定要是async方法，也可以是一个promise，因为async返回的就是一个promise】 }")]),e("p",[a._v("await阻塞功能，把异步的变成同步的，await的异步获取数据方法没执行完，await下面的代码不会执行。")]),e("h2",[a._v("使用vscode调试nodejs代码（即js文件）")]),e("p",[a._v("点击左上角 调试-> 启动调试，然后打端点，按左上角绿色的小三角，打印的东西就会出现在左上角的框框里")])])}],c={name:"koajsIntro",data:function(){return{createTime:"2019-03-13 12:13:00"}},components:{},mounted:function(){},computed:{},methods:{}},o=c,p=e("2877"),i=Object(p["a"])(o,n,s,!1,null,"6a849ae8",null);t["default"]=i.exports}}]);