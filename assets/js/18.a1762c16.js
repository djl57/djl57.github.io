(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{180:function(t,s,e){"use strict";e.r(s);var a=e(0),n=Object(a.a)({},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),e("p",[t._v("关于export和import的语法，还需要"),e("a",{attrs:{href:"http://es6.ruanyifeng.com/#docs/module",target:"_blank",rel:"noopener noreferrer"}},[t._v("继续了解"),e("OutboundLink")],1)])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"module模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#module模块","aria-hidden":"true"}},[this._v("#")]),this._v(" module模块")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("阮一峰es6")]),this._v(" "),s("p",[this._v("在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("模块加载方案")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("使用环境")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}})])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("CommonJS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("服务器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行时加载")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("AMD")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("浏览器")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("运行时加载")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("ES6(export,import)")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("通用？")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("编译时加载")])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// CommonJS模块")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readFile "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等同于")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _fs "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" stat "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" exists "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" readfile "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readfile"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ES6模块")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" stat"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exists"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readFile "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])}],!1,null,null,null);n.options.__file="module.md";s.default=n.exports}}]);