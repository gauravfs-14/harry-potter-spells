(this["webpackJsonpscrollytelling-charts"]=this["webpackJsonpscrollytelling-charts"]||[]).push([[0],{23:function(e,n,t){e.exports=t.p+"static/media/HarryP-Title.181ef9a7.ttf"},24:function(e,n,t){e.exports=t.p+"static/media/PublicoText-Roman-Web.5f2e0ae8.woff2"},25:function(e,n,t){e.exports=t.p+"static/media/National2Web-Regular.dc4310e6.woff"},26:function(e,n,t){e.exports=t.p+"static/media/National2Web-Regular.2414fbff.woff2"},32:function(e,n,t){e.exports=t(42)},39:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var l=t(0),i=t.n(l),s=t(19),p=t.n(s),o=t(3),a=t(2),r=t(4),m=t(5),c=t(1),u=t.n(c),y=(t(39),t(7)),f=t(6),h=t(45),d=t(27),g=function(e){return u.a.get(u.a.maxBy(e,(function(e){return e.mentions})),"mentions")},S=function(e,n,t){var l=u.a.orderBy(f[e],["mentions"],["desc"]),i=l.length,s=u.a.findIndex(l,{spell:n});if(-1===s)return null;var p=Object(d.a)().domain([0,g(l)]).range([0,t/2]),o=u.a.find(l,{spell:n});return Object(h.a)().startAngle(2*Math.PI/i*s).endAngle(2*Math.PI/i*(s+1)).innerRadius(0).outerRadius(p(o.mentions))()},b=function(e,n){var t=u.a.orderBy(f[e],["mentions"],["desc"]),l=t.length,i=u.a.findIndex(t,{spell:n});return-1===i?null:Object(h.a)().startAngle(2*Math.PI/l*i).endAngle(2*Math.PI/l*(i+1)).innerRadius(0).outerRadius(5)()},v=function(e){var n=e.data,t=e.pathA,s=e.pathB,p=Object(l.useState)(null),o=Object(r.a)(p,2),a=o[0],m=o[1],c=Object(l.useState)(!1),f=Object(r.a)(c,2),h=f[0],d=f[1],g=n.mentions<3,S=Object(y.b)({config:{duration:1500},d:s,opacity:g?.4:1,from:{d:t,opacity:0}}),b="".concat(g?"insignificant ":"").concat(n.type.toLowerCase()),v=u.a.isNull(a)?0:-window.innerWidth/2+a.x,C=u.a.isNull(a)?0:-window.innerHeight/2+a.y,x=v+90,E=C+40+7;return i.a.createElement(i.a.Fragment,null,i.a.createElement("g",{className:b,onMouseEnter:function(e){m({x:e.nativeEvent.clientX,y:e.nativeEvent.clientY}),d(!0)},onMouseLeave:function(){d(!1),m(null)}},i.a.createElement(y.a.path,S)),h?i.a.createElement("g",null,i.a.createElement("rect",{fill:"white",x:v,y:C,height:80,width:180,rx:10}),i.a.createElement("text",{x:x,y:E,style:{font:"".concat(14,"px")},textAnchor:"middle"},n.spell," : ",n.mentions)):null)},C=function(e){var n=e.dms,t=e.i,l=e.spellType,s=e.spellTypes,p=e.percentage,o=(n.marginBottom-10*s.length*2)/(s.length+1),a=.5*n.width,r=0===t?o+10:(o+20)*t+(o+10);return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a.text,{key:"".concat(l,"-percent"),x:a-60,y:r,fill:"white"},p,"%"),i.a.createElement("circle",{key:"".concat(l,"-circle"),className:l,r:10,cx:a,cy:r-5}),i.a.createElement("text",{key:"".concat(l,"-label"),x:a+10+20,y:r,fill:"white"},l))},x=function(e){var n=e.dms,t=e.data,l=["charm","spell","jinx","hex","curse","unforgivable"],s=u.a.sumBy(t,"mentions"),p={};return l.forEach((function(e){var n=u.a.sumBy(t,(function(n){return n.type.toLowerCase()===e?n.mentions:0}));p[e]=n})),i.a.createElement("g",{transform:"translate(".concat([n.marginLeft,n.height+n.marginTop-n.marginBottom].join(","),")")},l.map((function(e,t){return i.a.createElement(C,{dms:n,i:t,spellType:e,spellTypes:l,percentage:parseInt((p[e]/s*100).toFixed())})})))},E=t(10),O=t(28),j=function(e){var n=Object(E.a)({},e,{marginTop:e.marginTop||0,marginRight:e.marginRight||0,marginBottom:e.marginBottom||0,marginLeft:e.marginLeft||0});return Object(E.a)({},n,{boundedHeight:Math.max(n.height-n.marginTop-n.marginBottom,0),boundedWidth:Math.max(n.width-n.marginLeft-n.marginRight,0)})},w=function(e){var n=Object(l.useRef)(),t=j(e),i=Object(l.useState)(0),s=Object(r.a)(i,2),p=s[0],o=s[1],a=Object(l.useState)(0),m=Object(r.a)(a,2),c=m[0],u=m[1];Object(l.useEffect)((function(){if(t.width&&t.height)return[n,t];var e=n.current,l=new O.a((function(e){if(Array.isArray(e)&&e.length){var n=e[0];p!=n.contentRect.width&&o(n.contentRect.width),c!=n.contentRect.height&&u(n.contentRect.height)}}));return l.observe(e),function(){return l.unobserve(e)}}),[]);var y=j(Object(E.a)({},t,{width:t.width||p,height:t.height||c}));return[n,y]};function R(){var e=Object(o.a)(["\n  transform: ",";\n"]);return R=function(){return e},e}function A(){var e=Object(o.a)(["\n  height: 85vh;\n  position: sticky;\n  top: 10%;\n  margin-right: 20px;\n"]);return A=function(){return e},e}var P=a.b.div(A()),k=a.b.g(R(),(function(e){return"translate(".concat(e.canvasWidth/2,"px, ").concat(e.canvasHeight/2,"px)")})),L=function(e){var n=e.fullData,t=e.currentBook,l=e.previousBook,s=u.a.map(n[t],(function(e){return e.spell})),p=u.a.map(n[l],(function(e){return e.spell})),o=w({marginBottom:200}),a=Object(r.a)(o,2),m=a[0],c=a[1];return i.a.createElement(P,{ref:m},i.a.createElement("svg",{height:c.height,width:c.width},i.a.createElement("g",{transform:"translate(".concat([c.marginLeft,c.marginTop].join(","),")")},i.a.createElement(k,{canvasWidth:c.width,canvasHeight:c.height},u.a.map(n[t],(function(e){var n=s.includes(e.spell)&&!p.includes(e.spell);return 0!==c.height&&0!==c.width?i.a.createElement(v,{key:"".concat(e.spell).concat(e.book),data:e,pathA:n?b(t,e.spell):S(l,e.spell,u.a.min([c.boundedWidth,c.boundedHeight])),pathB:S(t,e.spell,u.a.min([c.boundedWidth,c.boundedHeight]))}):null})))),i.a.createElement(x,{dms:c,data:n[t]})))};function I(){var e=Object(o.a)(["\n  margin-top: 40px;\n"]);return I=function(){return e},e}function B(){var e=Object(o.a)(["\n  margin: 50vh 0;\n  font-size: 50px;\n  height: 200px;\n  display: flex;\n  align-items: center;\n"]);return B=function(){return e},e}function T(){var e=Object(o.a)(["\n  width: 90%;\n"]);return T=function(){return e},e}function M(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 10%;\n"]);return M=function(){return e},e}function H(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n"]);return H=function(){return e},e}var J=a.b.div(H()),D=a.b.div(M()),N=a.b.div(T()),W=a.b.div(B()),F=a.b.div(I()),U=function(){var e=Object(l.useState)(1),n=Object(r.a)(e,2),t=n[0],s=n[1],p=Object(l.useState)(0),o=Object(r.a)(p,2),a=o[0],c=o[1];return u.a.isEmpty(f[t])?i.a.createElement(F,null,"Loading..."):i.a.createElement(J,null,i.a.createElement(D,null,i.a.createElement(m.a,{onStepEnter:function(e){var n=e.data,t=e.direction;"up"===t?c(n+1):"down"===t&&c(n-1),s(n)},offset:.7},u.a.range(1,8).map((function(e){return i.a.createElement(m.b,{data:e,key:e},i.a.createElement(W,null,e))})))),i.a.createElement(N,null,i.a.createElement(L,{fullData:f,currentBook:t,previousBook:a})))};function z(){var e=Object(o.a)(["\n  text-align: center;\n"]);return z=function(){return e},e}function K(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return K=function(){return e},e}function G(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return G=function(){return e},e}a.b.div(G()),a.b.div(K()),a.b.h3(z());var V=t(29);function Q(){var e=Object(o.a)(["\n  height: 40px;\n  margin-top: 15px;\n"]);return Q=function(){return e},e}function X(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n  height: 100vh;\n"]);return X=function(){return e},e}var Y=a.b.div(X()),q=Object(a.b)(V.a)(Q()),Z=function(){var e=Object(l.useState)(0),n=Object(r.a)(e,2),t=n[0],s=n[1],p=Object(y.b)((function(){return{opacity:1}})),o=Object(r.a)(p,3),a=o[0],c=o[1];o[2];return c({opacity:3===t?0:1}),i.a.createElement(Y,null,i.a.createElement(m.a,{onStepEnter:function(e){var n=e.data;s(n)},offset:.2},i.a.createElement(m.b,{data:0,key:0},i.a.createElement("h1",null,'"It\'s LeviOsa, not LevioSA!"')),i.a.createElement(m.b,{data:1,key:1},i.a.createElement("h2",null,"\u26a1\ufe0f Visualizing the spells mentioned across the Harry Potter series \u26a1\ufe0f")),i.a.createElement(m.b,{data:2,key:2},i.a.createElement("h3",null,"By Michelle McGhee")),i.a.createElement(m.b,{data:3,key:3},i.a.createElement(y.a.div,{style:Object(E.a)({display:"flex",flexDirection:"column",marginTop:"100px"},a)},i.a.createElement("div",null,"Scroll to advance the story"),i.a.createElement(q,null)))))},$=t(23),_=t.n($),ee=t(24),ne=t.n(ee),te=t(25),le=t.n(te),ie=t(26),se=t.n(ie);function pe(){var e=Object(o.a)(["\n  @font-face {\n    font-family: 'Harry Potter Title';\n    src: url(",");\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Publico';\n    src: url(",");\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'National 2 Web';\n    src: url(",") format('woff2'), url(",") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n"]);return pe=function(){return e},e}var oe=Object(a.a)(pe(),_.a,ne.a,le.a,se.a);function ae(){var e=Object(o.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ae=function(){return e},e}function re(){var e=Object(o.a)(["\n  h1 {\n    font-family: \"Harry Potter Title\";\n    font-size: 4em;\n  }\n\n  body {\n    background: #302f2c;\n    margin: 0;\n    font-family: 'National 2 Web', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: white;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"]);return re=function(){return e},e}var me=Object(a.a)(re()),ce=a.b.div(ae());var ue=function(){return Object(l.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(me,null),i.a.createElement(oe,null),i.a.createElement(ce,null,i.a.createElement(Z,null),i.a.createElement(U,null)))};p.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ue,null)),document.getElementById("root"))},6:function(e){e.exports=JSON.parse('{"1":[{"spell":"Alohomora","mentions":2,"type":"Charm"},{"spell":"(Anti-Cheating Spell)","mentions":1,"type":"Spell"},{"spell":"Bluebell Flames","mentions":1,"type":"Spell"},{"spell":"Locomotor Mortis","mentions":1,"type":"Curse"},{"spell":"Mimblewimble","mentions":1,"type":"Curse"},{"spell":"Petrificus Totalus","mentions":1,"type":"Curse"},{"spell":"Switching Spell","mentions":1,"type":"Spell"},{"spell":"Wingardium Leviosa","mentions":3,"type":"Charm"}],"2":[{"spell":"Aparecium","mentions":1,"type":"Spell"},{"spell":"Apparate","mentions":2,"type":"Spell"},{"spell":"Expelliarmus","mentions":3,"type":"Charm"},{"spell":"Homorphus","mentions":1,"type":"Charm"},{"spell":"Lumos","mentions":2,"type":"Spell"},{"spell":"Obliviate","mentions":1,"type":"Charm"},{"spell":"Peskipiksi Pesternomi","mentions":1,"type":"Spell"},{"spell":"Rictusempra","mentions":1,"type":"Charm"},{"spell":"Serpensortia","mentions":1,"type":"Spell"},{"spell":"Tarantallegra","mentions":1,"type":"Jinx"}],"3":[{"spell":"Alohomora","mentions":1,"type":"Charm"},{"spell":"Apparate","mentions":7,"type":"Spell"},{"spell":"(Cheering Charm)","mentions":7,"type":"Charm"},{"spell":"Confundus","mentions":1,"type":"Charm"},{"spell":"Dissendium","mentions":4,"type":"Spell"},{"spell":"Expecto Patronum","mentions":25,"type":"Charm"},{"spell":"Expelliarmus","mentions":4,"type":"Charm"},{"spell":"Ferula","mentions":1,"type":"Spell"},{"spell":"Fidelius","mentions":2,"type":"Charm"},{"spell":"Impervius","mentions":1,"type":"Charm"},{"spell":"Lumos","mentions":4,"type":"Spell"},{"spell":"Mobiliarbus","mentions":1,"type":"Charm"},{"spell":"Mobilicorpus","mentions":1,"type":"Spell"},{"spell":"Nox","mentions":1,"type":"Spell"},{"spell":"Riddikulus","mentions":11,"type":"Spell"},{"spell":"Waddiwasi","mentions":1,"type":"Spell"}],"4":[{"spell":"Accio","mentions":8,"type":"Charm"},{"spell":"(Age Line)","mentions":8,"type":"Charm"},{"spell":"Apparate","mentions":27,"type":"Spell"},{"spell":"Avada Kedavra","mentions":9,"type":"Unforgivable"},{"spell":"Avis","mentions":1,"type":"Spell"},{"spell":"Confundus","mentions":1,"type":"Charm"},{"spell":"Conjunctivitis","mentions":1,"type":"Curse"},{"spell":"Crucio","mentions":5,"type":"Unforgivable"},{"spell":"Deletrius","mentions":1,"type":"Spell"},{"spell":"Densaugeo","mentions":1,"type":"Hex"},{"spell":"Diffindo","mentions":1,"type":"Spell"},{"spell":"(Drought Charm)","mentions":1,"type":"Charm"},{"spell":"Engorgio","mentions":1,"type":"Charm"},{"spell":"Ennervate","mentions":3,"type":"Spell"},{"spell":"Expecto Patronum","mentions":1,"type":"Charm"},{"spell":"Expelliarmus","mentions":3,"type":"Charm"},{"spell":"(Extinguishing Spell)","mentions":1,"type":"Spell"},{"spell":"Furnunculus","mentions":2,"type":"Jinx"},{"spell":"Impedimenta","mentions":4,"type":"Jinx"},{"spell":"Imperio","mentions":6,"type":"Unforgivable"},{"spell":"Incendio","mentions":1,"type":"Spell"},{"spell":"Lumos","mentions":4,"type":"Spell"},{"spell":"Obliviate","mentions":1,"type":"Charm"},{"spell":"Orchideous","mentions":1,"type":"Spell"},{"spell":"Point Me","mentions":2,"type":"Charm"},{"spell":"Priori Incantatem","mentions":2,"type":"Spell"},{"spell":"Prior Incantato","mentions":1,"type":"Spell"},{"spell":"Quietus","mentions":1,"type":"Spell"},{"spell":"Reducio","mentions":1,"type":"Spell"},{"spell":"Reducto","mentions":4,"type":"Curse"},{"spell":"Relashio","mentions":1,"type":"Jinx"},{"spell":"Rennervate","mentions":3,"type":"Spell"},{"spell":"Reparo","mentions":1,"type":"Spell"},{"spell":"Riddikulus","mentions":1,"type":"Spell"},{"spell":"Sonorus","mentions":3,"type":"Spell"},{"spell":"Stupefy","mentions":10,"type":"Spell"},{"spell":"Switching Spell","mentions":2,"type":"Spell"},{"spell":"(Unbreakable Charm)","mentions":1,"type":"Charm"}],"5":[{"spell":"Accio","mentions":10,"type":"Charm"},{"spell":"Alohomora","mentions":4,"type":"Charm"},{"spell":"Apparate","mentions":14,"type":"Spell"},{"spell":"Avada Kedavra","mentions":3,"type":"Unforgivable"},{"spell":"Bat-Bogey Hex","mentions":2,"type":"Hex"},{"spell":"(Cheering Charm)","mentions":1,"type":"Charm"},{"spell":"Colloportus","mentions":3,"type":"Spell"},{"spell":"Crucio","mentions":4,"type":"Unforgivable"},{"spell":"Diffindo","mentions":1,"type":"Spell"},{"spell":"(Disillusionment Charm)","mentions":3,"type":"Charm"},{"spell":"Entrail-Expelling","mentions":1,"type":"Curse"},{"spell":"Evanesco","mentions":2,"type":"Spell"},{"spell":"Expecto Patronum","mentions":4,"type":"Charm"},{"spell":"Expelliarmus","mentions":7,"type":"Charm"},{"spell":"Flagrate","mentions":1,"type":"Spell"},{"spell":"(Flying Charm)","mentions":1,"type":"Charm"},{"spell":"Impedimenta","mentions":5,"type":"Jinx"},{"spell":"Imperio","mentions":2,"type":"Unforgivable"},{"spell":"Impervius","mentions":3,"type":"Charm"},{"spell":"Incarcerous","mentions":1,"type":"Spell"},{"spell":"Legilimens","mentions":6,"type":"Spell"},{"spell":"Lumos","mentions":3,"type":"Spell"},{"spell":"Nox","mentions":1,"type":"Spell"},{"spell":"Obliteration","mentions":1,"type":"Charm"},{"spell":"Permanent Sticking","mentions":3,"type":"Charm"},{"spell":"Petrificus Totalus","mentions":4,"type":"Curse"},{"spell":"Portus","mentions":5,"type":"Charm"},{"spell":"Protego","mentions":4,"type":"Charm"},{"spell":"Reducto","mentions":3,"type":"Curse"},{"spell":"Reparo","mentions":3,"type":"Spell"},{"spell":"Riddikulus","mentions":6,"type":"Spell"},{"spell":"Scourgify","mentions":3,"type":"Charm"},{"spell":"Silencio","mentions":8,"type":"Spell"},{"spell":"Stupefy","mentions":7,"type":"Spell"},{"spell":"Switching Spell","mentions":1,"type":"Spell"},{"spell":"Tarantallegra","mentions":1,"type":"Jinx"},{"spell":"Wingardium Leviosa","mentions":1,"type":"Charm"}],"6":[{"spell":"Accio","mentions":3,"type":"Charm"},{"spell":"Aguamenti","mentions":9,"type":"Charm"},{"spell":"Alohomora","mentions":1,"type":"Charm"},{"spell":"Anapneo","mentions":1,"type":"Spell"},{"spell":"Apparate","mentions":30,"type":"Spell"},{"spell":"Avada Kedavra","mentions":3,"type":"Unforgivable"},{"spell":"Avis","mentions":1,"type":"Spell"},{"spell":"Bat-Bogey Hex","mentions":2,"type":"Hex"},{"spell":"Crucio","mentions":2,"type":"Unforgivable"},{"spell":"Diffindo","mentions":1,"type":"Spell"},{"spell":"(Disillusionment Charm)","mentions":1,"type":"Charm"},{"spell":"Ennervate","mentions":2,"type":"Spell"},{"spell":"Episkey","mentions":2,"type":"Spell"},{"spell":"Expelliarmus","mentions":2,"type":"Charm"},{"spell":"Impedimenta","mentions":3,"type":"Jinx"},{"spell":"Imperio","mentions":2,"type":"Unforgivable"},{"spell":"Incarcerous","mentions":1,"type":"Spell"},{"spell":"Incendio","mentions":2,"type":"Spell"},{"spell":"Langlock","mentions":1,"type":"Jinx"},{"spell":"Legilimens","mentions":1,"type":"Spell"},{"spell":"Levicorpus","mentions":5,"type":"Jinx"},{"spell":"Liberacorpus","mentions":1,"type":"Spell"},{"spell":"Lumos","mentions":3,"type":"Spell"},{"spell":"Muffliato","mentions":6,"type":"Spell"},{"spell":"Nox","mentions":2,"type":"Spell"},{"spell":"Oppugno","mentions":1,"type":"Jinx"},{"spell":"Petrificus Totalus","mentions":5,"type":"Curse"},{"spell":"Protego","mentions":1,"type":"Charm"},{"spell":"Reducto","mentions":2,"type":"Curse"},{"spell":"Relashio","mentions":1,"type":"Jinx"},{"spell":"Rennervate","mentions":2,"type":"Spell"},{"spell":"Reparo","mentions":4,"type":"Spell"},{"spell":"Revelio","mentions":2,"type":"Spell"},{"spell":"Sectumsempra","mentions":9,"type":"Curse"},{"spell":"Specialis Revelio","mentions":2,"type":"Spell"},{"spell":"Stupefy","mentions":1,"type":"Spell"},{"spell":"Tergeo","mentions":1,"type":"Spell"},{"spell":"(Unbreakable Vow)","mentions":7,"type":"Spell"}],"7":[{"spell":"Accio","mentions":12,"type":"Charm"},{"spell":"Aguamenti","mentions":2,"type":"Charm"},{"spell":"Alohomora","mentions":1,"type":"Charm"},{"spell":"Apparate","mentions":38,"type":"Spell"},{"spell":"Avada Kedavra","mentions":7,"type":"Unforgivable"},{"spell":"Avis","mentions":1,"type":"Spell"},{"spell":"Bluebell Flames","mentions":1,"type":"Spell"},{"spell":"Cascading","mentions":1,"type":"Jinx"},{"spell":"Caterwauling","mentions":1,"type":"Charm"},{"spell":"Cave Inimicum","mentions":2,"type":"Charm"},{"spell":"Confringo","mentions":2,"type":"Curse"},{"spell":"Confundus","mentions":1,"type":"Charm"},{"spell":"Crucio","mentions":4,"type":"Unforgivable"},{"spell":"(Cushioning Charm)","mentions":1,"type":"Charm"},{"spell":"Defodio","mentions":1,"type":"Spell"},{"spell":"Deprimo","mentions":1,"type":"Spell"},{"spell":"Descendo","mentions":2,"type":"Spell"},{"spell":"Diffindo","mentions":4,"type":"Spell"},{"spell":"(Disillusionment Charm)","mentions":6,"type":"Charm"},{"spell":"Duro","mentions":1,"type":"Spell"},{"spell":"Engorgio","mentions":1,"type":"Charm"},{"spell":"Erecto","mentions":1,"type":"Spell"},{"spell":"Expecto Patronum","mentions":4,"type":"Charm"},{"spell":"Expelliarmus","mentions":8,"type":"Charm"},{"spell":"Expulso","mentions":1,"type":"Curse"},{"spell":"Fidelius","mentions":7,"type":"Charm"},{"spell":"Fiendfyre","mentions":2,"type":"Curse"},{"spell":"Flagrante","mentions":1,"type":"Curse"},{"spell":"Geminio","mentions":1,"type":"Curse"},{"spell":"Glisseo","mentions":1,"type":"Spell"},{"spell":"Homenum Revelio","mentions":2,"type":"Spell"},{"spell":"Impedimenta","mentions":1,"type":"Jinx"},{"spell":"Imperio","mentions":5,"type":"Unforgivable"},{"spell":"Impervius","mentions":2,"type":"Charm"},{"spell":"Levicorpus","mentions":1,"type":"Jinx"},{"spell":"Liberacorpus","mentions":1,"type":"Spell"},{"spell":"Lumos","mentions":6,"type":"Spell"},{"spell":"Meteolojinx Recanto","mentions":2,"type":"Spell"},{"spell":"Muffliato","mentions":6,"type":"Spell"},{"spell":"Nox","mentions":1,"type":"Spell"},{"spell":"Obliviate","mentions":3,"type":"Charm"},{"spell":"Obscuro","mentions":1,"type":"Spell"},{"spell":"Permanent Sticking","mentions":1,"type":"Charm"},{"spell":"Petrificus Totalus","mentions":1,"type":"Curse"},{"spell":"Piertotum Locomotor","mentions":1,"type":"Spell"},{"spell":"Priori Incantatem","mentions":1,"type":"Spell"},{"spell":"Protego","mentions":8,"type":"Charm"},{"spell":"Protego Horribilis","mentions":1,"type":"Charm"},{"spell":"Protego Totalum","mentions":2,"type":"Charm"},{"spell":"Reducio","mentions":1,"type":"Spell"},{"spell":"Relashio","mentions":3,"type":"Jinx"},{"spell":"Reparo","mentions":3,"type":"Spell"},{"spell":"Repello Muggletum","mentions":1,"type":"Charm"},{"spell":"Revelio","mentions":2,"type":"Spell"},{"spell":"Salvio Hexia","mentions":2,"type":"Spell"},{"spell":"Sectumsempra","mentions":2,"type":"Curse"},{"spell":"(Stinging Jinx)","mentions":1,"type":"Jinx"},{"spell":"Stupefy","mentions":9,"type":"Spell"},{"spell":"Tergeo","mentions":2,"type":"Spell"},{"spell":"Wingardium Leviosa","mentions":2,"type":"Charm"}]}')}},[[32,1,2]]]);
//# sourceMappingURL=main.5286e7d3.chunk.js.map