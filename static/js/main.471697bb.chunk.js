(this["webpackJsonpnews-recommendation-frontend"]=this["webpackJsonpnews-recommendation-frontend"]||[]).push([[0],{158:function(e,t,a){e.exports=a.p+"static/media/logo.30793e60.png"},171:function(e,t,a){e.exports=a(324)},182:function(e,t,a){e.exports={theme:"#fec132",themeBg:"#f7f7f7"}},183:function(e,t,a){e.exports={theme:"#fec132",themeBg:"#f7f7f7"}},324:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),s=a(21),i=a(25),l=(a(180),a(181),a(182),a(183),a(31)),u=a(32),m=a(34),d=a(33),p=a(35),h=a(52),E=a(325),f=a(326),g=a(327),b=a(328),v=a(329),O=a(330),y=a(342),j=a(343),S=a(344),k=a(333),N=a(331),I=a(332),w=a(341),C=a(159),A=a(158),_={logo:a.n(A).a},L="UPDATE_LOADING",x="GET_ITEMS",R="GET_ITEMS_SUCCESS",T="GET_ITEMS_FAILURE",M="ITEMS_FILTER_CHANGE",P="CLEAR_ITEMS_LIST",D="RESET_STORE",U="SAVE_USER",H="USER_LOGOUT",q={NEWSAPI_SEARCH:"NEWSAPI_SEARCH",NEWSAPI_HEADLINES:"NEWSAPI_HEADLINES",RECOMMENDATIONS:"RECOMMENDATIONS",LIKED:"LIKED"},W=function(){return{type:D}},G=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).toggle=function(){return a.setState({isOpen:!a.isOpen})},a.adocSearch=function(){var e;a.props.dispatch((e={search:a.state.query,skip:0},{type:M,payload:e})),a.props.dispatch(W()),a.props.history.push("/search")},a.resetHome=function(){a.props.dispatch(W()),a.props.history.push("/home")},a.reacordQuery=function(e){a.setState({query:e})},a.handleEnter=function(e){"Enter"===e.key&&a.adocSearch()},a.state={query:"",isOpen:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this,a=localStorage.getItem("user");return r.a.createElement(E.a,{light:!0,color:"light",expand:"md"},r.a.createElement(f.a,{onClick:function(){return t.resetHome()}},r.a.createElement("img",{src:(e="logo",_[e]),alt:"logo",width:"35",height:"35"})),r.a.createElement(g.a,{onClick:this.toggle}),r.a.createElement(b.a,{isOpen:this.isOpen,navbar:!0},r.a.createElement(v.a,{className:"nav-bar"},r.a.createElement(O.a,{className:"search-bar"},r.a.createElement(N.a,{className:"search-bar-content"},r.a.createElement(I.a,{value:this.state.query,onChange:function(e){return t.reacordQuery(e.target.value)},onKeyPress:this.handleEnter}),r.a.createElement(w.a,{addonType:"append"},r.a.createElement(C.a,{color:"primary",onClick:this.adocSearch},"Search")))),r.a.createElement("div",{className:"nav-flushright"},a?r.a.createElement(y.a,{nav:!0,inNavbar:!0},r.a.createElement(j.a,{caret:!0,nav:!0},"Me"),r.a.createElement(S.a,{right:!0},r.a.createElement(s.b,{to:"recommendations"},r.a.createElement(k.a,null," Recommendations ")," "),r.a.createElement(k.a,{divider:!0}),r.a.createElement(s.b,{to:"liked"},r.a.createElement(k.a,null," Liked ")," "),r.a.createElement(k.a,{divider:!0}),r.a.createElement(s.b,{to:"login"},r.a.createElement(k.a,null," Logout ")," "))):r.a.createElement(O.a,null,r.a.createElement(s.b,{to:"login"}," Login "))))))}}]),t}(r.a.Component),K=Object(h.g)((function(e){return r.a.createElement(G,e)})),B=Object(i.b)((function(e){return{filters:e.itemsReducer.filters}}))(K),F=function(e){var t=e.width,a=void 0===t?150:t,n=e.height,c=void 0===n?150:n,o=e.colorFirst,s=void 0===o?"#1d3f72":o,i=e.colorSecond,l=void 0===i?"#5699d2":i,u=e.strokeWidth,m=void 0===u?4:u,d=e.radiusFirst,p=void 0===d?40:d,h=e.radiusSecond,E=void 0===h?35:h;return r.a.createElement("svg",{width:a,height:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-double-ring"},r.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c1}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",fill:"none",strokeLinecap:"round",r:p,strokeWidth:m,stroke:s,strokeDasharray:"62.83185307179586 62.83185307179586",transform:"rotate(199.69 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius2}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c2}}","ng-attr-stroke-dasharray":"{{config.dasharray2}}","ng-attr-stroke-dashoffset":"{{config.dashoffset2}}",fill:"none",strokeLinecap:"round",r:E,strokeWidth:m,stroke:l,strokeDasharray:"54.97787143782138 54.97787143782138",strokeDashoffset:"54.97787143782138",transform:"rotate(-199.69 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;-360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})))},J=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("div",{className:"loading"},r.a.createElement(F,null)),r.a.createElement(B,null),r.a.createElement("div",{className:"main-app"},this.props.children))}}]),t}(r.a.Component),V=Object(i.b)((function(e){return{loading:e.loadingReducer.loadState,favourite_team:e.userReducer.favourite_team}}))(J),z=a(162),Q=a.n(z),Y=a(168),$=a(87),X=a(26),Z=a.n(X),ee=a(86),te=a(36),ae=a(167),ne=a.n(ae),re=function(e){var t=e.method,a=void 0===t?"get":t,n=e.apiBaseUrl,r=e.reqUrl,c=e.reqOpts,o=e.data,s=void 0===o?{}:o,i=e.headers,l=void 0===i?{"content-type":"application/json",Accept:"application/json"}:i;return new Promise(function(){var e=Object(ee.a)(Z.a.mark((function e(t,o){var i,u;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i="".concat(n),r&&(i="".concat(n,"/").concat(r)),c&&(i="".concat(i,"?").concat(c)),u={method:a,url:i,data:s,headers:l},"get"===a.toLowerCase()&&delete u.data,ne()(Object(te.a)({},u)).then((function(e){t(e)})).catch((function(e){o(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},ce=function(e){return e.id||(e.id=e.url||e.title),e},oe=function(e){return!(!e.title||!e.description&&!e.content)},se=a(64),ie=a.n(se),le="ea0f26bbe06b44b898f0f0a80af00c7d",ue=function(e){var t=e.method,a=e.reqUrl,n=e.reqOpts,r=e.data,c=void 0===r?{}:r,o=e.source,s=e.cached,i=void 0===s||s,l=e.headers,u=void 0===l?{"content-type":"application/json",Accept:"application/json"}:l,m="INVALID";if(o)switch(o){case q.NEWSAPI_HEADLINES:m="https://newsapi.org/v2/top-headlines",n="apiKey=".concat(le,"&").concat(n);break;case q.NEWSAPI_SEARCH:m="https://newsapi.org/v2/everything",n="apiKey=".concat(le,"&").concat(n);break;case q.LIKED:case q.RECOMMENDATIONS:var d=localStorage.getItem("user"),p=(d?JSON.parse(d):{}).token,h=void 0!==p&&p;u=h?Object(te.a)({},u,{Authorization:"Bearer ".concat(h)}):u,m="https://surkhiya.herokuapp.com";break;default:m="https://surkhiya.herokuapp.com"}else m="https://surkhiya.herokuapp.com";var E="".concat(m).concat(a).concat(n);if("get"===t.toLowerCase()&&i){var f=ie.a.get(E);if(f)return new Promise((function(e,t){e(f)})).catch((function(e){return console.log(e)}))}var g={method:t,apiBaseUrl:m,data:c,headers:u};return a&&(g.reqUrl=a),n&&(g.reqOpts=n),re(g).then((function(e){switch(o){case q.NEWSAPI_HEADLINES:case q.NEWSAPI_SEARCH:e.data=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter(oe).map(ce)}(e.data.articles)}return ie.a.set(E,e,10),new Promise((function(t,a){t(e)})).catch((function(e){return console.log(e)}))}))},me=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={urlToImage:"",liked:e.ids.includes(e.item.id)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.item;e.urlToImage&&this.setState({urlToImage:e.urlToImage})}},{key:"likeHandler",value:function(){var e=Object(ee.a)(Z.a.mark((function e(t){var a,n,r,c;return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.item,n=this.state.liked,t.preventDefault(),t.stopPropagation(),this.setState({liked:!n}),r="",c="",n?(r="dislike",c=a.id):(r="like",c=a),e.next=10,ue({method:"POST",source:q.LIKED,cached:!1,reqUrl:r,data:c});case 10:console.log("item",a);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.item,a=t.description,n=t.url,c=t.title,o=t.content,s=this.state,i=s.urlToImage,l=s.liked,u=a||"",m=o||"",d=u.length>=m.length?u:m;return r.a.createElement("a",{rel:"noopener noreferrer",href:n,target:"_blank",key:this.props.keyValue,style:this.props.style,className:"a-no-style"},r.a.createElement("div",{className:"MatchCard"},r.a.createElement("div",{className:"MatchCard_detail"},r.a.createElement("div",{className:"MatchCard_title_bar"},r.a.createElement("strong",{className:"MatchCard_title"},c),r.a.createElement(C.a,{size:"sm",color:l?"success":"secondary",className:"MatchCard_like",onClick:function(t){return e.likeHandler(t)}},l?"-":"^")),r.a.createElement("div",{className:"MatchCard_content"},r.a.createElement("div",{className:"MatchCard_desc"},d),i?r.a.createElement("div",{className:"MatchCard_img"},r.a.createElement("img",{src:i,alt:"img"})):r.a.createElement("div",null)))))}}]),t}(r.a.Component),de=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(m.a)(this,Object(d.a)(t).call(this,e));var n=localStorage.getItem("likes");return a.state={ids:n?JSON.parse(n):[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.matches;return r.a.createElement("div",{className:"MatchesList"},r.a.createElement("div",{className:"app-container"},r.a.createElement($.c,null,(function(a){var n=a.height,c=a.isScrolling,o=a.registerChild,s=a.onChildScroll,i=a.scrollTop;return r.a.createElement("div",{className:"WindowScroller"},r.a.createElement($.a,{disableHeight:!0},(function(a){var l=a.width;return r.a.createElement("div",{ref:o},r.a.createElement($.b,{autoHeight:!0,height:n,width:l,scrollTop:i,isScrolling:c,onScroll:s,overscanRowCount:4,rowCount:t.length,rowHeight:180,rowRenderer:function(a){var n=a.index,c=a.isScrolling,o=a.isVisible,s=a.key,i=a.style;return r.a.createElement(me,Object.assign({ids:e.state.ids,item:t[n],keyValue:s},{index:n,isScrolling:c,key:s,isVisible:o,style:i}))}}))})))}))))}}]),t}(r.a.Component),pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).loadMore=function(){var e=a.props,t=e.dispatch,n=e.itemsApiInProgress,r=e.type;!n&&t({type:x,payload:r})},e.dispatch(W()),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){if(!ie.a.get("startup"))var e=ue({method:"GET",source:q.RECOM,cached:!1,reqUrl:"vanillalist",reqOpts:"limit=10"}).then((function(t){return ie.a.set("startup",e.data,30)}))}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.itemsApiInError,n=e.filters,c=e.totalItemCount,o=n.skip;return r.a.createElement("div",{className:"Home"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"center Home_body_container"},r.a.createElement(Q.a,{pageStart:0,loadMore:this.loadMore,style:{width:"100%"},hasMore:!a&&o<=c,loader:r.a.createElement("div",{key:"loading"})},t.length?r.a.createElement(de,{matches:t}):r.a.createElement("div",{className:"Home_noResult"},r.a.createElement(Y.a,{size:60}),r.a.createElement("h4",{className:"title"},"No result found"))))))}}]),t}(r.a.Component),he=Object(i.b)((function(e){return{source:e.itemsReducer.source,loading:e.loadingReducer.loadState,items:e.itemsReducer.items,itemsApiInProgress:e.itemsReducer.itemsApiInProgress,itemsApiInError:e.itemsReducer.itemsApiInError,totalItemCount:e.itemsReducer.totalItemCount,filters:e.itemsReducer.filters}}))(pe),Ee=a(27),fe=a(345),ge=a(334),be=a(335),ve=a(336),Oe=a(337),ye=a(338),je=a(339),Se=a(340),ke=a(63),Ne=a.n(ke),Ie=function(e){return(!e||!e.length)&&"Feild is required"},we=function(e){return{type:L,payload:e}};var Ce=Object(i.b)()((function(e){var t=Object(n.useState)(""),a=Object(Ee.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(Ee.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(""),p=Object(Ee.a)(d,2),h=p[0],E=p[1],f=Object(n.useState)(!1),g=Object(Ee.a)(f,2),b=g[0],v=g[1],O=Object(n.useState)(""),y=Object(Ee.a)(O,2),j=y[0],S=y[1],k=Object(n.useState)(!0),N=Object(Ee.a)(k,2),w=N[0],A=N[1];Object(n.useEffect)((function(){return function(){x()}}),[]);var _=function(e){var t="",a="";return e?(m(!1),v(!1)):(t=Ie(c),a=Ie(h),m(t),v(a)),!(!c||!h||t||a)},L=function(e){"username"===e.target.name?o(e.target.value):E(e.target.value),_(e.target.name)},x=function(){A(!1)};return r.a.createElement(fe.a,{isOpen:w,toggle:function(){},className:"Login",centered:!0,backdrop:!1},r.a.createElement(ge.a,{className:"Login_body"},r.a.createElement("h2",{className:"title"},"ACCOUNT LOGIN"),r.a.createElement(be.a,{onSubmit:function(t){if(t.preventDefault(),_()){var a={username:c,password:h};e.dispatch(we(!0)),ue({method:"POST",reqUrl:"auth/signin",data:a}).then((function(t){var a;console.log("res",t),delete t.data._id,localStorage.setItem("user",JSON.stringify(t.data)),e.dispatch((a=t.data,{type:U,payload:a})),e.dispatch(we(!1)),e.history.push("/home")})).catch((function(t){e.dispatch(we(!1));var a=Ne()(t,"response.data","");S(a||"Oops! something went wrong")}))}}},r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{for:"Username"},"Username"),r.a.createElement(I.a,{invalid:!!u,type:"text",onChange:L,name:"username",value:c,placeholder:"Enter username"}),r.a.createElement(ye.a,null,u||"")),r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{for:"password"},"Pasword"),r.a.createElement(I.a,{invalid:!!b,type:"password",onChange:L,name:"password",maxLength:100,value:h,placeholder:"Enter password"}),r.a.createElement(ye.a,null,b||"")),r.a.createElement(je.a,{color:"danger",isOpen:!!j},j),r.a.createElement(C.a,{color:"secondary",type:"submit",className:"Login_btn"},"Login"))),r.a.createElement(Se.a,{className:"Login_footer"},"Don't have an account yet ?",r.a.createElement(s.b,{to:"/signup",style:{padding:"5px 10px"}},"Sign up")))}));var Ae=Object(i.b)()((function(e){var t=Object(n.useState)(""),a=Object(Ee.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(Ee.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(""),p=Object(Ee.a)(d,2),h=p[0],E=p[1],f=Object(n.useState)(!1),g=Object(Ee.a)(f,2),b=g[0],v=g[1],O=Object(n.useState)(""),y=Object(Ee.a)(O,2),j=y[0],S=y[1],k=Object(n.useState)(!0),N=Object(Ee.a)(k,2),w=N[0],A=N[1];Object(n.useEffect)((function(){return function(){x()}}),[]);var _=function(e){var t="",a="";return e?(v(!1),m(!1)):(t=Ie(h),a=Ie(c),v(t),m(a)),!(!h||t||a)},L=function(e){"username"===e.target.name?o(e.target.value):E(e.target.value),_(e.target.name)},x=function(){A(!1)};return r.a.createElement(fe.a,{isOpen:w,toggle:function(){},className:"Login",centered:!0,backdrop:!1},r.a.createElement(ge.a,{className:"Login_body"},r.a.createElement("h2",{className:"title"},"ACCOUNT SIGN UP"),r.a.createElement(be.a,{onSubmit:function(t){if(t.preventDefault(),_()){var a={password:h,username:c};e.dispatch(we(!0)),ue({method:"POST",reqUrl:"auth/signup",data:a}).then((function(t){e.dispatch(we(!1)),e.history.push("/login")})).catch((function(t){e.dispatch(we(!1));var a=Ne()(t,"response.data","");console.log("errror",t),console.log("error response",t.response),"User already exist"===a?m(a):S(a||"Oops! something went wrong")}))}}},r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{for:"email"},"User name"),r.a.createElement(I.a,{invalid:!!u,type:"text",onChange:L,name:"username",maxLength:20,minLength:3,value:c,placeholder:"Enter user name"}),r.a.createElement(ye.a,null,u||"")),r.a.createElement(ve.a,null,r.a.createElement(Oe.a,{for:"password"},"Pasword"),r.a.createElement(I.a,{invalid:!!b,type:"password",onChange:L,name:"password",maxLength:100,minLength:6,value:h,placeholder:"Enter password"}),r.a.createElement(ye.a,null,b||"")),r.a.createElement(je.a,{color:"danger",isOpen:!!j},j),r.a.createElement(C.a,{color:"secondary",type:"submit",className:"Login_btn"},"Sign Up"))),r.a.createElement(Se.a,{className:"Login_footer"},"Already have an account ?",r.a.createElement(s.b,{to:"/login",style:{padding:"5px 10px"}},"login")))})),_e=a(170),Le=function(e){var t=e.component,a=Object(_e.a)(e,["component"]),n=!!localStorage.getItem("user");return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return n?r.a.createElement("div",null,r.a.createElement(t,Object.assign({type:a.type},e))):r.a.createElement(h.a,{to:{pathname:"/login"}})}}))},xe=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(V,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/login",exact:!0,component:Ce}),r.a.createElement(h.b,{path:"/signup",exact:!0,component:Ae}),r.a.createElement(h.b,{path:"/home",key:"home",exact:!0,render:function(){return r.a.createElement(he,{type:q.NEWSAPI_HEADLINES})}}),r.a.createElement(h.b,{path:"/search",key:"search",exact:!0,render:function(){return r.a.createElement(he,{type:q.NEWSAPI_SEARCH})}}),r.a.createElement(Le,{path:"/recommendations",key:"recommendations",type:q.RECOMMENDATIONS,exact:!0,component:he}),r.a.createElement(Le,{path:"/liked",key:"liked",type:q.LIKED,exact:!0,component:he}),r.a.createElement(h.a,{to:"/home"})))}}]),t}(n.Component),Re=Object(h.g)((function(e){return r.a.createElement(xe,e)})),Te=Object(i.b)()(Re),Me=a(44),Pe=a(169),De=a(41),Ue=Z.a.mark(qe),He=Z.a.mark(We);function qe(e){var t,a,n,r,c,o,s,i,l,u,m,d,p;return Z.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Object(De.e)((function(e){return e.itemsReducer.filters}));case 2:t=h.sent,a=t.search,n=void 0===a?"":a,r=t.limit,c=void 0===r?50:r,o=t.skip,s=void 0===o?0:o,n.length&&(n=n.trim().toLowerCase()),i="",l="",u=!0,h.t0=e,h.next=h.t0===q.NEWSAPI_SEARCH?11:h.t0===q.NEWSAPI_HEADLINES?12:h.t0===q.RECOMMENDATIONS?16:h.t0===q.LIKED?21:24;break;case 11:i=n?"q=".concat(n):"domains=thehindu.com";case 12:return m=1,s&&(m=1+parseInt(s/c)),i="".concat(i,"&page=").concat(m,"&pageSize=").concat(c,"&language=en"),h.abrupt("break",25);case 16:return u=!1,l="list",i="limit=".concat(c),s&&(i="".concat(i,"&skip=").concat(s)),h.abrupt("break",25);case 21:return l="liked",u=!1,h.abrupt("break",25);case 24:return h.abrupt("break",25);case 25:return h.prev=25,h.next=28,Object(De.b)(ue,{method:"GET",source:e,cached:u,reqUrl:l,reqOpts:i});case 28:return d=h.sent,e===q.LIKED&&(p=d.data.map((function(e){return e.id})),localStorage.setItem("likes",JSON.stringify(p))),h.next=32,Object(De.d)({type:R,payload:d.data});case 32:h.next=38;break;case 34:return h.prev=34,h.t1=h.catch(25),h.next=38,Object(De.d)({type:T,payload:Ne()(h.t1,"message","error")});case 38:case"end":return h.stop()}}),Ue,null,[[25,34]])}function We(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Object(De.f)(x,(function(e){return qe(e.payload)}))]);case 2:case"end":return e.stop()}}),He)}var Ge=Z.a.mark(Ke);function Ke(){return Z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Object(De.c)(We)]);case 2:case"end":return e.stop()}}),Ge)}var Be={loadState:!1},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loadState:t.payload};default:return e}},Je=a(118),Ve={items:[],itemsApiInProgress:!1,itemsApiInError:"",totalItemCount:1,filters:{search:"",limit:30,skip:0}},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object.assign({},e,{itemsApiInProgress:!0,itemsApiInError:""});case T:return Object.assign({},e,{itemsApiInProgress:!1,itemsApiInError:t.payload});case R:return Object.assign({},e,{items:[].concat(Object(Je.a)(e.items),Object(Je.a)(t.payload)),totalItemCount:e.items.length+t.payload.length,itemsApiInProgress:!1,filters:Object(te.a)({},e.filters,{skip:e.filters.skip+e.filters.limit})});case P:return Object.assign({},e,{items:[]});case D:return Object(te.a)({},Ve,{filters:Object(te.a)({},Ve.filters,{},{search:e.filters.search})});case M:return Object.assign({},e,{filters:Object(te.a)({},e.filters,{},t.payload)});default:return e}},Qe={token:"",username:""},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(te.a)({},e,{},t.payload);case H:return localStorage.clear(),Object(te.a)({},Qe);default:return e}},$e=Object(Me.c)({loadingReducer:Fe,itemsReducer:ze,userReducer:Ye}),Xe=Object(Pe.a)(),Ze=Object(Me.e)($e,Object(Me.a)(Xe));Xe.run(Ke);var et=Ze;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:et},r.a.createElement(s.a,null,r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[171,1,2]]]);
//# sourceMappingURL=main.471697bb.chunk.js.map