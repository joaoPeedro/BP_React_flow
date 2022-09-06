"use strict";(self.webpackChunkremote=self.webpackChunkremote||[]).push([[749],{749:(e,t,n)=>{n.r(t);var r=n(950),o=n.n(r),a=n(181),l=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,a=[],l=!0,i=!1;try{for(n=n.call(e);!(l=(r=n.next()).done)&&(a.push(r.value),!t||a.length!==t);l=!0);}catch(e){i=!0,o=e}finally{try{l||null==n.return||n.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=n(490),d=n.n(u),f=function(e){var t=e.fill,n=void 0===t?"#fff":t,r=e.stroke,a=void 0===r?"#fff":r,l=e.strokeWidth,i=void 0===l?0:l,c=e.styles,s=void 0===c?{}:c;return o().createElement("rect",{fill:n,style:s,strokeWidth:i,stroke:a,x:"0",y:"20",rx:"2",width:"100",height:"60",filter:"url(#shadow)"})},p=function(e){var t=e.children;return o().createElement("div",{style:{position:"relative"}},t)};const m=function(){return o().createElement("defs",null,o().createElement("filter",{id:"shadow"},o().createElement("feDropShadow",{dx:"0",dy:"0",stdDeviation:"0.2000","flood-opacity":"0","flood-color":"#000000"}),o().createElement("feDropShadow",{dx:"0.2",dy:"1.802",stdDeviation:"2","flood-opacity":"0.1","flood-color":"#000000"})),o().createElement("filter",{id:"shadow-hover"},o().createElement("feDropShadow",{dx:"0",dy:"0",stdDeviation:"0.2000","flood-opacity":"0.08","flood-color":"#000000"}),o().createElement("feDropShadow",{dx:"0",dy:"0.802",stdDeviation:"0.401","flood-opacity":"0.15","flood-color":"#000000"})))};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const h=function(e){var t=e.children,n=e.viewBox,r=void 0===n?"0 0 100 100":n,a=e.styles,l=void 0===a?{}:a;return o().createElement("svg",{width:"100",height:"100",viewBox:r,style:g({display:"block",overflow:"visible"},l),preserveAspectRatio:"'xMidYMid'"},o().createElement(m,null),t)};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={background:"#333"},O=v({},E),w=(v(v({},E),{},{top:11}),v(v({},E),{},{bottom:11}),function(e){return console.log("handle onConnect",e)}),x=function(e){var t=e.data,n=e.isConnectable;return o().createElement(p,null,o().createElement(h,null,o().createElement(f,{fill:t.fill&&t.fill})),o().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:1}},o().createElement("div",{style:{fontFamily:"monospace",fontWeight:400,fontSize:"10px",color:t.labelColor||""}},o().createElement("p",null,t.label||"Action")),o().createElement(u.Handle,{type:"target",position:u.Position.Left,style:E,onConnect:w}),o().createElement(u.Handle,{type:"source",position:u.Position.Right,style:O,isConnectable:n,onMouseDown:function(e){console.log("You trigger mousedown event",e)}})))};const k=(0,r.memo)(x);var j=function(e){var t=e.fill,n=void 0===t?"#fff":t,r=e.stroke,a=void 0===r?"#fff":r,l=e.strokeWidth,i=void 0===l?0:l,c=e.styles,s=void 0===c?{}:c;return o().createElement("path",{fill:n,style:s,strokeWidth:i,stroke:a,d:"M5,80 L50,10 L95,80 z",filter:"url(#shadow)"})};function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var S={background:"#333",top:50},D=C({},S),N=(C(C({},S),{},{bottom:10,top:"auto"}),function(e){return console.log("handle onConnect",e)}),W=function(e){var t=e.data,n=e.isConnectable;return o().createElement(p,null,o().createElement(u.Handle,{type:"target",position:u.Position.Left,style:S,onConnect:N}),o().createElement(u.Handle,{type:"source",position:u.Position.Right,id:"a",style:D,isConnectable:n,onMouseDown:function(e){console.log("You trigger mousedown event",e)}}),o().createElement(h,null,o().createElement(j,{fill:t.fill&&t.fill})),o().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:1}},o().createElement("div",{style:{fontFamily:"monospace",fontWeight:400,color:t.labelColor||"",fontSize:"10px"}},o().createElement("p",null,t.label||"Alert"))))};const I=(0,r.memo)(W);var A=function(e){var t=e.fill,n=void 0===t?"#fff":t,r=e.stroke,a=void 0===r?"#fff":r,l=e.strokeWidth,i=void 0===l?0:l,c=e.styles,s=void 0===c?{}:c;return o().createElement("path",{fill:n,style:s,strokeWidth:i,stroke:a,d:"M-5,80 L30,20 L105,20 L70,80 z",filter:"url(#shadow)"})};function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M={background:"#333",top:50},B=F({},M),L=(F(F({},M),{},{bottom:10,top:"auto"}),function(e){return console.log("handle onConnect",e)}),R=function(e){var t=e.data,n=e.isConnectable;return o().createElement(p,null,o().createElement(u.Handle,{type:"target",position:u.Position.Left,style:M,onConnect:L}),o().createElement(u.Handle,{type:"source",position:u.Position.Right,id:"a",style:B,isConnectable:n,onMouseDown:function(e){console.log("You trigger mousedown event",e)}}),o().createElement(h,null,o().createElement(A,{fill:t.fill&&t.fill})),o().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:1}},o().createElement("div",{style:{fontFamily:"monospace",fontWeight:400,color:t.labelColor||"",fontSize:"10px"}},o().createElement("p",null,t.label||"Data Item"))))};const z=(0,r.memo)(R);var H=function(e){var t=e.fill,n=void 0===t?"#fff":t,r=e.stroke,a=void 0===r?"#fff":r,l=e.strokeWidth,i=void 0===l?0:l,c=e.styles,s=void 0===c?{}:c;return o().createElement("path",{d:"M0,50 L50,0 L100,50 L50,100 z",fill:n,style:s,strokeWidth:i,stroke:a,filter:"url(#shadow)"})};function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Z={background:"#333"},G=Y({},Z),J=(Y(Y({},Z),{},{bottom:10,top:"auto"}),function(e){return console.log("handle onConnect",e)}),X=function(e){var t=e.data,n=e.isConnectable;return o().createElement(p,null,o().createElement(u.Handle,{type:"target",position:u.Position.Left,style:Z,onConnect:J}),o().createElement(u.Handle,{type:"source",position:u.Position.Right,id:"a",style:G,isConnectable:n,onMouseDown:function(e){console.log("You trigger mousedown event",e)}}),o().createElement(h,null,o().createElement(H,{fill:t.fill&&t.fill})),o().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:1}},o().createElement("div",{style:{fontFamily:"monospace",fontWeight:400,fontSize:"10px",color:t.labelColor||""}},o().createElement("p",null,t.label||"Decision"))))};const _=(0,r.memo)(X);var q=function(e){var t=e.fill,n=void 0===t?"#fff":t,r=e.stroke,a=void 0===r?"#fff":r,l=e.strokeWidth,i=void 0===l?0:l,c=e.styles,s=void 0===c?{}:c;return o().createElement("rect",{fill:n,style:s,strokeWidth:i,stroke:a,x:"0",y:"20",rx:"20",width:"100",height:"60",filter:"url(#shadow)"})};function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K={background:"#333"},Q=$({},K),ee=($($({},K),{},{bottom:10,top:"auto"}),function(e){var t=e.data,n=e.isConnectable;return o().createElement(p,null,o().createElement(u.Handle,{type:"source",position:u.Position.Right,id:"a",style:Q,isConnectable:n,onMouseDown:function(e){console.log("You trigger mousedown event",e)}}),o().createElement(h,null,o().createElement(q,{fill:t.fill&&t.fill})),o().createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",zIndex:1}},o().createElement("div",{style:{fontFamily:"monospace",fontWeight:400,color:t.labelColor||"",fontSize:"10px"}},o().createElement("p",null,t.label||"Start"))))}),te=function(e){var t=e.close,n=void 0===t?function(){return console.log("To close")}:t,a=((0,u.useStoreApi)(),(0,u.useStore)((function(e){return e.nodeInternals}))),l=s((0,r.useState)(""),2),i=l[0],c=l[1],d=s((0,r.useState)(),2),f=d[0],p=d[1];return(0,r.useEffect)((function(){var e=Array.from(a).find((function(e,t,n){return e[1].selected}));p(e),e&&e[1].data.label&&c(e[1].data.label)}),[]),o().createElement("div",{style:{position:"absolute",top:0,left:0,zIndex:99999,width:"100vw",height:"100vh",backgroundColor:"rgba(0,0,0,.3)"}},o().createElement("div",{className:"wrp",style:{maxWidth:"400px",margin:"20% auto auto",marginRight:"auto",backgroundColor:"#ededed",padding:60,position:"relative"}},o().createElement("span",{onClick:function(){f&&f[1].data.onChange&&f[1].data.onChange(f[0],i),n()},style:{position:"absolute",top:20,right:20,cursor:"pointer"}},"X"),JSON.stringify(f,null,"\n"),o().createElement("div",{style:{marginTop:20}},o().createElement("form",{style:{marginTop:20},onSubmit:function(e){e.preventDefault(),f&&f[1].data.onChange&&f[1].data.onChange(f[0],i),n()}},o().createElement("label",{htmlFor:"fname"},"LabelNode:"),o().createElement("input",{type:"text",value:i,onChange:function(e){c(e.target.value)},id:"fname",name:"fname"})))))};const ne=function(){var e=(0,u.useStoreApi)(),t=(0,u.useStore)((function(e){return console.log({store:e}),e.nodeInternals}));return(0,u.useStore)((function(e){return e.transform})),o().createElement("aside",{style:{position:"absolute",right:40,top:40,zIndex:9999}},o().createElement("div",{className:"title"},"Nodes"),Array.from(t).map((function(e){var t=s(e,2)[1];return o().createElement("div",{key:t.id},"Node ",t.id," - x: ",t.position.x.toFixed(2),", y:"," ",t.position.y.toFixed(2))})),o().createElement("div",{className:"selectall"},o().createElement("button",{onClick:function(){t.forEach((function(e){console.log(e),e.selected=!0})),e.setState({nodeInternals:new Map(t)})}},"select all nodes")))};var re=function(e,t){e.dataTransfer.setData("application/reactflow",t),e.dataTransfer.effectAllowed="move"};const oe=function(){return o().createElement("aside",{style:{position:"absolute",top:"30%",transform:"translateY(-50%)",left:20,zIndex:9999,boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.1)"}},o().createElement("div",{className:"wrp",style:{display:"flex",alignItems:"center",justifyContent:"center",borderRadius:"4px",flexFlow:"column wrap",padding:"12px",backgroundColor:"#fff"}},o().createElement("h3",null,"Nodes"),o().createElement("div",null,o().createElement("div",{onDragStart:function(e){return re(e,"startNode")},draggable:!0},o().createElement(h,{styles:{maxWidth:60,height:"auto"}},o().createElement(q,{stroke:"#000",strokeWidth:1})))),o().createElement("div",null,o().createElement("div",{onDragStart:function(e){return re(e,"actionNode")},draggable:!0},o().createElement(h,{styles:{maxWidth:60,height:"auto"}},o().createElement(f,{stroke:"#000",strokeWidth:1})))),o().createElement("div",null,o().createElement("div",{onDragStart:function(e){return re(e,"decisionNode")},draggable:!0},o().createElement(h,{styles:{maxWidth:60,height:"auto"}},o().createElement(H,{stroke:"#000",strokeWidth:1})))),o().createElement("div",null,o().createElement("div",{onDragStart:function(e){return re(e,"alertNode")},draggable:!0},o().createElement(h,{styles:{maxWidth:60,height:"auto"}},o().createElement(j,{stroke:"#000",strokeWidth:1})))),o().createElement("div",null,o().createElement("div",{onDragStart:function(e){return re(e,"dataItemNode")},draggable:!0},o().createElement(h,{styles:{maxWidth:60,height:"auto"}},o().createElement(A,{stroke:"#000",strokeWidth:1}))))))};function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie="#e2e5e7",ce={stroke:"#fff"},se=[16,16],ue=function(e,t){return console.log("drag stop",t)},de={startNode:(0,r.memo)(ee),actionNode:k,decisionNode:_,dataItemNode:z,alertNode:I};const fe=function(){var e=s((0,r.useState)(!1),2),t=e[0],n=e[1],a=s((0,u.useNodesState)([]),3),l=a[0],i=a[1],c=a[2],f=s((0,u.useEdgesState)([]),3),p=f[0],m=f[1],y=f[2],g=s((0,r.useState)(),2),h=g[0],b=g[1],v=s((0,r.useState)(ie),2),E=v[0],O=(v[1],s((0,r.useState)(0),2)),w=O[0],x=O[1],k=function(e,t){i((function(n){return n.map((function(n){return n.id!==e?n:le(le({},n),{},{data:le(le({},n.data),{},{label:t})})}))}))},j=[{id:"e1-2",source:"1",type:"smoothstep",target:"2",label:"label edge",animated:!0,style:{stroke:"#fff",strokeWidth:"3px"}},{id:"e2-3",type:"smoothstep",className:"batatas",source:"2",sourceHandle:"a",target:"3",label:o().createElement(o().Fragment,null,o().createElement("tspan",null,"red label")),labelStyle:{fill:"red",fontWeight:700},style:{stroke:"#ffcc00",strokeWidth:"3px"},markerEnd:{type:u.MarkerType.ArrowClosed,color:"#FFCC00",orient:"auto-start-reverse",markerUnits:"userSpaceOnUse",width:25,height:25}},{id:"e3-6",type:"smoothstep",className:"batatas",source:"3",sourceHandle:"b",target:"6",style:{stroke:"#ffcc00",strokeWidth:"3px"},markerEnd:{type:u.MarkerType.ArrowClosed,color:"#FFCC00",orient:"auto-start-reverse",markerUnits:"userSpaceOnUse",width:25,height:25}},{id:"e2-4",type:"smoothstep",source:"2",sourceHandle:"a",target:"4",label:"label with styled bg",labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#FFCC00",color:"#fff",fillOpacity:.7},style:{strokeWidth:"3px"},markerEnd:{type:u.MarkerType.ArrowClosed,orient:"auto-start-reverse",markerUnits:"userSpaceOnUse",width:25,height:25}},{id:"e2-5",type:"smoothstep",source:"2",target:"5",labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#FFF",color:"#fff"},style:{stroke:"#ff6700",strokeWidth:"2px"},animated:!1,markerEnd:{type:u.MarkerType.Arrow,orient:"auto-start-reverse",markerUnits:"userSpaceOnUse",color:"#ff6700",width:25,height:25}},{id:"e4a-4b",type:"smoothstep",source:"4a",target:"4b",labelBgPadding:[8,4],labelBgBorderRadius:4,labelBgStyle:{fill:"#FFF",color:"#fff"},style:{stroke:"#000",strokeWidth:"1px"},animated:!0,markerEnd:{type:u.MarkerType.ArrowClosed,orient:"auto-start-reverse",markerUnits:"userSpaceOnUse",color:"#000",width:25,height:25}}],P=[{id:"1",type:"startNode",data:{onChange:k,label:"Start Node",fill:"#668de3",labelColor:"#fff"},position:{x:0,y:0},sourcePosition:u.Position.Right},{id:"2",type:"decisionNode",data:{onChange:k,color:ie,fill:"#ff6700"},style:{border:"none",padding:10},position:{x:200,y:150}},{id:"3",type:"dataItemNode",data:{onChange:k,label:"dataItem A"},position:{x:450,y:-90},targetPosition:u.Position.Right},{id:"4",type:"output",data:{onChange:k,label:"Output B"},position:{x:450,y:200},targetPosition:u.Position.Left,style:{backgroundColor:"rgba(255,50, 50, 0.4)",width:500,height:300}},{id:"4a",type:"startNode",data:{onChange:k,label:"Node 4a"},position:{x:15,y:5},className:"light",parentNode:"4",extent:[[0,0],[100,100]]},{id:"4b",data:{onChange:k,label:"Node 4b"},position:{x:140,y:80},className:"light",style:{backgroundColor:"rgba(50, 50, 255, 0.5)",height:200,width:300},parentNode:"4"},{id:"5",type:"alertNode",data:{onChange:k,label:"alert A",labelColor:"#fff",fill:"#ff6700"},position:{x:450,y:60},targetPosition:u.Position.Right},{id:"6",type:"actionNode",data:{onChange:k,label:"Action A"},position:{x:620,y:-90},targetPosition:u.Position.Right}];return(0,r.useEffect)((function(){i(P),m(j)}),[]),(0,r.useEffect)((function(){console.log("NODES changed")}),[l]),o().createElement(u.ReactFlowProvider,null,o().createElement(d(),{nodes:l,edges:p,onNodesChange:c,onEdgesChange:y,onNodeClick:function(e,t){console.log("click",t),1===e.detail&&console.log("oneClick"),2===e.detail&&(console.log("dobleClick"),n(!0))},onConnect:function(e){return m((function(t){return(0,u.addEdge)(le(le({},e),{},{type:"smoothstep",labelBgPadding:[8,4],labelBgBorderRadius:4,style:{strokeWidth:"3px"},markerEnd:{type:u.MarkerType.ArrowClosed,orient:"auto-start-reverse",markerUnits:"userSpaceOnUse",width:25,height:25}}),t)}))},onNodeDragStop:ue,onInit:function(e){return b(e)},nodeTypes:de,connectionLineStyle:ce,snapToGrid:!0,snapGrid:se,fitView:!0,minZoom:.3,maxZoom:2,style:{width:"100%",height:"98vh",background:E},onDrop:function(e){if(e.preventDefault(),h&&e.dataTransfer){var t=e.dataTransfer.getData("application/reactflow"),n=h.project({x:e.clientX-100,y:e.clientY-100}),r={id:(x((function(e){return e+1})),"new_node_".concat(w)),type:t,position:n,data:{onChange:k,label:"".concat(t)},targetPosition:u.Position.Left};i((function(e){return e.concat(r)}))}},onDragOver:function(e){e.preventDefault(),e.dataTransfer&&(e.dataTransfer.dropEffect="move")}},o().createElement(u.Background,null),o().createElement(u.Controls,{style:{display:"flex",right:20,left:"auto",boxShadow:"2px 2px 2px 1px rgba(0, 0, 0, 0.1)"}})),o().createElement(oe,null),o().createElement(ne,null),t&&o().createElement(te,{close:function(){return n(!1)}}))};var pe=n(379),me=n.n(pe),ye=n(795),ge=n.n(ye),he=n(569),be=n.n(he),ve=n(565),Ee=n.n(ve),Oe=n(216),we=n.n(Oe),xe=n(589),ke=n.n(xe),je=n(383),Pe={};Pe.styleTagTransform=ke(),Pe.setAttributes=Ee(),Pe.insert=be().bind(null,"head"),Pe.domAPI=ge(),Pe.insertStyleElement=we(),me()(je.Z,Pe),je.Z&&je.Z.locals&&je.Z.locals;var Ce=function(){return o().createElement("div",null,o().createElement(fe,null))};l().render(o().createElement(Ce,null),document.getElementById("app"))},383:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(81),o=n.n(r),a=n(645),l=n.n(a)()(o());l.push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  font-size: 3rem;\n  margin: auto;\n  max-width: 800px;\n  margin-top: 20px;\n}",""]);const i=l},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var l={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(l[c]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&l[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},l=[],i=0;i<e.length;i++){var c=e[i],s=r.base?c[0]+r.base:c[0],u=a[s]||0,d="".concat(s," ").concat(u);a[s]=u+1;var f=n(d),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)t[f].references++,t[f].updater(p);else{var m=o(p,r);r.byIndex=i,t.splice(i,0,{identifier:d,updater:m,references:1})}l.push(d)}return l}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var l=0;l<a.length;l++){var i=n(a[l]);t[i].references--}for(var c=r(e,o),s=0;s<a.length;s++){var u=n(a[s]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}}]);