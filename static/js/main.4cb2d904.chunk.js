(this["webpackJsonpreact-hooks"]=this["webpackJsonpreact-hooks"]||[]).push([[0],{19:function(e,t,c){e.exports={Loader:"Loader_Loader__3cxM3","lds-spinner":"Loader_lds-spinner__1EmWQ",center:"Loader_center__3DNW3"}},36:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var r,n,a=c(0),s=c(1),i=c.n(s),l=c(29),o=c.n(l),j=(c(36),c(8)),d=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-dark bg-primary navbar-expand-lg",children:[Object(a.jsx)("div",{className:"navbar-brand",children:"Github Search"}),Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(j.c,{to:"/",exact:!0,className:"nav-link",children:"Main"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(j.c,{to:"/about",className:"nav-link",children:"Information"})})]})]})},b=c(2),u=c(10),O=Object(s.createContext)(),h=Object(s.createContext)(),x=function(){var e=Object(s.useState)(""),t=Object(u.a)(e,2),c=t[0],r=t[1],n=Object(s.useContext)(O),i=Object(s.useContext)(h);return Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("input",{type:"text",className:"form-control",placeholder:"Input username",onKeyPress:function(e){"Enter"===e.key&&(i.clearUsers(),c.trim()?(n.hide(),i.searchUsers(c.trim())):n.show("Input username"))},value:c,onChange:function(e){return r(e.target.value)}})})},m=function(e){var t=e.user;return Object(a.jsxs)("div",{className:"card",children:[Object(a.jsx)("img",{src:t.avatar_url,alt:t.login,className:"card-img-top"}),Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h5",{className:"class-title",children:t.login}),Object(a.jsx)(j.b,{to:"/profile/".concat(t.login),className:"btn btn-primary",children:"See more"})]})]})},p=c(19),v=c.n(p),f=function(){return Object(a.jsx)("div",{className:v.a.center,children:Object(a.jsxs)("div",{className:v.a.Loader,children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})},g=function(){var e=Object(s.useContext)(h),t=e.loading,c=e.users;return Object(a.jsxs)("div",{children:[Object(a.jsx)(x,{}),Object(a.jsx)("div",{className:"row",children:t?Object(a.jsx)(f,{}):c.map((function(e){return Object(a.jsx)("div",{className:"col-sm-3 mb-4",children:Object(a.jsx)(m,{user:e})},e.id)}))})]})},N=function(e){var t=e.repos;return Object(a.jsx)("div",{children:t.map((function(e){var t=e.html_url,c=e.name,r=e.description,n=e.homepage;return Object(a.jsx)("div",{className:"card mb-3",children:Object(a.jsxs)("div",{className:"card-body",children:[Object(a.jsx)("h4",{className:"card-title",children:Object(a.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",className:"card-link",children:c})}),r&&Object(a.jsx)("h6",{className:"card-subtitle text-muted",children:r}),n&&Object(a.jsx)("a",{href:n,target:"_blank",rel:"noreferrer",className:"card-link",children:n})]})},e.id)}))})},_={maxWidth:200},y=function(e){var t=e.match,c=Object(s.useContext)(h),r=c.getUser,n=c.getRepos,i=c.loading,l=c.user,o=c.repos,d=Object(s.useMemo)((function(){return t.params.name}),[t]);if(Object(s.useEffect)((function(){r(d),n(d)}),[d]),i)return Object(a.jsx)(f,{});var b=l.name,u=l.company,O=l.avatar_url,x=l.location,m=l.bio,p=l.blog,v=l.login,g=l.html_url,y=l.followers,E=l.public_repos,S=l.public_gists,T=l.following;return Object(a.jsxs)("div",{style:{minWidth:"280px"},children:[Object(a.jsx)(j.b,{to:"/",className:"btn btn-link",children:"Back"}),Object(a.jsx)("div",{className:"card mb-4",children:Object(a.jsx)("div",{className:"card-body",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsxs)("div",{className:"col-sm-5 col-lg-3 text-center",children:[Object(a.jsx)("img",{style:_,src:O,alt:b}),Object(a.jsx)("h2",{className:"card-title",children:b}),Object(a.jsx)("h5",{className:"card-subtitle text-muted mb-3",children:v}),x&&Object(a.jsxs)("p",{children:["Location: ",x]})]}),Object(a.jsxs)("div",{className:"col-sm-7 col-lg-9",children:[m&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("h3",{children:"BIO"}),Object(a.jsx)("p",{children:m})]}),Object(a.jsx)("a",{href:g,target:"_blank",rel:"noreferrer",className:"btn btn-dark",children:"Open Profile"}),Object(a.jsxs)("ul",{children:[u&&Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Company: "})," ",u]}),p&&Object(a.jsxs)("li",{children:[Object(a.jsx)("strong",{children:"Website: "}),Object(a.jsx)("a",{href:p,target:"_blank",rel:"noreferrer",className:"card-link",children:p})]})]}),Object(a.jsxs)("div",{className:"d-flex flex-column align-items-start",children:[Object(a.jsxs)("div",{className:"badge badge-primary mb-1",children:["Followers: ",y]}),Object(a.jsxs)("div",{className:"badge badge-primary mb-1",children:["Following: ",T]}),Object(a.jsxs)("div",{className:"badge badge-info mb-1",children:["Public repos: ",E]}),Object(a.jsxs)("div",{className:"badge badge-dark",children:["Public gists: ",S]})]})]})]})})}),Object(a.jsx)(N,{repos:o})]})},E=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"jumbotron",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h1",{className:"display-4",children:"About"}),Object(a.jsx)("p",{className:"lead",children:"React hooks app"})]})})})},S=c(5),T="SHOW_ALERT",C="HIDE_ALERT",k="CLEAR_USERS",L="GET_REPOS",R="GET_USER",P="SEARCH_USERS",w="SET_LOADING",A=(r={},Object(S.a)(r,T,(function(e,t){return t.payload})),Object(S.a)(r,C,(function(e,t){return null})),Object(S.a)(r,"DEFAULT",(function(e){return e})),r),D=function(e,t){return(A[t.type]||A.DEFAULT)(e,t)},U=function(e){var t=e.children,c=Object(s.useReducer)(D,null),r=Object(u.a)(c,2),n=r[0],i=r[1];return Object(a.jsx)(O.Provider,{value:{hide:function(){return i({type:C})},show:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"secondary";i({type:T,payload:{type:t,text:e}})},alert:n},children:t})},F=function(){var e=Object(s.useContext)(O),t=e.alert,c=e.hide;return t?Object(a.jsxs)("div",{className:"alert alert-".concat(t.type||"secondary"," alert-dismissible"),role:"alert",children:[t.text,Object(a.jsx)("button",{type:"button",className:"close","aria-label":"Close",onClick:c,children:Object(a.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}):null},I=c(9),W=c.n(I),H=c(12),K=c(13),B=c.n(K),G=c(7),M=(n={},Object(S.a)(n,P,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{users:t.payload,loading:!1})})),Object(S.a)(n,L,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{repos:t.payload,loading:!1})})),Object(S.a)(n,R,(function(e,t){return Object(G.a)(Object(G.a)({},e),{},{user:t.payload,loading:!1})})),Object(S.a)(n,w,(function(e){return Object(G.a)(Object(G.a)({},e),{},{loading:!0})})),Object(S.a)(n,k,(function(e){return Object(G.a)(Object(G.a)({},e),{},{users:[]})})),Object(S.a)(n,"DEFAULT",(function(e){return e})),n),J=function(e,t){return(M[t.type]||M.DEFAULT)(e,t)},V=Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLIENT_ID,q=Object({NODE_ENV:"production",PUBLIC_URL:"/react-hooks",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_CLIENT_SECRET,Q=function(e){return"".concat(e,"client_id=").concat(V,"&client_secret=").concat(q)},z=function(e){var t=e.children,c=Object(s.useReducer)(J,{user:{},users:[],loading:!1,repos:[]}),r=Object(u.a)(c,2),n=r[0],i=r[1],l=function(){var e=Object(H.a)(W.a.mark((function e(t){var c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,B.a.get(Q("https://api.github.com/search/users?q=".concat(t,"&")));case 3:c=e.sent,i({type:P,payload:c.data.items});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=Object(H.a)(W.a.mark((function e(t){var c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,B.a.get(Q("https://api.github.com/users/".concat(t,"?")));case 3:c=e.sent,i({type:R,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(H.a)(W.a.mark((function e(t){var c;return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,B.a.get(Q("https://api.github.com/users/".concat(t,"/repos?per_page=5&")));case 3:c=e.sent,i({type:L,payload:c.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(H.a)(W.a.mark((function e(){return W.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:i({type:k});case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=function(){i({type:w})},O=n.user,x=n.users,m=n.loading,p=n.repos;return Object(a.jsx)(h.Provider,{value:{searchUsers:l,getUser:o,getRepos:j,clearUsers:d,setLoading:b,user:O,users:x,loading:m,repos:p},children:t})};var X=function(){return Object(a.jsx)(z,{children:Object(a.jsx)(U,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(d,{}),Object(a.jsxs)("div",{className:"container pt-4",children:[Object(a.jsx)(F,{alert:{text:"alert"}}),Object(a.jsxs)(b.d,{children:[Object(a.jsx)(b.b,{path:"/",exact:!0,component:g}),Object(a.jsx)(b.b,{path:"/about",component:E}),Object(a.jsx)(b.b,{path:"/profile/:name",component:y}),Object(a.jsx)(b.a,{to:"/"})]})]})]})})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,61)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};o.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(X,{})}),document.getElementById("root")),Y()}},[[60,1,2]]]);
//# sourceMappingURL=main.4cb2d904.chunk.js.map