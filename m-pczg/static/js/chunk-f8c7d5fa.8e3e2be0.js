(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f8c7d5fa"],{"1e25":function(s,t,a){"use strict";var o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"main"},[a("section",{directives:[{name:"show",rawName:"v-show",value:s.show1,expression:"show1"}]},[s._t("show1")],2),a("section",{directives:[{name:"show",rawName:"v-show",value:s.show2,expression:"show2"}]},[s._t("show2")],2)]),a("div",{staticClass:"foot flex"},[a("div",{staticClass:"ft border-right",class:{active:s.show1},on:{click:function(t){return s.show(1)}}},[s._v("销售一部")]),a("div",{staticClass:"ft",class:{active:s.show2},on:{click:function(t){return s.show(2)}}},[s._v("销售二部")])])])},i=[],r={data:function(){return{show1:!0,show2:!1}},methods:{show:function(s){1===s?(this.show1=!0,this.show2=!1):(this.show1=!1,this.show2=!0)}}},e=r,l=(a("d412"),a("2877")),n=Object(l["a"])(e,o,i,!1,null,"a9895e44",null);t["a"]=n.exports},"20e6":function(s,t,a){},"33b1":function(s,t,a){},"49fe":function(s,t,a){"use strict";var o=a("9f37"),i=a.n(o);i.a},"62c6":function(s,t,a){"use strict";a.r(t);var o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"complete"},[a("v-head",{attrs:{title:"按预测数据完成情况表"}}),a("layout",[a("section",{attrs:{slot:"show1"},slot:"show1"},[a("depart-show",{attrs:{person:s.departOne,hd:s.hd,bd:s.bd}})],1),a("section",{attrs:{slot:"show2"},slot:"show2"},[a("depart-show",{attrs:{person:s.departTwo,hd:s.hd,bd:s.bd2}})],1)])],1)},i=[],r=a("1e25"),e=a("77f5"),l={components:{Layout:r["a"],DepartShow:e["a"]},data:function(){return{departOne:["高崇","豆纪锋","杨继光","张军","朱志刚","张淼","赵林","程池旭","马小博","吴江涛"],hd:["年度总毛利任务额","1月应完成任务额","1月实际发货毛利（仅发货，不含回款指标）","1月毛利完成比例"],bd:[{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"1000",should:"100",grossProfit:"100",rate:"100%"}],departTwo:["李国栋","周合","葛恒志","才志强","黄章盟","徐强"],bd2:[{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"100",should:"10",grossProfit:"10",rate:"100%"},{all:"600",should:"60",grossProfit:"60",rate:"100%"}]}}},n=l,c=(a("f324"),a("2877")),d=Object(c["a"])(n,o,i,!1,null,"4566e8c2",null);t["default"]=d.exports},"77f5":function(s,t,a){"use strict";var o=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"flex border-bottom"},[a("ul",{staticClass:"ul-hd border-right"},[a("li",{staticClass:"items first-child-color"},[s._v("区域经理")]),s._l(s.person,function(t,o){return a("li",{key:o,staticClass:"items"},[s._v("\n      "+s._s(t)+"\n    ")])}),a("li",{staticClass:"items last-child-color"},[s._v("合计")])],2),a("ul",{staticClass:"ul-bd"},[a("li",{staticClass:"items first-child-color flex"},s._l(s.hd,function(t,o){return a("div",{key:o,staticClass:"item"},[s._v(s._s(t))])}),0),s._l(s.bd,function(t,o){return a("li",{key:o,staticClass:"items flex"},["0"===s.entry?[a("div",{staticClass:"item"},[s._v(s._s(t.all))]),a("div",{staticClass:"item"},[s._v(s._s(t.should))]),a("div",{staticClass:"item"},[s._v(s._s(t.grossProfit))]),a("div",{staticClass:"item"},[s._v(s._s(t.rate))])]:[a("div",{staticClass:"item"},[s._v(s._s(t.bd1))]),a("div",{staticClass:"item"},[s._v(s._s(t.bd2))]),a("div",{staticClass:"item"},[s._v(s._s(t.bd3))]),a("div",{staticClass:"item"},[s._v(s._s(t.bd4))]),a("div",{staticClass:"item"},[s._v(s._s(t.bd5))]),a("div",{staticClass:"item"},[s._v(s._s(t.bd6))]),a("div",{staticClass:"item"},[s._v(s._s(t.bd7))])]],2)})],2)])},i=[],r={props:{person:Array,hd:Array,bd:Array,entry:{type:String,default:"0"}}},e=r,l=(a("49fe"),a("2877")),n=Object(l["a"])(e,o,i,!1,null,"4fbe869e",null);t["a"]=n.exports},"9f37":function(s,t,a){},d412:function(s,t,a){"use strict";var o=a("33b1"),i=a.n(o);i.a},f324:function(s,t,a){"use strict";var o=a("20e6"),i=a.n(o);i.a}}]);