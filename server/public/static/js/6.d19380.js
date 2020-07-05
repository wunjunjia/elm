(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{364:function(t,e,n){},366:function(t,e,n){"use strict";var r=n(364);n.n(r).a},367:function(t,e,n){"use strict";var r={name:"ElmHeader",props:{to:{type:String,default:""}},methods:{jump:function(){this.$emit("jump"),this.to?this.$router.push(this.to):this.$router.go(-1)}}},i=(n(366),n(0)),a=Object(i.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"elm-header"},[this._t("left",[e("elm-icon",{attrs:{name:"arrow","font-size":44,rotate:-90},on:{click:this.jump}})]),this._v(" "),this._t("default"),this._v(" "),this._t("right")],2)}),[],!1,null,"38334378",null);e.a=a.exports},368:function(t,e,n){"use strict";n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return c}));var r=n(369),i=n.n(r),a=n(17);function s(t,e){try{sessionStorage.setItem(t,i()(e))}catch(t){Object(a.i)({type:"danger",message:"数据异常"})}}function o(t){try{return JSON.parse(sessionStorage.getItem(t))}catch(t){return Object(a.i)({type:"danger",message:"数据异常"}),null}}function c(t){return sessionStorage.removeItem(t)}},369:function(t,e,n){t.exports=n(370)},370:function(t,e,n){var r=n(371);t.exports=r},371:function(t,e,n){n(372);var r=n(8);r.JSON||(r.JSON={stringify:JSON.stringify}),t.exports=function(t,e,n){return r.JSON.stringify.apply(null,arguments)}},372:function(t,e,n){var r=n(2),i=n(47),a=n(20),s=i("JSON","stringify"),o=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,l=function(t,e,n){var r=n.charAt(e-1),i=n.charAt(e+1);return c.test(t)&&!u.test(i)||u.test(t)&&!c.test(r)?"\\u"+t.charCodeAt(0).toString(16):t},f=a((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&r({target:"JSON",stat:!0,forced:f},{stringify:function(t,e,n){var r=s.apply(null,arguments);return"string"==typeof r?r.replace(o,l):r}})},376:function(t,e,n){},390:function(t,e,n){"use strict";var r=n(76),i=n.n(r),a=n(16),s=n.n(a),o=n(368),c=n(50);e.a={methods:{saveData:function(t){var e=t.city,n=t.adcode,r=t.longitude,i=t.latitude;Object(o.c)(c.d.city,{city:e,adcode:n,longitude:r,latitude:i})},locate:function(t){var e=this;s.a.get("https://restapi.amap.com/v3/geocode/geo",{params:{key:c.a,address:t}}).then((function(n){var r=n.data;if("1"===r.status){var a=r.geocodes[0],s=a.adcode,o=a.location.split(","),c=i()(o,2),u=c[0],l=c[1];e.saveData({city:t,adcode:s,longitude:u,latitude:l}),e.$router.go(-1)}else e.$notify({type:"danger",message:"获取数据失败"})}))}}}},391:function(t,e,n){},392:function(t,e,n){"use strict";var r=n(376);n.n(r).a},393:function(t,e,n){},423:function(t,e,n){"use strict";var r={name:"CityList",props:{dataSource:{type:Array,default:function(){return[]}}},methods:{locate:function(t){this.$emit("locate",t)}}},i=(n(392),n(0)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"group-city-list"},t._l(t.dataSource,(function(e){var r=e.id,i=e.name;return n("li",{key:r,staticClass:"group-city-item",on:{click:function(e){return e.stopPropagation(),t.locate(i)}}},[t._v(t._s(i))])})),0)}),[],!1,null,"1827edb8",null);e.a=a.exports},427:function(t,e,n){t.exports=n(428)},428:function(t,e,n){var r=n(429);t.exports=r},429:function(t,e,n){var r=n(430),i=Array.prototype;t.exports=function(t){var e=t.sort;return t===i||t instanceof Array&&e===i.sort?r:e}},430:function(t,e,n){n(431);var r=n(25);t.exports=r("Array").sort},431:function(t,e,n){"use strict";var r=n(2),i=n(48),a=n(43),s=n(20),o=n(104),c=[],u=c.sort,l=s((function(){c.sort(void 0)})),f=s((function(){c.sort(null)})),h=o("sort");r({target:"Array",proto:!0,forced:l||!f||!h},{sort:function(t){return void 0===t?u.call(a(this)):u.call(a(this),i(t))}})},432:function(t,e,n){"use strict";var r=n(391);n.n(r).a},433:function(t,e,n){"use strict";var r=n(393);n.n(r).a},455:function(t,e,n){"use strict";n.r(e);var r=n(19),i=n.n(r),a=n(31),s=n.n(a),o=n(13),c=n.n(o),u=n(3),l=n.n(u),f=n(9),h=n.n(f),d=n(4),v=n.n(d),p=n(14),y=n.n(p),g=n(18),m=n.n(g),C=n(76),_=n.n(C),b=n(427),$=n.n(b),S=n(24),x=n.n(S),w=n(5),O=n.n(w),D=n(16),j=n.n(D),k=n(15),E=n(181),A=n(50),F=n(125),N=n(390),J=n(26),L=n(367),Y=n(56),I=n(30),M=n.n(I),P={name:"LetterNav",props:{letters:{type:Array,default:function(){return[]}}},data:function(){return{index:0,clientY:0,height:0}},mounted:function(){var t,e,n=this.$refs["letter-nav"];this.height=n.offsetHeight/this.letters.length,this.clientY=n.getBoundingClientRect().y,this.bindStart=M()(t=this.start).call(t,this),this.bindMove=M()(e=this.move).call(e,this),n.addEventListener("touchstart",this.bindStart,!1),n.addEventListener("touchmove",this.bindMove,!1)},beforeDestroy:function(){var t=this.$refs["letter-nav"];t.removeEventListener("touchstart",this.bindStart,!1),t.removeEventListener("touchmove",this.bindMove,!1)},methods:{start:function(t){t.preventDefault(),t.stopPropagation();var e=Math.floor((t.touches[0].clientY-this.clientY)/this.height);this.transform(e)},move:function(t){t.preventDefault(),t.stopPropagation();var e=Math.floor((t.touches[0].clientY-this.clientY)/this.height);e<0?e=0:e>this.letters.length-1&&(e=this.letters.length-1),this.transform(e)},transform:function(t){this.index=t,this.$emit("transform",this.index)}}},H=(n(432),n(0)),R=Object(H.a)(P,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{ref:"letter-nav",staticClass:"letter-nav"},t._l(t.letters,(function(e){return n("li",{key:e,ref:"letter-nav-item",refInFor:!0,staticClass:"letter-nav-item"},[t._v(t._s(e))])})),0)}),[],!1,null,"cb379e98",null).exports,z=n(423);function B(t,e){var n=m()(t);if(y.a){var r=y()(t);e&&(r=v()(r).call(r,(function(e){return h()(t,e).enumerable}))),n.push.apply(n,r)}return n}var T={name:"City",components:{ElmHeader:L.a,ScrollView:Y.a,LetterNav:R,List:z.a},mixins:[N.a,F.a],beforeRouteLeave:function(t,e,n){this[J.b](A.e.slideRight),n()},data:function(){return{currentCity:"",hotCity:[],groupCity:[],loading:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var n,r=null!=arguments[e]?arguments[e]:{};if(e%2)l()(n=B(Object(r),!0)).call(n,(function(e){O()(t,e,r[e])}));else if(c.a)s()(t,c()(r));else{var a;l()(a=B(Object(r))).call(a,(function(e){i()(t,e,h()(r,e))}))}}return t}({letters:function(){var t;return x()(t=this.groupCity).call(t,(function(t){return t.letter}))}},Object(k.mapState)("global",{location:function(t){return t.location}})),mounted:function(){var t=this;this.location.initial?(this.currentCity=this.location.city,this.saveData(this.location)):this.getCurrentCity();var e=E.a.get("city");if(e){var n=e.hotCity,r=e.groupCity;return this.hotCity=n,this.groupCity=r,void this.reset()}this.getData().then((function(){E.a.set("city",{hotCity:t.hotCity,groupCity:t.groupCity},{maxAge:6e4,deep:!1}),t.reset()}))},methods:{reset:function(){this.$refs.scroll&&this.$refs.scroll.reset()},getData:function(){var t=this;return this.loading=!0,j.a.get("/api/city/list").then((function(e){var n,r,i,a=e.data;0===a.code?(t.hotCity=x()(n=a.data.hot_city).call(n,(function(t){return{id:t.city_id,name:t.city_name}})),t.groupCity=x()(r=a.data.city_nav).call(r,(function(t){var e;return{letter:t.idx,cities:x()(e=t.cities).call(e,(function(t){return{id:t.city_id,name:t.city_name}}))}})),$()(i=t.groupCity).call(i,(function(t,e){return t.letter<e.letter?-1:1}))):t.$notify({type:"danger",message:"获取数据失败"})})).finally((function(){t.loading=!1}))},transform:function(t){this.$refs.scroll.scrollToElement(this.$refs.letters[t])},getCurrentCity:function(){var t=this;return j.a.get("https://restapi.amap.com/v3/ip",{params:{key:A.a}}).then((function(e){var n=e.data;if("1"!==n.status)throw new Error;t.currentCity=n.city;var r=n.rectangle.split(";")[0].split(","),i=_()(r,2),a=i[0],s=i[1];t.saveData({city:n.city,adcode:n.adcode,longitude:a,latitude:s})}))}}},V=(n(433),Object(H.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"city-container"},[n("elm-header",[n("div",{staticClass:"search-container"},[n("router-link",{attrs:{to:"/city/search"}},[n("p",{staticClass:"placeholder"},[n("span",{staticClass:"icon"},[n("elm-icon",{attrs:{name:"search",color:"#999","font-size":36}})],1),t._v("输入城市名或首字母查询")])])],1)]),t._v(" "),n("div",{staticClass:"scroll-wrapper"},[n("scroll-view",{ref:"scroll"},[n("h1",{staticClass:"title"},[t._v("当前定位城市")]),t._v(" "),n("p",{staticClass:"content",on:{click:function(e){return e.stopPropagation(),t.locate(t.currentCity)}}},[t._v(t._s(t.currentCity))]),t._v(" "),n("h1",{staticClass:"title"},[t._v("热门城市")]),t._v(" "),n("ul",{staticClass:"hot-city-list"},t._l(t.hotCity,(function(e){var r=e.id,i=e.name;return n("li",{key:r,staticClass:"hot-city-item",on:{click:function(e){return e.stopPropagation(),t.locate(i)}}},[t._v(t._s(i))])})),0),t._v(" "),t._l(t.groupCity,(function(e){var r=e.letter,i=e.cities;return n("div",{key:r},[n("h1",{ref:"letters",refInFor:!0,staticClass:"title"},[t._v(t._s(r))]),t._v(" "),n("list",{attrs:{"data-source":i},on:{locate:t.locate}})],1)})),t._v(" "),n("elm-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]})],2)],1),t._v(" "),t.letters.length?n("letter-nav",{attrs:{letters:t.letters},on:{transform:t.transform}}):t._e(),t._v(" "),n("transition",{attrs:{name:"drawer-left"}},[n("router-view",{attrs:{"group-city":t.groupCity}})],1)],1)}),[],!1,null,"f081c292",null));e.default=V.exports}}]);
//# sourceMappingURL=6.d19380.js.map