(this["webpackJsonpnetflix-clone"]=this["webpackJsonpnetflix-clone"]||[]).push([[0],{30:function(e,t,n){},49:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(20),i=n.n(a),o=(n(30),n(8)),r=n(5),s=n(4),l=n.n(s),d=n(21),u=n.n(d).a.create({baseURL:"https://api.themoviedb.org/3"}),h=(n(49),n(22)),v=n(25),f=n.n(v),b=n(0);var j=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,i=Object(c.useState)([]),s=Object(r.a)(i,2),d=s[0],v=s[1],j=Object(c.useState)(""),p=Object(r.a)(j,2),m=p[0],g=p[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(n);case 2:return t=e.sent,v(t.data.results),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("h2",{children:t}),Object(b.jsx)("div",{className:"row__posters",children:d.map((function(e){return Object(b.jsx)("img",{onClick:function(){!function(e){console.log(e),m?g(""):f()((null===e||void 0===e?void 0:e.title)||(null===e||void 0===e?void 0:e.name)||"").then((function(e){var t=new URLSearchParams(new URL(e).search);g(t.get("v"))})).catch((function(e){return console.log(e)}))}(e)},className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))}),m&&Object(b.jsx)(h.a,{videoId:m,opts:{height:"390",width:"100%",playerVars:{autoplay:1}}})]})},p="8e8290387f3d37808e589c36a59d55eb",m={fetchTrending:"/trending/all/week?api_key=".concat(p,"&language=en-US"),fetchNetflixOriginals:"/discover/tv?api_key=".concat(p,"&with_networks=213"),fetchTopRated:"/movie/top_rated?api_key=".concat(p,"&language=en-US"),fetchActionMovies:"/discover/movie?api_key=".concat(p,"&with_genres=28"),fetchComedyMovies:"/discover/movie?api_key=".concat(p,"&with_genres=35"),fetchHorrorMovies:"/discover/movie?api_key=".concat(p,"&with_genres=27"),fetchRomanceMovies:"/discover/movie?api_key=".concat(p,"&with_genres=10749"),fetchDocumantaries:"/discover/movie?api_key=".concat(p,"&with_genres=99")};n(72);var g=function(){var e,t,n=Object(c.useState)([]),a=Object(r.a)(n,2),i=a[0],s=a[1];return Object(c.useEffect)((function(){function e(){return(e=Object(o.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.get(m.fetchNetflixOriginals);case 2:return t=e.sent,s(t.data.results[Math.floor(Math.random()*t.data.results.length-1)]),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(b.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url(\n      "https://image.tmdb.org/t/p/original/'.concat(null===i||void 0===i?void 0:i.backdrop_path,'"\n    )'),backgroundPosition:"center center"},children:[Object(b.jsxs)("div",{className:"banner__contents",children:[Object(b.jsxs)("h1",{className:"banner__title",children:[(null===i||void 0===i?void 0:i.title)||(null===i||void 0===i?void 0:i.name)||(null===i||void 0===i?void 0:i.original_name)," "]}),Object(b.jsxs)("div",{className:"banner__buttons",children:[Object(b.jsx)("button",{className:"banner__button",children:"Play"}),Object(b.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(b.jsx)("h1",{className:"banner__description",children:(e=null===i||void 0===i?void 0:i.overview,t=150,(null===e||void 0===e?void 0:e.length)>t?e.substr(0,t-1)+"...":e)})]}),Object(b.jsx)("div",{className:"banner__fadeBottom"})]})};n(73);var _=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>100?a(!0):a(!1)})),function(){window.removeEventListener("scroll",(function(){}))}}),[]),Object(b.jsxs)("div",{className:"nav ".concat(n&&"nav__black"),children:[Object(b.jsx)("img",{className:"nav__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158",alt:"Netflix Logo"}),Object(b.jsx)("img",{className:"nav__avatar",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png",alt:"Netflix Avatar"})]})};function O(){return Object(b.jsxs)("div",{className:"app",children:[Object(b.jsx)(_,{}),Object(b.jsx)(g,{}),Object(b.jsx)(j,{title:"NETFLIX ORIGINALS",fetchUrl:m.fetchNetflixOriginals,isLargeRow:!0}),Object(b.jsx)(j,{title:"Trending Now",fetchUrl:m.fetchTrending}),Object(b.jsx)(j,{title:"Top rated",fetchUrl:m.fetchTopRated}),Object(b.jsx)(j,{title:"Action Movies",fetchUrl:m.fetchActionMovies}),Object(b.jsx)(j,{title:"Comedy Movies",fetchUrl:m.fetchComedyMovies}),Object(b.jsx)(j,{title:"Horror Movies",fetchUrl:m.fetchHorrorMovies}),Object(b.jsx)(j,{title:"Romance Movies",fetchUrl:m.fetchRomanceMovies}),Object(b.jsx)(j,{title:"Documentries",fetchUrl:m.fetchDocumantaries})]})}var x=document.getElementById("root");i.a.render(Object(b.jsx)(c.StrictMode,{children:Object(b.jsx)(O,{})}),x)}},[[74,1,2]]]);
//# sourceMappingURL=main.13af7fe2.chunk.js.map