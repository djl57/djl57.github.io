webpackJsonp([15],{"1fy8":function(l,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t={mixins:[o("7xs1").default],data:function(){return{month:new Date,tableCloumn2:[{prop:"col1",label:"部门"},{prop:"col2",label:"年度总毛利任务额"},{prop:"col3",label:"1月任务额"},{prop:"col4",label:"1月发货毛利"},{prop:"col5",label:"1月完成比例"},{prop:"col6",label:"全年任务完成比率"}],tableData2:[{col1:"一部",col2:"",col3:"",col4:"",col5:"",col6:""},{col1:"二部",col2:"",col3:"",col4:"",col5:"",col6:""},{col1:"销售部汇总",col2:"",col3:"",col4:"",col5:"",col6:""}]}},methods:{arrSpanMethod:function(l){l.row,l.column,l.rowIndex,l.columnIndex}}},c={render:function(){var l=this,e=l.$createElement,o=l._self._c||e;return o("div",[o("el-date-picker",{attrs:{type:"month",placeholder:"选择月"},model:{value:l.month,callback:function(e){l.month=e},expression:"month"}}),l._v(" "),o("p",{staticClass:"text-center caption-color"},[l._v("销售部月度绩效总表")]),l._v(" "),o("p",[l._v("总体完成情况：")]),l._v(" "),o("el-table",{staticStyle:{width:"100%"},attrs:{data:l.tableData2,border:"","span-method":l.arrSpanMethod,"header-cell-style":l.hdStyle,"cell-style":l.cellStyle}},l._l(l.tableCloumn2,function(l,e){return o("el-table-column",{key:e,attrs:{prop:l.prop,label:l.label}})}),1)],1)},staticRenderFns:[]};var a=o("VU/8")(t,c,!1,function(l){o("AHYb")},null,null);e.default=a.exports},AHYb:function(l,e){}});
//# sourceMappingURL=15.c473cc0653ead9a4ffb8.js.map