(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{109:function(e,t,n){e.exports=n.p+"static/media/user.f4f3dd7a.png"},11:function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return u})),n.d(t,"c",(function(){return s}));var a=n(140),r=a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e8e604f3-216c-4026-8739-6d2629efafea"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return r.post("follow/".concat(e),{},{})},unfollow:function(e){return r.delete("follow/".concat(e),{})},getProfile:function(e){return o.getProfile(e)}},o={getProfile:function(e){return r.get("profile/".concat(e))},getStatus:function(e){return r.get("/profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return r.put("profile",e)}},u={me:function(){return r.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return r.post("auth/login",{email:e,password:t,rememberMe:n,captcha:a})},logout:function(){return r.delete("auth/login")}},s={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}}},130:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var a=n(43),r=n(4),c={messages:[{id:1,message:"Hi"},{id:2,message:"How are you?"},{id:3,message:"Yo"},{id:4,message:"Hello"}],dialogs:[{id:1,name:"Maxim"},{id:2,name:"Sveta"},{id:3,name:"Sasha"},{id:4,name:"Victor"}]},o=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:6,message:n}])});default:return e}}},133:function(e,t,n){e.exports={newsImage:"News_newsImage__1Dtuu"}},134:function(e,t,n){e.exports=n.p+"static/media/newsImage.9b45d1e7.png"},135:function(e,t,n){e.exports={musicImage:"Music_musicImage__28laF"}},136:function(e,t,n){e.exports=n.p+"static/media/musicImage.11174361.png"},137:function(e,t,n){e.exports={settings:"Setting_settings__33gCg"}},138:function(e,t,n){e.exports=n.p+"static/media/settings.3b2396f8.png"},143:function(e,t,n){e.exports={preloader:"Preloader1_preloader__2Uog0"}},15:function(e,t,n){e.exports={nav:"Navbar_nav__1epfM",item:"Navbar_item__3z0fN",active:"Navbar_active__1e8cK"}},170:function(e,t,n){e.exports=n(296)},175:function(e,t,n){},176:function(e,t,n){},24:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var a=n(50),r=n(0),c=n.n(r),o=n(88),u=n(47),s=n.n(u),i=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,r=e.children,o=n&&a;return c.a.createElement("div",{className:s.a.formControl+" "+(o?s.a.error:" ")},c.a.createElement("div",null,r),o&&c.a.createElement("span",null,a))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(i,e,c.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(a.a)(e,["input","meta","child"]));return c.a.createElement(i,e,c.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,a){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return c.a.createElement("div",null,c.a.createElement(o.a,Object.assign({placeholder:e,name:t,validate:n,component:a},r)),u)}},296:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(63),o=n.n(c),u=(n(175),n(35)),s=n(36),i=n(38),l=n(37),f=(n(176),n(12)),p=n(15),m=n.n(p),d=function(){return r.a.createElement("nav",{className:m.a.nav},r.a.createElement("div",{className:m.a.item},r.a.createElement(f.b,{to:"/profile",activeClassName:m.a.active},"Profile")),r.a.createElement("div",{className:m.a.item},r.a.createElement(f.b,{to:"/dialogs",activeClassName:m.a.active},"Messages")),r.a.createElement("div",{className:m.a.item},r.a.createElement(f.b,{to:"/news",activeClassName:m.a.active},"News")),r.a.createElement("div",{className:m.a.item},r.a.createElement(f.b,{to:"/music",activeClassName:m.a.active},"Music")),r.a.createElement("div",{className:m.a.item},r.a.createElement(f.b,{to:"/setting",activeClassName:m.a.active},"Settings")),r.a.createElement("div",{className:m.a.item},r.a.createElement(f.b,{to:"/users",activeClassName:m.a.active},"Users")))},g=n(9),h=n(133),E=n.n(h),b=n(134),v=n.n(b),O=function(e){return r.a.createElement("img",{className:E.a.newsImage,src:v.a,alt:"newsImage"})},_=n(135),w=n.n(_),S=n(136),j=n.n(S),P=function(e){return r.a.createElement("img",{className:w.a.musicImage,src:j.a,alt:"musicImage"})},C=n(137),y=n.n(C),I=n(138),N=n.n(I),x=function(e){return r.a.createElement("img",{className:y.a.settings,src:N.a,alt:"settings"})},U=n(17),T=n(7),k=n.n(T),A=n(14),L=n(43),F=n(4),z=n(11),R=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(F.a)(Object(F.a)({},e),a):e}))},G={users:[],pageSize:10,totalUsersCount:0,currentPage:2,isFetching:!0,followingInProgress:[],fake:10},M=function(e){return{type:"FOLLOW",userId:e}},D=function(e){return{type:"UNFOLLOW",userId:e}},H=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},B=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},W=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},V=function(){var e=Object(A.a)(k.a.mark((function e(t,n,a,r){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(W(!0,n)),e.next=3,a(n);case 3:0==e.sent.data.resultCode&&t(r(n)),t(W(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(F.a)(Object(F.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!0})});case"UNFOLLOW":return Object(F.a)(Object(F.a)({},e),{},{users:R(e.users,t.userId,"id",{followed:!1})});case"SET_USERS":return Object(F.a)(Object(F.a)({},e),{},{users:t.users});case"SET_CURRENT_PAGE":return Object(F.a)(Object(F.a)({},e),{},{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(F.a)(Object(F.a)({},e),{},{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(F.a)(Object(F.a)({},e),{},{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(F.a)(Object(F.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(L.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},Z=n(50),q=n(64),J=n(98),K=n(70),Y=n.n(K),Q=n(92),$=n.n(Q),ee=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,o=e.onPageChanged,u=e.portionSize,s=void 0===u?10:u,i=Math.ceil(t/n),l=[],f=1;f<=i;f++)l.push(f);var p=Math.ceil(i/s),m=Object(a.useState)(1),d=Object(J.a)(m,2),g=d[0],h=d[1],E=(g-1)*s+1,b=g*s;return r.a.createElement("div",{className:$()(Y.a.paginator)},g>1&&r.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=b})).map((function(e){return r.a.createElement("span",{className:$()(Object(q.a)({},Y.a.selectedPage,c===e),Y.a.pageNumber),key:e,onClick:function(t){o(e)}},e)})),p>g&&r.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},te=n(93),ne=n.n(te),ae=n(109),re=n.n(ae),ce=function(e){var t=e.user,n=e.followingInProgress,a=e.unfollow,c=e.follow;return r.a.createElement("div",{className:ne.a.users},r.a.createElement("span",null,r.a.createElement("div",null,r.a.createElement(f.b,{to:"./profile/"+t.id},r.a.createElement("img",{alt:"userPhoto",src:null!==t.photos.small?t.photos.small:re.a,className:ne.a.userPhoto}))),r.a.createElement("div",null,t.followed?r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){a(t.id)}},"Unfollow"):r.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){c(t.id)}},"Follow"))),r.a.createElement("span",null,r.a.createElement("span",null,r.a.createElement("div",null,t.name),r.a.createElement("div",null,t.status)),r.a.createElement("span",null,r.a.createElement("div",null,"user.location.country"),r.a.createElement("div",null,"user.location.city"))))},oe=function(e){var t=e.currentPage,n=e.totalUsersCount,a=e.pageSize,c=e.onPageChanged,o=e.users,u=Object(Z.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]);return r.a.createElement("div",null,r.a.createElement(ee,{currentPage:t,onPageChanged:c,totalItemsCount:n,pageSize:a}),r.a.createElement("div",null,o.map((function(e){return r.a.createElement(ce,{user:e,followingInProgress:u.followingInProgress,key:e.id,unfollow:u.unfollow,follow:u.follow})}))))},ue=n(68),se=n.n(ue),ie=function(e){return r.a.createElement("div",null,r.a.createElement("img",{alt:"preloader",src:se.a,style:{width:"100px",height:"100px"}}))},le=n(8),fe=n(141),pe=Object(fe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),me=function(e){return e.usersPage.pageSize},de=function(e){return e.usersPage.totalUsersCount},ge=function(e){return e.usersPage.currentPage},he=function(e){return e.usersPage.isFetching},Ee=function(e){return e.usersPage.followingInProgress},be=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return this.props.isAuth?r.a.createElement(r.a.Fragment,null,this.props.isFetching?r.a.createElement(ie,null):null,r.a.createElement(oe,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,followingInProgress:this.props.followingInProgress,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow})):r.a.createElement(g.a,{to:"/login"})}}]),n}(r.a.Component),ve=Object(le.d)(Object(U.b)((function(e){return{users:pe(e),pageSize:me(e),totalUsersCount:de(e),currentPage:ge(e),isFetching:he(e),followingInProgress:Ee(e),isAuth:e.auth.isAuth}}),{follow:function(e){return function(){var t=Object(A.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,z.d.follow.bind(z.d),M);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(A.a)(k.a.mark((function t(n){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:V(n,e,z.d.unfollow.bind(z.d),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:H,toggleFollowingProgress:W,getUsers:function(e,t){return function(){var n=Object(A.a)(k.a.mark((function n(a){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a(B(!0)),a(H(e)),n.next=4,z.d.getUsers(e,t);case 4:r=n.sent,a(B(!1)),a({type:"SET_USERS",users:r.items}),a({type:"SET_TOTAL_USERS_COUNT",count:r.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(be),Oe=n(29),_e="samurai-network/auth/SET_USER_DATA",we={uderId:null,email:null,login:null,isAuth:!1,captchaUrl:null},Se=function(e,t,n,a){return{type:_e,payload:{userId:e,email:t,login:n,isAuth:a}}},je=function(e){return{type:"GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},Pe=function(){return function(){var e=Object(A.a)(k.a.mark((function e(t){var n,a,r,c,o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.me();case 2:0===(n=e.sent).data.resultCode&&(a=n.data.data,r=a.id,c=a.login,o=a.email,t(Se(r,o,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ce=function(){return function(){var e=Object(A.a)(k.a.mark((function e(t){var n,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,t(je(a));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:case"GET_CAPTCHA_URL_SUCCESS":return Object(F.a)(Object(F.a)({},e),t.payload);default:return e}},Ie=n(94),Ne=n.n(Ie),xe=function(e){return r.a.createElement("header",{className:Ne.a.header},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2016/03/31/19/23/cat-1294968_960_720.png",alt:"logo"}),r.a.createElement("div",{className:Ne.a.loginBlock},e.isAuth?r.a.createElement("div",null,e.login," - ",r.a.createElement("button",{onClick:e.logout},"Log out")):r.a.createElement(f.b,{to:"/login"},"Login")))},Ue=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){return r.a.createElement(xe,this.props)}}]),n}(r.a.Component),Te=Object(U.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:function(){return function(){var e=Object(A.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.a.logout();case 2:0===e.sent.data.resultCode&&t(Se(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ue),ke=n(131),Ae=n(65),Le=n(24),Fe=n(47),ze=n.n(Fe),Re=Object(ke.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,a=e.captchaUrl;return r.a.createElement("form",{onSubmit:t},Object(Le.c)("Email","email",[Ae.b],Le.a),Object(Le.c)("Password","password",[Ae.b],Le.a,{type:"password"}),Object(Le.c)(null,"input",[],Le.a,{type:"checkbox"}),a&&r.a.createElement("img",{alt:"captcha",src:a}),a&&Object(Le.c)("Symbols from image","captcha",[Ae.b],Le.a),n&&r.a.createElement("div",{className:ze.a.formSummaryError},n),r.a.createElement("div",null,r.a.createElement("button",null,"Login")))})),Ge=Object(U.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,a){return function(){var r=Object(A.a)(k.a.mark((function r(c){var o,u;return k.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,z.a.login(e,t,n,a);case 2:0===(o=r.sent).data.resultCode?c(Pe()):10===o.data.resultCode&&(c(Ce()),u=o.data.messages.length>0?o.data.messages[0]:"Some error",c(Object(Oe.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?r.a.createElement(g.a,{to:"/profile"}):r.a.createElement("div",null,r.a.createElement("h1",null,"LOGIN"),r.a.createElement(Re,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl}))})),Me={initialized:!1,globalError:null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(F.a)(Object(F.a)({},e),{},{initialized:!0});default:return e}},He=n(143),Be=n.n(He),We=function(e){return r.a.createElement("div",null,r.a.createElement("img",{alt:"preloader",src:se.a,className:Be.a.preloader}))},Ve=n(97),Xe=n(130),Ze={},qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;return e},Je=n(144),Ke=n(132),Ye=Object(le.c)({profilePage:Ve.b,dialogsPage:Xe.a,sidebar:qe,usersPage:X,auth:ye,app:De,form:Ke.a}),Qe=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||le.d,$e=Object(le.e)(Ye,Qe(Object(le.a)(Je.a))),et=function(e){return function(t){return r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(ie,null)},r.a.createElement(e,t))}},tt=r.a.lazy((function(){return n.e(4).then(n.bind(null,303))})),nt=r.a.lazy((function(){return n.e(3).then(n.bind(null,302))})),at=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?r.a.createElement("div",{className:"app-wrapper"},r.a.createElement(Te,null),r.a.createElement(d,null),r.a.createElement("div",{className:"app-wrapper-content"},r.a.createElement(g.d,null,r.a.createElement(g.b,{exact:!0,path:"/",render:function(){return r.a.createElement(g.a,{to:"/profile"})}}),r.a.createElement(g.b,{path:"/dialogs",render:et(tt)}),r.a.createElement(g.b,{path:"/profile/:userId?",render:et(nt)}),r.a.createElement(g.b,{path:"/news",render:function(){return r.a.createElement(O,null)}}),r.a.createElement(g.b,{path:"/music",render:function(){return r.a.createElement(P,null)}}),r.a.createElement(g.b,{path:"/setting",render:function(){return r.a.createElement(x,null)}}),r.a.createElement(g.b,{path:"/users",render:function(){return r.a.createElement(ve,null)}}),r.a.createElement(g.b,{path:"/login",render:function(){return r.a.createElement(Ge,null)}}),r.a.createElement(g.b,{path:"*",render:function(){return r.a.createElement("div",null,"404 NOT FOUND")}})))):r.a.createElement(We,null)}}]),n}(r.a.Component),rt=Object(le.d)(g.g,Object(U.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Pe());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(at),ct=function(e){return r.a.createElement(f.a,null,r.a.createElement(U.a,{store:$e},r.a.createElement(rt,null)))};o.a.render(r.a.createElement(ct,null),document.getElementById("root"))},47:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3ivS8",error:"FormsControls_error__2BuEz",formSummaryError:"FormsControls_formSummaryError__erolX"}},65:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var a=function(e){if(!e)return"Field is required"},r=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},68:function(e,t,n){e.exports=n.p+"static/media/load.14707564.gif"},70:function(e,t,n){e.exports={userPhoto:"Paginator_userPhoto__22-2_",paginator:"Paginator_paginator__1i6yk",pageNumber:"Paginator_pageNumber__1LrMn",selectedPage:"Paginator_selectedPage__1aZj6"}},93:function(e,t,n){e.exports={userPhoto:"users_userPhoto__pHRtq",selectedPage:"users_selectedPage__27kpS",users:"users_users__1u5r7"}},94:function(e,t,n){e.exports={header:"Header_header__18dLW",loginBlock:"Header_loginBlock__2GLbA"}},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return m})),n.d(t,"c",(function(){return d})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return E}));var a=n(7),r=n.n(a),c=n(14),o=n(43),u=n(4),s=n(29),i=n(11),l={posts:[{id:1,message:"Hi, how are you?",likesCount:15},{id:2,message:"It's my first post",likesCount:20}],profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},m=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.d.getProfile(e);case 2:a=t.sent,n({type:"SET_USER_PROFILE",profile:a.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:a=t.sent,n(p(a.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,i.b.updateStatus(e);case 3:0===t.sent.data.resultCode&&n(p(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.savePhoto(e);case 2:0===(a=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:a.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(c.a)(r.a.mark((function t(n,a){var c,o;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.userId,t.next=3,i.b.saveProfile(e);case 3:if(0!==(o=t.sent).data.resultCode){t.next=8;break}n(m(c)),t.next=10;break;case 8:return n(Object(s.a)("edit-profile",{_error:o.data.messages[0]})),t.abrupt("return",Promise.reject(o.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(u.a)(Object(u.a)({},e),{},{posts:[].concat(Object(o.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(u.a)(Object(u.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(u.a)(Object(u.a)({},e),{},{status:t.status});case"DELETE_POST":return Object(u.a)(Object(u.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SAVE_PHOTO_SUCCESS":return Object(u.a)(Object(u.a)({},e),{},{profile:Object(u.a)(Object(u.a)({},e.profile),{},{photos:t.photos})});default:return e}}}},[[170,1,2]]]);
//# sourceMappingURL=main.9a150c87.chunk.js.map