(this["webpackJsonpscrollytelling-charts"]=this["webpackJsonpscrollytelling-charts"]||[]).push([[0],{23:function(e,n,t){e.exports=t.p+"static/media/HarryP-Title.181ef9a7.ttf"},24:function(e,n,t){e.exports=t.p+"static/media/PublicoText-Roman-Web.5f2e0ae8.woff2"},25:function(e,n,t){e.exports=t.p+"static/media/National2Web-Regular.dc4310e6.woff"},26:function(e,n,t){e.exports=t.p+"static/media/National2Web-Regular.2414fbff.woff2"},32:function(e,n,t){e.exports=t(42)},39:function(e,n,t){},42:function(e,n,t){"use strict";t.r(n);var l=t(0),i=t.n(l),o=t(19),a=t.n(o),s=t(3),p=t(2),r=t(5),m=t(6),u=t(1),c=t.n(u),y=(t(39),t(4)),h=t(7),f=t(45),d=t(27),g=function(e){return c.a.get(c.a.maxBy(e,(function(e){return e.mentions})),"mentions")},b=function(e,n,t){var l=c.a.orderBy(h[e],["mentions"],["desc"]),i=l.length,o=c.a.findIndex(l,{spell:n});if(-1===o)return null;var a=Object(d.a)().domain([0,g(l)]).range([0,t/2]),s=c.a.find(l,{spell:n});return Object(f.a)().startAngle(2*Math.PI/i*o).endAngle(2*Math.PI/i*(o+1)).innerRadius(0).outerRadius(a(s.mentions))()},S=function(e,n){var t=c.a.orderBy(h[e],["mentions"],["desc"]),l=t.length,i=c.a.findIndex(t,{spell:n});return-1===i?null:Object(f.a)().startAngle(2*Math.PI/l*i).endAngle(2*Math.PI/l*(i+1)).innerRadius(0).outerRadius(5)()},v=function(e){var n=e.data,t=e.pathA,o=e.pathB,a=Object(l.useState)(null),s=Object(r.a)(a,2),p=s[0],m=s[1],u=Object(l.useState)(!1),h=Object(r.a)(u,2),f=h[0],d=h[1];console.log({showLabel:f});var g=n.mentions<3,b=Object(y.b)({config:{duration:1500},d:o,opacity:g?.4:1,from:{d:t,opacity:0}}),S="".concat(g?"insignificant ":"").concat(n.type.toLowerCase()),v=c.a.isNull(p)?0:-window.innerWidth/2+p.x,C=c.a.isNull(p)?0:-window.innerHeight/2+p.y,x=v+90,E=C+40+7;return i.a.createElement(i.a.Fragment,null,i.a.createElement("g",{className:S,onMouseEnter:function(e){m({x:e.nativeEvent.clientX,y:e.nativeEvent.clientY}),d(!0)},onMouseLeave:function(){d(!1),m(null)}},i.a.createElement(y.a.path,b)),f?i.a.createElement("g",null,i.a.createElement("rect",{fill:"white",x:v,y:C,height:80,width:180,rx:10}),i.a.createElement("text",{x:x,y:E,style:{font:"".concat(14,"px")},textAnchor:"middle"},n.spell," : ",n.mentions)):null)},C=function(e){var n=e.dms,t=e.i,l=e.spellType,o=e.spellTypes,a=e.percentage,s=(n.marginBottom-10*o.length*2)/(o.length+1),p=.5*n.width,r=0===t?s+10:(s+20)*t+(s+10),m=Object(y.b)({number:a}),u=Object(y.b)({y:r}),c=Object(y.b)({cy:r-5});return i.a.createElement(i.a.Fragment,null,i.a.createElement(y.a.text,{key:"".concat(l,"-percentage"),x:p-60,y:u.y,fill:"white"},m.number.interpolate((function(e){return Math.floor(e)}))),i.a.createElement(y.a.text,{key:"".concat(l,"-percent"),x:p-40,y:u.y,fill:"white"},"%"),i.a.createElement(y.a.circle,{key:"".concat(l,"-circle"),className:l,r:10,cx:p,cy:c.cy}),i.a.createElement(y.a.text,{key:"".concat(l,"-label"),x:p+10+20,y:u.y,fill:"white"},l))},x=function(e){var n=e.dms,t=e.data,l=c.a.sumBy(t,"mentions"),o=Object(y.b)({total:l}),a={},s=["charm","spell","jinx","hex","curse","unforgivable"];s.forEach((function(e){var n=c.a.sumBy(t,(function(n){return n.type.toLowerCase()===e?n.mentions:0}));a[e]=n}));var p=c.a.orderBy(s,(function(e){return a[e]}),["desc"]);return i.a.createElement("g",{transform:"translate(".concat([n.marginLeft,n.height+n.marginTop-n.marginBottom].join(","),")")},i.a.createElement("text",{x:.5*n.width-60,y:-20,fill:"white"},"Total spell mentions ="),i.a.createElement(y.a.text,{x:.5*n.width+107,y:-20,fill:"white"},o.total.interpolate((function(e){return Math.floor(e)}))),p.map((function(e,t){return i.a.createElement(C,{key:e,dms:n,i:t,spellType:e,spellTypes:s,percentage:parseInt((a[e]/l*100).toFixed())})})))},E=t(10),w=t(28),O=function(e){var n=Object(E.a)({},e,{marginTop:e.marginTop||0,marginRight:e.marginRight||0,marginBottom:e.marginBottom||0,marginLeft:e.marginLeft||0});return Object(E.a)({},n,{boundedHeight:Math.max(n.height-n.marginTop-n.marginBottom,0),boundedWidth:Math.max(n.width-n.marginLeft-n.marginRight,0)})},j=function(e){var n=Object(l.useRef)(),t=O(e),i=Object(l.useState)(0),o=Object(r.a)(i,2),a=o[0],s=o[1],p=Object(l.useState)(0),m=Object(r.a)(p,2),u=m[0],c=m[1];Object(l.useEffect)((function(){if(t.width&&t.height)return[n,t];var e=n.current,l=new w.a((function(e){if(Array.isArray(e)&&e.length){var n=e[0];a!=n.contentRect.width&&s(n.contentRect.width),u!=n.contentRect.height&&c(n.contentRect.height)}}));return l.observe(e),function(){return l.unobserve(e)}}),[]);var y=O(Object(E.a)({},t,{width:t.width||a,height:t.height||u}));return[n,y]};function k(){var e=Object(s.a)(["\n  transform: ",";\n"]);return k=function(){return e},e}function R(){var e=Object(s.a)(["\n  height: 85vh;\n  margin-right: 20px;\n  width: 90%;\n"]);return R=function(){return e},e}var A=p.b.div(R()),P=p.b.g(k(),(function(e){return"translate(".concat(e.boundedWidth/2,"px, ").concat(e.boundedHeight/2,"px)")})),L=function(e){var n=e.fullData,t=e.currentBook,l=e.previousBook,o=c.a.map(n[t],(function(e){return e.spell})),a=c.a.map(n[l],(function(e){return e.spell})),s=j({marginBottom:200}),p=Object(r.a)(s,2),m=p[0],u=p[1];return i.a.createElement(A,{ref:m},i.a.createElement("svg",{height:u.height,width:u.width},i.a.createElement("g",{transform:"translate(".concat([u.marginLeft,u.marginTop].join(","),")")},i.a.createElement(P,{boundedWidth:u.boundedWidth,boundedHeight:u.boundedHeight},c.a.map(n[t],(function(e){var n=o.includes(e.spell)&&!a.includes(e.spell);return 0!==u.height&&0!==u.width?i.a.createElement(v,{key:"".concat(e.spell).concat(e.book),data:e,pathA:n?S(t,e.spell):b(l,e.spell,c.a.min([u.boundedWidth,u.boundedHeight])),pathB:b(t,e.spell,c.a.min([u.boundedWidth,u.boundedHeight]))}):null})))),i.a.createElement(x,{dms:u,data:n[t]})))};function B(){var e=Object(s.a)(["\n  font-size: 1.6em;\n"]);return B=function(){return e},e}function I(){var e=Object(s.a)(["\n  margin-top: 40px;\n"]);return I=function(){return e},e}function T(){var e=Object(s.a)(["\n  margin: 50vh 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 200px;\n"]);return T=function(){return e},e}function M(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  align-self: flex-start;\n  margin-left: 50px;\n"]);return M=function(){return e},e}function H(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  width: 100%;\n  position: sticky;\n  top: 10%;\n"]);return H=function(){return e},e}var J=p.b.div(H()),D=p.b.div(M()),W=p.b.div(T()),F=p.b.div(I()),N=p.b.h3(B()),U=function(){var e=Object(l.useState)(1),n=Object(r.a)(e,2),t=n[0],o=n[1],a=Object(l.useState)(0),s=Object(r.a)(a,2),p=s[0],u=s[1];return c.a.isEmpty(h[t])?i.a.createElement(F,null,"Loading..."):i.a.createElement(i.a.Fragment,null,i.a.createElement(J,null,i.a.createElement(L,{fullData:h,currentBook:t,previousBook:p})),i.a.createElement(D,null,i.a.createElement(m.a,{onStepEnter:function(e){var n=e.data,t=e.direction;"up"===t?u(n+1):"down"===t&&u(n-1),o(n)},offset:.7},c.a.range(1,8).map((function(e){return i.a.createElement(m.b,{data:e,key:e},i.a.createElement(W,null,i.a.createElement(N,null,"Book ",e),i.a.createElement("div",null,z[e])))})))))},z={1:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Turns out there's not actually that much magic in Book 1."),i.a.createElement("p",null,"The most uttered spell is ",i.a.createElement("strong",null,"Wingardium Leviosa"),", which Harry, Ron, and Hermione learn in Charms class and later use to defeat a troll."),i.a.createElement("p",null,"Click on a spell to see where it's mentioned!")),2:i.a.createElement("p",null,"thoughts about book 2"),3:i.a.createElement("p",null,"thoughts about book 3"),4:i.a.createElement("p",null,"thoughts about book 4"),5:i.a.createElement("p",null,"thoughts about book 5"),6:i.a.createElement("p",null,"thoughts about book 6"),7:i.a.createElement("p",null,"thoughts about book 7")};function K(){var e=Object(s.a)(["\n  text-align: center;\n"]);return K=function(){return e},e}function G(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return G=function(){return e},e}function V(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n"]);return V=function(){return e},e}p.b.div(V()),p.b.div(G()),p.b.h3(K());var Q=t(29);function X(){var e=Object(s.a)(["\n  height: 40px;\n  margin-top: 15px;\n"]);return X=function(){return e},e}function Y(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n  height: 100vh;\n"]);return Y=function(){return e},e}var q=p.b.div(Y()),Z=Object(p.b)(Q.a)(X()),$=function(){var e=Object(l.useState)(0),n=Object(r.a)(e,2),t=n[0],o=n[1],a=Object(y.b)((function(){return{opacity:1}})),s=Object(r.a)(a,3),p=s[0],u=s[1];s[2];return u({opacity:3===t?0:1}),i.a.createElement(q,null,i.a.createElement(m.a,{onStepEnter:function(e){var n=e.data;o(n)},offset:.2},i.a.createElement(m.b,{data:0,key:0},i.a.createElement("h1",null,'"It\'s LeviOsa, not LevioSA!"')),i.a.createElement(m.b,{data:1,key:1},i.a.createElement("h2",null,"\u26a1\ufe0f Visualizing the spells mentioned across the Harry Potter series \u26a1\ufe0f")),i.a.createElement(m.b,{data:2,key:2},i.a.createElement("h3",null,"By Michelle McGhee")),i.a.createElement(m.b,{data:3,key:3},i.a.createElement(y.a.div,{style:Object(E.a)({display:"flex",flexDirection:"column",marginTop:"100px"},p)},i.a.createElement("div",null,"Scroll to advance the story"),i.a.createElement(Z,null)))))},_=t(23),ee=t.n(_),ne=t(24),te=t.n(ne),le=t(25),ie=t.n(le),oe=t(26),ae=t.n(oe);function se(){var e=Object(s.a)(["\n  @font-face {\n    font-family: 'Harry Potter Title';\n    src: url(",");\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'Publico';\n    src: url(",");\n    font-weight: 300;\n    font-style: normal;\n  }\n\n  @font-face {\n    font-family: 'National 2 Web';\n    src: url(",") format('woff2'), url(",") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n"]);return se=function(){return e},e}var pe=Object(p.a)(se(),ee.a,te.a,ie.a,ae.a);function re(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]);return re=function(){return e},e}function me(){var e=Object(s.a)(["\n  h1 {\n    font-family: \"Harry Potter Title\";\n    font-size: 4em;\n  }\n\n  body {\n    background: #302f2c;\n    margin: 0;\n    font-family: 'National 2 Web', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    color: white;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"]);return me=function(){return e},e}var ue=Object(p.a)(me()),ce=p.b.div(re());var ye=function(){return Object(l.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[]),i.a.createElement(i.a.Fragment,null,i.a.createElement(ue,null),i.a.createElement(pe,null),i.a.createElement(ce,null,i.a.createElement($,null),i.a.createElement(U,null)))};a.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(ye,null)),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"1":[{"spell":"Alohomora","mentions":2,"type":"Charm"},{"spell":"(Anti-Cheating Spell)","mentions":1,"type":"Spell"},{"spell":"Bluebell Flames","mentions":1,"type":"Spell"},{"spell":"Locomotor Mortis","mentions":1,"type":"Curse"},{"spell":"Mimblewimble","mentions":1,"type":"Curse"},{"spell":"Petrificus Totalus","mentions":1,"type":"Curse"},{"spell":"Switching Spell","mentions":1,"type":"Spell"},{"spell":"Wingardium Leviosa","mentions":3,"type":"Charm"}],"2":[{"spell":"Aparecium","mentions":1,"type":"Spell"},{"spell":"Apparate","mentions":2,"type":"Spell"},{"spell":"Expelliarmus","mentions":3,"type":"Charm"},{"spell":"Homorphus","mentions":1,"type":"Charm"},{"spell":"Lumos","mentions":2,"type":"Spell"},{"spell":"Obliviate","mentions":1,"type":"Charm"},{"spell":"Peskipiksi Pesternomi","mentions":1,"type":"Spell"},{"spell":"Rictusempra","mentions":1,"type":"Charm"},{"spell":"Serpensortia","mentions":1,"type":"Spell"},{"spell":"Tarantallegra","mentions":1,"type":"Jinx"}],"3":[{"spell":"Alohomora","mentions":1,"type":"Charm"},{"spell":"Apparate","mentions":7,"type":"Spell"},{"spell":"(Cheering Charm)","mentions":7,"type":"Charm"},{"spell":"Confundus","mentions":1,"type":"Charm"},{"spell":"Dissendium","mentions":4,"type":"Spell"},{"spell":"Expecto Patronum","mentions":25,"type":"Charm"},{"spell":"Expelliarmus","mentions":4,"type":"Charm"},{"spell":"Ferula","mentions":1,"type":"Spell"},{"spell":"Fidelius","mentions":2,"type":"Charm"},{"spell":"Impervius","mentions":1,"type":"Charm"},{"spell":"Lumos","mentions":4,"type":"Spell"},{"spell":"Mobiliarbus","mentions":1,"type":"Charm"},{"spell":"Mobilicorpus","mentions":1,"type":"Spell"},{"spell":"Nox","mentions":1,"type":"Spell"},{"spell":"Riddikulus","mentions":11,"type":"Spell"},{"spell":"Waddiwasi","mentions":1,"type":"Spell"}],"4":[{"spell":"Accio","mentions":8,"type":"Charm"},{"spell":"(Age Line)","mentions":8,"type":"Charm"},{"spell":"Apparate","mentions":27,"type":"Spell"},{"spell":"Avada Kedavra","mentions":9,"type":"Unforgivable"},{"spell":"Avis","mentions":1,"type":"Spell"},{"spell":"Confundus","mentions":1,"type":"Charm"},{"spell":"Conjunctivitis","mentions":1,"type":"Curse"},{"spell":"Crucio","mentions":5,"type":"Unforgivable"},{"spell":"Deletrius","mentions":1,"type":"Spell"},{"spell":"Densaugeo","mentions":1,"type":"Hex"},{"spell":"Diffindo","mentions":1,"type":"Spell"},{"spell":"(Drought Charm)","mentions":1,"type":"Charm"},{"spell":"Engorgio","mentions":1,"type":"Charm"},{"spell":"Ennervate","mentions":3,"type":"Spell"},{"spell":"Expecto Patronum","mentions":1,"type":"Charm"},{"spell":"Expelliarmus","mentions":3,"type":"Charm"},{"spell":"(Extinguishing Spell)","mentions":1,"type":"Spell"},{"spell":"Furnunculus","mentions":2,"type":"Jinx"},{"spell":"Impedimenta","mentions":4,"type":"Jinx"},{"spell":"Imperio","mentions":6,"type":"Unforgivable"},{"spell":"Incendio","mentions":1,"type":"Spell"},{"spell":"Lumos","mentions":4,"type":"Spell"},{"spell":"Obliviate","mentions":1,"type":"Charm"},{"spell":"Orchideous","mentions":1,"type":"Spell"},{"spell":"Point Me","mentions":2,"type":"Charm"},{"spell":"Priori Incantatem","mentions":2,"type":"Spell"},{"spell":"Prior Incantato","mentions":1,"type":"Spell"},{"spell":"Quietus","mentions":1,"type":"Spell"},{"spell":"Reducio","mentions":1,"type":"Spell"},{"spell":"Reducto","mentions":4,"type":"Curse"},{"spell":"Relashio","mentions":1,"type":"Jinx"},{"spell":"Rennervate","mentions":3,"type":"Spell"},{"spell":"Reparo","mentions":1,"type":"Spell"},{"spell":"Riddikulus","mentions":1,"type":"Spell"},{"spell":"Sonorus","mentions":3,"type":"Spell"},{"spell":"Stupefy","mentions":10,"type":"Spell"},{"spell":"Switching Spell","mentions":2,"type":"Spell"},{"spell":"(Unbreakable Charm)","mentions":1,"type":"Charm"}],"5":[{"spell":"Accio","mentions":10,"type":"Charm"},{"spell":"Alohomora","mentions":4,"type":"Charm"},{"spell":"Apparate","mentions":14,"type":"Spell"},{"spell":"Avada Kedavra","mentions":3,"type":"Unforgivable"},{"spell":"Bat-Bogey Hex","mentions":2,"type":"Hex"},{"spell":"(Cheering Charm)","mentions":1,"type":"Charm"},{"spell":"Colloportus","mentions":3,"type":"Spell"},{"spell":"Crucio","mentions":4,"type":"Unforgivable"},{"spell":"Diffindo","mentions":1,"type":"Spell"},{"spell":"(Disillusionment Charm)","mentions":3,"type":"Charm"},{"spell":"Entrail-Expelling","mentions":1,"type":"Curse"},{"spell":"Evanesco","mentions":2,"type":"Spell"},{"spell":"Expecto Patronum","mentions":4,"type":"Charm"},{"spell":"Expelliarmus","mentions":7,"type":"Charm"},{"spell":"Flagrate","mentions":1,"type":"Spell"},{"spell":"(Flying Charm)","mentions":1,"type":"Charm"},{"spell":"Impedimenta","mentions":5,"type":"Jinx"},{"spell":"Imperio","mentions":2,"type":"Unforgivable"},{"spell":"Impervius","mentions":3,"type":"Charm"},{"spell":"Incarcerous","mentions":1,"type":"Spell"},{"spell":"Legilimens","mentions":6,"type":"Spell"},{"spell":"Lumos","mentions":3,"type":"Spell"},{"spell":"Nox","mentions":1,"type":"Spell"},{"spell":"Obliteration","mentions":1,"type":"Charm"},{"spell":"Permanent Sticking","mentions":3,"type":"Charm"},{"spell":"Petrificus Totalus","mentions":4,"type":"Curse"},{"spell":"Portus","mentions":5,"type":"Charm"},{"spell":"Protego","mentions":4,"type":"Charm"},{"spell":"Reducto","mentions":3,"type":"Curse"},{"spell":"Reparo","mentions":3,"type":"Spell"},{"spell":"Riddikulus","mentions":6,"type":"Spell"},{"spell":"Scourgify","mentions":3,"type":"Charm"},{"spell":"Silencio","mentions":8,"type":"Spell"},{"spell":"Stupefy","mentions":7,"type":"Spell"},{"spell":"Switching Spell","mentions":1,"type":"Spell"},{"spell":"Tarantallegra","mentions":1,"type":"Jinx"},{"spell":"Wingardium Leviosa","mentions":1,"type":"Charm"}],"6":[{"spell":"Accio","mentions":3,"type":"Charm"},{"spell":"Aguamenti","mentions":9,"type":"Charm"},{"spell":"Alohomora","mentions":1,"type":"Charm"},{"spell":"Anapneo","mentions":1,"type":"Spell"},{"spell":"Apparate","mentions":30,"type":"Spell"},{"spell":"Avada Kedavra","mentions":3,"type":"Unforgivable"},{"spell":"Avis","mentions":1,"type":"Spell"},{"spell":"Bat-Bogey Hex","mentions":2,"type":"Hex"},{"spell":"Crucio","mentions":2,"type":"Unforgivable"},{"spell":"Diffindo","mentions":1,"type":"Spell"},{"spell":"(Disillusionment Charm)","mentions":1,"type":"Charm"},{"spell":"Ennervate","mentions":2,"type":"Spell"},{"spell":"Episkey","mentions":2,"type":"Spell"},{"spell":"Expelliarmus","mentions":2,"type":"Charm"},{"spell":"Impedimenta","mentions":3,"type":"Jinx"},{"spell":"Imperio","mentions":2,"type":"Unforgivable"},{"spell":"Incarcerous","mentions":1,"type":"Spell"},{"spell":"Incendio","mentions":2,"type":"Spell"},{"spell":"Langlock","mentions":1,"type":"Jinx"},{"spell":"Legilimens","mentions":1,"type":"Spell"},{"spell":"Levicorpus","mentions":5,"type":"Jinx"},{"spell":"Liberacorpus","mentions":1,"type":"Spell"},{"spell":"Lumos","mentions":3,"type":"Spell"},{"spell":"Muffliato","mentions":6,"type":"Spell"},{"spell":"Nox","mentions":2,"type":"Spell"},{"spell":"Oppugno","mentions":1,"type":"Jinx"},{"spell":"Petrificus Totalus","mentions":5,"type":"Curse"},{"spell":"Protego","mentions":1,"type":"Charm"},{"spell":"Reducto","mentions":2,"type":"Curse"},{"spell":"Relashio","mentions":1,"type":"Jinx"},{"spell":"Rennervate","mentions":2,"type":"Spell"},{"spell":"Reparo","mentions":4,"type":"Spell"},{"spell":"Revelio","mentions":2,"type":"Spell"},{"spell":"Sectumsempra","mentions":9,"type":"Curse"},{"spell":"Specialis Revelio","mentions":2,"type":"Spell"},{"spell":"Stupefy","mentions":1,"type":"Spell"},{"spell":"Tergeo","mentions":1,"type":"Spell"},{"spell":"(Unbreakable Vow)","mentions":7,"type":"Spell"}],"7":[{"spell":"Accio","mentions":12,"type":"Charm"},{"spell":"Aguamenti","mentions":2,"type":"Charm"},{"spell":"Alohomora","mentions":1,"type":"Charm"},{"spell":"Apparate","mentions":38,"type":"Spell"},{"spell":"Avada Kedavra","mentions":7,"type":"Unforgivable"},{"spell":"Avis","mentions":1,"type":"Spell"},{"spell":"Bluebell Flames","mentions":1,"type":"Spell"},{"spell":"Cascading","mentions":1,"type":"Jinx"},{"spell":"Caterwauling","mentions":1,"type":"Charm"},{"spell":"Cave Inimicum","mentions":2,"type":"Charm"},{"spell":"Confringo","mentions":2,"type":"Curse"},{"spell":"Confundus","mentions":1,"type":"Charm"},{"spell":"Crucio","mentions":4,"type":"Unforgivable"},{"spell":"(Cushioning Charm)","mentions":1,"type":"Charm"},{"spell":"Defodio","mentions":1,"type":"Spell"},{"spell":"Deprimo","mentions":1,"type":"Spell"},{"spell":"Descendo","mentions":2,"type":"Spell"},{"spell":"Diffindo","mentions":4,"type":"Spell"},{"spell":"(Disillusionment Charm)","mentions":6,"type":"Charm"},{"spell":"Duro","mentions":1,"type":"Spell"},{"spell":"Engorgio","mentions":1,"type":"Charm"},{"spell":"Erecto","mentions":1,"type":"Spell"},{"spell":"Expecto Patronum","mentions":4,"type":"Charm"},{"spell":"Expelliarmus","mentions":8,"type":"Charm"},{"spell":"Expulso","mentions":1,"type":"Curse"},{"spell":"Fidelius","mentions":7,"type":"Charm"},{"spell":"Fiendfyre","mentions":2,"type":"Curse"},{"spell":"Flagrante","mentions":1,"type":"Curse"},{"spell":"Geminio","mentions":1,"type":"Curse"},{"spell":"Glisseo","mentions":1,"type":"Spell"},{"spell":"Homenum Revelio","mentions":2,"type":"Spell"},{"spell":"Impedimenta","mentions":1,"type":"Jinx"},{"spell":"Imperio","mentions":5,"type":"Unforgivable"},{"spell":"Impervius","mentions":2,"type":"Charm"},{"spell":"Levicorpus","mentions":1,"type":"Jinx"},{"spell":"Liberacorpus","mentions":1,"type":"Spell"},{"spell":"Lumos","mentions":6,"type":"Spell"},{"spell":"Meteolojinx Recanto","mentions":2,"type":"Spell"},{"spell":"Muffliato","mentions":6,"type":"Spell"},{"spell":"Nox","mentions":1,"type":"Spell"},{"spell":"Obliviate","mentions":3,"type":"Charm"},{"spell":"Obscuro","mentions":1,"type":"Spell"},{"spell":"Permanent Sticking","mentions":1,"type":"Charm"},{"spell":"Petrificus Totalus","mentions":1,"type":"Curse"},{"spell":"Piertotum Locomotor","mentions":1,"type":"Spell"},{"spell":"Priori Incantatem","mentions":1,"type":"Spell"},{"spell":"Protego","mentions":8,"type":"Charm"},{"spell":"Protego Horribilis","mentions":1,"type":"Charm"},{"spell":"Protego Totalum","mentions":2,"type":"Charm"},{"spell":"Reducio","mentions":1,"type":"Spell"},{"spell":"Relashio","mentions":3,"type":"Jinx"},{"spell":"Reparo","mentions":3,"type":"Spell"},{"spell":"Repello Muggletum","mentions":1,"type":"Charm"},{"spell":"Revelio","mentions":2,"type":"Spell"},{"spell":"Salvio Hexia","mentions":2,"type":"Spell"},{"spell":"Sectumsempra","mentions":2,"type":"Curse"},{"spell":"(Stinging Jinx)","mentions":1,"type":"Jinx"},{"spell":"Stupefy","mentions":9,"type":"Spell"},{"spell":"Tergeo","mentions":2,"type":"Spell"},{"spell":"Wingardium Leviosa","mentions":2,"type":"Charm"}]}')}},[[32,1,2]]]);
//# sourceMappingURL=main.211f4111.chunk.js.map