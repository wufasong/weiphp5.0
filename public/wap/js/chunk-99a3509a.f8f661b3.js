(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-99a3509a"],{"130e":function(t,s,i){"use strict";i.r(s);var o=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{ref:"top_div",staticClass:"goods-detail"},[i("navbar",{attrs:{text:t.goods.title}}),t.goods.id?i("div",[i("div",{staticClass:"slide"},[i("van-swipe",{attrs:{"show-indicators":""},on:{change:t.toggleSwiper}},[t._l(t.slides,function(s,o){return i("van-swipe-item",{key:o},[i("a",{staticClass:"slide-url pic-align-center",on:{click:function(s){t.pvwImg(o)}}},[i("lazy-component",[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:s,expression:"item"}],staticClass:"slide-image",attrs:{mode:"aspectFill"}})])],1)])}),t.slides.length>0?i("div",{staticClass:"custom-indicator",attrs:{slot:"indicator"},slot:"indicator"},[t._v(t._s(t.current+1)+"/"+t._s(t.totalSwiperNum))]):t._e()],2)],1),t.goods.sale_price?i("div",{staticClass:"goods-detail__info"},[i("p",{staticClass:"goods-detail__price s-red"},[i("span",{staticClass:"icon-price"},[t._v("¥")]),t._v("\n        "+t._s(t.goods.sale_price)+"\n      ")]),t.goods.market_price>t.goods.sale_price?i("p",{staticClass:"goods__price-cost"},[t._v("¥"+t._s(t.goods.market_price))]):t._e(),i("p",{staticClass:"s-gray goods-detail__stock"},[t._v("库存"+t._s(t.goods.stock_active)+"件")]),i("p",{staticClass:"goods-detail__tt"},[t._v(t._s(t.goods.title))])]):t._e(),t.goods.tab?i("div",{staticClass:"m-list link g-flex",on:{click:function(s){t.jump(t.goods.id,t.goods.tab)}}},[i("div",{staticClass:"m-list__l g-flex__item"},[t._v("同款")]),i("i",{staticClass:"iconfont icon-fanhui right"})]):t._e(),t.goodsParam.length>0?i("div",{staticClass:"switch-card"},[i("div",{staticClass:"switch-card__hd"},[i("p",{staticClass:"switch-card__tt"},[t._v("产品参数")]),i("p",{staticClass:"switch-card__icon iconfont icon-fanhui",class:t.arrowDir,on:{click:t.toggleArrow}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:"top"==t.arrowDir,expression:"arrowDir == 'top'"}],staticClass:"switch-card__bd"},t._l(t.goodsParam,function(s,o){return i("div",{key:o,staticClass:"switch-card__item"},[i("p",{staticClass:"switch-card__param overflow-dot_row"},[t._v(t._s(s.title))]),i("p",{staticClass:"switch-card__attr overflow-dot_row"},[t._v(t._s(s.param_value))])])}),0)]):t._e(),t.goods.comment_count>0?i("div",{staticClass:"goods-comment"},[i("div",{staticClass:"m-list link"},[i("div",{staticClass:"m-list__l"},[t._v("评价1")]),i("p",{directives:[{name:"show",rawName:"v-show",value:t.goods.comment_count>10,expression:"goods.comment_count>10"}],staticClass:"m-list__c s-black"},[t._v("查看更多")]),i("i",{directives:[{name:"show",rawName:"v-show",value:t.goods.comment_count>10,expression:"goods.comment_count>10"}],staticClass:"iconfont icon-fanhui right"})]),i("div",{staticClass:"goods-comment__bd"},t._l(t.goods.comments,function(s,o){return i("div",{key:o,staticClass:"goods-comment__item"},[i("div",{staticClass:"goods-comment__left"},[i("div",{staticClass:"g-flex g-flex__updown-center"},[i("img",{staticClass:"u-head__img",attrs:{src:s.headimgurl}}),i("p",{staticClass:"goods-comment__name"},[t._v(t._s(s.username))])]),i("p",{staticClass:"goods-comment__text"},[t._v(t._s(s.content))])]),i("div",{staticClass:"goods-comment__right"},[i("img",{staticClass:"u-goods__img",attrs:{src:t.slides[0]}})])])}),0)]):t._e(),t.goods.content?i("div",{staticClass:"goods-detail__pic",domProps:{innerHTML:t._s(t.goods.content)}}):t._e(),t.diyData?i("diyGoods",{attrs:{diyData:t.diyData}}):t._e()],1):t._e(),t.slides.length>0?i("div",{staticClass:"bottom-bar"},[i("router-link",{staticClass:"bottom-bar__service",attrs:{to:"/service","open-type":"contact"}},[i("div",{staticClass:"bottom-bar__icon"}),i("p",{staticClass:"bottom-bar__tt"},[t._v("客服")])]),i("div",{staticClass:"bottom-bar__collect",on:{click:t.toggleCollect}},[i("div",{directives:[{name:"show",rawName:"v-show",value:!t.isCollect,expression:"!isCollect"}],staticClass:"bottom-bar__icon"}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isCollect,expression:"isCollect"}],staticClass:"bottom-bar__icon--active"}),i("p",{staticClass:"bottom-bar__tt"},[t._v("收藏")])]),i("router-link",{staticClass:"bottom-bar__cart",attrs:{to:"/cart","open-type":"switchTab"}},[i("div",{staticClass:"bottom-bar__icon"}),t.cartNum>0?i("span",{staticClass:"weui-badge",staticStyle:{position:"absolute",top:".2em",right:".2em"}},[t._v(t._s(t.cartNum))]):t._e(),i("p",{staticClass:"bottom-bar__tt"},[t._v("购物车")])]),i("button",{staticClass:"u-button u-button--border",on:{click:t.addCart}},[t._v("加入购物车")]),i("button",{staticClass:"u-button u-button--primary",on:{click:t.buy}},[t._v("立即购买")])],1):t._e()],1)},a=[],e=(i("c839"),i("7e96"),i("ed08")),c=i("9d8d"),r=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"diy-goods"},[t._l(t.diyData,function(s,o){return["richtext"==s.id?i("div",{staticClass:"richtext mt15",domProps:{innerHTML:t._s(s.params.content)}}):t._e(),"goods"==s.id?i("div",{staticClass:"goods mt15",class:t.goodsClass2(s.params.list_style)},t._l(s.params.goods_list,function(o,a){return i("a",{key:a,staticClass:"goods-item",attrs:{href:"/goods_detail/"+o.id}},[1==s.params.list_style?[i("div",{staticClass:"goods-item__img"},[i("img",{attrs:{src:o.img}}),1==s.params.show_price?i("p",{staticClass:"goods-item__price goods-price"},[t._v("¥"+t._s(o.market_price))]):t._e(),i("div",{staticClass:"goods-item__ft g-flex"},[i("p",{staticClass:"goods-item__title g-flex__item overflow-dot_row"},[t._v(t._s(o.title))]),1==s.params.show_btn?i("button",{staticClass:"goods-item__btn"},[t._v("立即购买")]):t._e()])])]:[i("div",{staticClass:"goods-item__img"},[i("img",{attrs:{src:o.img}})]),i("p",{staticClass:"goods-item__title g-flex__item overflow-dot_row"},[t._v(t._s(o.title))]),i("div",{staticClass:"goods-item__ft g-flex"},[1==s.params.show_price?i("p",{staticClass:"goods-item__price goods-price"},[t._v("¥"+t._s(o.market_price))]):t._e(),1==s.params.show_btn?i("button",{staticClass:"goods-item__btn"},[t._v("立即购买")]):t._e()])]],2)}),0):t._e(),"mutipic_goods"==s.id?i("div",{staticClass:"mutipic-goods mt15"},t._l(s.params.goods_list,function(o,a){return i("a",{key:"goods-"+a,staticClass:"mutipic-goods-item",class:t.goodsClass(s.params.colGoods),attrs:{href:"/goods_detail/"+o.id}},[i("div",{staticClass:"mutipic-goods-item__img"},[i("img",{attrs:{src:o.img}})]),i("p",{staticClass:"mutipic-goods-item__title g-flex__item overflow-dot_row"},[t._v(t._s(o.title))]),i("div",{staticClass:"mutipic-goods-item__ft g-flex"},[1==s.params.show_price?i("p",{staticClass:"mutipic-goods-item__price goods-price g-flex__item"},[t._v("¥"+t._s(o.market_price))]):t._e(),1==s.params.show_btn?i("button",{staticClass:"mutipic-goods-item__btn"},[t._v("立即购买")]):t._e()])])}),0):t._e(),"banner"==s.id?i("div",{staticClass:"banner mt15"},[i("van-swipe",{attrs:{"indicator-color":"red"}},t._l(s.params.banner_list,function(s,o){return i("van-swipe-item",{key:"banner-"+o},[i("a",{staticClass:"slide-url pic-align-center",attrs:{href:s.url}},[i("img",{staticClass:"slide-image",attrs:{mode:"aspectFill",src:s.pic}})]),i("div",{staticClass:"banner-ft"},[i("p",[t._v(t._s(s.title))])])])}),1)],1):t._e(),"pic"==s.id?i("div",{staticClass:"pic mt15"},t._l(s.params.pic_list,function(t,s){return i("a",{attrs:{href:t.url}},[i("img",{attrs:{src:t.pic}})])}),0):t._e(),"blank"==s.id?i("div",{key:o,staticClass:"blank mt15"},[i("p")]):t._e(),"title"==s.id?i("div",{staticClass:"title mt15",style:{align:s.params.align,background:s.params.bgColor}},[i("h3",{style:{color:s.params.maincolor}},[t._v(t._s(s.params.title))]),i("p",[t._v(t._s(s.params.subtitle))])]):t._e(),"blankline"==s.id?i("div",{staticClass:"blankline mt15"}):t._e()]})],2)},l=[],n={data:function(){return{}},props:{diyData:[Array,Object]},computed:{},methods:{goodsClass:function(t){return 2==t?"mutipic-goods-item_two":3==t?"mutipic-goods-item_three":"mutipic-goods-item_four"},goodsClass2:function(t){return 2==t?"goods-item_small":3==t?"goods-item_big":4==t?"goods-item_lists":""}}},d=n,_=(i("df07"),i("048f")),m=Object(_["a"])(d,r,l,!1,null,"72deb429",null);m.options.__file="diyGoodsDetail.vue";var g=m.exports,p=i("fade"),u={data:function(){return{current:0,slides:[],goods:[],isCollect:!1,arrowDir:"top",selfSwiperNum:1,isCartDot:!1,detailPic:"",goodsParam:[],diyData:{}}},components:{navbar:c["a"],diyGoods:g},computed:{totalSwiperNum:function(){return this.slides.length},cartNum:function(){var t=this.$store.state.cartShopNum;if(t>0)return this.isCartDot=!0,t}},methods:{toggleSwiper:function(t){this.current=t},jump:function(t,s){this.$router.push({name:"lists",params:{id:t,tab:s}})},buy:function(){var t=this.goods.goods_id;if(0==this.goods.stock_active)return Object(p["d"])("该商品已经被抢光了"),!1;this.$router.push({path:"/confirm_order/".concat(t)})},toggleArrow:function(){"top"==this.arrowDir?this.arrowDir="bottom":this.arrowDir="top"},addCart:function(){var t=this;this.$http.post(e["g"]+"shop/api/addToCart",{goods_id:this.goods.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(s){s.data>0?(Object(p["d"])("加入购物车成功"),t.$store.commit("getCartShopNum",{num:s.data})):Object(p["d"])("加入购物车失败,请直接下单购买")})},pvwImg:function(t){Object(p["b"])({images:this.slides,startPosition:t})},toggleCollect:function(t){var s=this;this.$http.post(e["g"]+"shop/api/addtocollect",{goods_id:this.goods.id,PHPSESSID:window.localStorage.getItem("PHPSESSID")}).then(function(t){1==t.data?(Object(p["d"])("加入收藏成功"),s.isCollect=!0):(Object(p["d"])("取消收藏成功"),s.isCollect=!1)})}},activated:function(){var t=this;if(!this.$route.meta.isBack){Object.assign(this.$data,this.$options.data()),this.$refs.top_div.style.background="#f9f9f9";var s=this.$route.params.id;this.$store.commit("saveData",{key:"activeOrderParams",value:""}),Object(e["h"])("shop/api/goods_detail",{id:s}).then(function(s){if(t.slides=s.goods.imgs_url,t.goods=s.goods,t.goodsParam=s.goods.goods_param,t.goods.diyData.config){t.diyData=JSON.parse(decodeURIComponent(t.goods.diyData.config));var i=t.diyData[0]["params"],o=i.title,a=i.bgColor;o&&(t.goods.title=o),a&&(t.$refs.top_div.style.background=a)}0==s.goods.is_collect?t.isCollect=!1:t.isCollect=!0})}this.$route.meta.isBack=!1},beforeRouteEnter:function(t,s,i){"confirm_order"==s.name&&(t.meta.isBack=!0),i()}},v=u,f=(i("520f"),Object(_["a"])(v,o,a,!1,null,"9998df20",null));f.options.__file="index.vue";s["default"]=f.exports},3999:function(t,s,i){"use strict";var o=i("7848"),a=i("41e6"),e=i("48e1"),c=i("31e8"),r=i("3888"),l=Object.assign;t.exports=!l||i("3f16")(function(){var t={},s={},i=Symbol(),o="abcdefghijklmnopqrst";return t[i]=7,o.split("").forEach(function(t){s[t]=t}),7!=l({},t)[i]||Object.keys(l({},s)).join("")!=o})?function(t,s){var i=c(t),l=arguments.length,n=1,d=a.f,_=e.f;while(l>n){var m,g=r(arguments[n++]),p=d?o(g).concat(d(g)):o(g),u=p.length,v=0;while(u>v)_.call(g,m=p[v++])&&(i[m]=g[m])}return i}:l},"41e6":function(t,s){s.f=Object.getOwnPropertySymbols},"520f":function(t,s,i){"use strict";var o=i("ae33"),a=i.n(o);a.a},"7e96":function(t,s,i){var o=i("a345");o(o.S+o.F,"Object",{assign:i("3999")})},ae33:function(t,s,i){},df07:function(t,s,i){"use strict";var o=i("f611"),a=i.n(o);a.a},f611:function(t,s,i){}}]);
//# sourceMappingURL=chunk-99a3509a.f8f661b3.js.map