(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-069bfae0"],{"0e12":function(t,e,n){},b320:function(t,e,n){"use strict";var i=n("0e12"),s=n.n(i);s.a},bc10:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"haggle_top"},t._l(t.lists,function(e,i){return n("div",{key:i,staticClass:"inline"},[n("div",{staticClass:"avatar"},[n("img",{attrs:{src:e.headimgurl}})]),n("div",{staticClass:"haggle_content"},[n("span",[t._v(t._s(e.content))])])])}),0)},s=[],a=n("ed08"),c={data:function(){return{eventinfo:{},lists:[]}},created:function(){var t=this,e=this.$root.$mp.query.orderid,n=this.$root.$mp.query.haggleid;console.log(e),Object(a["h"])(a["g"]+"/haggle/Api/haggle_top",{order_id:e,haggle_id:n}).then(function(e){t.eventinfo=e.event_info,t.lists=e.lists})}},o=c,r=(n("b320"),n("17cc")),l=Object(r["a"])(o,i,s,!1,null,"9720bc78",null);e["default"]=l.exports}}]);