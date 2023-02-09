"use strict";(self.webpackChunkreact_2023_movies=self.webpackChunkreact_2023_movies||[]).push([[93],{6713:function(n,t,e){e.d(t,{Hg:function(){return o},M1:function(){return d},Pg:function(){return s},tx:function(){return p},z1:function(){return u}});var r=e(4165),a=e(5861),c=e(1912),i="59a503cfafa46b9718571bf9985df846";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/week?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",null===(t=e.data)||void 0===t?void 0:t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){var a,o,u,s,d=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=d.length>2&&void 0!==d[2]&&d[2],u=(o=d.length>3?d[3]:void 0)?"&year=".concat(o):"",n.next=5,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&page=").concat(e,"&include_adult=").concat(a).concat(u));case 5:return s=n.sent,n.abrupt("return",s.data.results);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(i,"&language=uk-UA"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,o,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:1,n.next=3,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(i,"&page=").concat(a));case 3:return o=n.sent,n.abrupt("return",null===(e=o.data)||void 0===e?void 0:e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7093:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var r,a,c=e(4165),i=e(5861),o=e(9439),u=e(7689),s=e(2791),d=e(6713),p=e(7199),f=e(8604),l=e(168),h=e(3081),v=h.Z.section(r||(r=(0,l.Z)(["\n    padding: 20px;\n    border: 2px solid ",";\n    border-radius: ","px;\n"])),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.radii.cardBorderRadius})),x=h.Z.ul(a||(a=(0,l.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    justify-content: center;\n    gap: 15px;\n    margin: 0;\n    padding: 0;\n    &>li{\n        width: 100%;\n        background: ",";\n        box-shadow: ",";\n        border-radius: ","px;\n        border: ",";\n        overflow: hidden;\n        cursor: pointer;\n        text-align: center;\n        transition: ",";\n        & img{\n            width: 100%;\n            min-width: 198px;\n            min-height: 297px;\n        }\n        & .actor-name{\n            font-size: 18px;\n            padding: 0 15px;\n        }\n        & .actor-character{\n            padding: 0 15px;\n        }\n    }\n"])),(function(n){return n.theme.colors.cardBg}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.radii.cardBorderRadius}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.transitions.trAllDefLin})),m=e(695),g=e(8143),Z=e(184),w=function(){var n=(0,u.UO)().movieId,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],l=(0,s.useState)(""),h=(0,o.Z)(l,2),w=h[0],E=h[1],b=(0,s.useState)(p.n.IDLE),k=(0,o.Z)(b,2),j=k[0],y=k[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,i.Z)((0,c.Z)().mark((function t(){var e,r,i;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(p.n.PENDING),t.prev=1,t.next=4,(0,d.M1)(n);case 4:(e=t.sent).cast?(r=e.cast.slice(0,10),a(r),y(p.n.RESOLVED)):(E("\u274c Sorry, something went wrong! Cast information not found :("),y(p.n.REJECTED)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),E(null===t.t0||void 0===t.t0||null===(i=t.t0.response.data)||void 0===i?void 0:i.status_message),y(p.n.REJECTED);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]),j===p.n.IDLE?(0,Z.jsx)(Z.Fragment,{}):j===p.n.PENDING?(0,Z.jsx)(v,{children:(0,Z.jsx)(m.Z,{})}):j===p.n.RESOLVED?(0,Z.jsx)(v,{children:(0,Z.jsx)(x,{children:r.map((function(n){var t=n.profile_path,e=n.original_name,r=n.character,a=n.cast_id,c=t?"https://image.tmdb.org/t/p/w500/".concat(t):g;return(0,Z.jsxs)("li",{children:[(0,Z.jsx)("img",{src:c,alt:e}),(0,Z.jsx)("p",{className:"actor-name",children:(0,Z.jsx)("span",{children:e})}),(0,Z.jsxs)("p",{className:"actor-character",children:["Character: ",(0,Z.jsx)("span",{children:r})]})]},a)}))})}):j===p.n.REJECTED?(0,Z.jsx)(v,{children:(0,Z.jsx)(f.Bc,{children:w})}):void 0}},7199:function(n,t,e){e.d(t,{n:function(){return r}});var r={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}},8143:function(n,t,e){n.exports=e.p+"static/media/404.dca0b6ba9dd770e471a5.jpg"}}]);
//# sourceMappingURL=93.914fccef.chunk.js.map