(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0cf406fa"],{"2af1":function(t,e,s){var a=s("23e7"),i=s("f748");a({target:"Math",stat:!0},{sign:i})},"33f3":function(t,e,s){"use strict";var a=s("e3ac"),i=s.n(a);i.a},"52d3":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("draggable",{staticClass:"grid",class:{disableShadows:t.disableShadows},style:t.gridStyle,attrs:{tag:"transition-group",componentData:t.componentData,animation:"250",disabled:!t.drag},on:{start:function(e){t.dragging=!0},end:function(e){t.dragging=!1}},model:{value:t.itemNums,callback:function(e){t.itemNums=e},expression:"itemNums"}},t._l(t.itemNums,(function(e){return s("BaseCell",{key:e,attrs:{client:t.clientId,file:t.items[e]},on:{remove:function(s){return t.remove(e)}}})})),1)},i=[],n=(s("99af"),s("4de4"),s("fb6a"),s("b64b"),s("d3b7"),s("ac1f"),s("1276"),s("ddb0"),s("2909")),r=s("d4ec"),c=s("bee2"),l=s("262e"),o=s("2caf"),u=s("9ab4"),d=s("60a3"),f=s("310e"),g=s.n(f),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item",class:t.cls,style:t.itemStyle,on:{mousedown:t.handleMouseDown,wheel:t.handleWheel}},[s("img",{staticClass:"icon",class:{opaque:t.cell.opaque,disabled:t.cell.disabled},attrs:{src:"img/"+t.styledIcon(t.file)+".webp"}}),t.cell.disabled?t._e():[s("transition",{attrs:{name:"fade-up"}},[t.cell.total>1&&t.cell.level>1?s("img",{staticClass:"number",attrs:{src:"img/progression/numbers/"+Math.min(t.cell.total,t.cell.level)+".webp"}}):t._e()]),s("transition",{attrs:{name:"fade-up"}},[t.cell.data&&t.cell.level===t.cell.total+1?s("img",{staticClass:"nobody",attrs:{src:"img/progression/"+t.file.split("/")[1]+"/"+t.cell.data+".webp"}}):t._e()]),s("transition",{attrs:{name:"fade-up"}},[t.cell.secondaryLevel?s("div",{staticClass:"secondary"},[s("img",{attrs:{src:"img/progression/"+t.secondaryFile+".webp"}}),s("transition",{attrs:{name:"fade-up"}},[t.secondaryNumber?s("img",{staticClass:"number",attrs:{src:"img/progression/numbers/"+t.secondaryNumber+".webp"}}):t._e()])],1):t._e()])],s("transition",{attrs:{name:"fade-cross"}},[t.cell.disabled?s("img",{staticClass:"cross",attrs:{src:"img/minimal/other/cross.webp"}}):t._e()])],2)},h=[],b=(s("2af1"),function(t){Object(l["a"])(s,t);var e=Object(o["a"])(s);function s(){var t,a;return Object(r["a"])(this,s),a=e.apply(this,arguments),a.cls=null!==(t=a.cell.cls)&&void 0!==t?t:null,a}return Object(c["a"])(s,[{key:"custom",value:function(t,e){var s,a;return null!==(s=null===(a=this.customDefaults)||void 0===a?void 0:a[t])&&void 0!==s?s:e}},{key:"styledIcon",value:function(t){var e,s=this.$store.state.tracker.clients.self[t],a=null===(e=this.$store.state.settings.iconStyles[s.category])||void 0===e?void 0:e.value;if(a===s.categoryExclude)return"default/".concat(t);switch(a){case"Minimal":return"minimal/".concat(t);case"Classic":return"legacy/".concat(t);default:return"default/".concat(t)}}},{key:"dispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.$store.dispatch(t,{client:this.client,cell:this.file,offset:e,shift:s})}},{key:"handleMouseDown",value:function(t){if(this.$store.state.drag)2===t.button&&this.$emit("remove");else if(this.$store.state.edit)this.$router.push({name:"EditItem",params:{file:this.file}});else{var e=t.ctrlKey?-1:1;switch(t.button){case 0:this.dispatch("tracker/primary",e,t.shiftKey);break;case 2:this.dispatch("tracker/secondary",e);break;case 1:this.dispatch("tracker/disable");break}}}},{key:"handleWheel",value:function(t){if(this.$store.state.settings.scroll){t.preventDefault();var e=-Math.sign(t.deltaY);this.dispatch("tracker/primary",e,t.shiftKey)}}},{key:"cell",get:function(){return this.$store.getters["tracker/cell"](this.client,this.file)}},{key:"secondaryFile",get:function(){return this.$store.getters["tracker/secondary"](this.client,this.file)}},{key:"secondaryNumber",get:function(){return this.$store.getters["tracker/secondaryNumber"](this.client,this.file)}},{key:"customDefaults",get:function(){return this.$store.state.settings.customDefaults[this.file]}},{key:"itemStyle",get:function(){return{width:"".concat(100/(this.$store.state.settings.columns||5),"%"),padding:this.$store.state.settings.padding||"5px"}}}]),s}(d["c"]));Object(u["a"])([Object(d["b"])(String)],b.prototype,"client",void 0),Object(u["a"])([Object(d["b"])(String)],b.prototype,"file",void 0),b=Object(u["a"])([d["a"]],b);var p=b,y=p,v=(s("76cb"),s("2877")),k=Object(v["a"])(y,m,h,!1,null,"290e78a4",null),w=k.exports,$=function(t){Object(l["a"])(s,t);var e=Object(o["a"])(s);function s(){var t;return Object(r["a"])(this,s),t=e.apply(this,arguments),t.items=Object.keys(t.$store.state.tracker.clients[t.clientId]),t.dragging=!1,t}return Object(c["a"])(s,[{key:"remove",value:function(t){this.itemNums=this.itemNums.filter((function(e){return e!==t}))}},{key:"disableShadows",get:function(){return this.$store.state.settings.disableShadows}},{key:"itemNums",get:function(){var t=this.$store.state.settings.itemNums;return t.length?t:Object(n["a"])(Array(Object.keys(this.items).length).keys())},set:function(t){this.$store.commit("settings/setNums",{nums:t})}},{key:"componentData",get:function(){return{props:{tag:"div",type:"transition",name:this.dragging?null:"flip-list"}}}},{key:"drag",get:function(){return this.$store.state.drag}},{key:"gridStyle",get:function(){var t=this.$store.state.settings,e=t.columns||5,s=t.size||"100px",a=t.padding?t.padding.split(/\s/).slice(-1)[0]:"5px",i={"max-width":"calc(".concat(e," * (").concat(s," + 2 * ").concat(a,"))"),"background-color":t.bgColor},n=t.bgImg,r="rgba(0, 0, 0, .6)";return n&&(i["background-image"]="linear-gradient(".concat(r,", ").concat(r,"), url(").concat(n,")")),"0"===this.$route.query.footer&&(i["border-radius"]="4px",i.margin="0"),i}}]),s}(d["c"]);Object(u["a"])([Object(d["b"])({type:String,required:!1,default:"self"})],$.prototype,"clientId",void 0),$=Object(u["a"])([Object(d["a"])({components:{BaseCell:w,draggable:g.a}})],$);var j=$,O=j,N=(s("33f3"),Object(v["a"])(O,a,i,!1,null,"81173890",null));e["default"]=N.exports},"76cb":function(t,e,s){"use strict";var a=s("f035"),i=s.n(a);i.a},e3ac:function(t,e,s){},f035:function(t,e,s){},f748:function(t,e){t.exports=Math.sign||function(t){return 0==(t=+t)||t!=t?t:t<0?-1:1}}}]);
//# sourceMappingURL=chunk-0cf406fa.442af535.js.map