(this["webpackJsonpnews-recommendation-frontend"]=this["webpackJsonpnews-recommendation-frontend"]||[]).push([[0],{157:function(e,t,a){e.exports=a.p+"static/media/logo.30793e60.png"},170:function(e,t,a){e.exports=a(323)},181:function(e,t,a){e.exports={theme:"#fec132",themeBg:"#f7f7f7"}},182:function(e,t,a){e.exports={theme:"#fec132",themeBg:"#f7f7f7"}},323:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),s=a(21),i=a(25),l=(a(179),a(180),a(181),a(182),a(52)),u=a(36),m=a(37),d=a(39),p=a(38),h=a(40),E=a(324),g=a(325),f=a(326),b=a(327),v=a(328),O=a(329),y=a(341),S=a(342),j=a(343),k=a(332),N=a(330),I=a(331),w=a(340),A=a(158),C=a(157),_={logo:a.n(C).a},L="UPDATE_LOADING",x="GET_ITEMS",R="GET_ITEMS_SUCCESS",T="GET_ITEMS_FAILURE",M="ITEMS_FILTER_CHANGE",D="CLEAR_ITEMS_LIST",P="RESET_STORE",U="SAVE_USER",H="USER_LOGOUT",q={NEWSAPI_SEARCH:"NEWSAPI_SEARCH",NEWSAPI_HEADLINES:"NEWSAPI_HEADLINES",RECOMMENDATIONS:"RECOMMENDATIONS",LIKED:"LIKED"},W=function(){return{type:P}},G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).toggle=function(){return a.setState({isOpen:!a.isOpen})},a.adocSearch=function(){var e;a.props.dispatch((e={search:a.state.query,skip:0},{type:M,payload:e})),a.props.dispatch(W()),a.props.history.push("/search")},a.resetHome=function(){a.props.dispatch(W()),a.props.history.push("/home")},a.reacordQuery=function(e){a.setState({query:e})},a.handleEnter=function(e){"Enter"===e.key&&a.adocSearch()},a.state={query:"",isOpen:!1},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t=this,a=localStorage.getItem("user");return r.a.createElement(E.a,{light:!0,color:"light",expand:"md"},r.a.createElement(g.a,{onClick:function(){return t.resetHome()}},r.a.createElement("img",{src:(e="logo",_[e]),alt:"logo",width:"35",height:"35"})),r.a.createElement(f.a,{onClick:this.toggle}),r.a.createElement(b.a,{isOpen:this.isOpen,navbar:!0},r.a.createElement(v.a,{className:"nav-bar"},r.a.createElement(O.a,{className:"search-bar"},r.a.createElement(N.a,{className:"search-bar-content"},r.a.createElement(I.a,{value:this.state.query,onChange:function(e){return t.reacordQuery(e.target.value)},onKeyPress:this.handleEnter}),r.a.createElement(w.a,{addonType:"append"},r.a.createElement(A.a,{color:"primary",onClick:this.adocSearch},"Search")))),r.a.createElement("div",{className:"nav-flushright"},a?r.a.createElement(y.a,{nav:!0,inNavbar:!0},r.a.createElement(S.a,{caret:!0,nav:!0},"Me"),r.a.createElement(j.a,{right:!0},r.a.createElement(s.b,{to:"recommendations"},r.a.createElement(k.a,null," Recommendations ")," "),r.a.createElement(k.a,{divider:!0}),r.a.createElement(s.b,{to:"liked"},r.a.createElement(k.a,null," Liked ")," "),r.a.createElement(k.a,{divider:!0}),r.a.createElement(s.b,{to:"login"},r.a.createElement(k.a,null," Logout ")," "))):r.a.createElement(O.a,null,r.a.createElement(s.b,{to:"login"}," Login "))))))}}]),t}(r.a.Component),K=Object(l.g)((function(e){return r.a.createElement(G,e)})),B=Object(i.b)((function(e){return{filters:e.itemsReducer.filters}}))(K),F=function(e){var t=e.width,a=void 0===t?150:t,n=e.height,c=void 0===n?150:n,o=e.colorFirst,s=void 0===o?"#1d3f72":o,i=e.colorSecond,l=void 0===i?"#5699d2":i,u=e.strokeWidth,m=void 0===u?4:u,d=e.radiusFirst,p=void 0===d?40:d,h=e.radiusSecond,E=void 0===h?35:h;return r.a.createElement("svg",{width:a,height:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-double-ring"},r.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c1}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",fill:"none",strokeLinecap:"round",r:p,strokeWidth:m,stroke:s,strokeDasharray:"62.83185307179586 62.83185307179586",transform:"rotate(199.69 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius2}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c2}}","ng-attr-stroke-dasharray":"{{config.dasharray2}}","ng-attr-stroke-dashoffset":"{{config.dashoffset2}}",fill:"none",strokeLinecap:"round",r:E,strokeWidth:m,stroke:l,strokeDasharray:"54.97787143782138 54.97787143782138",strokeDashoffset:"54.97787143782138",transform:"rotate(-199.69 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;-360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})))},J=a(31),V=a(28),z=a.n(V),Q=a(161),Y=a.n(Q),$=function(e){var t=e.method,a=void 0===t?"get":t,n=e.apiBaseUrl,r=e.reqUrl,c=e.reqOpts,o=e.data,s=void 0===o?{}:o,i=e.headers,l=void 0===i?{"content-type":"application/json",Accept:"application/json"}:i;return new Promise((function(e,t){var o,i;return z.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:o="".concat(n),r&&(o="".concat(n,"/").concat(r)),c&&(o="".concat(o,"?").concat(c)),i={method:a,url:o,data:s,headers:l},"get"===a.toLowerCase()&&delete i.data,Y()(Object(J.a)({},i)).then((function(t){e(t)})).catch((function(e){t(e)}));case 6:case"end":return u.stop()}}))}))},X=function(e){return e.id||(e.id=e.url||e.title),e},Z=function(e){return!(!e.title||!e.description&&!e.content)},ee=a(64),te=a.n(ee),ae="ea0f26bbe06b44b898f0f0a80af00c7d",ne=function(e){var t=e.method,a=e.reqUrl,n=e.reqOpts,r=e.data,c=void 0===r?{}:r,o=e.source,s=e.cached,i=void 0===s||s,l=e.headers,u=void 0===l?{"content-type":"application/json",Accept:"application/json"}:l,m="INVALID";if(o)switch(o){case q.NEWSAPI_HEADLINES:m="https://newsapi.org/v2/top-headlines",n="apiKey=".concat(ae,"&").concat(n);break;case q.NEWSAPI_SEARCH:m="https://newsapi.org/v2/everything",n="apiKey=".concat(ae,"&").concat(n);break;case q.LIKED:case q.RECOMMENDATIONS:var d=localStorage.getItem("user"),p=(d?JSON.parse(d):{}).token,h=void 0!==p&&p;u=h?Object(J.a)({},u,{Authorization:"Bearer ".concat(h)}):u,m="https://surkhiya.herokuapp.com";break;default:m="https://surkhiya.herokuapp.com"}else m="https://surkhiya.herokuapp.com";var E="".concat(m).concat(a).concat(n);if("get"===t.toLowerCase()&&i){var g=te.a.get(E);if(g)return new Promise((function(e,t){e(g)})).catch((function(e){return console.log(e)}))}var f={method:t,apiBaseUrl:m,data:c,headers:u};return a&&(f.reqUrl=a),n&&(f.reqOpts=n),$(f).then((function(e){switch(o){case q.NEWSAPI_HEADLINES:case q.NEWSAPI_SEARCH:e.data=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter(Z).map(X)}(e.data.articles)}return te.a.set(E,e,10),new Promise((function(t,a){t(e)})).catch((function(e){return console.log(e)}))}))},re=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(m.a)(t,[{key:"comonentDidMount",value:function(){if(!te.a.get("startup")){var e=ne({method:"GET",source:q.RECOM,cached:!1,reqUrl:"vanillalist",reqOpts:"limit=10"});te.a.set("startup",e.data,30)}}},{key:"render",value:function(){var e=this.props.loading;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("div",{className:"loading"},r.a.createElement(F,null)),r.a.createElement(B,null),r.a.createElement("div",{className:"main-app"},this.props.children))}}]),t}(r.a.Component),ce=Object(i.b)((function(e){return{loading:e.loadingReducer.loadState,favourite_team:e.userReducer.favourite_team}}))(re),oe=a(162),se=a.n(oe),ie=a(167),le=a(86),ue=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={urlToImage:"",liked:e.ids.includes(e.item.id)},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.item;e.urlToImage&&this.setState({urlToImage:e.urlToImage})}},{key:"likeHandler",value:function(e){var t,a,n,r;return z.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:return t=this.props.item,a=this.state.liked,e.preventDefault(),e.stopPropagation(),this.setState({liked:!a}),n="",r="",a?(n="dislike",r=t.id):(n="like",r=t),c.next=10,z.a.awrap(ne({method:"POST",source:q.LIKED,cached:!1,reqUrl:n,data:r}));case 10:console.log("item",t);case 11:case"end":return c.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.props.item,a=t.description,n=t.url,c=t.title,o=t.content,s=this.state,i=s.urlToImage,l=s.liked,u=a||"",m=o||"",d=u.length>=m.length?u:m;return r.a.createElement("a",{rel:"noopener noreferrer",href:n,target:"_blank",key:this.props.keyValue,style:this.props.style,className:"a-no-style"},r.a.createElement("div",{className:"MatchCard"},r.a.createElement("div",{className:"MatchCard_detail"},r.a.createElement("div",{className:"MatchCard_title_bar"},r.a.createElement("strong",{className:"MatchCard_title"},c),r.a.createElement(A.a,{size:"sm",color:l?"success":"secondary",className:"MatchCard_like",onClick:function(t){return e.likeHandler(t)}},l?"-":"^")),r.a.createElement("div",{className:"MatchCard_content"},r.a.createElement("div",{className:"MatchCard_desc"},d),i?r.a.createElement("div",{className:"MatchCard_img"},r.a.createElement("img",{src:i,alt:"img"})):r.a.createElement("div",null)))))}}]),t}(r.a.Component),me=function(e){function t(e){var a;Object(u.a)(this,t),a=Object(d.a)(this,Object(p.a)(t).call(this,e));var n=localStorage.getItem("likes");return a.state={ids:n?JSON.parse(n):[]},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props.matches;return r.a.createElement("div",{className:"MatchesList"},r.a.createElement("div",{className:"app-container"},r.a.createElement(le.c,null,(function(a){var n=a.height,c=a.isScrolling,o=a.registerChild,s=a.onChildScroll,i=a.scrollTop;return r.a.createElement("div",{className:"WindowScroller"},r.a.createElement(le.a,{disableHeight:!0},(function(a){var l=a.width;return r.a.createElement("div",{ref:o},r.a.createElement(le.b,{autoHeight:!0,height:n,width:l,scrollTop:i,isScrolling:c,onScroll:s,overscanRowCount:4,rowCount:t.length,rowHeight:180,rowRenderer:function(a){var n=a.index,c=a.isScrolling,o=a.isVisible,s=a.key,i=a.style;return r.a.createElement(ue,Object.assign({ids:e.state.ids,item:t[n],keyValue:s},{index:n,isScrolling:c,key:s,isVisible:o,style:i}))}}))})))}))))}}]),t}(r.a.Component),de=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).loadMore=function(){var e=a.props,t=e.dispatch,n=e.itemsApiInProgress,r=e.type;!n&&t({type:x,payload:r})},e.dispatch(W()),a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.itemsApiInError,n=e.filters,c=e.totalItemCount,o=n.skip;return r.a.createElement("div",{className:"Home"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"center Home_body_container"},r.a.createElement(se.a,{pageStart:0,loadMore:this.loadMore,style:{width:"100%"},hasMore:!a&&o<=c,loader:r.a.createElement("div",{key:"loading"})},t.length?r.a.createElement(me,{matches:t}):r.a.createElement("div",{className:"Home_noResult"},r.a.createElement(ie.a,{size:60}),r.a.createElement("h4",{className:"title"},"No result found"))))))}}]),t}(r.a.Component),pe=Object(i.b)((function(e){return{source:e.itemsReducer.source,loading:e.loadingReducer.loadState,items:e.itemsReducer.items,itemsApiInProgress:e.itemsReducer.itemsApiInProgress,itemsApiInError:e.itemsReducer.itemsApiInError,totalItemCount:e.itemsReducer.totalItemCount,filters:e.itemsReducer.filters}}))(de),he=a(26),Ee=a(344),ge=a(333),fe=a(334),be=a(335),ve=a(336),Oe=a(337),ye=a(338),Se=a(339),je=a(63),ke=a.n(je),Ne=function(e){return(!e||!e.length)&&"Feild is required"},Ie=function(e){return{type:L,payload:e}};var we=Object(i.b)()((function(e){var t=Object(n.useState)(""),a=Object(he.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(he.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(""),p=Object(he.a)(d,2),h=p[0],E=p[1],g=Object(n.useState)(!1),f=Object(he.a)(g,2),b=f[0],v=f[1],O=Object(n.useState)(""),y=Object(he.a)(O,2),S=y[0],j=y[1],k=Object(n.useState)(!0),N=Object(he.a)(k,2),w=N[0],C=N[1];Object(n.useEffect)((function(){return function(){x()}}),[]);var _=function(e){var t="",a="";return e?(m(!1),v(!1)):(t=Ne(c),a=Ne(h),m(t),v(a)),!(!c||!h||t||a)},L=function(e){"username"===e.target.name?o(e.target.value):E(e.target.value),_(e.target.name)},x=function(){C(!1)};return r.a.createElement(Ee.a,{isOpen:w,toggle:function(){},className:"Login",centered:!0,backdrop:!1},r.a.createElement(ge.a,{className:"Login_body"},r.a.createElement("h2",{className:"title"},"ACCOUNT LOGIN"),r.a.createElement(fe.a,{onSubmit:function(t){if(t.preventDefault(),_()){var a={username:c,password:h};e.dispatch(Ie(!0)),ne({method:"POST",reqUrl:"auth/signin",data:a}).then((function(t){var a;console.log("res",t),delete t.data._id,localStorage.setItem("user",JSON.stringify(t.data)),e.dispatch((a=t.data,{type:U,payload:a})),e.dispatch(Ie(!1)),e.history.push("/home")})).catch((function(t){e.dispatch(Ie(!1));var a=ke()(t,"response.data","");j(a||"Oops! something went wrong")}))}}},r.a.createElement(be.a,null,r.a.createElement(ve.a,{for:"Username"},"Username"),r.a.createElement(I.a,{invalid:!!u,type:"text",onChange:L,name:"username",value:c,placeholder:"Enter username"}),r.a.createElement(Oe.a,null,u||"")),r.a.createElement(be.a,null,r.a.createElement(ve.a,{for:"password"},"Pasword"),r.a.createElement(I.a,{invalid:!!b,type:"password",onChange:L,name:"password",maxLength:100,value:h,placeholder:"Enter password"}),r.a.createElement(Oe.a,null,b||"")),r.a.createElement(ye.a,{color:"danger",isOpen:!!S},S),r.a.createElement(A.a,{color:"secondary",type:"submit",className:"Login_btn"},"Login"))),r.a.createElement(Se.a,{className:"Login_footer"},"Don't have an account yet ?",r.a.createElement(s.b,{to:"/signup",style:{padding:"5px 10px"}},"Sign up")))}));var Ae=Object(i.b)()((function(e){var t=Object(n.useState)(""),a=Object(he.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(he.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(""),p=Object(he.a)(d,2),h=p[0],E=p[1],g=Object(n.useState)(!1),f=Object(he.a)(g,2),b=f[0],v=f[1],O=Object(n.useState)(""),y=Object(he.a)(O,2),S=y[0],j=y[1],k=Object(n.useState)(!0),N=Object(he.a)(k,2),w=N[0],C=N[1];Object(n.useEffect)((function(){return function(){x()}}),[]);var _=function(e){var t="",a="";return e?(v(!1),m(!1)):(t=Ne(h),a=Ne(c),v(t),m(a)),!(!h||t||a)},L=function(e){"username"===e.target.name?o(e.target.value):E(e.target.value),_(e.target.name)},x=function(){C(!1)};return r.a.createElement(Ee.a,{isOpen:w,toggle:function(){},className:"Login",centered:!0,backdrop:!1},r.a.createElement(ge.a,{className:"Login_body"},r.a.createElement("h2",{className:"title"},"ACCOUNT SIGN UP"),r.a.createElement(fe.a,{onSubmit:function(t){if(t.preventDefault(),_()){var a={password:h,username:c};e.dispatch(Ie(!0)),ne({method:"POST",reqUrl:"auth/signup",data:a}).then((function(t){e.dispatch(Ie(!1)),e.history.push("/login")})).catch((function(t){e.dispatch(Ie(!1));var a=ke()(t,"response.data","");console.log("errror",t),console.log("error response",t.response),"User already exist"===a?m(a):j(a||"Oops! something went wrong")}))}}},r.a.createElement(be.a,null,r.a.createElement(ve.a,{for:"email"},"User name"),r.a.createElement(I.a,{invalid:!!u,type:"text",onChange:L,name:"username",maxLength:20,minLength:3,value:c,placeholder:"Enter user name"}),r.a.createElement(Oe.a,null,u||"")),r.a.createElement(be.a,null,r.a.createElement(ve.a,{for:"password"},"Pasword"),r.a.createElement(I.a,{invalid:!!b,type:"password",onChange:L,name:"password",maxLength:100,minLength:6,value:h,placeholder:"Enter password"}),r.a.createElement(Oe.a,null,b||"")),r.a.createElement(ye.a,{color:"danger",isOpen:!!S},S),r.a.createElement(A.a,{color:"secondary",type:"submit",className:"Login_btn"},"Sign Up"))),r.a.createElement(Se.a,{className:"Login_footer"},"Already have an account ?",r.a.createElement(s.b,{to:"/login",style:{padding:"5px 10px"}},"login")))})),Ce=a(169),_e=function(e){var t=e.component,a=Object(Ce.a)(e,["component"]),n=!!localStorage.getItem("user");return r.a.createElement(l.b,Object.assign({},a,{render:function(e){return n?r.a.createElement("div",null,r.a.createElement(t,Object.assign({type:a.type},e))):r.a.createElement(l.a,{to:{pathname:"/login"}})}}))},Le=function(e){return r.a.createElement(ce,null,r.a.createElement(l.d,null,r.a.createElement(l.b,{path:"/login",exact:!0,component:we}),r.a.createElement(l.b,{path:"/signup",exact:!0,component:Ae}),r.a.createElement(l.b,{path:"/home",key:"home",exact:!0,render:function(){return r.a.createElement(pe,{type:q.NEWSAPI_HEADLINES})}}),r.a.createElement(l.b,{path:"/search",key:"search",exact:!0,render:function(){return r.a.createElement(pe,{type:q.NEWSAPI_SEARCH})}}),r.a.createElement(_e,{path:"/recommendations",key:"recommendations",type:q.RECOMMENDATIONS,exact:!0,component:pe}),r.a.createElement(_e,{path:"/liked",key:"liked",type:q.LIKED,exact:!0,component:pe}),r.a.createElement(l.a,{to:"/home"})))},xe=Object(l.g)((function(e){return r.a.createElement(Le,e)})),Re=Object(i.b)()(xe),Te=a(44),Me=a(168),De=a(41),Pe=z.a.mark(He),Ue=z.a.mark(qe);function He(e){var t,a,n,r,c,o,s,i,l,u,m,d,p;return z.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Object(De.e)((function(e){return e.itemsReducer.filters}));case 2:t=h.sent,a=t.search,n=void 0===a?"":a,r=t.limit,c=void 0===r?50:r,o=t.skip,s=void 0===o?0:o,n.length&&(n=n.trim().toLowerCase()),i="",l="",u=!0,h.t0=e,h.next=h.t0===q.NEWSAPI_SEARCH?11:h.t0===q.NEWSAPI_HEADLINES?12:h.t0===q.RECOMMENDATIONS?16:h.t0===q.LIKED?21:24;break;case 11:i=n?"q=".concat(n):"domains=thehindu.com";case 12:return m=1,s&&(m=1+parseInt(s/c)),i="".concat(i,"&page=").concat(m,"&pageSize=").concat(c,"&language=en"),h.abrupt("break",25);case 16:return u=!1,l="list",i="limit=".concat(c),s&&(i="".concat(i,"&skip=").concat(s)),h.abrupt("break",25);case 21:return l="liked",u=!1,h.abrupt("break",25);case 24:return h.abrupt("break",25);case 25:return h.prev=25,h.next=28,Object(De.b)(ne,{method:"GET",source:e,cached:u,reqUrl:l,reqOpts:i});case 28:return d=h.sent,e===q.LIKED&&(p=d.data.map((function(e){return e.id})),localStorage.setItem("likes",JSON.stringify(p))),h.next=32,Object(De.d)({type:R,payload:d.data});case 32:h.next=38;break;case 34:return h.prev=34,h.t1=h.catch(25),h.next=38,Object(De.d)({type:T,payload:ke()(h.t1,"message","error")});case 38:case"end":return h.stop()}}),Pe,null,[[25,34]])}function qe(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Object(De.f)(x,(function(e){return He(e.payload)}))]);case 2:case"end":return e.stop()}}),Ue)}var We=z.a.mark(Ge);function Ge(){return z.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Object(De.c)(qe)]);case 2:case"end":return e.stop()}}),We)}var Ke={loadState:!1},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return{loadState:t.payload};default:return e}},Fe=a(117),Je={items:[],itemsApiInProgress:!1,itemsApiInError:"",totalItemCount:1,filters:{search:"",limit:30,skip:0}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object.assign({},e,{itemsApiInProgress:!0,itemsApiInError:""});case T:return Object.assign({},e,{itemsApiInProgress:!1,itemsApiInError:t.payload});case R:return Object.assign({},e,{items:[].concat(Object(Fe.a)(e.items),Object(Fe.a)(t.payload)),totalItemCount:e.items.length+t.payload.length,itemsApiInProgress:!1,filters:Object(J.a)({},e.filters,{skip:e.filters.skip+e.filters.limit})});case D:return Object.assign({},e,{items:[]});case P:return Object(J.a)({},Je,{filters:Object(J.a)({},Je.filters,{},{search:e.filters.search})});case M:return Object.assign({},e,{filters:Object(J.a)({},e.filters,{},t.payload)});default:return e}},ze={token:"",username:""},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ze,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(J.a)({},e,{},t.payload);case H:return localStorage.clear(),Object(J.a)({},ze);default:return e}},Ye=Object(Te.c)({loadingReducer:Be,itemsReducer:Ve,userReducer:Qe}),$e=Object(Me.a)(),Xe=Object(Te.e)(Ye,Object(Te.a)($e));$e.run(Ge);var Ze=Xe;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:Ze},r.a.createElement(s.a,null,r.a.createElement(Re,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[170,1,2]]]);
//# sourceMappingURL=main.c6287af8.chunk.js.map