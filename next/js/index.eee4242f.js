(function(e){function t(t){for(var n,s,r=t[0],c=t[1],l=t[2],u=0,p=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&p.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},o={index:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"26ae":function(e,t,a){},"2ec8":function(e,t,a){},"3d61":function(e,t,a){"use strict";var n=a("7a2b"),o=a.n(n);o.a},"5c3e":function(e,t,a){},"5c88":function(e,t,a){"use strict";var n=a("cb45"),o=a.n(n);o.a},"5ca3":function(e,t,a){"use strict";var n=a("5c3e"),o=a.n(n);o.a},"6fa5":function(e,t,a){"use strict";var n=a("76a0"),o=a.n(n);o.a},"76a0":function(e,t,a){},"7a2b":function(e,t,a){},"7faf":function(e,t,a){"use strict";var n=a("b8ff"),o=a.n(n);o.a},b232:function(e,t,a){},b8ff:function(e,t,a){},bb31:function(e,t,a){"use strict";var n=a("b232"),o=a.n(n);o.a},c188:function(e,t,a){},cb45:function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("main",{on:{contextmenu:function(e){return e.preventDefault()}}},e._l(e.clients,(function(e,t){return a("BaseGrid",{key:t,attrs:{clientId:t}})})),1),e.footer?a("TheFooter"):e._e(),a("ModalView")],1)},i=[],s=a("d4ec"),r=a("bee2"),c=a("262e"),l=a("2caf"),d=a("9ab4"),u=a("60a3"),p=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("draggable",{staticClass:"grid",class:{disableShadows:e.disableShadows},style:e.gridStyle,attrs:{tag:"transition-group",componentData:e.componentData,animation:"250",disabled:!e.drag},on:{start:function(t){e.dragging=!0},end:function(t){e.dragging=!1}},model:{value:e.itemNums,callback:function(t){e.itemNums=t},expression:"itemNums"}},e._l(e.itemNums,(function(t){return a("BaseCell",{key:t,attrs:{client:e.clientId,file:e.items[t]},on:{remove:function(a){return e.remove(t)}}})})),1)},m=[],f=(a("99af"),a("4de4"),a("b64b"),a("d3b7"),a("ddb0"),a("2909")),v=a("310e"),g=a.n(v),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"item",class:e.cls,style:e.itemStyle,on:{mousedown:e.handleMouseDown,wheel:e.handleWheel}},[a("img",{staticClass:"icon",class:{opaque:e.cell.opaque,disabled:e.cell.disabled},attrs:{src:e.custom("file","img/"+e.file+".png")}}),e.cell.disabled?e._e():[a("transition",{attrs:{name:"fade-up"}},[e.cell.total>1&&e.cell.level>1?a("img",{staticClass:"number",attrs:{src:"img/numbers/"+Math.min(e.cell.total,e.cell.level)+".png"}}):e._e()]),a("transition",{attrs:{name:"fade-up"}},[e.cell.data&&e.cell.level===e.cell.total+1?a("img",{staticClass:"nobody",attrs:{src:"img/nobody/"+e.cell.data+".png"}}):e._e()]),a("transition",{attrs:{name:"fade-up"}},[e.cell.secondary&&e.cell.secondaryLevel?a("img",{staticClass:"secondary",attrs:{src:"img/"+e.secondaryFile+".png"}}):e._e()])],a("transition",{attrs:{name:"fade-cross"}},[e.cell.disabled?a("img",{staticClass:"cross",attrs:{src:"img/cross.png"}}):e._e()])],2)},b=[],y=(a("2af1"),function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e,n;return Object(s["a"])(this,a),n=t.apply(this,arguments),n.cell=n.$store.getters["tracker/cell"](n.client,n.file),n.cls=null!==(e=n.cell.cls)&&void 0!==e?e:null,n}return Object(r["a"])(a,[{key:"custom",value:function(e,t){var a,n;return null!==(a=null===(n=this.customDefaults)||void 0===n?void 0:n[e])&&void 0!==a?a:t}},{key:"dispatch",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.$store.dispatch(e,{client:this.client,cell:this.file,offset:t,shift:a})}},{key:"handleMouseDown",value:function(e){if(this.$store.state.drag)2===e.button&&this.$emit("remove");else if(this.$store.state.edit)this.$router.push({name:"EditItem",params:{file:this.file}});else{var t=e.ctrlKey?-1:1;switch(e.button){case 0:this.dispatch("tracker/primary",t,e.shiftKey);break;case 2:this.dispatch("tracker/secondary",t);break;case 1:this.dispatch("tracker/disable");break}}}},{key:"handleWheel",value:function(e){if(this.$store.state.settings.scroll){e.preventDefault();var t=-Math.sign(e.deltaY);this.dispatch("tracker/primary",t,e.shiftKey)}}},{key:"secondaryFile",get:function(){return this.$store.getters["tracker/secondary"](this.client,this.file)}},{key:"customDefaults",get:function(){return this.$store.state.settings.customDefaults[this.file]}},{key:"itemStyle",get:function(){return{width:"".concat(100/(this.$store.state.settings.columns||5),"%"),padding:"".concat(this.$store.state.settings.padding||5,"px")}}}]),a}(u["c"]));Object(d["a"])([Object(u["b"])(String)],y.prototype,"client",void 0),Object(d["a"])([Object(u["b"])(String)],y.prototype,"file",void 0),y=Object(d["a"])([u["a"]],y);var _=y,w=_,k=(a("5c88"),a("2877")),j=Object(k["a"])(w,h,b,!1,null,"1d02e422",null),O=j.exports,C=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.items=Object.keys(e.$store.state.tracker.clients[e.clientId]),e.dragging=!1,e}return Object(r["a"])(a,[{key:"remove",value:function(e){this.itemNums=this.itemNums.filter((function(t){return t!==e}))}},{key:"disableShadows",get:function(){return this.$store.state.settings.disableShadows}},{key:"itemNums",get:function(){var e=this.$store.state.settings.itemNums;return e.length?e:Object(f["a"])(Array(Object.keys(this.items).length).keys())},set:function(e){this.$store.commit("settings/setNums",{nums:e})}},{key:"componentData",get:function(){return{props:{tag:"div",type:"transition",name:this.dragging?null:"flip-list"}}}},{key:"drag",get:function(){return this.$store.state.drag}},{key:"gridStyle",get:function(){var e=this.$store.state.settings,t=(e.size||100)+2*(e.padding||5),a={"max-width":"".concat((e.columns||5)*t,"px"),"background-color":e.bgColor},n=e.bgImg,o="rgba(0, 0, 0, .6)";return n&&(a["background-image"]="linear-gradient(".concat(o,", ").concat(o,"), url(").concat(n,")")),a}}]),a}(u["c"]);Object(d["a"])([Object(u["b"])({type:String,required:!1,default:""})],C.prototype,"clientId",void 0),C=Object(d["a"])([Object(u["a"])({components:{BaseCell:O,draggable:g.a}})],C);var x=C,S=x,$=(a("bb31"),Object(k["a"])(S,p,m,!1,null,"5a66d9ba",null)),T=$.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",[a("div",{staticClass:"container"},[a("div",{staticClass:"info"},[e._v("Kingdom Hearts 2 Final Mix Item Tracker - Version "+e._s(e.version)+" (Preview)")]),e._m(0),a("div",{staticClass:"buttons"},e._l(e.routes,(function(t){return a("router-link",{key:t,attrs:{to:t,tag:"button"}},[e._v(e._s(e.title(t)))])})),1),a("div",{staticClass:"buttons"},[a("button",{on:{click:e.popout}},[e._v("Popout window")])])])])},D=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"info"},[a("a",{attrs:{href:"https://tracker.zaxu.xyz/old",target:"_blank"}},[e._v("Click here")]),e._v(" to use the pre-1.4 version")])}],N=(a("fb6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"note"},[a("p",[e._t("default")],2)])}),I=[],R=(a("5ca3"),{}),z=Object(k["a"])(R,N,I,!1,null,"89531f4a",null),A=z.exports,B=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.routes=["about","help","co-op","settings"],e.version="2.0.0",e}return Object(r["a"])(a,[{key:"title",value:function(e){return e[0].toUpperCase()+e.slice(1)}},{key:"popout",value:function(){window.open("#/?footer=0","","left=0,top=0,width=600,height=1200,menubar=no,toolbar=no,scrollbars=no")}}]),a}(u["c"]);B=Object(d["a"])([Object(u["a"])({components:{BaseTooltip:A}})],B);var L=B,M=L,P=(a("3d61"),Object(k["a"])(M,E,D,!1,null,"417b9e18",null)),q=P.exports,J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("transition",{attrs:{name:"fade-up"}},[e.show?a("div",{staticClass:"outer",on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.gotoRoot(t)}}},[a("div",{staticClass:"inner"},[a("router-view",{staticClass:"content"})],1)]):e._e()])},F=[],H=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(r["a"])(a,[{key:"gotoRoot",value:function(){this.$router.push("/")}},{key:"mounted",value:function(){var e=this;window.addEventListener("keydown",(function(t){"Escape"===t.key&&"/"!==e.$route.path&&e.gotoRoot()}))}},{key:"show",get:function(){return"/"!==this.$route.path}}]),a}(u["c"]);H=Object(d["a"])([u["a"]],H);var G=H,V=G,W=(a("ed16"),a("f0f2"),Object(k["a"])(V,J,F,!1,null,"e1bd9f5c",null)),K=W.exports,U=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(r["a"])(a,[{key:"onRouteChange",value:function(e,t){e.meta.title?document.title="".concat(e.meta.title," | KH2FM Item Tracker"):document.title="KH2FM Item Tracker"}},{key:"mounted",value:function(){document.body.onmousedown=function(e){if(1===e.button)return!1}}},{key:"clients",get:function(){return this.$store.state.tracker.clients}},{key:"footer",get:function(){return"0"!==this.$route.query.footer}}]),a}(u["c"]);Object(d["a"])([Object(u["d"])("$route",{immediate:!0})],U.prototype,"onRouteChange",null),U=Object(d["a"])([Object(u["a"])({components:{BaseGrid:T,TheFooter:q,ModalView:K}})],U);var Y=U,X=Y,Z=(a("7faf"),Object(k["a"])(X,o,i,!1,null,null,null)),Q=Z.exports,ee=a("8c4f"),te=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ae=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",[e._v("This is a tracker intended for use with the "),a("a",{attrs:{href:"https://randomizer.valaxor.com",target:"_blank"}},[e._v("Kingdom Hearts 2 Final Mix Randomizer")]),e._v(" by Valaxor, for the "),a("a",{attrs:{href:"https://docs.google.com/document/d/1GYjEnrM_TIk7qyO75clPLYD-_nP5wTR7K6SE-Wn-QCg/edit",target:"_blank"}},[e._v("Garden of Assemblage (GoA) Mod")]),e._v(" by Sonicshadowsilver2.")]),a("p",[e._v("It allows the tracking of progress such as world completion, drive forms, magic, etc. For a more detailed explanation, see Help.")]),a("p",[e._v("It was initially developed by Kokemon198, however has since entirely been rewritten by Zax with a completely different codebase. Massive thanks to "),a("a",{attrs:{href:"https://www.artstation.com/liamjohnsondesign",target:"_blank"}},[e._v("Televo")]),e._v(" for providing really nice images that replaced all of the previous ones, and adding new items.")]),a("p",[e._v("The GitHub repository with the original code for this site can be found "),a("a",{attrs:{href:"https://github.com/zaxutic/kh2fm-rando-tracker",target:"_blank"}},[e._v("here.")])]),a("p",[e._v("If you have any questions/issues, you can find me in the "),a("a",{attrs:{href:"https://discord.gg/GcJR7Fv",target:"_blank"}},[e._v("KH2FM Rando")]),e._v(" Discord server, Twitter ("),a("a",{attrs:{href:"https://twitter.com/z_ax__",target:"_blank"}},[e._v("@Z_ax__")]),e._v("), or GitHub. You can also find Televo in the rando Discord for questions regarding their additions.")])])}],ne={},oe=Object(k["a"])(ne,te,ae,!1,null,null,null),ie=oe.exports,se=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Join Room")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.join(t)}}},[a("div",{staticClass:"row grid"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.joinRoomId,expression:"joinRoomId"}],staticClass:"long",attrs:{placeholder:"Room ID"},domProps:{value:e.joinRoomId},on:{input:function(t){t.target.composing||(e.joinRoomId=t.target.value)}}}),e._m(0)])]),a("h2",[e._v("Create Room")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.create(t)}}},[a("div",{staticClass:"row grid"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.roomSize,expression:"roomSize",modifiers:{number:!0}}],staticClass:"long",attrs:{placeholder:"Room Size"},domProps:{value:e.roomSize},on:{input:function(t){t.target.composing||(e.roomSize=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),e._m(1)])]),e.message?a("div",{staticClass:"row"},[a("p",[e._v(e._s(e.message))])]):e._e(),e._m(2)])},re=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{attrs:{type:"submit"}},[e._v("Join Room")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("button",{attrs:{type:"submit"}},[e._v("Create Room")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("p",{staticClass:"footnote"},[e._v("Note: Everyone should join the room BEFORE doing anything on the tracker as the server doesn't save anyone's state, it only tells others what you add to it.")])])}],ce=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.joinRoomId="",e.createRoomId="",e.roomSize=null,e}return Object(r["a"])(a,[{key:"join",value:function(e){this.$store.dispatch("co_op/join",{room:this.joinRoomId})}},{key:"create",value:function(e){this.$store.dispatch("co_op/create",{size:this.roomSize||2})}},{key:"message",get:function(){if(this.$store.state.co_op.joined)return"Joined room ".concat(this.$store.state.co_op.room);var e=this.$store.state.co_op.error;return e||""}}]),a}(u["c"]);ce=Object(d["a"])([u["a"]],ce);var le=ce,de=le,ue=Object(k["a"])(de,se,re,!1,null,null,null),pe=ue.exports,me=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h3",[e._v("Left Click")]),a("p",[e._v("The item will become activated, lighting up to full opacity.")]),a("p",[e._v("When clicking on a world more than once, if applicable, a number will appear in the bottom right indicating how many visits have been completed. There are similar systems for drive, magic, summon, and Sora levels."),a("BaseTooltip",[e._v("'Visits' for Atlantica/100 Acre Wood represent not whole world completion but segment completion. That is, song completion for Atlantica (including the tutorial), and pages for 100 Acre Wood.")]),a("BaseTooltip",[e._v("The counter for Sora's Level will increase in increments of +1 from LV1-15, then +5 from LV15-50 and +10 from LV50-99.")])],1),a("p",[e._v("After all visits have been completed, clicking again will either trigger a symbol to appear in the top left, for defeat of the Data Org/Absent Sillhouette fight, or reset the cell back to its original state.")]),a("h3",[e._v("Right Click")]),e._m(0),a("h3",[e._v("Middle Click")]),a("p",[e._v("A red cross will be put over the item, for if a world/item is disabled in the seed. (Items can now be completely removed in rearrange mode.)")]),a("h3",[e._v("Modifiers")]),a("p",[e._v("Holding ctrl while clicking on an item will go backwards rather than forwards. This works both for left click and right click.")]),a("p",[e._v("Holding shift while left clicking will increase the level without lighting up the item. This is useful if you are leveling up a drive form using its auto ability but haven't unlocked the form itself. E.g. leveling up Valor Form through Auto Valor.")]),a("h3",[e._v("OBS Browser Source")]),e._m(1)])},fe=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"definitions"},[a("li",[a("div",{staticClass:"base"},[e._v("Hollow Bastion")]),a("div",{staticClass:"definition"},[e._v("Defeated Sephiroth")])]),a("li",[a("div",{staticClass:"base"},[e._v("Cavern of Remembrance")]),a("div",{staticClass:"definition"},[e._v("All Chests until 1st Fight, All Chests until 2nd Fight, All Remaining Chests, Cleared Nobody Fights")])]),a("li",[a("div",{staticClass:"base"},[e._v("Olympus Coliseum")]),a("div",{staticClass:"definition"},[e._v("Cleared Pain and Panic Cup, Cerberus Cup, Titan Cup, Goddess of Fate Cup, Hades Paradox Cup")])]),a("li",[a("div",{staticClass:"base"},[e._v("Disney Castle")]),a("div",{staticClass:"definition"},[e._v("Defeated Lingering Will/Terra")])]),a("li",[a("div",{staticClass:"base"},[e._v("The World That Never Was")]),a("div",{staticClass:"definition"},[e._v("Defeated Roxas, Xigbar, Luxord, Saïx, Xemnas")])]),a("li",[a("div",{staticClass:"base"},[e._v("100 Acre Wood")]),a("div",{staticClass:"definition"},[e._v("Torn Page Counter")])]),a("li",[a("div",{staticClass:"base"},[e._v("Sora's level")]),a("div",{staticClass:"definition"},[e._v("Obtained Second Chance, Once More, Second Chance and Once More")])]),a("li",[a("div",{staticClass:"base"},[e._v("Drive Forms")]),a("div",{staticClass:"definition"},[e._v("Growth Ability Counter (High Jump, Quick Run, Dodge Roll, Aerial Dodge, Glide)")])]),a("li",[a("div",{staticClass:"base"},[e._v("The Three Proofs")]),a("div",{staticClass:"definition"},[e._v("Obtained Bronze Crown, Silver Crown, Gold Crown")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("Gameaddict has a "),a("a",{attrs:{href:"https://docs.google.com/document/d/1STiVyCUkyx9_ZiEuXBU71gJSisJT4hvagxvqK0VOqU8/edit"}},[e._v("guide")]),e._v(" on using the tracker as a browser source in OBS if you wish to use it this way. This is not the same as capturing your browser window directly - the tracker is opened in OBS itself.")])}],ve=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(u["c"]);ve=Object(d["a"])([Object(u["a"])({components:{BaseTooltip:A}})],ve);var ge=ve,he=ge,be=(a("6fa5"),Object(k["a"])(he,me,fe,!1,null,"13479a92",null)),ye=be.exports,_e=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Settings")]),a("div",{staticClass:"row grid"},[a("SwitchSlider",{model:{value:e.settings.scroll,callback:function(t){e.$set(e.settings,"scroll",t)},expression:"settings.scroll"}}),a("div",[a("p",[e._v("Scroll wheel increment/decrement")]),a("BaseTooltip",[e._v("Scroll up on item to +1, scroll down to -1")])],1)],1),a("div",{staticClass:"row grid"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.columns,expression:"settings.columns"}],attrs:{placeholder:"5"},domProps:{value:e.settings.columns},on:{input:function(t){t.target.composing||e.$set(e.settings,"columns",t.target.value)}}}),a("p",[e._v("Number of grid columns")])]),a("div",{staticClass:"row grid"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.settings.size,expression:"settings.size",modifiers:{number:!0}}],attrs:{placeholder:"100"},domProps:{value:e.settings.size},on:{input:function(t){t.target.composing||e.$set(e.settings,"size",e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}}),a("p",[e._v("Item size (px)")])]),a("div",{staticClass:"row grid"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.padding,expression:"settings.padding"}],attrs:{placeholder:"5"},domProps:{value:e.settings.padding},on:{input:function(t){t.target.composing||e.$set(e.settings,"padding",t.target.value)}}}),a("div",[a("p",[e._v("Item padding (px)")]),a("BaseTooltip",[e._v("Pre-1.4 versions used 7.5")])],1)]),a("div",{staticClass:"row grid"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.bgColor,expression:"settings.bgColor"}],staticClass:"long",attrs:{placeholder:"#212121"},domProps:{value:e.settings.bgColor},on:{input:function(t){t.target.composing||e.$set(e.settings,"bgColor",t.target.value)}}}),a("div",[a("p",[e._v("Background color")]),a("BaseTooltip",[e._v("Accepts any valid "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/color_value"}},[e._v("CSS color")])])],1)]),a("div",{staticClass:"row grid"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.settings.bgImg,expression:"settings.bgImg"}],staticClass:"long",attrs:{placeholder:"https://..."},domProps:{value:e.settings.bgImg},on:{input:function(t){t.target.composing||e.$set(e.settings,"bgImg",t.target.value)}}}),a("div",[a("p",[e._v("Background image")]),a("BaseTooltip",[e._v("The image must be provided as a URL")])],1)]),a("div",{staticClass:"row grid"},[a("SwitchSlider",{model:{value:e.settings.disableShadows,callback:function(t){e.$set(e.settings,"disableShadows",t)},expression:"settings.disableShadows"}}),a("div",[a("p",[e._v("Disable image shadows")]),a("BaseTooltip",[e._v("Can significantly improve performance on slower devices")])],1)],1),a("div",{staticClass:"row grid"},[a("button",{class:{alt:e.drag},on:{click:e.toggleDrag}},[e._v("Toggle Rearrange Mode")]),a("div",[a("BaseTooltip",[e._v("Click + drag to move items around, and right click to remove an item")]),a("button",{on:{click:e.reset}},[e._v("Reset")])],1)]),a("div",{staticClass:"row grid"},[a("button",{on:{click:e.save}},[e._v("Save as File")]),a("div",[a("p",[e._v("Export settings")]),a("BaseTooltip",[e._v("Includes custom layout")])],1)]),a("div",{staticClass:"row grid"},[a("button",{on:{click:e.load}},[e._v("Upload File")]),a("p",[e._v("Import settings")]),a("input",{ref:"fileLoader",staticStyle:{display:"none"},attrs:{type:"file",accept:".json"},on:{change:e.onChange}})]),e._m(0)])},we=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("p",{staticClass:"footnote"},[e._v("Note: In some browsers, using the tracker as a local file may not allow settings to persist across sessions")])])}],ke=a("5530"),je=a("21a6"),Oe=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("label",{staticClass:"switch"},[a("input",{attrs:{type:"checkbox"},domProps:{checked:e.value},on:{change:function(t){return e.$emit("input",t.target.checked)}}}),a("span",{staticClass:"slider"})])},Ce=[],xe=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return a}(u["c"]);Object(d["a"])([Object(u["b"])(Boolean)],xe.prototype,"value",void 0),xe=Object(d["a"])([u["a"]],xe);var Se=xe,$e=Se,Te=(a("e33c"),Object(k["a"])($e,Oe,Ce,!1,null,"4698d5f0",null)),Ee=Te.exports,De=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){var e;return Object(s["a"])(this,a),e=t.apply(this,arguments),e.settings=Object(ke["a"])({},e.$store.state.settings),e}return Object(r["a"])(a,[{key:"onSettingsChanged",value:function(){this.$store.commit("settings/setSettings",this.settings)}},{key:"toggleDrag",value:function(){this.$store.commit("toggleDrag")}},{key:"reset",value:function(){this.$store.commit("settings/resetNums")}},{key:"toggleEdit",value:function(){this.$store.commit("toggleEdit")}},{key:"save",value:function(){var e=new Blob([JSON.stringify(this.$store.state.settings)],{type:"text/plain;charset=utf-8"});Object(je["saveAs"])(e,"kh2fm-tracker-settings.json")}},{key:"load",value:function(){this.$refs.fileLoader.click()}},{key:"onChange",value:function(e){var t=this,a=e.target,n=new FileReader;n.onload=function(e){t.$store.commit("settings/setSettings",JSON.parse(e.target.result))},n.readAsText(a.files[0])}},{key:"drag",get:function(){return this.$store.state.drag}},{key:"editItems",get:function(){return this.$store.state.edit}}]),a}(u["c"]);Object(d["a"])([Object(u["d"])("settings",{deep:!0})],De.prototype,"onSettingsChanged",null),De=Object(d["a"])([Object(u["a"])({components:{BaseTooltip:A,SwitchSlider:Ee}})],De);var Ne=De,Ie=Ne,Re=Object(k["a"])(Ie,_e,we,!1,null,null,null),ze=Re.exports,Ae=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Edit Item")]),a("h4",[e._v("File: "+e._s(e.file))]),e._m(0),a("div",{staticClass:"row grid"},[a("input",{attrs:{placeholder:e.settings.total}}),a("p",[e._v("Total")])]),a("div",{staticClass:"row grid"},[a("input",{attrs:{placeholder:e.settings.level}}),a("p",[e._v("Default Level")])]),a("div",{staticClass:"row grid"},[a("input",{staticClass:"long",attrs:{placeholder:e.settings.group}}),a("p",[e._v("Group")])]),a("div",{staticClass:"row grid"},[a("p",[e._v("Secondary (right click)")]),a("input",{staticClass:"long",attrs:{placeholder:JSON.stringify(e.settings.secondary)}})])])},Be=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row grid"},[a("input",{staticClass:"long"}),a("p",[e._v("Custom image")])])}],Le=function(e){Object(c["a"])(a,e);var t=Object(l["a"])(a);function a(){return Object(s["a"])(this,a),t.apply(this,arguments)}return Object(r["a"])(a,[{key:"file",get:function(){return this.$route.params.file}},{key:"settings",get:function(){return this.$store.state.tracker.clients[""][this.file]}}]),a}(u["c"]);Le=Object(d["a"])([u["a"]],Le);var Me=Le,Pe=Me,qe=Object(k["a"])(Pe,Ae,Be,!1,null,"69bbe73d",null),Je=qe.exports;n["a"].use(ee["a"]);var Fe,He=[{path:"/about",name:"About",meta:{title:"About"},component:ie},{path:"/help",name:"Help",meta:{title:"Help"},component:ye},{path:"/co-op",name:"CoOp",meta:{title:"Co-Op"},component:pe},{path:"/settings",name:"Settings",meta:{title:"Settings"},component:ze},{path:"/item/:file",name:"EditItem",meta:{title:"Edit Item"},component:Je}],Ge=new ee["a"]({routes:He}),Ve=Ge,We=a("2f62"),Ke=a("0e44"),Ue=(a("4160"),a("d81d"),a("07ac"),a("159b"),a("3835")),Ye=a("b85c"),Xe=["bronze","silver","gold"].map((function(e){return"secondary/crowns/".concat(e)})),Ze="secondary/chest",Qe="secondary/duck",et={"worlds/simulated_twilight_town":{data:"roxas"},"worlds/twilight_town":{total:3,data:"axel",secondary:Ze},"worlds/hollow_bastion":{total:2,data:"demyx",secondary:[Ze,"secondary/sephiroth"]},"worlds/cavern_of_remembrance":{secondary:["depths","mining","engine","transport"].map((function(e){return"secondary/cor/".concat(e)}))},"worlds/land_of_dragons":{total:2,data:"xigbar",secondary:Ze},"worlds/beast's_castle":{total:2,data:"xaldin",secondary:Ze},"worlds/olympus_coliseum":{total:2,data:"zexion",secondary:[Ze].concat(Object(f["a"])(["pain_panic","cerberus","titan","goddess","paradox"].map((function(e){return"secondary/cups/".concat(e)}))))},"worlds/disney_castle":{data:"marluxia",secondary:[Ze,"secondary/lingering_will"]},"worlds/timeless_river":{secondary:Ze},"worlds/port_royal":{total:2,data:"luxord",secondary:Ze},"worlds/agrabah":{total:2,data:"lexaeus",secondary:Ze},"worlds/halloween_town":{total:2,data:"vexen",secondary:Ze},"worlds/pride_land":{total:2,data:"saix",secondary:Ze},"worlds/space_paranoids":{total:2,data:"larxene",secondary:Ze},"worlds/the_world_that_never_was":{data:"xemnas",secondary:[Ze].concat(Object(f["a"])(["roxas","xigbar","luxord","saix","kingdom_hearts"].map((function(e){return"nobody/".concat(e)}))))},"worlds/atlantica":{total:6,data:"larxene",cls:"atlantica"},"worlds/100_acre_wood":{total:6,secondary:["page","page2","page3","page4","page5"].map((function(e){return"secondary/pages/".concat(e)})),cls:"hundred_acre"},"worlds/underdrome_cups":{total:5},"worlds/replica_data":{total:13},"other/sora's_level":{total:27,level:1,secondary:["second_chance","once_more","survival_abilities"].map((function(e){return"abilities/".concat(e)}))},"drive/valor":{total:7,secondary:["jump","jump2","jump3","jump4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/wisdom":{total:7,secondary:["quick","quick2","quick3","quick4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/limit":{total:7,secondary:["dodge","dodge2","dodge3","dodge4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/master":{total:7,secondary:["aerial","aerial2","aerial3","aerial4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"drive/final":{total:7,secondary:["glide","glide2","glide3","glide4"].map((function(e){return"secondary/drive/".concat(e)})),cls:"drive"},"magic/fire":{total:3,secondary:Qe},"magic/blizzard":{total:3,secondary:Qe},"magic/thunder":{total:3,secondary:Qe},"magic/cure":{total:3,secondary:Qe},"magic/reflect":{total:3},"magic/magnet":{total:3},"summons/chicken_little":{total:7,group:"summon"},"summons/genie":{total:7,group:"summon"},"summons/stitch":{total:7,group:"summon"},"summons/peter_pan":{total:7,group:"summon"},"other/secret_reports":{total:13},"other/promise_charm":{},"other/proof_of_nonexistence":{secondary:Xe},"other/proof_of_connection":{secondary:Xe},"other/proof_of_tranquility":{secondary:Xe}},tt=Object(Ye["a"])(Object.values(et).entries());try{for(tt.s();!(Fe=tt.n()).done;){var at,nt,ot=Object(Ue["a"])(Fe.value,2),it=ot[0],st=ot[1];st.id=it,st.total=null!==(at=st.total)&&void 0!==at?at:1,st.level=null!==(nt=st.level)&&void 0!==nt?nt:0,st.opaque=Boolean(st.level),st.disabled=!1,st.secondary&&(st.secondaryLevel=0)}}catch(kt){tt.e(kt)}finally{tt.f()}var rt={clients:{"":JSON.parse(JSON.stringify(et))}};[].concat(Object(f["a"])(Object(f["a"])(Array(27).keys()).map((function(e){return"numbers/".concat(e+1,".png")}))),["numbers/max.png"],Object(f["a"])(Object(f["a"])(Array(5).keys()).map((function(e){return"secondary/page".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/jump".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/quick".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/dodge".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/aerial".concat(e?e+1:"",".png")}))),Object(f["a"])(Object(f["a"])(Array(4).keys()).map((function(e){return"secondary/drive/glide".concat(e?e+1:"",".png")}))),Object(f["a"])(["bronze","silver","gold"].map((function(e){return"secondary/crowns/".concat(e,".png")}))),Object(f["a"])(["pain_panic","cerberus","titan","goddess","paradox"].map((function(e){return"secondary/cups/".concat(e,".png")}))),Object(f["a"])(["roxas","xigbar","luxord","saix","kingdom_hearts"].map((function(e){return"nobody/".concat(e,".png")}))),Object(f["a"])(["depths","mining","engine","transport"].map((function(e){return"secondary/cor/".concat(e,".png")}))),["secondary/lingering_will.png","secondary/sephiroth.png","secondary/triangle.png","secondary/chest.png"]).forEach((function(e){var t=new Image;t.src="img/".concat(e)}));var ct,lt={cell:function(e){return function(t,a){return e.clients[t][a]}},secondary:function(e,t){return function(e,a){var n=t.cell(e,a);return"string"===typeof n.secondary?n.secondary:n.secondary[n.secondaryLevel-1]}}},dt={addClient:function(e,t){n["a"].set(e.clients,t.client,JSON.parse(JSON.stringify(et)))},removeClient:function(e,t){n["a"].delete(e.clients,t.client)},setOpaque:function(e,t){e.clients[t.client][t.cell].opaque=t.opaque},setData:function(e,t){e.clients[t.client][t.cell].showData=t.show},setLevel:function(e,t){e.clients[t.client][t.cell].level=t.level},setSecondaryLevel:function(e,t){e.clients[t.client][t.cell].secondaryLevel=t.level},disable:function(e,t){var a=e.clients[t.client][t.cell];a.disabled=!a.disabled}},ut={primary:function(e,t){var a=e.commit,n=e.dispatch,o=e.state,i=t.client,s=t.cell,r=t.offset,c=void 0===r?1:r,l=t.shift,d=void 0!==l&&l,u=o.clients[i],p=u[s];if(!p.disabled){n("co_op/sendClick",{type:"user_primary",client:i,cell:s,offset:c},{root:!0});var m=p.level,f=Boolean(p.data),v=p.total+f,g=v+1;(!m||p.opaque||d)&&(m=(m+g+c)%g),d&&(c>0&&m-c===0?m+=1:c<0&&1===m&&(m=0)),m?d||a("setOpaque",{client:i,cell:s,opaque:!0}):a("setOpaque",{client:i,cell:s,opaque:!1}),p.nobody&&m===v&&a("setData",{client:i,cell:s,show:!0});var h=p.group,b=[];if(h)for(var y in u)u[y].group===h&&b.push(y);else b.push(s);for(var _=0,w=b;_<w.length;_++){var k=w[_];a("setLevel",{client:i,cell:k,level:m})}}},secondary:function(e,t){var a=e.commit,n=e.dispatch,o=e.state,i=t.client,s=t.cell,r=t.offset,c=void 0===r?1:r,l=o.clients[i][s];if(!l.disabled){var d=l.secondary;if(d){n("co_op/sendClick",{type:"user_secondary",client:i,cell:s,offset:c},{root:!0});var u=(Array.isArray(d)?d.length:1)+1;a("setSecondaryLevel",{client:i,cell:s,level:(l.secondaryLevel+u+c)%u})}}},disable:function(e,t){var a=e.commit,n=e.dispatch,o=t.client,i=t.cell;n("co_op/sendClick",{type:"user_disable",client:o,cell:i},{root:!0}),a("disable",{client:o,cell:i})}},pt={namespaced:!0,state:rt,getters:lt,mutations:dt,actions:ut},mt={scroll:!1,columns:"",size:"",padding:"",bgColor:"",bgImg:"",disableShadows:!1,itemNums:[],customDefaults:{}},ft={setSettings:function(e,t){Object.assign(e,t)},setNums:function(e,t){e.itemNums=t.nums},resetNums:function(e){e.itemNums=[]},setDefault:function(e,t){n["a"].set(e.customDefaults,t.file,t.defaults)}},vt={namespaced:!0,state:mt,mutations:ft},gt=a("8468"),ht={room:"",joined:!1,error:""},bt={setRoom:function(e,t){e.room=t.room},setJoined:function(e,t){e.joined=t.joined},setError:function(e,t){e.error=t.error}},yt={connect:function(e,t){var a=e.commit,n=e.dispatch;ct&&ct.close(1e3),a("setJoined",{joined:!1}),a("setError",{error:""}),ct=new WebSocket("wss://tracker-ws.zaxu.xyz"),ct.addEventListener("error",(function(){a("setError",{error:"Could not connect to server. (Server may be down)"})})),ct.addEventListener("open",(function(){ct.send(t.openData)})),ct.addEventListener("message",(function(e){n("handleMessage",{message:e.data})}))},sendClick:function(e,t){Object(gt["a"])(e),ct&&!t.client&&ct.send(JSON.stringify({type:t.type,item:t.cell,offset:t.offset}))},join:function(e,t){var a=e.dispatch;a("connect",{openData:JSON.stringify({type:"join_room",room:t.room})})},create:function(e,t){var a=e.dispatch;a("connect",{openData:JSON.stringify({type:"create_room",size:t.size})})},handleMessage:function(e,t){var a=e.commit,n=e.dispatch,o=JSON.parse(t.message);switch(o.type){case"room_created":a("setRoom",{room:o.id}),a("setJoined",{joined:!0});break;case"room_joined":a("setRoom",{room:o.id}),a("setJoined",{joined:!0});break;case"user_joined":a("tracker/addClient",{client:o.id},{root:!0});break;case"user_left":a("tracker/removeClient",{client:o.id},{root:!0});break;case"error":a("setError",{error:o.message});break;case"user_primary":n("tracker/primary",{client:o.id,cell:o.item,offset:o.offset,shift:o.shift},{root:!0});break;case"user_secondary":n("tracker/secondary",{client:o.id,cell:o.item,offset:o.offset},{root:!0});break;case"user_disable":a("tracker/disable",{client:o.id,cell:o.item},{root:!0});break}}},_t={namespaced:!0,state:ht,mutations:bt,actions:yt};n["a"].use(We["a"]);var wt=new We["a"].Store({state:{drag:!1,edit:!1},mutations:{toggleDrag:function(e){e.drag=!e.drag},toggleEdit:function(e){e.edit=!e.edit}},modules:{tracker:pt,settings:vt,co_op:_t},strict:!1,plugins:[Object(Ke["a"])({paths:["settings"]})]});n["a"].config.productionTip=!1,new n["a"]({router:Ve,store:wt,render:function(e){return e(Q)}}).$mount("#app")},e33c:function(e,t,a){"use strict";var n=a("26ae"),o=a.n(n);o.a},ed16:function(e,t,a){"use strict";var n=a("c188"),o=a.n(n);o.a},f0f2:function(e,t,a){"use strict";var n=a("2ec8"),o=a.n(n);o.a}});
//# sourceMappingURL=index.eee4242f.js.map