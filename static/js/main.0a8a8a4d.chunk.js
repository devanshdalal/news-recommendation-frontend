(this["webpackJsonpnews-recommendation-frontend"]=this["webpackJsonpnews-recommendation-frontend"]||[]).push([[0],{158:function(e,t,a){e.exports=a.p+"static/media/logo.30793e60.png"},171:function(e,t,a){e.exports=a(324)},182:function(e,t,a){e.exports={theme:"#fec132",themeBg:"#f7f7f7"}},183:function(e,t,a){e.exports={theme:"#fec132",themeBg:"#f7f7f7"}},324:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(24),o=a.n(c),s=a(21),i=a(25),l=(a(180),a(181),a(182),a(183),a(31)),u=a(32),m=a(34),d=a(33),p=a(35),h=a(52),g=a(325),f=a(326),E=a(327),b=a(328),v=a(329),O=a(330),y=a(342),j=a(343),k=a(344),S=a(333),w=a(331),N=a(332),I=a(341),C=a(159),x=a(158),_={logo:a.n(x).a},A="UPDATE_LOADING",L="GET_ITEMS",T="GET_ITEMS_SUCCESS",R="GET_ITEMS_FAILURE",M="ITEMS_FILTER_CHANGE",P="CLEAR_ITEMS_LIST",U="RESET_STORE",q="SAVE_USER",D="USER_LOGOUT",H="NEWSAPI_SEARCH",G="NEWSAPI_HEADLINES",B="RECOMMENDATIONS",W="LIKED",F=function(){return{type:U}},J=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.adocSearch=function(){var e;a.props.dispatch((e={search:a.state.query,skip:0},{type:M,payload:e})),a.props.dispatch(F()),a.props.history.push("/search")},a.resetHome=function(){a.props.dispatch(F()),a.props.history.push("/home")},a.reacordQuery=function(e){a.setState({query:e})},a.handleEnter=function(e){"Enter"===e.key&&a.adocSearch()},a.state={query:"",isOpen:!1},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this,a=localStorage.getItem("user");return r.a.createElement(g.a,{light:!0,color:"light",expand:"md"},r.a.createElement(f.a,{onClick:function(){return t.resetHome()}},r.a.createElement("img",{src:(e="logo",_[e]),alt:"logo",width:"35",height:"35"})),r.a.createElement(E.a,{onClick:this.toggle}),r.a.createElement(b.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(v.a,{className:"nav-bar"},r.a.createElement(O.a,{className:"search-bar"},r.a.createElement(w.a,{className:"search-bar-content"},r.a.createElement(N.a,{value:this.state.query,onChange:function(e){return t.reacordQuery(e.target.value)},onKeyPress:this.handleEnter}),r.a.createElement(I.a,{addonType:"append"},r.a.createElement(C.a,{color:"primary",onClick:this.adocSearch},"Search")))),r.a.createElement(O.a,{className:"nav-flushright"},a?r.a.createElement(y.a,{nav:!0,inNavbar:!0},r.a.createElement(j.a,{caret:!0,nav:!0},"Me"),r.a.createElement(k.a,{right:!0},r.a.createElement(s.b,{to:"recommendations"},r.a.createElement(S.a,null," Recommendations ")," "),r.a.createElement(S.a,{divider:!0}),r.a.createElement(s.b,{to:"liked"},r.a.createElement(S.a,null," Liked ")," "),r.a.createElement(S.a,{divider:!0}),r.a.createElement(s.b,{to:"login"},r.a.createElement(S.a,null," Logout ")," "))):r.a.createElement("div",null,r.a.createElement(s.b,{to:"login"}," Login "))))))}}]),t}(r.a.Component),V=Object(h.g)((function(e){return r.a.createElement(J,e)})),z=Object(i.b)((function(e){return{filters:e.itemsReducer.filters}}))(V),K=function(e){var t=e.width,a=void 0===t?150:t,n=e.height,c=void 0===n?150:n,o=e.colorFirst,s=void 0===o?"#1d3f72":o,i=e.colorSecond,l=void 0===i?"#5699d2":i,u=e.strokeWidth,m=void 0===u?4:u,d=e.radiusFirst,p=void 0===d?40:d,h=e.radiusSecond,g=void 0===h?35:h;return r.a.createElement("svg",{width:a,height:c,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",className:"lds-double-ring"},r.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c1}}","ng-attr-stroke-dasharray":"{{config.dasharray}}",fill:"none",strokeLinecap:"round",r:p,strokeWidth:m,stroke:s,strokeDasharray:"62.83185307179586 62.83185307179586",transform:"rotate(199.69 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:50,cy:50,"ng-attr-r":"{{config.radius2}}","ng-attr-stroke-width":"{{config.width}}","ng-attr-stroke":"{{config.c2}}","ng-attr-stroke-dasharray":"{{config.dasharray2}}","ng-attr-stroke-dashoffset":"{{config.dashoffset2}}",fill:"none",strokeLinecap:"round",r:g,strokeWidth:m,stroke:l,strokeDasharray:"54.97787143782138 54.97787143782138",strokeDashoffset:"54.97787143782138",transform:"rotate(-199.69 50 50)"},r.a.createElement("animateTransform",{attributeName:"transform",type:"rotate",calcMode:"linear",values:"0 50 50;-360 50 50",keyTimes:"0;1",dur:"0.9s",begin:"0s",repeatCount:"indefinite"})))},Q=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.loading;return r.a.createElement(r.a.Fragment,null,e&&r.a.createElement("div",{className:"loading"},r.a.createElement(K,null)),r.a.createElement(z,null),r.a.createElement("div",{className:"main-app"},this.props.children))}}]),t}(r.a.Component),Y=Object(i.b)((function(e){return{loading:e.loadingReducer.loadState,favourite_team:e.userReducer.favourite_team}}))(Q),$=a(162),X=a.n($),Z=a(168),ee=a(86),te=a(26),ae=a.n(te),ne=a(85),re=a(36),ce=a(167),oe=a.n(ce),se=function(e){var t=e.method,a=void 0===t?"get":t,n=e.apiBaseUrl,r=e.reqUrl,c=e.reqOpts,o=e.data,s=void 0===o?{}:o,i=e.headers,l=void 0===i?{"content-type":"application/json",Accept:"application/json"}:i;return new Promise(function(){var e=Object(ne.a)(ae.a.mark((function e(t,o){var i,u;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i="".concat(n),r&&(i="".concat(n,"/").concat(r)),c&&(i="".concat(i,"?").concat(c)),u={method:a,url:i,data:s,headers:l},"get"===a.toLowerCase()&&delete u.data,oe()(Object(re.a)({},u)).then((function(e){t(e)})).catch((function(e){o(e)}));case 6:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}())},ie=function(e){return e.id||(e.id=e.url||e.title),e},le=function(e){return!(!e.title||!e.description&&!e.content)},ue=a(117),me=a.n(ue),de=function(e){var t=e.method,a=e.reqUrl,n=e.reqOpts,r=e.data,c=void 0===r?{}:r,o=e.source,s=e.cached,i=void 0===s||s,l=e.headers,u=void 0===l?{"content-type":"application/json",Accept:"application/json"}:l,m="INVALID";if(o)switch(o){case G:m="http://surkhiya.herokuapp.com//newsapi/v2/top-headlines";break;case H:m="http://surkhiya.herokuapp.com//newsapi/v2/everything";break;case W:case B:var d=localStorage.getItem("user"),p=(d?JSON.parse(d):{}).token,h=void 0!==p&&p;u=h?Object(re.a)({},u,{Authorization:"Bearer ".concat(h)}):u,m="https://surkhiya.herokuapp.com";break;default:m="https://surkhiya.herokuapp.com"}else m="https://surkhiya.herokuapp.com";var g="".concat(m).concat(a).concat(n);if("get"===t.toLowerCase()&&i){var f=me.a.get(g);if(f)return new Promise((function(e,t){e(f)})).catch((function(e){return console.log(e)}))}var E={method:t,apiBaseUrl:m,data:c,headers:u};return a&&(E.reqUrl=a),n&&(E.reqOpts=n),se(E).then((function(e){switch(o){case G:case H:e.data=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter(le).map(ie)}(e.data.articles)}return me.a.set(g,e,10),new Promise((function(t,a){t(e)})).catch((function(e){return console.log(e)}))}))},pe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).state={urlToImage:"",liked:e.ids.includes(e.item.id)},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.item;e.urlToImage&&this.setState({urlToImage:e.urlToImage})}},{key:"likeHandler",value:function(){var e=Object(ne.a)(ae.a.mark((function e(t){var a,n,r,c;return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.item,n=this.state.liked,t.preventDefault(),t.stopPropagation(),this.setState({liked:!n}),r="",c="",n?(r="dislike",c=a.id):(r="like",c=a),e.next=10,de({method:"POST",source:W,cached:!1,reqUrl:r,data:c});case 10:console.log("item",a);case 11:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props.item,a=t.description,n=t.url,c=t.title,o=t.content,s=this.state,i=s.urlToImage,l=s.liked,u=a||"",m=o||"",d=u.length>=m.length?u:m;return r.a.createElement("a",{rel:"noopener noreferrer",href:n,target:"_blank",key:this.props.keyValue,style:this.props.style,className:"a-no-style"},r.a.createElement("div",{className:"MatchCard"},r.a.createElement("div",{className:"MatchCard_detail"},r.a.createElement("div",{className:"MatchCard_title_bar"},r.a.createElement("strong",{className:"MatchCard_title"},c),r.a.createElement(C.a,{size:"sm",color:l?"success":"secondary",className:"MatchCard_like",onClick:function(t){return e.likeHandler(t)}},l?"-":"^")),r.a.createElement("div",{className:"MatchCard_content"},r.a.createElement("div",{className:"MatchCard_desc"},d),i?r.a.createElement("div",{className:"MatchCard_img"},r.a.createElement("img",{src:i,alt:"img"})):r.a.createElement("div",null)))))}}]),t}(r.a.Component),he=function(e){function t(e){var a;Object(l.a)(this,t),a=Object(m.a)(this,Object(d.a)(t).call(this,e));var n=localStorage.getItem("likes");return a.state={ids:n?JSON.parse(n):[]},a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.matches;return r.a.createElement("div",{className:"MatchesList"},r.a.createElement("div",{className:"app-container"},r.a.createElement(ee.c,null,(function(a){var n=a.height,c=a.isScrolling,o=a.registerChild,s=a.onChildScroll,i=a.scrollTop;return r.a.createElement("div",{className:"WindowScroller"},r.a.createElement(ee.a,{disableHeight:!0},(function(a){var l=a.width;return r.a.createElement("div",{ref:o},r.a.createElement(ee.b,{autoHeight:!0,height:n,width:l,scrollTop:i,isScrolling:c,onScroll:s,overscanRowCount:4,rowCount:t.length,rowHeight:180,rowRenderer:function(a){var n=a.index,c=a.isScrolling,o=a.isVisible,s=a.key,i=a.style;return r.a.createElement(pe,Object.assign({ids:e.state.ids,item:t[n],keyValue:s},{index:n,isScrolling:c,key:s,isVisible:o,style:i}))}}))})))}))))}}]),t}(r.a.Component),ge=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).loadMore=function(){var e=a.props,t=e.dispatch,n=e.itemsApiInProgress,r=e.type;!n&&t({type:L,payload:r})},e.dispatch(F()),a}return Object(p.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.itemsApiInError,n=e.filters,c=e.totalItemCount,o=e.itemsApiInProgress,s=n.skip;return r.a.createElement("div",{className:"Home"},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"center Home_body_container"},r.a.createElement(X.a,{pageStart:0,loadMore:this.loadMore,style:{width:"100%"},hasMore:!a&&s<=c,loader:r.a.createElement("div",{key:"loading"})},t.length?r.a.createElement(he,{matches:t}):o?r.a.createElement("div",{className:"Home_body_container_ItemsApiInProgress"},r.a.createElement(K,null)):r.a.createElement("div",{className:"Home_noResult"},r.a.createElement(Z.a,{size:60}),r.a.createElement("h4",{className:"title"},"No result found"))))))}}]),t}(r.a.Component),fe=Object(i.b)((function(e){return{source:e.itemsReducer.source,loading:e.loadingReducer.loadState,items:e.itemsReducer.items,itemsApiInProgress:e.itemsReducer.itemsApiInProgress,itemsApiInError:e.itemsReducer.itemsApiInError,totalItemCount:e.itemsReducer.totalItemCount,filters:e.itemsReducer.filters}}))(ge),Ee=a(27),be=a(345),ve=a(334),Oe=a(335),ye=a(336),je=a(337),ke=a(338),Se=a(339),we=a(340),Ne=a(63),Ie=a.n(Ne),Ce=function(e){return(!e||!e.length)&&"Feild is required"},xe=function(e){return{type:A,payload:e}};var _e=Object(i.b)()((function(e){var t=Object(n.useState)(""),a=Object(Ee.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(Ee.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(""),p=Object(Ee.a)(d,2),h=p[0],g=p[1],f=Object(n.useState)(!1),E=Object(Ee.a)(f,2),b=E[0],v=E[1],O=Object(n.useState)(""),y=Object(Ee.a)(O,2),j=y[0],k=y[1],S=Object(n.useState)(!0),w=Object(Ee.a)(S,2),I=w[0],x=w[1];Object(n.useEffect)((function(){return function(){L()}}),[]);var _=function(e){var t="",a="";return e?(m(!1),v(!1)):(t=Ce(c),a=Ce(h),m(t),v(a)),!(!c||!h||t||a)},A=function(e){"username"===e.target.name?o(e.target.value):g(e.target.value),_(e.target.name)},L=function(){x(!1)};return r.a.createElement(be.a,{isOpen:I,toggle:function(){},className:"Login",centered:!0,backdrop:!1},r.a.createElement(ve.a,{className:"Login_body"},r.a.createElement("h2",{className:"title"},"ACCOUNT LOGIN"),r.a.createElement(Oe.a,{onSubmit:function(t){if(t.preventDefault(),_()){var a={username:c,password:h};e.dispatch(xe(!0)),de({method:"POST",reqUrl:"auth/signin",data:a}).then((function(t){var a;console.log("res",t),delete t.data._id,localStorage.setItem("user",JSON.stringify(t.data)),e.dispatch((a=t.data,{type:q,payload:a})),e.dispatch(xe(!1)),e.history.push("/home")})).catch((function(t){e.dispatch(xe(!1));var a=Ie()(t,"response.data","");k(a||"Oops! something went wrong")}))}}},r.a.createElement(ye.a,null,r.a.createElement(je.a,{for:"Username"},"Username"),r.a.createElement(N.a,{invalid:!!u,type:"text",onChange:A,name:"username",value:c,placeholder:"Enter username"}),r.a.createElement(ke.a,null,u||"")),r.a.createElement(ye.a,null,r.a.createElement(je.a,{for:"password"},"Pasword"),r.a.createElement(N.a,{invalid:!!b,type:"password",onChange:A,name:"password",maxLength:100,value:h,placeholder:"Enter password"}),r.a.createElement(ke.a,null,b||"")),r.a.createElement(Se.a,{color:"danger",isOpen:!!j},j),r.a.createElement(C.a,{color:"secondary",type:"submit",className:"Login_btn"},"Login"))),r.a.createElement(we.a,{className:"Login_footer"},"Don't have an account yet ?",r.a.createElement(s.b,{to:"/signup",style:{padding:"5px 10px"}},"Sign up")))}));var Ae=Object(i.b)()((function(e){var t=Object(n.useState)(""),a=Object(Ee.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(!1),l=Object(Ee.a)(i,2),u=l[0],m=l[1],d=Object(n.useState)(""),p=Object(Ee.a)(d,2),h=p[0],g=p[1],f=Object(n.useState)(!1),E=Object(Ee.a)(f,2),b=E[0],v=E[1],O=Object(n.useState)(""),y=Object(Ee.a)(O,2),j=y[0],k=y[1],S=Object(n.useState)(!0),w=Object(Ee.a)(S,2),I=w[0],x=w[1];Object(n.useEffect)((function(){return function(){L()}}),[]);var _=function(e){var t="",a="";return e?(v(!1),m(!1)):(t=Ce(h),a=Ce(c),v(t),m(a)),!(!h||t||a)},A=function(e){"username"===e.target.name?o(e.target.value):g(e.target.value),_(e.target.name)},L=function(){x(!1)};return r.a.createElement(be.a,{isOpen:I,toggle:function(){},className:"Login",centered:!0,backdrop:!1},r.a.createElement(ve.a,{className:"Login_body"},r.a.createElement("h2",{className:"title"},"ACCOUNT SIGN UP"),r.a.createElement(Oe.a,{onSubmit:function(t){if(t.preventDefault(),_()){var a={password:h,username:c};e.dispatch(xe(!0)),de({method:"POST",reqUrl:"auth/signup",data:a}).then((function(t){e.dispatch(xe(!1)),e.history.push("/login")})).catch((function(t){e.dispatch(xe(!1));var a=Ie()(t,"response.data","");console.log("errror",t),console.log("error response",t.response),"User already exist"===a?m(a):k(a||"Oops! something went wrong")}))}}},r.a.createElement(ye.a,null,r.a.createElement(je.a,{for:"email"},"User name"),r.a.createElement(N.a,{invalid:!!u,type:"text",onChange:A,name:"username",maxLength:20,minLength:3,value:c,placeholder:"Enter user name"}),r.a.createElement(ke.a,null,u||"")),r.a.createElement(ye.a,null,r.a.createElement(je.a,{for:"password"},"Pasword"),r.a.createElement(N.a,{invalid:!!b,type:"password",onChange:A,name:"password",maxLength:100,minLength:6,value:h,placeholder:"Enter password"}),r.a.createElement(ke.a,null,b||"")),r.a.createElement(Se.a,{color:"danger",isOpen:!!j},j),r.a.createElement(C.a,{color:"secondary",type:"submit",className:"Login_btn"},"Sign Up"))),r.a.createElement(we.a,{className:"Login_footer"},"Already have an account ?",r.a.createElement(s.b,{to:"/login",style:{padding:"5px 10px"}},"login")))})),Le=a(170),Te=function(e){var t=e.component,a=Object(Le.a)(e,["component"]),n=!!localStorage.getItem("user");return r.a.createElement(h.b,Object.assign({},a,{render:function(e){return n?r.a.createElement("div",null,r.a.createElement(t,Object.assign({type:a.type},e))):r.a.createElement(h.a,{to:{pathname:"/login"}})}}))},Re=function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(Y,null,r.a.createElement(h.d,null,r.a.createElement(h.b,{path:"/login",exact:!0,component:_e}),r.a.createElement(h.b,{path:"/signup",exact:!0,component:Ae}),r.a.createElement(h.b,{path:"/home",key:"home",exact:!0,render:function(){return r.a.createElement(fe,{type:G})}}),r.a.createElement(h.b,{path:"/search",key:"search",exact:!0,render:function(){return r.a.createElement(fe,{type:H})}}),r.a.createElement(Te,{path:"/recommendations",key:"recommendations",type:B,exact:!0,component:fe}),r.a.createElement(Te,{path:"/liked",key:"liked",type:W,exact:!0,component:fe}),r.a.createElement(h.a,{to:"/home"})))}}]),t}(n.Component),Me=Object(h.g)((function(e){return r.a.createElement(Re,e)})),Pe=Object(i.b)()(Me),Ue=a(44),qe=a(169),De=a(41),He=ae.a.mark(Be),Ge=ae.a.mark(We);function Be(e){var t,a,n,r,c,o,s,i,l,u,m,d,p;return ae.a.wrap((function(h){for(;;)switch(h.prev=h.next){case 0:return h.next=2,Object(De.e)((function(e){return e.itemsReducer.filters}));case 2:t=h.sent,a=t.search,n=void 0===a?"":a,r=t.limit,c=void 0===r?50:r,o=t.skip,s=void 0===o?0:o,n.length&&(n=n.trim().toLowerCase()),i="",l="",u=!0,h.t0=e,h.next=h.t0===H?11:h.t0===G?12:h.t0===B?16:h.t0===W?21:24;break;case 11:i=n?"q=".concat(n):"domains=thehindu.com";case 12:return m=1,s&&(m=1+parseInt(s/c)),i="".concat(i,"&page=").concat(m,"&pageSize=").concat(c,"&language=en"),h.abrupt("break",25);case 16:return u=!1,l="list",i="limit=".concat(c),s&&(i="".concat(i,"&skip=").concat(s)),h.abrupt("break",25);case 21:return l="liked",u=!1,h.abrupt("break",25);case 24:return h.abrupt("break",25);case 25:return h.prev=25,h.next=28,Object(De.b)(de,{method:"GET",source:e,cached:u,reqUrl:l,reqOpts:i});case 28:return d=h.sent,e===W&&(p=d.data.map((function(e){return e.id})),localStorage.setItem("likes",JSON.stringify(p))),h.next=32,Object(De.d)({type:T,payload:d.data});case 32:h.next=38;break;case 34:return h.prev=34,h.t1=h.catch(25),h.next=38,Object(De.d)({type:R,payload:Ie()(h.t1,"message","error")});case 38:case"end":return h.stop()}}),He,null,[[25,34]])}function We(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Object(De.f)(L,(function(e){return Be(e.payload)}))]);case 2:case"end":return e.stop()}}),Ge)}var Fe=ae.a.mark(Je);function Je(){return ae.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(De.a)([Object(De.c)(We)]);case 2:case"end":return e.stop()}}),Fe)}var Ve={loadState:!1},ze=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case A:return{loadState:t.payload};default:return e}},Ke=a(118),Qe={items:[],itemsApiInProgress:!1,itemsApiInError:"",totalItemCount:1,filters:{search:"",limit:30,skip:0}},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object.assign({},e,{itemsApiInProgress:!0,itemsApiInError:""});case R:return Object.assign({},e,{itemsApiInProgress:!1,itemsApiInError:t.payload});case T:return Object.assign({},e,{items:[].concat(Object(Ke.a)(e.items),Object(Ke.a)(t.payload)),totalItemCount:e.items.length+t.payload.length,itemsApiInProgress:!1,filters:Object(re.a)({},e.filters,{skip:e.filters.skip+e.filters.limit})});case P:return Object.assign({},e,{items:[]});case U:return Object(re.a)({},Qe,{filters:Object(re.a)({},Qe.filters,{},{search:e.filters.search})});case M:return Object.assign({},e,{filters:Object(re.a)({},e.filters,{},t.payload)});default:return e}},$e={token:"",username:""},Xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(re.a)({},e,{},t.payload);case D:return localStorage.clear(),Object(re.a)({},$e);default:return e}},Ze=Object(Ue.c)({loadingReducer:ze,itemsReducer:Ye,userReducer:Xe}),et=Object(qe.a)(),tt=Object(Ue.e)(Ze,Object(Ue.a)(et));et.run(Je);var at=tt;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(i.a,{store:at},r.a.createElement(s.a,null,r.a.createElement(Pe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[171,1,2]]]);
//# sourceMappingURL=main.0a8a8a4d.chunk.js.map