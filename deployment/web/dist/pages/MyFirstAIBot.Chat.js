import { asResult, Big, reactExports, i, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-Bq1c4uSS.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import { AssociationProperty } from '../AssociationProperty-BQ-xenUM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { DynamicClassProperty } from '../DynamicClassProperty-GqIRc8le.js';
import { ListActionProperty } from '../ListActionProperty-CnTTvC2T.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-BR95nzdd.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-z5djVxQ4.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-V0FBuqFr.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { AccordionWidgetModule, ScrollToBottom, ACT_Textarea_ExecuteButtonAction, ACT_ChatContext_ExecuteSuggestedUserPrompt, ACT_ChatContext_SendMessage } from '../ConversationalUI.ACT_Textarea_ExecuteButtonAction-DYD7cAES.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { EventsWidgetModule } from '../Events-C5cPRTBy.js';
import '../Fragment-C-45CGtT.js';
import { GalleryWidgetModule } from '../Gallery-crF9TXk7.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { ListView } from '../ListView-hken1fZ0.js';
import { MarkdownWidgetModule } from '../Markdown-rCm_gmRs.js';
import { M as M$1, reactDomExports } from '../index-BuuMIVCm.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextArea } from '../TextArea-CVgm5cpf.js';
import { content as content$1 } from '../Atlas_Core.Atlas_TopBar-CKgSzJ5B.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../CxMFexew-Djrc9cTX.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../Wait-DpHrtukH.js';
import '../index-DQ4aW2Di.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../ListExpressionProperty-CLcrpJsE.js';
import '../WebStaticImageProperty-C3LJYoNm.js';
import '../SidebarToggle-Bw-HLNop.js';
import '../D7vCi_Rn-BKFLWyMt.js';
import '../CGlz0zm4-DhbfSt7O.js';
import '../ScrollContainer-U0HrQ4Hh.js';
import '../MenuBar-BOhekOWd.js';

const DecimalProperty = (config) => asResult(new Big(config.value));

function c(e){var t,n,o,r;switch(e.minValueType){case"static":return Number(e.staticMinimumValue);case"dynamic":return Number(null!==(n=null===(t=e.minAttribute)||void 0===t?void 0:t.value)&&void 0!==n?n:0);case"expression":return Number(null!==(r=null===(o=e.expressionMinimumValue)||void 0===o?void 0:o.value)&&void 0!==r?r:0)}}function p(e){var t,n,o,r;switch(e.maxValueType){case"static":return Number(e.staticMaximumValue);case"dynamic":return Number(null!==(n=null===(t=e.maxAttribute)||void 0===t?void 0:t.value)&&void 0!==n?n:100);case"expression":return Number(null!==(r=null===(o=e.expressionMaximumValue)||void 0===o?void 0:o.value)&&void 0!==r?r:100)}}function f(e){const{noOfMarkers:n,decimalPlaces:o,minValueType:r,staticMinimumValue:i,minAttribute:a,expressionMinimumValue:s,maxValueType:u,staticMaximumValue:l,maxAttribute:f,expressionMaximumValue:h}=e,d=c({minValueType:r,staticMinimumValue:i,minAttribute:a,expressionMinimumValue:s}),m=p({maxValueType:u,staticMaximumValue:l,maxAttribute:f,expressionMaximumValue:h});return reactExports.useMemo((()=>function(e){if(!function(e){return e.numberOfMarks>0&&e.min<e.max}(e))return;const t={},{numberOfMarks:n,decimalPlaces:o,min:r,max:i}=e,a=(i-r)/n;for(let e=0;e<=n;e++){const n=parseFloat((r+e*a).toFixed(o));t[n]=n.toString();}return t}({numberOfMarks:n,decimalPlaces:o,min:d,max:m})),[d,m,n,o])}function h(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var d={exports:{}},m={exports:{}},v=m.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=v);var y={exports:{}},g=y.exports={version:"2.6.11"};"number"==typeof __e&&(__e=g);var b=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e},w=function(e,t,n){if(b(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,o){return e.call(t,n,o)};case 3:return function(n,o,r){return e.call(t,n,o,r)}}return function(){return e.apply(t,arguments)}},T={},x=function(e){return "object"==typeof e?null!==e:"function"==typeof e},O=x,E=function(e){if(!O(e))throw TypeError(e+" is not an object!");return e},S=function(e){try{return !!e()}catch(e){return !0}},C=!S((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),M=x,P=m.exports.document,k=M(P)&&M(P.createElement),_=function(e){return k?P.createElement(e):{}},A=!C&&!S((function(){return 7!=Object.defineProperty(_("div"),"a",{get:function(){return 7}}).a})),N=x,D=function(e,t){if(!N(e))return e;var n,o;if(t&&"function"==typeof(n=e.toString)&&!N(o=n.call(e)))return o;if("function"==typeof(n=e.valueOf)&&!N(o=n.call(e)))return o;if(!t&&"function"==typeof(n=e.toString)&&!N(o=n.call(e)))return o;throw TypeError("Can't convert object to primitive value")},j=E,L=A,R=D,V=Object.defineProperty;T.f=C?Object.defineProperty:function(e,t,n){if(j(e),t=R(t,!0),j(n),L)try{return V(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return "value"in n&&(e[t]=n.value),e};var F=function(e,t){return {enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},U=T,W=F,H=C?function(e,t,n){return U.f(e,t,W(1,n))}:function(e,t,n){return e[t]=n,e},I={}.hasOwnProperty,B=function(e,t){return I.call(e,t)},z=m.exports,K=y.exports,X=w,Y=H,$=B,G=function(e,t,n){var o,r,i,a=e&G.F,s=e&G.G,u=e&G.S,l=e&G.P,c=e&G.B,p=e&G.W,f=s?K:K[t]||(K[t]={}),h=f.prototype,d=s?z:u?z[t]:(z[t]||{}).prototype;for(o in s&&(n=t),n)(r=!a&&d&&void 0!==d[o])&&$(f,o)||(i=r?d[o]:n[o],f[o]=s&&"function"!=typeof d[o]?n[o]:c&&r?X(i,z):p&&d[o]==i?function(e){var t=function(t,n,o){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,o)}return e.apply(this,arguments)};return t.prototype=e.prototype,t}(i):l&&"function"==typeof i?X(Function.call,i):i,l&&((f.virtual||(f.virtual={}))[o]=i,e&G.R&&h&&!h[o]&&Y(h,o,i)));};G.F=1,G.G=2,G.S=4,G.P=8,G.B=16,G.W=32,G.U=64,G.R=128;var q=G,Q={}.toString,Z=function(e){return Q.call(e).slice(8,-1)},J=Z,ee=Object("z").propertyIsEnumerable(0)?Object:function(e){return "String"==J(e)?e.split(""):Object(e)},te=function(e){if(null==e)throw TypeError("Can't call method on  "+e);return e},ne=ee,oe=te,re=function(e){return ne(oe(e))},ie=Math.ceil,ae=Math.floor,se=function(e){return isNaN(e=+e)?0:(e>0?ae:ie)(e)},ue=se,le=Math.min,ce=function(e){return e>0?le(ue(e),9007199254740991):0},pe=se,fe=Math.max,he=Math.min,de=re,me=ce,ve=function(e,t){return (e=pe(e))<0?fe(e+t,0):he(e,t)},ye={exports:{}},ge=y.exports,be=m.exports,we=be["__core-js_shared__"]||(be["__core-js_shared__"]={});(ye.exports=function(e,t){return we[e]||(we[e]=void 0!==t?t:{})})("versions",[]).push({version:ge.version,mode:"pure",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"});var Te,xe=0,Oe=Math.random(),Ee=function(e){return "Symbol(".concat(void 0===e?"":e,")_",(++xe+Oe).toString(36))},Se=ye.exports("keys"),Ce=Ee,Me=function(e){return Se[e]||(Se[e]=Ce(e))},Pe=B,ke=re,_e=(Te=!1,function(e,t,n){var o,r=de(e),i=me(r.length),a=ve(n,i);if(Te&&t!=t){for(;i>a;)if((o=r[a++])!=o)return !0}else for(;i>a;a++)if((Te||a in r)&&r[a]===t)return Te||a||0;return !Te&&-1}),Ae=Me("IE_PROTO"),Ne=function(e,t){var n,o=ke(e),r=0,i=[];for(n in o)n!=Ae&&Pe(o,n)&&i.push(n);for(;t.length>r;)Pe(o,n=t[r++])&&(~_e(i,n)||i.push(n));return i},De="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),je=Ne,Le=De,Re=Object.keys||function(e){return je(e,Le)},Ve={};Ve.f=Object.getOwnPropertySymbols;var Fe={};Fe.f={}.propertyIsEnumerable;var Ue=te,We=function(e){return Object(Ue(e))},He=C,Ie=Re,Be=Ve,ze=Fe,Ke=We,Xe=ee,Ye=Object.assign,$e=!Ye||S((function(){var e={},t={},n=Symbol(),o="abcdefghijklmnopqrst";return e[n]=7,o.split("").forEach((function(e){t[e]=e;})),7!=Ye({},e)[n]||Object.keys(Ye({},t)).join("")!=o}))?function(e,t){for(var n=Ke(e),o=arguments.length,r=1,i=Be.f,a=ze.f;o>r;)for(var s,u=Xe(arguments[r++]),l=i?Ie(u).concat(i(u)):Ie(u),c=l.length,p=0;c>p;)s=l[p++],He&&!a.call(u,s)||(n[s]=u[s]);return n}:Ye,Ge=q;Ge(Ge.S+Ge.F,"Object",{assign:$e});var qe,Qe=y.exports.Object.assign;var Ze=((qe=d.exports={default:Qe,__esModule:!0})&&qe.__esModule?qe:{default:qe}).default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);}return e},Je=function(e,t){var n={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},et=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},tt={},nt={exports:{}},ot=se,rt=te,it=H,at={},st=T,ut=E,lt=Re,ct=C?Object.defineProperties:function(e,t){ut(e);for(var n,o=lt(t),r=o.length,i=0;r>i;)st.f(e,n=o[i++],t[n]);return e},pt=m.exports.document,ft=pt&&pt.documentElement,ht=E,dt=ct,mt=De,vt=Me("IE_PROTO"),yt=function(){},gt=function(){var e,t=_("iframe"),n=mt.length;for(t.style.display="none",ft.appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),gt=e.F;n--;)delete gt.prototype[mt[n]];return gt()},bt=Object.create||function(e,t){var n;return null!==e?(yt.prototype=ht(e),n=new yt,yt.prototype=null,n[vt]=e):n=gt(),void 0===t?n:dt(n,t)},wt={exports:{}},Tt=ye.exports("wks"),xt=Ee,Ot=m.exports.Symbol,Et="function"==typeof Ot;(wt.exports=function(e){return Tt[e]||(Tt[e]=Et&&Ot[e]||(Et?Ot:xt)("Symbol."+e))}).store=Tt;var St=T.f,Ct=B,Mt=wt.exports("toStringTag"),Pt=function(e,t,n){e&&!Ct(e=n?e:e.prototype,Mt)&&St(e,Mt,{configurable:!0,value:t});},kt=bt,_t=F,At=Pt,Nt={};H(Nt,wt.exports("iterator"),(function(){return this}));var Dt,jt=B,Lt=We,Rt=Me("IE_PROTO"),Vt=Object.prototype,Ft=Object.getPrototypeOf||function(e){return e=Lt(e),jt(e,Rt)?e[Rt]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?Vt:null},Ut=q,Wt=it,Ht=H,It=at,Bt=function(e,t,n){e.prototype=kt(Nt,{next:_t(1,n)}),At(e,t+" Iterator");},zt=Pt,Kt=Ft,Xt=wt.exports("iterator"),Yt=!([].keys&&"next"in[].keys()),$t=function(){return this},Gt=function(e,t,n,o,r,i,a){Bt(n,t,o);var s,u,l,c=function(e){if(!Yt&&e in d)return d[e];switch(e){case"keys":case"values":return function(){return new n(this,e)}}return function(){return new n(this,e)}},p=t+" Iterator",f="values"==r,h=!1,d=e.prototype,m=d[Xt]||d["@@iterator"]||r&&d[r],v=m||c(r),y=r?f?c("entries"):v:void 0,g="Array"==t&&d.entries||m;if(g&&(l=Kt(g.call(new e)))!==Object.prototype&&l.next&&zt(l,p,!0),f&&m&&"values"!==m.name&&(h=!0,v=function(){return m.call(this)}),a&&(Yt||h||!d[Xt])&&Ht(d,Xt,v),It[t]=v,It[p]=$t,r)if(s={values:f?v:c("values"),keys:i?v:c("keys"),entries:y},a)for(u in s)u in d||Wt(d,u,s[u]);else Ut(Ut.P+Ut.F*(Yt||h),t,s);return s},qt=(Dt=!0,function(e,t){var n,o,r=String(rt(e)),i=ot(t),a=r.length;return i<0||i>=a?Dt?"":void 0:(n=r.charCodeAt(i))<55296||n>56319||i+1===a||(o=r.charCodeAt(i+1))<56320||o>57343?Dt?r.charAt(i):n:Dt?r.slice(i,i+2):o-56320+(n-55296<<10)+65536});Gt(String,"String",(function(e){this._t=String(e),this._i=0;}),(function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=qt(t,n),this._i+=e.length,{value:e,done:!1})}));var Qt=function(e,t){return {value:t,done:!!e}},Zt=at,Jt=re;Gt(Array,"Array",(function(e,t){this._t=Jt(e),this._i=0,this._k=t;}),(function(){var e=this._t,t=this._k,n=this._i++;return !e||n>=e.length?(this._t=void 0,Qt(1)):Qt(0,"keys"==t?n:"values"==t?e[n]:[n,e[n]])}),"values"),Zt.Arguments=Zt.Array;for(var en=m.exports,tn=H,nn=at,on=wt.exports("toStringTag"),rn="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),an=0;an<rn.length;an++){var sn=rn[an],un=en[sn],ln=un&&un.prototype;ln&&!ln[on]&&tn(ln,on,sn),nn[sn]=nn.Array;}var cn={};cn.f=wt.exports;var pn=cn.f("iterator");nt.exports={default:pn,__esModule:!0};var fn={exports:{}},hn={exports:{}},dn=Ee("meta"),mn=x,vn=B,yn=T.f,gn=0,bn=Object.isExtensible||function(){return !0},wn=!S((function(){return bn(Object.preventExtensions({}))})),Tn=function(e){yn(e,dn,{value:{i:"O"+ ++gn,w:{}}});},xn=hn.exports={KEY:dn,NEED:!1,fastKey:function(e,t){if(!mn(e))return "symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!vn(e,dn)){if(!bn(e))return "F";if(!t)return "E";Tn(e);}return e[dn].i},getWeak:function(e,t){if(!vn(e,dn)){if(!bn(e))return !0;if(!t)return !1;Tn(e);}return e[dn].w},onFreeze:function(e){return wn&&xn.NEED&&bn(e)&&!vn(e,dn)&&Tn(e),e}},On=y.exports,En=cn,Sn=T.f,Cn=function(e){var t=On.Symbol||(On.Symbol={});"_"==e.charAt(0)||e in t||Sn(t,e,{value:En.f(e)});},Mn=Re,Pn=Ve,kn=Fe,_n=Z,An=Array.isArray||function(e){return "Array"==_n(e)},Nn={},Dn={},jn=Ne,Ln=De.concat("length","prototype");Dn.f=Object.getOwnPropertyNames||function(e){return jn(e,Ln)};var Rn=re,Vn=Dn.f,Fn={}.toString,Un="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];Nn.f=function(e){return Un&&"[object Window]"==Fn.call(e)?function(e){try{return Vn(e)}catch(e){return Un.slice()}}(e):Vn(Rn(e))};var Wn={},Hn=Fe,In=F,Bn=re,zn=D,Kn=B,Xn=A,Yn=Object.getOwnPropertyDescriptor;Wn.f=C?Yn:function(e,t){if(e=Bn(e),t=zn(t,!0),Xn)try{return Yn(e,t)}catch(e){}if(Kn(e,t))return In(!Hn.f.call(e,t),e[t])};var $n=m.exports,Gn=B,qn=C,Qn=q,Zn=it,Jn=hn.exports.KEY,eo=S,to=ye.exports,no=Pt,oo=Ee,ro=wt.exports,io=cn,ao=Cn,so=function(e){var t=Mn(e),n=Pn.f;if(n)for(var o,r=n(e),i=kn.f,a=0;r.length>a;)i.call(e,o=r[a++])&&t.push(o);return t},uo=An,lo=E,co=x,po=We,fo=re,ho=D,mo=F,vo=bt,yo=Nn,go=Wn,bo=Ve,wo=T,To=Re,xo=go.f,Oo=wo.f,Eo=yo.f,So=$n.Symbol,Co=$n.JSON,Mo=Co&&Co.stringify,Po=ro("_hidden"),ko=ro("toPrimitive"),_o={}.propertyIsEnumerable,Ao=to("symbol-registry"),No=to("symbols"),Do=to("op-symbols"),jo=Object.prototype,Lo="function"==typeof So&&!!bo.f,Ro=$n.QObject,Vo=!Ro||!Ro.prototype||!Ro.prototype.findChild,Fo=qn&&eo((function(){return 7!=vo(Oo({},"a",{get:function(){return Oo(this,"a",{value:7}).a}})).a}))?function(e,t,n){var o=xo(jo,t);o&&delete jo[t],Oo(e,t,n),o&&e!==jo&&Oo(jo,t,o);}:Oo,Uo=function(e){var t=No[e]=vo(So.prototype);return t._k=e,t},Wo=Lo&&"symbol"==typeof So.iterator?function(e){return "symbol"==typeof e}:function(e){return e instanceof So},Ho=function(e,t,n){return e===jo&&Ho(Do,t,n),lo(e),t=ho(t,!0),lo(n),Gn(No,t)?(n.enumerable?(Gn(e,Po)&&e[Po][t]&&(e[Po][t]=!1),n=vo(n,{enumerable:mo(0,!1)})):(Gn(e,Po)||Oo(e,Po,mo(1,{})),e[Po][t]=!0),Fo(e,t,n)):Oo(e,t,n)},Io=function(e,t){lo(e);for(var n,o=so(t=fo(t)),r=0,i=o.length;i>r;)Ho(e,n=o[r++],t[n]);return e},Bo=function(e){var t=_o.call(this,e=ho(e,!0));return !(this===jo&&Gn(No,e)&&!Gn(Do,e))&&(!(t||!Gn(this,e)||!Gn(No,e)||Gn(this,Po)&&this[Po][e])||t)},zo=function(e,t){if(e=fo(e),t=ho(t,!0),e!==jo||!Gn(No,t)||Gn(Do,t)){var n=xo(e,t);return !n||!Gn(No,t)||Gn(e,Po)&&e[Po][t]||(n.enumerable=!0),n}},Ko=function(e){for(var t,n=Eo(fo(e)),o=[],r=0;n.length>r;)Gn(No,t=n[r++])||t==Po||t==Jn||o.push(t);return o},Xo=function(e){for(var t,n=e===jo,o=Eo(n?Do:fo(e)),r=[],i=0;o.length>i;)!Gn(No,t=o[i++])||n&&!Gn(jo,t)||r.push(No[t]);return r};Lo||(Zn((So=function(){if(this instanceof So)throw TypeError("Symbol is not a constructor!");var e=oo(arguments.length>0?arguments[0]:void 0),t=function(n){this===jo&&t.call(Do,n),Gn(this,Po)&&Gn(this[Po],e)&&(this[Po][e]=!1),Fo(this,e,mo(1,n));};return qn&&Vo&&Fo(jo,e,{configurable:!0,set:t}),Uo(e)}).prototype,"toString",(function(){return this._k})),go.f=zo,wo.f=Ho,Dn.f=yo.f=Ko,Fe.f=Bo,bo.f=Xo,io.f=function(e){return Uo(ro(e))}),Qn(Qn.G+Qn.W+Qn.F*!Lo,{Symbol:So});for(var Yo="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),$o=0;Yo.length>$o;)ro(Yo[$o++]);for(var Go=To(ro.store),qo=0;Go.length>qo;)ao(Go[qo++]);Qn(Qn.S+Qn.F*!Lo,"Symbol",{for:function(e){return Gn(Ao,e+="")?Ao[e]:Ao[e]=So(e)},keyFor:function(e){if(!Wo(e))throw TypeError(e+" is not a symbol!");for(var t in Ao)if(Ao[t]===e)return t},useSetter:function(){Vo=!0;},useSimple:function(){Vo=!1;}}),Qn(Qn.S+Qn.F*!Lo,"Object",{create:function(e,t){return void 0===t?vo(e):Io(vo(e),t)},defineProperty:Ho,defineProperties:Io,getOwnPropertyDescriptor:zo,getOwnPropertyNames:Ko,getOwnPropertySymbols:Xo});var Qo=eo((function(){bo.f(1);}));Qn(Qn.S+Qn.F*Qo,"Object",{getOwnPropertySymbols:function(e){return bo.f(po(e))}}),Co&&Qn(Qn.S+Qn.F*(!Lo||eo((function(){var e=So();return "[null]"!=Mo([e])||"{}"!=Mo({a:e})||"{}"!=Mo(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,o=[e],r=1;arguments.length>r;)o.push(arguments[r++]);if(n=t=o[1],(co(t)||void 0!==e)&&!Wo(e))return uo(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Wo(t))return t}),o[1]=t,Mo.apply(Co,o)}}),So.prototype[ko]||H(So.prototype,ko,So.prototype.valueOf),no(So,"Symbol"),no(Math,"Math",!0),no($n.JSON,"JSON",!0),Cn("asyncIterator"),Cn("observable");var Zo=y.exports.Symbol;fn.exports={default:Zo,__esModule:!0},tt.__esModule=!0;var Jo=nr(nt.exports),er=nr(fn.exports),tr="function"==typeof er.default&&"symbol"==typeof Jo.default?function(e){return typeof e}:function(e){return e&&"function"==typeof er.default&&e.constructor===er.default&&e!==er.default.prototype?"symbol":typeof e};function nr(e){return e&&e.__esModule?e:{default:e}}var or=tt.default="function"==typeof er.default&&"symbol"===tr(Jo.default)?function(e){return void 0===e?"undefined":tr(e)}:function(e){return e&&"function"==typeof er.default&&e.constructor===er.default&&e!==er.default.prototype?"symbol":void 0===e?"undefined":tr(e)},rr=function(e){return e&&e.__esModule?e:{default:e}}(tt);var ir=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return !t||"object"!==(void 0===t?"undefined":(0,rr.default)(t))&&"function"!=typeof t?e:t},ar={exports:{}},sr=x,ur=E,lr=function(e,t){if(ur(e),!sr(t)&&null!==t)throw TypeError(t+": can't set as prototype!")},cr={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=w(Function.call,Wn.f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array);}catch(e){t=!0;}return function(e,o){return lr(e,o),t?e.__proto__=o:n(e,o),e}}({},!1):void 0),check:lr};q(q.S,"Object",{setPrototypeOf:cr.set});var pr=y.exports.Object.setPrototypeOf;ar.exports={default:pr,__esModule:!0};var fr={exports:{}};q(q.S,"Object",{create:bt});var hr=y.exports.Object;fr.exports={default:function(e,t){return hr.create(e,t)},__esModule:!0};var dr=yr(ar.exports),mr=yr(fr.exports),vr=yr(tt);function yr(e){return e&&e.__esModule?e:{default:e}}var gr=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,vr.default)(t)));e.prototype=(0,mr.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(dr.default?(0,dr.default)(e,t):e.__proto__=t);},br={exports:{}},wr={},Tr="function"==typeof Symbol&&Symbol.for,xr=Tr?Symbol.for("react.element"):60103,Or=Tr?Symbol.for("react.portal"):60106,Er=Tr?Symbol.for("react.fragment"):60107,Sr=Tr?Symbol.for("react.strict_mode"):60108,Cr=Tr?Symbol.for("react.profiler"):60114,Mr=Tr?Symbol.for("react.provider"):60109,Pr=Tr?Symbol.for("react.context"):60110,kr=Tr?Symbol.for("react.async_mode"):60111,_r=Tr?Symbol.for("react.concurrent_mode"):60111,Ar=Tr?Symbol.for("react.forward_ref"):60112,Nr=Tr?Symbol.for("react.suspense"):60113,Dr=Tr?Symbol.for("react.suspense_list"):60120,jr=Tr?Symbol.for("react.memo"):60115,Lr=Tr?Symbol.for("react.lazy"):60116,Rr=Tr?Symbol.for("react.block"):60121,Vr=Tr?Symbol.for("react.fundamental"):60117,Fr=Tr?Symbol.for("react.responder"):60118,Ur=Tr?Symbol.for("react.scope"):60119;function Wr(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case xr:switch(e=e.type){case kr:case _r:case Er:case Cr:case Sr:case Nr:return e;default:switch(e=e&&e.$$typeof){case Pr:case Ar:case Lr:case jr:case Mr:return e;default:return t}}case Or:return t}}}function Hr(e){return Wr(e)===_r}wr.AsyncMode=kr,wr.ConcurrentMode=_r,wr.ContextConsumer=Pr,wr.ContextProvider=Mr,wr.Element=xr,wr.ForwardRef=Ar,wr.Fragment=Er,wr.Lazy=Lr,wr.Memo=jr,wr.Portal=Or,wr.Profiler=Cr,wr.StrictMode=Sr,wr.Suspense=Nr,wr.isAsyncMode=function(e){return Hr(e)||Wr(e)===kr},wr.isConcurrentMode=Hr,wr.isContextConsumer=function(e){return Wr(e)===Pr},wr.isContextProvider=function(e){return Wr(e)===Mr},wr.isElement=function(e){return "object"==typeof e&&null!==e&&e.$$typeof===xr},wr.isForwardRef=function(e){return Wr(e)===Ar},wr.isFragment=function(e){return Wr(e)===Er},wr.isLazy=function(e){return Wr(e)===Lr},wr.isMemo=function(e){return Wr(e)===jr},wr.isPortal=function(e){return Wr(e)===Or},wr.isProfiler=function(e){return Wr(e)===Cr},wr.isStrictMode=function(e){return Wr(e)===Sr},wr.isSuspense=function(e){return Wr(e)===Nr},wr.isValidElementType=function(e){return "string"==typeof e||"function"==typeof e||e===Er||e===_r||e===Cr||e===Sr||e===Nr||e===Dr||"object"==typeof e&&null!==e&&(e.$$typeof===Lr||e.$$typeof===jr||e.$$typeof===Mr||e.$$typeof===Pr||e.$$typeof===Ar||e.$$typeof===Vr||e.$$typeof===Fr||e.$$typeof===Ur||e.$$typeof===Rr)},wr.typeOf=Wr;
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Ir=Object.getOwnPropertySymbols,Br=Object.prototype.hasOwnProperty,zr=Object.prototype.propertyIsEnumerable;function Kr(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}var Xr=function(){try{if(!Object.assign)return !1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return !1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return !1;var o={};return "abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e;})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return !1}}()?Object.assign:function(e,t){for(var n,o,r=Kr(e),i=1;i<arguments.length;i++){for(var a in n=Object(arguments[i]))Br.call(n,a)&&(r[a]=n[a]);if(Ir){o=Ir(n);for(var s=0;s<o.length;s++)zr.call(n,o[s])&&(r[o[s]]=n[o[s]]);}}return r};function Yr(){}function $r(){}$r.resetWarningCache=Yr;br.exports=function(){function e(e,t,n,o,r,i){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==i){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:$r,resetWarningCache:Yr};return n.PropTypes=n,n}();var Gr=br.exports;function qr(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e);}function Qr(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this));}function Zr(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o);}finally{this.props=n,this.state=o;}}function Jr(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var n=null,o=null,r=null;if("function"==typeof t.componentWillMount?n="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(n="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?o="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(o="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?r="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(r="UNSAFE_componentWillUpdate"),null!==n||null!==o||null!==r){var i=e.displayName||e.name,a="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+i+" uses "+a+" but also contains the following legacy lifecycles:"+(null!==n?"\n  "+n:"")+(null!==o?"\n  "+o:"")+(null!==r?"\n  "+r:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=qr,t.componentWillReceiveProps=Qr),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Zr;var s=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;s.call(this,e,t,o);};}return e}function ei(e,t){for(var n=t;n;){if(n===e)return !0;n=n.parentNode;}return !1}qr.__suppressDeprecationWarning=!0,Qr.__suppressDeprecationWarning=!0,Zr.__suppressDeprecationWarning=!0;var ti={exports:{}},ni={exports:{}},oi={exports:{}};!function(e,t){function n(){return !1}function o(){return !0}function r(){this.timeStamp=Date.now(),this.target=void 0,this.currentTarget=void 0;}Object.defineProperty(t,"__esModule",{value:!0}),r.prototype={isEventObject:1,constructor:r,isDefaultPrevented:n,isPropagationStopped:n,isImmediatePropagationStopped:n,preventDefault:function(){this.isDefaultPrevented=o;},stopPropagation:function(){this.isPropagationStopped=o;},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=o,this.stopPropagation();},halt:function(e){e?this.stopImmediatePropagation():this.stopPropagation(),this.preventDefault();}},t.default=r,e.exports=t.default;}(oi,oi.exports),function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(oi.exports),r=n(Xr),i=!1,a=["altKey","bubbles","cancelable","ctrlKey","currentTarget","eventPhase","metaKey","shiftKey","target","timeStamp","view","type"];function s(e){return null==e}var u=[{reg:/^key/,props:["char","charCode","key","keyCode","which"],fix:function(e,t){s(e.which)&&(e.which=s(t.charCode)?t.keyCode:t.charCode),void 0===e.metaKey&&(e.metaKey=e.ctrlKey);}},{reg:/^touch/,props:["touches","changedTouches","targetTouches"]},{reg:/^hashchange$/,props:["newURL","oldURL"]},{reg:/^gesturechange$/i,props:["rotation","scale"]},{reg:/^(mousewheel|DOMMouseScroll)$/,props:[],fix:function(e,t){var n=void 0,o=void 0,r=void 0,i=t.wheelDelta,a=t.axis,s=t.wheelDeltaY,u=t.wheelDeltaX,l=t.detail;i&&(r=i/120),l&&(r=0-(l%3==0?l/3:l)),void 0!==a&&(a===e.HORIZONTAL_AXIS?(o=0,n=0-r):a===e.VERTICAL_AXIS&&(n=0,o=r)),void 0!==s&&(o=s/120),void 0!==u&&(n=-1*u/120),n||o||(o=r),void 0!==n&&(e.deltaX=n),void 0!==o&&(e.deltaY=o),void 0!==r&&(e.delta=r);}},{reg:/^mouse|contextmenu|click|mspointer|(^DOMMouseScroll$)/i,props:["buttons","clientX","clientY","button","offsetX","relatedTarget","which","fromElement","toElement","offsetY","pageX","pageY","screenX","screenY"],fix:function(e,t){var n=void 0,o=void 0,r=void 0,i=e.target,a=t.button;return i&&s(e.pageX)&&!s(t.clientX)&&(o=(n=i.ownerDocument||document).documentElement,r=n.body,e.pageX=t.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),e.which||void 0===a||(e.which=1&a?1:2&a?3:4&a?2:0),!e.relatedTarget&&e.fromElement&&(e.relatedTarget=e.fromElement===i?e.toElement:e.fromElement),e}}];function l(){return true}function c(){return i}function p(e){var t=e.type,n="function"==typeof e.stopPropagation||"boolean"==typeof e.cancelBubble;o.default.call(this),this.nativeEvent=e;var r=c;"defaultPrevented"in e?r=e.defaultPrevented?l:c:"getPreventDefault"in e?r=e.getPreventDefault()?l:c:"returnValue"in e&&(r=e.returnValue===i?l:c),this.isDefaultPrevented=r;var s=[],p=void 0,f=void 0,h=a.concat();for(u.forEach((function(e){t.match(e.reg)&&(h=h.concat(e.props),e.fix&&s.push(e.fix));})),p=h.length;p;)this[f=h[--p]]=e[f];for(!this.target&&n&&(this.target=e.srcElement||document),this.target&&3===this.target.nodeType&&(this.target=this.target.parentNode),p=s.length;p;)(0,s[--p])(this,e);this.timeStamp=e.timeStamp||Date.now();}var f=o.default.prototype;(0,r.default)(p.prototype,f,{constructor:p,preventDefault:function(){var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=i,f.preventDefault.call(this);},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=true,f.stopPropagation.call(this);}}),t.default=p,e.exports=t.default;}(ni,ni.exports),function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,o,r){function i(t){var r=new n.default(t);o.call(e,r);}if(e.addEventListener){var a=(s=!1,"object"==typeof r?s=r.capture||!1:"boolean"==typeof r&&(s=r),e.addEventListener(t,i,r||!1),{v:{remove:function(){e.removeEventListener(t,i,s);}}});if("object"==typeof a)return a.v}else if(e.attachEvent)return e.attachEvent("on"+t,i),{remove:function(){e.detachEvent("on"+t,i);}};var s;};var n=function(e){return e&&e.__esModule?e:{default:e}}(ni.exports);e.exports=t.default;}(ti,ti.exports);var ri=h(ti.exports);function ii(e,t,n,o){var r=M$1.unstable_batchedUpdates?function(e){M$1.unstable_batchedUpdates(n,e);}:n;return ri(e,t,r,o)}function ai(e){return (ai="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function si(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ui(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}function li(e,t){return (li=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ci(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return !1}}();return function(){var n,o=fi(e);if(t){var r=fi(this).constructor;n=Reflect.construct(o,arguments,r);}else n=o.apply(this,arguments);return pi(this,n)}}function pi(e,t){return !t||"object"!==ai(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function fi(e){return (fi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var hi=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&li(e,t);}(s,i.Component);var n,o,r,i$1=ci(s);function s(){var e;si(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return (e=i$1.call.apply(i$1,[this].concat(n))).removeContainer=function(){e.container&&(M$1.unmountComponentAtNode(e.container),e.container.parentNode.removeChild(e.container),e.container=null);},e.renderComponent=function(t,n){var o=e.props,r=o.visible,i=o.getComponent,s=o.forceRender,u=o.getContainer,l=o.parent;(r||l._component||s)&&(e.container||(e.container=u()),M$1.unstable_renderSubtreeIntoContainer(l,i(t),e.container,(function(){n&&n.call(this);})));},e}return n=s,(o=[{key:"componentDidMount",value:function(){this.props.autoMount&&this.renderComponent();}},{key:"componentDidUpdate",value:function(){this.props.autoMount&&this.renderComponent();}},{key:"componentWillUnmount",value:function(){this.props.autoDestroy&&this.removeContainer();}},{key:"render",value:function(){return this.props.children({renderComponent:this.renderComponent,removeContainer:this.removeContainer})}}])&&ui(n.prototype,o),r&&ui(n,r),s}();function di(e){return (di="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function mi(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vi(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o);}}function yi(e,t){return (yi=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function gi(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return !1}}();return function(){var n,o=wi(e);if(t){var r=wi(this).constructor;n=Reflect.construct(o,arguments,r);}else n=o.apply(this,arguments);return bi(this,n)}}function bi(e,t){return !t||"object"!==di(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function wi(e){return (wi=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}hi.propTypes={autoMount:Gr.bool,autoDestroy:Gr.bool,visible:Gr.bool,forceRender:Gr.bool,parent:Gr.any,getComponent:Gr.func.isRequired,getContainer:Gr.func.isRequired,children:Gr.func.isRequired},hi.defaultProps={autoMount:!0,autoDestroy:!0,forceRender:!1};var Ti=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&yi(e,t);}(s,i.Component);var n,o,r,i$1=gi(s);function s(){return mi(this,s),i$1.apply(this,arguments)}return n=s,(o=[{key:"componentDidMount",value:function(){this.createContainer();}},{key:"componentDidUpdate",value:function(e){var t=this.props.didUpdate;t&&t(e);}},{key:"componentWillUnmount",value:function(){this.removeContainer();}},{key:"createContainer",value:function(){this._container=this.props.getContainer(),this.forceUpdate();}},{key:"removeContainer",value:function(){this._container&&this._container.parentNode.removeChild(this._container);}},{key:"render",value:function(){return this._container?M$1.createPortal(this.props.children,this._container):null}}])&&vi(n.prototype,o),r&&vi(n,r),s}();Ti.propTypes={getContainer:Gr.func.isRequired,children:Gr.node.isRequired,didUpdate:Gr.func};var xi,Oi={exports:{}};
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/xi=Oi,function(){var e={}.hasOwnProperty;function t(){for(var n=[],o=0;o<arguments.length;o++){var r=arguments[o];if(r){var i=typeof r;if("string"===i||"number"===i)n.push(r);else if(Array.isArray(r)){if(r.length){var a=t.apply(null,r);a&&n.push(a);}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)e.call(r,s)&&r[s]&&n.push(s);else n.push(r.toString());}}return n.join(" ")}xi.exports?(t.default=t,xi.exports=t):window.classNames=t;}();var Ei=Oi.exports;function Si(e,t,n){return n?e[0]===t[0]:e[0]===t[0]&&e[1]===t[1]}function Ci(e,t){this[e]=t;}var Mi={exports:{}},Pi=q;Pi(Pi.S+Pi.F*!C,"Object",{defineProperty:T.f});var ki=y.exports.Object,_i=function(e){return e&&e.__esModule?e:{default:e}}(Mi.exports={default:function(e,t,n){return ki.defineProperty(e,t,n)},__esModule:!0});var Ai,Ni=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),(0,_i.default)(e,o.key,o);}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();function Di(e){return (Di="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ji(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o);}return n}var Ri={Webkit:"-webkit-",Moz:"-moz-",ms:"-ms-",O:"-o-"};function Vi(){if(void 0!==Ai)return Ai;Ai="";var e=document.createElement("p").style;for(var t in Ri)t+"Transform"in e&&(Ai=t);return Ai}function Fi(){return Vi()?"".concat(Vi(),"TransitionProperty"):"transitionProperty"}function Ui(){return Vi()?"".concat(Vi(),"Transform"):"transform"}function Wi(e,t){var n=Fi();n&&(e.style[n]=t,"transitionProperty"!==n&&(e.style.transitionProperty=t));}function Hi(e,t){var n=Ui();n&&(e.style[n]=t,"transform"!==n&&(e.style.transform=t));}var Ii,Bi=/matrix\((.*)\)/,zi=/matrix3d\((.*)\)/;function Ki(e){var t=e.style.display;e.style.display="none",e.offsetHeight,e.style.display=t;}function Xi(e,t,n){var o=n;if("object"!==Di(t))return void 0!==o?("number"==typeof o&&(o="".concat(o,"px")),void(e.style[t]=o)):Ii(e,t);for(var r in t)t.hasOwnProperty(r)&&Xi(e,r,t[r]);}function Yi(e,t){var n=e["page".concat(t?"Y":"X","Offset")],o="scroll".concat(t?"Top":"Left");if("number"!=typeof n){var r=e.document;"number"!=typeof(n=r.documentElement[o])&&(n=r.body[o]);}return n}function $i(e){return Yi(e)}function Gi(e){return Yi(e,!0)}function qi(e){var t=function(e){var t,n,o,r=e.ownerDocument,i=r.body,a=r&&r.documentElement;return n=(t=e.getBoundingClientRect()).left,o=t.top,{left:n-=a.clientLeft||i.clientLeft||0,top:o-=a.clientTop||i.clientTop||0}}(e),n=e.ownerDocument,o=n.defaultView||n.parentWindow;return t.left+=$i(o),t.top+=Gi(o),t}function Qi(e){return null!=e&&e==e.window}function Zi(e){return Qi(e)?e.document:9===e.nodeType?e:e.ownerDocument}var Ji=new RegExp("^(".concat(/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,")(?!px)[a-z%]+$"),"i"),ea=/^(top|right|bottom|left)$/;function ta(e,t){return "left"===e?t.useCssRight?"right":e:t.useCssBottom?"bottom":e}function na(e){return "left"===e?"right":"right"===e?"left":"top"===e?"bottom":"bottom"===e?"top":void 0}function oa(e,t,n){"static"===Xi(e,"position")&&(e.style.position="relative");var o=-999,r=-999,i=ta("left",n),a=ta("top",n),s=na(i),u=na(a);"left"!==i&&(o=999),"top"!==a&&(r=999);var l,c="",p=qi(e);("left"in t||"top"in t)&&(c=(l=e).style.transitionProperty||l.style[Fi()]||"",Wi(e,"none")),"left"in t&&(e.style[s]="",e.style[i]="".concat(o,"px")),"top"in t&&(e.style[u]="",e.style[a]="".concat(r,"px")),Ki(e);var f=qi(e),h={};for(var d in t)if(t.hasOwnProperty(d)){var m=ta(d,n),v="left"===d?o:r,y=p[d]-f[d];h[m]=m===d?v+y:v-y;}Xi(e,h),Ki(e),("left"in t||"top"in t)&&Wi(e,c);var g={};for(var b in t)if(t.hasOwnProperty(b)){var w=ta(b,n),T=t[b]-p[b];g[w]=b===w?h[w]+T:h[w]-T;}Xi(e,g);}function ra(e,t){var n=qi(e),o=function(e){var t=window.getComputedStyle(e,null),n=t.getPropertyValue("transform")||t.getPropertyValue(Ui());if(n&&"none"!==n){var o=n.replace(/[^0-9\-.,]/g,"").split(",");return {x:parseFloat(o[12]||o[4],0),y:parseFloat(o[13]||o[5],0)}}return {x:0,y:0}}(e),r={x:o.x,y:o.y};"left"in t&&(r.x=o.x+t.left-n.left),"top"in t&&(r.y=o.y+t.top-n.top),function(e,t){var n=window.getComputedStyle(e,null),o=n.getPropertyValue("transform")||n.getPropertyValue(Ui());if(o&&"none"!==o){var r,i=o.match(Bi);i?((r=(i=i[1]).split(",").map((function(e){return parseFloat(e,10)})))[4]=t.x,r[5]=t.y,Hi(e,"matrix(".concat(r.join(","),")"))):((r=o.match(zi)[1].split(",").map((function(e){return parseFloat(e,10)})))[12]=t.x,r[13]=t.y,Hi(e,"matrix3d(".concat(r.join(","),")")));}else Hi(e,"translateX(".concat(t.x,"px) translateY(").concat(t.y,"px) translateZ(0)"));}(e,r);}function ia(e,t){for(var n=0;n<e.length;n++)t(e[n]);}function aa(e){return "border-box"===Ii(e,"boxSizing")}"undefined"!=typeof window&&(Ii=window.getComputedStyle?function(e,t,n){var o=n,r="",i=Zi(e);return (o=o||i.defaultView.getComputedStyle(e,null))&&(r=o.getPropertyValue(t)||o[t]),r}:function(e,t){var n=e.currentStyle&&e.currentStyle[t];if(Ji.test(n)&&!ea.test(t)){var o=e.style,r=o.left,i=e.runtimeStyle.left;e.runtimeStyle.left=e.currentStyle.left,o.left="fontSize"===t?"1em":n||0,n=o.pixelLeft+"px",o.left=r,e.runtimeStyle.left=i;}return ""===n?"auto":n});var sa=["margin","border","padding"];function ua(e,t,n){var o,r={},i=e.style;for(o in t)t.hasOwnProperty(o)&&(r[o]=i[o],i[o]=t[o]);for(o in n.call(e),t)t.hasOwnProperty(o)&&(i[o]=r[o]);}function la(e,t,n){var o,r,i,a=0;for(r=0;r<t.length;r++)if(o=t[r])for(i=0;i<n.length;i++){var s=void 0;s="border"===o?"".concat(o).concat(n[i],"Width"):o+n[i],a+=parseFloat(Ii(e,s))||0;}return a}var ca={getParent:function(e){var t=e;do{t=11===t.nodeType&&t.host?t.host:t.parentNode;}while(t&&1!==t.nodeType&&9!==t.nodeType);return t}};function pa(e,t,n){var o=n;if(Qi(e))return "width"===t?ca.viewportWidth(e):ca.viewportHeight(e);if(9===e.nodeType)return "width"===t?ca.docWidth(e):ca.docHeight(e);var r="width"===t?["Left","Right"]:["Top","Bottom"],i="width"===t?e.getBoundingClientRect().width:e.getBoundingClientRect().height;Ii(e);var a=aa(e),s=0;(null==i||i<=0)&&(i=void 0,(null==(s=Ii(e,t))||Number(s)<0)&&(s=e.style[t]||0),s=parseFloat(s)||0),void 0===o&&(o=a?1:-1);var u=void 0!==i||a,l=i||s;return -1===o?u?l-la(e,["border","padding"],r):s:u?1===o?l:l+(2===o?-la(e,["border"],r):la(e,["margin"],r)):s+la(e,sa.slice(o),r)}ia(["Width","Height"],(function(e){ca["doc".concat(e)]=function(t){var n=t.document;return Math.max(n.documentElement["scroll".concat(e)],n.body["scroll".concat(e)],ca["viewport".concat(e)](n))},ca["viewport".concat(e)]=function(t){var n="client".concat(e),o=t.document,r=o.body,i=o.documentElement[n];return "CSS1Compat"===o.compatMode&&i||r&&r[n]||i};}));var fa={position:"absolute",visibility:"hidden",display:"block"};function ha(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var o,r=t[0];return 0!==r.offsetWidth?o=pa.apply(void 0,t):ua(r,fa,(function(){o=pa.apply(void 0,t);})),o}function da(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}ia(["width","height"],(function(e){var t=e.charAt(0).toUpperCase()+e.slice(1);ca["outer".concat(t)]=function(t,n){return t&&ha(t,e,n?0:1)};var n="width"===e?["Left","Right"]:["Top","Bottom"];ca[e]=function(t,o){var r=o;return void 0!==r?t?(Ii(t),aa(t)&&(r+=la(t,["padding","border"],n)),Xi(t,e,r)):void 0:t&&ha(t,e,-1)};}));var ma={getWindow:function(e){if(e&&e.document&&e.setTimeout)return e;var t=e.ownerDocument||e;return t.defaultView||t.parentWindow},getDocument:Zi,offset:function(e,t,n){if(void 0===t)return qi(e);!function(e,t,n){if(n.ignoreShake){var o=qi(e),r=o.left.toFixed(0),i=o.top.toFixed(0),a=t.left.toFixed(0),s=t.top.toFixed(0);if(r===a&&i===s)return}n.useCssRight||n.useCssBottom?oa(e,t,n):n.useCssTransform&&Ui()in document.body.style?ra(e,t):oa(e,t,n);}(e,t,n||{});},isWindow:Qi,each:ia,css:Xi,clone:function(e){var t,n={};for(t in e)e.hasOwnProperty(t)&&(n[t]=e[t]);if(e.overflow)for(t in e)e.hasOwnProperty(t)&&(n.overflow[t]=e.overflow[t]);return n},mix:da,getWindowScrollLeft:function(e){return $i(e)},getWindowScrollTop:function(e){return Gi(e)},merge:function(){for(var e={},t=0;t<arguments.length;t++)ma.mix(e,t<0||arguments.length<=t?void 0:arguments[t]);return e},viewportWidth:0,viewportHeight:0};da(ma,ca);var va=ma.getParent;function ya(e){if(ma.isWindow(e)||9===e.nodeType)return null;var t,n=ma.getDocument(e).body,o=ma.css(e,"position");if(!("fixed"===o||"absolute"===o))return "html"===e.nodeName.toLowerCase()?null:va(e);for(t=va(e);t&&t!==n&&9!==t.nodeType;t=va(t))if("static"!==(o=ma.css(t,"position")))return t;return null}var ga=ma.getParent;function ba(e,t){for(var n={left:0,right:1/0,top:0,bottom:1/0},o=ya(e),r=ma.getDocument(e),i=r.defaultView||r.parentWindow,a=r.body,s=r.documentElement;o;){if(-1!==navigator.userAgent.indexOf("MSIE")&&0===o.clientWidth||o===a||o===s||"visible"===ma.css(o,"overflow")){if(o===a||o===s)break}else {var u=ma.offset(o);u.left+=o.clientLeft,u.top+=o.clientTop,n.top=Math.max(n.top,u.top),n.right=Math.min(n.right,u.left+o.clientWidth),n.bottom=Math.min(n.bottom,u.top+o.clientHeight),n.left=Math.max(n.left,u.left);}o=ya(o);}var l=null;ma.isWindow(e)||9===e.nodeType||(l=e.style.position,"absolute"===ma.css(e,"position")&&(e.style.position="fixed"));var c=ma.getWindowScrollLeft(i),p=ma.getWindowScrollTop(i),f=ma.viewportWidth(i),h=ma.viewportHeight(i),d=s.scrollWidth,m=s.scrollHeight,v=window.getComputedStyle(a);if("hidden"===v.overflowX&&(d=i.innerWidth),"hidden"===v.overflowY&&(m=i.innerHeight),e.style&&(e.style.position=l),t||function(e){if(ma.isWindow(e)||9===e.nodeType)return !1;var t=ma.getDocument(e).body,n=null;for(n=ga(e);n&&n!==t;n=ga(n))if("fixed"===ma.css(n,"position"))return !0;return !1}(e))n.left=Math.max(n.left,c),n.top=Math.max(n.top,p),n.right=Math.min(n.right,c+f),n.bottom=Math.min(n.bottom,p+h);else {var y=Math.max(d,c+f);n.right=Math.min(n.right,y);var g=Math.max(m,p+h);n.bottom=Math.min(n.bottom,g);}return n.top>=0&&n.left>=0&&n.bottom>n.top&&n.right>n.left?n:null}function wa(e){var t,n,o;if(ma.isWindow(e)||9===e.nodeType){var r=ma.getWindow(e);t={left:ma.getWindowScrollLeft(r),top:ma.getWindowScrollTop(r)},n=ma.viewportWidth(r),o=ma.viewportHeight(r);}else t=ma.offset(e),n=ma.outerWidth(e),o=ma.outerHeight(e);return t.width=n,t.height=o,t}function Ta(e,t){var n=t.charAt(0),o=t.charAt(1),r=e.width,i=e.height,a=e.left,s=e.top;return "c"===n?s+=i/2:"b"===n&&(s+=i),"c"===o?a+=r/2:"r"===o&&(a+=r),{left:a,top:s}}function xa(e,t,n,o,r){var i=Ta(t,n[1]),a=Ta(e,n[0]),s=[a.left-i.left,a.top-i.top];return {left:Math.round(e.left-s[0]+o[0]-r[0]),top:Math.round(e.top-s[1]+o[1]-r[1])}}function Oa(e,t,n){return e.left<n.left||e.left+t.width>n.right}function Ea(e,t,n){return e.top<n.top||e.top+t.height>n.bottom}function Sa(e,t,n){var o=[];return ma.each(e,(function(e){o.push(e.replace(t,(function(e){return n[e]})));})),o}function Ca(e,t){return e[t]=-e[t],e}function Ma(e,t){return (/%$/.test(e)?parseInt(e.substring(0,e.length-1),10)/100*t:parseInt(e,10))||0}function Pa(e,t){e[0]=Ma(e[0],t.width),e[1]=Ma(e[1],t.height);}function ka(e,t,n,o){var r=n.points,i=n.offset||[0,0],a=n.targetOffset||[0,0],s=n.overflow,u=n.source||e;i=[].concat(i),a=[].concat(a);var l={},c=0,p=ba(u,!(!(s=s||{})||!s.alwaysByViewport)),f=wa(u);Pa(i,f),Pa(a,t);var h=xa(f,t,r,i,a),d=ma.merge(f,h);if(p&&(s.adjustX||s.adjustY)&&o){if(s.adjustX&&Oa(h,f,p)){var m=Sa(r,/[lr]/gi,{l:"r",r:"l"}),v=Ca(i,0),y=Ca(a,0);(function(e,t,n){return e.left>n.right||e.left+t.width<n.left})(xa(f,t,m,v,y),f,p)||(c=1,r=m,i=v,a=y);}if(s.adjustY&&Ea(h,f,p)){var g=Sa(r,/[tb]/gi,{t:"b",b:"t"}),b=Ca(i,1),w=Ca(a,1);(function(e,t,n){return e.top>n.bottom||e.top+t.height<n.top})(xa(f,t,g,b,w),f,p)||(c=1,r=g,i=b,a=w);}c&&(h=xa(f,t,r,i,a),ma.mix(d,h));var T=Oa(h,f,p),x=Ea(h,f,p);if(T||x){var O=r;T&&(O=Sa(r,/[lr]/gi,{l:"r",r:"l"})),x&&(O=Sa(r,/[tb]/gi,{t:"b",b:"t"})),r=O,i=n.offset||[0,0],a=n.targetOffset||[0,0];}l.adjustX=s.adjustX&&T,l.adjustY=s.adjustY&&x,(l.adjustX||l.adjustY)&&(d=function(e,t,n,o){var r=ma.clone(e),i={width:t.width,height:t.height};return o.adjustX&&r.left<n.left&&(r.left=n.left),o.resizeWidth&&r.left>=n.left&&r.left+i.width>n.right&&(i.width-=r.left+i.width-n.right),o.adjustX&&r.left+i.width>n.right&&(r.left=Math.max(n.right-i.width,n.left)),o.adjustY&&r.top<n.top&&(r.top=n.top),o.resizeHeight&&r.top>=n.top&&r.top+i.height>n.bottom&&(i.height-=r.top+i.height-n.bottom),o.adjustY&&r.top+i.height>n.bottom&&(r.top=Math.max(n.bottom-i.height,n.top)),ma.mix(r,i)}(h,f,p,l));}return d.width!==f.width&&ma.css(u,"width",ma.width(u)+d.width-f.width),d.height!==f.height&&ma.css(u,"height",ma.height(u)+d.height-f.height),ma.offset(u,{left:d.left,top:d.top},{useCssRight:n.useCssRight,useCssBottom:n.useCssBottom,useCssTransform:n.useCssTransform,ignoreShake:n.ignoreShake}),{points:r,offset:i,targetOffset:a,overflow:l}}function _a(e,t,n){var o=n.target||t;return ka(e,wa(o),n,!function(e,t){var n=ba(e,t),o=wa(e);return !n||o.left+o.width<=n.left||o.top+o.height<=n.top||o.left>=n.right||o.top>=n.bottom}(o,n.overflow&&n.overflow.alwaysByViewport))}function Aa(e,t,n){var o,r,i=ma.getDocument(e),a=i.defaultView||i.parentWindow,s=ma.getWindowScrollLeft(a),u=ma.getWindowScrollTop(a),l=ma.viewportWidth(a),c=ma.viewportHeight(a);o="pageX"in t?t.pageX:s+t.clientX,r="pageY"in t?t.pageY:u+t.clientY;var p=o>=0&&o<=s+l&&r>=0&&r<=u+c;return ka(e,{left:o,top:r,width:0,height:0},function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Li(n,!0).forEach((function(t){ji(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Li(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}({},n,{points:[n.points[0],"cc"]}),p)}function Na(e){return e&&"object"==typeof e&&e.window===e}function Da(e,t){var n=Math.floor(e),o=Math.floor(t);return Math.abs(n-o)<=1}function ja(e,t){e!==document.activeElement&&ei(t,e)&&e.focus();}function La(e){return "function"==typeof e&&e?e():null}function Ra(e){return "object"==typeof e&&e?e:null}_a.__getOffsetParent=ya,_a.__getVisibleRectForElement=ba;var Va=function(t){function o(){var e,t,n;et(this,o);for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=n=ir(this,(e=o.__proto__||Object.getPrototypeOf(o)).call.apply(e,[this].concat(i))),n.forceAlign=function(){var e=n.props,t=e.disabled,o=e.target,r=e.align,i=e.onAlign;if(!t&&o){var s=M$1.findDOMNode(n),u=void 0,l=La(o),c=Ra(o),p=document.activeElement;l?u=_a(s,l,r):c&&(u=Aa(s,c,r)),ja(p,s),i&&i(s,u);}},ir(n,t)}return gr(o,reactExports.Component),Ni(o,[{key:"componentDidMount",value:function(){var e=this.props;this.forceAlign(),!e.disabled&&e.monitorWindowResize&&this.startMonitorWindowResize();}},{key:"componentDidUpdate",value:function(e){var t,n,o=!1,r=this.props;if(!r.disabled){var i=M$1.findDOMNode(this),s=i?i.getBoundingClientRect():null;if(e.disabled)o=!0;else {var u=La(e.target),l=La(r.target),c=Ra(e.target),p=Ra(r.target);Na(u)&&Na(l)?o=!1:(u!==l||u&&!l&&p||c&&p&&l||p&&!((t=c)===(n=p)||t&&n&&("pageX"in n&&"pageY"in n?t.pageX===n.pageX&&t.pageY===n.pageY:"clientX"in n&&"clientY"in n&&t.clientX===n.clientX&&t.clientY===n.clientY)))&&(o=!0);var f=this.sourceRect||{};o||!i||Da(f.width,s.width)&&Da(f.height,s.height)||(o=!0);}this.sourceRect=s;}o&&this.forceAlign(),r.monitorWindowResize&&!r.disabled?this.startMonitorWindowResize():this.stopMonitorWindowResize();}},{key:"componentWillUnmount",value:function(){this.stopMonitorWindowResize();}},{key:"startMonitorWindowResize",value:function(){this.resizeHandler||(this.bufferMonitor=function(e,t){var n=void 0;function o(){n&&(clearTimeout(n),n=null);}function r(){o(),n=setTimeout(e,t);}return r.clear=o,r}(this.forceAlign,this.props.monitorBufferTime),this.resizeHandler=ii(window,"resize",this.bufferMonitor));}},{key:"stopMonitorWindowResize",value:function(){this.resizeHandler&&(this.bufferMonitor.clear(),this.resizeHandler.remove(),this.resizeHandler=null);}},{key:"render",value:function(){var t=this,n=this.props,o=n.childrenProps,r=n.children,i$1=i.Children.only(r);if(o){var a={};return Object.keys(o).forEach((function(e){a[e]=t.props[o[e]];})),i.cloneElement(i$1,a)}return i$1}}]),o}();Va.propTypes={childrenProps:Gr.object,align:Gr.object.isRequired,target:Gr.oneOfType([Gr.func,Gr.shape({clientX:Gr.number,clientY:Gr.number,pageX:Gr.number,pageY:Gr.number})]),onAlign:Gr.func,monitorBufferTime:Gr.number,monitorWindowResize:Gr.bool,disabled:Gr.bool,children:Gr.any},Va.defaultProps={target:function(){return window},monitorBufferTime:50,monitorWindowResize:!1,disabled:!1};var Fa=function(e){return e&&e.__esModule?e:{default:e}}(Mi.exports);var Ua=function(e,t,n){return t in e?(0,Fa.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e};function Wa(t){var n=[];return i.Children.forEach(t,(function(e){n.push(e);})),n}function Ha(e,t){var n=null;return e&&e.forEach((function(e){n||e&&e.key===t&&(n=e);})),n}function Ia(e,t,n){var o=null;return e&&e.forEach((function(e){if(e&&e.key===t&&e.props[n]){if(o)throw new Error("two child with same key for <rc-animate> children");o=e;}})),o}var Ba={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},za={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},Ka=[],Xa=[];function Ya(e,t,n){e.addEventListener(t,n,!1);}function $a(e,t,n){e.removeEventListener(t,n,!1);}"undefined"!=typeof window&&"undefined"!=typeof document&&function(){var e=document.createElement("div").style;function t(t,n){for(var o in t)if(t.hasOwnProperty(o)){var r=t[o];for(var i in r)if(i in e){n.push(r[i]);break}}}"AnimationEvent"in window||(delete Ba.animationstart.animation,delete za.animationend.animation),"TransitionEvent"in window||(delete Ba.transitionstart.transition,delete za.transitionend.transition),t(Ba,Ka),t(za,Xa);}();var Ga=Xa,qa=function(e,t){0!==Xa.length?Xa.forEach((function(n){Ya(e,n,t);})):window.setTimeout(t,0);},Qa=function(e,t){0!==Xa.length&&Xa.forEach((function(n){$a(e,n,t);}));},Za=function(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0;n<e.length;++n)if(e[n]===t)return n;return -1};try{var Ja=Za;}catch(e){Ja=Za;}var es=/\s+/,ts=Object.prototype.toString;function ns(e){if(!e||!e.nodeType)throw new Error("A DOM element reference is required");this.el=e,this.list=e.classList;}ns.prototype.add=function(e){if(this.list)return this.list.add(e),this;var t=this.array();return ~Ja(t,e)||t.push(e),this.el.className=t.join(" "),this},ns.prototype.remove=function(e){if("[object RegExp]"==ts.call(e))return this.removeMatching(e);if(this.list)return this.list.remove(e),this;var t=this.array(),n=Ja(t,e);return ~n&&t.splice(n,1),this.el.className=t.join(" "),this},ns.prototype.removeMatching=function(e){for(var t=this.array(),n=0;n<t.length;n++)e.test(t[n])&&this.remove(t[n]);return this},ns.prototype.toggle=function(e,t){return this.list?(void 0!==t?t!==this.list.toggle(e,t)&&this.list.toggle(e):this.list.toggle(e),this):(void 0!==t?t?this.add(e):this.remove(e):this.has(e)?this.remove(e):this.add(e),this)},ns.prototype.array=function(){var e=(this.el.getAttribute("class")||"").replace(/^\s+|\s+$/g,"").split(es);return ""===e[0]&&e.shift(),e},ns.prototype.has=ns.prototype.contains=function(e){return this.list?this.list.contains(e):!!~Ja(this.array(),e)};var os=0!==Ga.length,rs=["Webkit","Moz","O","ms"],is=["-webkit-","-moz-","-o-","ms-",""];function as(e,t){for(var n=window.getComputedStyle(e,null),o="",r=0;r<is.length&&!(o=n.getPropertyValue(is[r]+t));r++);return o}function ss(e){if(os){var t=parseFloat(as(e,"transition-delay"))||0,n=parseFloat(as(e,"transition-duration"))||0,o=parseFloat(as(e,"animation-delay"))||0,r=parseFloat(as(e,"animation-duration"))||0,i=Math.max(n+t,r+o);e.rcEndAnimTimeout=setTimeout((function(){e.rcEndAnimTimeout=null,e.rcEndListener&&e.rcEndListener();}),1e3*i+200);}}function us(e){e.rcEndAnimTimeout&&(clearTimeout(e.rcEndAnimTimeout),e.rcEndAnimTimeout=null);}var ls=function(e,t,n){var o="object"===(void 0===t?"undefined":or(t)),r=o?t.name:t,i=o?t.active:t+"-active",a=n,s=void 0,u=void 0,l=new ns(e);return n&&"[object Object]"===Object.prototype.toString.call(n)&&(a=n.end,s=n.start,u=n.active),e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),us(e),l.remove(r),l.remove(i),Qa(e,e.rcEndListener),e.rcEndListener=null,a&&a());},qa(e,e.rcEndListener),s&&s(),l.add(r),e.rcAnimTimeout=setTimeout((function(){e.rcAnimTimeout=null,l.add(i),u&&setTimeout(u,0),ss(e);}),30),{stop:function(){e.rcEndListener&&e.rcEndListener();}}};ls.style=function(e,t,n){e.rcEndListener&&e.rcEndListener(),e.rcEndListener=function(t){t&&t.target!==e||(e.rcAnimTimeout&&(clearTimeout(e.rcAnimTimeout),e.rcAnimTimeout=null),us(e),Qa(e,e.rcEndListener),e.rcEndListener=null,n&&n());},qa(e,e.rcEndListener),e.rcAnimTimeout=setTimeout((function(){for(var n in t)t.hasOwnProperty(n)&&(e.style[n]=t[n]);e.rcAnimTimeout=null,ss(e);}),0);},ls.setTransition=function(e,t,n){var o=t,r=n;void 0===n&&(r=o,o=""),o=o||"",rs.forEach((function(t){e.style[t+"Transition"+o]=r;}));},ls.isCssAnimationSupported=os;var cs=function(e){return e.transitionName&&e.transitionAppear||e.animation.appear},ps=function(e){return e.transitionName&&e.transitionEnter||e.animation.enter},fs=function(e){return e.transitionName&&e.transitionLeave||e.animation.leave},hs=function(e){return e.transitionAppear||e.animation.appear},ds=function(e){return e.transitionEnter||e.animation.enter},ms=function(e){return e.transitionLeave||e.animation.leave},vs={enter:"transitionEnter",appear:"transitionAppear",leave:"transitionLeave"},ys=function(e){function t(){return et(this,t),ir(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return gr(t,e),Ni(t,[{key:"componentWillUnmount",value:function(){this.stop();}},{key:"componentWillEnter",value:function(e){ps(this.props)?this.transition("enter",e):e();}},{key:"componentWillAppear",value:function(e){cs(this.props)?this.transition("appear",e):e();}},{key:"componentWillLeave",value:function(e){fs(this.props)?this.transition("leave",e):e();}},{key:"transition",value:function(e,t){var n=this,o=M$1.findDOMNode(this),r=this.props,i=r.transitionName,s="object"==typeof i;this.stop();var u=function(){n.stopper=null,t();};if((os||!r.animation[e])&&i&&r[vs[e]]){var l=s?i[e]:i+"-"+e,c=l+"-active";s&&i[e+"Active"]&&(c=i[e+"Active"]),this.stopper=ls(o,{name:l,active:c},u);}else this.stopper=r.animation[e](o,u);}},{key:"stop",value:function(){var e=this.stopper;e&&(this.stopper=null,e.stop());}},{key:"render",value:function(){return this.props.children}}]),t}(i.Component);ys.propTypes={children:Gr.any,animation:Gr.any,transitionName:Gr.any};var gs="rc_animate_"+Date.now();function bs(t){var n=t.children;return i.isValidElement(n)&&!n.key?i.cloneElement(n,{key:gs}):n}function ws(){}var Ts=function(t){function n(e){et(this,n);var t=ir(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return xs.call(t),t.currentlyAnimatingKeys={},t.keysToEnter=[],t.keysToLeave=[],t.state={children:Wa(bs(e))},t.childrenRefs={},t}return gr(n,t),Ni(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.showProp,n=this.state.children;t&&(n=n.filter((function(e){return !!e.props[t]}))),n.forEach((function(t){t&&e.performAppear(t.key);}));}},{key:"componentWillReceiveProps",value:function(t){var n=this;this.nextProps=t;var o=Wa(bs(t)),r=this.props;r.exclusive&&Object.keys(this.currentlyAnimatingKeys).forEach((function(e){n.stop(e);}));var i$1,a,s,u,l=r.showProp,c=this.currentlyAnimatingKeys,p=r.exclusive?Wa(bs(r)):this.state.children,f=[];l?(p.forEach((function(t){var n=t&&Ha(o,t.key),r=void 0;(r=n&&n.props[l]||!t.props[l]?n:i.cloneElement(n||t,Ua({},l,!0)))&&f.push(r);})),o.forEach((function(e){e&&Ha(p,e.key)||f.push(e);}))):(i$1=o,a=[],s={},u=[],p.forEach((function(e){e&&Ha(i$1,e.key)?u.length&&(s[e.key]=u,u=[]):u.push(e);})),i$1.forEach((function(e){e&&Object.prototype.hasOwnProperty.call(s,e.key)&&(a=a.concat(s[e.key])),a.push(e);})),f=a=a.concat(u)),this.setState({children:f}),o.forEach((function(e){var t=e&&e.key;if(!e||!c[t]){var o=e&&Ha(p,t);if(l){var r=e.props[l];if(o)!Ia(p,t,l)&&r&&n.keysToEnter.push(t);else r&&n.keysToEnter.push(t);}else o||n.keysToEnter.push(t);}})),p.forEach((function(e){var t=e&&e.key;if(!e||!c[t]){var r=e&&Ha(o,t);if(l){var i=e.props[l];if(r)!Ia(o,t,l)&&i&&n.keysToLeave.push(t);else i&&n.keysToLeave.push(t);}else r||n.keysToLeave.push(t);}}));}},{key:"componentDidUpdate",value:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave);}},{key:"isValidChildByKey",value:function(e,t){var n=this.props.showProp;return n?Ia(e,t,n):Ha(e,t)}},{key:"stop",value:function(e){delete this.currentlyAnimatingKeys[e];var t=this.childrenRefs[e];t&&t.stop();}},{key:"render",value:function(){var t=this,n=this.props;this.nextProps=n;var o=this.state.children,r=null;o&&(r=o.map((function(o){if(null==o)return o;if(!o.key)throw new Error("must set key for <rc-animate> children");return i.createElement(ys,{key:o.key,ref:function(e){t.childrenRefs[o.key]=e;},animation:n.animation,transitionName:n.transitionName,transitionEnter:n.transitionEnter,transitionAppear:n.transitionAppear,transitionLeave:n.transitionLeave},o)})));var i$1=n.component;if(i$1){var a=n;return "string"==typeof i$1&&(a=Ze({className:n.className,style:n.style},n.componentProps)),i.createElement(i$1,a,r)}return r[0]||null}}]),n}(i.Component);Ts.isAnimate=!0,Ts.propTypes={className:Gr.string,style:Gr.object,component:Gr.any,componentProps:Gr.object,animation:Gr.object,transitionName:Gr.oneOfType([Gr.string,Gr.object]),transitionEnter:Gr.bool,transitionAppear:Gr.bool,exclusive:Gr.bool,transitionLeave:Gr.bool,onEnd:Gr.func,onEnter:Gr.func,onLeave:Gr.func,onAppear:Gr.func,showProp:Gr.string,children:Gr.node},Ts.defaultProps={animation:{},component:"span",componentProps:{},transitionEnter:!0,transitionLeave:!0,transitionAppear:!1,onEnd:ws,onEnter:ws,onLeave:ws,onAppear:ws};var xs=function(){var e=this;this.performEnter=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillEnter(e.handleDoneAdding.bind(e,t,"enter")));},this.performAppear=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillAppear(e.handleDoneAdding.bind(e,t,"appear")));},this.handleDoneAdding=function(t,n){var o=e.props;if(delete e.currentlyAnimatingKeys[t],!o.exclusive||o===e.nextProps){var r=Wa(bs(o));e.isValidChildByKey(r,t)?"appear"===n?hs(o)&&(o.onAppear(t),o.onEnd(t,!0)):ds(o)&&(o.onEnter(t),o.onEnd(t,!0)):e.performLeave(t);}},this.performLeave=function(t){e.childrenRefs[t]&&(e.currentlyAnimatingKeys[t]=!0,e.childrenRefs[t].componentWillLeave(e.handleDoneLeaving.bind(e,t)));},this.handleDoneLeaving=function(t){var n=e.props;if(delete e.currentlyAnimatingKeys[t],!n.exclusive||n===e.nextProps){var o,r,i,a,s=Wa(bs(n));if(e.isValidChildByKey(s,t))e.performEnter(t);else {var u=function(){ms(n)&&(n.onLeave(t),n.onEnd(t,!1));};o=e.state.children,r=s,i=n.showProp,(a=o.length===r.length)&&o.forEach((function(e,t){var n=r[t];e&&n&&(e&&!n||!e&&n||e.key!==n.key||i&&e.props[i]!==n.props[i])&&(a=!1);})),a?u():e.setState({children:s},u);}}};},Os=function(t){var n=t.prototype;if(!n||!n.isReactComponent)throw new Error("Can only polyfill class components");return "function"!=typeof n.componentWillReceiveProps?t:i.Profiler?(n.UNSAFE_componentWillReceiveProps=n.componentWillReceiveProps,delete n.componentWillReceiveProps,t):t}(Ts),Es=function(t){function n(){return et(this,n),ir(this,t.apply(this,arguments))}return gr(n,t),n.prototype.shouldComponentUpdate=function(e){return e.hiddenClassName||e.visible},n.prototype.render=function(){var t=this.props,n=t.hiddenClassName,o=t.visible,r=Je(t,["hiddenClassName","visible"]);return n||i.Children.count(r.children)>1?(!o&&n&&(r.className+=" "+n),i.createElement("div",r)):i.Children.only(r.children)},n}(reactExports.Component);Es.propTypes={children:Gr.any,className:Gr.string,visible:Gr.bool,hiddenClassName:Gr.string};var Ss=function(t){function n(){return et(this,n),ir(this,t.apply(this,arguments))}return gr(n,t),n.prototype.render=function(){var t=this.props,n=t.className;return t.visible||(n+=" "+t.hiddenClassName),i.createElement("div",{className:n,onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,onMouseDown:t.onMouseDown,onTouchStart:t.onTouchStart,style:t.style},i.createElement(Es,{className:t.prefixCls+"-content",visible:t.visible},t.children))},n}(reactExports.Component);Ss.propTypes={hiddenClassName:Gr.string,className:Gr.string,prefixCls:Gr.string,onMouseEnter:Gr.func,onMouseLeave:Gr.func,onMouseDown:Gr.func,onTouchStart:Gr.func,children:Gr.any};var Cs=function(t){function n(e){et(this,n);var o=ir(this,t.call(this,e));return Ms.call(o),o.state={stretchChecked:!1,targetWidth:void 0,targetHeight:void 0},o.savePopupRef=Ci.bind(o,"popupInstance"),o.saveAlignRef=Ci.bind(o,"alignInstance"),o}return gr(n,t),n.prototype.componentDidMount=function(){this.rootNode=this.getPopupDomNode(),this.setStretchSize();},n.prototype.componentDidUpdate=function(){this.setStretchSize();},n.prototype.getPopupDomNode=function(){return M$1.findDOMNode(this.popupInstance)},n.prototype.getMaskTransitionName=function(){var e=this.props,t=e.maskTransitionName,n=e.maskAnimation;return !t&&n&&(t=e.prefixCls+"-"+n),t},n.prototype.getTransitionName=function(){var e=this.props,t=e.transitionName;return !t&&e.animation&&(t=e.prefixCls+"-"+e.animation),t},n.prototype.getClassName=function(e){return this.props.prefixCls+" "+this.props.className+" "+e},n.prototype.getPopupElement=function(){var t=this,n=this.savePopupRef,o=this.state,r=o.stretchChecked,i$1=o.targetHeight,a=o.targetWidth,s=this.props,u=s.align,l=s.visible,c=s.prefixCls,p=s.style,f=s.getClassNameFromAlign,h=s.destroyPopupOnHide,d=s.stretch,m=s.children,v=s.onMouseEnter,y=s.onMouseLeave,g=s.onMouseDown,b=s.onTouchStart,w=this.getClassName(this.currentAlignClassName||f(u)),T=c+"-hidden";l||(this.currentAlignClassName=null);var x={};d&&(-1!==d.indexOf("height")?x.height=i$1:-1!==d.indexOf("minHeight")&&(x.minHeight=i$1),-1!==d.indexOf("width")?x.width=a:-1!==d.indexOf("minWidth")&&(x.minWidth=a),r||(x.visibility="hidden",setTimeout((function(){t.alignInstance&&t.alignInstance.forceAlign();}),0)));var O={className:w,prefixCls:c,ref:n,onMouseEnter:v,onMouseLeave:y,onMouseDown:g,onTouchStart:b,style:Ze({},x,p,this.getZIndexStyle())};return h?i.createElement(Os,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName()},l?i.createElement(Va,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,align:u,onAlign:this.onAlign},i.createElement(Ss,Ze({visible:!0},O),m)):null):i.createElement(Os,{component:"",exclusive:!0,transitionAppear:!0,transitionName:this.getTransitionName(),showProp:"xVisible"},i.createElement(Va,{target:this.getAlignTarget(),key:"popup",ref:this.saveAlignRef,monitorWindowResize:!0,xVisible:l,childrenProps:{visible:"xVisible"},disabled:!l,align:u,onAlign:this.onAlign},i.createElement(Ss,Ze({hiddenClassName:T},O),m)))},n.prototype.getZIndexStyle=function(){var e={},t=this.props;return void 0!==t.zIndex&&(e.zIndex=t.zIndex),e},n.prototype.getMaskElement=function(){var t=this.props,n=void 0;if(t.mask){var o=this.getMaskTransitionName();n=i.createElement(Es,{style:this.getZIndexStyle(),key:"mask",className:t.prefixCls+"-mask",hiddenClassName:t.prefixCls+"-mask-hidden",visible:t.visible}),o&&(n=i.createElement(Os,{key:"mask",showProp:"visible",transitionAppear:!0,component:"",transitionName:o},n));}return n},n.prototype.render=function(){return i.createElement("div",null,this.getMaskElement(),this.getPopupElement())},n}(reactExports.Component);Cs.propTypes={visible:Gr.bool,style:Gr.object,getClassNameFromAlign:Gr.func,onAlign:Gr.func,getRootDomNode:Gr.func,align:Gr.any,destroyPopupOnHide:Gr.bool,className:Gr.string,prefixCls:Gr.string,onMouseEnter:Gr.func,onMouseLeave:Gr.func,onMouseDown:Gr.func,onTouchStart:Gr.func,stretch:Gr.string,children:Gr.node,point:Gr.shape({pageX:Gr.number,pageY:Gr.number})};var Ms=function(){var e=this;this.onAlign=function(t,n){var o=e.props,r=o.getClassNameFromAlign(n);e.currentAlignClassName!==r&&(e.currentAlignClassName=r,t.className=e.getClassName(r)),o.onAlign(t,n);},this.setStretchSize=function(){var t=e.props,n=t.stretch,o=t.getRootDomNode,r=t.visible,i=e.state,a=i.stretchChecked,s=i.targetHeight,u=i.targetWidth;if(n&&r){var l=o();if(l){var c=l.offsetHeight,p=l.offsetWidth;s===c&&u===p&&a||e.setState({stretchChecked:!0,targetHeight:c,targetWidth:p});}}else a&&e.setState({stretchChecked:!1});},this.getTargetElement=function(){return e.props.getRootDomNode()},this.getAlignTarget=function(){var t=e.props.point;return t||e.getTargetElement};};function Ps(){}var ks=["onClick","onMouseDown","onTouchStart","onMouseEnter","onMouseLeave","onFocus","onBlur","onContextMenu"],_s=!!reactDomExports.createPortal,As={rcTrigger:Gr.shape({onPopupMouseDown:Gr.func})},Ns=function(t){function n(e){et(this,n);var o=ir(this,t.call(this,e));Ds.call(o);var r=void 0;return r="popupVisible"in e?!!e.popupVisible:!!e.defaultPopupVisible,o.state={prevPopupVisible:r,popupVisible:r},ks.forEach((function(e){o["fire"+e]=function(t){o.fireEvents(e,t);};})),o}return gr(n,t),n.prototype.getChildContext=function(){return {rcTrigger:{onPopupMouseDown:this.onPopupMouseDown}}},n.prototype.componentDidMount=function(){this.componentDidUpdate({},{popupVisible:this.state.popupVisible});},n.prototype.componentDidUpdate=function(e,t){var n=this.props,o=this.state;if(_s||this.renderComponent(null,(function(){t.popupVisible!==o.popupVisible&&n.afterPopupVisibleChange(o.popupVisible);})),o.popupVisible){var r=void 0;return this.clickOutsideHandler||!this.isClickToHide()&&!this.isContextMenuToShow()||(r=n.getDocument(),this.clickOutsideHandler=ii(r,"mousedown",this.onDocumentClick)),this.touchOutsideHandler||(r=r||n.getDocument(),this.touchOutsideHandler=ii(r,"touchstart",this.onDocumentClick)),!this.contextMenuOutsideHandler1&&this.isContextMenuToShow()&&(r=r||n.getDocument(),this.contextMenuOutsideHandler1=ii(r,"scroll",this.onContextMenuClose)),void(!this.contextMenuOutsideHandler2&&this.isContextMenuToShow()&&(this.contextMenuOutsideHandler2=ii(window,"blur",this.onContextMenuClose)))}this.clearOutsideHandler();},n.prototype.componentWillUnmount=function(){this.clearDelayTimer(),this.clearOutsideHandler(),clearTimeout(this.mouseDownTimeout);},n.getDerivedStateFromProps=function(e,t){var n=e.popupVisible,o={};return void 0!==n&&t.popupVisible!==n&&(o.popupVisible=n,o.prevPopupVisible=t.popupVisible),o},n.prototype.getPopupDomNode=function(){return this._component&&this._component.getPopupDomNode?this._component.getPopupDomNode():null},n.prototype.getPopupAlign=function(){var e=this.props,t=e.popupPlacement,n=e.popupAlign,o=e.builtinPlacements;return t&&o?function(e,t,n){var o=e[t]||{};return Ze({},o,n)}(o,t,n):n},n.prototype.setPopupVisible=function(e,t){var n=this.props.alignPoint,o=this.state.popupVisible;this.clearDelayTimer(),o!==e&&("popupVisible"in this.props||this.setState({popupVisible:e,prevPopupVisible:o}),this.props.onPopupVisibleChange(e)),n&&t&&this.setPoint(t);},n.prototype.delaySetPopupVisible=function(e,t,n){var o=this,r=1e3*t;if(this.clearDelayTimer(),r){var i=n?{pageX:n.pageX,pageY:n.pageY}:null;this.delayTimer=setTimeout((function(){o.setPopupVisible(e,i),o.clearDelayTimer();}),r);}else this.setPopupVisible(e,n);},n.prototype.clearDelayTimer=function(){this.delayTimer&&(clearTimeout(this.delayTimer),this.delayTimer=null);},n.prototype.clearOutsideHandler=function(){this.clickOutsideHandler&&(this.clickOutsideHandler.remove(),this.clickOutsideHandler=null),this.contextMenuOutsideHandler1&&(this.contextMenuOutsideHandler1.remove(),this.contextMenuOutsideHandler1=null),this.contextMenuOutsideHandler2&&(this.contextMenuOutsideHandler2.remove(),this.contextMenuOutsideHandler2=null),this.touchOutsideHandler&&(this.touchOutsideHandler.remove(),this.touchOutsideHandler=null);},n.prototype.createTwoChains=function(e){var t=this.props.children.props,n=this.props;return t[e]&&n[e]?this["fire"+e]:t[e]||n[e]},n.prototype.isClickToShow=function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("click")||-1!==n.indexOf("click")},n.prototype.isContextMenuToShow=function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("contextMenu")||-1!==n.indexOf("contextMenu")},n.prototype.isClickToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return -1!==t.indexOf("click")||-1!==n.indexOf("click")},n.prototype.isMouseEnterToShow=function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("hover")||-1!==n.indexOf("mouseEnter")},n.prototype.isMouseLeaveToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return -1!==t.indexOf("hover")||-1!==n.indexOf("mouseLeave")},n.prototype.isFocusToShow=function(){var e=this.props,t=e.action,n=e.showAction;return -1!==t.indexOf("focus")||-1!==n.indexOf("focus")},n.prototype.isBlurToHide=function(){var e=this.props,t=e.action,n=e.hideAction;return -1!==t.indexOf("focus")||-1!==n.indexOf("blur")},n.prototype.forcePopupAlign=function(){this.state.popupVisible&&this._component&&this._component.alignInstance&&this._component.alignInstance.forceAlign();},n.prototype.fireEvents=function(e,t){var n=this.props.children.props[e];n&&n(t);var o=this.props[e];o&&o(t);},n.prototype.close=function(){this.setPopupVisible(!1);},n.prototype.render=function(){var t=this,n=this.state.popupVisible,o=this.props,r=o.children,i$1=o.forceRender,a=o.alignPoint,s=o.className,u=i.Children.only(r),l={key:"trigger"};this.isContextMenuToShow()?l.onContextMenu=this.onContextMenu:l.onContextMenu=this.createTwoChains("onContextMenu"),this.isClickToHide()||this.isClickToShow()?(l.onClick=this.onClick,l.onMouseDown=this.onMouseDown,l.onTouchStart=this.onTouchStart):(l.onClick=this.createTwoChains("onClick"),l.onMouseDown=this.createTwoChains("onMouseDown"),l.onTouchStart=this.createTwoChains("onTouchStart")),this.isMouseEnterToShow()?(l.onMouseEnter=this.onMouseEnter,a&&(l.onMouseMove=this.onMouseMove)):l.onMouseEnter=this.createTwoChains("onMouseEnter"),this.isMouseLeaveToHide()?l.onMouseLeave=this.onMouseLeave:l.onMouseLeave=this.createTwoChains("onMouseLeave"),this.isFocusToShow()||this.isBlurToHide()?(l.onFocus=this.onFocus,l.onBlur=this.onBlur):(l.onFocus=this.createTwoChains("onFocus"),l.onBlur=this.createTwoChains("onBlur"));var c=Ei(u&&u.props&&u.props.className,s);c&&(l.className=c);var p=i.cloneElement(u,l);if(!_s)return i.createElement(hi,{parent:this,visible:n,autoMount:!1,forceRender:i$1,getComponent:this.getComponent,getContainer:this.getContainer},(function(e){var n=e.renderComponent;return t.renderComponent=n,p}));var f=void 0;return (n||this._component||i$1)&&(f=i.createElement(Ti,{key:"portal",getContainer:this.getContainer,didUpdate:this.handlePortalUpdate},this.getComponent())),[p,f]},n}(i.Component);Ns.propTypes={children:Gr.any,action:Gr.oneOfType([Gr.string,Gr.arrayOf(Gr.string)]),showAction:Gr.any,hideAction:Gr.any,getPopupClassNameFromAlign:Gr.any,onPopupVisibleChange:Gr.func,afterPopupVisibleChange:Gr.func,popup:Gr.oneOfType([Gr.node,Gr.func]).isRequired,popupStyle:Gr.object,prefixCls:Gr.string,popupClassName:Gr.string,className:Gr.string,popupPlacement:Gr.string,builtinPlacements:Gr.object,popupTransitionName:Gr.oneOfType([Gr.string,Gr.object]),popupAnimation:Gr.any,mouseEnterDelay:Gr.number,mouseLeaveDelay:Gr.number,zIndex:Gr.number,focusDelay:Gr.number,blurDelay:Gr.number,getPopupContainer:Gr.func,getDocument:Gr.func,forceRender:Gr.bool,destroyPopupOnHide:Gr.bool,mask:Gr.bool,maskClosable:Gr.bool,onPopupAlign:Gr.func,popupAlign:Gr.object,popupVisible:Gr.bool,defaultPopupVisible:Gr.bool,maskTransitionName:Gr.oneOfType([Gr.string,Gr.object]),maskAnimation:Gr.string,stretch:Gr.string,alignPoint:Gr.bool},Ns.contextTypes=As,Ns.childContextTypes=As,Ns.defaultProps={prefixCls:"rc-trigger-popup",getPopupClassNameFromAlign:function(){return ""},getDocument:function(){return window.document},onPopupVisibleChange:Ps,afterPopupVisibleChange:Ps,onPopupAlign:Ps,popupClassName:"",mouseEnterDelay:0,mouseLeaveDelay:.1,focusDelay:0,blurDelay:.15,popupStyle:{},destroyPopupOnHide:!1,popupAlign:{},defaultPopupVisible:!1,mask:!1,maskClosable:!0,action:[],showAction:[],hideAction:[]};var Ds=function(){var t=this;this.onMouseEnter=function(e){var n=t.props.mouseEnterDelay;t.fireEvents("onMouseEnter",e),t.delaySetPopupVisible(!0,n,n?null:e);},this.onMouseMove=function(e){t.fireEvents("onMouseMove",e),t.setPoint(e);},this.onMouseLeave=function(e){t.fireEvents("onMouseLeave",e),t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay);},this.onPopupMouseEnter=function(){t.clearDelayTimer();},this.onPopupMouseLeave=function(e){e.relatedTarget&&!e.relatedTarget.setTimeout&&t._component&&t._component.getPopupDomNode&&ei(t._component.getPopupDomNode(),e.relatedTarget)||t.delaySetPopupVisible(!1,t.props.mouseLeaveDelay);},this.onFocus=function(e){t.fireEvents("onFocus",e),t.clearDelayTimer(),t.isFocusToShow()&&(t.focusTime=Date.now(),t.delaySetPopupVisible(!0,t.props.focusDelay));},this.onMouseDown=function(e){t.fireEvents("onMouseDown",e),t.preClickTime=Date.now();},this.onTouchStart=function(e){t.fireEvents("onTouchStart",e),t.preTouchTime=Date.now();},this.onBlur=function(e){t.fireEvents("onBlur",e),t.clearDelayTimer(),t.isBlurToHide()&&t.delaySetPopupVisible(!1,t.props.blurDelay);},this.onContextMenu=function(e){e.preventDefault(),t.fireEvents("onContextMenu",e),t.setPopupVisible(!0,e);},this.onContextMenuClose=function(){t.isContextMenuToShow()&&t.close();},this.onClick=function(e){if(t.fireEvents("onClick",e),t.focusTime){var n=void 0;if(t.preClickTime&&t.preTouchTime?n=Math.min(t.preClickTime,t.preTouchTime):t.preClickTime?n=t.preClickTime:t.preTouchTime&&(n=t.preTouchTime),Math.abs(n-t.focusTime)<20)return;t.focusTime=0;}t.preClickTime=0,t.preTouchTime=0,t.isClickToShow()&&(t.isClickToHide()||t.isBlurToHide())&&e&&e.preventDefault&&e.preventDefault();var o=!t.state.popupVisible;(t.isClickToHide()&&!o||o&&t.isClickToShow())&&t.setPopupVisible(!t.state.popupVisible,e);},this.onPopupMouseDown=function(){var e=t.context.rcTrigger,n=void 0===e?{}:e;t.hasPopupMouseDown=!0,clearTimeout(t.mouseDownTimeout),t.mouseDownTimeout=setTimeout((function(){t.hasPopupMouseDown=!1;}),0),n.onPopupMouseDown&&n.onPopupMouseDown.apply(n,arguments);},this.onDocumentClick=function(e){if(!t.props.mask||t.props.maskClosable){var n=e.target;ei(reactDomExports.findDOMNode(t),n)||t.hasPopupMouseDown||t.close();}},this.getRootDomNode=function(){return reactDomExports.findDOMNode(t)},this.getPopupClassNameFromAlign=function(e){var n=[],o=t.props,r=o.popupPlacement,i=o.builtinPlacements,a=o.prefixCls,s=o.alignPoint,u=o.getPopupClassNameFromAlign;return r&&i&&n.push(function(e,t,n,o){var r=n.points;for(var i in e)if(e.hasOwnProperty(i)&&Si(e[i].points,r,o))return t+"-placement-"+i;return ""}(i,a,e,s)),u&&n.push(u(e)),n.join(" ")},this.getComponent=function(){var n=t.props,o=n.prefixCls,r=n.destroyPopupOnHide,i$1=n.popupClassName,a=n.action,s=n.onPopupAlign,u=n.popupAnimation,l=n.popupTransitionName,c=n.popupStyle,p=n.mask,f=n.maskAnimation,h=n.maskTransitionName,d=n.zIndex,m=n.popup,v=n.stretch,y=n.alignPoint,g=t.state,b=g.popupVisible,w=g.point,T=t.getPopupAlign(),x={};return t.isMouseEnterToShow()&&(x.onMouseEnter=t.onPopupMouseEnter),t.isMouseLeaveToHide()&&(x.onMouseLeave=t.onPopupMouseLeave),x.onMouseDown=t.onPopupMouseDown,x.onTouchStart=t.onPopupMouseDown,i.createElement(Cs,Ze({prefixCls:o,destroyPopupOnHide:r,visible:b,point:y&&w,className:i$1,action:a,align:T,onAlign:s,animation:u,getClassNameFromAlign:t.getPopupClassNameFromAlign},x,{stretch:v,getRootDomNode:t.getRootDomNode,style:c,mask:p,zIndex:d,transitionName:l,maskAnimation:f,maskTransitionName:h,ref:t.savePopup}),"function"==typeof m?m():m)},this.getContainer=function(){var e=t.props,n=document.createElement("div");return n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.width="100%",(e.getPopupContainer?e.getPopupContainer(reactDomExports.findDOMNode(t)):e.getDocument().body).appendChild(n),n},this.setPoint=function(e){t.props.alignPoint&&e&&t.setState({point:{pageX:e.pageX,pageY:e.pageY}});},this.handlePortalUpdate=function(){t.state.prevPopupVisible!==t.state.popupVisible&&t.props.afterPopupVisibleChange(t.state.popupVisible);},this.savePopup=function(e){t._component=e;};};Jr(Ns);var js={adjustX:1,adjustY:1},Ls=[0,0],Rs={left:{points:["cr","cl"],overflow:js,offset:[-4,0],targetOffset:Ls},right:{points:["cl","cr"],overflow:js,offset:[4,0],targetOffset:Ls},top:{points:["bc","tc"],overflow:js,offset:[0,-4],targetOffset:Ls},bottom:{points:["tc","bc"],overflow:js,offset:[0,4],targetOffset:Ls},topLeft:{points:["bl","tl"],overflow:js,offset:[0,-4],targetOffset:Ls},leftTop:{points:["tr","tl"],overflow:js,offset:[-4,0],targetOffset:Ls},topRight:{points:["br","tr"],overflow:js,offset:[0,-4],targetOffset:Ls},rightTop:{points:["tl","tr"],overflow:js,offset:[4,0],targetOffset:Ls},bottomRight:{points:["tr","br"],overflow:js,offset:[0,4],targetOffset:Ls},rightBottom:{points:["bl","br"],overflow:js,offset:[4,0],targetOffset:Ls},bottomLeft:{points:["tl","bl"],overflow:js,offset:[0,4],targetOffset:Ls},leftBottom:{points:["br","bl"],overflow:js,offset:[-4,0],targetOffset:Ls}},Vs=function(t){function n(){return et(this,n),ir(this,t.apply(this,arguments))}return gr(n,t),n.prototype.componentDidUpdate=function(){var e=this.props.trigger;e&&e.forcePopupAlign();},n.prototype.render=function(){var t=this.props,n=t.overlay,o=t.prefixCls,r=t.id;return i.createElement("div",{className:o+"-inner",id:r,role:"tooltip"},"function"==typeof n?n():n)},n}(i.Component);Vs.propTypes={prefixCls:Gr.string,overlay:Gr.oneOfType([Gr.node,Gr.func]).isRequired,id:Gr.string,trigger:Gr.any};var Fs=function(t){function n(){var o,r;et(this,n);for(var i$1=arguments.length,a=Array(i$1),s=0;s<i$1;s++)a[s]=arguments[s];return o=r=ir(this,t.call.apply(t,[this].concat(a))),r.getPopupElement=function(){var t=r.props,n=t.arrowContent,o=t.overlay,i$1=t.prefixCls,a=t.id;return [i.createElement("div",{className:i$1+"-arrow",key:"arrow"},n),i.createElement(Vs,{key:"content",trigger:r.trigger,prefixCls:i$1,id:a,overlay:o})]},r.saveTrigger=function(e){r.trigger=e;},ir(r,o)}return gr(n,t),n.prototype.getPopupDomNode=function(){return this.trigger.getPopupDomNode()},n.prototype.render=function(){var t=this.props,n=t.overlayClassName,o=t.trigger,r=t.mouseEnterDelay,i$1=t.mouseLeaveDelay,a=t.overlayStyle,s=t.prefixCls,u=t.children,l=t.onVisibleChange,c=t.afterVisibleChange,p=t.transitionName,f=t.animation,h=t.placement,d=t.align,m=t.destroyTooltipOnHide,v=t.defaultVisible,y=t.getTooltipContainer,g=Je(t,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer"]),b=Ze({},g);return "visible"in this.props&&(b.popupVisible=this.props.visible),i.createElement(Ns,Ze({popupClassName:n,ref:this.saveTrigger,prefixCls:s,popup:this.getPopupElement,action:o,builtinPlacements:Rs,popupPlacement:h,popupAlign:d,getPopupContainer:y,onPopupVisibleChange:l,afterPopupVisibleChange:c,popupTransitionName:p,popupAnimation:f,defaultPopupVisible:v,destroyPopupOnHide:m,mouseLeaveDelay:i$1,popupStyle:a,mouseEnterDelay:r},b),u)},n}(reactExports.Component);Fs.propTypes={trigger:Gr.any,children:Gr.any,defaultVisible:Gr.bool,visible:Gr.bool,placement:Gr.string,transitionName:Gr.oneOfType([Gr.string,Gr.object]),animation:Gr.any,onVisibleChange:Gr.func,afterVisibleChange:Gr.func,overlay:Gr.oneOfType([Gr.node,Gr.func]).isRequired,overlayStyle:Gr.object,overlayClassName:Gr.string,prefixCls:Gr.string,mouseEnterDelay:Gr.number,mouseLeaveDelay:Gr.number,getTooltipContainer:Gr.func,destroyTooltipOnHide:Gr.bool,align:Gr.object,arrowContent:Gr.any,id:Gr.string},Fs.defaultProps={prefixCls:"rc-tooltip",mouseEnterDelay:0,destroyTooltipOnHide:!1,mouseLeaveDelay:.1,align:{},placement:"right",trigger:["hover"],arrowContent:null};var Us=function(t){var n,o,r=t.className,i$1=t.included,a=t.vertical,s=t.offset,u=t.length,l=t.style,c=t.reverse,p=a?(Ua(n={},c?"top":"bottom",s+"%"),Ua(n,c?"bottom":"top","auto"),Ua(n,"height",u+"%"),n):(Ua(o={},c?"right":"left",s+"%"),Ua(o,c?"left":"right","auto"),Ua(o,"width",u+"%"),o),f=Ze({},l,p);return i$1?i.createElement("div",{className:r,style:f}):null},Ws={exports:{}},Hs=q,Is=y.exports,Bs=S,zs=function(e,t){var n=(Is.Object||{})[e]||Object[e],o={};o[e]=t(n),Hs(Hs.S+Hs.F*Bs((function(){n(1);})),"Object",o);},Ks=We,Xs=Ft;zs("getPrototypeOf",(function(){return function(e){return Xs(Ks(e))}}));var Ys=y.exports.Object.getPrototypeOf;Ws.exports={default:Ys,__esModule:!0};var $s={exports:{}},Gs=re,qs=Wn.f;zs("getOwnPropertyDescriptor",(function(){return function(e,t){return qs(Gs(e),t)}}));var Qs=y.exports.Object;$s.exports={default:function(e,t){return Qs.getOwnPropertyDescriptor(e,t)},__esModule:!0};var Zs=eu(Ws.exports),Js=eu($s.exports);function eu(e){return e&&e.__esModule?e:{default:e}}var tu=function e(t,n,o){null===t&&(t=Function.prototype);var r=(0,Js.default)(t,n);if(void 0===r){var i=(0,Zs.default)(t);return null===i?void 0:e(i,n,o)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(o):void 0},nu=function(t){var n=t.prefixCls,o=t.vertical,r=t.reverse,i$1=t.marks,a=t.dots,s=t.step,u=t.included,l=t.lowerBound,c=t.upperBound,p=t.max,f=t.min,h=t.dotStyle,d=t.activeDotStyle,m=p-f,v=function(e,t,n,o,r,i){var a=Object.keys(t).map(parseFloat).sort((function(e,t){return e-t}));if(n&&o)for(var s=r;s<=i;s+=o)-1===a.indexOf(s)&&a.push(s);return a}(0,i$1,a,s,f,p).map((function(t){var i$1,a=Math.abs(t-f)/m*100+"%",s=!u&&t===c||u&&t<=c&&t>=l,p=Ze({},h,Ua({},o?r?"top":"bottom":r?"right":"left",a));s&&(p=Ze({},p,d));var v=Ei((Ua(i$1={},n+"-dot",!0),Ua(i$1,n+"-dot-active",s),Ua(i$1,n+"-dot-reverse",r),i$1));return i.createElement("span",{className:v,style:p,key:t})}));return i.createElement("div",{className:n+"-step"},v)};nu.propTypes={prefixCls:Gr.string,activeDotStyle:Gr.object,dotStyle:Gr.object,min:Gr.number,max:Gr.number,upperBound:Gr.number,lowerBound:Gr.number,included:Gr.bool,dots:Gr.bool,step:Gr.number,marks:Gr.object,vertical:Gr.bool,reverse:Gr.bool};var ou=function(t){var n=t.className,o=t.vertical,r=t.reverse,i$1=t.marks,a=t.included,s=t.upperBound,u=t.lowerBound,l=t.max,c=t.min,p=t.onClickLabel,f=Object.keys(i$1),h=l-c,d=f.map(parseFloat).sort((function(e,t){return e-t})).map((function(t){var l,f=i$1[t],d="object"==typeof f&&!i.isValidElement(f),m=d?f.label:f;if(!m&&0!==m)return null;var v=!a&&t===s||a&&t<=s&&t>=u,y=Ei((Ua(l={},n+"-text",!0),Ua(l,n+"-text-active",v),l)),g=Ua({marginBottom:"-50%"},r?"top":"bottom",(t-c)/h*100+"%"),b=Ua({transform:"translateX(-50%)",msTransform:"translateX(-50%)"},r?"right":"left",r?(t-c/4)/h*100+"%":(t-c)/h*100+"%"),w=o?g:b,T=d?Ze({},w,f.style):w;return i.createElement("span",{className:y,style:T,key:t,onMouseDown:function(e){return p(e,t)},onTouchStart:function(e){return p(e,t)}},m)}));return i.createElement("div",{className:n},d)};ou.propTypes={className:Gr.string,vertical:Gr.bool,reverse:Gr.bool,marks:Gr.object,included:Gr.bool,upperBound:Gr.number,lowerBound:Gr.number,max:Gr.number,min:Gr.number,onClickLabel:Gr.func};var ru=function(t){function n(){var e,t,o;et(this,n);for(var r=arguments.length,i=Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=o=ir(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(i))),o.state={clickFocused:!1},o.setHandleRef=function(e){o.handle=e;},o.handleMouseUp=function(){document.activeElement===o.handle&&o.setClickFocus(!0);},o.handleMouseDown=function(){o.focus();},o.handleBlur=function(){o.setClickFocus(!1);},o.handleKeyDown=function(){o.setClickFocus(!1);},ir(o,t)}return gr(n,t),Ni(n,[{key:"componentDidMount",value:function(){this.onMouseUpListener=ii(document,"mouseup",this.handleMouseUp);}},{key:"componentWillUnmount",value:function(){this.onMouseUpListener&&this.onMouseUpListener.remove();}},{key:"setClickFocus",value:function(e){this.setState({clickFocused:e});}},{key:"clickFocus",value:function(){this.setClickFocus(!0),this.focus();}},{key:"focus",value:function(){this.handle.focus();}},{key:"blur",value:function(){this.handle.blur();}},{key:"render",value:function(){var t,n,o=this.props,r=o.prefixCls,i$1=o.vertical,a=o.reverse,s=o.offset,u=o.style,l=o.disabled,c=o.min,p=o.max,f=o.value,h=o.tabIndex,d=Je(o,["prefixCls","vertical","reverse","offset","style","disabled","min","max","value","tabIndex"]),m=Ei(this.props.className,Ua({},r+"-handle-click-focused",this.state.clickFocused)),v=i$1?(Ua(t={},a?"top":"bottom",s+"%"),Ua(t,a?"bottom":"top","auto"),Ua(t,"transform","translateY(+50%)"),t):(Ua(n={},a?"right":"left",s+"%"),Ua(n,a?"left":"right","auto"),Ua(n,"transform","translateX("+(a?"+":"-")+"50%)"),n),y=Ze({},u,v),g=h||0;return (l||null===h)&&(g=null),i.createElement("div",Ze({ref:this.setHandleRef,tabIndex:g},d,{className:m,style:y,onBlur:this.handleBlur,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,role:"slider","aria-valuemin":c,"aria-valuemax":p,"aria-valuenow":f,"aria-disabled":!!l}))}}]),n}(i.Component);ru.propTypes={prefixCls:Gr.string,className:Gr.string,vertical:Gr.bool,offset:Gr.number,style:Gr.object,disabled:Gr.bool,min:Gr.number,max:Gr.number,value:Gr.number,tabIndex:Gr.number,reverse:Gr.bool};var iu={exports:{}},au=E,su=at,uu=wt.exports("iterator"),lu=Array.prototype,cu=T,pu=F,fu=Z,hu=wt.exports("toStringTag"),du="Arguments"==fu(function(){return arguments}()),mu=function(e){var t,n,o;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),hu))?n:du?fu(t):"Object"==(o=fu(t))&&"function"==typeof t.callee?"Arguments":o},vu=wt.exports("iterator"),yu=at,gu=y.exports.getIteratorMethod=function(e){if(null!=e)return e[vu]||e["@@iterator"]||yu[mu(e)]},bu=wt.exports("iterator"),wu=!1;try{var Tu=[7][bu]();Tu.return=function(){wu=!0;},Array.from(Tu,(function(){throw 2}));}catch(Er){}var xu=w,Ou=q,Eu=We,Su=function(e,t,n,o){try{return o?t(au(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&au(r.call(e)),t}},Cu=function(e){return void 0!==e&&(su.Array===e||lu[uu]===e)},Mu=ce,Pu=function(e,t,n){t in e?cu.f(e,t,pu(0,n)):e[t]=n;},ku=gu;Ou(Ou.S+Ou.F*!function(e,t){if(!t&&!wu)return !1;var n=!1;try{var o=[7],r=o[bu]();r.next=function(){return {done:n=!0}},o[bu]=function(){return r},e(o);}catch(e){}return n}((function(e){Array.from(e);})),"Array",{from:function(e){var t,n,o,r,i=Eu(e),a="function"==typeof this?this:Array,s=arguments.length,u=s>1?arguments[1]:void 0,l=void 0!==u,c=0,p=ku(i);if(l&&(u=xu(u,s>2?arguments[2]:void 0,2)),null==p||a==Array&&Cu(p))for(n=new a(t=Mu(i.length));t>c;c++)Pu(n,c,l?u(i[c],c):i[c]);else for(r=p.call(i),n=new a;!(o=r.next()).done;c++)Pu(n,c,l?Su(r,u,[o.value,c],!0):o.value);return n.length=c,n}});var _u=y.exports.Array.from,Au=function(e){return e&&e.__esModule?e:{default:e}}(iu.exports={default:_u,__esModule:!0});var Nu=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return (0,Au.default)(e)},Du={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var t=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||t>=Du.F1&&t<=Du.F12)return !1;switch(t){case Du.ALT:case Du.CAPS_LOCK:case Du.CONTEXT_MENU:case Du.CTRL:case Du.DOWN:case Du.END:case Du.ESC:case Du.HOME:case Du.INSERT:case Du.LEFT:case Du.MAC_FF_META:case Du.META:case Du.NUMLOCK:case Du.NUM_CENTER:case Du.PAGE_DOWN:case Du.PAGE_UP:case Du.PAUSE:case Du.PRINT_SCREEN:case Du.RIGHT:case Du.SHIFT:case Du.UP:case Du.WIN_KEY:case Du.WIN_KEY_RIGHT:return !1;default:return !0}},isCharacterKey:function(e){if(e>=Du.ZERO&&e<=Du.NINE)return !0;if(e>=Du.NUM_ZERO&&e<=Du.NUM_MULTIPLY)return !0;if(e>=Du.A&&e<=Du.Z)return !0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return !0;switch(e){case Du.SPACE:case Du.QUESTION_MARK:case Du.NUM_PLUS:case Du.NUM_MINUS:case Du.NUM_PERIOD:case Du.NUM_DIVISION:case Du.SEMICOLON:case Du.DASH:case Du.EQUALS:case Du.COMMA:case Du.PERIOD:case Du.SLASH:case Du.APOSTROPHE:case Du.SINGLE_QUOTE:case Du.OPEN_SQUARE_BRACKET:case Du.BACKSLASH:case Du.CLOSE_SQUARE_BRACKET:return !0;default:return !1}}};function ju(e,t){try{return Object.keys(t).some((function(n){return e.target===reactDomExports.findDOMNode(t[n])}))}catch(e){return !1}}function Lu(e,t){var n=t.min,o=t.max;return e<n||e>o}function Ru(e){return e.touches.length>1||"touchend"===e.type.toLowerCase()&&e.touches.length>0}function Vu(e,t){var n=t.marks,o=t.step,r=t.min,i=t.max,a=Object.keys(n).map(parseFloat);if(null!==o){var s=Math.floor((i-r)/o),u=Math.min((e-r)/o,s),l=Math.round(u)*o+r;a.push(l);}var c=a.map((function(t){return Math.abs(e-t)}));return a[c.indexOf(Math.min.apply(Math,Nu(c)))]}function Fu(e,t){return e?t.clientY:t.pageX}function Uu(e,t){return e?t.touches[0].clientY:t.touches[0].pageX}function Wu(e,t){var n=t.getBoundingClientRect();return e?n.top+.5*n.height:window.pageXOffset+n.left+.5*n.width}function Hu(e,t){var n=t.max,o=t.min;return e<=o?o:e>=n?n:e}function Iu(e,t){var n=t.step,o=isFinite(Vu(e,t))?Vu(e,t):0;return null===n?o:parseFloat(o.toFixed(function(e){var t=e.toString(),n=0;return t.indexOf(".")>=0&&(n=t.length-t.indexOf(".")-1),n}(n)))}function Bu(e){e.stopPropagation(),e.preventDefault();}function zu(e,t,n){var o="increase",r="decrease",i=o;switch(e.keyCode){case Du.UP:i=t&&n?r:o;break;case Du.RIGHT:i=!t&&n?r:o;break;case Du.DOWN:i=t&&n?o:r;break;case Du.LEFT:i=!t&&n?o:r;break;case Du.END:return function(e,t){return t.max};case Du.HOME:return function(e,t){return t.min};case Du.PAGE_UP:return function(e,t){return e+2*t.step};case Du.PAGE_DOWN:return function(e,t){return e-2*t.step};default:return}return function(e,t){return function(e,t,n){var o={increase:function(e,t){return e+t},decrease:function(e,t){return e-t}},r=o[e](Object.keys(n.marks).indexOf(JSON.stringify(t)),1),i=Object.keys(n.marks)[r];return n.step?o[e](t,n.step):Object.keys(n.marks).length&&n.marks[i]?n.marks[i]:t}(i,e,t)}}function Ku(){}function Xu(t){var n,o;return o=n=function(t){function n(e){et(this,n);var t=ir(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.onMouseDown=function(e){if(0===e.button){var n=t.props.vertical,o=Fu(n,e);if(ju(e,t.handlesRefs)){var r=Wu(n,e.target);t.dragOffset=o-r,o=r;}else t.dragOffset=0;t.removeDocumentEvents(),t.onStart(o),t.addDocumentMouseEvents();}},t.onTouchStart=function(e){if(!Ru(e)){var n=t.props.vertical,o=Uu(n,e);if(ju(e,t.handlesRefs)){var r=Wu(n,e.target);t.dragOffset=o-r,o=r;}else t.dragOffset=0;t.onStart(o),t.addDocumentTouchEvents(),Bu(e);}},t.onFocus=function(e){var n=t.props,o=n.onFocus,r=n.vertical;if(ju(e,t.handlesRefs)){var i=Wu(r,e.target);t.dragOffset=0,t.onStart(i),Bu(e),o&&o(e);}},t.onBlur=function(e){var n=t.props.onBlur;t.onEnd(),n&&n(e);},t.onMouseUp=function(){t.handlesRefs[t.prevMovedHandleIndex]&&t.handlesRefs[t.prevMovedHandleIndex].clickFocus();},t.onMouseMove=function(e){if(t.sliderRef){var n=Fu(t.props.vertical,e);t.onMove(e,n-t.dragOffset);}else t.onEnd();},t.onTouchMove=function(e){if(!Ru(e)&&t.sliderRef){var n=Uu(t.props.vertical,e);t.onMove(e,n-t.dragOffset);}else t.onEnd();},t.onKeyDown=function(e){t.sliderRef&&ju(e,t.handlesRefs)&&t.onKeyboard(e);},t.onClickMarkLabel=function(e,n){e.stopPropagation(),t.onChange({value:n}),t.setState({value:n},(function(){return t.onEnd(!0)}));},t.saveSlider=function(e){t.sliderRef=e;},e.step,e.max,e.min,t.handlesRefs={},t}return gr(n,t),Ni(n,[{key:"componentDidMount",value:function(){this.document=this.sliderRef&&this.sliderRef.ownerDocument;var e=this.props,t=e.autoFocus,n=e.disabled;t&&!n&&this.focus();}},{key:"componentWillUnmount",value:function(){tu(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"componentWillUnmount",this)&&tu(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"componentWillUnmount",this).call(this),this.removeDocumentEvents();}},{key:"getSliderStart",value:function(){var e=this.sliderRef,t=this.props,n=t.vertical,o=t.reverse,r=e.getBoundingClientRect();return n?o?r.bottom:r.top:window.pageXOffset+(o?r.right:r.left)}},{key:"getSliderLength",value:function(){var e=this.sliderRef;if(!e)return 0;var t=e.getBoundingClientRect();return this.props.vertical?t.height:t.width}},{key:"addDocumentTouchEvents",value:function(){this.onTouchMoveListener=ii(this.document,"touchmove",this.onTouchMove),this.onTouchUpListener=ii(this.document,"touchend",this.onEnd);}},{key:"addDocumentMouseEvents",value:function(){this.onMouseMoveListener=ii(this.document,"mousemove",this.onMouseMove),this.onMouseUpListener=ii(this.document,"mouseup",this.onEnd);}},{key:"removeDocumentEvents",value:function(){this.onTouchMoveListener&&this.onTouchMoveListener.remove(),this.onTouchUpListener&&this.onTouchUpListener.remove(),this.onMouseMoveListener&&this.onMouseMoveListener.remove(),this.onMouseUpListener&&this.onMouseUpListener.remove();}},{key:"focus",value:function(){this.props.disabled||this.handlesRefs[0].focus();}},{key:"blur",value:function(){var e=this;this.props.disabled||Object.keys(this.handlesRefs).forEach((function(t){e.handlesRefs[t]&&e.handlesRefs[t].blur&&e.handlesRefs[t].blur();}));}},{key:"calcValue",value:function(e){var t=this.props,n=t.vertical,o=t.min,r=t.max,i=Math.abs(Math.max(e,0)/this.getSliderLength());return n?(1-i)*(r-o)+o:i*(r-o)+o}},{key:"calcValueByPos",value:function(e){var t=(this.props.reverse?-1:1)*(e-this.getSliderStart());return this.trimAlignValue(this.calcValue(t))}},{key:"calcOffset",value:function(e){var t=this.props,n=t.min;return 100*((e-n)/(t.max-n))}},{key:"saveHandle",value:function(e,t){this.handlesRefs[e]=t;}},{key:"render",value:function(){var t,o=this.props,r=o.prefixCls,i$1=o.className,a=o.marks,s=o.dots,u=o.step,l=o.included,c=o.disabled,p=o.vertical,f=o.reverse,h=o.min,d=o.max,m=o.children,v=o.maximumTrackStyle,y=o.style,g=o.railStyle,b=o.dotStyle,w=o.activeDotStyle,T=tu(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"render",this).call(this),x=T.tracks,O=T.handles,E=Ei(r,(Ua(t={},r+"-with-marks",Object.keys(a).length),Ua(t,r+"-disabled",c),Ua(t,r+"-vertical",p),Ua(t,i$1,i$1),t));return i.createElement("div",{ref:this.saveSlider,className:E,onTouchStart:c?Ku:this.onTouchStart,onMouseDown:c?Ku:this.onMouseDown,onMouseUp:c?Ku:this.onMouseUp,onKeyDown:c?Ku:this.onKeyDown,onFocus:c?Ku:this.onFocus,onBlur:c?Ku:this.onBlur,style:y},i.createElement("div",{className:r+"-rail",style:Ze({},v,g)}),x,i.createElement(nu,{prefixCls:r,vertical:p,reverse:f,marks:a,dots:s,step:u,included:l,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:h,dotStyle:b,activeDotStyle:w}),O,i.createElement(ou,{className:r+"-mark",onClickLabel:c?Ku:this.onClickMarkLabel,vertical:p,marks:a,included:l,lowerBound:this.getLowerBound(),upperBound:this.getUpperBound(),max:d,min:h,reverse:f}),m)}}]),n}(t),n.displayName="ComponentEnhancer("+t.displayName+")",n.propTypes=Ze({},t.propTypes,{min:Gr.number,max:Gr.number,step:Gr.number,marks:Gr.object,included:Gr.bool,className:Gr.string,prefixCls:Gr.string,disabled:Gr.bool,children:Gr.any,onBeforeChange:Gr.func,onChange:Gr.func,onAfterChange:Gr.func,handle:Gr.func,dots:Gr.bool,vertical:Gr.bool,style:Gr.object,reverse:Gr.bool,minimumTrackStyle:Gr.object,maximumTrackStyle:Gr.object,handleStyle:Gr.oneOfType([Gr.object,Gr.arrayOf(Gr.object)]),trackStyle:Gr.oneOfType([Gr.object,Gr.arrayOf(Gr.object)]),railStyle:Gr.object,dotStyle:Gr.object,activeDotStyle:Gr.object,autoFocus:Gr.bool,onFocus:Gr.func,onBlur:Gr.func}),n.defaultProps=Ze({},t.defaultProps,{prefixCls:"rc-slider",className:"",min:0,max:100,step:1,marks:{},handle:function(t){var n=t.index,o=Je(t,["index"]);return delete o.dragging,null===o.value?null:i.createElement(ru,Ze({},o,{key:n}))},onBeforeChange:Ku,onChange:Ku,onAfterChange:Ku,included:!0,disabled:!1,dots:!1,vertical:!1,reverse:!1,trackStyle:[{}],handleStyle:[{}],railStyle:{},dotStyle:{},activeDotStyle:{}}),o}var Yu=function(t){function n(e){et(this,n);var t=ir(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.onEnd=function(e){var n=t.state.dragging;t.removeDocumentEvents(),(n||e)&&t.props.onAfterChange(t.getValue()),t.setState({dragging:!1});};var o=void 0!==e.defaultValue?e.defaultValue:e.min,r=void 0!==e.value?e.value:o;return t.state={value:t.trimAlignValue(r),dragging:!1},t}return gr(n,t),Ni(n,[{key:"componentDidUpdate",value:function(e,t){if("value"in this.props||"min"in this.props||"max"in this.props){var n=this.props,o=n.value,r=n.onChange,i=void 0!==o?o:t.value,a=this.trimAlignValue(i,this.props);a!==t.value&&(this.setState({value:a}),Lu(i,this.props)&&r(a));}}},{key:"onChange",value:function(e){var t=this.props,n=!("value"in t),o=e.value>this.props.max?Ze({},e,{value:this.props.max}):e;n&&this.setState(o);var r=o.value;t.onChange(r);}},{key:"onStart",value:function(e){this.setState({dragging:!0});var t=this.props,n=this.getValue();t.onBeforeChange(n);var o=this.calcValueByPos(e);this.startValue=o,this.startPosition=e,o!==n&&(this.prevMovedHandleIndex=0,this.onChange({value:o}));}},{key:"onMove",value:function(e,t){Bu(e);var n=this.state.value,o=this.calcValueByPos(t);o!==n&&this.onChange({value:o});}},{key:"onKeyboard",value:function(e){var t=this.props,n=t.reverse,o=zu(e,t.vertical,n);if(o){Bu(e);var r=this.state.value,i=o(r,this.props),a=this.trimAlignValue(i);if(a===r)return;this.onChange({value:a}),this.props.onAfterChange(a),this.onEnd();}}},{key:"getValue",value:function(){return this.state.value}},{key:"getLowerBound",value:function(){return this.props.min}},{key:"getUpperBound",value:function(){return this.state.value}},{key:"trimAlignValue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(null===e)return null;var n=Ze({},this.props,t),o=Hu(e,n);return Iu(o,n)}},{key:"render",value:function(){var t=this,n=this.props,o=n.prefixCls,r=n.vertical,i$1=n.included,a=n.disabled,s=n.minimumTrackStyle,u=n.trackStyle,l=n.handleStyle,c=n.tabIndex,p=n.min,f=n.max,h=n.reverse,d=n.handle,m=this.state,v=m.value,y=m.dragging,g=this.calcOffset(v),b=d({className:o+"-handle",prefixCls:o,vertical:r,offset:g,value:v,dragging:y,disabled:a,min:p,max:f,reverse:h,index:0,tabIndex:c,style:l[0]||l,ref:function(e){return t.saveHandle(0,e)}}),w=u[0]||u;return {tracks:i.createElement(Us,{className:o+"-track",vertical:r,included:i$1,offset:0,reverse:h,length:g,style:Ze({},s,w)}),handles:b}}}]),n}(i.Component);Yu.propTypes={defaultValue:Gr.number,value:Gr.number,disabled:Gr.bool,autoFocus:Gr.bool,tabIndex:Gr.number,reverse:Gr.bool,min:Gr.number,max:Gr.number};var $u=Xu(Yu),Gu=function(e){var t=e.value,n=e.handle,o=e.bounds,r=e.props,i=r.allowCross,a=r.pushable,s=Number(a),u=Hu(t,r),l=u;return i||null==n||void 0===o||(n>0&&u<=o[n-1]+s&&(l=o[n-1]+s),n<o.length-1&&u>=o[n+1]-s&&(l=o[n+1]-s)),Iu(l,r)},qu=function(t){function n(e){et(this,n);var t=ir(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.onEnd=function(e){var n=t.state.handle;t.removeDocumentEvents(),(null!==n||e)&&t.props.onAfterChange(t.getValue()),t.setState({handle:null});};var o=e.count,r=e.min,i=e.max,a=Array.apply(void 0,Nu(Array(o+1))).map((function(){return r})),s="defaultValue"in e?e.defaultValue:a,u=(void 0!==e.value?e.value:s).map((function(t,n){return Gu({value:t,handle:n,props:e})})),l=u[0]===i?0:u.length-1;return t.state={handle:null,recent:l,bounds:u},t}return gr(n,t),Ni(n,[{key:"componentDidUpdate",value:function(e,t){var n=this;if(("value"in this.props||"min"in this.props||"max"in this.props)&&(this.props.min!==e.min||this.props.max!==e.max||!function(e,t,n,o){var r=n?n.call(o,e,t):void 0;if(void 0!==r)return !!r;if(e===t)return !0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return !1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return !1;for(var s=Object.prototype.hasOwnProperty.bind(t),u=0;u<i.length;u++){var l=i[u];if(!s(l))return !1;var c=e[l],p=t[l];if(!1===(r=n?n.call(o,c,p,l):void 0)||void 0===r&&c!==p)return !1}return !0}(this.props.value,e.value))){var o=this.props,r=o.onChange,i=o.value||t.bounds;if(i.some((function(e){return Lu(e,n.props)})))r(i.map((function(e){return Hu(e,n.props)})));}}},{key:"onChange",value:function(e){var t=this.props;if(!("value"in t))this.setState(e);else {var n={};["handle","recent"].forEach((function(t){void 0!==e[t]&&(n[t]=e[t]);})),Object.keys(n).length&&this.setState(n);}var o=Ze({},this.state,e).bounds;t.onChange(o);}},{key:"onStart",value:function(e){var t=this.props,n=this.state,o=this.getValue();t.onBeforeChange(o);var r=this.calcValueByPos(e);this.startValue=r,this.startPosition=e;var i=this.getClosestBound(r);if(this.prevMovedHandleIndex=this.getBoundNeedMoving(r,i),this.setState({handle:this.prevMovedHandleIndex,recent:this.prevMovedHandleIndex}),r!==o[this.prevMovedHandleIndex]){var a=[].concat(Nu(n.bounds));a[this.prevMovedHandleIndex]=r,this.onChange({bounds:a});}}},{key:"onMove",value:function(e,t){Bu(e);var n=this.state,o=this.calcValueByPos(t);o!==n.bounds[n.handle]&&this.moveTo(o);}},{key:"onKeyboard",value:function(e){var t=this.props,n=t.reverse,o=zu(e,t.vertical,n);if(o){Bu(e);var r=this.state,i=this.props,a=r.bounds,s=r.handle,u=a[null===s?r.recent:s],l=o(u,i),c=Gu({value:l,handle:s,bounds:r.bounds,props:i});if(c===u)return;this.moveTo(c,!0);}}},{key:"getValue",value:function(){return this.state.bounds}},{key:"getClosestBound",value:function(e){for(var t=this.state.bounds,n=0,o=1;o<t.length-1;++o)e>=t[o]&&(n=o);return Math.abs(t[n+1]-e)<Math.abs(t[n]-e)&&(n+=1),n}},{key:"getBoundNeedMoving",value:function(e,t){var n=this.state,o=n.bounds,r=n.recent,i=t,a=o[t+1]===o[t];return a&&o[r]===o[t]&&(i=r),a&&e!==o[t+1]&&(i=e<o[t+1]?t:t+1),i}},{key:"getLowerBound",value:function(){return this.state.bounds[0]}},{key:"getUpperBound",value:function(){var e=this.state.bounds;return e[e.length-1]}},{key:"getPoints",value:function(){var e=this.props,t=e.marks,n=e.step,o=e.min,r=e.max,i=this._getPointsCache;if(!i||i.marks!==t||i.step!==n){var a=Ze({},t);if(null!==n)for(var s=o;s<=r;s+=n)a[s]=s;var u=Object.keys(a).map(parseFloat);u.sort((function(e,t){return e-t})),this._getPointsCache={marks:t,step:n,points:u};}return this._getPointsCache.points}},{key:"moveTo",value:function(e,t){var n=this,o=this.state,r=this.props,i=[].concat(Nu(o.bounds)),a=null===o.handle?o.recent:o.handle;i[a]=e;var s=a;!1!==r.pushable?this.pushSurroundingHandles(i,s):r.allowCross&&(i.sort((function(e,t){return e-t})),s=i.indexOf(e)),this.onChange({recent:s,handle:s,bounds:i}),t&&(this.props.onAfterChange(i),this.setState({},(function(){n.handlesRefs[s].focus();})),this.onEnd());}},{key:"pushSurroundingHandles",value:function(e,t){var n=e[t],o=this.props.pushable;o=Number(o);var r=0;if(e[t+1]-n<o&&(r=1),n-e[t-1]<o&&(r=-1),0!==r){var i=t+r,a=r*(e[i]-n);this.pushHandle(e,i,r,o-a)||(e[t]=e[i]-r*o);}}},{key:"pushHandle",value:function(e,t,n,o){for(var r=e[t],i=e[t];n*(i-r)<o;){if(!this.pushHandleOnePoint(e,t,n))return e[t]=r,!1;i=e[t];}return !0}},{key:"pushHandleOnePoint",value:function(e,t,n){var o=this.getPoints(),r=o.indexOf(e[t])+n;if(r>=o.length||r<0)return !1;var i=t+n,a=o[r],s=this.props.pushable,u=n*(e[i]-a);return !!this.pushHandle(e,i,n,s-u)&&(e[t]=a,!0)}},{key:"trimAlignValue",value:function(e){var t=this.state,n=t.handle,o=t.bounds;return Gu({value:e,handle:n,bounds:o,props:this.props})}},{key:"render",value:function(){var t=this,n=this.state,o=n.handle,r=n.bounds,i$1=this.props,a=i$1.prefixCls,s=i$1.vertical,u=i$1.included,l=i$1.disabled,c=i$1.min,p=i$1.max,f=i$1.reverse,h=i$1.handle,d=i$1.trackStyle,m=i$1.handleStyle,v=i$1.tabIndex,y=r.map((function(e){return t.calcOffset(e)})),g=a+"-handle",b=r.map((function(e,n){var r,i=v[n]||0;return (l||null===v[n])&&(i=null),h({className:Ei((r={},Ua(r,g,!0),Ua(r,g+"-"+(n+1),!0),r)),prefixCls:a,vertical:s,offset:y[n],value:e,dragging:o===n,index:n,tabIndex:i,min:c,max:p,reverse:f,disabled:l,style:m[n],ref:function(e){return t.saveHandle(n,e)}})}));return {tracks:r.slice(0,-1).map((function(t,n){var o,r=n+1,i$1=Ei((Ua(o={},a+"-track",!0),Ua(o,a+"-track-"+r,!0),o));return i.createElement(Us,{className:i$1,vertical:s,reverse:f,included:u,offset:y[r-1],length:y[r]-y[r-1],style:d[n],key:r})})),handles:b}}}],[{key:"getDerivedStateFromProps",value:function(e,t){if("value"in e||"min"in e||"max"in e){var n=(e.value||t.bounds).map((function(n,o){return Gu({value:n,handle:o,bounds:t.bounds,props:e})}));return n.length===t.bounds.length&&n.every((function(e,n){return e===t.bounds[n]}))?null:Ze({},t,{bounds:n})}return null}}]),n}(i.Component);qu.displayName="Range",qu.propTypes={autoFocus:Gr.bool,defaultValue:Gr.arrayOf(Gr.number),value:Gr.arrayOf(Gr.number),count:Gr.number,pushable:Gr.oneOfType([Gr.bool,Gr.number]),allowCross:Gr.bool,disabled:Gr.bool,reverse:Gr.bool,tabIndex:Gr.arrayOf(Gr.number),min:Gr.number,max:Gr.number},qu.defaultProps={count:1,allowCross:!0,pushable:!1,tabIndex:[]},Jr(qu);var Qu=Xu(qu);$u.Range=Qu,$u.Handle=ru,$u.createSliderWithTooltip=function(t){var n,o;return o=n=function(n){function o(){var t,n,r;et(this,o);for(var i$1=arguments.length,a=Array(i$1),s=0;s<i$1;s++)a[s]=arguments[s];return n=r=ir(this,(t=o.__proto__||Object.getPrototypeOf(o)).call.apply(t,[this].concat(a))),r.state={visibles:{}},r.handleTooltipVisibleChange=function(e,t){r.setState((function(n){return {visibles:Ze({},n.visibles,Ua({},e,t))}}));},r.handleWithTooltip=function(t){var n=t.value,o=t.dragging,i$1=t.index,a=t.disabled,s=Je(t,["value","dragging","index","disabled"]),u=r.props,l=u.tipFormatter,c=u.tipProps,p=u.handleStyle,f=c.prefixCls,h=void 0===f?"rc-slider-tooltip":f,d=c.overlay,m=void 0===d?l(n):d,v=c.placement,y=void 0===v?"top":v,g=c.visible,b=void 0!==g&&g,w=Je(c,["prefixCls","overlay","placement","visible"]),T=void 0;return T=Array.isArray(p)?p[i$1]||p[0]:p,i.createElement(Fs,Ze({},w,{prefixCls:h,overlay:m,placement:y,visible:!a&&(r.state.visibles[i$1]||o)||b,key:i$1}),i.createElement(ru,Ze({},s,{style:Ze({},T),value:n,onMouseEnter:function(){return r.handleTooltipVisibleChange(i$1,!0)},onMouseLeave:function(){return r.handleTooltipVisibleChange(i$1,!1)}})))},ir(r,n)}return gr(o,n),Ni(o,[{key:"render",value:function(){return i.createElement(t,Ze({},this.props,{handle:this.handleWithTooltip}))}}]),o}(i.Component),n.propTypes={tipFormatter:Gr.func,handleStyle:Gr.oneOfType([Gr.object,Gr.arrayOf(Gr.object)]),tipProps:Gr.object},n.defaultProps={tipFormatter:function(e){return e},handleStyle:[{}],tipProps:{}},o};var Zu;!function(e){e.Number="number",e.DateTime="datetime";}(Zu||(Zu={}));const Ju=function(e){let{valueAttribute:n,onChange:o}=e;const r=reactExports.useMemo((()=>((e,t)=>{let n=null;return function(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];null!==n&&(clearTimeout(n),n=null),n=setTimeout((()=>e(...r)),t);}})((()=>{var e;(e=o)&&e.canExecute&&!e.isExecuting&&e.execute();}),500)),[o]);return {onChange:e=>{n.setValue(new Big(e)),r();}}},el=e=>{let{className:t,classNameSlider:n,rootStyle:r,...i}=e;return reactExports.createElement("div",{style:r,className:Ei("widget-slider",{"widget-slider-vertical":i.vertical},t)},reactExports.createElement($u,{className:n,...i}))};function tl(e){var t;const{valueAttribute:n,orientation:a,heightUnit:s,height:u,minValueType:l,minAttribute:h,expressionMinimumValue:d,staticMinimumValue:m,stepSizeType:v,stepValue:y,stepAttribute:g,expressionStepSize:b,maxValueType:w,staticMaximumValue:T,maxAttribute:x,expressionMaximumValue:O,noOfMarkers:E,decimalPlaces:S,tooltip:C,showTooltip:M,tooltipType:P,tooltipAlwaysVisible:k,onChange:_}=e,A=c({minValueType:l,staticMinimumValue:m,minAttribute:h,expressionMinimumValue:d}),N=p({maxValueType:w,staticMaximumValue:T,maxAttribute:x,expressionMaximumValue:O}),D=function(e){var t,n,o,r;switch(e.stepSizeType){case"static":return Number(e.stepValue);case"dynamic":return Number(null!==(n=null===(t=e.stepAttribute)||void 0===t?void 0:t.value)&&void 0!==n?n:1);case"expression":return Number(null!==(r=null===(o=e.expressionStepSize)||void 0===o?void 0:o.value)&&void 0!==r?r:1)}}({stepSizeType:v,stepValue:y,stepAttribute:g,expressionStepSize:b}),j=f({noOfMarkers:E,decimalPlaces:S,minValueType:l,staticMinimumValue:m,minAttribute:h,expressionMinimumValue:d,maxValueType:w,staticMaximumValue:T,maxAttribute:x,expressionMaximumValue:O}),L=function(e){const{tooltip:t,showTooltip:n,tooltipType:r,tooltipAlwaysVisible:i}=e,a="customText"===r;if(n)return function(e){var n;const{dragging:r,index:s,...u}=e,l=reactExports.createElement("div",null,null!==(n=null==t?void 0:t.value)&&void 0!==n?n:"");return reactExports.createElement(Fs,{defaultVisible:!0,prefixCls:"rc-slider-tooltip",overlay:a?l:u.value,trigger:["hover","click","focus"],visible:i||r,placement:"top",mouseLeaveDelay:0,key:s},reactExports.createElement(ru,{...u}))}}({tooltip:C,showTooltip:M,tooltipType:P,tooltipAlwaysVisible:k}),{onChange:R}=Ju({valueAttribute:n,onChange:_}),V=function(e){let{orientation:t,height:n,heightUnit:o,style:r}=e;if("vertical"===t){const e="".concat(n).concat("pixels"===o?"px":"%");return {...r,height:e}}return r}({orientation:a,height:u,heightUnit:s});return function(e){const[t,n]=reactExports.useState(!1),o=e();reactExports.useEffect((()=>{!t&&o&&setTimeout((()=>n(!0)),0);}),[o]);}((()=>"available"===n.status)),reactExports.createElement(el,{disabled:n.readOnly,rootStyle:V,vertical:(F=e,"vertical"===F.orientation),value:null===(t=n.value)||void 0===t?void 0:t.toNumber(),min:A,max:N,step:D,onChange:R,marks:j,handle:L});var F;}

var SliderWidgetModule = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: tl
});

var undefined$1 = undefined;

const React = { createElement: reactExports.createElement };
const Accordion = Object.getOwnPropertyDescriptor(AccordionWidgetModule, "Accordion")?.value || Object.getOwnPropertyDescriptor(AccordionWidgetModule, "default")?.value;
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Events = Object.getOwnPropertyDescriptor(EventsWidgetModule, "Events")?.value || Object.getOwnPropertyDescriptor(EventsWidgetModule, "default")?.value;
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Markdown = Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "Markdown")?.value || Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "default")?.value;
const Slider = Object.getOwnPropertyDescriptor(SliderWidgetModule, "Slider")?.value || Object.getOwnPropertyDescriptor(SliderWidgetModule, "default")?.value;
const { $DataView, $Div, $Container, $ConditionalVisibilityWrapper, $ActionButton, $Text, $ListView, $Fragment, $Gallery, $FormGroup, $Markdown, $Accordion, $Image, $Events, $TextArea, $Combobox, $Slider } = asPluginWidgets({ DataView, Div, Container, ConditionalVisibilityWrapper, ActionButton, Text, ListView, Fragment, Gallery, FormGroup, Markdown, Accordion, Image, Events, TextArea, Combobox, Slider });
addEnumerations({
  "MyFirstAIBot.ENUM_InitialUserPromptCategory": [
    [
      "PersonalAssistant",
      selectTranslation([
        "Personal Assistant"
      ])
    ],
    [
      "TextWriter",
      selectTranslation([
        "Text Writer"
      ])
    ],
    [
      "BrainstormingAssistant",
      selectTranslation([
        "Brainstorming Assistant"
      ])
    ],
    [
      "LinkedInWriter",
      selectTranslation([
        "LinkedIn Writer"
      ])
    ]
  ],
  "GenAICommons.ENUM_MessageRole": [
    [
      "user",
      selectTranslation([
        "User"
      ])
    ],
    [
      "assistant",
      selectTranslation([
        "Assistant"
      ])
    ],
    [
      "system",
      selectTranslation([
        "System"
      ])
    ],
    [
      "tool",
      selectTranslation([
        "Tool"
      ])
    ]
  ],
  "ConversationalUI.ENUM_MessageStatus": [
    [
      "Loading",
      selectTranslation([
        "Loading"
      ])
    ],
    [
      "Error",
      selectTranslation([
        "Error"
      ])
    ],
    [
      "Success",
      selectTranslation([
        "Success"
      ])
    ]
  ],
  "ConversationalUI.ENUM_ChatContextStatus": [
    [
      "Loading",
      selectTranslation([
        "Loading"
      ])
    ],
    [
      "Ready",
      selectTranslation([
        "Ready"
      ])
    ]
  ],
  "MyFirstAIBot.ENUM_ActionMicroflowSelection": [
    [
      "ChatContext_ChatWithHistory_ActionMicroflow",
      selectTranslation([
        "ChatContext_ChatWithHistory_ActionMicroflow"
      ])
    ],
    [
      "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow",
      selectTranslation([
        "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.MyFirstAIBot.Chat.dataView4",
      $widgetId: "p.MyFirstAIBot.Chat.dataView4",
      class: "mx-name-dataView4 chat-dataview--display-contents form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.40",
        "scope": "$ChatContext",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.Chat.layoutGrid1",
            $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid layoutgrid--full-height",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.Chat.layoutGrid1$row0",
                  $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column0",
                        $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column0",
                        class: "col-lg-3 col-md-auto col-auto",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.MyFirstAIBot.Chat.container2",
                              $widgetId: "p.MyFirstAIBot.Chat.container2",
                              class: "mx-name-container2 card chat-card--full-height chat-history-sidebar margin-bottom-0",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstAIBot.Chat.actionButton1$visibility",
                                    $widgetId: "p.MyFirstAIBot.Chat.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MyFirstAIBot.Chat.actionButton1",
                                          $widgetId: "p.MyFirstAIBot.Chat.actionButton1",
                                          buttonId: "p.MyFirstAIBot.Chat.actionButton1",
                                          class: "mx-name-actionButton1 spacing-outer-bottom-medium btn-block",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "button",
                                          role: void 0,
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "New Chat" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil-write-paper" }
                                          }),
                                          action: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNdXYulmr16GLrk/mFpECw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.MyFirstAIBot.Chat.text3",
                                    $widgetId: "p.MyFirstAIBot.Chat.text3",
                                    class: "mx-name-text3",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Chat history" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h5"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ListView,
                                  {
                                    key: "p.MyFirstAIBot.Chat.listView3",
                                    $widgetId: "p.MyFirstAIBot.Chat.listView3",
                                    class: "mx-name-listView3 listview-hover listview-stylingless",
                                    style: void 0,
                                    listValue: DatabaseObjectListProperty({
                                      "dataSourceId": "p.2",
                                      "entity": "ConversationalUI.ChatContext",
                                      "scope": "p.MyFirstAIBot.Chat.dataView4",
                                      "operationId": "NzJe6iP85FOfQ687YDDMpw",
                                      "sort": [
                                        [
                                          "changedDate",
                                          "desc"
                                        ]
                                      ],
                                      "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "System.owner", "context": "ConversationalUI.ChatContext", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] }
                                    }),
                                    itemTemplate: TemplatedWidgetProperty({
                                      "dataSourceId": "p.2",
                                      "editable": false,
                                      "children": () => [
                                        /* @__PURE__ */ React.createElement(
                                          $Container,
                                          {
                                            key: "p.MyFirstAIBot.Chat.container7",
                                            $widgetId: "p.MyFirstAIBot.Chat.container7",
                                            class: DynamicClassProperty({
                                              "staticClasses": "mx-name-container7",
                                              "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "dataView4" }, { "type": "variable", "variable": "currentObject" }] }, "then": { "type": "literal", "value": "chat-history-active" }, "else": { "type": "literal", "value": "" } }, "args": { "dataView4": { "widget": "$ChatContext", "source": "object" }, "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } } }
                                            }),
                                            style: void 0,
                                            renderMode: "div",
                                            onClick: void 0,
                                            content: [
                                              /* @__PURE__ */ React.createElement(
                                                $Fragment,
                                                {
                                                  key: "p.MyFirstAIBot.Chat.snippetCall2",
                                                  $widgetId: "p.MyFirstAIBot.Chat.snippetCall2",
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container4",
                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container4",
                                                        class: "mx-name-container4 hover-trigger spacing-inner-top spacing-inner-bottom spacing-inner-left spacing-inner-right",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Div,
                                                            {
                                                              key: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.layoutGrid6",
                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.layoutGrid6",
                                                              class: "mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid",
                                                              style: void 0,
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Div,
                                                                  {
                                                                    key: "p.MyFirstAIBot.Chat.layoutGrid6$row0",
                                                                    $widgetId: "p.MyFirstAIBot.Chat.layoutGrid6$row0",
                                                                    class: "row align-children-center",
                                                                    style: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Div,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.layoutGrid6$row0$column0",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.layoutGrid6$row0$column0",
                                                                          class: "col-lg col-md col",
                                                                          style: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Container,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container5",
                                                                                $widgetId: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container5",
                                                                                class: "mx-name-container5 text-break-word",
                                                                                style: void 0,
                                                                                renderMode: "div",
                                                                                onClick: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Text,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.text3",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.text3",
                                                                                      class: "mx-name-text3 text-clamp--2-lines",
                                                                                      style: void 0,
                                                                                      caption: selectTranslation([
                                                                                        ExpressionProperty({
                                                                                          "expression": { "expr": { "type": "variable", "variable": "ChatContext", "path": "Topic" }, "args": { "ChatContext": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } } }
                                                                                        })
                                                                                      ]),
                                                                                      renderMode: "span"
                                                                                    }
                                                                                  )
                                                                                ],
                                                                                ariaHidden: false
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Div,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.layoutGrid6$row0$column1",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.layoutGrid6$row0$column1",
                                                                          class: "col-lg-auto col-md-auto col-auto",
                                                                          style: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ConditionalVisibilityWrapper,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6$visibility",
                                                                                $widgetId: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6$visibility",
                                                                                visible: ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                                                }),
                                                                                contents: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $ActionButton,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6",
                                                                                      buttonId: "p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6",
                                                                                      class: "mx-name-actionButton6 btn-image show-on-hover line-height--1 spacing-outer-right",
                                                                                      style: void 0,
                                                                                      tabIndex: void 0,
                                                                                      renderType: "button",
                                                                                      role: void 0,
                                                                                      buttonClass: "btn-default",
                                                                                      caption: selectTranslation([
                                                                                        ExpressionProperty({
                                                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                        })
                                                                                      ]),
                                                                                      tooltip: TextProperty({
                                                                                        "value": selectTranslation([
                                                                                          "Delete chat"
                                                                                        ])
                                                                                      }),
                                                                                      icon: WebIconProperty({
                                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                                      }),
                                                                                      action: ActionProperty({
                                                                                        "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } }, "config": { "operationId": "MwJ2U+XF3l2F8DwzwZN6aQ", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure you want to delete this conversation?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                        "abortOnServerValidation": true
                                                                                      })
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          )
                                                        ],
                                                        ariaHidden: false
                                                      }
                                                    )
                                                  ]
                                                }
                                              )
                                            ],
                                            ariaHidden: false
                                          }
                                        )
                                      ]
                                    }),
                                    onClick: ListActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } }, "config": { "operationId": "34X1203IIlurkOOja2vqGw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": false,
                                      "dataSourceId": "p.2"
                                    }),
                                    pageSize: 200
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column1",
                        $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column1",
                        class: "col-lg-6 col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.MyFirstAIBot.Chat.container3",
                              $widgetId: "p.MyFirstAIBot.Chat.container3",
                              class: "mx-name-container3 card chat-card--full-height margin-bottom-0",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.MyFirstAIBot.Chat.container1",
                                    $widgetId: "p.MyFirstAIBot.Chat.container1",
                                    class: "mx-name-container1 chat-container--center chat-container",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.MyFirstAIBot.Chat.container10$visibility",
                                          $widgetId: "p.MyFirstAIBot.Chat.container10$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "ChatContext" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "CurrentUserPrompt" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.MyFirstAIBot.Chat.container10",
                                                $widgetId: "p.MyFirstAIBot.Chat.container10",
                                                class: "mx-name-container10 conversationstarter-container--horizontal",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Gallery,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.gallery1",
                                                      $widgetId: "p.MyFirstAIBot.Chat.gallery1",
                                                      datasource: DatabaseObjectListProperty({
                                                        "dataSourceId": "p.5",
                                                        "entity": "MyFirstAIBot.InitialUserPrompt",
                                                        "scope": "p.MyFirstAIBot.Chat.dataView4",
                                                        "operationId": "My0YdydHoV2y+TbwPz2/+w",
                                                        "sort": [
                                                          [
                                                            "Order",
                                                            "asc"
                                                          ]
                                                        ]
                                                      }),
                                                      itemSelectionMode: "clear",
                                                      content: TemplatedWidgetProperty({
                                                        "dataSourceId": "p.5",
                                                        "editable": false,
                                                        "children": () => [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.MyFirstAIBot.Chat.container12",
                                                              $widgetId: "p.MyFirstAIBot.Chat.container12",
                                                              class: "mx-name-container12 card conversationstarter",
                                                              style: void 0,
                                                              tabIndex: void 0,
                                                              renderMode: "div",
                                                              onClick: ActionProperty({
                                                                "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true }
                                                              }),
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.MyFirstAIBot.Chat.container13",
                                                                    $widgetId: "p.MyFirstAIBot.Chat.container13",
                                                                    class: "mx-name-container13",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $ConditionalVisibilityWrapper,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.actionButton9$visibility",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.actionButton9$visibility",
                                                                          visible: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "TextWriter" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                          }),
                                                                          contents: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ActionButton,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.actionButton9",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.actionButton9",
                                                                                buttonId: "p.MyFirstAIBot.Chat.actionButton9",
                                                                                class: "mx-name-actionButton9 spacing-outer-bottom spacing-outer-right",
                                                                                style: void 0,
                                                                                tabIndex: void 0,
                                                                                renderType: "link",
                                                                                role: "button",
                                                                                buttonClass: "btn-default",
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                tooltip: TextProperty({
                                                                                  "value": selectTranslation([
                                                                                    ""
                                                                                  ])
                                                                                }),
                                                                                icon: WebIconProperty({
                                                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pen-write-paper" }
                                                                                }),
                                                                                action: ActionProperty({
                                                                                  "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                  "abortOnServerValidation": true
                                                                                })
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $ConditionalVisibilityWrapper,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.actionButton10$visibility",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.actionButton10$visibility",
                                                                          visible: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "PersonalAssistant" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                          }),
                                                                          contents: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ActionButton,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.actionButton10",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.actionButton10",
                                                                                buttonId: "p.MyFirstAIBot.Chat.actionButton10",
                                                                                class: "mx-name-actionButton10 spacing-outer-bottom spacing-outer-right",
                                                                                style: void 0,
                                                                                tabIndex: void 0,
                                                                                renderType: "link",
                                                                                role: "button",
                                                                                buttonClass: "btn-default",
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                tooltip: TextProperty({
                                                                                  "value": selectTranslation([
                                                                                    ""
                                                                                  ])
                                                                                }),
                                                                                icon: WebIconProperty({
                                                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-task-list-multiple" }
                                                                                }),
                                                                                action: ActionProperty({
                                                                                  "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                  "abortOnServerValidation": true
                                                                                })
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $ConditionalVisibilityWrapper,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.actionButton11$visibility",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.actionButton11$visibility",
                                                                          visible: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "LinkedInWriter" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                          }),
                                                                          contents: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ActionButton,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.actionButton11",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.actionButton11",
                                                                                buttonId: "p.MyFirstAIBot.Chat.actionButton11",
                                                                                class: "mx-name-actionButton11 spacing-outer-bottom spacing-outer-right",
                                                                                style: void 0,
                                                                                tabIndex: void 0,
                                                                                renderType: "link",
                                                                                role: "button",
                                                                                buttonClass: "btn-default",
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                tooltip: TextProperty({
                                                                                  "value": selectTranslation([
                                                                                    ""
                                                                                  ])
                                                                                }),
                                                                                icon: WebIconProperty({
                                                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-browser-trophy" }
                                                                                }),
                                                                                action: ActionProperty({
                                                                                  "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                  "abortOnServerValidation": true
                                                                                })
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $ConditionalVisibilityWrapper,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.actionButton12$visibility",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.actionButton12$visibility",
                                                                          visible: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "BrainstormingAssistant" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                          }),
                                                                          contents: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ActionButton,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.actionButton12",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.actionButton12",
                                                                                buttonId: "p.MyFirstAIBot.Chat.actionButton12",
                                                                                class: "mx-name-actionButton12 spacing-outer-bottom spacing-outer-right",
                                                                                style: void 0,
                                                                                tabIndex: void 0,
                                                                                renderType: "link",
                                                                                role: "button",
                                                                                buttonClass: "btn-default",
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                tooltip: TextProperty({
                                                                                  "value": selectTranslation([
                                                                                    ""
                                                                                  ])
                                                                                }),
                                                                                icon: WebIconProperty({
                                                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-robot-head" }
                                                                                }),
                                                                                action: ActionProperty({
                                                                                  "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                  "abortOnServerValidation": true
                                                                                })
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $ConditionalVisibilityWrapper,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.actionButton13$visibility",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.actionButton13$visibility",
                                                                          visible: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": null }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                          }),
                                                                          contents: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ActionButton,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.actionButton13",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.actionButton13",
                                                                                buttonId: "p.MyFirstAIBot.Chat.actionButton13",
                                                                                class: "mx-name-actionButton13 spacing-outer-right spacing-outer-bottom-large",
                                                                                style: void 0,
                                                                                tabIndex: void 0,
                                                                                renderType: "link",
                                                                                role: "button",
                                                                                buttonClass: "btn-default",
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                tooltip: TextProperty({
                                                                                  "value": selectTranslation([
                                                                                    ""
                                                                                  ])
                                                                                }),
                                                                                icon: void 0,
                                                                                action: ActionProperty({
                                                                                  "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                  "abortOnServerValidation": true
                                                                                })
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.text8",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.text8",
                                                                          class: "mx-name-text8 text-small text-break text-primary text-semibold spacing-outer-bottom",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Header" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                            })
                                                                          ]),
                                                                          renderMode: "span"
                                                                        }
                                                                      )
                                                                    ],
                                                                    ariaHidden: false
                                                                  }
                                                                )
                                                              ],
                                                              ariaHidden: false
                                                            }
                                                          )
                                                        ]
                                                      }),
                                                      desktopItems: 4,
                                                      tabletItems: 2,
                                                      phoneItems: 2,
                                                      pageSize: 20,
                                                      pagination: "buttons",
                                                      pagingPosition: "bottom",
                                                      showEmptyPlaceholder: "none",
                                                      emptyPlaceholder: void 0,
                                                      itemClass: void 0,
                                                      onClickTrigger: "single",
                                                      onClick: ListActionProperty({
                                                        "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                        "abortOnServerValidation": false,
                                                        "dataSourceId": "p.5",
                                                        "argumentTypes": {}
                                                      }),
                                                      onSelectionChange: void 0,
                                                      filtersPlaceholder: void 0,
                                                      filterSectionTitle: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      emptyMessageTitle: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      ariaLabelListBox: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      showTotalCount: false,
                                                      showPagingButtons: "always",
                                                      loadMoreButtonCaption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                        })
                                                      ]),
                                                      stateStorageType: "attribute",
                                                      storeFilters: true,
                                                      storeSort: true,
                                                      ariaLabelItem: selectTranslation([
                                                        void 0
                                                      ]),
                                                      keepSelection: false,
                                                      selectionCountPosition: "bottom",
                                                      clearSelectionButtonLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                        })
                                                      ]),
                                                      refreshIndicator: false,
                                                      selectedCountTemplateSingular: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "%d item selected" }, "args": {} }
                                                        })
                                                      ]),
                                                      selectedCountTemplatePlural: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "%d items selected" }, "args": {} }
                                                        })
                                                      ]),
                                                      class: "mx-name-gallery1 gallery-hide-paging",
                                                      style: void 0,
                                                      tabIndex: void 0
                                                    }
                                                  )
                                                ],
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Fragment,
                                        {
                                          key: "p.MyFirstAIBot.Chat.snippetCall1",
                                          $widgetId: "p.MyFirstAIBot.Chat.snippetCall1",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container15",
                                                $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container15",
                                                class: "mx-name-container15 chat-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container1",
                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container1",
                                                      class: "mx-name-container1 messages-container spacing-outer-bottom",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ListView,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                            $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                            class: "mx-name-listView4 listview-scroll-to-last chat-listview-stylingless listview-hide-on-empty",
                                                            style: void 0,
                                                            listValue: DatabaseObjectListProperty({
                                                              "dataSourceId": "p.16",
                                                              "entity": "ConversationalUI.Message",
                                                              "scope": "$ChatContext",
                                                              "operationId": "YwWxk2+rDVaKmwmQ5wTmGA",
                                                              "sort": [
                                                                [
                                                                  "createdDate",
                                                                  "asc"
                                                                ]
                                                              ],
                                                              "arguments": {
                                                                "ChatContext": [
                                                                  "$ChatContext"
                                                                ],
                                                                "CurrentObject": [
                                                                  "$ChatContext"
                                                                ]
                                                              },
                                                              "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "ConversationalUI.Message_ChatContext", "context": "ConversationalUI.Message", "attributeType": "ObjectReference" }, { "type": "variable", "name": "ChatContext" }] }
                                                            }),
                                                            itemTemplate: TemplatedWidgetProperty({
                                                              "dataSourceId": "p.16",
                                                              "editable": false,
                                                              "children": () => [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Fragment,
                                                                  {
                                                                    key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall1",
                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall1",
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.ConversationalUI.Snippet_Message.container13",
                                                                          $widgetId: "p.ConversationalUI.Snippet_Message.container13",
                                                                          class: DynamicClassProperty({
                                                                            "staticClasses": "mx-name-container13 hover-trigger",
                                                                            "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "literal", "value": "message--assistant" }, "else": { "type": "literal", "value": "message--user" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                          }),
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Container,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_Message.container14",
                                                                                $widgetId: "p.ConversationalUI.Snippet_Message.container14",
                                                                                class: "mx-name-container14 spacing-outer-bottom",
                                                                                style: void 0,
                                                                                renderMode: "div",
                                                                                onClick: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Div,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message.layoutGrid1",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message.layoutGrid1",
                                                                                      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                      style: void 0,
                                                                                      content: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Div,
                                                                                          {
                                                                                            key: "p.MyFirstAIBot.Chat.layoutGrid1$row0.111",
                                                                                            $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1$row0.111",
                                                                                            class: "row align-children-center",
                                                                                            style: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Div,
                                                                                                {
                                                                                                  key: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column0.112",
                                                                                                  $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column0.112",
                                                                                                  class: "col-lg-auto col-md-auto col-auto",
                                                                                                  style: void 0,
                                                                                                  content: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Text,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message.text6",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message.text6",
                                                                                                        class: DynamicClassProperty({
                                                                                                          "staticClasses": "mx-name-text6 spacing-outer-bottom-none",
                                                                                                          "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "literal", "value": "text-primary" }, "else": { "type": "literal", "value": "" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                        }),
                                                                                                        style: void 0,
                                                                                                        caption: selectTranslation([
                                                                                                          ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "literal", "value": "Assistant" }, "else": { "type": "literal", "value": "You" } }, { "type": "literal", "value": " " }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                          })
                                                                                                        ]),
                                                                                                        renderMode: "h5"
                                                                                                      }
                                                                                                    )
                                                                                                  ]
                                                                                                }
                                                                                              ),
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Div,
                                                                                                {
                                                                                                  key: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column1.115",
                                                                                                  $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column1.115",
                                                                                                  class: "col-lg col-md col",
                                                                                                  style: void 0,
                                                                                                  content: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Text,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message.text2",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message.text2",
                                                                                                        class: "mx-name-text2 show-on-hover text-small text-light text-detail",
                                                                                                        style: void 0,
                                                                                                        caption: selectTranslation([
                                                                                                          ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Message", "path": "createdDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                          })
                                                                                                        ]),
                                                                                                        renderMode: "span"
                                                                                                      }
                                                                                                    )
                                                                                                  ]
                                                                                                }
                                                                                              )
                                                                                            ]
                                                                                          }
                                                                                        )
                                                                                      ]
                                                                                    }
                                                                                  )
                                                                                ],
                                                                                ariaHidden: false
                                                                              }
                                                                            ),
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ConditionalVisibilityWrapper,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_Message.container11$visibility",
                                                                                $widgetId: "p.ConversationalUI.Snippet_Message.container11$visibility",
                                                                                visible: ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Success" }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                }),
                                                                                contents: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Container,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message.container11",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message.container11",
                                                                                      class: "mx-name-container11",
                                                                                      style: void 0,
                                                                                      renderMode: "div",
                                                                                      onClick: void 0,
                                                                                      content: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Fragment,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_Message.snippetCall3",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message.snippetCall3",
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Container,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message_Content.container1",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_Content.container1",
                                                                                                  class: "mx-name-container1",
                                                                                                  style: void 0,
                                                                                                  renderMode: "div",
                                                                                                  onClick: void 0,
                                                                                                  content: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $ConditionalVisibilityWrapper,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message_Content.text8$visibility",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message_Content.text8$visibility",
                                                                                                        visible: ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "user" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, { "type": "literal", "value": false }] } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                        }),
                                                                                                        contents: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $Text,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_Message_Content.text8",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_Message_Content.text8",
                                                                                                              class: "mx-name-text8",
                                                                                                              style: void 0,
                                                                                                              caption: selectTranslation([
                                                                                                                ExpressionProperty({
                                                                                                                  "expression": { "expr": { "type": "variable", "variable": "Message", "path": "Content" }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                                })
                                                                                                              ]),
                                                                                                              renderMode: "span"
                                                                                                            }
                                                                                                          )
                                                                                                        ]
                                                                                                      }
                                                                                                    ),
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $ConditionalVisibilityWrapper,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility",
                                                                                                        visible: ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                        }),
                                                                                                        contents: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $FormGroup,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup",
                                                                                                              class: "mx-name-markdownViewer1 chat-listview-stylingless spacing-outer-bottom-none",
                                                                                                              style: void 0,
                                                                                                              control: [
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Markdown,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1",
                                                                                                                    stringAttribute: AttributeProperty({
                                                                                                                      "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                                                                      "path": "",
                                                                                                                      "entity": "ConversationalUI.Message",
                                                                                                                      "attribute": "Content",
                                                                                                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                                      "isList": false,
                                                                                                                      "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                                                                    }),
                                                                                                                    tabIndex: void 0,
                                                                                                                    id: DerivedUniqueIdProperty({
                                                                                                                      "widgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                                    })
                                                                                                                  }
                                                                                                                )
                                                                                                              ],
                                                                                                              caption: void 0,
                                                                                                              labelFor: DerivedUniqueIdProperty({
                                                                                                                "widgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                              }),
                                                                                                              width: void 0,
                                                                                                              orientation: "vertical",
                                                                                                              hasError: ValidationProperty({
                                                                                                                "inputWidgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                              })
                                                                                                            }
                                                                                                          )
                                                                                                        ]
                                                                                                      }
                                                                                                    )
                                                                                                  ],
                                                                                                  ariaHidden: false
                                                                                                }
                                                                                              )
                                                                                            ]
                                                                                          }
                                                                                        ),
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Fragment,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_Message.snippetCall1",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message.snippetCall1",
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $ConditionalVisibilityWrapper,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "variable", "variable": "Message", "path": "HasSources" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Accordion,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message_Sources.accordion1",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message_Sources.accordion1",
                                                                                                        advancedMode: false,
                                                                                                        groups: [
                                                                                                          {
                                                                                                            "headerRenderMode": "custom",
                                                                                                            "headerText": selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Header" }, "args": {} }
                                                                                                              })
                                                                                                            ]),
                                                                                                            "headerHeading": "headingThree",
                                                                                                            "headerContent": [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Div,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_Message_Sources.layoutGrid2",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_Sources.layoutGrid2",
                                                                                                                  class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                                                  style: void 0,
                                                                                                                  content: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Div,
                                                                                                                      {
                                                                                                                        key: "p.MyFirstAIBot.Chat.layoutGrid2$row0",
                                                                                                                        $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0",
                                                                                                                        class: "row align-children-center",
                                                                                                                        style: void 0,
                                                                                                                        content: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Div,
                                                                                                                            {
                                                                                                                              key: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column0",
                                                                                                                              $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column0",
                                                                                                                              class: "col-lg-auto col-md-auto col-auto",
                                                                                                                              style: void 0,
                                                                                                                              content: [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Image,
                                                                                                                                  {
                                                                                                                                    key: "p.ConversationalUI.Snippet_Message_Sources.image1",
                                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_Message_Sources.image1",
                                                                                                                                    datasource: "icon",
                                                                                                                                    imageObject: void 0,
                                                                                                                                    defaultImageDynamic: void 0,
                                                                                                                                    imageUrl: selectTranslation([
                                                                                                                                      ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                      })
                                                                                                                                    ]),
                                                                                                                                    imageIcon: WebIconProperty({
                                                                                                                                      "icon": { "type": "glyph", "iconClass": "glyphicon-file" }
                                                                                                                                    }),
                                                                                                                                    isBackgroundImage: false,
                                                                                                                                    children: void 0,
                                                                                                                                    onClickType: "action",
                                                                                                                                    onClick: void 0,
                                                                                                                                    alternativeText: selectTranslation([
                                                                                                                                      ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                      })
                                                                                                                                    ]),
                                                                                                                                    widthUnit: "auto",
                                                                                                                                    width: 100,
                                                                                                                                    heightUnit: "auto",
                                                                                                                                    height: 100,
                                                                                                                                    iconSize: 14,
                                                                                                                                    displayAs: "fullImage",
                                                                                                                                    responsive: true,
                                                                                                                                    class: "mx-name-image1",
                                                                                                                                    style: void 0,
                                                                                                                                    tabIndex: void 0
                                                                                                                                  }
                                                                                                                                )
                                                                                                                              ]
                                                                                                                            }
                                                                                                                          ),
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Div,
                                                                                                                            {
                                                                                                                              key: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column1",
                                                                                                                              $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column1",
                                                                                                                              class: "col-lg-auto col-md-auto col-auto",
                                                                                                                              style: void 0,
                                                                                                                              content: [
                                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                                  $Text,
                                                                                                                                  {
                                                                                                                                    key: "p.ConversationalUI.Snippet_Message_Sources.text1",
                                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_Message_Sources.text1",
                                                                                                                                    class: "mx-name-text1 spacing-outer-bottom-none",
                                                                                                                                    style: void 0,
                                                                                                                                    caption: selectTranslation([
                                                                                                                                      ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Sources" }, "args": {} }
                                                                                                                                      })
                                                                                                                                    ]),
                                                                                                                                    renderMode: "span"
                                                                                                                                  }
                                                                                                                                )
                                                                                                                              ]
                                                                                                                            }
                                                                                                                          )
                                                                                                                        ]
                                                                                                                      }
                                                                                                                    )
                                                                                                                  ]
                                                                                                                }
                                                                                                              )
                                                                                                            ],
                                                                                                            "content": [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $ListView,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_Message_Sources.listView3",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_Sources.listView3",
                                                                                                                  class: "mx-name-listView3 chat-listview-horizontal listview-hide-on-empty",
                                                                                                                  style: void 0,
                                                                                                                  listValue: AssociationObjectListProperty({
                                                                                                                    "dataSourceId": "p.17",
                                                                                                                    "entity": "ConversationalUI.Source",
                                                                                                                    "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                                                                    "operationId": "JP103s4dE1WmtXXqbIwZwQ"
                                                                                                                  }),
                                                                                                                  itemTemplate: TemplatedWidgetProperty({
                                                                                                                    "dataSourceId": "p.17",
                                                                                                                    "editable": false,
                                                                                                                    "children": () => [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $ConditionalVisibilityWrapper,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_Message_Sources.actionButton4$visibility",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_Message_Sources.actionButton4$visibility",
                                                                                                                          visible: ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                                                                                          }),
                                                                                                                          contents: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $ActionButton,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_Message_Sources.actionButton4",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_Message_Sources.actionButton4",
                                                                                                                                buttonId: "p.ConversationalUI.Snippet_Message_Sources.actionButton4",
                                                                                                                                class: "mx-name-actionButton4 source-btn btn-sm",
                                                                                                                                style: void 0,
                                                                                                                                tabIndex: void 0,
                                                                                                                                renderType: "button",
                                                                                                                                role: void 0,
                                                                                                                                buttonClass: "btn-default",
                                                                                                                                caption: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" } } }
                                                                                                                                  })
                                                                                                                                ]),
                                                                                                                                tooltip: TextProperty({
                                                                                                                                  "value": selectTranslation([
                                                                                                                                    ""
                                                                                                                                  ])
                                                                                                                                }),
                                                                                                                                icon: void 0,
                                                                                                                                action: ActionProperty({
                                                                                                                                  "action": { "type": "openPage", "argMap": { "param$Source": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" }, "currentObject": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" } }, "config": { "name": "ConversationalUI/Source_View.page.xml", "title": selectTranslation([{ "type": "variable", "variable": "currentObject", "path": "Title" }]), "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                                                                  "abortOnServerValidation": true
                                                                                                                                })
                                                                                                                              }
                                                                                                                            )
                                                                                                                          ]
                                                                                                                        }
                                                                                                                      )
                                                                                                                    ]
                                                                                                                  }),
                                                                                                                  onClick: void 0,
                                                                                                                  pageSize: 10
                                                                                                                }
                                                                                                              )
                                                                                                            ],
                                                                                                            "visible": ExpressionProperty({
                                                                                                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                            }),
                                                                                                            "loadContent": "whenExpanded",
                                                                                                            "initialCollapsedState": "collapsed",
                                                                                                            "initiallyCollapsed": ExpressionProperty({
                                                                                                              "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                            })
                                                                                                          }
                                                                                                        ],
                                                                                                        collapsible: true,
                                                                                                        expandBehavior: "singleExpanded",
                                                                                                        animate: true,
                                                                                                        showIcon: "right",
                                                                                                        icon: void 0,
                                                                                                        expandIcon: void 0,
                                                                                                        collapseIcon: void 0,
                                                                                                        animateIcon: true,
                                                                                                        class: "mx-name-accordion1 accordion-chat-sources widget-accordion-bordered-none spacing-outer-top",
                                                                                                        style: void 0,
                                                                                                        tabIndex: void 0
                                                                                                      }
                                                                                                    )
                                                                                                  ]
                                                                                                }
                                                                                              )
                                                                                            ]
                                                                                          }
                                                                                        )
                                                                                      ],
                                                                                      ariaHidden: false
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              }
                                                                            ),
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Fragment,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_Message.snippetCall2",
                                                                                $widgetId: "p.ConversationalUI.Snippet_Message.snippetCall2",
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $ConditionalVisibilityWrapper,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility",
                                                                                      visible: ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Error" }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                      }),
                                                                                      contents: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Div,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2",
                                                                                            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                            style: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Div,
                                                                                                {
                                                                                                  key: "p.MyFirstAIBot.Chat.layoutGrid2$row0.157",
                                                                                                  $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0.157",
                                                                                                  class: "row align-children-center",
                                                                                                  style: void 0,
                                                                                                  content: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Div,
                                                                                                      {
                                                                                                        key: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.158",
                                                                                                        $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.158",
                                                                                                        class: "col-lg-auto col-md-auto col-auto",
                                                                                                        style: void 0,
                                                                                                        content: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $Image,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_Message_StatusHandling.image1",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.image1",
                                                                                                              datasource: "icon",
                                                                                                              imageObject: void 0,
                                                                                                              defaultImageDynamic: void 0,
                                                                                                              imageUrl: selectTranslation([
                                                                                                                ExpressionProperty({
                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                })
                                                                                                              ]),
                                                                                                              imageIcon: WebIconProperty({
                                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-warning-sign" }
                                                                                                              }),
                                                                                                              isBackgroundImage: false,
                                                                                                              children: void 0,
                                                                                                              onClickType: "action",
                                                                                                              onClick: void 0,
                                                                                                              alternativeText: selectTranslation([
                                                                                                                ExpressionProperty({
                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                })
                                                                                                              ]),
                                                                                                              widthUnit: "auto",
                                                                                                              width: 100,
                                                                                                              heightUnit: "auto",
                                                                                                              height: 100,
                                                                                                              iconSize: 14,
                                                                                                              displayAs: "fullImage",
                                                                                                              responsive: true,
                                                                                                              class: "mx-name-image1 text-danger",
                                                                                                              style: void 0,
                                                                                                              tabIndex: void 0
                                                                                                            }
                                                                                                          )
                                                                                                        ]
                                                                                                      }
                                                                                                    ),
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Div,
                                                                                                      {
                                                                                                        key: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.161",
                                                                                                        $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.161",
                                                                                                        class: "col-lg col-md-auto col-auto",
                                                                                                        style: void 0,
                                                                                                        content: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $Text,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_Message_StatusHandling.text10",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.text10",
                                                                                                              class: "mx-name-text10 text-danger spacing-outer-left-none",
                                                                                                              style: void 0,
                                                                                                              caption: selectTranslation([
                                                                                                                ExpressionProperty({
                                                                                                                  "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                                                                                                })
                                                                                                              ]),
                                                                                                              renderMode: "span"
                                                                                                            }
                                                                                                          )
                                                                                                        ]
                                                                                                      }
                                                                                                    )
                                                                                                  ]
                                                                                                }
                                                                                              )
                                                                                            ]
                                                                                          }
                                                                                        )
                                                                                      ]
                                                                                    }
                                                                                  ),
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $ConditionalVisibilityWrapper,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message_StatusHandling.container4$visibility",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container4$visibility",
                                                                                      visible: ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Loading" }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                      }),
                                                                                      contents: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Container,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_Message_StatusHandling.container4",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container4",
                                                                                            class: "mx-name-container4 chat-loading-wrapper",
                                                                                            style: void 0,
                                                                                            renderMode: "div",
                                                                                            onClick: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Container,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message_StatusHandling.container7",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container7",
                                                                                                  class: "mx-name-container7 loading-dot",
                                                                                                  style: void 0,
                                                                                                  renderMode: "div",
                                                                                                  onClick: void 0,
                                                                                                  content: void 0,
                                                                                                  ariaHidden: false
                                                                                                }
                                                                                              ),
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Container,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message_StatusHandling.container6",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container6",
                                                                                                  class: "mx-name-container6 loading-dot",
                                                                                                  style: void 0,
                                                                                                  renderMode: "div",
                                                                                                  onClick: void 0,
                                                                                                  content: void 0,
                                                                                                  ariaHidden: false
                                                                                                }
                                                                                              ),
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Container,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message_StatusHandling.container5",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container5",
                                                                                                  class: "mx-name-container5 loading-dot",
                                                                                                  style: void 0,
                                                                                                  renderMode: "div",
                                                                                                  onClick: void 0,
                                                                                                  content: void 0,
                                                                                                  ariaHidden: false
                                                                                                }
                                                                                              )
                                                                                            ],
                                                                                            ariaHidden: false
                                                                                          }
                                                                                        )
                                                                                      ]
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              }
                                                                            )
                                                                          ],
                                                                          ariaHidden: false
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container8",
                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container8",
                                                                    class: "mx-name-container8 w-100 border spacing-outer-top-medium",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: void 0,
                                                                    ariaHidden: false
                                                                  }
                                                                ),
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Events,
                                                                  {
                                                                    key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.events1",
                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.events1",
                                                                    onComponentLoad: ActionProperty({
                                                                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ScrollToBottom, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                      "argumentTypes": {}
                                                                    }),
                                                                    componentLoadDelay: 0,
                                                                    componentLoadRepeat: false,
                                                                    componentLoadRepeatInterval: 3e4,
                                                                    onEventChangeAttribute: AttributeProperty({
                                                                      "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                      "path": "",
                                                                      "entity": "ConversationalUI.Message",
                                                                      "attribute": "Content",
                                                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                      "isList": false,
                                                                      "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                    }),
                                                                    onEventChange: ActionProperty({
                                                                      "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ScrollToBottom, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                      "argumentTypes": {}
                                                                    }),
                                                                    onEventChangeDelay: 0,
                                                                    class: "mx-name-events1",
                                                                    style: void 0,
                                                                    tabIndex: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }),
                                                            onClick: void 0,
                                                            pageSize: 200
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall3",
                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall3",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "System.owner" }, { "type": "token", "name": "currentUser" }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3",
                                                                  $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3",
                                                                  class: "mx-name-container3",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Events,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.eventHitEnterToSend",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.eventHitEnterToSend",
                                                                        onComponentLoad: ActionProperty({
                                                                          "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Textarea_ExecuteButtonAction, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                          "argumentTypes": {}
                                                                        }),
                                                                        componentLoadDelay: 200,
                                                                        componentLoadRepeat: false,
                                                                        componentLoadRepeatInterval: 3e4,
                                                                        onEventChange: void 0,
                                                                        onEventChangeDelay: 0,
                                                                        class: "mx-name-eventHitEnterToSend",
                                                                        style: void 0,
                                                                        tabIndex: void 0
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ListView,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2",
                                                                        class: "mx-name-listView2 chat-listview-stylingless chat-listview-horizontal listview-hide-on-empty",
                                                                        style: void 0,
                                                                        listValue: AssociationObjectListProperty({
                                                                          "dataSourceId": "p.20",
                                                                          "entity": "ConversationalUI.SuggestedUserPrompt",
                                                                          "scope": "$ChatContext",
                                                                          "operationId": "l4+rJL1i4Vq1jJYGN/JIZA"
                                                                        }),
                                                                        itemTemplate: TemplatedWidgetProperty({
                                                                          "dataSourceId": "p.20",
                                                                          "editable": false,
                                                                          "children": () => [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ConditionalVisibilityWrapper,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt$visibility",
                                                                                $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt$visibility",
                                                                                visible: ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                                                }),
                                                                                contents: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $ActionButton,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt",
                                                                                      buttonId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt",
                                                                                      class: "mx-name-btnUseSuggestedUserPrompt chat-btn-suggested-prompt btn-sm",
                                                                                      style: void 0,
                                                                                      tabIndex: void 0,
                                                                                      renderType: "button",
                                                                                      role: void 0,
                                                                                      buttonClass: "btn-default",
                                                                                      caption: selectTranslation([
                                                                                        ExpressionProperty({
                                                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Content" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2", "source": "object" } } }
                                                                                        })
                                                                                      ]),
                                                                                      tooltip: TextProperty({
                                                                                        "value": selectTranslation([
                                                                                          ""
                                                                                        ])
                                                                                      }),
                                                                                      icon: void 0,
                                                                                      action: ActionProperty({
                                                                                        "action": { "type": "callNanoflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "SuggestedUserPrompt": { "widget": "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2", "source": "object" } }, "config": { "nanoflow": () => ACT_ChatContext_ExecuteSuggestedUserPrompt, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                        "abortOnServerValidation": true
                                                                                      })
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              }
                                                                            )
                                                                          ]
                                                                        }),
                                                                        onClick: void 0,
                                                                        pageSize: 10
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "ChatContext" }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2",
                                                                              class: "mx-name-container2",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_ChatContext_Interaction.text7",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.text7",
                                                                                    class: "mx-name-text7 text-center d-block spacing-outer-top-large",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "How can I help you today?" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "h5"
                                                                                  }
                                                                                )
                                                                              ],
                                                                              ariaHidden: false
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container17",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container17",
                                                                        class: "mx-name-container17 chat-input-wrapper",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $FormGroup,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt$formGroup",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt$formGroup",
                                                                              class: "mx-name-textAreaUserPrompt spacing-outer-bottom-none mx-textarea",
                                                                              style: void 0,
                                                                              control: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $TextArea,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt",
                                                                                    inputValue: AttributeProperty({
                                                                                      "scope": "$ChatContext",
                                                                                      "path": "",
                                                                                      "entity": "ConversationalUI.ChatContext",
                                                                                      "attribute": "CurrentUserPrompt",
                                                                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                      "isList": false,
                                                                                      "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Ready" }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } },
                                                                                      "validation": null
                                                                                    }),
                                                                                    counterMessage: void 0,
                                                                                    maxLength: void 0,
                                                                                    numberOfLines: void 0,
                                                                                    autoGrow: true,
                                                                                    placeholder: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Type your message here..." }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    readOnlyStyle: "control",
                                                                                    textTooLongMessage: void 0,
                                                                                    onEnter: void 0,
                                                                                    onLeave: void 0,
                                                                                    ariaLabel: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    ariaRequired: void 0,
                                                                                    submitWhileEditing: false,
                                                                                    submitDelay: 100,
                                                                                    tabIndex: 1,
                                                                                    id: DerivedUniqueIdProperty({
                                                                                      "widgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                                    })
                                                                                  }
                                                                                )
                                                                              ],
                                                                              caption: void 0,
                                                                              labelFor: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                              }),
                                                                              width: void 0,
                                                                              orientation: "vertical",
                                                                              hasError: ValidationProperty({
                                                                                "inputWidgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                              })
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Container,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container16",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container16",
                                                                              class: "mx-name-container16 send-btn-container",
                                                                              style: void 0,
                                                                              renderMode: "div",
                                                                              onClick: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ConditionalVisibilityWrapper,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Ready" }] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage",
                                                                                          buttonId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage",
                                                                                          class: "mx-name-btnSendMessage send-btn",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: WebIconProperty({
                                                                                            "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                                                                          }),
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callNanoflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "nanoflow": () => ACT_ChatContext_SendMessage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                          })
                                                                                        }
                                                                                      )
                                                                                    ]
                                                                                  }
                                                                                ),
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ConditionalVisibilityWrapper,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Loading" }] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ActionButton,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled",
                                                                                          buttonId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled",
                                                                                          class: "mx-name-btnDisabled disabled send-btn",
                                                                                          style: void 0,
                                                                                          tabIndex: void 0,
                                                                                          renderType: "button",
                                                                                          role: void 0,
                                                                                          buttonClass: "btn-primary",
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                            })
                                                                                          ]),
                                                                                          tooltip: TextProperty({
                                                                                            "value": selectTranslation([
                                                                                              ""
                                                                                            ])
                                                                                          }),
                                                                                          icon: WebIconProperty({
                                                                                            "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                                                                          }),
                                                                                          action: ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNwU6JsCtFehGaPFjDkTYg", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                          })
                                                                                        }
                                                                                      )
                                                                                    ]
                                                                                  }
                                                                                )
                                                                              ],
                                                                              ariaHidden: false
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ConditionalVisibilityWrapper,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3$visibility",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3$visibility",
                                                                        visible: ExpressionProperty({
                                                                          "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "constant", "name": "ConversationalUI.UserInputInstructions" }] }, { "type": "literal", "value": "" }] }, "args": {} }
                                                                        }),
                                                                        contents: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3",
                                                                              class: "mx-name-text3 user-input-instructions text-small spacing-outer-top-medium",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "constant", "name": "ConversationalUI.UserInputInstructions" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ]
                                                                      }
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ],
                                                ariaHidden: false
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column2",
                        $widgetId: "p.MyFirstAIBot.Chat.layoutGrid1$row0$column2",
                        class: "col-lg-3 col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.MyFirstAIBot.Chat.container4",
                              $widgetId: "p.MyFirstAIBot.Chat.container4",
                              class: "mx-name-container4 card",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.MyFirstAIBot.Chat.comboBox1$formGroup",
                                    $widgetId: "p.MyFirstAIBot.Chat.comboBox1$formGroup",
                                    class: "mx-name-comboBox1",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.MyFirstAIBot.Chat.comboBox1",
                                          $widgetId: "p.MyFirstAIBot.Chat.comboBox1",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "MyFirstAIBot.BotConfig",
                                            "attribute": "DisplayName",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.27",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          optionsSourceDatabaseDefaultValue: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "Reference",
                                            "entity": "ConversationalUI.ChatContext",
                                            "path": "",
                                            "attribute": "ConversationalUI.ChatContext_ProviderConfig_Active",
                                            "endpointEntity": "MyFirstAIBot.BotConfig",
                                            "selectableObjectsId": "p.27",
                                            "scope": "p.MyFirstAIBot.Chat.dataView4",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p.27",
                                            "entity": "MyFirstAIBot.BotConfig",
                                            "scope": "p.MyFirstAIBot.Chat.dataView4",
                                            "operationId": "b9qh+6X5HliXMfVWTcKoyg",
                                            "sort": [
                                              [
                                                "DisplayName",
                                                "asc"
                                              ]
                                            ],
                                            "constraints": { "type": "attribute", "attribute": "IsSelectable", "context": "MyFirstAIBot.BotConfig", "attributeType": "Boolean" }
                                          }),
                                          optionsSourceStaticDataSource: [],
                                          emptyOptionText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          filterType: "contains",
                                          noOptionsText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          clearable: true,
                                          optionsSourceAssociationCustomContentType: "no",
                                          optionsSourceAssociationCustomContent: void 0,
                                          optionsSourceDatabaseCustomContentType: "no",
                                          staticDataSourceCustomContentType: "no",
                                          showFooter: false,
                                          menuFooterContent: void 0,
                                          selectionMethod: "checkbox",
                                          selectedItemsStyle: "text",
                                          selectAllButton: false,
                                          selectAllButtonCaption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                            })
                                          ]),
                                          readOnlyStyle: "text",
                                          onChangeEvent: ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "vUHf3Rfd2lu/Cldii/MyqA", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                            "argumentTypes": {}
                                          }),
                                          onEnterEvent: void 0,
                                          onLeaveEvent: void 0,
                                          ariaRequired: false,
                                          clearButtonAriaLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                            })
                                          ]),
                                          removeValueAriaLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                            })
                                          ]),
                                          a11ySelectedValue: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                            })
                                          ]),
                                          a11yOptionsAvailable: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                            })
                                          ]),
                                          a11yInstructions: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                            })
                                          ]),
                                          lazyLoading: true,
                                          loadingType: "spinner",
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.Chat.comboBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Configuration" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.Chat.comboBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.MyFirstAIBot.Chat.comboBox1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstAIBot.Chat.container5$visibility",
                                    $widgetId: "p.MyFirstAIBot.Chat.container5$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "ConversationalUI.ChatContext_ProviderConfig_Active" }, { "type": "literal", "value": null }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.MyFirstAIBot.Chat.container5",
                                          $widgetId: "p.MyFirstAIBot.Chat.container5",
                                          class: "mx-name-container5",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $DataView,
                                              {
                                                key: "p.MyFirstAIBot.Chat.dataView5",
                                                $widgetId: "p.MyFirstAIBot.Chat.dataView5",
                                                class: "mx-name-dataView5 spacing-outer-bottom-medium form-vertical",
                                                style: void 0,
                                                tabIndex: void 0,
                                                object: MicroflowObjectProperty({
                                                  "dataSourceId": "p.216",
                                                  "scope": "p.MyFirstAIBot.Chat.dataView4",
                                                  "editable": true,
                                                  "operationId": "ilmqUf1S/FCmwP20WRQoHg",
                                                  "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }
                                                }),
                                                emptyMessage: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                body: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $FormGroup,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.referenceSelector2$formGroup",
                                                      $widgetId: "p.MyFirstAIBot.Chat.referenceSelector2$formGroup",
                                                      class: "mx-name-referenceSelector2 spacing-outer-bottom-none",
                                                      style: void 0,
                                                      control: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Combobox,
                                                          {
                                                            key: "p.MyFirstAIBot.Chat.referenceSelector2",
                                                            $widgetId: "p.MyFirstAIBot.Chat.referenceSelector2",
                                                            source: "context",
                                                            optionsSourceType: "association",
                                                            optionsSourceDatabaseDataSource: void 0,
                                                            optionsSourceDatabaseCaptionType: "attribute",
                                                            optionsSourceDatabaseDefaultValue: void 0,
                                                            attributeAssociation: AssociationProperty({
                                                              "type": "Reference",
                                                              "entity": "MyFirstAIBot.ContextExtension",
                                                              "path": "",
                                                              "attribute": "MyFirstAIBot.ContextExtension_Instruction",
                                                              "endpointEntity": "MyFirstAIBot.Instruction",
                                                              "selectableObjectsId": "p.28",
                                                              "scope": "p.MyFirstAIBot.Chat.dataView5",
                                                              "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                            }),
                                                            optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                                              "dataSourceId": "p.28",
                                                              "entity": "MyFirstAIBot.Instruction",
                                                              "scope": "p.MyFirstAIBot.Chat.dataView5",
                                                              "operationId": "YBSvIPiAPFaeItMOJYFlzg",
                                                              "sort": [],
                                                              "constraints": { "type": "function", "name": "or", "parameters": [{ "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "IsCustom", "context": "MyFirstAIBot.Instruction", "attributeType": "Boolean" }, { "type": "literal", "value": false }] }, { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "System.owner", "context": "MyFirstAIBot.Instruction", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" }] }] }
                                                            }),
                                                            optionsSourceAssociationCaptionType: "attribute",
                                                            optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                              "path": "",
                                                              "entity": "MyFirstAIBot.Instruction",
                                                              "attribute": "DisplayName",
                                                              "attributeType": "String",
                                                              "sortable": true,
                                                              "filterable": true,
                                                              "dataSourceId": "p.28",
                                                              "isList": false
                                                            }),
                                                            optionsSourceAssociationCaptionExpression: void 0,
                                                            optionsSourceStaticDataSource: [],
                                                            emptyOptionText: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            filterType: "contains",
                                                            noOptionsText: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            clearable: true,
                                                            optionsSourceAssociationCustomContentType: "no",
                                                            optionsSourceAssociationCustomContent: void 0,
                                                            optionsSourceDatabaseCustomContentType: "no",
                                                            staticDataSourceCustomContentType: "no",
                                                            showFooter: false,
                                                            menuFooterContent: void 0,
                                                            selectionMethod: "rowclick",
                                                            selectedItemsStyle: "text",
                                                            selectAllButton: false,
                                                            selectAllButtonCaption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                              })
                                                            ]),
                                                            readOnlyStyle: "text",
                                                            onChangeEvent: void 0,
                                                            onEnterEvent: void 0,
                                                            onLeaveEvent: void 0,
                                                            ariaRequired: false,
                                                            clearButtonAriaLabel: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                              })
                                                            ]),
                                                            removeValueAriaLabel: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                              })
                                                            ]),
                                                            a11ySelectedValue: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                              })
                                                            ]),
                                                            a11yOptionsAvailable: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                              })
                                                            ]),
                                                            a11yInstructions: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                              })
                                                            ]),
                                                            lazyLoading: true,
                                                            loadingType: "spinner",
                                                            tabIndex: void 0,
                                                            id: DerivedUniqueIdProperty({
                                                              "widgetId": "p.MyFirstAIBot.Chat.referenceSelector2"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Instructions" }, "args": {} }
                                                        })
                                                      ]),
                                                      labelFor: DerivedUniqueIdProperty({
                                                        "widgetId": "p.MyFirstAIBot.Chat.referenceSelector2"
                                                      }),
                                                      width: void 0,
                                                      orientation: "vertical",
                                                      hasError: ValidationProperty({
                                                        "inputWidgetId": "p.MyFirstAIBot.Chat.referenceSelector2"
                                                      })
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $DataView,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.dataView2",
                                                      $widgetId: "p.MyFirstAIBot.Chat.dataView2",
                                                      class: "mx-name-dataView2 form-horizontal",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      object: AssociationObjectProperty({
                                                        "dataSourceId": "p.222",
                                                        "scope": "p.MyFirstAIBot.Chat.dataView5",
                                                        "editable": true,
                                                        "path": "MyFirstAIBot.ContextExtension_Instruction/MyFirstAIBot.Instruction",
                                                        "operationId": "l/8cif6YAVKWOGlYIYfD7w"
                                                      }),
                                                      emptyMessage: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      body: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.MyFirstAIBot.Chat.container8$visibility",
                                                            $widgetId: "p.MyFirstAIBot.Chat.container8$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "dataView5", "path": "MyFirstAIBot.ContextExtension_Instruction" }, { "type": "literal", "value": null }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView2", "source": "object" }, "dataView5": { "widget": "p.MyFirstAIBot.Chat.dataView5", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.MyFirstAIBot.Chat.container8",
                                                                  $widgetId: "p.MyFirstAIBot.Chat.container8",
                                                                  class: "mx-name-container8 textinput-no-padding",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.MyFirstAIBot.Chat.textArea2$formGroup",
                                                                        $widgetId: "p.MyFirstAIBot.Chat.textArea2$formGroup",
                                                                        class: "mx-name-textArea2 spacing-outer-bottom-none spacing-outer-top-medium mx-textarea",
                                                                        style: void 0,
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $TextArea,
                                                                            {
                                                                              key: "p.MyFirstAIBot.Chat.textArea2",
                                                                              $widgetId: "p.MyFirstAIBot.Chat.textArea2",
                                                                              inputValue: AttributeProperty({
                                                                                "scope": "p.MyFirstAIBot.Chat.dataView2",
                                                                                "path": "",
                                                                                "entity": "MyFirstAIBot.Instruction",
                                                                                "attribute": "Instruction",
                                                                                "onChange": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "p.MyFirstAIBot.Chat.dataView2", "source": "object" } }, "config": { "operationId": "rujWornrYlmUJBZrE5lMRQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                                "isList": false,
                                                                                "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsCustom" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView2", "source": "object" } } },
                                                                                "validation": null
                                                                              }),
                                                                              counterMessage: void 0,
                                                                              maxLength: void 0,
                                                                              numberOfLines: void 0,
                                                                              autoGrow: true,
                                                                              placeholder: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              readOnlyStyle: "text",
                                                                              textTooLongMessage: void 0,
                                                                              onEnter: void 0,
                                                                              onLeave: void 0,
                                                                              ariaLabel: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              ariaRequired: void 0,
                                                                              submitWhileEditing: false,
                                                                              submitDelay: 300,
                                                                              tabIndex: void 0,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.MyFirstAIBot.Chat.textArea2"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: void 0,
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.MyFirstAIBot.Chat.textArea2"
                                                                        }),
                                                                        width: 3,
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.MyFirstAIBot.Chat.textArea2"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ],
                                                      hideFooter: false,
                                                      footer: void 0
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.actionButton2$visibility",
                                                      $widgetId: "p.MyFirstAIBot.Chat.actionButton2$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.MyFirstAIBot.Chat.actionButton2",
                                                            $widgetId: "p.MyFirstAIBot.Chat.actionButton2",
                                                            buttonId: "p.MyFirstAIBot.Chat.actionButton2",
                                                            class: "mx-name-actionButton2 pull-right",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "link",
                                                            role: "button",
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Create custom.." }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "ContextExtension": { "widget": "p.MyFirstAIBot.Chat.dataView5", "source": "object" } }, "config": { "operationId": "9BYJWXZpOFqESz3Q+LUp2Q", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ],
                                                hideFooter: false,
                                                footer: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Fragment,
                                              {
                                                key: "p.MyFirstAIBot.Chat.snippetCall3",
                                                $widgetId: "p.MyFirstAIBot.Chat.snippetCall3",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "ChatContext" }, { "type": "literal", "value": null }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $DataView,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                            $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                            class: "mx-name-dataView1 form-vertical",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            object: MicroflowObjectProperty({
                                                              "dataSourceId": "p.235",
                                                              "scope": "$ChatContext",
                                                              "editable": true,
                                                              "operationId": "iXa5MJ4DDlupT8C/5vT4VA",
                                                              "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }
                                                            }),
                                                            emptyMessage: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            body: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container15",
                                                                  $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container15",
                                                                  class: "mx-name-container15",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container1",
                                                                        class: "mx-name-container1 form-group no-columns row-left spacing-outer-bottom-none",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.text1",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.text1",
                                                                              class: "mx-name-text1 control-label",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Temperature" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ActionButton,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1",
                                                                                    buttonId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1",
                                                                                    class: "mx-name-actionButton1 btn-sm spacing-outer-left",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    renderType: "link",
                                                                                    role: "button",
                                                                                    buttonClass: "btn-default",
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    tooltip: TextProperty({
                                                                                      "value": selectTranslation([
                                                                                        "Controls randomness. Lowering the temperature means that the model will produce more repetitive and deterministic responses. Increasing the temperature will result in more unexpected or creative responses."
                                                                                      ])
                                                                                    }),
                                                                                    icon: WebIconProperty({
                                                                                      "icon": { "type": "glyph", "iconClass": "glyphicon-info-sign" }
                                                                                    }),
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNwU6JsCtFehGaPFjDkTYg", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                      "abortOnServerValidation": true
                                                                                    })
                                                                                  }
                                                                                )
                                                                              ]
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1$formGroup",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1$formGroup",
                                                                        class: "mx-name-slider1",
                                                                        style: void 0,
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Slider,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1",
                                                                              valueAttribute: AttributeProperty({
                                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                                                "path": "",
                                                                                "entity": "ConversationalUI.AdvancedSettings",
                                                                                "attribute": "Temperature",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false
                                                                              }),
                                                                              advanced: false,
                                                                              minValueType: "dynamic",
                                                                              staticMinimumValue: DecimalProperty({
                                                                                "value": "0"
                                                                              }),
                                                                              minAttribute: AttributeProperty({
                                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                                                "path": "",
                                                                                "entity": "ConversationalUI.AdvancedSettings",
                                                                                "attribute": "TemperatureMin",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false
                                                                              }),
                                                                              expressionMinimumValue: void 0,
                                                                              maxValueType: "dynamic",
                                                                              staticMaximumValue: DecimalProperty({
                                                                                "value": "100"
                                                                              }),
                                                                              maxAttribute: AttributeProperty({
                                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                                                "path": "",
                                                                                "entity": "ConversationalUI.AdvancedSettings",
                                                                                "attribute": "TemperatureMax",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false
                                                                              }),
                                                                              expressionMaximumValue: void 0,
                                                                              stepSizeType: "static",
                                                                              stepValue: DecimalProperty({
                                                                                "value": "0.01"
                                                                              }),
                                                                              expressionStepSize: void 0,
                                                                              showTooltip: true,
                                                                              tooltipType: "value",
                                                                              tooltip: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              tooltipAlwaysVisible: false,
                                                                              noOfMarkers: 0,
                                                                              decimalPlaces: 0,
                                                                              orientation: "horizontal",
                                                                              heightUnit: "percentage",
                                                                              height: 100,
                                                                              onChange: ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNwU6JsCtFehGaPFjDkTYg", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                                "argumentTypes": {}
                                                                              }),
                                                                              tabIndex: void 0,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: void 0,
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                        }),
                                                                        width: void 0,
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                        })
                                                                      }
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              )
                                                            ],
                                                            hideFooter: false,
                                                            footer: void 0
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  )
                                                ]
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.MyFirstAIBot.Chat.dataView3",
                              $widgetId: "p.MyFirstAIBot.Chat.dataView3",
                              class: "mx-name-dataView3 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.248",
                                "scope": "$ChatContext",
                                "editable": true,
                                "path": "ConversationalUI.ChatContext_ProviderConfig_Active/MyFirstAIBot.BotConfig",
                                "operationId": "F0YETRRL8V2l39VkazMC+A"
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MyFirstAIBot.Chat.container6$visibility",
                                    $widgetId: "p.MyFirstAIBot.Chat.container6$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView3", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.MyFirstAIBot.Chat.container6",
                                          $widgetId: "p.MyFirstAIBot.Chat.container6",
                                          class: "mx-name-container6 card margin-bottom-0",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.MyFirstAIBot.Chat.text2",
                                                $widgetId: "p.MyFirstAIBot.Chat.text2",
                                                class: "mx-name-text2 text-semibold",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Ask the document" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.MyFirstAIBot.Chat.text30$visibility",
                                                $widgetId: "p.MyFirstAIBot.Chat.text30$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" }] } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView3", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.text30",
                                                      $widgetId: "p.MyFirstAIBot.Chat.text30",
                                                      class: "mx-name-text30",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Be aware that only .pdf files can be uploaded for OpenAI or Mistral models." }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "p"
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $DataView,
                                              {
                                                key: "p.MyFirstAIBot.Chat.dataView1",
                                                $widgetId: "p.MyFirstAIBot.Chat.dataView1",
                                                class: "mx-name-dataView1 form-vertical",
                                                style: void 0,
                                                tabIndex: void 0,
                                                object: MicroflowObjectProperty({
                                                  "dataSourceId": "p.259",
                                                  "scope": "p.MyFirstAIBot.Chat.dataView3",
                                                  "editable": true,
                                                  "operationId": "NwzrlvysTVWzQmpU6ZpDZA",
                                                  "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }
                                                }),
                                                emptyMessage: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                body: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.container14$visibility",
                                                      $widgetId: "p.MyFirstAIBot.Chat.container14$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": ">", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "1" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "dataView3", "path": "Architecture" }, { "type": "literal", "value": "Azure" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "dataView3", "path": "Architecture" }, { "type": "literal", "value": "Mistral" }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" }, "dataView3": { "widget": "p.MyFirstAIBot.Chat.dataView3", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.MyFirstAIBot.Chat.container14",
                                                            $widgetId: "p.MyFirstAIBot.Chat.container14",
                                                            class: "mx-name-container14 alert alert-info",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.MyFirstAIBot.Chat.text32",
                                                                  $widgetId: "p.MyFirstAIBot.Chat.text32",
                                                                  class: "mx-name-text32 alert-description",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "The selected model only supports one document, thus only the first will be taken into account." }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "p"
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.actionButton5$visibility",
                                                      $widgetId: "p.MyFirstAIBot.Chat.actionButton5$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "SupportsMultipleFiles" }, "then": { "type": "function", "name": "<", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "5" }] }, "else": { "type": "literal", "value": false } } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.MyFirstAIBot.Chat.actionButton5",
                                                            $widgetId: "p.MyFirstAIBot.Chat.actionButton5",
                                                            buttonId: "p.MyFirstAIBot.Chat.actionButton5",
                                                            class: "mx-name-actionButton5 spacing-outer-bottom-medium spacing-inner-top",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "link",
                                                            role: "button",
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Upload File" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: WebIconProperty({
                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-move-up" }
                                                            }),
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "fecU+SyJ4lyIsbDy6T4g6A", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                              "abortOnServerValidation": true
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.listView1$visibility",
                                                      $widgetId: "p.MyFirstAIBot.Chat.listView1$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": ">", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ListView,
                                                          {
                                                            key: "p.MyFirstAIBot.Chat.listView1",
                                                            $widgetId: "p.MyFirstAIBot.Chat.listView1",
                                                            class: "mx-name-listView1 listview-stylingless",
                                                            style: void 0,
                                                            listValue: MicroflowObjectListProperty({
                                                              "argMap": { "DocumentDisplay": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } },
                                                              "dataSourceId": "p.35",
                                                              "entity": "MyFirstAIBot.AttachedDocument",
                                                              "scope": "p.MyFirstAIBot.Chat.dataView1",
                                                              "operationId": "OaCDFTzYWF2vZHxTQSUfKw"
                                                            }),
                                                            itemTemplate: TemplatedWidgetProperty({
                                                              "dataSourceId": "p.35",
                                                              "editable": false,
                                                              "children": () => [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Div,
                                                                  {
                                                                    key: "p.MyFirstAIBot.Chat.layoutGrid2",
                                                                    $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2",
                                                                    class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom",
                                                                    style: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Div,
                                                                        {
                                                                          key: "p.MyFirstAIBot.Chat.layoutGrid2$row0.271",
                                                                          $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0.271",
                                                                          class: "row",
                                                                          style: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Div,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.272",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.272",
                                                                                class: "col-lg-auto col-md col",
                                                                                style: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $ConditionalVisibilityWrapper,
                                                                                    {
                                                                                      key: "p.MyFirstAIBot.Chat.image1$visibility",
                                                                                      $widgetId: "p.MyFirstAIBot.Chat.image1$visibility",
                                                                                      visible: ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "endsWith", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Name" }, { "type": "literal", "value": ".pdf" }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" } } }
                                                                                      }),
                                                                                      contents: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Image,
                                                                                          {
                                                                                            key: "p.MyFirstAIBot.Chat.image1",
                                                                                            $widgetId: "p.MyFirstAIBot.Chat.image1",
                                                                                            datasource: "icon",
                                                                                            imageObject: void 0,
                                                                                            defaultImageDynamic: void 0,
                                                                                            imageUrl: selectTranslation([
                                                                                              ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                              })
                                                                                            ]),
                                                                                            imageIcon: WebIconProperty({
                                                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-file-pdf" }
                                                                                            }),
                                                                                            isBackgroundImage: false,
                                                                                            children: void 0,
                                                                                            onClickType: "action",
                                                                                            onClick: void 0,
                                                                                            alternativeText: selectTranslation([
                                                                                              ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                              })
                                                                                            ]),
                                                                                            widthUnit: "auto",
                                                                                            width: 100,
                                                                                            heightUnit: "auto",
                                                                                            height: 100,
                                                                                            iconSize: 14,
                                                                                            displayAs: "fullImage",
                                                                                            responsive: true,
                                                                                            class: "mx-name-image1",
                                                                                            style: void 0,
                                                                                            tabIndex: void 0
                                                                                          }
                                                                                        )
                                                                                      ]
                                                                                    }
                                                                                  ),
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $ConditionalVisibilityWrapper,
                                                                                    {
                                                                                      key: "p.MyFirstAIBot.Chat.image2$visibility",
                                                                                      $widgetId: "p.MyFirstAIBot.Chat.image2$visibility",
                                                                                      visible: ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "function", "name": "endsWith", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Name" }, { "type": "literal", "value": ".pdf" }] }] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" } } }
                                                                                      }),
                                                                                      contents: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Image,
                                                                                          {
                                                                                            key: "p.MyFirstAIBot.Chat.image2",
                                                                                            $widgetId: "p.MyFirstAIBot.Chat.image2",
                                                                                            datasource: "icon",
                                                                                            imageObject: void 0,
                                                                                            defaultImageDynamic: void 0,
                                                                                            imageUrl: selectTranslation([
                                                                                              ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                              })
                                                                                            ]),
                                                                                            imageIcon: WebIconProperty({
                                                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-document" }
                                                                                            }),
                                                                                            isBackgroundImage: false,
                                                                                            children: void 0,
                                                                                            onClickType: "action",
                                                                                            onClick: void 0,
                                                                                            alternativeText: selectTranslation([
                                                                                              ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                              })
                                                                                            ]),
                                                                                            widthUnit: "auto",
                                                                                            width: 100,
                                                                                            heightUnit: "auto",
                                                                                            height: 100,
                                                                                            iconSize: 14,
                                                                                            displayAs: "fullImage",
                                                                                            responsive: true,
                                                                                            class: "mx-name-image2",
                                                                                            style: void 0,
                                                                                            tabIndex: void 0
                                                                                          }
                                                                                        )
                                                                                      ]
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              }
                                                                            ),
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Div,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.279",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.279",
                                                                                class: "col-lg col-md col",
                                                                                style: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Text,
                                                                                    {
                                                                                      key: "p.MyFirstAIBot.Chat.text1",
                                                                                      $widgetId: "p.MyFirstAIBot.Chat.text1",
                                                                                      class: "mx-name-text1",
                                                                                      style: void 0,
                                                                                      caption: selectTranslation([
                                                                                        ExpressionProperty({
                                                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" } } }
                                                                                        })
                                                                                      ]),
                                                                                      renderMode: "span"
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              }
                                                                            ),
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Div,
                                                                              {
                                                                                key: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column2",
                                                                                $widgetId: "p.MyFirstAIBot.Chat.layoutGrid2$row0$column2",
                                                                                class: "col-lg-auto col-md col",
                                                                                style: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $ConditionalVisibilityWrapper,
                                                                                    {
                                                                                      key: "p.MyFirstAIBot.Chat.actionButton3$visibility",
                                                                                      $widgetId: "p.MyFirstAIBot.Chat.actionButton3$visibility",
                                                                                      visible: ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                                                      }),
                                                                                      contents: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $ActionButton,
                                                                                          {
                                                                                            key: "p.MyFirstAIBot.Chat.actionButton3",
                                                                                            $widgetId: "p.MyFirstAIBot.Chat.actionButton3",
                                                                                            buttonId: "p.MyFirstAIBot.Chat.actionButton3",
                                                                                            class: "mx-name-actionButton3 spacing-outer-right spacing-outer-left pull-right",
                                                                                            style: void 0,
                                                                                            tabIndex: void 0,
                                                                                            renderType: "link",
                                                                                            role: "button",
                                                                                            buttonClass: "btn-default",
                                                                                            caption: selectTranslation([
                                                                                              ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                              })
                                                                                            ]),
                                                                                            tooltip: TextProperty({
                                                                                              "value": selectTranslation([
                                                                                                "Remove PDF from chat"
                                                                                              ])
                                                                                            }),
                                                                                            icon: WebIconProperty({
                                                                                              "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                                                            }),
                                                                                            action: ActionProperty({
                                                                                              "action": { "type": "callMicroflow", "argMap": { "AttachedDocument": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" }, "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "dBiexq9fTlWWTqYJ2QA5Ng", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure to remove the file from the chat?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                              "abortOnServerValidation": true
                                                                                            })
                                                                                          }
                                                                                        )
                                                                                      ]
                                                                                    }
                                                                                  )
                                                                                ]
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      )
                                                                    ]
                                                                  }
                                                                )
                                                              ]
                                                            }),
                                                            onClick: void 0,
                                                            pageSize: 10
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.container11$visibility",
                                                      $widgetId: "p.MyFirstAIBot.Chat.container11$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ContentLength" }, { "type": "literal", "value": null }] }, "then": { "type": "function", "name": ">=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ContentLength" }, { "type": "literalNumeric", "value": "25000" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.MyFirstAIBot.Chat.container11",
                                                            $widgetId: "p.MyFirstAIBot.Chat.container11",
                                                            class: "mx-name-container11 alert alert-warning",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.MyFirstAIBot.Chat.text4",
                                                                  $widgetId: "p.MyFirstAIBot.Chat.text4",
                                                                  class: "mx-name-text4 alert-title",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Long PDF" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "h5"
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.MyFirstAIBot.Chat.text5",
                                                                  $widgetId: "p.MyFirstAIBot.Chat.text5",
                                                                  class: "mx-name-text5 alert-description",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Be aware that chatting with long PDFs might decrease the chat experience (reducing the accuracy or preventing the model to generate a response)." }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "span"
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.MyFirstAIBot.Chat.container9",
                                                      $widgetId: "p.MyFirstAIBot.Chat.container9",
                                                      class: "mx-name-container9 info spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: void 0,
                                                      ariaHidden: false
                                                    }
                                                  )
                                                ],
                                                hideFooter: false,
                                                footer: void 0
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              hideFooter: false,
                              footer: void 0
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ],
      hideFooter: true,
      footer: void 0
    }
  )
]);
const title = selectTranslation([
  "Chat"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar custom-height-fix";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.Atlas_TopBar.Main": region$Main
};

export { classes, content, style, title };
