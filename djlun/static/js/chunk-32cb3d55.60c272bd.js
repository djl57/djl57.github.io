(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32cb3d55"],{"07d8":function(n,r,t){"use strict";var e=t("5aee"),i=t("9f79"),o="Set";n.exports=t("ada4")(o,function(n){return function(){return n(this,arguments.length>0?arguments[0]:void 0)}},{add:function(n){return e.def(i(this,o),n=0===n?0:n,n)}},e)},"0b64":function(n,r,t){var e=t("f772"),i=t("9003"),o=t("5168")("species");n.exports=function(n){var r;return i(n)&&(r=n.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)||(r=void 0),e(r)&&(r=r[o],null===r&&(r=void 0))),void 0===r?Array:r}},1173:function(n,r){n.exports=function(n,r,t,e){if(!(n instanceof r)||void 0!==e&&e in n)throw TypeError(t+": incorrect invocation!");return n}},"2f21":function(n,r,t){"use strict";var e=t("79e5");n.exports=function(n,r){return!!n&&e(function(){r?n.call(null,function(){},1):n.call(null)})}},3846:function(n,r,t){t("9e1e")&&"g"!=/./g.flags&&t("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:t("0bfb")})},45173:function(n,r,t){var e=t("a22a");n.exports=function(n,r){var t=[];return e(n,!1,t.push,t,r),t}},"4c95":function(n,r,t){"use strict";var e=t("e53d"),i=t("584a"),o=t("d9f6"),u=t("8e60"),c=t("5168")("species");n.exports=function(n){var r="function"==typeof i[n]?i[n]:e[n];u&&r&&!r[c]&&o.f(r,c,{configurable:!0,get:function(){return this}})}},"55dd":function(n,r,t){"use strict";var e=t("5ca1"),i=t("d8e8"),o=t("4bf8"),u=t("79e5"),c=[].sort,a=[1,2,3];e(e.P+e.F*(u(function(){a.sort(void 0)})||!u(function(){a.sort(null)})||!t("2f21")(c)),"Array",{sort:function(n){return void 0===n?c.call(o(this)):c.call(o(this),i(n))}})},"57b1":function(n,r,t){var e=t("d864"),i=t("335c"),o=t("241e"),u=t("b447"),c=t("bfac");n.exports=function(n,r){var t=1==n,a=2==n,f=3==n,s=4==n,d=6==n,v=5==n||d,l=r||c;return function(r,c,p){for(var _,h,b=o(r),y=i(b),g=e(c,p,3),m=u(y.length),x=0,N=t?l(r,m):a?l(r,0):void 0;m>x;x++)if((v||x in y)&&(_=y[x],h=g(_,x,b),n))if(t)N[x]=h;else if(h)switch(n){case 3:return!0;case 5:return _;case 6:return x;case 2:N.push(_)}else if(s)return!1;return d?-1:f||s?s:N}}},"57e3":function(n,r,t){t("68f7")("Set")},"5aee":function(n,r,t){"use strict";var e=t("d9f6").f,i=t("a159"),o=t("5c95"),u=t("d864"),c=t("1173"),a=t("a22a"),f=t("30f1"),s=t("50ed"),d=t("4c95"),v=t("8e60"),l=t("ebfd").fastKey,p=t("9f79"),_=v?"_s":"size",h=function(n,r){var t,e=l(r);if("F"!==e)return n._i[e];for(t=n._f;t;t=t.n)if(t.k==r)return t};n.exports={getConstructor:function(n,r,t,f){var s=n(function(n,e){c(n,s,r,"_i"),n._t=r,n._i=i(null),n._f=void 0,n._l=void 0,n[_]=0,void 0!=e&&a(e,t,n[f],n)});return o(s.prototype,{clear:function(){for(var n=p(this,r),t=n._i,e=n._f;e;e=e.n)e.r=!0,e.p&&(e.p=e.p.n=void 0),delete t[e.i];n._f=n._l=void 0,n[_]=0},delete:function(n){var t=p(this,r),e=h(t,n);if(e){var i=e.n,o=e.p;delete t._i[e.i],e.r=!0,o&&(o.n=i),i&&(i.p=o),t._f==e&&(t._f=i),t._l==e&&(t._l=o),t[_]--}return!!e},forEach:function(n){p(this,r);var t,e=u(n,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.n:this._f){e(t.v,t.k,this);while(t&&t.r)t=t.p}},has:function(n){return!!h(p(this,r),n)}}),v&&e(s.prototype,"size",{get:function(){return p(this,r)[_]}}),s},def:function(n,r,t){var e,i,o=h(n,r);return o?o.v=t:(n._l=o={i:i=l(r,!0),k:r,v:t,p:e=n._l,n:void 0,r:!1},n._f||(n._f=o),e&&(e.n=o),n[_]++,"F"!==i&&(n._i[i]=o)),n},getEntry:h,setStrong:function(n,r,t){f(n,r,function(n,t){this._t=p(n,r),this._k=t,this._l=void 0},function(){var n=this,r=n._k,t=n._l;while(t&&t.r)t=t.p;return n._t&&(n._l=t=t?t.n:n._t._f)?s(0,"keys"==r?t.k:"values"==r?t.v:[t.k,t.v]):(n._t=void 0,s(1))},t?"entries":"values",!t,!0),d(r)}}},"5c95":function(n,r,t){var e=t("35e8");n.exports=function(n,r,t){for(var i in r)t&&n[i]?n[i]=r[i]:e(n,i,r[i]);return n}},"5d58":function(n,r,t){n.exports=t("d8d6")},"67bb":function(n,r,t){n.exports=t("f921")},"68f7":function(n,r,t){"use strict";var e=t("63b6"),i=t("79aa"),o=t("d864"),u=t("a22a");n.exports=function(n){e(e.S,n,{from:function(n){var r,t,e,c,a=arguments[1];return i(this),r=void 0!==a,r&&i(a),void 0==n?new this:(t=[],r?(e=0,c=o(a,arguments[2],2),u(n,!1,function(n){t.push(c(n,e++))})):u(n,!1,t.push,t),new this(t))}})}},"69d3":function(n,r,t){t("6718")("asyncIterator")},"6b54":function(n,r,t){"use strict";t("3846");var e=t("cb7c"),i=t("0bfb"),o=t("9e1e"),u="toString",c=/./[u],a=function(n){t("2aba")(RegExp.prototype,u,n,!0)};t("79e5")(function(){return"/a/b"!=c.call({source:"a",flags:"b"})})?a(function(){var n=e(this);return"/".concat(n.source,"/","flags"in n?n.flags:!o&&n instanceof RegExp?i.call(n):void 0)}):c.name!=u&&a(function(){return c.call(this)})},7075:function(n,r,t){"use strict";var e=t("63b6");n.exports=function(n){e(e.S,n,{of:function(){var n=arguments.length,r=new Array(n);while(n--)r[n]=arguments[n];return new this(r)}})}},"74be":function(n,r,t){var e=t("63b6");e(e.P+e.R,"Set",{toJSON:t("f228")("Set")})},"765d":function(n,r,t){t("6718")("observable")},"9f79":function(n,r,t){var e=t("f772");n.exports=function(n,r){if(!e(n)||n._t!==r)throw TypeError("Incompatible receiver, "+r+" required!");return n}},a22a:function(n,r,t){var e=t("d864"),i=t("b0dc"),o=t("3702"),u=t("e4ae"),c=t("b447"),a=t("7cd6"),f={},s={};r=n.exports=function(n,r,t,d,v){var l,p,_,h,b=v?function(){return n}:a(n),y=e(t,d,r?2:1),g=0;if("function"!=typeof b)throw TypeError(n+" is not iterable!");if(o(b)){for(l=c(n.length);l>g;g++)if(h=r?y(u(p=n[g])[0],p[1]):y(n[g]),h===f||h===s)return h}else for(_=b.call(n);!(p=_.next()).done;)if(h=i(_,y,p.value,r),h===f||h===s)return h};r.BREAK=f,r.RETURN=s},ada4:function(n,r,t){"use strict";var e=t("e53d"),i=t("63b6"),o=t("ebfd"),u=t("294c"),c=t("35e8"),a=t("5c95"),f=t("a22a"),s=t("1173"),d=t("f772"),v=t("45f2"),l=t("d9f6").f,p=t("57b1")(0),_=t("8e60");n.exports=function(n,r,t,h,b,y){var g=e[n],m=g,x=b?"set":"add",N=m&&m.prototype,j={};return _&&"function"==typeof m&&(y||N.forEach&&!u(function(){(new m).entries().next()}))?(m=r(function(r,t){s(r,m,n,"_c"),r._c=new g,void 0!=t&&f(t,b,r[x],r)}),p("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(n){var r="add"==n||"set"==n;n in N&&(!y||"clear"!=n)&&c(m.prototype,n,function(t,e){if(s(this,m,n),!r&&y&&!d(t))return"get"==n&&void 0;var i=this._c[n](0===t?0:t,e);return r?this:i})}),y||l(m.prototype,"size",{get:function(){return this._c.size}})):(m=h.getConstructor(r,n,b,x),a(m.prototype,t),o.NEED=!0),v(m,n),j[n]=m,i(i.G+i.W+i.F,j),y||h.setStrong(m,n,b),m}},b6d0:function(n,r,t){n.exports=t("fa2b")},bfac:function(n,r,t){var e=t("0b64");n.exports=function(n,r){return new(e(n))(r)}},c207:function(n,r){},c6fb:function(n,r,t){t("7075")("Set")},d8d6:function(n,r,t){t("1654"),t("6c1c"),n.exports=t("ccb9").f("iterator")},d93a:function(n,r,t){"use strict";t.r(r);var e=function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("article",[t("h1",[n._v("数组去重")]),t("section",[t("h2",[n._v("原始方法")]),t("h3",[n._v("代码")]),t("pre",[t("code",[n._v(n._s(n.code1))])]),t("h3",[n._v("使用")]),t("p",[n._v("原数组："+n._s(n.arr))]),t("p",[n._v("使用原始方法去重后："+n._s(n.originalUniqueArr))]),t("h3",[n._v("优点")]),t("p",[n._v("兼容性好")])]),t("section",[t("h2",[n._v("使用indexOf()：查找指定元素，返回找到的第一个符合的元素的索引，没找到返回-1")]),t("h3",[n._v("代码")]),t("pre",[t("code",[n._v(n._s(n.code2))])]),t("h3",[n._v("使用")]),t("p",[n._v("原数组："+n._s(n.arr))]),t("p",[n._v("使用indexOf()之后的方法去重后："+n._s(n.indexOfUniqueArr))])]),t("section",[t("h2",[n._v("排序后去重")]),t("h3",[n._v("代码")]),t("pre",[t("code",[n._v(n._s(n.code3))])]),t("h3",[n._v("使用")]),t("p",[n._v("原数组："+n._s(n.arr))]),t("p",[n._v("排序去重后："+n._s(n.sortUniqueArr))]),t("h3",[n._v("优点")]),t("p",[n._v("效率高于方法一二，因为只需要比较一次")])]),t("section",[t("h2",[n._v("使用es5的filter来简化代码")]),t("h3",[n._v("代码")]),t("pre",[t("code",[n._v(n._s(n.code4))])]),t("h3",[n._v("使用")]),t("p",[n._v("原数组："+n._s(n.arr))]),t("p",[n._v("filter+indexOf后："+n._s(n.filterUniqueArr))]),t("p",[n._v("filter+sort后："+n._s(n.filterSortUniqueArr))])]),t("section",[t("h2",[n._v("使用Object键值对")]),t("h3",[n._v("代码")]),t("pre",[t("code",[n._v(n._s(n.code7))])]),t("h3",[n._v("使用")]),t("p",[n._v("原数组："+n._s(n.arr))]),t("p",[n._v(n._s(n.objectUniqueArr))])]),t("section",[t("h2",[n._v("使用Set数据结构")]),t("h3",[n._v("代码")]),t("pre",[t("code",[n._v(n._s(n.code5))])]),t("h3",[n._v("使用")]),t("p",[n._v("原数组："+n._s(n.arr))]),t("p",[n._v("Set+Array.from()后："+n._s(n.es6FromUniqueArr))])]),t("section",[t("h2",[n._v("使用Map数据结构")]),t("h3",[n._v("代码")]),t("pre",[t("code",[n._v(n._s(n.code6))])])]),n._m(0),n._m(1)])},i=[function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("section",[t("h2",[n._v("补充")]),t("h3",[n._v("当需要去重的数组中包含undefined、null、NaN、对象时")]),t("p",[n._v("原数组：(15)[1, 2, 3, 4, 3, undefined, 2, NaN, 1, null, 0, null, undefined, NaN, Number]")]),t("p",[n._v("原始方法：(10)[1, 2, 3, 4, undefined, NaN, null, 0, NaN, Number]")]),t("p",[n._v("indexOf()：(10)[1, 2, 3, 4, undefined, NaN, null, 0, NaN, Number]")]),t("p",[n._v("sort()：(10)[0, 1, 2, 3, Number, 4, NaN, NaN, null, undefined]")]),t("p",[n._v("filter+indexOf()：(8)[1, 2, 3, 4, undefined, null, 0, Number]")]),t("p",[n._v("filter+sort()：(10)[0, 1, 2, 3, Number, 4, NaN, NaN, null, undefined]")]),t("p",[n._v("Set+Array.from()：(9)[1, 2, 3, 4, undefined, NaN, null, 0, Number]")])])},function(){var n=this,r=n.$createElement,t=n._self._c||r;return t("footer",[t("h2",[n._v("摘抄自")]),t("p",[t("a",{attrs:{href:"https://segmentfault.com/a/1190000009867515"}},[n._v("JavaScript专题之数组去重")])])])}],o=t("ed089"),u={name:"",data:function(){return{createTime:"2019-02-28 11:14:00",code1:"function unique(array) {\n  // res用来存储结果\n  var res = [];\n  for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {\n    for (var j = 0, resLen = res.length; j < resLen; j++ ) {\n      if (array[i] === res[j]) {\n        break; // 只要想要插入的元素，res中已经存在，就跳出循环\n      }\n    }\n    // 如果想要插入的元素没有与res中的元素重复，那么执行完循环后，j等于resLen，把元素插入到res中\n    if (j === resLen) {\n      res.push(array[i])\n    }\n  }\n  return res;\n}",code2:"function unique(array) {\n  var res = [];\n  for (var i = 0, len = array.length; i < len; i++) {\n    var current = array[i];\n    if (res.indexOf(current) === -1) { // res中没有与想要插入的元素重复的元素\n      res.push(current)\n    }\n  }\n  return res;\n}",code3:"function unique(array) {\n    var res = [];\n    var sortedArray = array.concat().sort(); // sort()方法会改变原数组，所以先把原数组复制一遍\n    var seen;\n    for (var i = 0, len = sortedArray.length; i < len; i++) {\n        // 如果是第一个元素或者相邻的元素不相同\n        if (!i || seen !== sortedArray[i]) {\n            res.push(sortedArray[i])\n        }\n        seen = sortedArray[i];\n    }\n    return res;\n}",code4:"// 使用indexOf\nfunction unique(array) {\n    var res = array.filter(function(item, index, array){\n        return array.indexOf(item) === index; // 删选出所有找到的第一个元素\n    })\n    return res;\n}\n// 使用sort()\nfunction unique(array) {\n    return array.concat().sort().filter(function(item, index, array){ // 这里必需有array，因为sort()改变了原理的array，还是用原来的array是没排序的\n        return !index || item !== array[index - 1]\n    })\n}",code5:"// 使用Array.from()，将可以转换为数组对象的对象转换为数组\nconst unique = array => Array.from(new Set(array))\n// 使用扩展运算符\nconst unique = array => [...new Set(array)]",code6:"function unique (arr) {\n  const seen = new Map()\n  return arr.filter((a) => !seen.has(a) && seen.set(a, 1))\n}",code7:"function unique(array) {\n  var obj = {};\n  return array.filter(function(item, index, array){\n    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true) // new Number(1)和new String('1')还是算同一个\n  })\n}",arr:[1,2,3,4,3,2,1,0,{name:"djlun"},{name:"djlun"}]}},components:{},mounted:function(){},computed:{originalUniqueArr:function(){return Object(o["i"])(this.arr)},indexOfUniqueArr:function(){return Object(o["f"])(this.arr)},sortUniqueArr:function(){return Object(o["k"])(this.arr)},filterUniqueArr:function(){return Object(o["d"])(this.arr)},filterSortUniqueArr:function(){return Object(o["c"])(this.arr)},es6FromUniqueArr:function(){return Object(o["b"])(this.arr)},objectUniqueArr:function(){return Object(o["h"])(this.arr)}}},c=u,a=t("2877"),f=Object(a["a"])(c,e,i,!1,null,"91c9f6e4",null);r["default"]=f.exports},ed089:function(n,r,t){"use strict";t("5d73");var e=t("cebc"),i=t("75fc"),o=t("5d58"),u=t.n(o),c=t("67bb"),a=t.n(c);function f(n){return f="function"===typeof a.a&&"symbol"===typeof u.a?function(n){return typeof n}:function(n){return n&&"function"===typeof a.a&&n.constructor===a.a&&n!==a.a.prototype?"symbol":typeof n},f(n)}function s(n){return s="function"===typeof a.a&&"symbol"===f(u.a)?function(n){return f(n)}:function(n){return n&&"function"===typeof a.a&&n.constructor===a.a&&n!==a.a.prototype?"symbol":f(n)},s(n)}var d=function(n){return"object"!==s(n)?n:n instanceof Array?Object(i["a"])(n):Object(e["a"])({},n)},v=t("b6d0"),l=t.n(v),p=t("774e"),_=t.n(p),h=(t("55dd"),function(n){for(var r=[],t=0,e=n.length;t<e;t++){for(var i=0,o=r.length;i<o;i++)if(n[t]===r[i])break;i===o&&r.push(n[t])}return r}),b=function(n){for(var r=[],t=0,e=n.length;t<e;t++){var i=n[t];-1===r.indexOf(i)&&r.push(i)}return r},y=function(n){for(var r,t=[],e=n.concat().sort(),i=0,o=n.length;i<o;i++)i&&r===e[i]||t.push(e[i]),r=e[i];return t},g=function(n){return n.filter(function(r,t){return n.indexOf(r)===t})},m=function(n){var r={};return n.filter(function(n){return!r.hasOwnProperty(s(n)+n)&&(r[s(n)+n]=!0)})},x=function(n){return n.concat().sort().filter(function(n,r,t){return!r||n!==t[r-1]})},N=function(n){return _()(new l.a(n))},j=(t("6b54"),{});["Boolean","Number","String","Function","Array","Date","RegExp","Object","Error","Null","Undefined"].map(function(n){j["[object "+n+"]"]=n.toLowerCase()});var w=function(n){return"object"===s(n)?j[Object.prototype.toString.call(n)]||"object":s(n)},A=function(n){for(var r in n)return!1;return!0};t.d(r,"a",function(){return O}),t.d(r,"j",function(){return d}),t.d(r,"i",function(){return h}),t.d(r,"f",function(){return b}),t.d(r,"k",function(){return y}),t.d(r,"d",function(){return g}),t.d(r,"c",function(){return x}),t.d(r,"b",function(){return N}),t.d(r,"h",function(){return m}),t.d(r,"e",function(){return w}),t.d(r,"g",function(){return A});var O=function(n){var r,t,e,i,o,u;return r=n.getFullYear(),t=S(n.getMonth()+1),e=S(n.getDate()),i=S(n.getHours()),o=S(n.getMinutes()),u=S(n.getSeconds()),"".concat(r,"-").concat(t,"-").concat(e," ").concat(i,":").concat(o,":").concat(u)},S=function(n){return+n<10?"0".concat(n):n}},f228:function(n,r,t){var e=t("40c3"),i=t("45173");n.exports=function(n){return function(){if(e(this)!=n)throw TypeError(n+"#toJSON isn't generic");return i(this)}}},f921:function(n,r,t){t("014b"),t("c207"),t("69d3"),t("765d"),n.exports=t("584a").Symbol},fa2b:function(n,r,t){t("c207"),t("1654"),t("6c1c"),t("07d8"),t("74be"),t("c6fb"),t("57e3"),n.exports=t("584a").Set}}]);