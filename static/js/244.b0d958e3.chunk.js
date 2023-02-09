"use strict";(self.webpackChunkreact_2023_movies=self.webpackChunkreact_2023_movies||[]).push([[244],{6713:function(n,t,e){e.d(t,{Hg:function(){return o},M1:function(){return d},Pg:function(){return s},tx:function(){return p},z1:function(){return i}});var r=e(4165),a=e(5861),c=e(1912),u="59a503cfafa46b9718571bf9985df846";c.Z.defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var t,e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/trending/movie/week?api_key=".concat(u));case 2:return e=n.sent,n.abrupt("return",null===(t=e.data)||void 0===t?void 0:t.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),i=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t,e){var a,o,i,s,d=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=d.length>2&&void 0!==d[2]&&d[2],i=(o=d.length>3?d[3]:void 0)?"&year=".concat(o):"",n.next=5,c.Z.get("/search/movie?api_key=".concat(u,"&query=").concat(t,"&page=").concat(e,"&include_adult=").concat(a).concat(i));case 5:return s=n.sent,n.abrupt("return",s.data.results);case 7:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"?api_key=").concat(u,"&language=uk-UA"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(t){var e,a,o,i=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:1,n.next=3,c.Z.get("/movie/".concat(t,"/reviews?api_key=").concat(u,"&page=").concat(a));case 3:return o=n.sent,n.abrupt("return",null===(e=o.data)||void 0===e?void 0:e.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6244:function(n,t,e){e.r(t),e.d(t,{default:function(){return Z}});var r,a,c=e(4165),u=e(5861),o=e(9439),i=e(7689),s=e(2791),d=e(6713),p=e(7199),f=e(168),l=e(3081),h=l.Z.section(r||(r=(0,f.Z)(["\n    padding: 20px;\n    border: 2px solid ",";\n    border-radius: ","px;\n"])),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.radii.cardBorderRadius})),v=l.Z.ul(a||(a=(0,f.Z)(["\n    padding: 0;\n    margin: 0;\n    list-style: none;\n    &>li{\n        background: ",";\n        padding: 20px;\n        box-shadow: ",";\n        border-radius: ","px;\n        &:not(:last-child){\n            margin: 0 0 30px 0;\n        }\n        &>p{\n            margin: 0;\n        }\n        & .author{\n            font-size: 18px;\n            margin-bottom: 20px;\n            &>span{\n                font-weight: 700;\n            }\n        }\n        & .date{\n            margin-bottom: 10px;\n            font-size: 18px;\n        }\n    }\n"])),(function(n){return n.theme.colors.cardBg}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.radii.cardBorderRadius})),x=e(695),g=e(8604),m=e(184),Z=function(){var n=(0,i.UO)().movieId,t=(0,s.useState)([]),e=(0,o.Z)(t,2),r=e[0],a=e[1],f=(0,s.useState)(""),l=(0,o.Z)(f,2),Z=l[0],E=l[1],w=(0,s.useState)(p.n.IDLE),b=(0,o.Z)(w,2),k=b[0],y=b[1];return(0,s.useEffect)((function(){var t=function(){var t=(0,u.Z)((0,c.Z)().mark((function t(){var e,r;return(0,c.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(p.n.PENDING),t.prev=1,t.next=4,(0,d.tx)(n);case 4:(e=t.sent)&&0!==e.length?(a(e),y(p.n.RESOLVED)):(E("\u274c Sorry, something went wrong! Reviews not found :("),y(p.n.REJECTED)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(1),E(null===t.t0||void 0===t.t0||null===(r=t.t0.response.data)||void 0===r?void 0:r.status_message),y(p.n.REJECTED);case 12:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(){return t.apply(this,arguments)}}();n&&t()}),[n]),k===p.n.IDLE?(0,m.jsx)(m.Fragment,{}):k===p.n.PENDING?(0,m.jsx)(h,{children:(0,m.jsx)(x.Z,{})}):k===p.n.RESOLVED?(0,m.jsx)(h,{children:(0,m.jsx)(v,{children:r.map((function(n){var t=n.author,e=n.content,r=n.created_at,a=n.id,c=new Date(r),u=("0"+c.getDate()).slice(-2),o=("0"+(c.getMonth()+1)).slice(-2),i="".concat(u,".").concat(o,".").concat(c.getFullYear());return(0,m.jsxs)("li",{children:[(0,m.jsxs)("p",{className:"author",children:["Author name: ",(0,m.jsx)("span",{children:t})]}),(0,m.jsxs)("p",{className:"date",children:["Posted at: ",(0,m.jsx)("span",{children:i})]}),(0,m.jsx)("p",{className:"content",children:e})]},a)}))})}):k===p.n.REJECTED?(0,m.jsx)(h,{children:(0,m.jsx)(g.Bc,{children:Z})}):void 0}},7199:function(n,t,e){e.d(t,{n:function(){return r}});var r={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}}}]);
//# sourceMappingURL=244.b0d958e3.chunk.js.map