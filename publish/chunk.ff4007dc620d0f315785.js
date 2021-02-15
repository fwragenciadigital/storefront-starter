/*! For license information please see chunk.ff4007dc620d0f315785.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(t,e,s){"use strict";s(189)},186:function(t,e,s){"use strict";var i={name:"ALink",props:{href:String,to:[String,Object]},computed:{isRouter(){return!!this.$router&&(!this.href||Boolean(this.$router.options.routes.find((({path:t})=>t===this.href))))}}},a=s(51),r=Object(a.a)(i,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isRouter?"router-link":"a",{tag:"component",attrs:{href:t.isRouter?null:t.href,to:t.isRouter?t.to||t.href:null}},[t._t("default")],2)}),[],!1,null,null,null);e.a=r.exports},187:function(t,e,s){"use strict";s(12),s(4);var i=s(26),a=s(86),r=s(68);var o={name:"APicture",props:{src:[String,Object],fallbackSrc:String,alt:String,canCalcHeight:{type:Boolean,default:!0},placeholder:{type:String,default:"/assets/img-placeholder.png"},containerBreakpoints:{type:Object,default:()=>({zoom:null,big:800,[i.$ecomConfig.get("default_img_size")||"normal"]:400})},lozadOptions:{type:Object,default:()=>({rootMargin:"350px 0px",threshold:0})}},data:()=>({sources:[],height:null,opacity:null}),computed:{defaultImgObj(){return"object"==typeof this.src&&this.src?Object(a.a)(this.src)||this.src:{}},localFallbackSrc(){const{src:t,defaultImgObj:e,fallbackSrc:s}=this;if(s)return s;const i="object"==typeof t?t.zoom?t.zoom.url:e.url:t;return i?i.replace(/\.webp$/,""):this.placeholder},localAlt(){const{alt:t,src:e,defaultImgObj:s}=this;return t||(e?s.alt||"Product":"No image")}},methods:{updateSources(){const t=[];let e;if("object"==typeof this.src){const{clientWidth:t,clientHeight:s}=this.$el,i=((t,e,s,i)=>{let a,r;for(const o in i){const n=i[o];if(void 0!==n&&t[o]){if(void 0!==r)if(null===n){if(r>=e)continue}else if(n<e||n-50<=s||null!==r&&n>r)continue;a=o,r=n}}return a})(this.src,t,s,this.containerBreakpoints),a=this.src[i],{url:r,size:o}=a||this.defaultImgObj;if(e=r,t&&o&&this.canCalcHeight){const[e,s]=o.split("x").map((t=>parseInt(t,10)));s&&(this.height="".concat(t>=e?s:t*s/e,"px"))}}else e=this.src;e&&(e.endsWith(".webp")?t.push({srcset:e,type:"image/webp"},{srcset:/\/imgs\/[0-9]{3}px/.test(e)?e.replace(/\/imgs\/[0-9]{3}px/,""):e.replace(/\.webp$/,""),type:"image/".concat(".png"===e.substr(-9,4)?"png":"jpeg")}):t.push({srcset:e})),this.sources=t}},mounted(){this.updateSources(),this.$nextTick((()=>{const t=this.$el;Object(r.a)(t,{...this.lozadOptions,loaded:t=>{const{localFallbackSrc:e}=this,s="IMG"===t.tagName?t:t.lastChild;s.style.opacity=0,s.onerror=function(){console.error(new Error("Image load error"),this),t.style.display="none";const s=document.createElement("IMG");s.src=e,t.parentNode.insertBefore(s,t.nextSibling)},s.onload=()=>{this.opacity=0,t.classList.add("loaded"),this.$nextTick((()=>{this.opacity=s.style.opacity=null,this.$emit("load")}))}}}).observe()}))}},n=(s(167),s(51)),c=Object(n.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("picture",{staticClass:"picture",style:{height:t.height,opacity:t.opacity},attrs:{"data-iesrc":t.localFallbackSrc,"data-alt":t.localAlt}},[t.sources.length?t._l(t.sources,(function(t,e){var i=t.srcset,a=t.type;return s("source",{key:e,attrs:{srcset:i,type:a}})})):s("source",{attrs:{srcset:t.localFallbackSrc}})],2)}),[],!1,null,null,null);e.a=c.exports},188:function(t,e,s){"use strict";var i=s(27),a=s(38),r=s(39),o=s(40),n=s(77);const c=(t,e)=>{const{type:s,value:i}=e;if(i)return"percentage"===s?t*(100-i)/100:t-i};var l={name:"APrices",props:{product:{type:Object,required:!0},isLiteral:Boolean,isBig:Boolean,isAmountTotal:Boolean,installmentsOption:Object,discountOption:Object,discountText:{type:[String,Boolean],default:""}},data(){return{installmentsNumber:0,monthlyInterest:0,discount:{type:null,value:0},extraDiscount:{type:null,value:0},discountLabel:this.discountText}},computed:{i19asOf:()=>Object(a.a)(i.n),i19from:()=>Object(a.a)(i.tb),i19interestFree:()=>Object(a.a)(i.Fb),i19of:()=>Object(a.a)(i.lc),i19to:()=>Object(a.a)(i.zd),i19upTo:()=>Object(a.a)(i.Hd),price(){const t=Object(r.a)(this.product);return this.extraDiscount.value?c(t,this.extraDiscount):t},comparePrice(){return Object(o.a)(this.product)?this.product.base_price:this.extraDiscount.value?Object(r.a)(this.product):void 0},hasVariedPrices(){const{variations:t}=this.product;if(t){const e=Object(r.a)(this.product);for(let s=0;s<t.length;s++){if(Object(r.a)({...this.product,...t[s]})>e)return!0}}return!1},priceWithDiscount(){return c(this.price,this.discount)},installmentValue(){if(this.installmentsNumber>=2){if(this.monthlyInterest){const t=this.monthlyInterest/100;return this.price*t/(1-Math.pow(1+t,-this.installmentsNumber))}return this.price/this.installmentsNumber}return 0}},methods:{formatMoney:n.a,updateInstallments(t){if(t){this.monthlyInterest=t.monthly_interest;const e=t.min_installment||5,s=parseInt(this.price/e,10);this.installmentsNumber=Math.min(s,t.max_number)}},updateDiscount(t){!t||t.min_amount&&!(t.min_amount<=this.price)||this.isAmountTotal&&"total"!==t.apply_at||(this.discount=t,!this.discountText&&!1!==this.discountText&&t.label&&(this.discountLabel="via ".concat(t.label)))}},watch:{price:{handler(t){this.$emit("fix-price",t)},immediate:!0}},created(){const t="object"==typeof window&&window.storefront;if(this.discountOption)this.updateDiscount(this.discountOption);else if(t){const e=()=>{const e=t.info&&t.info.apply_discount;if(e){const t=e.available_extra_discount;return t&&(this.extraDiscount=t),Object.keys(e).length>0}return!1};e()||t.on("info:apply_discount",e)}if(this.installmentsOption)this.updateInstallments(this.installmentsOption);else if(t){const e=()=>{const e=t.info&&t.info.list_payments;return!!e&&(this.updateInstallments(e.installments_option),this.updateDiscount(e.discount_option),Object.keys(e).length>0)};e()||t.on("info:list_payments",e)}}},u=(s(167),s(51)),d=Object(u.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"prices",class:{"prices--literal":t.isLiteral,"prices--big":t.isBig}},[t.comparePrice?s("span",{staticClass:"prices__compare"},[t.isLiteral?[s("small",[t._v(t._s(t.i19from))]),s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))]),s("small",[t._v(t._s(t.i19to))])]:s("s",[t._v(t._s(t.formatMoney(t.comparePrice)))])],2):t._e(),s("strong",{staticClass:"prices__value"},[t.hasVariedPrices?s("small",[t._v(" "+t._s(t.i19asOf)+" ")]):t._e(),t._v(" "+t._s(t.formatMoney(t.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[t.installmentsNumber>1?s("div",{key:"installments",staticClass:"prices__installments"},[t.isLiteral?s("small",[t._v(" "+t._s(t.i19upTo)+" ")]):t._e(),t._v(" "+t._s(t.installmentsNumber)+"x "),t.isLiteral?s("small",[t._v(" "+t._s(t.i19of)+" ")]):t._e(),s("span",[t._v(" "+t._s(t.formatMoney(t.installmentValue))+" ")]),!t.monthlyInterest&&t.isLiteral?s("small",[t._v(" "+t._s(t.i19interestFree)+" ")]):t._e()]):t._e(),"number"==typeof t.priceWithDiscount&&t.priceWithDiscount<t.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof t.discountLabel&&t.discountLabel?[s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")]),s("small",{staticClass:"prices__discount-label"},[t._v(" "+t._s(t.discountLabel)+" ")])]:[s("small",[t._v(" "+t._s(t.i19asOf)+" ")]),s("span",[t._v(" "+t._s(t.formatMoney(t.priceWithDiscount))+" ")])]],2):t._e()])],1)}),[],!1,null,null,null);e.a=d.exports},189:function(t,e,s){var i=s(212);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,s(166).default)("fd5c67d2",i,!0,{})},190:function(t,e,s){"use strict";s(47);var i=s(27),a=s(38),r=s(21),o=s(79),n=s(40),c=s(39),l=s(30),u=s.n(l),d=s(3),p=s(8),b=s(186),h=s(187),m=s(188);const g=(t,e)=>{if("object"==typeof window){t="productCard".concat(t,"Html");const s="function"==typeof window[t]?window[t](e):window[t];if("string"==typeof s)return s}};var f={name:"ProductCard",components:{ALink:b.a,APicture:h.a,APrices:m.a},props:{product:Object,productId:String,isSmall:Boolean,headingTag:{type:String,default:"h3"},buyText:String,transitionClass:{type:String,default:"animated fadeIn"},canAddToCart:{type:Boolean,default:!0},isLoaded:Boolean,installmentsOption:Object,discountOption:Object},data:()=>({body:{},isLoading:!1,isWaitingBuy:!1,isHovered:!1,error:""}),computed:{i19outOfStock:()=>Object(a.a)(i.wc),i19unavailable:()=>Object(a.a)(i.Ed),ratingHtml(){return g("Rating",this.body)},buyHtml(){return g("Buy",this.body)},footerHtml(){return g("Footer",this.body)},name(){return Object(r.a)(this.body)},strBuy(){return this.buyText||"object"==typeof window&&window.productCardBuyText||Object(a.a)(i.s)},isInStock(){return Object(o.a)(this.body)},isActive(){return this.body.available&&this.body.visible&&this.isInStock},discount(){const{body:t}=this;return Object(n.a)(t)?Math.round(100*(t.base_price-Object(c.a)(t))/t.base_price):0}},methods:{setBody(t){this.body=Object.assign({},t),delete this.body.body_html,delete this.body.body_text,delete this.body.inventory_records,delete this.body.price_change_records},fetchItem(){this.productId&&(this.isLoading=!0,Object(d.g)({url:"/products/".concat(this.productId,".json")}).then((({data:t})=>{this.$emit("update:product",t),this.setBody(t),this.$emit("update:is-loaded",!0)})).catch((t=>{console.error(t),this.body.name&&this.body.slug&&this.body.pictures||(this.error=Object(a.a)(i.O))})).finally((()=>{this.isLoading=!1})))},buy(){const t=this.body;this.$emit("buy",{product:t}),this.canAddToCart&&(this.isWaitingBuy=!0,Object(d.g)({url:"/products/".concat(t._id,".json")}).then((({data:e})=>{const i=["variations","customizations","kit_composition"];for(let t=0;t<i.length;t++){const a=e[i[t]];if(a&&a.length)return Promise.all([s.e(0),s.e(2),s.e(7),s.e(18)]).then(s.bind(null,370)).then((t=>{new u.a({render:s=>s(t.default,{props:{product:e}})}).$mount(this.$refs.quickview)}))}const{quantity:a,price:r}=e;p.a.addProduct({...t,quantity:a,price:r})})).catch((e=>{console.error(e),window.location="/".concat(t.slug)})).finally((()=>{this.isWaitingBuy=!1})))}},created(){this.product&&(this.setBody(this.product),void 0===this.product.available&&(this.body.available=!0),void 0===this.product.visible&&(this.body.visible=!0)),this.isLoaded||this.fetchItem()}},_=(s(167),s(51)),y=Object(_.a)(f,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"product-card",class:{"product-card--inactive":t.body._id&&!t.isActive,"product-card--small":t.isSmall},attrs:{"data-product-id":t.body._id,"data-sku":t.body.sku},on:{mouseover:function(e){t.isHovered=!0}}},[s("transition",{attrs:{"enter-active-class":t.transitionClass}},[t.isLoading?t._e():s("section",[t._t("discount-tag",[t.isActive&&t.discount>0?s("span",{staticClass:"product-card__offer-stamp"},[s("i",{staticClass:"fas fa-arrow-down"}),t._v(" "),s("b",[t._v(t._s(t.discount))]),t._v("% ")]):t._e()],null,{discount:t.discount}),t._t("body",[s("a-link",{staticClass:"product-card__link",attrs:{href:"/"+t.body.slug,title:t.name}},[t._t("header"),s("div",{staticClass:"product-card__pictures"},[t.body.pictures&&t.body.pictures.length?t._l(t.body.pictures.slice(0,2).reverse(),(function(e,i){return 1===t.body.pictures.length||1===i||t.isHovered?s("a-picture",{key:i,staticClass:"product-card__picture",attrs:{src:e,"can-calc-height":!1}}):t._e()})):s("a-picture",{staticClass:"product-card__picture"})],2),t._t("title",[s(t.headingTag,{tag:"component",staticClass:"product-card__name"},[t._v(" "+t._s(t.name)+" ")])])],2)]),t._t("rating",[t._m(0)]),t.body.available&&t.body.visible?t.isInStock?[t._t("prices",[s("a-prices",{staticClass:"product-card__prices",attrs:{product:t.body,"installments-option":t.installmentsOption,"discount-option":t.discountOption}})]),s("div",{staticClass:"product-card__buy fade",on:{click:t.buy}},[t._t("buy",[t.buyHtml?s("div",{domProps:{innerHTML:t._s(t.buyHtml)}}):t._e(),s("button",{staticClass:"btn btn-primary",class:t.isSmall?"btn-sm":"btn-block",attrs:{type:"button",disabled:t.isWaitingBuy}},[t.isWaitingBuy?s("span",{staticClass:"product-card__buy-loading spinner-grow spinner-grow-sm",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[t._v("Loading...")])]):t._e(),t._t("buy-button-content",[s("i",{staticClass:"fas fa-shopping-bag mr-1"}),t._v(" "+t._s(t.strBuy)+" ")])],2)])],2)]:t._t("out-of-stock",[s("p",{staticClass:"badge badge-dark"},[t._v(" "+t._s(t.i19outOfStock)+" ")])]):t._t("unavailable",[s("p",{staticClass:"badge badge-warning"},[t._v(" "+t._s(t.i19unavailable)+" ")])]),t._t("footer",[t.footerHtml?s("div",{domProps:{innerHTML:t._s(t.footerHtml)}}):t._e()])],2)]),t.isLoading?[t._t("default"),t.error?s("div",{staticClass:"alert alert-warning small",attrs:{role:"alert"}},[t._v(" "+t._s(t.error)+" ")]):t._e()]:t._e(),s("div",{ref:"quickview"})],2)}),[function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"product-card__rating",attrs:{"data-sku":t.body.sku},domProps:{innerHTML:t._s(t.ratingHtml)}})}],!1,null,null,null);e.a=y.exports},212:function(t,e,s){(e=s(165)(!1)).push([t.i,"",""]),t.exports=e},68:function(t,e,s){"use strict";const i="undefined"!=typeof document&&document.documentMode,a={rootMargin:"0px",threshold:0,load(t){if("picture"===t.nodeName.toLowerCase()){let e=t.querySelector("img"),s=!1;null===e&&(e=document.createElement("img"),s=!0),i&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),s&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){const e=t.children;let s;for(let t=0;t<=e.length-1;t++)s=e[t].getAttribute("data-src"),s&&(e[t].src=s);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));let e=",";if(t.getAttribute("data-background-delimiter")&&(e=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage=`url('${t.getAttribute("data-background-image").split(e).join("'),url('")}')`;else if(t.getAttribute("data-background-image-set")){const s=t.getAttribute("data-background-image-set").split(e);let i=s[0].substr(0,s[0].indexOf(" "))||s[0];i=-1===i.indexOf("url(")?`url(${i})`:i,1===s.length?t.style.backgroundImage=i:t.setAttribute("style",(t.getAttribute("style")||"")+`background-image: ${i}; background-image: -webkit-image-set(${s}); background-image: image-set(${s})`)}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded(){}};function r(t){t.setAttribute("data-loaded",!0)}const o=t=>"true"===t.getAttribute("data-loaded"),n=(t,e=document)=>t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t);e.a=function(t=".lozad",e={}){const{root:s,rootMargin:i,threshold:c,load:l,loaded:u}=Object.assign({},a,e);let d;"undefined"!=typeof window&&window.IntersectionObserver&&(d=new IntersectionObserver(((t,e)=>(s,i)=>{s.forEach((s=>{(s.intersectionRatio>0||s.isIntersecting)&&(i.unobserve(s.target),o(s.target)||(t(s.target),r(s.target),e(s.target)))}))})(l,u),{root:s,rootMargin:i,threshold:c}));const p=n(t,s);for(let t=0;t<p.length;t++)(b=p[t]).getAttribute("data-placeholder-background")&&(b.style.background=b.getAttribute("data-placeholder-background"));var b;return{observe(){const e=n(t,s);for(let t=0;t<e.length;t++)o(e[t])||(d?d.observe(e[t]):(l(e[t]),r(e[t]),u(e[t])))},triggerLoad(t){o(t)||(l(t),r(t),u(t))},observer:d}}}}]);
//# sourceMappingURL=chunk.ff4007dc620d0f315785.js.map