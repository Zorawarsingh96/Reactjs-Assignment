"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[346],{950:function(n,e,t){t.d(e,{Z:function(){return z}});var s=t(70885),i=t(47313),a=t(30168),r=t(63366),o=t(87462),d=t(83061),h=t(30686),l=t(21921);function m(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function c(n){return parseFloat(n)}var x=t(17551),j=t(17592),u=t(77342),g=t(77430),Z=t(32298);function w(n){return(0,Z.Z)("MuiSkeleton",n)}(0,g.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var f,v,p,P,b,C,S,k,y=t(46417),R=["animation","className","component","height","style","variant","width"],_=(0,h.F4)(b||(b=f||(f=(0,a.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),F=(0,h.F4)(C||(C=v||(v=(0,a.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),M=(0,j.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e[t.variant],!1!==t.animation&&e[t.animation],t.hasChildren&&e.withChildren,t.hasChildren&&!t.width&&e.fitContent,t.hasChildren&&!t.height&&e.heightAuto]}})((function(n){var e=n.theme,t=n.ownerState,s=m(e.shape.borderRadius)||"px",i=c(e.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:(0,x.Fq)(e.palette.text.primary,"light"===e.palette.mode?.11:.13),height:"1.2em"},"text"===t.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(s,"/").concat(Math.round(i/.6*10)/10).concat(s),"&:empty:before":{content:'"\\00a0"'}},"circular"===t.variant&&{borderRadius:"50%"},"rounded"===t.variant&&{borderRadius:(e.vars||e).shape.borderRadius},t.hasChildren&&{"& > *":{visibility:"hidden"}},t.hasChildren&&!t.width&&{maxWidth:"fit-content"},t.hasChildren&&!t.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,h.iv)(S||(S=p||(p=(0,a.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),_)}),(function(n){var e=n.ownerState,t=n.theme;return"wave"===e.animation&&(0,h.iv)(k||(k=P||(P=(0,a.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),F,(t.vars||t).palette.action.hover)})),A=i.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiSkeleton"}),s=t.animation,i=void 0===s?"pulse":s,a=t.className,h=t.component,m=void 0===h?"span":h,c=t.height,x=t.style,j=t.variant,g=void 0===j?"text":j,Z=t.width,f=(0,r.Z)(t,R),v=(0,o.Z)({},t,{animation:i,component:m,variant:g,hasChildren:Boolean(f.children)}),p=function(n){var e=n.classes,t=n.variant,s=n.animation,i=n.hasChildren,a=n.width,r=n.height,o={root:["root",t,s,i&&"withChildren",i&&!a&&"fitContent",i&&!r&&"heightAuto"]};return(0,l.Z)(o,w,e)}(v);return(0,y.jsx)(M,(0,o.Z)({as:m,ref:e,className:(0,d.Z)(p.root,a),ownerState:v},f,{style:(0,o.Z)({width:Z,height:c},x)}))})),X=t(42832),B=t(9019),N=t(24656),z=function(n){var e=n.children,t=(0,i.useState)(!0),a=(0,s.Z)(t,2),r=a[0],o=a[1];(0,i.useEffect)((function(){o(!1)}),[]);var d=(0,y.jsx)(N.Z,{title:(0,y.jsx)(A,{sx:{width:{xs:120,md:180}}}),secondary:(0,y.jsx)(A,{animation:"wave",variant:"circular",width:24,height:24}),children:(0,y.jsxs)(X.Z,{spacing:1,children:[(0,y.jsx)(A,{}),(0,y.jsx)(A,{sx:{height:64},animation:"wave",variant:"rectangular"}),(0,y.jsx)(A,{}),(0,y.jsx)(A,{})]})});return(0,y.jsxs)(y.Fragment,{children:[r&&(0,y.jsxs)(B.ZP,{container:!0,spacing:3,children:[(0,y.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d}),(0,y.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d}),(0,y.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d}),(0,y.jsx)(B.ZP,{item:!0,xs:12,md:6,children:d})]}),!r&&e]})}},83346:function(n,e,t){t.r(e);var s=t(19860),i=t(42832),a=t(61113),r=t(9019),o=t(24656),d=t(950),h=t(46417);function l(n){var e=n.shadow;return(0,h.jsx)(o.Z,{border:!1,sx:{boxShadow:e},children:(0,h.jsxs)(i.Z,{spacing:1,justifyContent:"center",alignItems:"center",children:[(0,h.jsx)(a.Z,{variant:"h6",children:"boxShadow"}),(0,h.jsx)(a.Z,{variant:"subtitle1",children:e})]})})}function m(n){var e=n.shadow,t=n.label,s=n.color,r=n.bgcolor;return(0,h.jsx)(o.Z,{border:!1,sx:{bgcolor:r||"inherit",boxShadow:e},children:(0,h.jsx)(i.Z,{spacing:1,justifyContent:"center",alignItems:"center",children:(0,h.jsx)(a.Z,{variant:"subtitle1",color:s,children:t})})})}e.default=function(){var n=(0,s.Z)();return(0,h.jsx)(d.Z,{children:(0,h.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,h.jsx)(r.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{title:"Basic Shadow",codeHighlight:!0,children:(0,h.jsxs)(r.ZP,{container:!0,spacing:3,children:[(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"0"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"1"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"2"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"3"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"4"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"5"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"6"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"7"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"8"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"9"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"10"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"11"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"12"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"13"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"14"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"15"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"16"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"17"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"18"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"19"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"20"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"21"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"22"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"23"})}),(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(l,{shadow:"24"})})]})})}),(0,h.jsx)(r.ZP,{item:!0,xs:12,children:(0,h.jsx)(o.Z,{title:"Custom Shadow",codeHighlight:!0,children:(0,h.jsx)(r.ZP,{container:!0,spacing:3,children:(0,h.jsx)(r.ZP,{item:!0,xs:6,sm:4,md:3,lg:2,children:(0,h.jsx)(m,{shadow:n.customShadows.z1,label:"z1",color:"inherit"})})})})})]})})}}}]);