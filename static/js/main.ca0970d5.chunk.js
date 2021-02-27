(this["webpackJsonpecommerce-front"]=this["webpackJsonpecommerce-front"]||[]).push([[0],{141:function(e,t,a){},165:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),c=a(12),i=a.n(c),s=a(13),o=(a(141),a(219)),l=a(118),d=Object(l.a)({palette:{primary:{main:"#16253f",dark:"#111f38"},light:{main:"#f3efeb"}},typography:{fontFamily:"'Nunito Sans', sans-serif",h1:{fontSize:"2rem",fontWeight:600,letterSpacing:"0.05rem"},h2:{fontSize:"2.2rem"},subtitle2:{fontSize:"1rem",fontWeight:500,textTransform:"uppercase",letterSpacing:"0.05rem"}}}),j=a(21),u=a(16),p=a(39),b=a.n(p),h=a(53),m="[cart] Add product",x="[cart] Add cuantity",O="[cart] Remove product",g="[cart] Remove cuantity",f="[cart] Restart cart",v="[auth] Finish checking login state",y="[auth] Login",k="[auth] Logout",w="[search] Search is true",C="[search] Value to find",N="[search] Seatch is false",S=a(44),T=a.n(S),D=a(27),I=a.n(D),B=function(){return{type:v}},L=function(e){return{type:y,payload:e}},R=function(){return{type:k}},A=a(209),_=a(221),F=a(218),q=a(11),z=a(81),E=a(193),W=a(204),P=a(205),G=a(206),H=a(223),V=a(195),K=a(197),Y=a(198),M=a(207),U=a(208),J=a(106),X=a.n(J),Z=a(107),$=a.n(Z),Q=a(9),ee=a(24),te=a(199),ae=a(224),ne=a(200),re=Object(E.a)({list:{width:250},linkText:{textDecoration:"none",textTransform:"uppercase",color:"black"}}),ce=function(e){var t,a=e.navLinks,c=re(),i=Object(r.useState)({right:!1}),s=Object(ee.a)(i,2),o=s[0],l=s[1],d=function(e,t){return function(a){("keydown"!==a.type||"Tab"!==a.key&&"Shift"!==a.key)&&l(Object(Q.a)({},e,t))}};return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(te.a,{edge:"start","aria-label":"menu",onClick:d("right",!0),children:Object(n.jsx)(ne.a,{fontSize:"large",style:{color:"#16253f"}})}),Object(n.jsx)(ae.a,{anchor:"right",open:o.right,onClose:d("right",!1),children:(t="right",Object(n.jsx)("div",{className:c.list,role:"presentation",onClick:d(t,!1),onKeyDown:d(t,!1),children:Object(n.jsx)(V.a,{component:"nav",children:a.map((function(e){var t=e.title,a=e.path;return Object(n.jsx)("a",{href:a,className:c.linkText,children:Object(n.jsx)(K.a,{button:!0,children:Object(n.jsx)(Y.a,{primary:t})})},t)}))})}))})]})},ie=a(202),se=a(201),oe=function(e){var t=e.children,a=Object(ie.a)();return Object(n.jsx)(se.a,{appear:!1,direction:"down",in:!a,children:t})},le=a(203),de={position:"fixed",bottom:"20px",right:"10px",zIndex:"99"},je=function(e){var t=e.children,a=Object(ie.a)();return Object(n.jsx)(le.a,{in:a,children:Object(n.jsx)("div",{onClick:function(e){var t=(e.target.ownerDocument||document).querySelector("#back-to-top-anchor");t&&t.scrollIntoView({behavior:"smooth",block:"center"})},role:"presentation",style:de,children:t})})},ue=a(225),pe=a(226),be=a(105),he=a.n(be),me=Object(E.a)((function(e){return{typography:{padding:e.spacing(2)},input:{marginLeft:e.spacing(1),flex:1},boxSearch:{display:"flex",alignItems:"center",width:"100%"},form:{display:"flex",justifyItems:"space-between",alignItems:"center",width:"100%"},navIcons:{padding:"0 8px",color:"#16253f","&:hover":{cursor:"pointer"}}}}));function xe(){var e=me(),t=Object(r.useState)(null),a=Object(ee.a)(t,2),c=a[0],i=a[1],s=Object(u.g)(),o=Boolean(c),l=o?"simple-popover":void 0,d=Object(r.useState)(null),j=Object(ee.a)(d,2),p=j[0],b=j[1];return Object(n.jsxs)("div",{children:[Object(n.jsx)(he.a,{"aria-describedby":l,className:e.navIcons,onClick:function(e){i(e.currentTarget)}}),Object(n.jsx)(ue.a,{id:l,open:o,anchorEl:c,onClose:function(){i(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(n.jsx)(_.a,{className:e.boxSearch,children:Object(n.jsx)("form",{className:e.form,onSubmit:function(e){return function(e){e.preventDefault(),localStorage.setItem("item-to-search",p),i(null),s.push("/search?product=".concat(p))}(e)},children:Object(n.jsx)(pe.a,{className:e.input,placeholder:"Search Google Maps",inputProps:{"aria-label":"search google maps"},onChange:function(e){return function(e){console.log(e.target.value),b(e.target.value)}(e)}})})})})]})}var Oe=Object(E.a)({backgroundHeader:{backgroundColor:"white"},navDisplayFlex:{display:"flex",justifyContent:"space-between",alignItems:"center"},linkText:{textDecoration:"none",textTransform:"uppercase",color:"#16253f"},logo:{fontFamily:"'Parisienne', cursive",fontSize:"1.3rem",color:"#16253f","&:hover":{cursor:"pointer"}},customeText:{"& span":{fontSize:"0.7rem",letterSpacing:"1.5px",opacity:.9,"&:hover &:active":{opacity:1}}},cartBox:{position:"relative","&:hover":{cursor:"pointer"}},navIcons:{padding:"0 8px",color:"#16253f","&:hover":{cursor:"pointer"}},cartCircle:{alignItems:"center",borderRadius:"100%",backgroundColor:"#f6c34a",display:"flex",height:"15px",justifyContent:"center",position:"absolute",right:"0px",top:"-6px",width:"15px"},cartCircleSpan:{color:"white",fontFamily:"primary",fontSize:"10px"}}),ge=[{title:"home",path:"/"},{title:"watches",path:"/category/watches"},{title:"handbags",path:"/category/handbag"},{title:"sunglasses",path:"/category/sunglasses"}],fe=function(){var e=Oe(),t=Object(s.c)((function(e){return e.cart})).products,a=Object(s.c)((function(e){return e.auth})).uid,c=Object(s.b)(),i=Object(u.g)(),o=function(){for(var e=[],a=0;a<t.length;a++)e.push(t[a].quantity);return e.reduce((function(e,t){return e+t}),0)}();return Object(n.jsxs)(r.Fragment,{children:[Object(n.jsx)(oe,{children:Object(n.jsx)(W.a,{position:"fixed",children:Object(n.jsx)(P.a,{className:e.backgroundHeader,children:Object(n.jsxs)(G.a,{maxWidth:"lg",className:e.navDisplayFlex,children:[Object(n.jsx)(_.a,{edge:"start",color:"inherit","aria-label":"home",display:"flex",alignSelf:"center",mr:"auto",children:Object(n.jsx)(_.a,{component:"span",color:"primary",className:e.logo,onClick:function(){i.push("/")},children:"Laccy"})}),Object(n.jsx)(H.a,{smDown:!0,children:Object(n.jsx)(V.a,{component:"nav","aria-labelledby":"main navigation",className:e.navDisplayFlex,children:ge.map((function(t){var a=t.title,r=t.path;return Object(n.jsx)(j.b,{to:r,className:e.linkText,children:Object(n.jsx)(K.a,{button:!0,children:Object(n.jsx)(Y.a,{primary:a,className:e.customeText})})},a)}))})}),Object(n.jsx)(V.a,{component:"nav","aria-labelledby":"main navigation",className:e.navDisplayFlex,children:Object(n.jsxs)(K.a,{children:[Object(n.jsx)(xe,{}),Object(n.jsxs)(_.a,{className:e.cartBox,onClick:function(){i.push("/cart")},children:[Object(n.jsx)(X.a,{className:e.navIcons}),o>0&&Object(n.jsx)("div",{className:e.cartCircle,children:Object(n.jsx)("span",{className:e.cartCircleSpan,children:o})})]}),Object(n.jsx)(_.a,{children:Object(n.jsx)($.a,{className:e.navIcons,onClick:function(){!0===!!a?I.a.fire({text:"Do you want to close session?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No"}).then((function(e){e.value&&(c((function(e){localStorage.clear(),e(R())})),i.push("/login"))})):i.push("/login")}})})]})}),Object(n.jsx)(H.a,{mdUp:!0,children:Object(n.jsx)(ce,{navLinks:ge})})]})})})}),Object(n.jsx)(P.a,{id:"back-to-top-anchor"}),Object(n.jsx)(je,{children:Object(n.jsx)(M.a,{color:"primary",size:"large","aria-label":"scroll back to top",children:Object(n.jsx)(U.a,{})})})]})},ve=a(64),ye=function(){return Object(n.jsx)(A.a,{children:Object(n.jsx)(_.a,{display:"flex",justifyContent:"center",py:"1.5rem",children:Object(n.jsxs)(ve.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 Laccy ",(new Date).getFullYear(),"."]})})})},ke=function(e){var t=e.isAuthenticated,a=e.component,r=e.restricted,c=Object(z.a)(e,["isAuthenticated","component","restricted"]);return Object(n.jsx)(u.b,Object(q.a)(Object(q.a)({},c),{},{component:function(e){return!t&&r?Object(n.jsx)(a,Object(q.a)({},e)):t&&r?Object(n.jsx)(u.a,{to:"/"}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(fe,{})," ",Object(n.jsx)(a,Object(q.a)({},e)),"  ",Object(n.jsx)(ye,{})," "]})}}))},we=function(e){var t=Object(r.useRef)(!0),a=Object(r.useState)({data:null,loading:!0,error:null}),n=Object(ee.a)(a,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){return function(){t.current=!1}}),[]),Object(r.useEffect)((function(){i({data:null,loading:!0,error:null}),T.a.get(e).then((function(e){t.current&&i({loading:!1,error:null,data:e.data})})).catch((function(){i({data:null,loading:!1,error:"No se pudo cargar la info"})}))}),[e]),c},Ce=a(210),Ne=a(211),Se=a(212),Te=a(213),De=Object(E.a)((function(e){return{root:{flexGrow:1,borderRadius:0},cardContentClass:Object(Q.a)({},e.breakpoints.down("sm"),{display:"flex",justifyContent:"space-between",alignItems:"center"})}}));function Ie(e){var t=e.category,a=De(),r=Object(u.g)(),c=t.title,i=t.img,s=t.price,o=t._id;return Object(n.jsx)(Ce.a,{className:a.root,children:Object(n.jsxs)(Ne.a,{onClick:function(){var e="/product/".concat(o);r.push(e)},children:[Object(n.jsx)(Se.a,{component:"img",alt:c,height:300,image:i,title:c}),Object(n.jsxs)(Te.a,{className:a.cardContentClass,children:[Object(n.jsx)(ve.a,{gutterBottom:!0,component:"h6",children:c}),Object(n.jsxs)(ve.a,{variant:"subtitle1",children:["$",s]})]})]})})}var Be=a(214),Le=Object(E.a)((function(e){return{root:{flexGrow:1,borderRadius:0},cardContentClass:Object(Q.a)({},e.breakpoints.down("sm"),{display:"flex",justifyContent:"space-between",alignItems:"center"})}}));function Re(){var e=Le();return Object(n.jsx)(Ce.a,{className:e.root,children:Object(n.jsxs)(Ne.a,{children:[Object(n.jsx)(Be.a,{variant:"rect",height:300,width:"100%"}),Object(n.jsxs)(Te.a,{className:e.cardContentClass,children:[Object(n.jsx)(Be.a,{variant:"text"}),Object(n.jsx)(Be.a,{variant:"text"})]})]})})}var Ae=Object(E.a)((function(e){var t;return{root:{flexGrow:1,overflow:"hidden"},categoryContainer:(t={paddingTop:"2%",paddingBottom:"2%",paddingRight:"2.5%",paddingLeft:"2.5%"},Object(Q.a)(t,e.breakpoints.up("sm"),{paddingRight:"5%",paddingLeft:"5%"}),Object(Q.a)(t,e.breakpoints.up("md"),{paddingRight:"10%",paddingLeft:"10%"}),t)}}));function _e(){var e=Ae(),t=we("".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/products/watches")),a=t.data,r=t.loading,c=t.error;return Object(n.jsxs)("div",{className:e.root,children:[c?Object(n.jsx)("p",{children:"error"}):null,r?Object(n.jsx)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:Array.from(new Array(4)).map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Re,{},e)},t)}))}):Object(n.jsxs)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:[Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ve.a,{variant:"h2",children:"Watches"})}),a.productCategory.slice(0,4).map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Ie,{category:e},e._id)},t)}))]})]})}var Fe=Object(E.a)((function(e){var t;return{root:{flexGrow:1,overflow:"hidden"},categoryContainer:(t={paddingTop:"2%",paddingBottom:"2%",paddingRight:"2.5%",paddingLeft:"2.5%"},Object(Q.a)(t,e.breakpoints.up("sm"),{paddingRight:"5%",paddingLeft:"5%"}),Object(Q.a)(t,e.breakpoints.up("md"),{paddingRight:"10%",paddingLeft:"10%"}),t)}}));function qe(){var e=Fe(),t=we("".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/products/sunglasses")),a=t.data,r=t.loading,c=t.error;return Object(n.jsxs)("div",{className:e.root,children:[c?Object(n.jsx)("p",{children:"error"}):null,r?Object(n.jsx)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:Array.from(new Array(4)).map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Re,{},e)},t)}))}):Object(n.jsxs)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:[Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ve.a,{variant:"h2",children:"Sunglasses"})}),a.productCategory.slice(0,4).map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Ie,{category:e},e._id)},t)}))]})]})}var ze=Object(E.a)((function(e){var t;return{root:{flexGrow:1,overflow:"hidden"},categoryContainer:(t={paddingTop:"2%",paddingBottom:"2%",paddingRight:"2.5%",paddingLeft:"2.5%"},Object(Q.a)(t,e.breakpoints.up("sm"),{paddingRight:"5%",paddingLeft:"5%"}),Object(Q.a)(t,e.breakpoints.up("md"),{paddingRight:"10%",paddingLeft:"10%"}),t)}}));function Ee(){var e=ze(),t=we("".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/products/handbag")),a=t.data,r=t.loading,c=t.error;return Object(n.jsxs)("div",{className:e.root,children:[c?Object(n.jsx)("p",{children:"error"}):null,r?Object(n.jsx)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:Array.from(new Array(4)).map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Re,{},e)},t)}))}):Object(n.jsxs)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:[Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ve.a,{variant:"h2",children:"Handbags"})}),a.productCategory.slice(0,4).map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Ie,{category:e},e._id)},t)}))]})]})}var We=Object(E.a)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.light.main,overflow:"hidden",padding:"1rem 0.5rem"}}}));function Pe(){var e=We();return Object(n.jsxs)("div",{className:e.root,children:[Object(n.jsx)(_e,{}),Object(n.jsx)(qe,{}),Object(n.jsx)(Ee,{})]})}var Ge=Object(E.a)((function(e){var t;return{root:{flexGrow:1,backgroundColor:e.palette.light.main,overflow:"hidden"},categoryContainer:(t={padding:"1rem"},Object(Q.a)(t,e.breakpoints.up("sm"),{paddingRight:"5%",paddingLeft:"5%"}),Object(Q.a)(t,e.breakpoints.up("md"),{paddingRight:"10%",paddingLeft:"10%"}),t),categoryTitle:{textTransform:"capitalize"}}})),He=function(){var e=Ge(),t=Object(u.i)().dinamicCategory,a=we("".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/products/").concat(t)),r=a.data,c=a.loading,i=a.error;return Object(n.jsxs)("div",{className:e.root,children:[i?Object(n.jsx)("p",{children:"error"}):null,c?Object(n.jsx)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:Array.from(new Array(8)).map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Re,{},e)},t)}))}):Object(n.jsxs)(A.a,{container:!0,spacing:3,className:e.categoryContainer,children:[Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ve.a,{variant:"h2",className:e.categoryTitle,children:r.productCategory[0].category})}),r.productCategory.map((function(e,t){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Ie,{category:e},e._id)},t)}))]})]})},Ve=function(e){return{type:x,payload:e}},Ke=a(121),Ye=a(109),Me=a.n(Ye),Ue=a(110),Je=a.n(Ue),Xe=a(108),Ze=a.n(Xe),$e=Object(E.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary,marginBottom:"2rem",position:"relative"},delete:Object(Q.a)({position:"absolute",top:2,right:2,"&:hover":{cursor:"pointer"}},e.breakpoints.down("sm"),{height:".6em",width:".6em"}),image:{height:"10rem",width:"10rem"},contentBox:{alignItems:"start",display:"flex",flexDirection:"column",marginLeft:".3rem",position:"relative",width:"100%"},title:Object(Q.a)({color:e.palette.primary.main,fontSize:"1.2rem"},e.breakpoints.down("sm"),{fontSize:".9rem"}),texts:Object(Q.a)({color:"#616161",marginTop:".5rem"},e.breakpoints.down("sm"),{fontSize:".8rem"}),buttons:Object(Q.a)({color:e.palette.primary.main,"&:hover":{color:e.palette.primary.main,cursor:"pointer"}},e.breakpoints.down("sm"),{height:".8em",width:".8em"})}})),Qe=function(e){var t=e.product,a=$e(),r=Object(s.b)();return!(0===t.quantity)&&Object(n.jsx)("div",{className:a.root,children:Object(n.jsx)(A.a,{children:Object(n.jsxs)(Ke.a,{className:a.paper,square:!0,children:[Object(n.jsx)(Ze.a,{className:a.delete,size:"small",onClick:function(){r(function(e){return{type:O,payload:e}}(t))}}),Object(n.jsxs)(_.a,{display:"flex",alignContent:"center",justifyItems:"space-between",children:[Object(n.jsx)(Se.a,{className:a.image,component:"img",height:200,image:t.img,alt:t.title}),Object(n.jsxs)(_.a,{className:a.contentBox,children:[Object(n.jsx)(ve.a,{component:"h5",className:a.title,children:t.title}),Object(n.jsxs)(ve.a,{variant:"body1",className:a.texts,children:["Price: ",t.price]}),Object(n.jsxs)(ve.a,{variant:"body1",className:a.texts,children:["Quantity: ",t.quantity]}),Object(n.jsxs)(ve.a,{variant:"body1",className:a.texts,children:["Total: ",t.quantity*t.price]}),Object(n.jsxs)(_.a,{display:"flex",position:"absolute",bottom:"0",right:"0",children:[Object(n.jsx)(Me.a,{className:a.buttons,size:"small",onClick:function(){r(Ve(t))}}),Object(n.jsx)(Je.a,{className:a.buttons,size:"remove",onClick:function(){r(function(e){return{type:g,payload:e}}(t))}})]})]})]})]})})})},et=a(215),tt=a(58),at=a(111),nt=Object(E.a)((function(e){var t;return{root:{flexGrow:1,backgroundColor:e.palette.light.main,overflow:"hidden",minHeight:"90vh",margin:0},cartContainer:(t={padding:"1rem"},Object(Q.a)(t,e.breakpoints.up("sm"),{paddingRight:"5%",paddingLeft:"5%"}),Object(Q.a)(t,e.breakpoints.up("md"),{paddingRight:"10%",paddingLeft:"10%"}),t),paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},total:{alignSelf:"start",total:"1.6rem"},price:{alignSelf:"center",fontSize:"2rem",fontWeight:300,marginTop:"1rem",marginBottom:"1rem"},button:{alignSelf:"center",backgroundColor:e.palette.primary.main,color:"white",marginTop:".5rem",width:"100%","&:hover":{backgroundColor:e.palette.primary.dark}}}})),rt=function(){var e=nt(),t=Object(s.c)((function(e){return e.cart})).products,a=Object(s.c)((function(e){return e.auth})).uid,r=Object(s.b)(),c=Object(u.g)(),i=function(){for(var e=0,a=0;a<t.length;a++){e+=t[a].quantity*t[a].price}return e}(),o=Object(at.a)("pk_test_51HXzHCCyvMnU8aJFcyQSxqE0P2wIoO5Bp5ZmAVuPoWKA9uT3FpsaV5bmZ1HMZb7NK0lHLaVqpg6Nj8BR7jxLYDTj00Gs8bvRRH"),l=function(t){var i=t.result,s=Object(tt.useStripe)(),o=Object(tt.useElements)(),l=function(){var e=Object(h.a)(b.a.mark((function e(t){var n,l,d,j,u,p,h,m;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),!1!==!!a){e.next=3;break}return e.abrupt("return",I.a.fire({title:"Debes Iniciar Sesi\xf3n",icon:"warning",confirmButtonText:"OK"}).then((function(){return c.push("/login")})));case 3:if(s&&o){e.next=5;break}return e.abrupt("return");case 5:return n=o.getElement(tt.CardElement),e.next=8,s.createPaymentMethod({type:"card",card:n});case 8:if(l=e.sent,d=l.error,j=l.paymentMethod,!d){e.next=16;break}console.log("[error]",d),I.a.fire({text:"".concat(d.message),icon:"warning",confirmButtonText:"OK"}),e.next=27;break;case 16:return u=j.id,p=100*i,e.next=20,T.a.post("".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/checkout"),{id:u,amount:p});case 20:if(h=e.sent,!(m=h.data).ok){e.next=26;break}I.a.fire({title:"".concat(m.message),icon:"success",confirmButtonText:"OK"}).then((function(){return r({type:f}),c.push("/")})),e.next=27;break;case 26:return e.abrupt("return",I.a.fire({title:"".concat(m.message),icon:"warning",confirmButtonText:"OK"}));case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.jsxs)("form",{onSubmit:function(e){return l(e)},children:[Object(n.jsx)(tt.CardElement,{}),Object(n.jsx)(et.a,{type:"submit",className:e.button,disabled:!s,children:"Checkout"})]})};return Object(n.jsx)("div",{className:e.root,children:Object(n.jsx)(A.a,{className:e.cartContainer,container:!0,children:t.length>0?Object(n.jsxs)(A.a,{container:!0,spacing:3,children:[Object(n.jsx)(A.a,{item:!0,xs:12,sm:8,children:t.map((function(e){return Object(n.jsx)(Qe,{product:e},e._id)}))}),Object(n.jsx)(A.a,{item:!0,xs:12,sm:4,children:Object(n.jsx)(Ke.a,{className:e.paper,square:!0,children:Object(n.jsxs)(_.a,{display:"flex",flexDirection:"column",children:[Object(n.jsx)(ve.a,{className:e.total,children:"Total:"}),Object(n.jsxs)(ve.a,{className:e.price,children:["$",i]}),Object(n.jsx)(tt.Elements,{stripe:o,children:Object(n.jsx)(l,{result:i})})]})})})]}):Object(n.jsx)(ve.a,{variant:"h1",children:"Your cart is empty"})})})},ct=a(88),it=a.n(ct),st=a(114),ot=a.n(st),lt=a(113),dt=a.n(lt),jt=a(112),ut=a.n(jt),pt=Object(E.a)((function(e){return{containerClass:{backgroundColor:e.palette.light.main,minHeight:"100vh",padding:"2% 8%"},paperClass:{boxShadow:"none",backgroundColor:"transparent"},imgClass:{objectFit:"cover",width:"100%",height:"auto"},categoryLink:{color:e.palette.primary.main,textDecoration:"none",transition:"1s","&:hover":{textDecoration:"underline"}},extraBox:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",maxWidth:"100px","& > p":{textAlign:"center"}},buttonClass:Object(Q.a)({backgroundColor:e.palette.primary.main,borderRadius:0,color:"white",width:"100%",transition:"1s","&:hover":{backgroundColor:e.palette.primary.dark,transform:"translateY(-5px)"}},e.breakpoints.up("md"),{width:"42.5%",fontSize:"1rem"})}})),bt=function(e){var t=e.productFetch,a=pt(),r=Object(s.c)((function(e){return e.cart})).products,c=Object(s.b)();t.quantity=1,console.log(t,t.quantity);return Object(n.jsxs)(A.a,{container:!0,spacing:6,className:a.containerClass,children:[Object(n.jsx)(A.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(Ke.a,{className:a.paperClass,children:Object(n.jsx)("img",{src:t.img,alt:t.title,className:a.imgClass})})}),Object(n.jsx)(A.a,{item:!0,xs:12,md:6,px:3,children:Object(n.jsxs)(_.a,{display:"flex",flexDirection:"column",children:[Object(n.jsx)(_.a,{mb:2,children:Object(n.jsx)(ve.a,{component:"h1",variant:"h5",children:t.title})}),Object(n.jsxs)(_.a,{children:[Object(n.jsxs)(ve.a,{component:"h6",variant:"h1",children:["$",t.price]}),Object(n.jsxs)(_.a,{display:"flex",children:[Object(n.jsx)(it.a,{}),Object(n.jsx)(j.b,{to:"/category/".concat(t.category),className:a.categoryLink,children:Object(n.jsx)(ve.a,{component:"h5",children:t.category})})]})]}),Object(n.jsx)(_.a,{mb:3,children:Object(n.jsx)(ve.a,{children:t.description})}),Object(n.jsxs)(_.a,{mb:3,display:"flex",justifyContent:"space-around",alignContent:"center",children:[Object(n.jsxs)(_.a,{className:a.extraBox,children:[Object(n.jsx)(ut.a,{}),Object(n.jsx)(ve.a,{children:"Secured Payments"})]}),Object(n.jsxs)(_.a,{className:a.extraBox,children:[Object(n.jsx)(dt.a,{}),Object(n.jsx)(ve.a,{children:"30 Day Returns"})]}),Object(n.jsxs)(_.a,{className:a.extraBox,children:[Object(n.jsx)(ot.a,{}),Object(n.jsx)(ve.a,{children:"Worldwide Shipping"})]})]}),Object(n.jsx)(_.a,{mb:5,children:Object(n.jsxs)(et.a,{onClick:function(){var e=r.find((function(e){return e._id===t._id}));return console.log(e),c(void 0===e?function(e){return{type:m,payload:e}}(t):Ve(t))},className:a.buttonClass,children:["Add to cart ",Object(n.jsx)(it.a,{})]})})]})})]})},ht=Object(E.a)((function(e){return{containerClass:{backgroundColor:e.palette.light.main,minHeight:"100vh",paddingTop:"2%",paddingBottom:"2%",paddingLeft:"8%",paddingRight:"8%"},paperClass:{boxShadow:"none",backgroundColor:"transparent"},imgClass:{objectFit:"cover",width:"100%",height:"auto"},extraBoxClass:{alignItems:"center",display:"flex",flexDirection:"column",justifyContent:"center",width:"100%","& > span":{width:"80%",margin:"auto"}},buttonClass:Object(Q.a)({borderRadius:0,width:"100%"},e.breakpoints.up("md"),{width:"42.5%"})}})),mt=function(){var e=ht();return Object(n.jsxs)(A.a,{container:!0,spacing:6,className:e.containerClass,children:[Object(n.jsx)(A.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(Be.a,{variant:"rect",height:"450px",width:"100%"})}),Object(n.jsx)(A.a,{item:!0,xs:12,md:6,px:3,children:Object(n.jsxs)(_.a,{display:"flex",flexDirection:"column",children:[Object(n.jsx)(_.a,{mb:2,children:Object(n.jsx)(Be.a,{variant:"text"})}),Object(n.jsxs)(_.a,{children:[Object(n.jsx)(Be.a,{variant:"text"}),Object(n.jsx)(Be.a,{variant:"text"})]}),Object(n.jsx)(_.a,{mb:3,mt:3,children:Object(n.jsx)(Be.a,{variant:"rect",height:"120px"})}),Object(n.jsxs)(_.a,{mb:3,display:"flex",justifyContent:"space-around",alignContent:"center",children:[Object(n.jsxs)(_.a,{className:e.extraBoxClass,children:[Object(n.jsx)(Be.a,{variant:"circle",width:30,height:30}),Object(n.jsx)(Be.a,{variant:"text"})]}),Object(n.jsxs)(_.a,{className:e.extraBoxClass,children:[Object(n.jsx)(Be.a,{variant:"circle",width:30,height:30}),Object(n.jsx)(Be.a,{variant:"text"})]}),Object(n.jsxs)(_.a,{className:e.extraBoxClass,children:[Object(n.jsx)(Be.a,{variant:"circle",width:30,height:30}),Object(n.jsx)(Be.a,{variant:"text"})]})]}),Object(n.jsx)(_.a,{mb:5,children:Object(n.jsx)(Be.a,{variant:"rect",height:"25px",className:e.buttonClass})})]})})]})},xt=function(){var e=Object(u.i)().productId,t=we("".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/product/").concat(e)),a=t.data,r=t.loading,c=t.error;return Object(n.jsxs)("div",{style:{flexGrow:1,overflow:"hidden"},children:[c?Object(n.jsx)("h1",{children:"error"}):"",r?Object(n.jsx)(mt,{}):Object(n.jsx)(bt,{productFetch:a})]})},Ot=a(216),gt=a(227),ft=a(220),vt=a(217),yt=a(79),kt=a.n(yt),wt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(r.useState)(e),a=Object(ee.a)(t,2),n=a[0],c=a[1],i=function(){c(e)},s=function(e){var t=e.target;c(Object(q.a)(Object(q.a)({},n),{},Object(Q.a)({},t.name,t.value)))};return[n,s,i]};function Ct(){return Object(n.jsxs)(ve.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 Laccy ",(new Date).getFullYear(),"."]})}var Nt=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.light.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},link:{"&:hover":{cursor:"pointer"}}}}));function St(){var e=Nt(),t=Object(s.c)((function(e){return e.auth})).uid,a=Object(s.b)(),r=Object(u.g)(),c=wt({email:"",password:""}),i=Object(ee.a)(c,2),o=i[0],l=i[1],d=o.email,j=o.password;return Object(n.jsxs)(G.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(Ot.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(gt.a,{className:e.avatar,children:Object(n.jsx)(kt.a,{})}),Object(n.jsx)(ve.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){if(e.preventDefault(),a(function(e,t){return function(){var a=Object(h.a)(b.a.mark((function a(n){var r,c,i;return b.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r="".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/auth/login"),a.prev=1,a.next=4,T()({method:"POST",url:r,data:{email:e,password:t}});case 4:c=a.sent,i=c.data,console.log(i),i.ok&&(localStorage.setItem("token",i.token),localStorage.setItem("token-init-date",(new Date).getTime()),n(L({uid:i.user._id,name:i.user.name}))),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(1),a.t0.response&&I.a.fire({text:"".concat(a.t0.response.data.message)});case 13:case"end":return a.stop()}}),a,null,[[1,10]])})));return function(e){return a.apply(this,arguments)}}()}(d,j)),!0===t)return r.push("/")},children:[Object(n.jsx)(ft.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,value:d,onChange:l}),Object(n.jsx)(ft.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:l}),Object(n.jsx)(et.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign In"}),Object(n.jsx)(A.a,{container:!0,children:Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)(vt.a,{className:e.link,onClick:function(){return r.push("/register")},variant:"body2",children:"Don't have an account? Sign Up"})})})]})]}),Object(n.jsx)(_.a,{mt:8,children:Object(n.jsx)(Ct,{})})]})}function Tt(){return Object(n.jsxs)(ve.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 Laccy ",(new Date).getFullYear(),"."]})}var Dt=Object(E.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.light.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},link:{"&:hover":{cursor:"pointer"}}}}));function It(){var e=Dt(),t=Object(s.b)(),a=Object(u.g)(),r=wt({name:"",email:"",password:"",password2:""}),c=Object(ee.a)(r,2),i=c[0],o=c[1],l=i.name,d=i.email,j=i.password,p=i.password2;return Object(n.jsxs)(G.a,{component:"main",maxWidth:"xs",children:[Object(n.jsx)(Ot.a,{}),Object(n.jsxs)("div",{className:e.paper,children:[Object(n.jsx)(gt.a,{className:e.avatar,children:Object(n.jsx)(kt.a,{})}),Object(n.jsx)(ve.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(n.jsxs)("form",{className:e.form,noValidate:!0,onSubmit:function(e){if(e.preventDefault(),j.length>6)return I.a.fire({text:"The password must be at least 6 characters"});j!==p?I.a.fire({text:"Passwords don't match"}):t(function(e,t,a){return function(){var n=Object(h.a)(b.a.mark((function n(r){var c,i,s;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c="".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/auth/register"),n.prev=1,n.next=4,T()({method:"POST",url:c,data:{email:e,password:t,name:a}});case 4:i=n.sent,(s=i.data).ok&&(localStorage.setItem("token",s.token),localStorage.setItem("token-init-date",(new Date).getTime()),r(L({uid:s.user._id,name:s.user.name}))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),n.t0.response&&I.a.fire({text:"".concat(n.t0.response.data.message)});case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e){return n.apply(this,arguments)}}()}(d,j,l))},children:[Object(n.jsxs)(A.a,{container:!0,spacing:2,children:[Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ft.a,{autoComplete:"fname",name:"name",variant:"outlined",required:!0,fullWidth:!0,id:"firstName",label:"Name",autoFocus:!0,value:l,onChange:o})}),Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ft.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:d,onChange:o})}),Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ft.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:j,onChange:o})}),Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(ft.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password2",label:"Repet Password",type:"password",id:"password2",autoComplete:"current-password",value:p,onChange:o})})]}),Object(n.jsx)(et.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,children:"Sign Up"}),Object(n.jsx)(A.a,{container:!0,justify:"flex-end",children:Object(n.jsx)(A.a,{item:!0,children:Object(n.jsx)(vt.a,{className:e.link,onClick:function(){return a.push("/login")},variant:"body2",children:"Already have an account? Sign in"})})})]})]}),Object(n.jsx)(_.a,{mt:5,children:Object(n.jsx)(Tt,{})})]})}var Bt=Object(E.a)((function(e){var t;return{input:{width:"100%"},resultsContainer:(t={backgroundColor:e.palette.light.main,minHeight:"90vh",padding:"1rem"},Object(Q.a)(t,e.breakpoints.up("sm"),{paddingRight:"5%",paddingLeft:"5%"}),Object(Q.a)(t,e.breakpoints.up("md"),{paddingRight:"10%",paddingLeft:"10%"}),t),searchGrid:{marginBottom:"2rem"}}})),Lt=function(){var e=Bt(),t=Object(u.g)(),a=Object(u.h)().search.slice(1).split("&")[0].split("=")[1],c=we("".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/search?product=").concat(a)),i=c.data,s=c.loading,o=Object(r.useState)(null),l=Object(ee.a)(o,2),d=l[0],j=l[1];return Object(n.jsxs)(A.a,{container:!0,className:e.resultsContainer,children:[Object(n.jsx)(A.a,{item:!0,xs:12,className:e.searchGrid,children:Object(n.jsx)("form",{onSubmit:function(e){e.preventDefault(),t.push({pathname:"/search",search:"?product=".concat(d)})},children:Object(n.jsx)(ft.a,{autoFocus:!0,className:e.input,placeholder:"Search Product",inputProps:{"aria-label":"search google maps"},variant:"outlined",margin:"normal",onChange:function(e){j(e.target.value)}})})}),s?Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(_.a,{display:"flex",justifyContent:"center",children:Object(n.jsx)(F.a,{})})}):Object(n.jsx)(A.a,{container:!0,spacing:3,children:Array.isArray(i.products)?i.products.map((function(e){return Object(n.jsx)(A.a,{item:!0,xs:12,sm:6,md:3,children:Object(n.jsx)(Ie,{category:e})},e._id)})):Object(n.jsxs)(A.a,{item:!0,xs:12,children:[Object(n.jsx)(ve.a,{variant:"h2",children:i.message})," "]})})]})};function Rt(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.auth})),a=t.checking,c=t.uid;return Object(r.useEffect)((function(){e(function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://ecommerce-backend-app-ts.herokuapp.com/api","/auth/profile"),n=localStorage.getItem("token")||"",e.prev=2,e.next=5,T()({method:"GET",url:a,headers:{"x-token":n}});case 5:r=e.sent,(c=r.data).ok?(localStorage.setItem("token",c.token),localStorage.setItem("token-init-date",(new Date).getTime()),t(L({uid:c.user._id,name:c.user.name}))):t(B()),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("catch error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),a?Object(n.jsx)(A.a,{container:!0,children:Object(n.jsx)(A.a,{item:!0,xs:12,children:Object(n.jsx)(_.a,{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",children:Object(n.jsx)(F.a,{})})})}):Object(n.jsx)(j.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(ke,{exact:!0,path:"/login",component:St,isAuthenticated:!!c,restricted:!0}),Object(n.jsx)(ke,{exact:!0,path:"/register",component:It,isAuthenticated:!!c,restricted:!0}),Object(n.jsx)(ke,{exact:!0,path:"/search",component:Lt,isAuthenticated:!!c,restricted:!1}),Object(n.jsx)(ke,{exact:!0,path:"/cart",component:rt,isAuthenticated:!!c,restricted:!1}),Object(n.jsx)(ke,{exact:!0,path:"/category/:dinamicCategory",component:He,isAuthenticated:!!c,restricted:!1}),Object(n.jsx)(ke,{exact:!0,path:"/product/:productId",component:xt,isAuthenticated:!!c,restricted:!1}),Object(n.jsx)(ke,{exact:!0,path:"/",component:Pe,isAuthenticated:!!c,restricted:!1}),Object(n.jsx)(u.a,{from:"*",to:"/"})]})})})}var At=a(115),_t=a(31),Ft=a(116),qt=a(80),zt=a(117),Et=a.n(zt),Wt=a(63),Pt={products:[]},Gt={checking:!0},Ht={isTrue:!1,searchProduct:null},Vt={key:"root",storage:Et.a,whitelist:["cart"]},Kt=Object(_t.c)({cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(q.a)(Object(q.a)({},e),{},{products:[].concat(Object(Wt.a)(e.products),[t.payload])});case x:return Object(q.a)(Object(q.a)({},e),{},{products:Object(Wt.a)(e.products.map((function(e){return e._id===t.payload._id?Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity+=1}):e})))});case O:return{products:Object(Wt.a)(e.products.filter((function(e){return e._id!==t.payload._id})))};case g:return Object(q.a)(Object(q.a)({},e),{},{products:Object(Wt.a)(e.products.map((function(e){return e._id===t.payload._id?Object(q.a)(Object(q.a)({},e),{},{quantity:e.quantity-1}):e})))});case f:return Pt;default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Gt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(q.a)(Object(q.a)(Object(q.a)({},e),t.payload),{},{checking:!1});case v:return Object(q.a)(Object(q.a)({},e),{},{checking:!1});case k:return{checking:!1};default:return e}},search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ht,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(q.a)(Object(q.a)({},e),{},{isTrue:!0});case C:return Object(q.a)(Object(q.a)({},e),{},{search:t.payload});case N:return Object(q.a)(Object(q.a)({},e),{},{isTrue:!1});default:return e}}}),Yt=Object(qt.a)(Vt,Kt),Mt="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_t.d,Ut=Object(_t.e)(Yt,Mt(Object(_t.a)(Ft.a))),Jt=Object(qt.b)(Ut);i.a.render(Object(n.jsx)(o.a,{theme:d,children:Object(n.jsx)(s.a,{store:Ut,children:Object(n.jsx)(At.a,{persistor:Jt,children:Object(n.jsx)(Rt,{})})})}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.ca0970d5.chunk.js.map