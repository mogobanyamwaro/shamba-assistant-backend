(this["webpackJsonpbamburgh-react-admin-dashboard-material-ui-pro"]=this["webpackJsonpbamburgh-react-admin-dashboard-material-ui-pro"]||[]).push([[58],{1032:function(e,a,t){"use strict";var l=t(17);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),r=(0,l(t(19)).default)(n.default.createElement(n.default.Fragment,null,n.default.createElement("path",{transform:"scale(1.2, 1.2)",fill:"none",d:"M0 0h20v20H0V0z"}),n.default.createElement("path",{transform:"scale(1.2, 1.2)",d:"M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"})),"Settings");a.default=r},1033:function(e,a,t){"use strict";var l=t(17);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),r=(0,l(t(19)).default)(n.default.createElement("path",{d:"M8 10H5V7H3v3H0v2h3v3h2v-3h3v-2zm10 1c1.66 0 2.99-1.34 2.99-3S19.66 5 18 5c-.32 0-.63.05-.91.14.57.81.9 1.79.9 2.86s-.34 2.04-.9 2.86c.28.09.59.14.91.14zm-5 0c1.66 0 2.99-1.34 2.99-3S14.66 5 13 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm6.62 2.16c.83.73 1.38 1.66 1.38 2.84v2h3v-2c0-1.54-2.37-2.49-4.38-2.84zM13 13c-2 0-6 1-6 3v2h12v-2c0-2-4-3-6-3z"}),"GroupAdd");a.default=r},1034:function(e,a,t){"use strict";var l=t(17);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),r=(0,l(t(19)).default)(n.default.createElement("path",{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 13H3V5h18v11z"}),"VideoLabel");a.default=r},1220:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return ae}));var l=t(0),n=t.n(l),r=t(18),c=t(11),i=t(2),o=t(7),m=t(293),d=t(277),s=t(278),u=t(236),p=t(237),b=t(241),v=t(283),f=t(285),E=t(297),h=t(281),g=t(276),x=t(270),y=t(1),N=t(3),j=(t(5),t(6)),L=t(172),z=l.forwardRef((function(e,a){var t=e.active,n=e.alternativeLabel,r=void 0!==n&&n,c=e.classes,o=e.className,m=e.completed,d=e.disabled,s=(e.index,e.orientation),u=void 0===s?"horizontal":s,p=Object(N.a)(e,["active","alternativeLabel","classes","className","completed","disabled","index","orientation"]);return l.createElement("div",Object(y.a)({className:Object(i.a)(c.root,c[u],o,r&&c.alternativeLabel,t&&c.active,m&&c.completed,d&&c.disabled),ref:a},p),l.createElement("span",{className:Object(i.a)(c.line,{horizontal:c.lineHorizontal,vertical:c.lineVertical}[u])}))})),O=Object(j.a)((function(e){return{root:{flex:"1 1 auto"},horizontal:{},vertical:{marginLeft:12,padding:"0 0 8px"},alternativeLabel:{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"},active:{},completed:{},disabled:{},line:{display:"block",borderColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},lineHorizontal:{borderTopStyle:"solid",borderTopWidth:1},lineVertical:{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24}}}),{name:"MuiStepConnector"})(z),w=l.createElement(O,null),S=l.forwardRef((function(e,a){var t=e.activeStep,n=void 0===t?0:t,r=e.alternativeLabel,c=void 0!==r&&r,o=e.children,m=e.classes,d=e.className,s=e.connector,u=void 0===s?w:s,p=e.nonLinear,b=void 0!==p&&p,v=e.orientation,f=void 0===v?"horizontal":v,E=Object(N.a)(e,["activeStep","alternativeLabel","children","classes","className","connector","nonLinear","orientation"]),h=l.isValidElement(u)?l.cloneElement(u,{orientation:f}):null,g=l.Children.toArray(o),x=g.map((function(e,a){var t={alternativeLabel:c,connector:u,last:a+1===g.length,orientation:f},r={index:a,active:!1,completed:!1,disabled:!1};return n===a?r.active=!0:!b&&n>a?r.completed=!0:!b&&n<a&&(r.disabled=!0),[!c&&h&&0!==a&&l.cloneElement(h,Object(y.a)({key:a},r)),l.cloneElement(e,Object(y.a)(Object(y.a)(Object(y.a)({},t),r),e.props))]}));return l.createElement(L.a,Object(y.a)({square:!0,elevation:0,className:Object(i.a)(m.root,m[f],d,c&&m.alternativeLabel),ref:a},E),x)})),C=Object(j.a)({root:{display:"flex",padding:24},horizontal:{flexDirection:"row",alignItems:"center"},vertical:{flexDirection:"column"},alternativeLabel:{alignItems:"flex-start"}},{name:"MuiStepper"})(S),k=(t(56),l.forwardRef((function(e,a){var t=e.active,n=void 0!==t&&t,r=e.alternativeLabel,c=e.children,o=e.classes,m=e.className,d=e.completed,s=void 0!==d&&d,u=e.connector,p=e.disabled,b=void 0!==p&&p,v=e.expanded,f=void 0!==v&&v,E=e.index,h=e.last,g=e.orientation,x=Object(N.a)(e,["active","alternativeLabel","children","classes","className","completed","connector","disabled","expanded","index","last","orientation"]);return l.createElement("div",Object(y.a)({className:Object(i.a)(o.root,o[g],m,r&&o.alternativeLabel,s&&o.completed),ref:a},x),u&&r&&0!==E&&l.cloneElement(u,{orientation:g,alternativeLabel:r,index:E,active:n,completed:s,disabled:b}),l.Children.map(c,(function(e){return l.isValidElement(e)?l.cloneElement(e,Object(y.a)({active:n,alternativeLabel:r,completed:s,disabled:b,expanded:f,last:h,icon:E+1,orientation:g},e.props)):null})))}))),M=Object(j.a)({root:{},horizontal:{paddingLeft:8,paddingRight:8},vertical:{},alternativeLabel:{flex:1,position:"relative"},completed:{}},{name:"MuiStep"})(k),W=t(48),I=t(34),P=Object(I.a)(l.createElement("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),V=Object(I.a)(l.createElement("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),H=t(93),$=l.createElement("circle",{cx:"12",cy:"12",r:"12"}),R=l.forwardRef((function(e,a){var t=e.completed,n=void 0!==t&&t,r=e.icon,c=e.active,o=void 0!==c&&c,m=e.error,d=void 0!==m&&m,s=e.classes;if("number"===typeof r||"string"===typeof r){var u=Object(i.a)(s.root,o&&s.active,d&&s.error,n&&s.completed);return d?l.createElement(V,{className:u,ref:a}):n?l.createElement(P,{className:u,ref:a}):l.createElement(H.a,{className:u,ref:a},$,l.createElement("text",{className:s.text,x:"12",y:"16",textAnchor:"middle"},r))}return r})),A=Object(j.a)((function(e){return{root:{display:"block",color:e.palette.text.disabled,"&$completed":{color:e.palette.primary.main},"&$active":{color:e.palette.primary.main},"&$error":{color:e.palette.error.main}},text:{fill:e.palette.primary.contrastText,fontSize:e.typography.caption.fontSize,fontFamily:e.typography.fontFamily},active:{},completed:{},error:{}}}),{name:"MuiStepIcon"})(R),F=l.forwardRef((function(e,a){var t=e.active,n=void 0!==t&&t,r=e.alternativeLabel,c=void 0!==r&&r,o=e.children,m=e.classes,d=e.className,s=e.completed,u=void 0!==s&&s,p=e.disabled,b=void 0!==p&&p,v=e.error,f=void 0!==v&&v,E=(e.expanded,e.icon),h=(e.last,e.optional),g=e.orientation,x=void 0===g?"horizontal":g,j=e.StepIconComponent,L=e.StepIconProps,z=Object(N.a)(e,["active","alternativeLabel","children","classes","className","completed","disabled","error","expanded","icon","last","optional","orientation","StepIconComponent","StepIconProps"]),O=j;return E&&!O&&(O=A),l.createElement("span",Object(y.a)({className:Object(i.a)(m.root,m[x],d,b&&m.disabled,c&&m.alternativeLabel,f&&m.error),ref:a},z),E||O?l.createElement("span",{className:Object(i.a)(m.iconContainer,c&&m.alternativeLabel)},l.createElement(O,Object(y.a)({completed:u,active:n,error:f,icon:E},L))):null,l.createElement("span",{className:m.labelContainer},l.createElement(W.a,{variant:"body2",component:"span",className:Object(i.a)(m.label,c&&m.alternativeLabel,u&&m.completed,n&&m.active,f&&m.error),display:"block"},o),h))}));F.muiName="StepLabel";var _=Object(j.a)((function(e){return{root:{display:"flex",alignItems:"center","&$alternativeLabel":{flexDirection:"column"},"&$disabled":{cursor:"default"}},horizontal:{},vertical:{},label:{color:e.palette.text.secondary,"&$active":{color:e.palette.text.primary,fontWeight:500},"&$completed":{color:e.palette.text.primary,fontWeight:500},"&$alternativeLabel":{textAlign:"center",marginTop:16},"&$error":{color:e.palette.error.main}},active:{},completed:{},error:{},disabled:{},iconContainer:{flexShrink:0,display:"flex",paddingRight:8,"&$alternativeLabel":{paddingRight:0}},alternativeLabel:{},labelContainer:{width:"100%"}}}),{name:"MuiStepLabel"})(F),T=t(351),D=t.n(T),B=t(1032),J=t.n(B),q=t(1033),G=t.n(q),Y=t(1034),Z=t.n(Y),K=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("div",{className:"p-4"},n.a.createElement("h5",{className:"font-size-xl mb-1 font-weight-bold"},"Personal information"),n.a.createElement("p",{className:"text-black-50 mb-4"},"Small section summary description can be added here!"),n.a.createElement(d.a,{container:!0,spacing:6},n.a.createElement(d.a,{item:!0,md:6},n.a.createElement(s.a,{fullWidth:!0,label:"Email",type:"email",variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:6},n.a.createElement(s.a,{fullWidth:!0,label:"Password",type:"password",variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:12},n.a.createElement(s.a,{fullWidth:!0,label:"Address",multiline:!0,rows:4,variant:"outlined"}))))))},Q=function(){var e=Object(l.useState)(""),a=Object(c.a)(e,2),t=a[0],r=a[1];return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("div",{className:"p-4"},n.a.createElement("h5",{className:"font-size-xl mb-1 font-weight-bold"},"Billing information"),n.a.createElement("p",{className:"text-black-50 mb-4"},"Wonderful transition effects."),n.a.createElement(d.a,{container:!0,spacing:6},n.a.createElement(d.a,{item:!0,md:12},n.a.createElement(s.a,{fullWidth:!0,label:"Address 2",multiline:!0,rows:4,variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:6},n.a.createElement(s.a,{fullWidth:!0,label:"Password",type:"password",variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:3},n.a.createElement(u.a,{fullWidth:!0,variant:"outlined"},n.a.createElement(p.a,{id:"demo-simple-select-outlined-label"},"State"),n.a.createElement(b.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:t,onChange:function(e){r(e.target.value)},label:"State"},n.a.createElement(v.a,{value:""},"None"),n.a.createElement(v.a,{value:10},"California"),n.a.createElement(v.a,{value:20},"Texas"),n.a.createElement(v.a,{value:30},"Alabama")))),n.a.createElement(d.a,{item:!0,md:3},n.a.createElement(s.a,{fullWidth:!0,label:"Zip",variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:12,className:"pt-0"},n.a.createElement(f.a,{control:n.a.createElement(E.a,{name:"checkedC"}),label:"Check me out"}))))))},U=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("div",{className:"p-4"},n.a.createElement("h5",{className:"font-size-xl mb-1 font-weight-bold"},"Payment details"),n.a.createElement("p",{className:"text-black-50 mb-4"},"The next and previous buttons help you to navigate through your content."),n.a.createElement(d.a,{container:!0,spacing:6},n.a.createElement(d.a,{item:!0,md:12},n.a.createElement(s.a,{fullWidth:!0,label:"Credit card number",variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:6},n.a.createElement(s.a,{fullWidth:!0,label:"Name on card",variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:3},n.a.createElement(s.a,{fullWidth:!0,label:"Exp. date",variant:"outlined"})),n.a.createElement(d.a,{item:!0,md:3},n.a.createElement(s.a,{fullWidth:!0,label:"CVC/CVV",variant:"outlined"}))))))};function X(e){var a=e.active,t=e.completed,l={1:n.a.createElement(J.a,null),2:n.a.createElement(G.a,null),3:n.a.createElement(Z.a,null)};return n.a.createElement("div",{className:Object(i.a)("d-50 transition-base d-flex align-items-center bg-gray-400 justify-content-center rounded",{"d-80 bg-primary text-white shadow-primary-sm":a,"d-50 bg-success text-white shadow-success-sm":t})},t?n.a.createElement(D.a,{className:"completed"}):l[String(e.icon)])}function ee(){var e=Object(l.useState)(0),a=Object(c.a)(e,2),t=a[0],r=a[1],i=["Personal Information","Billing Information","Payment Details"];return n.a.createElement(h.a,{className:"card-box"},n.a.createElement("div",{className:"card-header"},n.a.createElement("div",{className:"card-header--title"},n.a.createElement("small",null,"Wizards 1"),n.a.createElement("b",null,"Example number 1 for steppers")),n.a.createElement("div",{className:"card-header--actions"},n.a.createElement(g.a,{title:"Add new"},n.a.createElement(x.a,{size:"small",className:"btn-primary d-30 p-0 btn-icon"},n.a.createElement(o.a,{icon:["fas","plus-circle"]}))))),n.a.createElement("div",null,n.a.createElement("div",{className:"bg-secondary mb-3"},n.a.createElement(C,{className:"stepper-horizontal-1",alternativeLabel:!0,activeStep:t,connector:n.a.createElement(O,null)},i.map((function(e){return n.a.createElement(M,{key:e},n.a.createElement(_,{StepIconComponent:X},e))})))),t===i.length?n.a.createElement("div",{className:"text-center p-5"},n.a.createElement("div",{className:"avatar-icon-wrapper rounded-circle m-0"},n.a.createElement("div",{className:"d-inline-flex justify-content-center p-0 rounded-circle btn-icon avatar-icon-wrapper bg-neutral-warning text-warning m-0 d-130"},n.a.createElement(o.a,{icon:["far","lightbulb"],className:"d-flex align-self-center display-3"}))),n.a.createElement("h4",{className:"font-weight-bold mt-4"},"You finished all steps!"),n.a.createElement("p",{className:"mb-0 font-size-lg text-muted"},"Customize your stepper fast and easy!"),n.a.createElement("div",{className:"pt-4"},n.a.createElement(x.a,{onClick:function(){r(0)},className:"btn-warning font-weight-bold rounded hover-scale-lg mx-1",size:"large"},n.a.createElement("span",{className:"btn-wrapper--label"},"Reset Stepper")))):n.a.createElement("div",null,n.a.createElement("div",null,function(e){switch(e){case 0:return n.a.createElement(K,null);case 1:return n.a.createElement(Q,null);case 2:return n.a.createElement(U,null);default:return n.a.createElement(K,null)}}(t)),n.a.createElement("div",{className:"card-footer mt-4 p-4 d-flex align-items-center justify-content-between bg-secondary"},n.a.createElement(x.a,{disabled:0===t,className:"btn-primary font-weight-bold",onClick:function(){r((function(e){return e-1}))}},"Back"),n.a.createElement(x.a,{className:"btn-primary font-weight-bold",onClick:function(){r((function(e){return e+1}))}},t===i.length-1?"Finish":"Next")))))}function ae(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.e,{titleHeading:"Content Steppers",titleDescription:"Easily create beautiful form multi step wizards or presentation steps."}),n.a.createElement(r.a,null,n.a.createElement(ee,null)))}},351:function(e,a,t){"use strict";var l=t(17);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=l(t(0)),r=(0,l(t(19)).default)(n.default.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"}),"Check");a.default=r}}]);
//# sourceMappingURL=58.4dc697c5.chunk.js.map