(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{251:function(t,e,n){"use strict";var r=n(28),o=n(61),i=n(112),a=n(252),s=n(253);r({target:"Promise",stat:!0},{allSettled:function(t){var e=this,n=i.f(e),r=n.resolve,c=n.reject,u=a((function(){var n=o(e.resolve),i=[],a=0,c=1;s(t,(function(t){var o=a++,s=!1;i.push(void 0),c++,n.call(e,t).then((function(t){s||(s=!0,i[o]={status:"fulfilled",value:t},--c||r(i))}),(function(t){s||(s=!0,i[o]={status:"rejected",reason:t},--c||r(i))}))})),--c||r(i)}));return u.error&&c(u.value),n.promise}})},252:function(t,e){t.exports=function(t){try{return{error:!1,value:t()}}catch(t){return{error:!0,value:t}}}},253:function(t,e,n){var r=n(9),o=n(169),i=n(60),a=n(113),s=n(102),c=n(168),u=function(t,e){this.stopped=t,this.result=e};t.exports=function(t,e,n){var l,d,f,p,h,g,m,w=n&&n.that,v=!(!n||!n.AS_ENTRIES),_=!(!n||!n.IS_ITERATOR),y=!(!n||!n.INTERRUPTED),E=a(e,w,1+v+y),S=function(t){return l&&c(l),new u(!0,t)},R=function(t){return v?(r(t),y?E(t[0],t[1],S):E(t[0],t[1])):y?E(t,S):E(t)};if(_)l=t;else{if("function"!=typeof(d=s(t)))throw TypeError("Target is not iterable");if(o(d)){for(f=0,p=i(t.length);p>f;f++)if((h=R(t[f]))&&h instanceof u)return h;return new u(!1)}l=d.call(t)}for(g=l.next;!(m=g.call(l)).done;){try{h=R(m.value)}catch(t){throw c(l),t}if("object"==typeof h&&h&&h instanceof u)return h}return new u(!1)}},358:function(t,e,n){"use strict";n.r(e);n(251),n(4);var r=n(26),o=n(3),i=n(52);e.default=(t={})=>{const{gmcMerchantId:e,dialogPosition:n}=t;if(e){const t=window.storefrontApp&&window.storefrontApp.router;if(t){const a=({name:t,params:a})=>{if("confirmation"===t&&a.json){const t=t=>{const e=new Date(Date.now());return e.setDate(e.getDate()+t),e};let s,c,u,l;const d=decodeURIComponent(a.json);if(d)try{s=JSON.parse(d)}catch(t){}if(s){const{buyers:e}=s;e&&e[0]&&(c=e[0].main_email);const n=s.shipping_lines&&s.shipping_lines[0];if(n&&n.delivery_time){let e=n.delivery_time.days;n.posting_deadline&&(e+=n.delivery_time.days),n.delivery_time.working_days&&(e*=1.25),l=t(e+3)}}c||(c=i.a.getCustomer().main_email),u||(u=r.$ecomConfig.get("country_code")),l||(l=t(14));const f=[],p=[],h={merchant_id:e,order_id:a.number||a.id,email:c,delivery_country:u,estimated_delivery_date:l.getFullYear()+"-".concat((l.getMonth()+1).toString().padStart(2,"0"),"-")+l.getDate().toString().padStart(2,"0"),opt_in_style:n||"CENTER_DIALOG"};if(s&&s.items)for(let t=0;t<s.items.length&&t<=4;t++)f.push(Object(o.g)({url:"/products/".concat(s.items[t].product_id,".json")}).then((({data:t})=>{t.gtin&&t.gtin.forEach((t=>{p.includes(t)||p.push(t)}))})).catch(console.error));Promise.allSettled(f).then((()=>{p.length&&(h.products=p.map((t=>({gtin:t})))),window.gapi.load("surveyoptin",(function(){window.gapi.surveyoptin.render(h)}))}))}};t.currentRoute&&a(t.currentRoute),t.afterEach(a)}}else console.error(new Error("Can't show opt-in dialog without `gmcMerchantId` option"))}}}]);
//# sourceMappingURL=chunk.f2ed46ac01d3ce8dd631.js.map