(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{374:function(t,e,i){},376:function(t,e,i){"use strict";var n=i(374);i.n(n).a},377:function(t,e,i){"use strict";var n={name:"ElmHeader",props:{to:{type:String,default:""},replace:{type:Boolean,default:!1}},methods:{jump:function(){this.$emit("jump"),this.to?this.replace?this.$router.replace(this.to):this.$router.push(this.to):this.$router.go(-1)}}},s=(i(376),i(0)),r=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"elm-header"},[this._t("left",[e("elm-icon",{attrs:{name:"arrow","font-size":44,rotate:-90},on:{click:this.jump}})]),this._v(" "),this._t("default"),this._v(" "),this._t("right")],2)}),[],!1,null,"71d3cc0e",null);e.a=r.exports},472:function(t,e,i){"use strict";i.r(e);var n={name:"NotFound",components:{ElmHeader:i(377).a},data:function(){return{paddingTop:0}},mounted:function(){this.paddingTop=this.$refs.header.$el.offsetHeight}},s=i(0),r=Object(s.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:{paddingTop:this.paddingTop+"px"}},[e("elm-header",{ref:"header"}),this._v(" "),e("elm-empty",{attrs:{title:"页面不存在"}})],1)}),[],!1,null,null,null);e.default=r.exports}}]);
//# sourceMappingURL=10.5944e7.js.map