(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e374fc"],{1491:function(d,t,s){"use strict";s.r(t);var b=function(){var d=this,t=d.$createElement,s=d._self._c||t;return s("div",{staticClass:"manager"},[s("v-head",{attrs:{title:"区域经理绩效数据统计表"}}),s("lay-out",[s("section",{attrs:{slot:"show1"},slot:"show1"},[s("depart-show",{attrs:{person:d.departOne,hd:d.hd,bd:d.bd,entry:"1"}})],1),s("section",{attrs:{slot:"show2"},slot:"show2"},[s("depart-show",{attrs:{person:d.departTwo,hd:d.hd,bd:d.bd2,entry:"1"}})],1)])],1)},i=[],a=s("1e25"),e=s("77f5"),n={components:{LayOut:a["a"],DepartShow:e["a"]},data:function(){return{departOne:["高崇","豆纪锋","杨继光","张军","朱志刚","张淼","赵林","程池旭","马小博","吴江涛"],hd:["年度考核毛利任务额","1月应完成任务额","1月毛利（发货+回款）","1月毛利完成比例","1月允许花费的费用","1月实际费用","1月使用额"],bd:[{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"}],departTwo:["李国栋","周合","葛恒志","才志强","黄章盟","徐强"],bd2:[{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"},{bd1:"500000",bd2:"41667",bd3:"177890",bd4:"427%",bd5:"12452",bd6:"446",bd7:"12006"}]}}},o=n,r=(s("5651"),s("2877")),c=Object(r["a"])(o,b,i,!1,null,"5d7a5c33",null);t["default"]=c.exports},"1e25":function(d,t,s){"use strict";var b=function(){var d=this,t=d.$createElement,s=d._self._c||t;return s("div",[s("div",{staticClass:"main"},[s("section",{directives:[{name:"show",rawName:"v-show",value:d.show1,expression:"show1"}]},[d._t("show1")],2),s("section",{directives:[{name:"show",rawName:"v-show",value:d.show2,expression:"show2"}]},[d._t("show2")],2)]),s("div",{staticClass:"foot flex"},[s("div",{staticClass:"ft border-right",class:{active:d.show1},on:{click:function(t){return d.show(1)}}},[d._v("销售一部")]),s("div",{staticClass:"ft",class:{active:d.show2},on:{click:function(t){return d.show(2)}}},[d._v("销售二部")])])])},i=[],a={data:function(){return{show1:!0,show2:!1}},methods:{show:function(d){1===d?(this.show1=!0,this.show2=!1):(this.show1=!1,this.show2=!0)}}},e=a,n=(s("d412"),s("2877")),o=Object(n["a"])(e,b,i,!1,null,"a9895e44",null);t["a"]=o.exports},"33b1":function(d,t,s){},"49fe":function(d,t,s){"use strict";var b=s("9f37"),i=s.n(b);i.a},5651:function(d,t,s){"use strict";var b=s("9c7a"),i=s.n(b);i.a},"77f5":function(d,t,s){"use strict";var b=function(){var d=this,t=d.$createElement,s=d._self._c||t;return s("div",{staticClass:"flex border-bottom"},[s("ul",{staticClass:"ul-hd border-right"},[s("li",{staticClass:"items first-child-color"},[d._v("区域经理")]),d._l(d.person,function(t,b){return s("li",{key:b,staticClass:"items"},[d._v("\n      "+d._s(t)+"\n    ")])}),s("li",{staticClass:"items last-child-color"},[d._v("合计")])],2),s("ul",{staticClass:"ul-bd"},[s("li",{staticClass:"items first-child-color flex"},d._l(d.hd,function(t,b){return s("div",{key:b,staticClass:"item"},[d._v(d._s(t))])}),0),d._l(d.bd,function(t,b){return s("li",{key:b,staticClass:"items flex"},["0"===d.entry?[s("div",{staticClass:"item"},[d._v(d._s(t.all))]),s("div",{staticClass:"item"},[d._v(d._s(t.should))]),s("div",{staticClass:"item"},[d._v(d._s(t.grossProfit))]),s("div",{staticClass:"item"},[d._v(d._s(t.rate))])]:[s("div",{staticClass:"item"},[d._v(d._s(t.bd1))]),s("div",{staticClass:"item"},[d._v(d._s(t.bd2))]),s("div",{staticClass:"item"},[d._v(d._s(t.bd3))]),s("div",{staticClass:"item"},[d._v(d._s(t.bd4))]),s("div",{staticClass:"item"},[d._v(d._s(t.bd5))]),s("div",{staticClass:"item"},[d._v(d._s(t.bd6))]),s("div",{staticClass:"item"},[d._v(d._s(t.bd7))])]],2)})],2)])},i=[],a={props:{person:Array,hd:Array,bd:Array,entry:{type:String,default:"0"}}},e=a,n=(s("49fe"),s("2877")),o=Object(n["a"])(e,b,i,!1,null,"4fbe869e",null);t["a"]=o.exports},"9c7a":function(d,t,s){},"9f37":function(d,t,s){},d412:function(d,t,s){"use strict";var b=s("33b1"),i=s.n(b);i.a}}]);