(window.webpackJsonp=window.webpackJsonp||[]).push([[35,4,5,6,8,13,14,21],{249:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[e("path",{attrs:{d:"M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"}})])}),[],!1,null,null,null);e.default=component.exports},250:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},251:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{fill:"currentColor",viewBox:"0 0 20 20"}},[e("path",{attrs:{"fill-rule":"evenodd",d:"M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z","clip-rule":"evenodd"}})])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n.r(e);var r=n(4),o=n(3),c=(n(24),n(35),n(13),n(7),n(12),n(19),n(20),n(23));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:{document:{type:Object,required:!0}},mounted:function(){this.fetchBlame()},methods:{fetchBlame:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.settings.gitlabRepoId){e.next=2;break}return e.abrupt("return");case 2:console.log(t.gitlabUrls),n=t.gitlabUrls.api,r="".concat(n.baseUrl).concat(n.blameUrl),o=(o=encodeURIComponent("content".concat(t.document.path).concat(t.document.extension))).replace(".","%2E"),r=r.replace(":file_path",o),c={},t.$config.gitlabApiToken&&(c.headers={Authorization:"Bearer ".concat(t.$config.gitlabApiToken)});case 10:case"end":return e.stop()}}),e)})))()}},computed:f(f({},Object(c.b)(["settings","gitlabUrls"])),{},{link:function(){if(this.settings.gitlabRepoId&&this.settings.gitlabRepoPath){var t=this.settings,e=t.gitlabRepoPath,n=void 0===e?"":e,r=t.pathToDocsInRepo,o=void 0===r?"":r,link="";return link="."===o?"https://gitlab.com/".concat(n,"/-/blob/master/content").concat(this.document.path).concat(this.document.extension):"https://gitlab.com/".concat(n,"/-/blob/master/").concat(o,"/content").concat(this.document.path).concat(this.document.extension),link}}})},m=n(2),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.link?n("div",{staticClass:"sm:flex-row flex flex-col justify-between pt-4 pb-4"},[n("a",{staticClass:"dark:text-gray-400 hover:underline flex items-center text-sm font-medium text-gray-600",attrs:{href:t.link,target:"_blank",rel:"noopener"}},[t._v("\n    Help Us Improve This Page\n    "),n("IconExternalLink",{staticClass:"w-4 h-4 ml-1"})],1),t._v(" "),n("span",{staticClass:"dark:text-gray-400 flex items-center text-sm font-medium text-gray-600"},[t._v("\n    "+t._s(t.$t("article.updatedAt"))+" "+t._s(t.$d(Date.parse(t.document.updatedAt),"long"))+"\n  ")])]):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconExternalLink:n(249).default})},260:function(t,e,n){"use strict";n.r(e);n(13),n(7),n(12),n(19),n(20);var r=n(4),o=n(23);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["settings"]))},f=l,d=n(2),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"lg:px-8 dark:border-gray-800 flex justify-between pt-12",class:{"lg:border-t-0":"single"===t.settings.layout}},[t.prev?n("NuxtLink",{staticClass:"text-primary-500 dark:text-white hover:underline w-min flex items-center justify-start font-bold",attrs:{to:t.localePath(t.prev.to)}},[n("IconArrowLeft",{staticClass:"flex-shrink-0 w-8 h-8"}),t._v(" "),n("div",{staticClass:"flex flex-col items-start ml-2"},[n("span",{staticClass:"text-xs truncate"},[t._v(t._s(t.prev.category))]),t._v(" "),n("span",{staticClass:"text-md md:text-lg truncate"},[t._v(t._s(t.prev.title))])])],1):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"text-primary-500 dark:text-white hover:underline w-min flex items-center justify-end font-bold",attrs:{to:t.localePath(t.next.to)}},[n("div",{staticClass:"flex flex-col items-end mr-2"},[n("span",{staticClass:"text-xs truncate"},[t._v(t._s(t.next.category))]),t._v(" "),n("span",{staticClass:"text-md md:text-lg truncate"},[t._v(t._s(t.next.title))])]),t._v(" "),n("IconArrowRight",{staticClass:"flex-shrink-0 w-8 h-8 ml-1"})],1):n("span",[t._v(" ")])],1):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{IconArrowLeft:n(250).default,IconArrowRight:n(251).default})},261:function(t,e,n){"use strict";n.r(e);n(13),n(7),n(12),n(19),n(20);var r=n(4),o=n(23);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={props:{toc:{type:Array,default:function(){return[]}}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["settings"]))},f=l,d=n(2),component=Object(d.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.toc.length?n("div",{staticClass:"lg:w-1/4 relative block w-full"},[n("div",{staticClass:"lg:sticky lg:top-16 overflow-y-auto h-full lg:h-auto lg:max-h-(screen-16)"},[n("nav",{staticClass:"lg:py-6 lg:text-right py-4",class:{"lg:pl-8":"single"!==t.settings.layout,"lg:px-8":"single"===t.settings.layout}},[n("p",{staticClass:"lg:mb-2 lg:text-xs mb-3 text-sm font-bold tracking-wider text-gray-500 uppercase"},[t._v("\n        "+t._s(t.$t("toc.title"))+"\n      ")]),t._v(" "),n("scrollactive",{attrs:{"highlight-first-item":"","active-class":"text-primary-500",offset:0,tag:"ul"}},t._l(t.toc,(function(link){return n("li",{key:link.id,staticClass:"dark:text-gray-300 text-gray-700"},[n("a",{staticClass:"scrollactive-item transition-padding hover:pl-1 block text-sm duration-300 ease-in-out",class:{"py-2 font-black":2===link.depth,"ml-2 pb-2 font-medium":3===link.depth,"ml-3 pb-2 font-medium":4===link.depth,"ml-4 pb-2 font-normal":5===link.depth,"ml-5 pb-2 font-normal":6===link.depth},attrs:{href:"#"+link.id}},[t._v(t._s(link.text))])])})),0)],1)])]):t._e()}),[],!1,null,null,null);e.default=component.exports},264:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"\n    bg-primary-100\n    dark:bg-primary-900\n    text-primary-500\n    inline-flex\n    items-center\n    px-3\n    py-1\n    text-base\n    leading-5\n    tracking-tight\n    rounded-full\n  "},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},294:function(t,e,n){"use strict";n.r(e);n(13),n(7),n(12),n(19),n(20),n(26),n(10),n(14),n(28),n(29),n(30);var r=n(4),o=n(5),c=n(3),l=(n(24),n(0)),f=n(23),d=n(291);function m(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var y={name:"PageSlug",layout:function(t){return t.store.state.settings.layout||"default"},middleware:function(t){var e=t.app,n=t.params,r=t.redirect;"index"===n.pathMatch&&r(e.localePath("/"))},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,path,f,d,m,h,v,y,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.store,r=t.app,c=t.params,l=t.error,path="/".concat(r.i18n.locale,"/").concat(c.pathMatch||"index"),e.next=4,n({deep:!0}).where({path:path}).fetch();case 4:if(f=e.sent,d=Object(o.a)(f,1),m=d[0]){e.next=9;break}return e.abrupt("return",l({statusCode:404,message:"Page not found"}));case 9:return e.next=11,n(r.i18n.locale,{deep:!0}).only(["title","category","path","to"]).sortBy("position","asc").surround(m.path,{before:1,after:1}).fetch();case 11:return h=e.sent,v=Object(o.a)(h,2),y=v[0],x=v[1],e.abrupt("return",{document:m,prev:y,next:x});case 16:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.document.title,meta:[{hid:"description",name:"description",content:this.document.description},{hid:"og:title",property:"og:title",content:this.document.title},{hid:"og:description",property:"og:description",content:this.document.description},{hid:"twitter:title",name:"twitter:title",content:this.document.title},{hid:"twitter:description",name:"twitter:description",content:this.document.description}]}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(f.b)(["settings"])),mounted:function(){this.document.version&&localStorage.setItem("document-".concat(this.document.slug,"-version"),this.document.version),setTimeout((function(){var t,e=m(document.getElementsByClassName("nuxt-content-highlight"));try{for(e.s();!(t=e.n()).done;){var n=t.value,component=(new(l.a.extend(d.default))).$mount();n.appendChild(component.$el)}}catch(t){e.e(t)}finally{e.f()}}),100)}},x=y,O=n(2),j=Object(O.a)(x,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-wrap-reverse",class:{"lg:-mx-8":"single"===t.settings.layout}},[n("div",{staticClass:"lg:pt-6 w-full pt-4",class:{"lg:w-3/4":!t.document.fullscreen}},[n("article",{staticClass:"typography dark:typography-dark max-w-none sm:pr-16 md:pr-42"},[n("h1",{staticClass:"flex items-center justify-between"},[t._v("\n        "+t._s(t.document.title)+"\n        "),t.document.badge?n("Badge",[t._v(t._s(t.document.badge))]):t._e()],1),t._v(" "),t.document.subtitle?n("div",{staticClass:"-mt-4"},[n("p",{staticClass:"dark:text-gray-400 text-gray-600"},[t._v("\n          "+t._s(t.document.subtitle)+"\n        ")])]):t._e(),t._v(" "),n("NuxtContent",{attrs:{document:t.document}})],1),t._v(" "),n("AppPageBottom",{attrs:{document:t.document}}),t._v(" "),n("AppPrevNext",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),t.document.fullscreen?t._e():n("AppToc",{attrs:{toc:t.document.toc}})],1)}),[],!1,null,null,null);e.default=j.exports;installComponents(j,{Badge:n(264).default,AppPageBottom:n(259).default,AppPrevNext:n(260).default,AppToc:n(261).default})}}]);