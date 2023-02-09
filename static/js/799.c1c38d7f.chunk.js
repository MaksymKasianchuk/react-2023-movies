"use strict";(self.webpackChunkreact_2023_movies=self.webpackChunkreact_2023_movies||[]).push([[799],{6713:function(n,t,e){e.d(t,{Hg:function(){return c},M1:function(){return d},Pg:function(){return s},tx:function(){return p},z1:function(){return u}});var r=e(4165),i=e(5861),a=e(1912),o="59a503cfafa46b9718571bf9985df846";a.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/trending/movie/week?api_key=".concat(o));case 2:return e=n.sent,n.abrupt("return",null===(t=e.data)||void 0===t?void 0:t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t,e){var i,c,u,s,d=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],u=(c=d.length>3?d[3]:void 0)?"&year=".concat(c):"",n.next=5,a.Z.get("/search/movie?api_key=".concat(o,"&query=").concat(t,"&page=").concat(e,"&include_adult=").concat(i).concat(u));case 5:return s=n.sent,n.abrupt("return",s.data.results);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(t,"?api_key=").concat(o,"&language=uk-UA"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("/movie/".concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(t){var e,i,c,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=u.length>1&&void 0!==u[1]?u[1]:1,n.next=3,a.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(o,"&page=").concat(i));case 3:return c=n.sent,n.abrupt("return",null===(e=c.data)||void 0===e?void 0:e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},4897:function(n,t,e){e.d(t,{Z:function(){return m}});var r,i,a,o,c=e(7689),u=e(1087),s=e(168),d=e(3081),p=d.Z.ul(r||(r=(0,s.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    gap: 25px;\n    margin: 0;\n    padding: 20px;\n    justify-content: center;\n"]))),f=d.Z.p(i||(i=(0,s.Z)(["\n    margin: 0;\n    padding: 20px;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    color: ",";\n"])),(function(n){return n.theme.colors.lightText})),h=d.Z.li(a||(a=(0,s.Z)(["\n    width: 100%;\n    background: ",";\n    box-shadow: ",";\n    border-radius: ","px;\n    border: ",";\n    overflow: hidden;\n    cursor: pointer;\n    text-align: center;\n    transition: ",";\n    &>a {\n        text-decoration: none;\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        align-items: center;\n        justify-content: space-between;\n        &>div{\n            width: 100%;\n            position: relative;\n        }\n    }\n    & img{\n        width: 100%;\n        min-width: 198px;\n        min-height: 297px;\n        transition: ",";\n    }\n    &:hover{\n        & img{\n            opacity: 0.6;\n        }\n        background: ",";\n    }\n"])),(function(n){return n.theme.colors.cardBg}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.radii.cardBorderRadius}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.transitions.trAllDefLin}),(function(n){return n.theme.transitions.trAllDefLin}),(function(n){return n.theme.colors.whiteText})),l=d.Z.p(o||(o=(0,s.Z)(["\n    position: absolute;\n    bottom: 10px;\n    right: 5px;\n    background: ",";\n    color: ",";\n    border-radius: ","px;\n    padding: 5px 10px;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 1;\n    margin: 0;\n"])),(function(n){return n.theme.colors.btnGrad}),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.radii.input})),v=e(8143),g=e(184),m=function(n){var t=n.movies,e=(0,c.TH)();return(0,g.jsx)(p,{children:t.map((function(n){var t=n.id,r=n.title,i=n.poster_path,a=n.vote_average,o=i?"https://image.tmdb.org/t/p/w500".concat(i):v,c=Math.round(100*(a+Number.EPSILON))/100;return(0,g.jsx)(h,{children:(0,g.jsxs)(u.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,g.jsxs)("div",{children:[(0,g.jsx)("img",{src:o,alt:r}),(0,g.jsx)(l,{children:c})]}),(0,g.jsx)(f,{children:(0,g.jsx)("span",{children:r})})]})},t)}))})}},3799:function(n,t,e){e.r(t),e.d(t,{default:function(){return m}});var r,i,a=e(4165),o=e(5861),c=e(9439),u=e(6713),s=e(2791),d=e(4897),p=e(168),f=e(3081),h=f.Z.section(r||(r=(0,p.Z)(["\n    background:  ",";\n    border-radius: ","px;\n    overflow: hidden;\n    padding: 40px 0;\n    margin 0;\n   \n"])),(function(n){return n.theme.colors.cardBgColor}),(function(n){return n.theme.radii.cardBorderRadius})),l=f.Z.h2(i||(i=(0,p.Z)(["\n    text-align: center;\n    margin-top: 0;\n"]))),v=e(184),g=function(n){var t=n.title,e=n.children;return(0,v.jsxs)(h,{children:[t&&(0,v.jsx)(l,{children:t}),e]})},m=function(){var n=(0,s.useState)([]),t=(0,c.Z)(n,2),e=t[0],r=t[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,o.Z)((0,a.Z)().mark((function n(){var t;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,u.Hg();case 3:t=n.sent,r(t),n.next=10;break;case 7:throw n.prev=7,n.t0=n.catch(0),new Error("can't fetch trending: ".concat(n.t0));case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,v.jsx)(g,{title:"Weekly trending movies",children:(0,v.jsx)(d.Z,{movies:e})})}},8143:function(n,t,e){n.exports=e.p+"static/media/404.dca0b6ba9dd770e471a5.jpg"}}]);
//# sourceMappingURL=799.c1c38d7f.chunk.js.map