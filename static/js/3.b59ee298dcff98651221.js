webpackJsonp([3],{582:function(e,n,t){function i(e){t(622)}var o=t(10)(t(601),t(634),i,null,null);e.exports=o.exports},595:function(e,n,t){"use strict";function i(){var e=l()({},a.b,{platform:"h5",uin:0,needNewCode:1});return t.i(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",e,a.c)}function o(){var e=l()({},a.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return C.a.get("/api/getDiscList",{params:e}).then(function(e){return A.a.resolve(e.data)})}function r(e){var n=l()({},a.b,{disstid:e,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,format:"json"});return C.a.get("/api/getSongList",{params:n}).then(function(e){return A.a.resolve(e.data)})}n.b=i,n.c=o,n.a=r;var s=t(91),A=t.n(s),d=t(90),l=t.n(d),c=t(205),a=t(67),m=t(208),C=t.n(m)},598:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(211),o=t(133);n.default={name:"slider",data:function(){return{dots:[],currentPageIndex:0}},props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},mounted:function(){var e=this;setTimeout(function(){e._setSliderWidth(),e._initDots(),e._initSlider(),e.autoPlay&&e._play()},20),window.addEventListener("resize",function(){e.slider&&(e._setSliderWidth(!0),e.slider.refresh())})},methods:{_setSliderWidth:function(e){this.children=this.$refs.sliderGroup.children;for(var n=0,i=this.$refs.slider.clientWidth,r=0;r<this.children.length;r++){var s=this.children[r];t.i(o.c)(s,"slider-item"),s.style.width=i+"px",n+=i}this.loop&&!e&&(n+=2*i),this.$refs.sliderGroup.style.width=n+"px"},_initSlider:function(){var e=this;this.slider=new i.a(this.$refs.slider,{scrollX:!0,scrollY:!1,momentum:!1,snap:{loop:this.loop,threshold:.3,speed:400},click:!0}),this.slider.on("scrollEnd",function(){var n=e.slider.getCurrentPage().pageX;e.loop&&(n-=1),e.currentPageIndex=n,e.autoPlay&&(clearTimeout(e.timer),e._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var e=this,n=this.currentPageIndex+1;this.loop&&(n+=1),this.timer=setTimeout(function(){e.slider.goToPage(n,0,400)},this.interval)}},destroyed:function(){clearTimeout(this.timer)}}},601:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=t(58),o=t.n(i),r=t(206),s=t.n(r),A=t(68),d=t.n(A),l=t(628),c=t.n(l),a=t(595),m=t(67),C=t(89),p=t(49);n.default={mixins:[C.c],data:function(){return{recommends:[],discList:[]}},created:function(){this._getRecommend(),this._getDiscList()},methods:o()({selectItem:function(e){this.$router.push({path:"/recommend/"+e.dissid}),this.setDisc(e)},handlePlaylist:function(e){var n=e.length>0?"60px":"";this.$refs.recommend.style.bottom=n,this.$refs.scroll.refresh()},_getRecommend:function(){var e=this;t.i(a.b)().then(function(n){n.code===m.a&&(e.recommends=n.data.slider)})},_getDiscList:function(){var e=this;t.i(a.c)().then(function(n){n.code===m.a&&(e.discList=n.data.list)})},loadImage:function(){this.checkLoaded||(this.checkLoaded=!0,this.$refs.scroll.refresh())}},t.i(p.b)({setDisc:"SET_DISC"})),components:{Slider:c.a,Scroll:d.a,Loading:s.a}}},612:function(e,n,t){n=e.exports=t(578)(!0),n.push([e.i,".recommend{position:fixed;width:100%;top:88px;bottom:0}.recommend .recommend-content{height:100%;overflow:hidden}.recommend .recommend-content .slider-wrapper{position:relative;width:100%;overflow:hidden}.recommend .recommend-content .recommend-list .list-title{height:65px;line-height:65px;text-align:center;font-size:14px;color:#ffcd32}.recommend .recommend-content .recommend-list .item{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 20px 20px}.recommend .recommend-content .recommend-list .item .icon{-webkit-box-flex:0;-ms-flex:0 0 60px;flex:0 0 60px;width:60px;padding-right:20px}.recommend .recommend-content .recommend-list .item .text{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-flex:1;-ms-flex:1;flex:1;line-height:20px;overflow:hidden;font-size:14px}.recommend .recommend-content .recommend-list .item .text .name{margin-bottom:10px;color:#fff}.recommend .recommend-content .recommend-list .item .text .desc{color:hsla(0,0%,100%,.3)}.recommend .recommend-content .loading-container{position:absolute;width:100%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}","",{version:3,sources:["C:/Users/broke/Desktop/vue-music/src/components/recommend/recommend.vue"],names:[],mappings:"AACA,WACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,8BACE,YAAa,AACb,eAAiB,CAClB,AACD,8CACE,kBAAmB,AACnB,WAAY,AACZ,eAAiB,CAClB,AACD,0DACE,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,eAAgB,AAChB,aAAe,CAChB,AACD,oDACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,8BAA+B,AACvB,sBAAuB,AAC/B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,mBAA0B,CAC3B,AACD,0DACE,mBAAoB,AAChB,kBAAmB,AACf,cAAe,AACvB,WAAY,AACZ,kBAAoB,CACrB,AACD,0DACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,iBAAkB,AAClB,gBAAiB,AACjB,cAAgB,CACjB,AACD,gEACE,mBAAoB,AACpB,UAAY,CACb,AACD,gEACE,wBAA6B,CAC9B,AACD,iDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,mCAAoC,AAC5B,0BAA4B,CACrC",file:"recommend.vue",sourcesContent:["\n.recommend {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.recommend .recommend-content {\n  height: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .slider-wrapper {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.recommend .recommend-content .recommend-list .list-title {\n  height: 65px;\n  line-height: 65px;\n  text-align: center;\n  font-size: 14px;\n  color: #ffcd32;\n}\n.recommend .recommend-content .recommend-list .item {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding: 0 20px 20px 20px;\n}\n.recommend .recommend-content .recommend-list .item .icon {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 60px;\n          flex: 0 0 60px;\n  width: 60px;\n  padding-right: 20px;\n}\n.recommend .recommend-content .recommend-list .item .text {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  line-height: 20px;\n  overflow: hidden;\n  font-size: 14px;\n}\n.recommend .recommend-content .recommend-list .item .text .name {\n  margin-bottom: 10px;\n  color: #fff;\n}\n.recommend .recommend-content .recommend-list .item .text .desc {\n  color: rgba(255,255,255,0.3);\n}\n.recommend .recommend-content .loading-container {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n}"],sourceRoot:""}])},615:function(e,n,t){n=e.exports=t(578)(!0),n.push([e.i,".slider{min-height:1px}.slider .slider-group{position:relative;overflow:hidden;white-space:nowrap}.slider .slider-group .slider-item{float:left;-webkit-box-sizing:border-box;box-sizing:border-box;overflow:hidden;text-align:center}.slider .slider-group .slider-item a{display:block;width:100%;overflow:hidden;text-decoration:none}.slider .slider-group .slider-item img{display:block;width:100%}.slider .dots{position:absolute;right:0;left:0;bottom:12px;text-align:center;font-size:0}.slider .dots .dot{display:inline-block;margin:0 4px;width:8px;height:8px;border-radius:50%;background:hsla(0,0%,100%,.5)}.slider .dots .dot.active{width:20px;border-radius:5px;background:hsla(0,0%,100%,.8)}","",{version:3,sources:["C:/Users/broke/Desktop/vue-music/src/base/slider/slider.vue"],names:[],mappings:"AACA,QACE,cAAgB,CACjB,AACD,sBACE,kBAAmB,AACnB,gBAAiB,AACjB,kBAAoB,CACrB,AACD,mCACE,WAAY,AACZ,8BAA+B,AACvB,sBAAuB,AAC/B,gBAAiB,AACjB,iBAAmB,CACpB,AACD,qCACE,cAAe,AACf,WAAY,AACZ,gBAAiB,AACjB,oBAAsB,CACvB,AACD,uCACE,cAAe,AACf,UAAY,CACb,AACD,cACE,kBAAmB,AACnB,QAAS,AACT,OAAQ,AACR,YAAa,AACb,kBAAmB,AACnB,WAAa,CACd,AACD,mBACE,qBAAsB,AACtB,aAAc,AACd,UAAW,AACX,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC,AACD,0BACE,WAAY,AACZ,kBAAmB,AACnB,6BAAkC,CACnC",file:"slider.vue",sourcesContent:["\n.slider {\n  min-height: 1px;\n}\n.slider .slider-group {\n  position: relative;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.slider .slider-group .slider-item {\n  float: left;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  text-align: center;\n}\n.slider .slider-group .slider-item a {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n  text-decoration: none;\n}\n.slider .slider-group .slider-item img {\n  display: block;\n  width: 100%;\n}\n.slider .dots {\n  position: absolute;\n  right: 0;\n  left: 0;\n  bottom: 12px;\n  text-align: center;\n  font-size: 0;\n}\n.slider .dots .dot {\n  display: inline-block;\n  margin: 0 4px;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: rgba(255,255,255,0.5);\n}\n.slider .dots .dot.active {\n  width: 20px;\n  border-radius: 5px;\n  background: rgba(255,255,255,0.8);\n}"],sourceRoot:""}])},622:function(e,n,t){var i=t(612);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(579)("22e63c2a",i,!0,{})},625:function(e,n,t){var i=t(615);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);t(579)("513d5e5a",i,!0,{})},628:function(e,n,t){function i(e){t(625)}var o=t(10)(t(598),t(637),i,null,null);e.exports=o.exports},634:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"recommend",staticClass:"recommend"},[t("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:e.discList}},[t("div",[e.recommends.length?t("div",{staticClass:"slider-wrapper"},[t("slider",e._l(e.recommends,function(n){return t("div",[t("a",{attrs:{href:n.linkUrl}},[t("img",{staticClass:"needsclick",attrs:{src:n.picUrl},on:{load:e.loadImage}})])])}),0)],1):e._e(),e._v(" "),t("div",{staticClass:"recommend-list"},[t("h1",{staticClass:"list-title"},[e._v("热门歌单推荐")]),e._v(" "),t("ul",e._l(e.discList,function(n){return t("li",{staticClass:"item",on:{click:function(t){e.selectItem(n)}}},[t("div",{staticClass:"icon"},[t("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),e._v(" "),t("div",{staticClass:"text"},[t("h2",{staticClass:"name",domProps:{innerHTML:e._s(n.creator.name)}}),e._v(" "),t("p",{staticClass:"desc",domProps:{innerHTML:e._s(n.dissname)}})])])}),0)])]),e._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!e.discList.length,expression:"!discList.length"}],staticClass:"loading-container"},[t("loading")],1)]),e._v(" "),t("router-view")],1)},staticRenderFns:[]}},637:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{ref:"slider",staticClass:"slider"},[t("div",{ref:"sliderGroup",staticClass:"slider-group"},[e._t("default")],2),e._v(" "),t("div",{staticClass:"dots"},e._l(e.dots,function(n,i){return t("span",{staticClass:"dot",class:{active:e.currentPageIndex===i}})}),0)])},staticRenderFns:[]}}});
//# sourceMappingURL=3.b59ee298dcff98651221.js.map