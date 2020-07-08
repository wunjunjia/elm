(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{374:function(t,e,r){},375:function(t,e,r){},376:function(t,e,r){"use strict";var n=r(374);r.n(n).a},377:function(t,e,r){"use strict";var n={name:"ElmHeader",props:{to:{type:String,default:""}},methods:{jump:function(){this.$emit("jump"),this.to?this.$router.push(this.to):this.$router.go(-1)}}},a=(r(376),r(0)),i=Object(a.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"elm-header"},[this._t("left",[e("elm-icon",{attrs:{name:"arrow","font-size":44,rotate:-90},on:{click:this.jump}})]),this._v(" "),this._t("default"),this._v(" "),this._t("right")],2)}),[],!1,null,"38334378",null);e.a=i.exports},378:function(t,e,r){"use strict";r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return c}));var n=r(379),a=r.n(n),i=r(21);function s(t,e){try{sessionStorage.setItem(t,a()(e))}catch(t){Object(i.i)({type:"danger",message:"数据异常"})}}function o(t){try{return JSON.parse(sessionStorage.getItem(t))}catch(t){return Object(i.i)({type:"danger",message:"数据异常"}),null}}function c(t){return sessionStorage.removeItem(t)}},379:function(t,e,r){t.exports=r(380)},380:function(t,e,r){var n=r(381);t.exports=n},381:function(t,e,r){r(382);var n=r(16);n.JSON||(n.JSON={stringify:JSON.stringify}),t.exports=function(t,e,r){return n.JSON.stringify.apply(null,arguments)}},382:function(t,e,r){var n=r(4),a=r(51),i=r(20),s=a("JSON","stringify"),o=/[\uD800-\uDFFF]/g,c=/^[\uD800-\uDBFF]$/,u=/^[\uDC00-\uDFFF]$/,l=function(t,e,r){var n=r.charAt(e-1),a=r.charAt(e+1);return c.test(t)&&!u.test(a)||u.test(t)&&!c.test(n)?"\\u"+t.charCodeAt(0).toString(16):t},f=i((function(){return'"\\udf06\\ud834"'!==s("\udf06\ud834")||'"\\udead"'!==s("\udead")}));s&&n({target:"JSON",stat:!0,forced:f},{stringify:function(t,e,r){var n=s.apply(null,arguments);return"string"==typeof n?n.replace(o,l):n}})},383:function(t,e,r){"use strict";var n=r(131),a=r(60),i=r(132),s=r(34),o={name:"ListScrollView",components:{ScrollView:a.a,ElmFinish:i.a},mixins:[n.a],props:{dataSource:{type:Array,default:function(){return[]}},probeType:{type:Number,default:0},interval:{type:Number,default:300},loading:{type:Boolean,default:!1},finish:{type:Boolean,default:!1}},data:function(){return{px2rem:s.a}},watch:{dataSource:function(){this.reset()},loading:function(){this.reset()}},mounted:function(){var t=this;this.$refs.scroll.on("scroll",(function(e){var r=e.y;t.parentHeight>=t.contentHeight||t.parentHeight+t.interval>=t.contentHeight+r&&!t.loading&&!t.finish&&t.$emit("loadmore")}))},methods:{scrollTo:function(t,e){var r=t.x,n=t.y;this.$refs.scroll.scrollTo({x:r,y:n},e)},getScroll:function(){return this.$refs.scroll}}},c=(r(384),r(0)),u=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("scroll-view",{ref:"scroll",attrs:{"probe-type":t.probeType}},[r("div",{staticClass:"list-container",style:{minHeight:t.parentHeight+"px",paddingBottom:t.dataSource.length&&t.finish?""+t.px2rem(112):0}},[t._t("default"),t._v(" "),r("elm-loading",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}]}),t._v(" "),t.dataSource.length||t.loading?t._e():r("elm-empty"),t._v(" "),r("elm-finish",{directives:[{name:"show",rawName:"v-show",value:t.dataSource.length&&t.finish,expression:"dataSource.length && finish"}]})],2)])}),[],!1,null,"5be1a916",null);e.a=u.exports},384:function(t,e,r){"use strict";var n=r(375);r.n(n).a},386:function(t,e,r){},400:function(t,e,r){"use strict";var n=r(80),a=r.n(n),i=r(22),s=r.n(i),o=r(378),c=r(23);e.a={methods:{saveData:function(t){var e=t.city,r=t.adcode,n=t.longitude,a=t.latitude;Object(o.c)(c.e.city,{city:e,adcode:r,longitude:n,latitude:a})},locate:function(t){var e=this;s.a.get("https://restapi.amap.com/v3/geocode/geo",{params:{key:c.a,address:t}}).then((function(r){var n=r.data;if("1"===n.status){var i=n.geocodes[0],s=i.adcode,o=i.location.split(","),c=a()(o,2),u=c[0],l=c[1];e.saveData({city:t,adcode:s,longitude:u,latitude:l}),e.$router.push("/address")}else e.$notify({type:"danger",message:"获取数据失败"})}))}}}},402:function(t,e,r){"use strict";var n=r(386);r.n(n).a},404:function(t,e,r){},433:function(t,e,r){"use strict";var n={name:"CityList",props:{dataSource:{type:Array,default:function(){return[]}}},methods:{locate:function(t){this.$emit("locate",t)}}},a=(r(402),r(0)),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",{staticClass:"group-city-list"},t._l(t.dataSource,(function(e){var n=e.id,a=e.name;return r("li",{key:n,staticClass:"group-city-item",on:{click:function(e){return e.stopPropagation(),t.locate(a)}}},[t._v(t._s(a))])})),0)}),[],!1,null,"1827edb8",null);e.a=i.exports},444:function(t,e,r){"use strict";var n=r(404);r.n(n).a},468:function(t,e,r){"use strict";r.r(e);var n=r(65),a=r.n(n),i=r(5),s=r.n(i),o=r(14),c=r.n(o),u=r(134),l=r.n(u),f=r(54),d=r.n(f),h=r(400),p=r(377),m=r(383),v=r(433),g={name:"CitySearch",components:{ElmHeader:p.a,ListScrollView:m.a,List:v.a},mixins:[h.a],props:{groupCity:{type:Array,default:function(){return[]}}},data:function(){return{search:"",result:[]}},watch:{search:function(t){var e;if(this.$refs.list.scrollTo({y:0}),""!==t){if(1===t.length){var r=t.toUpperCase(),n=r.charCodeAt();if(n>=65&&n<=90){var i,o=d()(i=this.groupCity).call(i,(function(t){return t.letter===r}));if(!o)return;return void(this.result=o.cities)}}this.result=l()(e=this.groupCity).call(e,(function(e,r){var n;return c()(e).call(e,s()(n=r.cities).call(n,(function(e){var r;return a()(r=e.name).call(r,t)})))}),[])}else this.result=[]}},methods:{blur:function(){this.$refs.search.blur()}}},y=(r(444),r(0)),S=Object(y.a)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"city-search fullscreen-fixed-container"},[r("elm-header",{attrs:{to:"/city"}},[r("div",{staticClass:"search-container"},[r("elm-search",{ref:"search",attrs:{placeholder:"输入城市名或首字母查询"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)]),t._v(" "),r("main",{staticClass:"scroll-wrapper",on:{touchstart:t.blur}},[r("list-scroll-view",{ref:"list",attrs:{"data-source":t.result,finish:!0}},[r("list",{attrs:{"data-source":t.result},on:{locate:t.locate}})],1)],1)],1)}),[],!1,null,"e5487154",null);e.default=S.exports}}]);
//# sourceMappingURL=8.2beacb.js.map