(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{255:function(t,e,n){var content=n(274);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(68).default)("82dd83e0",content,!0,{sourceMap:!1})},273:function(t,e,n){"use strict";n(255)},274:function(t,e,n){var o=n(67)((function(i){return i[1]}));o.push([t.i,"button[data-v-6580aaea]{outline:none}.highlight-underline[data-v-6580aaea]{position:absolute;--tw-bg-opacity:1;background-color:rgba(100, 116, 139, var(--tw-bg-opacity));bottom:-2px;height:2px;transition:left .15s,width .15s}.code-group[data-v-6580aaea]  pre[class*=language-]{margin-top:0px;border-top-left-radius:0px;border-top-right-radius:0px}",""]),o.locals={},t.exports=o},298:function(t,e,n){"use strict";n.r(e);n(31),n(12);var o={data:function(){return{tabs:[],activeTabIndex:0}},watch:{activeTabIndex:function(t,e){this.switchTab(t)}},mounted:function(){this.tabs=this.$slots.default.filter((function(slot){return Boolean(slot.componentOptions)})).map((function(slot){return{label:slot.componentOptions.propsData.label,elm:slot.elm}})),this.$nextTick(this.updateHighlighteUnderlinePosition)},methods:{switchTab:function(i){this.tabs.forEach((function(t){t.elm.classList.remove("active")})),this.tabs[i].elm.classList.add("active")},updateTabs:function(i){this.activeTabIndex=i,this.updateHighlighteUnderlinePosition()},updateHighlighteUnderlinePosition:function(){var t=this.$refs.tabs[this.activeTabIndex];if(t){var e=this.$refs["highlight-underline"];e.style.left="".concat(t.offsetLeft,"px"),e.style.width="".concat(t.clientWidth,"px")}}}},r=(n(273),n(2)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"code-group"},[n("div",{staticClass:"rounded-t-md relative px-2 text-sm text-white bg-gray-800 border-b-2 border-gray-700"},[t._l(t.tabs,(function(e,i){var label=e.label;return n("button",{key:label,ref:"tabs",refInFor:!0,staticClass:"px-4 py-3 font-mono font-bold text-gray-400",class:[t.activeTabIndex===i&&"active"],on:{click:function(e){return t.updateTabs(i)}}},[t._v("\n      "+t._s(label)+"\n    ")])})),t._v(" "),n("span",{ref:"highlight-underline",staticClass:"highlight-underline"})],2),t._v(" "),t._t("default")],2)}),[],!1,null,"6580aaea",null);e.default=component.exports}}]);