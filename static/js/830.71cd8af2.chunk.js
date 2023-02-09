"use strict";(self.webpackChunkreact_2023_movies=self.webpackChunkreact_2023_movies||[]).push([[830],{6713:function(n,e,t){t.d(e,{Hg:function(){return c},M1:function(){return d},Pg:function(){return s},tx:function(){return l},z1:function(){return u}});var r=t(4165),i=t(5861),o=t(1912),a="59a503cfafa46b9718571bf9985df846";o.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/trending/movie/week?api_key=".concat(a));case 2:return t=n.sent,n.abrupt("return",null===(e=t.data)||void 0===e?void 0:e.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e,t){var i,c,u,s,d=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=d.length>2&&void 0!==d[2]&&d[2],u=(c=d.length>3?d[3]:void 0)?"&year=".concat(c):"",n.next=5,o.Z.get("/search/movie?api_key=".concat(a,"&query=").concat(e,"&page=").concat(t,"&include_adult=").concat(i).concat(u));case 5:return s=n.sent,n.abrupt("return",s.data.results);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),s=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"?api_key=").concat(a,"&language=uk-UA"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("/movie/".concat(e,"/credits?api_key=").concat(a));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,i.Z)((0,r.Z)().mark((function n(e){var t,i,c,u=arguments;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=u.length>1&&void 0!==u[1]?u[1]:1,n.next=3,o.Z.get("/movie/".concat(e,"/reviews?api_key=").concat(a,"&page=").concat(i));case 3:return c=n.sent,n.abrupt("return",null===(t=c.data)||void 0===t?void 0:t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},4897:function(n,e,t){t.d(e,{Z:function(){return g}});var r,i,o,a,c=t(7689),u=t(1087),s=t(168),d=t(3081),l=d.Z.ul(r||(r=(0,s.Z)(["\n    display: grid;\n    grid-template-columns: repeat(auto-fit, 200px);\n    gap: 25px;\n    margin: 0;\n    padding: 20px;\n    justify-content: center;\n"]))),p=d.Z.p(i||(i=(0,s.Z)(["\n    margin: 0;\n    padding: 20px;\n    font-weight: 700;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    height: 100%;\n    color: ",";\n"])),(function(n){return n.theme.colors.lightText})),f=d.Z.li(o||(o=(0,s.Z)(["\n    width: 100%;\n    background: ",";\n    box-shadow: ",";\n    border-radius: ","px;\n    border: ",";\n    overflow: hidden;\n    cursor: pointer;\n    text-align: center;\n    transition: ",";\n    &>a {\n        text-decoration: none;\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        align-items: center;\n        justify-content: space-between;\n        &>div{\n            width: 100%;\n            position: relative;\n        }\n    }\n    & img{\n        width: 100%;\n        min-width: 198px;\n        min-height: 297px;\n        transition: ",";\n    }\n    &:hover{\n        & img{\n            opacity: 0.6;\n        }\n        background: ",";\n    }\n"])),(function(n){return n.theme.colors.cardBg}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.radii.cardBorderRadius}),(function(n){return n.theme.colors.border}),(function(n){return n.theme.transitions.trAllDefLin}),(function(n){return n.theme.transitions.trAllDefLin}),(function(n){return n.theme.colors.whiteText})),h=d.Z.p(a||(a=(0,s.Z)(["\n    position: absolute;\n    bottom: 10px;\n    right: 5px;\n    background: ",";\n    color: ",";\n    border-radius: ","px;\n    padding: 5px 10px;\n    font-weight: 700;\n    font-size: 14px;\n    line-height: 1;\n    margin: 0;\n"])),(function(n){return n.theme.colors.btnGrad}),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.radii.input})),x=t(8143),m=t(184),g=function(n){var e=n.movies,t=(0,c.TH)();return(0,m.jsx)(l,{children:e.map((function(n){var e=n.id,r=n.title,i=n.poster_path,o=n.vote_average,a=i?"https://image.tmdb.org/t/p/w500".concat(i):x,c=Math.round(100*(o+Number.EPSILON))/100;return(0,m.jsx)(f,{children:(0,m.jsxs)(u.rU,{to:"/react-2023-movies/movies/".concat(e),state:{from:t},children:[(0,m.jsxs)("div",{children:[(0,m.jsx)("img",{src:a,alt:r}),(0,m.jsx)(h,{children:c})]}),(0,m.jsx)(p,{children:(0,m.jsx)("span",{children:r})})]})},e)}))})}},7199:function(n,e,t){t.d(e,{n:function(){return r}});var r={IDLE:"idle",PENDING:"pending",REJECTED:"rejected",RESOLVED:"resolved"}},830:function(n,e,t){t.r(e),t.d(e,{default:function(){return I}});var r,i,o,a,c,u,s,d=t(4165),l=t(5861),p=t(8683),f=t(3433),h=t(9439),x=t(6713),m=t(2791),g=t(1087),b=t(4897),v=t(695),y=t(2797),Z=t(5984),w=t(5705),j=t(168),k=t(3081),E=(0,k.Z)(w.l0)(r||(r=(0,j.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 16px;\n    border: ",";\n    border-radius: ","px;\n    mix-blend-mode: soft-light;\n    box-shadow: ",";\n    margin-top: 15px;\n    background: ",";\n    &>div{\n        display: flex;\n        align-items: flex-start;\n        justify-content: space-between;\n        width: 100%;\n    }\n    @media screen and (max-width: 768px) {\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-between;\n        &>div{\n            flex-direction: column;\n        }\n    }\n"])),(function(n){return n.theme.colors.border}),(function(n){return n.theme.radii.cardBorderRadius}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.colors.cardBg})),D=k.Z.div(i||(i=(0,j.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: center;\n    width: 100%;\n    &>label{\n        font-size: 15px;\n        margin-bottom: 5px;\n    }\n    margin-right: 20px;\n    @media screen and (max-width: 768px) {\n        margin: 0 0 15px 0;\n    }\n"]))),S=k.Z.button(o||(o=(0,j.Z)(["\n    padding: 8px 16px;\n    border-radius: ","px;\n    outline: none;\n    border: 1px solid ","; \n    color: black;\n    font-weight: 500;\n    margin-left: 10px;\n    min-width: 100px;\n    transition: ","; \n    background-color: ","; \n    box-shadow: ",";\n    cursor: pointer;\n    margin: 0;\n    &:hover{\n        background-color: ","; \n    }\n    @media screen and (max-width: 768px) {\n        min-width: 180px;\n    }\n"])),(function(n){return n.theme.radii.button}),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.transitions.trAllDefLin}),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.colors.boxShadow}),(function(n){return n.theme.colors.cardBg})),N=(0,k.Z)(w.gN)(a||(a=(0,j.Z)(['\n    &[type="text"], &[type="number"]{\n        background: #ffffff;\n        display: inline-block;\n        width: 100%;\n        border-radius: ','px;\n        border: 1px solid #f3f3f3;\n        outline: none;\n        padding: 5px 10px;\n        font-size: 14px;\n    }\n    &[type="checkbox"]{\n        margin-right: 5px;\n    }\n\n'])),(function(n){return n.theme.radii.input})),q=(0,k.Z)(w.Bc)(c||(c=(0,j.Z)(["\n    color: ",";\n    margin-top: 5px;\n    padding: 5px 10px;\n    display: inline-block;\n    width: 100%;\n    background:  ",";\n    border-radius: ","px;\n"])),(function(n){return n.theme.colors.dangerColor}),(function(n){return n.theme.colors.dangerBg}),(function(n){return n.theme.radii.input})),L=t(184),R=function(n){var e=n.values,t=n.submitHandler,r=(0,Z.x0)(),i=(0,Z.x0)(),o=(0,Z.x0)(),a=y.Ry().shape({query:y.Z_().required("Required")});return(0,L.jsx)(w.J9,{initialValues:e,validationSchema:a,onSubmit:function(n,e){t(n)},children:(0,L.jsxs)(E,{children:[(0,L.jsxs)("div",{children:[(0,L.jsxs)(D,{children:[(0,L.jsx)("label",{htmlFor:r,children:"Search Qery*"}),(0,L.jsx)(N,{type:"text",id:r,name:"query",placeholder:"Enter search query"}),(0,L.jsx)(q,{name:"query",component:"div"})]}),(0,L.jsxs)(D,{children:[(0,L.jsx)("label",{htmlFor:o,children:"Year of release"}),(0,L.jsx)(N,{type:"number",id:o,name:"year",placeholder:"Enter search year"})]}),(0,L.jsx)(D,{children:(0,L.jsxs)("label",{htmlFor:i,children:[(0,L.jsx)(N,{type:"checkbox",id:i,name:"adult"}),"Adult included"]})})]}),(0,L.jsx)(S,{type:"submit",children:"\ud83d\udd0d Search"})]})})},_=k.Z.button(u||(u=(0,j.Z)(["\n    padding: 8px 16px;\n    border-radius: ","px;\n    background:  ",";\n    transition: ",";\n    text-align: center;\n    display: inline-block;\n    color: ",";\n    border: 0;\n    font-size: 18px;\n    cursor: pointer;\n    min-width: 180px;\n    box-shadow:  ",";\n    &:hover, &:focus {\n      opacity: 0.8;\n    }\n"])),(function(n){return n.theme.radii.button}),(function(n){return n.theme.colors.btnGrad}),(function(n){return n.theme.transitions.trAllDefLin}),(function(n){return n.theme.colors.whiteText}),(function(n){return n.theme.colors.boxShadow})),T=k.Z.div(s||(s=(0,j.Z)(["\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 20px 0 40px 0;\n"]))),B=function(n){var e=n.clickHandler;return(0,L.jsx)(T,{children:(0,L.jsx)(_,{type:"button",onClick:function(){return e()},children:"Load More"})})},C=t(7199),H=t(8604),I=function(){var n=(0,g.lr)(),e=(0,h.Z)(n,2),t=e[0],r=e[1],i=(0,m.useMemo)((function(){return Object.fromEntries((0,f.Z)(t))}),[t]),o=i.query,a=i.page,c=i.adult,u=i.year,s=(0,m.useState)([]),y=(0,h.Z)(s,2),Z=y[0],w=y[1],j=(0,m.useState)(""),k=(0,h.Z)(j,2),E=k[0],D=k[1],S=(0,m.useState)(C.n.IDLE),N=(0,h.Z)(S,2),q=N[0],_=N[1],T=(0,m.useRef)(!0),I=function(n){var e=n.query,t=n.adult,i=n.year;D("");var o=i?{year:i}:{};w([]),r((0,p.Z)({query:e,page:"1",adult:t},o))};(0,m.useEffect)((function(){var n=function(){var n=(0,l.Z)((0,d.Z)().mark((function n(){var e;return(0,d.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return _(C.n.PENDING),n.prev=1,n.next=4,x.z1(o,a,c,u);case 4:0===(e=n.sent).length?(D("\u274c Nothing found for your request: ".concat(o,", on page ").concat(a,". Please, go back or change your search parameters.")),_(C.n.REJECTED),w([])):(w((function(n){return[].concat((0,f.Z)(n),(0,f.Z)(e))})),_(C.n.RESOLVED)),n.next=13;break;case 8:n.prev=8,n.t0=n.catch(1),D(n.t0),_(C.n.REJECTED),w([]);case 13:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}}();T.current?T.current=!1:o&&n()}),[o,a,c,u]);var P=function(){return{query:o||"",adult:"true"===c,year:u?Number(u):""}};return q===C.n.IDLE?(0,L.jsx)("main",{children:(0,L.jsx)(R,{values:P(),submitHandler:I})}):q===C.n.PENDING||q===C.n.RESOLVED?(0,L.jsxs)("main",{children:[(0,L.jsx)(R,{values:P(),submitHandler:I}),(0,L.jsx)(b.Z,{movies:Z}),q===C.n.PENDING?(0,L.jsx)(v.Z,{}):(0,L.jsx)(B,{clickHandler:function(){var n=Number(a)+1,e=u?{year:u}:{};r((0,p.Z)({query:o,page:n,adult:c},e))}})]}):q===C.n.REJECTED?(0,L.jsxs)("main",{children:[(0,L.jsx)(R,{values:P(),submitHandler:I}),(0,L.jsx)(H.Bc,{children:E})]}):void 0}},8143:function(n,e,t){n.exports=t.p+"static/media/404.dca0b6ba9dd770e471a5.jpg"}}]);
//# sourceMappingURL=830.71cd8af2.chunk.js.map