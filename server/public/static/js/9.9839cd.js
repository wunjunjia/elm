(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{407:function(t,e,a){var r=a(436);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(21).default)("e0f1380a",r,!0,{})},408:function(t,e,a){var r=a(438);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(21).default)("04126cae",r,!0,{})},409:function(t,e,a){var r=a(440);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(21).default)("7652b227",r,!0,{})},416:function(t,e,a){"use strict";var r=a(44),o=a.n(r),i={name:"CircleButton",props:{value:{type:Number,default:0}},data:function(){return{count:0}},computed:{variable:function(){return o.a}},watch:{value:function(t){this.count=t}},mounted:function(){this.count=this.value},methods:{decrease:function(){0!==this.count&&(this.count-=1,this.$emit("decrease"))},increase:function(t){this.count+=1,this.$emit("increase",t)}}},n=(a(435),a(0)),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circle-button"},[a("transition",{attrs:{name:"circle-button"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:t.count,expression:"count"}]},[a("elm-icon",{attrs:{name:"decrease",color:t.variable.themeColor,"font-size":44,"stop-propagation":!0},on:{click:t.decrease}})],1)]),t._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:t.count,expression:"count"}],staticClass:"count"},[t._v(t._s(t.count))]),t._v(" "),a("elm-icon",{attrs:{name:"increase",color:t.variable.themeColor,"font-size":44,"stop-propagation":!0},on:{click:t.increase}})],1)}),[],!1,null,"9e902d2e",null);e.a=s.exports},430:function(t,e,a){t.exports=a(431)},431:function(t,e,a){var r=a(432);t.exports=r},432:function(t,e,a){a(433);var r=a(17);t.exports=r.parseFloat},433:function(t,e,a){var r=a(4),o=a(434);r({global:!0,forced:parseFloat!=o},{parseFloat:o})},434:function(t,e,a){var r=a(18),o=a(135).trim,i=a(111),n=r.parseFloat,s=1/n(i+"-0")!=-1/0;t.exports=s?function(t){var e=o(String(t)),a=n(e);return 0===a&&"-"==e.charAt(0)?-0:a}:n},435:function(t,e,a){"use strict";var r=a(407);a.n(r).a},436:function(t,e,a){(e=a(20)(!1)).push([t.i,"[data-v-9e902d2e]:export{baseFontSize:75;headerHeight:84;themeColor:#008cff;primaryTextColor:#222}.circle-button[data-v-9e902d2e]{display:flex;align-items:center}.elm-icon[data-v-9e902d2e]{width:.58667rem;height:.58667rem}.count[data-v-9e902d2e]{overflow:hidden;width:.8rem;color:#222;font-size:.37333rem;text-align:center}.circle-button-enter[data-v-9e902d2e],.circle-button-leave-to[data-v-9e902d2e]{opacity:0}.circle-button-enter[data-v-9e902d2e]{transform:translateX(1.38667rem) rotate(0deg)}.circle-button-enter-to[data-v-9e902d2e],.circle-button-leave[data-v-9e902d2e]{transform:translateX(0) rotate(-1turn)}.circle-button-leave-to[data-v-9e902d2e]{transform:translateX(.58667rem) rotate(0deg)}.circle-button-enter-active[data-v-9e902d2e],.circle-button-leave-active[data-v-9e902d2e]{transition:all .2s ease}",""]),t.exports=e},437:function(t,e,a){"use strict";var r=a(408);a.n(r).a},438:function(t,e,a){(e=a(20)(!1)).push([t.i,'[data-v-112b8cfa]:export{baseFontSize:75;headerHeight:84;themeColor:#008cff;primaryTextColor:#222}.food-drawer-mask[data-v-112b8cfa]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:-1;background-color:rgba(0,0,0,.3)}.food-drawer-container[data-v-112b8cfa]{position:absolute;bottom:0;display:flex;flex-direction:column;width:100%;max-height:70%;background-color:#fff;transition:transform .2s linear}.header[data-v-112b8cfa]{display:flex;justify-content:space-between;align-items:center;padding:.4rem;background-color:#fafafa}.header .title[data-v-112b8cfa]{color:#222;font-size:.37333rem}.header .clear[data-v-112b8cfa]{color:#999;font-size:.37333rem}.scroll-wrapper[data-v-112b8cfa]{overflow:hidden;flex:1}.food-list[data-v-112b8cfa]{padding:0 .4rem}.food-list .food-item[data-v-112b8cfa]{display:flex;align-items:center;height:1.6rem;padding:.26667rem 0}.food-list img[data-v-112b8cfa]{width:1.6rem;height:1.6rem;margin-right:.26667rem;border-radius:.10667rem}.food-list .content[data-v-112b8cfa]{position:relative;display:flex;flex:1;flex-direction:column;justify-content:space-between;height:100%}.food-list .food-name[data-v-112b8cfa]{color:#222;font-size:.37333rem;font-weight:700}.food-list .price[data-v-112b8cfa]{margin-right:.10667rem;color:#ff4b33;font-size:.48rem;font-weight:700}.food-list .price[data-v-112b8cfa]:before{content:"¥";margin-right:.05333rem;color:#ff4b33;font-size:.32rem}.drawer-enter[data-v-112b8cfa],.drawer-leave-to[data-v-112b8cfa]{opacity:0}.drawer-enter .food-drawer-container[data-v-112b8cfa],.drawer-leave-to .food-drawer-container[data-v-112b8cfa]{transform:translateY(100%)}.drawer-enter-active[data-v-112b8cfa],.drawer-leave-active[data-v-112b8cfa]{transition:opacity .2s linear}',""]),t.exports=e},439:function(t,e,a){"use strict";var r=a(409);a.n(r).a},440:function(t,e,a){(e=a(20)(!1)).push([t.i,'[data-v-005f3f4d]:export{baseFontSize:75;headerHeight:84;themeColor:#008cff;primaryTextColor:#222}.shop-car-container[data-v-005f3f4d]{position:fixed;right:0;bottom:0;left:0;z-index:999;height:1.28rem}.shop-car[data-v-005f3f4d]{box-sizing:border-box;width:100%;height:100%;padding:0 .4rem;background-color:rgba(61,61,63,.9)}.car[data-v-005f3f4d],.shop-car[data-v-005f3f4d]{display:flex;align-items:center}.car[data-v-005f3f4d]{position:relative;transform:translateY(-.26667rem);justify-content:center;width:1.2rem;height:1.2rem;margin-right:.4rem;border:.13333rem solid rgba(61,61,63,.9);background-color:#333;border-radius:50%}.car.active[data-v-005f3f4d]{background-color:#008cff}.car .elm-badge[data-v-005f3f4d]{position:absolute;top:-.10667rem;right:-.05333rem}.content[data-v-005f3f4d]{flex:1}.tip[data-v-005f3f4d]{margin-bottom:.10667rem;color:#999;font-size:.37333rem;font-weight:700}.delivery-fee[data-v-005f3f4d]{color:#999;font-size:.32rem}.btn[data-v-005f3f4d]{width:2.4rem;height:.90667rem;color:#fff;font-size:.37333rem;font-weight:700;line-height:.90667rem;text-align:center;background-color:#999;border-radius:.48rem}.btn.active[data-v-005f3f4d]{background-color:#008cff}.price[data-v-005f3f4d]{margin-right:.10667rem;color:#fff;font-size:.56rem;font-weight:700}.price[data-v-005f3f4d]:before{content:"¥";margin-right:.05333rem;color:#fff;font-size:.32rem}.origin-price[data-v-005f3f4d]{position:relative;color:#999;font-size:.32rem}.origin-price[data-v-005f3f4d]:before{content:"¥";margin-right:.05333rem;color:#999;font-size:.32rem}.origin-price[data-v-005f3f4d]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:120%;height:.02667rem;background-color:#999}',""]),t.exports=e},451:function(t,e,a){var r=a(503);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,a(21).default)("3aea760c",r,!0,{})},456:function(t,e,a){"use strict";var r=a(12),o=a.n(r),i=a(16),n=a.n(i),s=a(7),c=a.n(s),l=a(1),f=a.n(l),d=a(6),u=a.n(d),p=a(5),v=a.n(p),m=a(8),h=a.n(m),g=a(10),b=a.n(g),_=a(430),w=a.n(_),C=a(82),x=a.n(C),y=a(2),z=a.n(y),k=a(9),O=a(26),$=a(61);function j(t,e){var a=b()(t);if(h.a){var r=h()(t);e&&(r=v()(r).call(r,(function(e){return u()(t,e).enumerable}))),a.push.apply(a,r)}return a}function F(t){for(var e=1;e<arguments.length;e++){var a,r=null!=arguments[e]?arguments[e]:{};if(e%2)f()(a=j(Object(r),!0)).call(a,(function(e){z()(t,e,r[e])}));else if(c.a)n()(t,c()(r));else{var i;f()(i=j(Object(r))).call(i,(function(e){o()(t,e,u()(r,e))}))}}return t}var S={name:"FoodDrawer",components:{CircleButton:a(416).a,ScrollView:$.a},props:{paddingBottom:{type:Number,default:0},visible:{type:Boolean,default:!1}},data:function(){return{dialog:!1}},computed:F({},Object(k.mapState)("shop",{shopCar:function(t){return t.restaurant.shopCar}})),watch:{visible:function(t){t&&this.$refs.scroll.reset()}},methods:F({close:function(){this.$emit("toggle")},decrease:function(t){this[O.c](t),this.$refs.scroll.reset()},increase:function(t,e){this[O.e](t)},toggle:function(){this.dialog=!this.dialog},clear:function(){this.dialog=!1,this[O.a](),this.close()}},Object(k.mapMutations)("shop",[O.e,O.c,O.a]))},B=(a(437),a(0));function P(t,e){var a=b()(t);if(h.a){var r=h()(t);e&&(r=v()(r).call(r,(function(e){return u()(t,e).enumerable}))),a.push.apply(a,r)}return a}var H={name:"ShopCar",components:{Drawer:Object(B.a)(S,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("transition",{attrs:{name:"drawer",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.visible,expression:"visible"}],staticClass:"food-drawer-mask",on:{click:function(e){return e.target!==e.currentTarget?null:(e.stopPropagation(),t.close(e))}}},[a("div",{staticClass:"food-drawer-container"},[a("header",{staticClass:"header"},[a("span",{staticClass:"title"},[t._v("已选商品")]),t._v(" "),a("div",{on:{click:function(e){return e.stopPropagation(),t.toggle(e)}}},[a("elm-icon",{attrs:{name:"trash",color:"#999","font-size":28}}),t._v(" "),a("span",{staticClass:"clear"},[t._v("清空")])],1)]),t._v(" "),a("div",{staticClass:"scroll-wrapper"},[a("scroll-view",{ref:"scroll"},[a("ul",{staticClass:"food-list",style:{paddingBottom:t.paddingBottom+"px"}},t._l(t.shopCar,(function(e){return a("li",{key:e.id,staticClass:"food-item"},[a("img",{attrs:{src:e.imagePath,alt:"food"}}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"food-name"},[t._v(t._s(e.name))]),t._v(" "),a("span",{staticClass:"price"},[t._v(t._s(e.price))]),t._v(" "),a("circle-button",{style:{position:"absolute",right:0,bottom:0,zIndex:999},attrs:{value:e.count},on:{decrease:function(a){return t.decrease(e)},increase:function(a){return t.increase(e)}}})],1)])})),0)])],1)])])]),t._v(" "),t.dialog?a("elm-dialog",{attrs:{title:"清空购物车"},on:{cancel:t.toggle,ensure:t.clear}}):t._e()],1)}),[],!1,null,"112b8cfa",null).exports},data:function(){return{visible:!1,shopCarHeight:0}},computed:function(t){for(var e=1;e<arguments.length;e++){var a,r=null!=arguments[e]?arguments[e]:{};if(e%2)f()(a=P(Object(r),!0)).call(a,(function(e){z()(t,e,r[e])}));else if(c.a)n()(t,c()(r));else{var i;f()(i=P(Object(r))).call(i,(function(e){o()(t,e,u()(r,e))}))}}return t}({price:function(){var t;return x()(t=this.shopCar).call(t,(function(t,e){return t+w()(e.price)*e.count}),0).toFixed(2)},originPrice:function(){var t;return x()(t=this.shopCar).call(t,(function(t,e){return t+w()(e.originPrice)*e.count}),0).toFixed(2)},desc:function(){return this.shopCar.length?this.price>=this.restaurant.floatMinimumOrderAmount?"去结算":"还差".concat((this.restaurant.floatMinimumOrderAmount-this.price).toFixed(2),"起送"):"¥".concat(this.restaurant.floatMinimumOrderAmount,"起送")},count:function(){var t;return x()(t=this.shopCar).call(t,(function(t,e){return t+e.count}),0)}},Object(k.mapState)("shop",{restaurant:function(t){return t.restaurant},shopCar:function(t){return t.restaurant.shopCar}})),mounted:function(){this.shopCarHeight=this.$refs["shop-car"].offsetHeight},methods:{to:function(){return this.$refs.car.$el},pay:function(){this.price<this.restaurant.floatMinimumOrderAmount||this.$notify({type:"primary",message:"功能正在开发中"})},open:function(){this.shopCar.length&&(this.visible=!0)},close:function(){this.visible=!1}}},M=(a(439),Object(B.a)(H,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"shop-car-container"},[a("drawer",{attrs:{visible:t.visible,"padding-bottom":t.shopCarHeight},on:{toggle:t.close}}),t._v(" "),a("div",{ref:"shop-car",staticClass:"shop-car",on:{click:function(e){return e.stopPropagation(),t.open(e)}}},[a("div",{staticClass:"car",class:t.shopCar.length?"active":""},[a("elm-icon",{ref:"car",attrs:{name:"car",color:t.shopCar.length?"#fff":"#999","font-size":46}}),t._v(" "),a("elm-badge",{directives:[{name:"show",rawName:"v-show",value:t.count,expression:"count"}],attrs:{value:t.count}})],1),t._v(" "),a("div",{staticClass:"content"},[t.shopCar.length?a("p",[a("span",{staticClass:"price"},[t._v(t._s(t.price))]),t._v(" "),a("span",{staticClass:"origin-price"},[t._v(t._s(t.originPrice))])]):a("p",{staticClass:"tip"},[t._v("未选购商品")]),t._v(" "),a("p",{staticClass:"delivery-fee"},[t._v(t._s(t.restaurant.floatDeliveryFee?"另需配送费¥"+t.restaurant.floatDeliveryFee:"免费配送"))])]),t._v(" "),a("div",{staticClass:"btn",class:t.price>=t.restaurant.floatMinimumOrderAmount?"active":"",on:{click:function(e){return e.stopPropagation(),t.pay(e)}}},[t._v(t._s(t.desc))])])],1)}),[],!1,null,"005f3f4d",null));e.a=M.exports},502:function(t,e,a){"use strict";var r=a(451);a.n(r).a},503:function(t,e,a){(e=a(20)(!1)).push([t.i,'[data-v-57b7a40e]:export{baseFontSize:75;headerHeight:84;themeColor:#008cff;primaryTextColor:#222}.food-container[data-v-57b7a40e]{box-sizing:border-box;overflow:hidden;width:100%;height:100%;background-color:#fafafa}.header[data-v-57b7a40e]{position:fixed;top:0;left:0;z-index:999;display:flex;align-items:center;width:100%;height:1.12rem}.header .elm-icon[data-v-57b7a40e]{width:.96rem;height:.96rem;line-height:.96rem;text-align:center}.header .title[data-v-57b7a40e]{padding-left:.10667rem;color:#222;font-size:.48rem}.image[data-v-57b7a40e]{width:100%;padding-top:100%;background-position:50%;background-repeat:no-repeat;background-size:cover}.content[data-v-57b7a40e]{position:relative;padding:.4rem;background-color:#fff}.content[data-v-57b7a40e],.food-name[data-v-57b7a40e]{margin-bottom:.26667rem}.food-name[data-v-57b7a40e]{color:#222;font-size:.42667rem;font-weight:700;line-height:.56rem}.extra[data-v-57b7a40e]{margin-bottom:.10667rem;color:#999;font-size:.32rem}.extra .sell[data-v-57b7a40e]{margin-right:.16rem}.tag[data-v-57b7a40e]{margin-bottom:.10667rem;line-height:.56rem}.price[data-v-57b7a40e]{margin-right:.10667rem;color:#ff4b33;font-size:.56rem;font-weight:700}.price[data-v-57b7a40e]:before{content:"¥";margin-right:.05333rem;color:#ff4b33;font-size:.32rem}.origin-price[data-v-57b7a40e]{position:relative;color:#999;font-size:.32rem}.origin-price[data-v-57b7a40e]:before{content:"¥";margin-right:.05333rem;color:#999;font-size:.32rem}.origin-price[data-v-57b7a40e]:after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:120%;height:.02667rem;background-color:#999}.block[data-v-57b7a40e]{padding:.4rem;color:#999;background-color:#fff}.block .title[data-v-57b7a40e]{margin-bottom:.26667rem;font-size:.37333rem}.block .desc[data-v-57b7a40e]{font-size:.32rem;line-height:.48rem;white-space:pre-wrap}.circle-button[data-v-57b7a40e]{position:absolute;right:.4rem;bottom:.4rem}.elm-tag[data-v-57b7a40e]{padding:0 .10667rem;border-color:#ffc9c1}',""]),t.exports=e},519:function(t,e,a){"use strict";a.r(e);var r=a(12),o=a.n(r),i=a(16),n=a.n(i),s=a(7),c=a.n(s),l=a(1),f=a.n(l),d=a(6),u=a.n(d),p=a(5),v=a.n(p),m=a(8),h=a.n(m),g=a(10),b=a.n(g),_=a(2),w=a.n(_),C=a(9),x=a(131),y=a(34),z=a(26),k=a(23),O=a(44),$=a.n(O),j=a(61),F=a(416),S=a(456);function B(t,e){var a=b()(t);if(h.a){var r=h()(t);e&&(r=v()(r).call(r,(function(e){return u()(t,e).enumerable}))),a.push.apply(a,r)}return a}function P(t){for(var e=1;e<arguments.length;e++){var a,r=null!=arguments[e]?arguments[e]:{};if(e%2)f()(a=B(Object(r),!0)).call(a,(function(e){w()(t,e,r[e])}));else if(c.a)n()(t,c()(r));else{var i;f()(i=B(Object(r))).call(i,(function(e){o()(t,e,u()(r,e))}))}}return t}var H={name:"Food",title:"饿了么商品详情",meta:{keyword:"elm, food",description:"这里展示了商品的详细信息，更大的美图，让您大饱眼福"},components:{ScrollView:j.a,CircleButton:F.a,ShopCar:S.a},mixins:[x.a],beforeRouteLeave:function(t,e,a){this[y.b](k.f.slideRight),a()},data:function(){return{paddingBottom:0}},computed:P({variable:function(){return $.a}},Object(C.mapState)("shop",{food:function(t){return t.food}})),mounted:function(){if(!this.food)return this.$notify({type:"primary",message:"暂时没有此商品信息"}),void this.$router.go(-1);this.paddingBottom=this.$refs["shop-car"].$el.offsetHeight,this.$refs.scroll.reset()},methods:P({back:function(){this.$router.go(-1)},decrease:function(t){this[z.c](t)},increase:function(t){this[z.e](t)}},Object(C.mapMutations)("shop",[z.e,z.c]))},M=(a(502),a(0)),A=Object(M.a)(H,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"food-container",style:{paddingBottom:t.paddingBottom+"px"}},[a("header",{staticClass:"header"},[a("elm-icon",{attrs:{name:"arrow",color:t.variable.primaryTextColor,"font-size":44,rotate:-90,"stop-propagation":!0},on:{click:t.back}}),t._v(" "),a("p",{staticClass:"title"},[t._v("商品详情")])],1),t._v(" "),t.food?a("scroll-view",{ref:"scroll"},[a("div",{staticClass:"image",style:{backgroundImage:"url("+t.food.imagePath+")"}}),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"food-name"},[t._v(t._s(t.food.name))]),t._v(" "),a("div",{staticClass:"extra"},[a("span",{staticClass:"sell"},[t._v("月售"+t._s(t.food.sell))]),t._v(" "),a("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating)+"%")])]),t._v(" "),a("div",{staticClass:"tag"},[a("elm-tag",{attrs:{color:"#eb6551"}},[t._v(t._s(t.food.discountRate)+"折")])],1),t._v(" "),a("div",[a("span",{staticClass:"price"},[t._v(t._s(t.food.price))]),t._v(" "),a("span",{staticClass:"origin-price"},[t._v(t._s(t.food.originPrice))])]),t._v(" "),a("circle-button",{attrs:{value:t.food.count},on:{decrease:function(e){return t.decrease(t.food)},increase:function(e){return t.increase(t.food)}}})],1),t._v(" "),t.food.description?a("div",{staticClass:"block"},[a("p",{staticClass:"title"},[t._v("商品简介")]),t._v(" "),a("p",{staticClass:"desc"},[t._v(t._s(t.food.description))])]):t._e()]):t._e(),t._v(" "),t.food?a("shop-car",{ref:"shop-car"}):t._e()],1)}),[],!1,null,"57b7a40e",null);e.default=A.exports}}]);
//# sourceMappingURL=9.9839cd.js.map