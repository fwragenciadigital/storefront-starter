(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{237:function(e,t,r){"use strict";var i=r(27),s=r(38),n=r(77),a={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0}},computed:{deadlineStr(){const e=this.shippingLine,t=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let r=e.posting_deadline?e.posting_deadline.days:0;return e.delivery_time&&(r+=e.delivery_time.days),"".concat(Object(s.a)(i.Hd)," ").concat(r," ").concat(Object(s.a)(t?i.Nd:i.X))},freightValueStr(){const e="number"==typeof this.shippingLine.total_price?this.shippingLine.total_price:this.shippingLine.price;return e?Object(n.a)(e):Object(s.a)(i.pb)}}},d=r(51),o=Object(d.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"shipping-line"},[r("strong",[e._v(" "+e._s(e.deadlineStr)+" ")]),r("span",{staticClass:"mx-2"},[e._v(" "+e._s(e.freightValueStr)+" ")])])}),[],!1,null,null,null);t.a=o.exports},369:function(e,t,r){"use strict";r.r(t);var i=r(114),s=r(8),n=r(52),a=r(164),d={name:"confirmation",components:{EcOrderInfo:r(261).a},data:()=>({canUpsertCart:!0}),computed:{...Object(i.c)(["orders","customer"]),orderId(){return this.$route.params.id},order:{get(){return this.orders.find((({_id:e})=>e===this.orderId))||{_id:this.orderId}},set(e){if(e&&e._id===this.orderId){const t=this.orders.concat(),r=t.find((({_id:t})=>t===e._id));r?Object.assign(r,e):t.push(e),this.setOrders(t),this.$route.params.json||this.$router.push({params:{json:encodeURIComponent(JSON.stringify(e))}})}}}},methods:{...Object(i.d)(["addOrder","setOrders","resetCart"]),...Object(i.b)(["saveCustomer"]),handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:e}=this.order;e&&"cancelled"!==e&&(s.a.data.completed=!0,this.orderId&&(s.a.data.orders||(s.a.data.orders=[]),s.a.data.orders.push(this.orderId)),Object(a.c)().then(this.resetCart))}}},created(){const{customer:e}=this;n.a.checkAuthorization()||e.main_email&&e.doc_number&&n.a.fetchLogin(e.main_email,e.doc_number).then((()=>{this.saveCustomer({ecomPassport:n.a}),this.handleUpsertCart()}))},mounted(){n.a.checkAuthorization()&&this.handleUpsertCart()}},o=r(51),c=Object(o.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"confirmation"}},[r("ec-order-info",{attrs:{order:e.order,isNew:!0},on:{"update:order":function(t){e.order=t}}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);
//# sourceMappingURL=chunk.1e473be25ef444118206.js.map