(this["webpackJsonpscrollytelling-charts"]=this["webpackJsonpscrollytelling-charts"]||[]).push([[0],{131:function(e,t,n){e.exports=n(220)},220:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(120),i=n.n(o),s=n(30),c=n(9),l=n(80),m=n(10),u=n(121),p=n.n(u);function d(){var e=Object(c.a)(["\n  position: sticky;\n  top: ",";\n  bottom: ",";\n"]);return d=function(){return e},e}var f=Object(m.b)(p.a)(d(),(function(e){return"top"==e.stickTo?0:null}),(function(e){return"bottom"==e.stickTo?0:null})),h=function(e){var t=e.data,n=e.xAxis,a=e.yAxis,o=e.title,i=e.stickTo,s={data:t,size:[350,350],margin:100,type:"bar",oAccessor:n,rAccessor:a,style:{fill:"#2d4c80",stroke:"white"},title:o,oLabel:function(e){return r.a.createElement("text",{fontSize:14,transform:"rotate(45)"},e)}};return r.a.createElement(f,Object.assign({},s,{stickTo:i}))},b=n(126),g=n.n(b);function v(){var e=Object(c.a)(["\n  position: sticky;\n  top: ",";\n  bottom: ",";\n"]);return v=function(){return e},e}Object(m.b)(g.a)(v(),(function(e){return"top"==e.stickTo?0:null}),(function(e){return"bottom"==e.stickTo?0:null}));var k=n(36),y=n(82),x=n(8),E=n(65),O=n(127),j=function(e){var t=Object(E.a)({},e,{marginTop:e.marginTop||10,marginRight:e.marginRight||10,marginBottom:e.marginBottom||40,marginLeft:e.marginLeft||75});return Object(E.a)({},t,{boundedHeight:Math.max(t.height-t.marginTop-t.marginBottom,0),boundedWidth:Math.max(t.width-t.marginLeft-t.marginRight,0)})},w=function(e){var t=Object(a.useRef)(),n=j(e),r=Object(a.useState)(0),o=Object(s.a)(r,2),i=o[0],c=o[1],l=Object(a.useState)(0),m=Object(s.a)(l,2),u=m[0],p=m[1];Object(a.useEffect)((function(){if(n.width&&n.height)return[t,n];var e=t.current,a=new O.a((function(e){if(Array.isArray(e)&&e.length){var t=e[0];i!=t.contentRect.width&&c(t.contentRect.width),u!=t.contentRect.height&&p(t.contentRect.height)}}));return a.observe(e),function(){return a.unobserve(e)}}),[]);var d=j(Object(E.a)({},n,{width:n.width||i,height:n.height||u}));return[t,d]},L=function(e){var t=e.domainX,n=e.rangeX,a=e.domainY,o=e.rangeY,i=e.numTicksX,s=e.numTicksY,c=e.dms,l=Object(x.scaleLinear)().domain(t).range(n),m=Object(x.scaleLinear)().domain(a).range(o),u=o[0]-o[1],p=n[1]-n[0],d=i||Math.max(1,Math.floor(p/30)),f=s||Math.max(1,Math.floor(u/30)),h=l.ticks(d).map((function(e){return{value:e,xOffset:l(e)}})),b=m.ticks(f).map((function(e){return{value:e,yOffset:m(e)}}));return r.a.createElement("g",null,r.a.createElement("path",{d:["M",n[0],c.boundedHeight+6,"v",-6,"H",n[1],"v",6].join(" "),fill:"none",stroke:"black"}),h.map((function(e){var t=e.value,n=e.xOffset;return r.a.createElement("g",{key:t,transform:"translate(".concat(n,", ").concat(c.boundedHeight,")")},r.a.createElement("line",{y2:"6",stroke:"black"}),r.a.createElement("text",{key:t,style:{fontSize:"10px",textAnchor:"middle",transform:"translateY(20px)"}},t))})),r.a.createElement("path",{d:["M",n[0]-6,o[1],"h",6,"V",o[0],"h",-6].join(" "),fill:"none",stroke:"red"}),b.map((function(e){var t=e.value,n=e.yOffset;return r.a.createElement("g",{key:t,transform:"translate(0, ".concat(n,")")},r.a.createElement("line",{x2:"-6",stroke:"black"}),r.a.createElement("text",{key:t,style:{fontSize:"10px",textAnchor:"middle",transform:"translateX(-20px)"}},t))})))};function R(){var e=Object(c.a)(["\n  position: sticky;\n  top: ",";\n  bottom: ",";\n  width: 350px;\n  height: 350px;\n"]);return R=function(){return e},e}var T=m.b.div(R(),(function(e){return"top"==e.stickTo?0:null}),(function(e){return"bottom"==e.stickTo?0:null})),H=function(e){var t=e.data,n=e.x,a=e.y,o=e.stickTo,i=w({marginTop:20,marginBottom:20,marginLeft:50,marginRight:50}),c=Object(s.a)(i,2),l=c[0],m=c[1],u=Object(x.scaleLinear)().domain([1,7]).range([0,m.boundedWidth]),p=Object(x.scaleLinear)().domain([0,900]).range([m.boundedHeight,0]),d=Object(k.a)().x((function(e){return u(e[n])})).y((function(e){return p(e[a])})),f=t.coordinates,h=Object(y.b)(f,(function(e){return e.bookNum}),{from:{strokeDashoffset:m.width,strokeOpacity:.8},enter:{strokeDashoffset:0,strokeOpacity:1},leave:{strokeDashoffset:0}});return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{ref:l,stickTo:o},r.a.createElement("svg",{width:m.width,height:m.height},r.a.createElement("g",{transform:"translate(".concat([m.marginLeft,m.marginTop].join(","),")")},r.a.createElement(L,{domainX:[1,7],rangeX:[0,m.boundedWidth],domainY:[0,900],rangeY:[m.boundedHeight,0],numTicksX:7,numTicksY:10,dms:m}),r.a.createElement("g",null,h.map((function(e){var n=e.item,a=e.props,o=e.key;return console.log(n,a,o),r.a.createElement(y.a.path,{key:o,style:{fill:"none",stroke:"steelblue",strokeWidth:1.5,strokeDasharray:2*m.width},d:d(t.coordinates)})})))))))},A=(n(215),function(e){return Math.floor(Math.random()*Math.floor(e))}),M={1:[{spell:"Avada Kedavra",mentions:A(100)},{spell:"Expeliarmus",mentions:A(100)},{spell:"Levicorpus",mentions:A(100)},{spell:"Reducto",mentions:A(100)},{spell:"Lumos",mentions:A(100)}],2:[{spell:"Avada Kedavra",mentions:A(100)},{spell:"Expeliarmus",mentions:A(100)},{spell:"Levicorpus",mentions:A(100)},{spell:"Reducto",mentions:A(100)},{spell:"Lumos",mentions:A(100)}],3:[{spell:"Avada Kedavra",mentions:A(100)},{spell:"Expeliarmus",mentions:A(100)},{spell:"Levicorpus",mentions:A(100)},{spell:"Reducto",mentions:A(100)},{spell:"Lumos",mentions:A(100)}],4:[{spell:"Avada Kedavra",mentions:A(100)},{spell:"Expeliarmus",mentions:A(100)},{spell:"Levicorpus",mentions:A(100)},{spell:"Reducto",mentions:A(100)},{spell:"Lumos",mentions:A(100)}],5:[{spell:"Avada Kedavra",mentions:A(100)},{spell:"Expeliarmus",mentions:A(100)},{spell:"Levicorpus",mentions:A(100)},{spell:"Reducto",mentions:A(100)},{spell:"Lumos",mentions:A(100)}],6:[{spell:"Avada Kedavra",mentions:A(100)},{spell:"Expeliarmus",mentions:A(100)},{spell:"Levicorpus",mentions:A(100)},{spell:"Reducto",mentions:A(100)},{spell:"Lumos",mentions:A(100)}],7:[{spell:"Avada Kedavra",mentions:A(100)},{spell:"Expeliarmus",mentions:A(100)},{spell:"Levicorpus",mentions:A(100)},{spell:"Reducto",mentions:A(100)},{spell:"Lumos",mentions:A(100)}]},S={1:[{character:"Harry Potter",lines:A(1e4)},{character:"Ron",lines:A(1e4)},{character:"Hermione",lines:A(1e4)}],2:[{character:"Harry Potter",lines:A(1e4)},{character:"Ron",lines:A(1e4)},{character:"Hermione",lines:A(1e4)}],3:[{character:"Harry Potter",lines:A(1e4)},{character:"Ron",lines:A(1e4)},{character:"Hermione",lines:A(1e4)}],4:[{character:"Harry Potter",lines:A(1e4)},{character:"Ron",lines:A(1e4)},{character:"Hermione",lines:A(1e4)}],5:[{character:"Harry Potter",lines:A(1e4)},{character:"Ron",lines:A(1e4)},{character:"Hermione",lines:A(1e4)}],6:[{character:"Harry Potter",lines:A(1e4)},{character:"Ron",lines:A(1e4)},{character:"Hermione",lines:A(1e4)}],7:[{character:"Harry Potter",lines:A(1e4)},{character:"Ron",lines:A(1e4)},{character:"Hermione",lines:A(1e4)}]},N={title:"Page Counts",coordinates:[{bookNum:1,pages:309},{bookNum:2,pages:341},{bookNum:3,pages:435},{bookNum:4,pages:734},{bookNum:5,pages:870},{bookNum:6,pages:652},{bookNum:7,pages:759}]};function P(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]);return P=function(){return e},e}function B(){var e=Object(c.a)(["\n  margin: 50vh 0;\n  font-size: 50px;\n"]);return B=function(){return e},e}function K(){var e=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return K=function(){return e},e}function X(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n"]);return X=function(){return e},e}function Y(){var e=Object(c.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n"]);return Y=function(){return e},e}var z=Object(m.a)(Y()),W=m.b.div(X()),C=m.b.div(K()),D=m.b.div(B()),F=m.b.div(P());var U=function(){var e=Object(a.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(z,null),r.a.createElement(W,null,r.a.createElement(F,null,r.a.createElement(h,{data:M[n],xAxis:"spell",yAxis:"mentions",title:"Spell Use",stickTo:"top"}),r.a.createElement(h,{data:S[n],xAxis:"character",yAxis:"lines",title:"Character Lines",stickTo:"bottom"})),r.a.createElement(C,null,r.a.createElement(l.a,{onStepEnter:function(e){var t=e.data;o(t)},offset:.5},[1,2,3,4,5,6,7].map((function(e){return r.a.createElement(l.b,{data:e,key:e},r.a.createElement(D,null,e))})))),r.a.createElement(F,null,r.a.createElement(H,{data:{title:N.title,coordinates:N.coordinates.slice(0,n)},x:"bookNum",y:"pages",stickTo:"top"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[131,1,2]]]);
//# sourceMappingURL=main.b4e30164.chunk.js.map