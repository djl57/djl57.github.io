webpackJsonp([2,17],{"+P+7":function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=l("7xs1"),o=l("LroR"),c=l("Icdr");l("GbHy"),l("4UDB"),l("Oq2I"),l("YsUA");var r={mixins:[a.default],components:{Research1:o.default},data:function(){return{pickerOptions2:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-6048e5),e.$emit("pick",[l,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-2592e6),e.$emit("pick",[l,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-7776e6),e.$emit("pick",[l,t])}},{text:"最近半年",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-15552e6),e.$emit("pick",[l,t])}},{text:"最近一年",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-31536e6),e.$emit("pick",[l,t])}},{text:"最近十年",onClick:function(e){var t=new Date,l=new Date;l.setTime(l.getTime()-3155328e5),e.$emit("pick",[l,t])}}]},value:"",month:new Date,tableCloumn1:[{prop:"col1",label:"部门"},{prop:"col2",label:"年度总毛利任务额"},{prop:"col3",label:"月任务额"},{prop:"col4",label:"月发货毛利"},{prop:"col5",label:"月完成比例"},{prop:"col6",label:"全年任务完成比率"}],tableData1:[{col1:"一部",col2:"",col3:"",col4:"",col5:"",col6:""},{col1:"二部",col2:"",col3:"",col4:"",col5:"",col6:""},{col1:"销售部汇总",col2:"",col3:"",col4:"",col5:"",col6:""}],tableCloumn2:[{prop:"col1",label:"团队"},{prop:"col2",label:"姓名"},{prop:"col3",label:"成绩"},{prop:"col4",label:"团队"},{prop:"col5",label:"姓名"},{prop:"col6",label:"成绩"}],tableData2:[{col1:"一部团队",col2:"",col3:"",col4:"二部团队",col5:"",col6:""}],tableCloumn4:[{prop:"col1",label:"研发项目"},{prop:"col2",label:"研发项目类型"},{prop:"col3",label:"当前阶段"},{prop:"col4",label:"进度"},{prop:"col5",label:"研发费用预算"},{prop:"col6",label:"实际投入"},{prop:"col7",label:"预算使用进度"},{prop:"col8",label:"累计延期时间"}],tableData4:[{col1:"P20190103",col2:"",col3:"",col4:"",col5:"",col6:"",col7:"",col8:""}]}},mounted:function(){this.drawBar()},methods:{arrSpanMethod:function(e){e.row,e.column;var t=e.rowIndex;if(e.columnIndex%3==0)return t%this.tableData2.length==0?[this.tableData2.length,1]:[0,0]},drawBar:function(){var e={color:["#3398DB"],tooltip:{trigger:"axis",formatter:"{b0}<br/>{a0}: {c0}%"},legend:{data:["不良率"]},toolbox:{show:!0,feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"]}],yAxis:[{type:"value",name:"不良率（%）"}],grid:{left:35},series:[{name:"不良率",type:"bar",data:[0,0,0,0,50,100,0,0,0,50,25,10]}]};c.init(this.$refs.myChart).setOption(e)}}},n={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"block"},[l("div",[l("h3",[e._v("销售部门关键指标")]),e._v(" "),l("span",{staticClass:"font-15"},[e._v("选择月份： ")]),l("el-date-picker",{attrs:{type:"month",placeholder:"选择月"},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}}),e._v(" "),l("p",{staticClass:"text-center caption-color"},[e._v("销售目标总体完成情况")]),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData1,border:"","header-cell-style":e.hdStyle,"cell-style":e.cellStyle}},e._l(e.tableCloumn1,function(e,t){return l("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label}})}),1),e._v(" "),l("p",{staticClass:"text-center caption-color"},[e._v("业务员业绩排名情况")]),e._v(" "),l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData2,border:"","span-method":e.arrSpanMethod,"header-cell-style":e.hdStyle,"cell-style":e.cellStyle}},e._l(e.tableCloumn2,function(e,t){return l("el-table-column",{key:t,attrs:{prop:e.prop,label:e.label}})}),1)],1),e._v(" "),l("div",[l("h3",[e._v("生产部门关键指标")]),e._v(" "),l("span",{staticClass:"font-15"},[e._v("选择日期区间： ")]),l("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions2},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),e._v(" "),l("p",{staticClass:"text-center caption-color"},[e._v("不良率趋势图")]),e._v(" "),l("div",{ref:"myChart",style:{width:"95%",height:"300px"}})],1),e._v(" "),l("div",[l("h3",[e._v("研发部门关键指标")]),e._v(" "),l("research1")],1)])},staticRenderFns:[]};var i=l("VU/8")(r,n,!1,function(e){l("epup")},"data-v-5f361077",null);t.default=i.exports},KOwz:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={components:{DashBoard:l("+P+7").default}},o={render:function(){var e=this.$createElement;return(this._self._c||e)("dash-board")},staticRenderFns:[]},c=l("VU/8")(a,o,!1,null,null,null);t.default=c.exports},epup:function(e,t){}});
//# sourceMappingURL=2.a9890638618e7ea3170a.js.map