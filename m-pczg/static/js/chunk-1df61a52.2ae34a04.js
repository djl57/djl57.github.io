(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1df61a52"],{"2aae":function(t,s,e){"use strict";var a=e("ef09"),i=e.n(a);i.a},"4a73":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("v-head",{attrs:{title:"研发项目管控"}}),e("ul",t._l(t.projects,function(s,a){return e("li",{key:a,staticClass:"item border-bottom"},[e("div",{staticClass:"flex item-tt",on:{click:function(s){return t.showDetail(a)}}},[e("div",{staticClass:"left"},[t._v(t._s(s.name))]),e("div",{staticClass:"middle"},[t._v(t._s(s.stage))]),e("div",{staticClass:"right"},[t._v(t._s(s.proRate))])]),e("div",{directives:[{name:"show",rawName:"v-show",value:s.show,expression:"item.show"}],staticClass:"show-item"},[e("p",{staticClass:"p"},[e("span",[t._v("类型：")]),t._v(t._s(s.type))]),e("p",{staticClass:"p"},[e("span",[t._v("费用预算：")]),t._v(t._s(s.budget))]),e("p",{staticClass:"p"},[e("span",[t._v("实际投入：")]),t._v(t._s(s.input))]),e("p",{staticClass:"p"},[e("span",[t._v("预算使用进度：")]),t._v(t._s(s.budgetRate))]),e("p",{staticClass:"p"},[e("span",[t._v("累计延期时间：")]),t._v(t._s(s.delay))]),e("ul",{staticClass:"show-item2"},[t._m(0,!0),t._l(s.stages,function(s,a){return e("li",{key:a,staticClass:"flex lists"},[e("div",{staticClass:"flex1"},[t._v(t._s(s.stage))]),e("div",{staticClass:"flex2"},[t._v(t._s(s.status))]),e("div",{staticClass:"flex3"},[t._v(t._s(s.time))]),e("div",{staticClass:"flex4"},[t._v(t._s(s.delay))])])})],2)])])}),0)],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",{staticClass:"flex border-bottom"},[e("div",{staticClass:"flex1"},[t._v("研发阶段")]),e("div",{staticClass:"flex2"},[t._v("状态")]),e("div",{staticClass:"flex3"},[t._v("预计完成时间")]),e("div",{staticClass:"flex4"},[t._v("累计延期时间")])])}],l={data:function(){return{projects:[{name:"研发项目",type:"研发项目类型",stage:"当前阶段",proRate:"项目进度",budget:"研发费用预算",input:"实际投入",budgetRate:"预算使用进度",delay:"累计延期时间"},{name:"P20190103",type:"平台技术-硬件",stage:"PAC评审",proRate:"5%",budget:"18000",input:"1000",budgetRate:"5.56%",delay:"0天",stages:[{stage:"立项",status:"已完成",time:"2019/1/3",delay:"0"},{stage:"PAC评审",status:"已完成",time:"2019/1/20",delay:"2"},{stage:"原理设计",status:"已完成",time:"2019/3/1",delay:"3"},{stage:"元器件采购",status:"已完成",time:"2019/3/7",delay:"3"},{stage:"样机组装",status:"进行中",time:"2019/3/12",delay:"0"},{stage:"调试",status:"未开始",time:"2019/4/3",delay:"0"},{stage:"内部测试",status:"未开始",time:"2019/6/7",delay:"0"},{stage:"公司验收",status:"未开始",time:"2019/7/5",delay:"0"}],show:!1},{name:"P20190105",type:"产品研发-硬件",stage:"样机组装",proRate:"40%",budget:"6000",input:"2800",budgetRate:"46.67%",delay:"3天",stages:[],show:!1},{name:"P20190107",type:"软件研发",stage:"内部测试",proRate:"80%",budget:"23000",input:"17000",budgetRate:"73.91%",delay:"-2天",stages:[],show:!1}]}},methods:{showDetail:function(t){0!==t&&(this.projects[t].show=!this.projects[t].show)}}},n=l,c=(e("2aae"),e("2877")),d=Object(c["a"])(n,a,i,!1,null,"2bc27a38",null);s["default"]=d.exports},ef09:function(t,s,e){}}]);