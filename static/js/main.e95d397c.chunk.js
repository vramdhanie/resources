(this.webpackJsonpviewer=this.webpackJsonpviewer||[]).push([[0],{124:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),c=e(26),i=e.n(c),o=(e(39),e(2)),l=e(9),A=e.n(l),s=e(17),m=e(3);function u(){var t=Object(o.a)(["\n\tbox-shadow: 0.5px 0.5px 1px 1px rgba(0, 0, 0, 0.2);\n\tborder-radius: 4px;\n\tmargin: 2px;\n"]);return u=function(){return t},t}var d=Object(m.a)((function(t){var n=t.className,e=t.children;return r.a.createElement("div",{className:n},e)}))(u()),p=e(32),f=e(30),g=e.n(f);function b(){var t=Object(o.a)(["\n\tdisplay: flex;\n\talign-items: center;\n\tpadding: 8px;\n\t.title {\n\t\tflex: 1;\n\t\tfont-size: 1.1rem;\n\t\tfont-weight: 400;\n\t\tpadding-left: 10px;\n\t}\n\n\t.icon {\n\t\twidth: 32px;\n\t}\n"]);return b=function(){return t},t}var h=Object(m.a)((function(t){var n=t.className,e=t.title,a=t.url,c=a.split("/"),i="".concat(c[0],"//").concat(c[2]);return r.a.createElement("div",{className:n},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:i+"/favicon.ico",alt:e+" icon",className:"icon",onError:function(t){return t.target.src=g.a}})),r.a.createElement("div",{className:"title"},e),r.a.createElement("div",{className:"link"},r.a.createElement("a",{href:a,title:e,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(p.a,null))))}))(b());function x(){var t=Object(o.a)(['\n\tcolor: #fff;\n\tborder: none;\n\tcursor: default;\n\theight: 32px;\n\tdisplay: inline-flex;\n\toutline: 0;\n\tpadding: 2px;\n\tfont-size: 0.8125rem;\n\tbox-sizing: border-box;\n\ttransition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,\n\t\tbox-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n\talign-items: center;\n\tfont-family: "Roboto", "Helvetica", "Arial", sans-serif;\n\twhite-space: nowrap;\n\tborder-radius: 16px;\n\tvertical-align: middle;\n\tjustify-content: center;\n\ttext-decoration: none;\n\tbackground-color: #616161;\n\tmargin: 4px;\n\n\t&:hover {\n\t\tbackground-color: white;\n\t\tcolor: #616161;\n\t\tbox-shadow: 0 0 1px 1px #616161;\n\t}\n']);return x=function(){return t},t}var v=Object(m.a)((function(t){var n=t.className,e=t.name;return r.a.createElement("div",{className:n},e)}))(x()),w=e(31),E=e.n(w);function G(){var t=Object(o.a)(["\n\t.content {\n\t\tpadding: 8px;\n\n\t\tp {\n\t\t\tfont-weight: 300;\n\t\t}\n\t}\n\n\t.tags {\n\t\twidth: 100%;\n\t}\n"]);return G=function(){return t},t}var I=Object(m.a)((function(t){var n=t.className,e=t.title,a=t.description,c=t.url,i=t.tags;return r.a.createElement(d,{className:n},r.a.createElement(h,{title:e,url:c}),r.a.createElement("div",{className:"content"},r.a.createElement(E.a,{source:a})),r.a.createElement("div",{className:"tags"},i.map((function(t){return r.a.createElement(v,{name:t,key:t})}))))}))(G());function j(){var t=Object(o.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\theader {\n\t\tfont-size: 1.5rem;\n\t\tfont-weight: bold;\n\t\tbackground: #616161;\n\t\tpadding: 16px;\n\t\tcolor: #ffffff;\n\t\tmargin-bottom: 8px;\n\t\tbox-shadow: 0 1px 1px 1px rgba(0, 0, 0, 0.2);\n\t}\n\n\tmain {\n\t\tflex: 1;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr;\n\t\tgrid-column-gap: 8px;\n\t\tcolumn-gap: 8px;\n\t}\n\n\tfooter {\n\t\tmargin-top: 8px;\n\t\tpadding: 16px;\n\t\tfont-size: 0.7rem;\n\t\tfont-weight: 300px;\n\t\ttext-align: center;\n\t}\n\n\t@media screen and (min-width: 600px) {\n\t\tmain {\n\t\t\tgrid-template-columns: 1fr 1fr;\n\t\t}\n\t}\n\n\t@media screen and (min-width: 1200px) {\n\t\tmain {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr;\n\t\t}\n\t}\n\n\t@media screen and (min-width: 1800px) {\n\t\tmain {\n\t\t\tgrid-template-columns: 1fr 1fr 1fr 1fr;\n\t\t}\n\t}\n"]);return j=function(){return t},t}var B=Object(m.a)((function(t){var n=t.className,e=Object(a.useState)([]),c=Object(s.a)(e,2),i=c[0],o=c[1],l=Object(a.useState)(null),m=Object(s.a)(l,2),u=m[0],d=m[1];return Object(a.useEffect)((function(){!function(){var t,n;A.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.a.awrap(fetch("https://raw.githubusercontent.com/vramdhanie/resources/master/data/data.json"));case 3:if((t=e.sent).ok){e.next=6;break}throw new Error;case 6:return e.next=8,A.a.awrap(t.json());case 8:n=e.sent,o(n),d(null),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),d("Could not fetch data");case 16:case"end":return e.stop()}}),null,null,[[0,13]])}()}),[]),r.a.createElement("div",{className:n},r.a.createElement("header",null,"Bookmarks"),r.a.createElement("main",null,u?r.a.createElement("div",null,u):"",i.map((function(t){return r.a.createElement(I,Object.assign({},t,{key:t.id}))}))),r.a.createElement("footer",null,"\xa9 2020 Vincent Ramdhanie"))}))(j());Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},30:function(t,n){t.exports="data:image/png;base64,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"},34:function(t,n,e){t.exports=e(124)},39:function(t,n,e){}},[[34,1,2]]]);
//# sourceMappingURL=main.e95d397c.chunk.js.map