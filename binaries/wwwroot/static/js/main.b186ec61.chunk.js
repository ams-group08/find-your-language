(this.webpackJsonpfind_your_language=this.webpackJsonpfind_your_language||[]).push([[0],{38:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),i=a(16),r=a.n(i),c=a(15),o=a(7),s=a(8),d=a(10),l=a(9),u=a(5),j=a(55),m=a(17),b=a(54),p=a(56),h=a(57),O=a(60),x=a(58),g=a(59),v=(a(38),a(2)),f=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(m.a)(n)),n.state={collapsed:!0},n}return Object(s.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return Object(v.jsx)("header",{children:Object(v.jsx)(b.a,{className:"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3",light:!0,children:Object(v.jsxs)(j.a,{children:[Object(v.jsx)(p.a,{tag:c.b,to:"/",children:"find your language"}),Object(v.jsx)(h.a,{onClick:this.toggleNavbar,className:"mr-2"}),Object(v.jsx)(O.a,{className:"d-sm-inline-flex flex-sm-row-reverse",isOpen:!this.state.collapsed,navbar:!0,children:Object(v.jsxs)("ul",{className:"navbar-nav flex-grow",children:[Object(v.jsx)(x.a,{children:Object(v.jsx)(g.a,{tag:c.b,className:"text-dark",to:"/",children:"Home"})}),Object(v.jsx)(x.a,{children:Object(v.jsx)(g.a,{tag:c.b,className:"text-dark",to:"/trends",children:"Trends"})}),Object(v.jsx)(x.a,{children:Object(v.jsx)(g.a,{tag:c.b,className:"text-dark",to:"/aboutus",children:"About Us"})})]})})]})})})}}]),a}(n.Component);f.displayName=f.name;var y=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(f,{}),Object(v.jsx)(j.a,{children:this.props.children})]})}}]),a}(n.Component);y.displayName=y.name;var w=a(19),k=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={chartData:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("trends/googledata").then((function(e){return e.json()})).then((function(t){var a=[],n=0;t.results.forEach((function(e){0!==n?a.push(e.map((function(e,t){if(0===t){var a=e.toString().split(".");return new Date(a[0],a[1])}return parseInt(e)}))):(e[0]={type:"date",label:"Day"},a.push(e)),n++})),e.setState({chartData:a})}))}},{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(w.a,{width:Window.width,height:"400px",chartType:"LineChart",loader:Object(v.jsx)("div",{children:"Loading Chart"}),data:this.state.chartData,options:{hAxis:{title:"Year",format:"yyyy",formatType:"short"},vAxis:{title:"Popularity"},explorer:{axis:"horizontal",keepInBounds:!0},series:{1:{curveType:"function"},2:{curveType:"function"},3:{curveType:"function"}},animation:{startup:!0,easing:"linear",duration:1500}},rootProps:{"data-testid":"2"}})})}}]),a}(n.Component),N=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsx)(w.a,{width:Window.innerWidth,height:"400px",chartType:"PieChart",loader:Object(v.jsx)("div",{children:"Loading Chart"}),data:[["Language","Market share"],["Javascript",11],["typescript",2],["go",2],["C++",2],["python",7]],options:{title:"Programming Languages",is3D:!0},rootProps:{"data-testid":"2"}})})}}]),a}(n.Component),C=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{children:[Object(v.jsx)(k,{}),Object(v.jsx)(N,{})]})}}]),a}(n.Component);C.displayName=C.name;a(52);var q=a(20),D=a.n(q);function E(e){var t=e.type,a=e.keyword,n=e.url,i=[{keyword:"python",geo:"",time:"today 12-m"},{keyword:"javascript",geo:"",time:"today 12-m"},{keyword:"C#",geo:"",time:"today 12-m"},{keyword:"java",geo:"",time:"today 12-m"},{keyword:"c++",geo:"",time:"today 12-m"}],r=function(e){window.trends.embed.renderExploreWidgetTo(document.getElementById("widget"),t,{comparisonItem:i,category:0,property:""},{exploreQuery:"q=".concat(encodeURI(a),"&date=today 12-m"),guestPath:"https://trends.google.com:443/trends/embed/"})};return Object(v.jsx)("div",{className:"googleTrend",children:Object(v.jsx)(D.a,{url:n,onLoad:r})})}var T=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{children:Object(v.jsxs)("div",{id:"widget",children:[Object(v.jsx)(E,{type:"TIMESERIES",keyword:"C#",url:"https://ssl.gstatic.com/trends_nrtr/2790_RC04/embed_loader.js"}),Object(v.jsx)(E,{type:"GEO_MAP",keyword:"C#",url:"https://ssl.gstatic.com/trends_nrtr/2790_RC04/embed_loader.js"})]})})}}]),a}(n.Component),L=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsx)("div",{className:"card p-1 mb-3 shadow bg-light rounded",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h5",{className:"card-title d-flex justify-content-center",children:this.props.title}),Object(v.jsx)("p",{className:"card-text d-flex justify-content-center",children:this.props.name})]})})}}]),a}(n.Component),S=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsxs)("div",{className:"row justify-content-center",children:[Object(v.jsxs)("div",{className:"col-6",children:[Object(v.jsx)("br",{}),Object(v.jsx)("h1",{className:"display-5 text-danger p-1 m-2  d-flex justify-content-center",children:"Project Purpose "}),Object(v.jsx)("br",{}),Object(v.jsx)("div",{className:"card border-dark p-4 m-2",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h6",{children:"Summary"}),Object(v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(v.jsx)("h6",{children:"How the data was collected"}),Object(v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(v.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})}),Object(v.jsx)("br",{}),Object(v.jsx)("p",{})]}),Object(v.jsx)("div",{className:"col-1"}),Object(v.jsxs)("div",{className:"col-4",children:[Object(v.jsx)("h1",{className:"display-6 text-danger m-3 p-2 d-flex justify-content-center",children:"Contributors"}),Object(v.jsx)("br",{}),Object(v.jsx)(L,{title:"Fullstack",name:"Ehab Omar"}),Object(v.jsx)(L,{title:"Data Science",name:"Cande Funes"}),Object(v.jsx)(L,{title:"Data Science",name:"Nadine Grant"}),Object(v.jsx)(L,{title:"Data Science",name:"Srikar Narayan"}),Object(v.jsx)(L,{title:"UX/UI",name:"Candace Staats"})]})]})}}]),a}(n.Component),P=function(e){Object(d.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return Object(v.jsxs)(y,{children:[Object(v.jsx)(u.a,{exact:!0,path:"/",component:C}),Object(v.jsx)(u.a,{path:"/trends",component:T}),Object(v.jsx)(u.a,{path:"/aboutus",component:S})]})}}]),a}(n.Component);P.displayName=P.name;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var _=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),i(e),r(e),c(e)}))},I=document.getElementsByTagName("base")[0].getAttribute("href"),U=document.getElementById("root");r.a.render(Object(v.jsx)(c.a,{basename:I,children:Object(v.jsx)(P,{})}),U),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),_()}},[[53,1,2]]]);
//# sourceMappingURL=main.b186ec61.chunk.js.map