(function(t){function e(e){for(var a,s,c=e[0],r=e[1],l=e[2],u=0,m=[];u<c.length;u++)s=c[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&m.push(i[s][0]),i[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);d&&d(e);while(m.length)m.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var t,e=0;e<n.length;e++){for(var o=n[e],a=!0,c=1;c<o.length;c++){var r=o[c];0!==i[r]&&(a=!1)}a&&(n.splice(e--,1),t=s(s.s=o[0]))}return t}var a={},i={app:0},n=[];function s(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=t,s.c=a,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(o,a,function(e){return t[e]}.bind(null,a));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/Side-Project__todoListv4/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=r;n.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"40c3":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo"},[o("div",{staticClass:"todo__control"},[o("div",{staticClass:"todo__tabs--bg",style:{transform:"translateX("+t.getTabWidth+"px)"}}),o("div",{staticClass:"todo__tabs"},[o("button",{ref:"tabBtn",staticClass:"todo__tabs-button",class:{active:"all"===t.tabName},attrs:{"data-type":"all"},on:{click:function(e){return t.changeTab("all")}}},[t._v(" My Task ")]),o("button",{staticClass:"todo__tabs-button",class:{active:"progress"===t.tabName},on:{click:function(e){return t.changeTab("progress")}}},[t._v(" In Progress ")]),o("button",{staticClass:"todo__tabs-button",class:{active:"completed"===t.tabName},on:{click:function(e){return t.changeTab("completed")}}},[t._v(" Completed ")])])]),o("div",{staticClass:"todo-add"},[t.isOpen?o("todo-edit-form",{staticClass:"todo-add--form",attrs:{allAry:t.allAry},on:{"add-todo":t.addTodo,"close-todo":t.switchBtn}}):o("input",{staticClass:"todo-add__input",attrs:{type:"text",placeholder:"Add"},on:{focus:t.switchBtn}})],1),o("draggable",{staticClass:"todo-list",attrs:{handle:".todo-item__dropButton"},model:{value:t.allAry,callback:function(e){t.allAry=e},expression:"allAry"}},[o("transition-group",{attrs:{name:"slide-left"}},t._l(t.allArySort,(function(e){return o("todo-item",{key:e.id,attrs:{item:e,allAry:t.allAry}})})),1)],1),o("p",{staticClass:"todo-tasks"},[t._v(t._s(t.tasksLeft)+" Tasks Left")])],1)},n=[],s=(o("4de4"),o("a9e3"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"todo-item--active":t.item.fav}},[t.isOpen?o("todo-edit-form",{attrs:{item:t.item,allAry:t.allAry},on:{"edit-todo":t.editTodo,"close-todo":t.toggleEditForm}}):o("div",{staticClass:"todo-item__content"},[o("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOpen&&!t.item.completed,expression:"!isOpen && !item.completed"}],staticClass:"todo-item__dropButton"},[o("span"),o("span"),o("span")]),o("div",{staticClass:"todo-item__title"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.item.completed,expression:"item.completed"}],staticClass:"todo-item__title__checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.item.completed)?t._i(t.item.completed,null)>-1:t.item.completed},on:{change:function(e){var o=t.item.completed,a=e.target,i=!!a.checked;if(Array.isArray(o)){var n=null,s=t._i(o,n);a.checked?s<0&&t.$set(t.item,"completed",o.concat([n])):s>-1&&t.$set(t.item,"completed",o.slice(0,s).concat(o.slice(s+1)))}else t.$set(t.item,"completed",i)}}}),o("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],staticClass:"todo-item__title__input",class:{"todo-item__title__input--active":t.item.completed},attrs:{type:"text",disabled:""},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})]),o("div",{directives:[{name:"show",rawName:"v-show",value:!t.item.completed,expression:"!item.completed"}],staticClass:"todo-item__control",class:{active:t.isBtnClick},on:{click:t.controlClick}},[t.isBtnClick?o("font-awesome-icon",{staticClass:"icon active",attrs:{icon:"times"}}):o("font-awesome-icon",{staticClass:"icon",attrs:{icon:"fingerprint"}}),o("button",{staticClass:"todo-item__control-button",on:{click:t.pinClick}},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","star"]}})],1),o("button",{staticClass:"todo-item__control-button",on:{click:t.toggleEditForm}},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:"pencil-alt"}})],1),o("button",{staticClass:"todo-item__control-button",on:{click:t.deleteTodo}},[o("font-awesome-icon",{staticClass:"icon",attrs:{icon:"trash-alt"}})],1)],1),o("div",{directives:[{name:"show",rawName:"v-show",value:t.item.content||t.item.day,expression:"item.content || item.day"}],staticClass:"todo-item__status"},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.item.day,expression:"item.day"}],staticClass:"todo-item__status-state"},[o("font-awesome-icon",{attrs:{icon:"calendar-alt"}}),t._v(" "+t._s(t.item.day)+" ")],1),o("span",{directives:[{name:"show",rawName:"v-show",value:t.item.file,expression:"item.file"}],staticClass:"todo-item__status-state"},[o("font-awesome-icon",{attrs:{icon:"file-signature"}})],1),o("span",{directives:[{name:"show",rawName:"v-show",value:t.item.content,expression:"item.content"}],staticClass:"todo-item__status-state"},[o("font-awesome-icon",{attrs:{icon:"comments"}})],1)])])],1)}),c=[],r=(o("c740"),o("a434"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-form"},[o("div",{staticClass:"todo-form__title"},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.updateData.title,expression:"updateData.title"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"請輸入標題"},domProps:{value:t.updateData.title},on:{keydown:function(e){return e.type.indexOf("key")||13===e.keyCode?t.updateType(e):null},input:function(e){e.target.composing||t.$set(t.updateData,"title",e.target.value)}}})]),o("div",{staticClass:"todo-form__content"},[o("div",{staticClass:"todo-form__content-date"},[o("p",{staticClass:"todo-form__content-title"},[o("font-awesome-icon",{staticClass:"icon-edit",attrs:{icon:"calendar-alt"}}),t._v(" Deadline ")],1),o("input",{directives:[{name:"model",rawName:"v-model",value:t.updateData.day,expression:"updateData.day"}],staticClass:"todo-form__content-date__input",attrs:{type:"date"},domProps:{value:t.updateData.day},on:{input:function(e){e.target.composing||t.$set(t.updateData,"day",e.target.value)}}})]),o("div",{staticClass:"todo-form__content-file"},[o("p",{staticClass:"todo-form__content-title"},[o("font-awesome-icon",{staticClass:"icon-edit",attrs:{icon:"file-signature"}}),t._v(" File File ")],1),o("input",{staticClass:"todo-form__content-file__input",attrs:{type:"file"},on:{change:t.getFileName}})]),o("div",{staticClass:"todo-form__content-text"},[o("p",{staticClass:"todo-form__content-title"},[o("font-awesome-icon",{staticClass:"icon-edit",attrs:{icon:"comments"}}),t._v(" Comment ")],1),o("textarea",{directives:[{name:"model",rawName:"v-model",value:t.updateData.content,expression:"updateData.content"}],staticClass:"todo-form__content-text__textarea",domProps:{value:t.updateData.content},on:{input:function(e){e.target.composing||t.$set(t.updateData,"content",e.target.value)}}})])]),o("div",{staticClass:"todo-form__submit"},[o("button",{staticClass:"todo-form__submit__cancel",on:{click:t.closeTodo}},[t._v(" Cancel ")]),o("button",{staticClass:"todo-form__submit__button",on:{click:t.updateType}},[t._v(" Add Task ")])])])}),l=[],d=(o("7db0"),o("d81d"),o("b0c0"),o("5530")),u=o("2909"),m={name:"TodoEditForm",props:{item:{type:Object,default:function(){return{id:0,title:"",day:"",file:"",content:"",fav:!1,completed:!1}}},allAry:{type:Array,default:function(){return[]}}},data:function(){return{updateData:{}}},methods:{closeTodo:function(){this.$emit("close-todo")},updateType:function(){var t=this;if(""===this.updateData.title)return alert("請輸入標題");var e=this.allAry.find((function(e){return e.id===t.item.id}));e?this.editAction():this.addAction()},getFileName:function(t){this.updateData.file=t.target.files[0].name},addAction:function(){if(this.allAry.length){var t=Math.max.apply(Math,Object(u["a"])(this.allAry.map((function(t){return t.id}))));this.updateData.id=t+1}else this.updateData.id=1;this.$emit("add-todo",this.updateData)},editAction:function(){this.$emit("edit-todo",this.updateData)}},mounted:function(){this.updateData=Object(d["a"])({},this.item)},directives:{focus:{inserted:function(t){t.focus()}}}},p=m,f=(o("74f9"),o("2877")),v=Object(f["a"])(p,r,l,!1,null,"5c954188",null),h=v.exports,_={name:"todoItem",components:{TodoEditForm:h},props:{item:{type:Object,default:function(){return{}}},allAry:{type:Array,default:function(){return[]}}},data:function(){return{isOpen:!1,isBtnClick:!1}},methods:{toggleEditForm:function(){this.isOpen=!this.isOpen},pinClick:function(){this.item.fav=!this.item.fav},deleteTodo:function(){var t=this,e=this.allAry.findIndex((function(e){return e.id===t.item.id}));this.allAry.splice(e,1)},editTodo:function(t){var e=this.allAry.findIndex((function(e){return e.id===t.id}));this.allAry.splice(e,1,t),this.toggleEditForm()},controlClick:function(){this.isBtnClick=!this.isBtnClick},autoBtnHide:function(t){this.$el.contains(t.target)||(this.isBtnClick=!1)}},mounted:function(){document.addEventListener("click",this.autoBtnHide)},destroyed:function(){document.removeEventListener("click",this.autoBtnHide)}},b=_,y=(o("e7f2"),Object(f["a"])(b,s,c,!1,null,"1491b7f8",null)),C=y.exports,g=o("b76a"),w=o.n(g),k={name:"App",components:{TodoItem:C,TodoEditForm:h,draggable:w.a},data:function(){return{isOpen:!1,tabName:"all",tabWidth:null,allAry:[]}},methods:{changeTab:function(t){this.isOpen=!1,this.tabName=t},switchBtn:function(){this.isOpen=!this.isOpen},addTodo:function(t){this.allAry.push(t),this.switchBtn()}},computed:{allAryFilter:function(){var t=null;switch(this.tabName){case"all":return this.allAry;case"progress":t=!1;break;case"completed":t=!0;break}return this.allAry.filter((function(e){return e.completed===t}))},allArySort:function(){return this.allAryFilter.sort((function(t,e){return Number(t.fav)>Number(e.fav)?-1:1}))},tasksLeft:function(){return this.allAry.filter((function(t){return!t.completed})).length},getTabWidth:function(){var t="all"===this.tabName?10:"progress"===this.tabName?1:2;return 10===t?t:t*this.tabWidth+8.5}},mounted:function(){var t=this;this.tabWidth=this.$refs.tabBtn.clientWidth,window.addEventListener("resize",(function(){var e=document.documentElement.clientWidth;e<=767&&(t.tabWidth=t.$refs.tabBtn.clientWidth)}))}},A=k,x=(o("5c0b"),Object(f["a"])(A,i,n,!1,null,null,null)),O=x.exports,T=o("ecee"),N=o("b702"),D=o("c074"),B=o("ad3d");o("ce50");T["c"].add(D["a"],N["a"]),a["a"].component("font-awesome-icon",B["a"]),a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(O)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";o("9c0c")},"74f9":function(t,e,o){"use strict";o("40c3")},"9c0c":function(t,e,o){},ce50:function(t,e,o){},df85:function(t,e,o){},e7f2:function(t,e,o){"use strict";o("df85")}});
//# sourceMappingURL=app.16d10581.js.map