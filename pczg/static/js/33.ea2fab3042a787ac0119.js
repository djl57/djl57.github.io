webpackJsonp([33],{"W/0o":function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=t("IcnI"),n=document.body;i.default={beforeMount:function(){window.addEventListener("resize",this.resizeHandler)},mounted:function(){this.isMobile()&&(o.a.dispatch("ToggleDevice","mobile"),o.a.dispatch("CloseSideBar",{withoutAnimation:!0}))},methods:{isMobile:function(){return n.getBoundingClientRect().width-3<1024},resizeHandler:function(){if(!document.hidden){var e=this.isMobile();o.a.dispatch("ToggleDevice",e?"mobile":"desktop"),e&&o.a.dispatch("CloseSideBar",{withoutAnimation:!0})}}}}}});
//# sourceMappingURL=33.ea2fab3042a787ac0119.js.map