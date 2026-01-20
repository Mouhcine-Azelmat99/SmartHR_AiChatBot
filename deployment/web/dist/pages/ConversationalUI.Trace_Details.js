import { reactExports, jsxRuntimeExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { Icon, ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-BG_DSlew.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-BXvprvCj.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-viDAZSOp.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-D6HpETLo.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import '../Fragment-C3M8OT7J.js';
import { ImageWidgetModule } from '../Image-CwuIpbpH.js';
import { ListView } from '../ListView-CtnOFRNF.js';
import { Text } from '../Text-5NmEA291.js';
import { TooltipWidgetModule } from '../Tooltip-BBhx9N9q.js';
import { content as content$1 } from '../ConversationalUI.Layout_MasterBase-Ampsb9an.js';
import { require$$0 } from '../JS_CopyToClipboard-B7E1Uot7.js';
import { require$$0 as require$$0$1 } from '../Wait-B4JnrbPE.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../BMuJrVqQ-C_cqhczO.js';
import '../CxMFexew-C1GWnP8G.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../index-CgEeXS6W.js';
import '../InlineText-CcVi-f0x.js';
import '../Atlas_Core.Atlas_TopBar-Cl1SnfwM.js';
import '../ListExpressionProperty-Blkk1P49.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../Div-C2k8MuH7.js';
import '../SidebarToggle-U7U0qqOC.js';
import '../D7vCi_Rn-Dtbqkh4B.js';
import '../CGlz0zm4-CawGDyow.js';
import '../ScrollContainer-B-pXvHDA.js';
import '../MenuBar-rOfPUVLa.js';
import '../index-DpgUatDd.js';

function u(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var h,m={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var f,g=(h||(h=1,f=m,function(){var e={}.hasOwnProperty;function n(){for(var e="",n=0;n<arguments.length;n++){var o=arguments[n];o&&(e=r(e,t(o)));}return e}function t(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return "";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var o="";for(var a in t)e.call(t,a)&&t[a]&&(o=r(o,a));return o}function r(e,n){return n?e?e+" "+n:e+n:e}f.exports?(n.default=n,f.exports=n):window.classNames=n;}()),m.exports),v=u(g);const p={Enter:"Enter"," ":"Space",Home:"Home",End:"End",ArrowUp:"ArrowUp",ArrowDown:"ArrowDown",ArrowLeft:"ArrowLeft",ArrowRight:"ArrowRight"};const C=e=>reactExports.useCallback(n=>{var t;if(function(e){return e.currentTarget===e.target}(n)&&(t=n.key,Object.hasOwn(p,t))){const t=e[p[n.key]];if(!t)return;n.stopPropagation(),n.preventDefault(),t(n);}},[e]);const N=n=>{let{className:t}=n;return jsxRuntimeExports.jsx("svg",{className:t,"aria-hidden":!0,width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg",children:jsxRuntimeExports.jsx("path",{d:"M1.64598 4.64601C1.69242 4.59945 1.7476 4.5625 1.80834 4.5373C1.86909 4.51209 1.93421 4.49911 1.99998 4.49911C2.06575 4.49911 2.13087 4.51209 2.19161 4.5373C2.25236 4.5625 2.30753 4.59945 2.35398 4.64601L7.99998 10.293L13.646 4.64601C13.6925 4.59952 13.7477 4.56264 13.8084 4.53749C13.8691 4.51233 13.9342 4.49938 14 4.49938C14.0657 4.49938 14.1308 4.51233 14.1916 4.53749C14.2523 4.56264 14.3075 4.59952 14.354 4.64601C14.4005 4.6925 14.4373 4.74769 14.4625 4.80842C14.4877 4.86916 14.5006 4.93426 14.5006 5.00001C14.5006 5.06575 14.4877 5.13085 14.4625 5.19159C14.4373 5.25233 14.4005 5.30752 14.354 5.35401L8.35398 11.354C8.30753 11.4006 8.25236 11.4375 8.19161 11.4627C8.13087 11.4879 8.06575 11.5009 7.99998 11.5009C7.93421 11.5009 7.86909 11.4879 7.80834 11.4627C7.7476 11.4375 7.69242 11.4006 7.64598 11.354L1.64598 5.35401C1.59942 5.30756 1.56247 5.25239 1.53727 5.19164C1.51206 5.1309 1.49908 5.06578 1.49908 5.00001C1.49908 4.93424 1.51206 4.86912 1.53727 4.80837C1.56247 4.74763 1.59942 4.69245 1.64598 4.64601V4.64601Z"})})},I=n=>{let{icon:t}=n,r=t;return t&&"image"!==t.type&&(r={...t,iconClass:v(t.iconClass,"widget-tree-node-branch-header-icon")}),jsxRuntimeExports.jsx(Icon,{icon:r})};const E=reactExports.createContext({level:0,informParentOfChildNodes:()=>null}),w="widget-tree-node-body",A=e=>"".concat(e,"TreeNodeBranchHeader"),L=e=>"".concat(e,"TreeNodeBranchBody");function S(i){let{animateTreeNodeContent:s,changeFocus:u,children:h,headerContent:m,iconPlacement:f,id:g,isUserDefinedLeafNode:p,openNodeOn:N,renderHeaderIcon:I,startExpanded:S}=i;const{level:b}=reactExports.useContext(E),D=reactExports.useRef(null),T=reactExports.useRef(null),[O,y]=reactExports.useState(p||!h),[P,x]=reactExports.useState(S?"EXPANDED":"COLLAPSED_WITH_JS"),{isAnimating:_,captureElementHeight:H,animateTreeNodeContent:R,cleanupAnimation:k}=(e=>{const n=reactExports.useRef(void 0),[r,i]=reactExports.useState(!1);return {isAnimating:r,captureElementHeight:reactExports.useCallback(()=>{var t,r;n.current=null!==(t=null===(r=e.current)||void 0===r?void 0:r.getBoundingClientRect().height)&&void 0!==t?t:0;},[]),animateTreeNodeContent:reactExports.useCallback(()=>{if(e.current&&void 0!==n.current&&!Number.isNaN(n.current)){const t=e.current.getBoundingClientRect().height;if(t-n.current!==0){i(!0),e.current.style.height="".concat(n.current,"px");const r=setTimeout(()=>{e.current.style.height="".concat(t,"px"),n.current=t;},1);return ()=>clearTimeout(r)}}},[]),cleanupAnimation:reactExports.useCallback(()=>{var n;i(!1),null===(n=e.current)||void 0===n||n.style.removeProperty("height");},[])}})(T),X=reactExports.useCallback(e=>{var n,t,r;const o=e.target;return !(null!==(n=D.current)&&void 0!==n&&n.isSameNode(o)||null!==(t=D.current)&&void 0!==t&&null!==(t=t.firstElementChild)&&void 0!==t&&t.contains(o)||null!==(r=D.current)&&void 0!==r&&null!==(r=r.lastElementChild)&&void 0!==r&&r.isSameNode(o))},[]),U=reactExports.useCallback(e=>{X(e)||O||(H(),x(e=>"LOADING"===e?e:"COLLAPSED_WITH_JS"===e?"LOADING":"COLLAPSED_WITH_CSS"===e?"EXPANDED":"COLLAPSED_WITH_CSS"));},[H,X,O]),W=((e,n,o,a,i)=>{const d=reactExports.useMemo(()=>({Enter:e,Space:e,Home:e=>n(e.currentTarget,"FIRST"),End:e=>n(e.currentTarget,"LAST"),ArrowUp:e=>n(e.currentTarget,"PREVIOUS","HORIZONTAL"),ArrowDown:e=>n(e.currentTarget,"NEXT","HORIZONTAL"),ArrowRight:t=>{"COLLAPSED_WITH_CSS"===o||"COLLAPSED_WITH_JS"===o?e(t):("EXPANDED"===o||a)&&n(t.currentTarget,"NEXT","VERTICAL");},ArrowLeft:t=>{"COLLAPSED_WITH_CSS"===o||"COLLAPSED_WITH_JS"===o||a?n(t.currentTarget,"PREVIOUS","VERTICAL"):"EXPANDED"===o&&e(t);}}),[e,n,o,a]),c=C(d);return reactExports.useCallback(e=>{if(!i(e))return c(e)},[i,c])})(U,u,P,O,X),B={"aria-expanded":"EXPANDED"===P,role:"treeitem",tabIndex:0};const V="iconClick"===N,G="headerClick"===N,j=V?U:void 0,J=G?U:void 0,{hasNestedTreeNode:F}=(e=>({hasNestedTreeNode:reactExports.useCallback(()=>{var n,t;return null===(n=null===(t=e.current)||void 0===t||null===(t=t.lastElementChild)||void 0===t?void 0:t.className.includes("widget-tree-node"))||void 0===n||n},[])}))(T);return reactExports.useLayoutEffect(()=>{if(s&&"LOADING"!==P){const e=R();if(e)return e}},[R,s,P]),reactExports.useEffect(()=>{y(p||!h);},[h,p]),reactExports.useEffect(()=>{"LOADING"===P&&(F()||x("EXPANDED"));},[F,P]),jsxRuntimeExports.jsxs("li",{className:"widget-tree-node-branch",onKeyDown:W,ref:D,...B,children:[jsxRuntimeExports.jsxs("span",{className:v("widget-tree-node-branch-header",{"widget-tree-node-branch-header-clickable":!O&&G,"widget-tree-node-branch-header-reversed":"left"===f}),id:A(g),onClick:J,children:[jsxRuntimeExports.jsx("span",{className:"widget-tree-node-branch-header-value",children:m}),!O&&"no"!==f&&jsxRuntimeExports.jsx("span",{className:v("widget-tree-node-branch-header-icon-container",{"widget-tree-node-branch-header-clickable":!O&&V}),onClick:j,children:I(P,f)})]}),(!O&&"COLLAPSED_WITH_JS"!==P||_)&&jsxRuntimeExports.jsx(E.Provider,{value:{level:b+1,informParentOfChildNodes:e=>{void 0!==e&&(x(e=>"LOADING"===e?"EXPANDED":e),y(n=>0===e&&!n||!(e>0&&n)&&n));}},children:jsxRuntimeExports.jsx("div",{className:v(w,{"widget-tree-node-branch-hidden":"COLLAPSED_WITH_CSS"===P&&!_,"widget-tree-node-branch-loading":"LOADING"===P}),id:L(g),"aria-hidden":"EXPANDED"!==P,ref:T,onTransitionEnd:k,children:h})})]})}function b(n){var r;let{class:a,items:i,style:l,isUserDefinedLeafNode:s,showCustomIcon:u,startExpanded:h,iconPlacement:m,expandedIcon:f,collapsedIcon:g,tabIndex:p,animateIcon:C,animateTreeNodeContent:A,openNodeOn:L}=n;const{level:b}=reactExports.useContext(E),[D,T]=function(){const[e,n]=reactExports.useState(null);return [e,reactExports.useCallback(e=>{e&&n(e);},[])]}(),O=reactExports.useCallback((n,t)=>function(n,t,r){if("LOADING"===n)return jsxRuntimeExports.jsx("img",{src:"widgets/com/mendix/widget/web/treenode/assets/72df3b1b0b37a958.svg",className:"widget-tree-node-loading-spinner",alt:"","aria-hidden":!0});const{animateIcon:o,collapsedIcon:a,expandedIcon:i,showCustomIcon:d}=r,c="EXPANDED"===n;return d?jsxRuntimeExports.jsx(I,{icon:c?i:a}):jsxRuntimeExports.jsx(N,{className:v("widget-tree-node-branch-header-icon",{"widget-tree-node-branch-header-icon-animated":o,"widget-tree-node-branch-header-icon-collapsed-left":!c&&"left"===t,"widget-tree-node-branch-header-icon-collapsed-right":!c&&"right"===t})})}(n,t,{animateIcon:C,collapsedIcon:g,expandedIcon:f,showCustomIcon:u}),[g,f,u,C]),y=reactExports.useCallback(()=>{var e,n;return null!==(e=null==D||null===(n=D.parentElement)||void 0===n?void 0:n.className.includes(w))&&void 0!==e&&e},[D]);((e,n)=>{const{level:t,informParentOfChildNodes:r}=reactExports.useContext(E);reactExports.useEffect(()=>{t>0&&n()&&r(e);},[n,r,t,e]);})(null!==(r=null==i?void 0:i.length)&&void 0!==r?r:0,y);const P=reactExports.useCallback((e,n,t)=>{if(e&&e instanceof Element){const r=e=>{if(e){const n=Array.from(e.querySelectorAll("li.widget-tree-node-branch")),t=Array.from(e.querySelectorAll(".widget-tree-node-body[aria-hidden=true]"));return n.filter(e=>!t.some(n=>n.contains(e)))}return []},o=Array.from(document.body.querySelectorAll(".widget-tree-node[role=tree]")).find(n=>n.contains(e));if(!o)return;const a=r(o),i=a.length;if(0===i)return;const d=a.findIndex(n=>n.isSameNode(e));switch(n){case"FIRST":a[0].focus();break;case"LAST":a[i-1].focus();break;case"PREVIOUS":{if("VERTICAL"===t){const n=r(document).filter(n=>{var t;return null===(t=n.lastElementChild)||void 0===t?void 0:t.contains(e)});return void(n.length>0&&n[n.length-1].focus())}const n=d-1,o=Math.max(n,0);o!==d&&a[o].focus();break}case"NEXT":{if("VERTICAL"===t){const n=r(e.lastElementChild);return void(n.length>0&&n[0].focus())}const n=d+1,o=Math.min(n,i-1);o!==d&&a[o].focus();break}}}},[]);return null===i||0===i.length?null:jsxRuntimeExports.jsx("ul",{className:v("widget-tree-node",a),style:l,ref:T,"data-focusindex":p||0,role:0===b?"tree":"group",children:i.map(n=>{let{id:t,headerContent:r,bodyContent:o}=n;return jsxRuntimeExports.jsx(S,{id:t,headerContent:r,isUserDefinedLeafNode:s,startExpanded:h,iconPlacement:m,renderHeaderIcon:O,changeFocus:P,animateTreeNodeContent:A,openNodeOn:L,children:o},t)})})}function D(n){var t,r;const{datasource:a}=n,[i,d]=reactExports.useState([]);reactExports.useEffect(()=>{"available"===a.status&&(a.items&&a.items.length?d(a.items.map(e=>function(e,n){var t,r,o;return {id:e.id,headerContent:"text"===n.headerType?null===(t=n.headerCaption)||void 0===t?void 0:t.get(e).value:null===(r=n.headerContent)||void 0===r?void 0:r.get(e),bodyContent:null===(o=n.children)||void 0===o?void 0:o.get(e)}}(e,n))):d([]));},[a.status,a.items]);const l="available"===(null===(t=n.expandedIcon)||void 0===t?void 0:t.status)?n.expandedIcon.value:void 0,s="available"===(null===(r=n.collapsedIcon)||void 0===r?void 0:r.status)?n.collapsedIcon.value:void 0;return jsxRuntimeExports.jsx(b,{class:n.class,style:n.style,items:i,isUserDefinedLeafNode:!n.hasChildren,startExpanded:n.startExpanded,showCustomIcon:Boolean(n.expandedIcon)||Boolean(n.collapsedIcon),iconPlacement:n.showIcon,expandedIcon:l,collapsedIcon:s,tabIndex:n.tabIndex,animateIcon:n.animate&&n.animateIcon,animateTreeNodeContent:n.animate,openNodeOn:n.openNodeOn})}

var TreeNodeWidgetModule = /*#__PURE__*/Object.freeze({
	__proto__: null,
	TreeNode: D
});

const ACT_CopyTracePageURL = {
  "name": "ConversationalUI.ACT_CopyTracePageURL",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "7a90cf06-d306-4004-813c-ca4198bd8fea",
      "operationId": "XULwyRt2VFW6fdLPDy2kjA",
      "parameters": [
        {
          "name": "Trace",
          "value": {
            "type": "variable",
            "variable": "Trace"
          },
          "kind": "object"
        }
      ],
      "outputVar": "TracePageURL"
    },
    {
      "type": "javaScriptActionCall",
      "label": "60ad1a59-9d07-46c4-a8eb-308b34e938c0",
      "action": () => require$$0.JS_CopyToClipboard,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "TracePageURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "4f27d178-f09f-481d-b986-dba712ef86c6",
      "inputVar": "TraceView",
      "member": "ShowCopyChecked",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "d7b05e6f-1d07-471b-8aa7-89c9b2438016",
      "action": () => require$$0$1.Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "1200"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "c939b319-5ec6-442b-b907-1194d2bda57c",
      "inputVar": "TraceView",
      "member": "ShowCopyChecked",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "3629678c-1acb-489f-8ad4-15a06baa6d0b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const TreeNode = Object.getOwnPropertyDescriptor(TreeNodeWidgetModule, "TreeNode")?.value || Object.getOwnPropertyDescriptor(TreeNodeWidgetModule, "default")?.value;
const { $DataView, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Fragment, $Tooltip, $Image, $ListView, $TreeNode } = asPluginWidgets({ DataView, Container, Text, ConditionalVisibilityWrapper, ActionButton, Fragment, Tooltip, Image, ListView, TreeNode });
addEnumerations({
  "ConversationalUI.ENUM_SpanType": [
    [
      "Agent",
      selectTranslation([
        "Agent"
      ])
    ],
    [
      "ModelCall",
      selectTranslation([
        "ModelCall"
      ])
    ],
    [
      "ToolCall",
      selectTranslation([
        "ToolCall"
      ])
    ],
    [
      "KnowledgeBaseCall",
      selectTranslation([
        "KnowledgeBaseCall"
      ])
    ],
    [
      "MCPCall",
      selectTranslation([
        "MCPCall"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.ConversationalUI.Trace_Details.dataView6",
      $widgetId: "p.ConversationalUI.Trace_Details.dataView6",
      class: "mx-name-dataView6 height-full form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.25",
        "scope": "$Trace",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $DataView,
          {
            key: "p.ConversationalUI.Trace_Details.dataView3",
            $widgetId: "p.ConversationalUI.Trace_Details.dataView3",
            class: "mx-name-dataView3 height-full form-vertical",
            style: void 0,
            tabIndex: void 0,
            object: MicroflowObjectProperty({
              "dataSourceId": "p.28",
              "scope": "p.ConversationalUI.Trace_Details.dataView6",
              "editable": true,
              "operationId": "IJvfjmAa/VK/VdbfhbKwrg",
              "argMap": {}
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
                  key: "p.ConversationalUI.Trace_Details.container5",
                  $widgetId: "p.ConversationalUI.Trace_Details.container5",
                  class: "mx-name-container5 traces-page-content-container spacing-inner-bottom-large",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Trace_Details.container96",
                        $widgetId: "p.ConversationalUI.Trace_Details.container96",
                        class: "mx-name-container96 traces-breadcrumb row-left-aligned spacing-outer-bottom-small",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Details.container22",
                              $widgetId: "p.ConversationalUI.Trace_Details.container22",
                              class: "mx-name-container22 spacing-inner-bottom-smallest",
                              style: void 0,
                              tabIndex: void 0,
                              renderMode: "div",
                              onClick: ActionProperty({
                                "action": { "type": "openPage", "argMap": {}, "config": { "name": "ConversationalUI/Trace_Overview.page.xml", "location": "content", "allowedRoles": ["Administrator"], "numberOfPagesToClose": { "type": "literalNumeric", "value": "1" } }, "disabledDuringExecution": true }
                              }),
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Trace_Details.text2",
                                    $widgetId: "p.ConversationalUI.Trace_Details.text2",
                                    class: "mx-name-text2 font-size-small breadcrumb-text",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Traces " }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Trace_Details.text24",
                                    $widgetId: "p.ConversationalUI.Trace_Details.text24",
                                    class: "mx-name-text24 font-size-small",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "/" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Details.container100",
                              $widgetId: "p.ConversationalUI.Trace_Details.container100",
                              class: "mx-name-container100 row-text-img breadcrumb-container",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Trace_Details.text25",
                                    $widgetId: "p.ConversationalUI.Trace_Details.text25",
                                    class: "mx-name-text25 font-weight-semibold font-size-small",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Trace ID " }, { "type": "variable", "variable": "dataView6", "path": "TraceId" }] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Details.container32",
                                    $widgetId: "p.ConversationalUI.Trace_Details.container32",
                                    class: "mx-name-container32 btn-wrapper",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderMode: "div",
                                    onClick: ActionProperty({
                                      "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true }
                                    }),
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Trace_Details.actionButton12$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Details.actionButton12$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.actionButton12",
                                                $widgetId: "p.ConversationalUI.Trace_Details.actionButton12",
                                                buttonId: "p.ConversationalUI.Trace_Details.actionButton12",
                                                class: "mx-name-actionButton12 btn-icon-only",
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
                                                    "Copy to clipboard"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$link.svg" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Trace_Details.actionButton8$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Details.actionButton8$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ShowCopyChecked" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.actionButton8",
                                                $widgetId: "p.ConversationalUI.Trace_Details.actionButton8",
                                                buttonId: "p.ConversationalUI.Trace_Details.actionButton8",
                                                class: "mx-name-actionButton8 btn-hover",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "click to copy link" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Copy to clipboard"
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Trace_Details.actionButton14$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Details.actionButton14$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "ShowCopyChecked" }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.actionButton14",
                                                $widgetId: "p.ConversationalUI.Trace_Details.actionButton14",
                                                buttonId: "p.ConversationalUI.Trace_Details.actionButton14",
                                                class: "mx-name-actionButton14 btn-hover",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "link copied!" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Copy to clipboard"
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                          )
                        ],
                        ariaHidden: false
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Trace_Details.container4",
                        $widgetId: "p.ConversationalUI.Trace_Details.container4",
                        class: "mx-name-container4 traces-content",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Details.container1",
                              $widgetId: "p.ConversationalUI.Trace_Details.container1",
                              class: "mx-name-container1 card",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Details.container17",
                                    $widgetId: "p.ConversationalUI.Trace_Details.container17",
                                    class: "mx-name-container17 pageheader-flex-container",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Trace_Details.container18",
                                          $widgetId: "p.ConversationalUI.Trace_Details.container18",
                                          class: "mx-name-container18 pageheader-flex-items",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container7",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container7",
                                                class: "mx-name-container7",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.text1",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.text1",
                                                      class: "mx-name-text1",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "Trace ID " }, { "type": "variable", "variable": "dataView6", "path": "TraceId" }] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                        })
                                                      ]),
                                                      renderMode: "h1"
                                                    }
                                                  )
                                                ],
                                                ariaHidden: false
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container20",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container20",
                                                class: "mx-name-container20",
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
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Details.container6",
                                    $widgetId: "p.ConversationalUI.Trace_Details.container6",
                                    class: "mx-name-container6 card-content-scroll",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Trace_Details.container88",
                                          $widgetId: "p.ConversationalUI.Trace_Details.container88",
                                          class: "mx-name-container88 plan-container",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container89",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container89",
                                                class: "mx-name-container89 col-left-aligned",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.text11",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.text11",
                                                      class: "mx-name-text11 font-weight-semibold",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Conversation ID" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.actionButton3$visibility",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.actionButton3$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.actionButton3",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.actionButton3",
                                                            buttonId: "p.ConversationalUI.Trace_Details.actionButton3",
                                                            class: "mx-name-actionButton3 link-bold spacing-outer-top-smaller",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "link",
                                                            role: "button",
                                                            buttonClass: "btn-default",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "dataView6", "path": "_ConversationId" }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                "Filter for the same Conversation ID"
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "KIRhqh6C0VuZ78VKieccVg", "progress": { "message": selectTranslation(["Filtering..."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container91",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container91",
                                                class: "mx-name-container91",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $DataView,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.dataView5",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.dataView5",
                                                      class: "mx-name-dataView5 form-vertical",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      object: MicroflowObjectProperty({
                                                        "dataSourceId": "p.75",
                                                        "scope": "p.ConversationalUI.Trace_Details.dataView3",
                                                        "editable": true,
                                                        "operationId": "Z1nc6AzKk1mg0kpOojIwmg",
                                                        "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
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
                                                            key: "p.ConversationalUI.Trace_Details.container16",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.container16",
                                                            class: "mx-name-container16 row-left-aligned spacing-outer-bottom-smallest",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.container52",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container52",
                                                                  class: "mx-name-container52",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.text38",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.text38",
                                                                        class: "mx-name-text38 font-weight-semibold",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        renderMode: "span"
                                                                      }
                                                                    )
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Fragment,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.snippetCall2",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.snippetCall2",
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container3",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container3",
                                                                        class: "mx-name-container3 row-left-aligned",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $DataView,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1",
                                                                              class: "mx-name-dataView1 form-vertical",
                                                                              style: void 0,
                                                                              tabIndex: void 0,
                                                                              object: MicroflowObjectProperty({
                                                                                "dataSourceId": "p.88",
                                                                                "scope": "$Trace",
                                                                                "editable": true,
                                                                                "operationId": "JIMsR7Kb9lWKDpEzYbD5eg",
                                                                                "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
                                                                              }),
                                                                              emptyMessage: TextProperty({
                                                                                "value": selectTranslation([
                                                                                  ""
                                                                                ])
                                                                              }),
                                                                              body: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Tooltip,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.tooltip3",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.tooltip3",
                                                                                    trigger: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $ConditionalVisibilityWrapper,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22$visibility",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22$visibility",
                                                                                          visible: ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                                          }),
                                                                                          contents: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ActionButton,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22",
                                                                                                buttonId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22",
                                                                                                class: "mx-name-actionButton22 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                                                  "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                                                }),
                                                                                                action: ActionProperty({
                                                                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                                                  "abortOnServerValidation": true
                                                                                                })
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        }
                                                                                      )
                                                                                    ],
                                                                                    renderMethod: "custom",
                                                                                    htmlMessage: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container103",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container103",
                                                                                          class: "mx-name-container103 tooltip-container-version",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container67",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container67",
                                                                                                class: "mx-name-container67 tooltip-col",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text69",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text69",
                                                                                                      class: "mx-name-text69 font-weight-semibold",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Agent version" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      renderMode: "span"
                                                                                                    }
                                                                                                  )
                                                                                                ],
                                                                                                ariaHidden: false
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "Version", "path": "IsDraftVersion" }] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24",
                                                                                                      class: "mx-name-container24 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text3",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text3",
                                                                                                            class: "mx-name-text3",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Version", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
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
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "variable", "variable": "Version", "path": "IsDraftVersion" }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41",
                                                                                                      class: "mx-name-container41 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Container,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container4",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container4",
                                                                                                            class: "mx-name-container4 tooltip-version-draft",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Image,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image14",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image14",
                                                                                                                  datasource: "image",
                                                                                                                  imageObject: WebStaticImageProperty({
                                                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$warning_triangle.svg" }
                                                                                                                  }),
                                                                                                                  defaultImageDynamic: void 0,
                                                                                                                  imageUrl: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                    })
                                                                                                                  ]),
                                                                                                                  imageIcon: void 0,
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
                                                                                                                  class: "mx-name-image14 img--14-14",
                                                                                                                  style: void 0,
                                                                                                                  tabIndex: void 0
                                                                                                                }
                                                                                                              ),
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Container,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container7",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container7",
                                                                                                                  class: "mx-name-container7 spacing-outer-left-small",
                                                                                                                  style: void 0,
                                                                                                                  renderMode: "div",
                                                                                                                  onClick: void 0,
                                                                                                                  content: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Text,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text13",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text13",
                                                                                                                        class: "mx-name-text13 font-weight-semibold",
                                                                                                                        style: void 0,
                                                                                                                        caption: selectTranslation([
                                                                                                                          ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "Draft, " }, "args": {} }
                                                                                                                          })
                                                                                                                        ]),
                                                                                                                        renderMode: "span"
                                                                                                                      }
                                                                                                                    ),
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Text,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text12",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text12",
                                                                                                                        class: "mx-name-text12",
                                                                                                                        style: void 0,
                                                                                                                        caption: selectTranslation([
                                                                                                                          ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "your draft might have been changed after this execution" }, "args": {} }
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
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Version", "path": "Description" }] }, { "type": "literal", "value": "" }] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68",
                                                                                                      class: "mx-name-container68 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text70",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text70",
                                                                                                            class: "mx-name-text70 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
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
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Version", "path": "Description" }] }, { "type": "literal", "value": "" }] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25",
                                                                                                      class: "mx-name-container25 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text71",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text71",
                                                                                                            class: "mx-name-text71 text-clamp--5-lines",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "variable", "variable": "Version", "path": "Description" }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
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
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "Version", "path": "SystemPrompt" }, { "type": "literal", "value": null }] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69",
                                                                                                      class: "mx-name-container69 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text72",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text72",
                                                                                                            class: "mx-name-text72 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "System prompt" }, "args": {} }
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
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "Version", "path": "SystemPrompt" }, { "type": "literal", "value": null }] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26",
                                                                                                      class: "mx-name-container26 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text73",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text73",
                                                                                                            class: "mx-name-text73 text-clamp--5-lines",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "variable", "variable": "Version", "path": "SystemPrompt" }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
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
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container70",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container70",
                                                                                                class: "mx-name-container70 tooltip-col",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text74",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text74",
                                                                                                      class: "mx-name-text74 font-weight-semibold",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "User prompt" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      renderMode: "span"
                                                                                                    }
                                                                                                  )
                                                                                                ],
                                                                                                ariaHidden: false
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container27",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container27",
                                                                                                class: "mx-name-container27 tooltip-col",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text75",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text75",
                                                                                                      class: "mx-name-text75",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "variable", "variable": "Trace", "path": "Input" }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                                        })
                                                                                                      ]),
                                                                                                      renderMode: "span"
                                                                                                    }
                                                                                                  )
                                                                                                ],
                                                                                                ariaHidden: false
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container71",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container71",
                                                                                                class: "mx-name-container71 tooltip-col",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text76",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text76",
                                                                                                      class: "mx-name-text76 font-weight-semibold",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Model\r\n" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      renderMode: "span"
                                                                                                    }
                                                                                                  )
                                                                                                ],
                                                                                                ariaHidden: false
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container2",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container2",
                                                                                                class: "mx-name-container2 tooltip-col",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $DataView,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3",
                                                                                                      class: "mx-name-dataView3 form-horizontal",
                                                                                                      style: void 0,
                                                                                                      tabIndex: void 0,
                                                                                                      object: AssociationObjectProperty({
                                                                                                        "dataSourceId": "p.152",
                                                                                                        "scope": "$Trace",
                                                                                                        "editable": true,
                                                                                                        "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                                                                        "operationId": "IexT4QgAZlOJOosB1gH8FQ"
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
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container31",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container31",
                                                                                                            class: "mx-name-container31 tooltip-icon-text",
                                                                                                            style: void 0,
                                                                                                            renderMode: "div",
                                                                                                            onClick: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Container,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container6",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container6",
                                                                                                                  class: "mx-name-container6",
                                                                                                                  style: void 0,
                                                                                                                  renderMode: "div",
                                                                                                                  onClick: void 0,
                                                                                                                  content: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $ConditionalVisibilityWrapper,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6$visibility",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6$visibility",
                                                                                                                        visible: ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                        }),
                                                                                                                        contents: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Image,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6",
                                                                                                                              datasource: "image",
                                                                                                                              imageObject: WebStaticImageProperty({
                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$openai.svg" }
                                                                                                                              }),
                                                                                                                              defaultImageDynamic: void 0,
                                                                                                                              imageUrl: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              imageIcon: void 0,
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
                                                                                                                              class: "mx-name-image6 unset-img-width",
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
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12$visibility",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12$visibility",
                                                                                                                        visible: ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Bedrock" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                        }),
                                                                                                                        contents: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Image,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12",
                                                                                                                              datasource: "image",
                                                                                                                              imageObject: WebStaticImageProperty({
                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$bedrock.svg" }
                                                                                                                              }),
                                                                                                                              defaultImageDynamic: void 0,
                                                                                                                              imageUrl: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              imageIcon: void 0,
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
                                                                                                                              class: "mx-name-image12 unset-img-width",
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
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13$visibility",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13$visibility",
                                                                                                                        visible: ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Azure" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                        }),
                                                                                                                        contents: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Image,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13",
                                                                                                                              datasource: "image",
                                                                                                                              imageObject: WebStaticImageProperty({
                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$Azure_outline.svg" }
                                                                                                                              }),
                                                                                                                              defaultImageDynamic: void 0,
                                                                                                                              imageUrl: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              imageIcon: void 0,
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
                                                                                                                              class: "mx-name-image13 unset-img-width",
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
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9$visibility",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9$visibility",
                                                                                                                        visible: ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mendix" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                        }),
                                                                                                                        contents: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Image,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9",
                                                                                                                              datasource: "image",
                                                                                                                              imageObject: WebStaticImageProperty({
                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$cloud_sparkle.svg" }
                                                                                                                              }),
                                                                                                                              defaultImageDynamic: void 0,
                                                                                                                              imageUrl: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              imageIcon: void 0,
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
                                                                                                                              class: "mx-name-image9 unset-img-width",
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
                                                                                                                        key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15$visibility",
                                                                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15$visibility",
                                                                                                                        visible: ExpressionProperty({
                                                                                                                          "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                        }),
                                                                                                                        contents: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Image,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15",
                                                                                                                              datasource: "image",
                                                                                                                              imageObject: WebStaticImageProperty({
                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$Mistral.svg" }
                                                                                                                              }),
                                                                                                                              defaultImageDynamic: void 0,
                                                                                                                              imageUrl: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              imageIcon: void 0,
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
                                                                                                                              class: "mx-name-image15 unset-img-width",
                                                                                                                              style: void 0,
                                                                                                                              tabIndex: void 0
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
                                                                                                                $Text,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text80",
                                                                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text80",
                                                                                                                  class: "mx-name-text80",
                                                                                                                  style: void 0,
                                                                                                                  caption: selectTranslation([
                                                                                                                    ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeployedModelDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
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
                                                                                                      hideFooter: false,
                                                                                                      footer: void 0
                                                                                                    }
                                                                                                  )
                                                                                                ],
                                                                                                ariaHidden: false
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" }] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72",
                                                                                                      class: "mx-name-container72 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text78",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text78",
                                                                                                            class: "mx-name-text78 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Tools\r\n" }, "args": {} }
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
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" }] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1",
                                                                                                      class: "mx-name-container1 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $ListView,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1",
                                                                                                            class: "mx-name-listView1 listview-custom-spacing listview-hide-on-empty listview-remove-spacing listview-stylingless",
                                                                                                            style: void 0,
                                                                                                            listValue: DatabaseObjectListProperty({
                                                                                                              "dataSourceId": "p.10",
                                                                                                              "entity": "AgentCommons.Tool",
                                                                                                              "scope": "p.ConversationalUI.Trace_Details.dataView5",
                                                                                                              "operationId": "ti6paQvc91qEPS4EdO9E9Q",
                                                                                                              "sort": [],
                                                                                                              "arguments": {
                                                                                                                "Version": [
                                                                                                                  "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                ],
                                                                                                                "CurrentObject": [
                                                                                                                  "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                ]
                                                                                                              },
                                                                                                              "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "AgentCommons.Tool_Version", "context": "AgentCommons.Tool", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Version" }] }
                                                                                                            }),
                                                                                                            itemTemplate: TemplatedWidgetProperty({
                                                                                                              "dataSourceId": "p.10",
                                                                                                              "editable": false,
                                                                                                              "children": () => [
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $ConditionalVisibilityWrapper,
                                                                                                                  {
                                                                                                                    key: "p.184",
                                                                                                                    $widgetId: "p.184",
                                                                                                                    visible: ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.Tool" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                    }),
                                                                                                                    contents: [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $Container,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container30",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container30",
                                                                                                                          class: "mx-name-container30 row-text-img",
                                                                                                                          style: void 0,
                                                                                                                          renderMode: "div",
                                                                                                                          onClick: void 0,
                                                                                                                          content: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Image,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image7",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image7",
                                                                                                                                datasource: "image",
                                                                                                                                imageObject: WebStaticImageProperty({
                                                                                                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$microflow.svg" }
                                                                                                                                }),
                                                                                                                                defaultImageDynamic: void 0,
                                                                                                                                imageUrl: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                  })
                                                                                                                                ]),
                                                                                                                                imageIcon: void 0,
                                                                                                                                isBackgroundImage: false,
                                                                                                                                children: void 0,
                                                                                                                                onClickType: "action",
                                                                                                                                onClick: void 0,
                                                                                                                                alternativeText: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                  })
                                                                                                                                ]),
                                                                                                                                widthUnit: "pixels",
                                                                                                                                width: 24,
                                                                                                                                heightUnit: "auto",
                                                                                                                                height: 100,
                                                                                                                                iconSize: 14,
                                                                                                                                displayAs: "fullImage",
                                                                                                                                responsive: true,
                                                                                                                                class: "mx-name-image7 img--20-20",
                                                                                                                                style: void 0,
                                                                                                                                tabIndex: void 0
                                                                                                                              }
                                                                                                                            ),
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Text,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text79",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text79",
                                                                                                                                class: "mx-name-text79 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                                style: void 0,
                                                                                                                                caption: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
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
                                                                                                                  $ConditionalVisibilityWrapper,
                                                                                                                  {
                                                                                                                    key: "p.191",
                                                                                                                    $widgetId: "p.191",
                                                                                                                    visible: ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.MCP" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                    }),
                                                                                                                    contents: [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $Container,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container36",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container36",
                                                                                                                          class: "mx-name-container36 row-text-img",
                                                                                                                          style: void 0,
                                                                                                                          renderMode: "div",
                                                                                                                          onClick: void 0,
                                                                                                                          content: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Image,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image8",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image8",
                                                                                                                                datasource: "image",
                                                                                                                                imageObject: WebStaticImageProperty({
                                                                                                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$MCP.svg" }
                                                                                                                                }),
                                                                                                                                defaultImageDynamic: void 0,
                                                                                                                                imageUrl: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                  })
                                                                                                                                ]),
                                                                                                                                imageIcon: void 0,
                                                                                                                                isBackgroundImage: false,
                                                                                                                                children: void 0,
                                                                                                                                onClickType: "action",
                                                                                                                                onClick: void 0,
                                                                                                                                alternativeText: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                  })
                                                                                                                                ]),
                                                                                                                                widthUnit: "pixels",
                                                                                                                                width: 24,
                                                                                                                                heightUnit: "auto",
                                                                                                                                height: 100,
                                                                                                                                iconSize: 14,
                                                                                                                                displayAs: "fullImage",
                                                                                                                                responsive: true,
                                                                                                                                class: "mx-name-image8 img--20-20",
                                                                                                                                style: void 0,
                                                                                                                                tabIndex: void 0
                                                                                                                              }
                                                                                                                            ),
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Text,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text85",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text85",
                                                                                                                                class: "mx-name-text85 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                                style: void 0,
                                                                                                                                caption: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
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
                                                                                                                  $ConditionalVisibilityWrapper,
                                                                                                                  {
                                                                                                                    key: "p.198",
                                                                                                                    $widgetId: "p.198",
                                                                                                                    visible: ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.SingleMCPTool" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                    }),
                                                                                                                    contents: [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $Container,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container37",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container37",
                                                                                                                          class: "mx-name-container37 row-text-img",
                                                                                                                          style: void 0,
                                                                                                                          renderMode: "div",
                                                                                                                          onClick: void 0,
                                                                                                                          content: [
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Image,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image11",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image11",
                                                                                                                                datasource: "image",
                                                                                                                                imageObject: WebStaticImageProperty({
                                                                                                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$wrench.svg" }
                                                                                                                                }),
                                                                                                                                defaultImageDynamic: void 0,
                                                                                                                                imageUrl: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                  })
                                                                                                                                ]),
                                                                                                                                imageIcon: void 0,
                                                                                                                                isBackgroundImage: false,
                                                                                                                                children: void 0,
                                                                                                                                onClickType: "action",
                                                                                                                                onClick: void 0,
                                                                                                                                alternativeText: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                  })
                                                                                                                                ]),
                                                                                                                                widthUnit: "pixels",
                                                                                                                                width: 24,
                                                                                                                                heightUnit: "auto",
                                                                                                                                height: 100,
                                                                                                                                iconSize: 14,
                                                                                                                                displayAs: "fullImage",
                                                                                                                                responsive: true,
                                                                                                                                class: "mx-name-image11 img--20-20",
                                                                                                                                style: void 0,
                                                                                                                                tabIndex: void 0
                                                                                                                              }
                                                                                                                            ),
                                                                                                                            /* @__PURE__ */ React.createElement(
                                                                                                                              $Text,
                                                                                                                              {
                                                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text86",
                                                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text86",
                                                                                                                                class: "mx-name-text86 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                                style: void 0,
                                                                                                                                caption: selectTranslation([
                                                                                                                                  ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
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
                                                                                                                )
                                                                                                              ]
                                                                                                            }),
                                                                                                            onClick: void 0,
                                                                                                            pageSize: 10
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
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73",
                                                                                                      class: "mx-name-container73 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Text,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text82",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text82",
                                                                                                            class: "mx-name-text82 font-weight-semibold",
                                                                                                            style: void 0,
                                                                                                            caption: selectTranslation([
                                                                                                              ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Knowledge base\r\n" }, "args": {} }
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
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5$visibility",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Container,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5",
                                                                                                      class: "mx-name-container5 tooltip-col",
                                                                                                      style: void 0,
                                                                                                      renderMode: "div",
                                                                                                      onClick: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $ListView,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2",
                                                                                                            class: "mx-name-listView2 listview-custom-spacing listview-hide-on-empty listview-remove-spacing listview-stylingless",
                                                                                                            style: void 0,
                                                                                                            listValue: DatabaseObjectListProperty({
                                                                                                              "dataSourceId": "p.11",
                                                                                                              "entity": "AgentCommons.KnowledgeBase",
                                                                                                              "scope": "p.ConversationalUI.Trace_Details.dataView5",
                                                                                                              "operationId": "flq2x0nbUla2xji6ZQBF0g",
                                                                                                              "sort": [],
                                                                                                              "arguments": {
                                                                                                                "Version": [
                                                                                                                  "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                ],
                                                                                                                "CurrentObject": [
                                                                                                                  "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                ]
                                                                                                              },
                                                                                                              "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "AgentCommons.KnowledgeBase_Version", "context": "AgentCommons.KnowledgeBase", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Version" }] }
                                                                                                            }),
                                                                                                            itemTemplate: TemplatedWidgetProperty({
                                                                                                              "dataSourceId": "p.11",
                                                                                                              "editable": false,
                                                                                                              "children": () => [
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $Container,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container34",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container34",
                                                                                                                    class: "mx-name-container34 row-text-img",
                                                                                                                    style: void 0,
                                                                                                                    renderMode: "div",
                                                                                                                    onClick: void 0,
                                                                                                                    content: [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $Image,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image10",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image10",
                                                                                                                          datasource: "image",
                                                                                                                          imageObject: WebStaticImageProperty({
                                                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
                                                                                                                          }),
                                                                                                                          defaultImageDynamic: void 0,
                                                                                                                          imageUrl: selectTranslation([
                                                                                                                            ExpressionProperty({
                                                                                                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                            })
                                                                                                                          ]),
                                                                                                                          imageIcon: void 0,
                                                                                                                          isBackgroundImage: false,
                                                                                                                          children: void 0,
                                                                                                                          onClickType: "action",
                                                                                                                          onClick: void 0,
                                                                                                                          alternativeText: selectTranslation([
                                                                                                                            ExpressionProperty({
                                                                                                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                            })
                                                                                                                          ]),
                                                                                                                          widthUnit: "pixels",
                                                                                                                          width: 24,
                                                                                                                          heightUnit: "auto",
                                                                                                                          height: 100,
                                                                                                                          iconSize: 14,
                                                                                                                          displayAs: "fullImage",
                                                                                                                          responsive: true,
                                                                                                                          class: "mx-name-image10 img--20-20",
                                                                                                                          style: void 0,
                                                                                                                          tabIndex: void 0
                                                                                                                        }
                                                                                                                      ),
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $Text,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text83",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text83",
                                                                                                                          class: "mx-name-text83 text-clamp--1-lines spacing-outer-left-smallest",
                                                                                                                          style: void 0,
                                                                                                                          caption: selectTranslation([
                                                                                                                            ExpressionProperty({
                                                                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2", "source": "object" } } }
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
                                                                                                            }),
                                                                                                            onClick: void 0,
                                                                                                            pageSize: 10
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
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container76",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container76",
                                                                                                class: "mx-name-container76 tooltip-col",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text89",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text89",
                                                                                                      class: "mx-name-text89 font-weight-semibold",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Last edited" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      renderMode: "span"
                                                                                                    }
                                                                                                  )
                                                                                                ],
                                                                                                ariaHidden: false
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container38",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container38",
                                                                                                class: "mx-name-container38 tooltip-icon-text",
                                                                                                style: void 0,
                                                                                                renderMode: "div",
                                                                                                onClick: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Image,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image16",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.image16",
                                                                                                      datasource: "icon",
                                                                                                      imageObject: void 0,
                                                                                                      defaultImageDynamic: void 0,
                                                                                                      imageUrl: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      imageIcon: WebIconProperty({
                                                                                                        "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                                                                      class: "mx-name-image16 unset-img-width",
                                                                                                      style: void 0,
                                                                                                      tabIndex: void 0
                                                                                                    }
                                                                                                  ),
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text90",
                                                                                                      $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.text90",
                                                                                                      class: "mx-name-text90",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Version", "path": "VersionChangedDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
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
                                                                                    ],
                                                                                    textMessage: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    tooltipPosition: "bottom",
                                                                                    arrowPosition: "end",
                                                                                    openOn: "hover",
                                                                                    class: "mx-name-tooltip3 convui-tooltip",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0
                                                                                  }
                                                                                )
                                                                              ],
                                                                              hideFooter: false,
                                                                              footer: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $DataView,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2",
                                                                              class: "mx-name-dataView2 form-horizontal",
                                                                              style: void 0,
                                                                              tabIndex: void 0,
                                                                              object: AssociationObjectProperty({
                                                                                "dataSourceId": "p.233",
                                                                                "scope": "p.ConversationalUI.Trace_Details.dataView5",
                                                                                "editable": true,
                                                                                "path": "AgentCommons.Version_Agent/AgentCommons.Agent",
                                                                                "operationId": "YyX2uHm69FqnC+PXqvqEng"
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
                                                                                    key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "variable", "variable": "Version" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2", "source": "object" }, "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28",
                                                                                          class: "mx-name-container28 circle-badge circle-badge--success",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Container,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container65",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_TraceVersion_Tooltip.container65",
                                                                                                class: "mx-name-container65 circle",
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
                                                            ariaHidden: false
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.container31",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.container31",
                                                            class: "mx-name-container31 row-left-aligned",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.container37$visibility",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container37$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container37",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container37",
                                                                        class: "mx-name-container37",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.actionButton5$visibility",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.actionButton5$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ActionButton,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.actionButton5",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.actionButton5",
                                                                                    buttonId: "p.ConversationalUI.Trace_Details.actionButton5",
                                                                                    class: "mx-name-actionButton5 link-bold",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    renderType: "link",
                                                                                    role: "button",
                                                                                    buttonClass: "btn-default",
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Draft" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    tooltip: TextProperty({
                                                                                      "value": selectTranslation([
                                                                                        "Filter for the same agent draft"
                                                                                      ])
                                                                                    }),
                                                                                    icon: void 0,
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "QwR8+fQC7V+jOlT9MHfOcA", "progress": { "message": selectTranslation(["Filtering..."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                              key: "p.ConversationalUI.Trace_Details.actionButton4$visibility",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.actionButton4$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ActionButton,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.actionButton4",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.actionButton4",
                                                                                    buttonId: "p.ConversationalUI.Trace_Details.actionButton4",
                                                                                    class: "mx-name-actionButton4 link-bold",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    renderType: "link",
                                                                                    role: "button",
                                                                                    buttonClass: "btn-default",
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" }] }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                      })
                                                                                    ]),
                                                                                    tooltip: TextProperty({
                                                                                      "value": selectTranslation([
                                                                                        "Filter for the same agent version"
                                                                                      ])
                                                                                    }),
                                                                                    icon: void 0,
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "QwR8+fQC7V+jOlT9MHfOcA", "progress": { "message": selectTranslation(["Filtering..."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                                  ]
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.actionButton13$visibility",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.actionButton13$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Trace", "path": "_AgentVersionId" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.actionButton13",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.actionButton13",
                                                                        buttonId: "p.ConversationalUI.Trace_Details.actionButton13",
                                                                        class: "mx-name-actionButton13 btn-icon-only spacing-outer-left-small",
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
                                                                            "Go to Version"
                                                                          ])
                                                                        }),
                                                                        icon: WebIconProperty({
                                                                          "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$link_attachments.svg" }
                                                                        }),
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "HFrZY1HgO1GWSXg16plHcw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      hideFooter: false,
                                                      footer: void 0
                                                    }
                                                  )
                                                ],
                                                ariaHidden: false
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container92",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container92",
                                                class: "mx-name-container92",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.text37",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.text37",
                                                      class: "mx-name-text37 font-weight-semibold",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.container12",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.container12",
                                                      class: "mx-name-container12 spacing-outer-top-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.snippetCall8",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.snippetCall8",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceStartTime.container1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.container1",
                                                                  class: "mx-name-container1 row-text-img",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Image,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceStartTime.image10",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.image10",
                                                                        datasource: "icon",
                                                                        imageObject: void 0,
                                                                        defaultImageDynamic: void 0,
                                                                        imageUrl: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        imageIcon: WebIconProperty({
                                                                          "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                                        class: "mx-name-image10 unset-img-width",
                                                                        style: void 0,
                                                                        tabIndex: void 0
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceStartTime.text1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.text1",
                                                                        class: "mx-name-text1",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
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
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container102",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container102",
                                                class: "mx-name-container102",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.text41",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.text41",
                                                      class: "mx-name-text41 font-weight-semibold",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "End time" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.container13",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.container13",
                                                      class: "mx-name-container13 spacing-outer-top-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.snippetCall9",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.snippetCall9",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceEndTime.container1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceEndTime.container1",
                                                                  class: "mx-name-container1 row-left-aligned",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Image,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceEndTime.image10",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceEndTime.image10",
                                                                        datasource: "icon",
                                                                        imageObject: void 0,
                                                                        defaultImageDynamic: void 0,
                                                                        imageUrl: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        imageIcon: WebIconProperty({
                                                                          "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                                        class: "mx-name-image10 unset-img-width",
                                                                        style: void 0,
                                                                        tabIndex: void 0
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceEndTime.text1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceEndTime.text1",
                                                                        class: "mx-name-text1",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
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
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container110",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container110",
                                                class: "mx-name-container110",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.text47",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.text47",
                                                      class: "mx-name-text47 font-weight-semibold",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.container14",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.container14",
                                                      class: "mx-name-container14 spacing-outer-top-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.snippetCall10",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.snippetCall10",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceDuration.container1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceDuration.container1",
                                                                  class: "mx-name-container1 row-text-img",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Image,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceDuration.image1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceDuration.image1",
                                                                        datasource: "icon",
                                                                        imageObject: void 0,
                                                                        defaultImageDynamic: void 0,
                                                                        imageUrl: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                          })
                                                                        ]),
                                                                        imageIcon: WebIconProperty({
                                                                          "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$clock.svg" }
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
                                                                        class: "mx-name-image1 unset-img-width",
                                                                        style: void 0,
                                                                        tabIndex: void 0
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_TraceDuration.text1",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceDuration.text1",
                                                                        class: "mx-name-text1",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
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
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container111",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container111",
                                                class: "mx-name-container111",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.text48",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.text48",
                                                      class: "mx-name-text48 font-weight-semibold",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.container27",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.container27",
                                                      class: "mx-name-container27 spacing-outer-top-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.snippetCall1",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.snippetCall1",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $DataView,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceModel.dataView2",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceModel.dataView2",
                                                                  class: "mx-name-dataView2 form-horizontal",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  object: AssociationObjectProperty({
                                                                    "dataSourceId": "p.299",
                                                                    "scope": "$Trace",
                                                                    "editable": true,
                                                                    "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                                    "operationId": "D00IaAVG11+Ypm6BGgCyPA"
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
                                                                        key: "p.ConversationalUI.Snippet_TraceModel.container30",
                                                                        $widgetId: "p.ConversationalUI.Snippet_TraceModel.container30",
                                                                        class: "mx-name-container30 row-text-img",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image6$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image6$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceModel.image6",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceModel.image6",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$openai.svg" }
                                                                                    }),
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: void 0,
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
                                                                                    class: "mx-name-image6 unset-img-width",
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
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image7$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image7$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Bedrock" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceModel.image7",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceModel.image7",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$bedrock.svg" }
                                                                                    }),
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: void 0,
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
                                                                                    class: "mx-name-image7 unset-img-width",
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
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image8$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image8$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Azure" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceModel.image8",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceModel.image8",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$Azure_outline.svg" }
                                                                                    }),
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: void 0,
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
                                                                                    class: "mx-name-image8 unset-img-width",
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
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image9$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image9$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mendix" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceModel.image9",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceModel.image9",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$cloud_sparkle.svg" }
                                                                                    }),
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: void 0,
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
                                                                                    class: "mx-name-image9 unset-img-width",
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
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.image10$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.image10$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_TraceModel.image10",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_TraceModel.image10",
                                                                                    datasource: "image",
                                                                                    imageObject: WebStaticImageProperty({
                                                                                      "image": { "uri": "img/ConversationalUI$Image_Traces$Mistral.svg" }
                                                                                    }),
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: void 0,
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
                                                                                    class: "mx-name-image10 unset-img-width",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0
                                                                                  }
                                                                                )
                                                                              ]
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_TraceModel.text80",
                                                                              $widgetId: "p.ConversationalUI.Snippet_TraceModel.text80",
                                                                              class: "mx-name-text80",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeployedModelDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
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
                                                                  hideFooter: false,
                                                                  footer: void 0
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
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container95",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container95",
                                                class: "mx-name-container95",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.container40",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.container40",
                                                      class: "mx-name-container40 row-left-aligned spacing-outer-bottom-smallest",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.container51",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.container51",
                                                            class: "mx-name-container51",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.text40",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.text40",
                                                                  class: "mx-name-text40 font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Tokens" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  renderMode: "span"
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Tooltip,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.tooltip6",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.tooltip6",
                                                            trigger: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.actionButton25$visibility",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.actionButton25$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $ActionButton,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.actionButton25",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.actionButton25",
                                                                        buttonId: "p.ConversationalUI.Trace_Details.actionButton25",
                                                                        class: "mx-name-actionButton25 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                                          "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                        }),
                                                                        action: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                                          "abortOnServerValidation": true
                                                                        })
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              )
                                                            ],
                                                            renderMethod: "custom",
                                                            htmlMessage: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.container47",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container47",
                                                                  class: "mx-name-container47 tooltip-container-token",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container48",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container48",
                                                                        class: "mx-name-container48 tooltip-row-text-icon",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.image6",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.image6",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
                                                                              }),
                                                                              defaultImageDynamic: void 0,
                                                                              imageUrl: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              imageIcon: void 0,
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
                                                                              class: "mx-name-image6 img--14-20",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.text23",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.text23",
                                                                              class: "mx-name-text23 font-weight-semibold",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Total tokens" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container49",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container49",
                                                                        class: "mx-name-container49 tooltip-col",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.text6",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.text6",
                                                                              class: "mx-name-text6",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
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
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.container50",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container50",
                                                                  class: "mx-name-container50 divider spacing-inner-none spacing-outer-left spacing-outer-right",
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
                                                                  key: "p.ConversationalUI.Trace_Details.container56",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container56",
                                                                  class: "mx-name-container56 tooltip-container-token",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container57",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container57",
                                                                        class: "mx-name-container57 tooltip-row-text-icon",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.image10",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.image10",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$token_input.svg" }
                                                                              }),
                                                                              defaultImageDynamic: void 0,
                                                                              imageUrl: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              imageIcon: void 0,
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
                                                                              class: "mx-name-image10 img--14-20",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.text8",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.text8",
                                                                              class: "mx-name-text8 font-weight-semibold",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Input token" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container58",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container58",
                                                                        class: "mx-name-container58 tooltip-col",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.text5",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.text5",
                                                                              class: "mx-name-text5",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
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
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.container59",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container59",
                                                                  class: "mx-name-container59 divider spacing-inner-none spacing-outer-left spacing-outer-right",
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
                                                                  key: "p.ConversationalUI.Trace_Details.container60",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container60",
                                                                  class: "mx-name-container60 tooltip-container-token",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container61",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container61",
                                                                        class: "mx-name-container61 tooltip-row-text-icon",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Image,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.image14",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.image14",
                                                                              datasource: "image",
                                                                              imageObject: WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$token_output.svg" }
                                                                              }),
                                                                              defaultImageDynamic: void 0,
                                                                              imageUrl: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              imageIcon: void 0,
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
                                                                              class: "mx-name-image14 img--14-20",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.text27",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.text27",
                                                                              class: "mx-name-text27 font-weight-semibold",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Output token" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "span"
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container62",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container62",
                                                                        class: "mx-name-container62 tooltip-col",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.text7",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.text7",
                                                                              class: "mx-name-text7",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
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
                                                            ],
                                                            textMessage: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltipPosition: "bottom",
                                                            arrowPosition: "end",
                                                            openOn: "hover",
                                                            class: "mx-name-tooltip6 convui-tooltip",
                                                            style: void 0,
                                                            tabIndex: void 0
                                                          }
                                                        )
                                                      ],
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.container15",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.container15",
                                                      class: "mx-name-container15 spacing-outer-top-smaller",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.container41",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.container41",
                                                            class: "mx-name-container41 row-left-aligned",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.image11",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.image11",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
                                                                  }),
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: void 0,
                                                                  isBackgroundImage: false,
                                                                  children: void 0,
                                                                  onClickType: "action",
                                                                  onClick: void 0,
                                                                  alternativeText: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  widthUnit: "pixels",
                                                                  width: 16,
                                                                  heightUnit: "auto",
                                                                  height: 100,
                                                                  iconSize: 14,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image11 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.text9",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.text9",
                                                                  class: "mx-name-text9",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, { "type": "literal", "value": " (" }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": ")" }] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
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
                                                ],
                                                ariaHidden: false
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Trace_Details.container112$visibility",
                                                $widgetId: "p.ConversationalUI.Trace_Details.container112$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "variable", "variable": "dataView6", "path": "HasError" }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Details.container112",
                                                      $widgetId: "p.ConversationalUI.Trace_Details.container112",
                                                      class: "mx-name-container112",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.text49",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.text49",
                                                            class: "mx-name-text49 font-weight-semibold",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                                              })
                                                            ]),
                                                            renderMode: "span"
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Details.container28",
                                                            $widgetId: "p.ConversationalUI.Trace_Details.container28",
                                                            class: "mx-name-container28 spacing-outer-top-smaller row-text-img",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.image32",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.image32",
                                                                  datasource: "icon",
                                                                  imageObject: void 0,
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                  class: "mx-name-image32 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
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
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Trace_Details.container2",
                                          $widgetId: "p.ConversationalUI.Trace_Details.container2",
                                          class: "mx-name-container2 divider spacing-outer-bottom-large spacing-outer-top-large",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: void 0,
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $TreeNode,
                                        {
                                          key: "p.ConversationalUI.Trace_Details.treeNode1",
                                          $widgetId: "p.ConversationalUI.Trace_Details.treeNode1",
                                          advancedMode: false,
                                          datasource: MicroflowObjectListProperty({
                                            "argMap": { "Trace": { "widget": "$Trace", "source": "object" } },
                                            "dataSourceId": "p.20",
                                            "entity": "ConversationalUI.SpanTreeView",
                                            "scope": "p.ConversationalUI.Trace_Details.dataView3",
                                            "operationId": "c9WeK571/1S+i6F3CY9TOQ"
                                          }),
                                          headerType: "custom",
                                          openNodeOn: "iconClick",
                                          headerContent: TemplatedWidgetProperty({
                                            "dataSourceId": "p.20",
                                            "editable": false,
                                            "children": () => [
                                              /* @__PURE__ */ React.createElement(
                                                $Container,
                                                {
                                                  key: "p.ConversationalUI.Trace_Details.container68",
                                                  $widgetId: "p.ConversationalUI.Trace_Details.container68",
                                                  class: "mx-name-container68 row-text-img",
                                                  style: void 0,
                                                  renderMode: "div",
                                                  onClick: void 0,
                                                  content: [
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.ConversationalUI.Trace_Details.container21",
                                                        $widgetId: "p.ConversationalUI.Trace_Details.container21",
                                                        class: "mx-name-container21 row-text-img",
                                                        style: void 0,
                                                        tabIndex: void 0,
                                                        renderMode: "div",
                                                        onClick: ActionProperty({
                                                          "action": { "type": "callMicroflow", "argMap": { "SpanTreeView": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" }, "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } }, "config": { "operationId": "Uqaw0YoAG1y4G0ddtEPbug", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true }
                                                        }),
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.ConversationalUI.Trace_Details.image25$visibility",
                                                              $widgetId: "p.ConversationalUI.Trace_Details.image25$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "Agent" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Image,
                                                                  {
                                                                    key: "p.ConversationalUI.Trace_Details.image25",
                                                                    $widgetId: "p.ConversationalUI.Trace_Details.image25",
                                                                    datasource: "icon",
                                                                    imageObject: void 0,
                                                                    defaultImageDynamic: void 0,
                                                                    imageUrl: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                      })
                                                                    ]),
                                                                    imageIcon: WebIconProperty({
                                                                      "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$robot.svg" }
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
                                                                    class: "mx-name-image25 img--24-24 spacing-outer-right-smaller",
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
                                                              key: "p.ConversationalUI.Trace_Details.image22$visibility",
                                                              $widgetId: "p.ConversationalUI.Trace_Details.image22$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Image,
                                                                  {
                                                                    key: "p.ConversationalUI.Trace_Details.image22",
                                                                    $widgetId: "p.ConversationalUI.Trace_Details.image22",
                                                                    datasource: "icon",
                                                                    imageObject: void 0,
                                                                    defaultImageDynamic: void 0,
                                                                    imageUrl: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                      })
                                                                    ]),
                                                                    imageIcon: WebIconProperty({
                                                                      "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$text_sparkle.svg" }
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
                                                                    class: "mx-name-image22 img--24-24 spacing-outer-right-smaller",
                                                                    style: void 0,
                                                                    tabIndex: void 0
                                                                  }
                                                                )
                                                              ]
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Tooltip,
                                                            {
                                                              key: "p.ConversationalUI.Trace_Details.tooltip3",
                                                              $widgetId: "p.ConversationalUI.Trace_Details.tooltip3",
                                                              trigger: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Text,
                                                                  {
                                                                    key: "p.ConversationalUI.Trace_Details.text12",
                                                                    $widgetId: "p.ConversationalUI.Trace_Details.text12",
                                                                    class: "mx-name-text12 font-size-medium text-clamp--1-lines tree-item-hover",
                                                                    style: void 0,
                                                                    caption: selectTranslation([
                                                                      ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                                      })
                                                                    ]),
                                                                    renderMode: "span"
                                                                  }
                                                                )
                                                              ],
                                                              renderMethod: "custom",
                                                              htmlMessage: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.ConversationalUI.Trace_Details.container25",
                                                                    $widgetId: "p.ConversationalUI.Trace_Details.container25",
                                                                    class: "mx-name-container25 tooltip-container",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Text,
                                                                        {
                                                                          key: "p.ConversationalUI.Trace_Details.text13",
                                                                          $widgetId: "p.ConversationalUI.Trace_Details.text13",
                                                                          class: "mx-name-text13",
                                                                          style: void 0,
                                                                          caption: selectTranslation([
                                                                            ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
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
                                                              textMessage: selectTranslation([
                                                                ExpressionProperty({
                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                })
                                                              ]),
                                                              tooltipPosition: "right",
                                                              arrowPosition: "end",
                                                              openOn: "hover",
                                                              class: "mx-name-tooltip3 convui-tooltip",
                                                              style: void 0,
                                                              tabIndex: void 0
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $DataView,
                                                            {
                                                              key: "p.ConversationalUI.Trace_Details.dataView7",
                                                              $widgetId: "p.ConversationalUI.Trace_Details.dataView7",
                                                              class: "mx-name-dataView7 form-horizontal",
                                                              style: void 0,
                                                              tabIndex: void 0,
                                                              object: AssociationObjectProperty({
                                                                "dataSourceId": "p.411",
                                                                "scope": "p.ConversationalUI.Trace_Details.treeNode1",
                                                                "editable": true,
                                                                "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                "operationId": "8xILStGRp1+AHSI5kwaIMQ"
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
                                                                    key: "p.ConversationalUI.Trace_Details.container33$visibility",
                                                                    $widgetId: "p.ConversationalUI.Trace_Details.container33$visibility",
                                                                    visible: ExpressionProperty({
                                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsError" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView7", "source": "object" } } }
                                                                    }),
                                                                    contents: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.ConversationalUI.Trace_Details.container33",
                                                                          $widgetId: "p.ConversationalUI.Trace_Details.container33",
                                                                          class: "mx-name-container33 spacing-outer-left-small",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Image,
                                                                              {
                                                                                key: "p.ConversationalUI.Trace_Details.image33",
                                                                                $widgetId: "p.ConversationalUI.Trace_Details.image33",
                                                                                datasource: "icon",
                                                                                imageObject: void 0,
                                                                                defaultImageDynamic: void 0,
                                                                                imageUrl: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                imageIcon: WebIconProperty({
                                                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                                class: "mx-name-image33 unset-img-width",
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
                                                                )
                                                              ],
                                                              hideFooter: false,
                                                              footer: void 0
                                                            }
                                                          )
                                                        ],
                                                        ariaHidden: false
                                                      }
                                                    ),
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.ConversationalUI.Trace_Details.container9",
                                                        $widgetId: "p.ConversationalUI.Trace_Details.container9",
                                                        class: "mx-name-container9 row-text-img tree-duration-position-parent",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.ConversationalUI.Trace_Details.container8$visibility",
                                                              $widgetId: "p.ConversationalUI.Trace_Details.container8$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "Agent" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.ConversationalUI.Trace_Details.container8",
                                                                    $widgetId: "p.ConversationalUI.Trace_Details.container8",
                                                                    class: "mx-name-container8 row-left-aligned spacing-inner-left-20",
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.ConversationalUI.Trace_Details.container19",
                                                                          $widgetId: "p.ConversationalUI.Trace_Details.container19",
                                                                          class: "mx-name-container19 row-text-img",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Image,
                                                                              {
                                                                                key: "p.ConversationalUI.Trace_Details.image1",
                                                                                $widgetId: "p.ConversationalUI.Trace_Details.image1",
                                                                                datasource: "icon",
                                                                                imageObject: void 0,
                                                                                defaultImageDynamic: void 0,
                                                                                imageUrl: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                imageIcon: WebIconProperty({
                                                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                                                class: "mx-name-image1 unset-img-width",
                                                                                style: void 0,
                                                                                tabIndex: void 0
                                                                              }
                                                                            ),
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Text,
                                                                              {
                                                                                key: "p.ConversationalUI.Trace_Details.text3",
                                                                                $widgetId: "p.ConversationalUI.Trace_Details.text3",
                                                                                class: "mx-name-text3 font-weight-semibold",
                                                                                style: void 0,
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
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
                                                            }
                                                          )
                                                        ],
                                                        ariaHidden: false
                                                      }
                                                    ),
                                                    /* @__PURE__ */ React.createElement(
                                                      $Container,
                                                      {
                                                        key: "p.ConversationalUI.Trace_Details.container23",
                                                        $widgetId: "p.ConversationalUI.Trace_Details.container23",
                                                        class: "mx-name-container23 row-text-img tree-duration-position",
                                                        style: void 0,
                                                        renderMode: "div",
                                                        onClick: void 0,
                                                        content: [
                                                          /* @__PURE__ */ React.createElement(
                                                            $ConditionalVisibilityWrapper,
                                                            {
                                                              key: "p.ConversationalUI.Trace_Details.dataView1$visibility",
                                                              $widgetId: "p.ConversationalUI.Trace_Details.dataView1$visibility",
                                                              visible: ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                              }),
                                                              contents: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $DataView,
                                                                  {
                                                                    key: "p.ConversationalUI.Trace_Details.dataView1",
                                                                    $widgetId: "p.ConversationalUI.Trace_Details.dataView1",
                                                                    class: "mx-name-dataView1 form-horizontal",
                                                                    style: void 0,
                                                                    tabIndex: void 0,
                                                                    object: AssociationObjectProperty({
                                                                      "dataSourceId": "p.433",
                                                                      "scope": "p.ConversationalUI.Trace_Details.treeNode1",
                                                                      "editable": true,
                                                                      "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                      "operationId": "TSjWh7PU4VGI44a7FIRZ5Q"
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
                                                                          key: "p.ConversationalUI.Trace_Details.container30",
                                                                          $widgetId: "p.ConversationalUI.Trace_Details.container30",
                                                                          class: "mx-name-container30 row-text-img",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Image,
                                                                              {
                                                                                key: "p.ConversationalUI.Trace_Details.image2",
                                                                                $widgetId: "p.ConversationalUI.Trace_Details.image2",
                                                                                datasource: "icon",
                                                                                imageObject: void 0,
                                                                                defaultImageDynamic: void 0,
                                                                                imageUrl: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                  })
                                                                                ]),
                                                                                imageIcon: WebIconProperty({
                                                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                                                class: "mx-name-image2 unset-img-width",
                                                                                style: void 0,
                                                                                tabIndex: void 0
                                                                              }
                                                                            ),
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Text,
                                                                              {
                                                                                key: "p.ConversationalUI.Trace_Details.text4",
                                                                                $widgetId: "p.ConversationalUI.Trace_Details.text4",
                                                                                class: "mx-name-text4",
                                                                                style: void 0,
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView1", "source": "object" } } }
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
                                                                    hideFooter: false,
                                                                    footer: void 0
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
                                          }),
                                          headerCaption: selectTranslation([
                                            void 0
                                          ]),
                                          hasChildren: true,
                                          startExpanded: true,
                                          children: TemplatedWidgetProperty({
                                            "dataSourceId": "p.20",
                                            "editable": false,
                                            "children": () => [
                                              /* @__PURE__ */ React.createElement(
                                                $TreeNode,
                                                {
                                                  key: "p.ConversationalUI.Trace_Details.treeNode2",
                                                  $widgetId: "p.ConversationalUI.Trace_Details.treeNode2",
                                                  advancedMode: false,
                                                  datasource: MicroflowObjectListProperty({
                                                    "argMap": { "SpanTreeView_Parent": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } },
                                                    "dataSourceId": "p.21",
                                                    "entity": "ConversationalUI.SpanTreeView",
                                                    "scope": "p.ConversationalUI.Trace_Details.treeNode1",
                                                    "operationId": "ZjwXVR+5IlezVTnT55eSAw"
                                                  }),
                                                  headerType: "custom",
                                                  openNodeOn: "iconClick",
                                                  headerContent: TemplatedWidgetProperty({
                                                    "dataSourceId": "p.21",
                                                    "editable": false,
                                                    "children": () => [
                                                      /* @__PURE__ */ React.createElement(
                                                        $Container,
                                                        {
                                                          key: "p.ConversationalUI.Trace_Details.container10",
                                                          $widgetId: "p.ConversationalUI.Trace_Details.container10",
                                                          class: "mx-name-container10 row-text-img",
                                                          style: void 0,
                                                          renderMode: "div",
                                                          onClick: void 0,
                                                          content: [
                                                            /* @__PURE__ */ React.createElement(
                                                              $Container,
                                                              {
                                                                key: "p.ConversationalUI.Trace_Details.container3",
                                                                $widgetId: "p.ConversationalUI.Trace_Details.container3",
                                                                class: "mx-name-container3 row-text-img",
                                                                style: void 0,
                                                                tabIndex: void 0,
                                                                renderMode: "div",
                                                                onClick: ActionProperty({
                                                                  "action": { "type": "callMicroflow", "argMap": { "SpanTreeView": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" }, "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } }, "config": { "operationId": "Uqaw0YoAG1y4G0ddtEPbug", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true }
                                                                }),
                                                                content: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $ConditionalVisibilityWrapper,
                                                                    {
                                                                      key: "p.ConversationalUI.Trace_Details.image23$visibility",
                                                                      $widgetId: "p.ConversationalUI.Trace_Details.image23$visibility",
                                                                      visible: ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                      }),
                                                                      contents: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Image,
                                                                          {
                                                                            key: "p.ConversationalUI.Trace_Details.image23",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.image23",
                                                                            datasource: "icon",
                                                                            imageObject: void 0,
                                                                            defaultImageDynamic: void 0,
                                                                            imageUrl: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              })
                                                                            ]),
                                                                            imageIcon: WebIconProperty({
                                                                              "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$text_sparkle.svg" }
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
                                                                            class: "mx-name-image23 img--24-24 spacing-outer-right-smaller",
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
                                                                      key: "p.ConversationalUI.Trace_Details.image24$visibility",
                                                                      $widgetId: "p.ConversationalUI.Trace_Details.image24$visibility",
                                                                      visible: ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "KnowledgeBaseCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                      }),
                                                                      contents: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Image,
                                                                          {
                                                                            key: "p.ConversationalUI.Trace_Details.image24",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.image24",
                                                                            datasource: "icon",
                                                                            imageObject: void 0,
                                                                            defaultImageDynamic: void 0,
                                                                            imageUrl: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              })
                                                                            ]),
                                                                            imageIcon: WebIconProperty({
                                                                              "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                                            class: "mx-name-image24 img--24-24 spacing-outer-right-smaller",
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
                                                                      key: "p.ConversationalUI.Trace_Details.image29$visibility",
                                                                      $widgetId: "p.ConversationalUI.Trace_Details.image29$visibility",
                                                                      visible: ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "MCPCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                      }),
                                                                      contents: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Image,
                                                                          {
                                                                            key: "p.ConversationalUI.Trace_Details.image29",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.image29",
                                                                            datasource: "icon",
                                                                            imageObject: void 0,
                                                                            defaultImageDynamic: void 0,
                                                                            imageUrl: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              })
                                                                            ]),
                                                                            imageIcon: WebIconProperty({
                                                                              "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$MCP.svg" }
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
                                                                            class: "mx-name-image29 img--24-24 spacing-outer-right-smaller",
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
                                                                      key: "p.ConversationalUI.Trace_Details.image28$visibility",
                                                                      $widgetId: "p.ConversationalUI.Trace_Details.image28$visibility",
                                                                      visible: ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ToolCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                      }),
                                                                      contents: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Image,
                                                                          {
                                                                            key: "p.ConversationalUI.Trace_Details.image28",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.image28",
                                                                            datasource: "icon",
                                                                            imageObject: void 0,
                                                                            defaultImageDynamic: void 0,
                                                                            imageUrl: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                              })
                                                                            ]),
                                                                            imageIcon: WebIconProperty({
                                                                              "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                            class: "mx-name-image28 img--24-24 spacing-outer-right-smaller",
                                                                            style: void 0,
                                                                            tabIndex: void 0
                                                                          }
                                                                        )
                                                                      ]
                                                                    }
                                                                  ),
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $Tooltip,
                                                                    {
                                                                      key: "p.ConversationalUI.Trace_Details.tooltip4",
                                                                      $widgetId: "p.ConversationalUI.Trace_Details.tooltip4",
                                                                      trigger: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Text,
                                                                          {
                                                                            key: "p.ConversationalUI.Trace_Details.text14",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.text14",
                                                                            class: "mx-name-text14 font-size-medium text-clamp--1-lines tree-item-hover",
                                                                            style: void 0,
                                                                            caption: selectTranslation([
                                                                              ExpressionProperty({
                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                              })
                                                                            ]),
                                                                            renderMode: "span"
                                                                          }
                                                                        )
                                                                      ],
                                                                      renderMethod: "custom",
                                                                      htmlMessage: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Container,
                                                                          {
                                                                            key: "p.ConversationalUI.Trace_Details.container35",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.container35",
                                                                            class: "mx-name-container35 tooltip-container",
                                                                            style: void 0,
                                                                            renderMode: "div",
                                                                            onClick: void 0,
                                                                            content: [
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $Text,
                                                                                {
                                                                                  key: "p.ConversationalUI.Trace_Details.text16",
                                                                                  $widgetId: "p.ConversationalUI.Trace_Details.text16",
                                                                                  class: "mx-name-text16",
                                                                                  style: void 0,
                                                                                  caption: selectTranslation([
                                                                                    ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
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
                                                                      textMessage: selectTranslation([
                                                                        ExpressionProperty({
                                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                      ]),
                                                                      tooltipPosition: "right",
                                                                      arrowPosition: "end",
                                                                      openOn: "hover",
                                                                      class: "mx-name-tooltip4 convui-tooltip",
                                                                      style: void 0,
                                                                      tabIndex: void 0
                                                                    }
                                                                  ),
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $DataView,
                                                                    {
                                                                      key: "p.ConversationalUI.Trace_Details.dataView8",
                                                                      $widgetId: "p.ConversationalUI.Trace_Details.dataView8",
                                                                      class: "mx-name-dataView8 form-horizontal",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      object: AssociationObjectProperty({
                                                                        "dataSourceId": "p.468",
                                                                        "scope": "p.ConversationalUI.Trace_Details.treeNode2",
                                                                        "editable": true,
                                                                        "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                        "operationId": "mPbelsF9vliXhcXI4n4fiA"
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
                                                                            key: "p.ConversationalUI.Trace_Details.container36$visibility",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.container36$visibility",
                                                                            visible: ExpressionProperty({
                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsError" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView8", "source": "object" } } }
                                                                            }),
                                                                            contents: [
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $Container,
                                                                                {
                                                                                  key: "p.ConversationalUI.Trace_Details.container36",
                                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container36",
                                                                                  class: "mx-name-container36 spacing-outer-left-small",
                                                                                  style: void 0,
                                                                                  renderMode: "div",
                                                                                  onClick: void 0,
                                                                                  content: [
                                                                                    /* @__PURE__ */ React.createElement(
                                                                                      $Image,
                                                                                      {
                                                                                        key: "p.ConversationalUI.Trace_Details.image36",
                                                                                        $widgetId: "p.ConversationalUI.Trace_Details.image36",
                                                                                        datasource: "icon",
                                                                                        imageObject: void 0,
                                                                                        defaultImageDynamic: void 0,
                                                                                        imageUrl: selectTranslation([
                                                                                          ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                          })
                                                                                        ]),
                                                                                        imageIcon: WebIconProperty({
                                                                                          "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                                        class: "mx-name-image36 unset-img-width",
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
                                                                        )
                                                                      ],
                                                                      hideFooter: false,
                                                                      footer: void 0
                                                                    }
                                                                  )
                                                                ],
                                                                ariaHidden: false
                                                              }
                                                            ),
                                                            /* @__PURE__ */ React.createElement(
                                                              $Container,
                                                              {
                                                                key: "p.ConversationalUI.Trace_Details.container11",
                                                                $widgetId: "p.ConversationalUI.Trace_Details.container11",
                                                                class: "mx-name-container11 row-text-img tree-duration-position",
                                                                style: void 0,
                                                                renderMode: "div",
                                                                onClick: void 0,
                                                                content: [
                                                                  /* @__PURE__ */ React.createElement(
                                                                    $DataView,
                                                                    {
                                                                      key: "p.ConversationalUI.Trace_Details.dataView2",
                                                                      $widgetId: "p.ConversationalUI.Trace_Details.dataView2",
                                                                      class: "mx-name-dataView2 form-horizontal",
                                                                      style: void 0,
                                                                      tabIndex: void 0,
                                                                      object: AssociationObjectProperty({
                                                                        "dataSourceId": "p.478",
                                                                        "scope": "p.ConversationalUI.Trace_Details.treeNode2",
                                                                        "editable": true,
                                                                        "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                        "operationId": "HI+vxA8t0l6eMisgZnSJkw"
                                                                      }),
                                                                      emptyMessage: TextProperty({
                                                                        "value": selectTranslation([
                                                                          ""
                                                                        ])
                                                                      }),
                                                                      body: [
                                                                        /* @__PURE__ */ React.createElement(
                                                                          $Fragment,
                                                                          {
                                                                            key: "p.ConversationalUI.Trace_Details.snippetCall3",
                                                                            $widgetId: "p.ConversationalUI.Trace_Details.snippetCall3",
                                                                            content: [
                                                                              /* @__PURE__ */ React.createElement(
                                                                                $Container,
                                                                                {
                                                                                  key: "p.ConversationalUI.Snippet_SpanDuration.container1",
                                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanDuration.container1",
                                                                                  class: "mx-name-container1 row-text-img",
                                                                                  style: void 0,
                                                                                  renderMode: "div",
                                                                                  onClick: void 0,
                                                                                  content: [
                                                                                    /* @__PURE__ */ React.createElement(
                                                                                      $Image,
                                                                                      {
                                                                                        key: "p.ConversationalUI.Snippet_SpanDuration.image1",
                                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanDuration.image1",
                                                                                        datasource: "icon",
                                                                                        imageObject: void 0,
                                                                                        defaultImageDynamic: void 0,
                                                                                        imageUrl: selectTranslation([
                                                                                          ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                          })
                                                                                        ]),
                                                                                        imageIcon: WebIconProperty({
                                                                                          "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                                                        class: "mx-name-image1 unset-img-width",
                                                                                        style: void 0,
                                                                                        tabIndex: void 0
                                                                                      }
                                                                                    ),
                                                                                    /* @__PURE__ */ React.createElement(
                                                                                      $Text,
                                                                                      {
                                                                                        key: "p.ConversationalUI.Snippet_SpanDuration.text1",
                                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanDuration.text1",
                                                                                        class: "mx-name-text1",
                                                                                        style: void 0,
                                                                                        caption: selectTranslation([
                                                                                          ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "Span": { "widget": "p.ConversationalUI.Trace_Details.dataView2", "source": "object" } } }
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
                                                          ],
                                                          ariaHidden: false
                                                        }
                                                      )
                                                    ]
                                                  }),
                                                  headerCaption: selectTranslation([
                                                    void 0
                                                  ]),
                                                  hasChildren: true,
                                                  startExpanded: true,
                                                  children: TemplatedWidgetProperty({
                                                    "dataSourceId": "p.21",
                                                    "editable": false,
                                                    "children": () => [
                                                      /* @__PURE__ */ React.createElement(
                                                        $TreeNode,
                                                        {
                                                          key: "p.ConversationalUI.Trace_Details.treeNode3",
                                                          $widgetId: "p.ConversationalUI.Trace_Details.treeNode3",
                                                          advancedMode: false,
                                                          datasource: MicroflowObjectListProperty({
                                                            "argMap": { "SpanTreeView_Parent": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } },
                                                            "dataSourceId": "p.22",
                                                            "entity": "ConversationalUI.SpanTreeView",
                                                            "scope": "p.ConversationalUI.Trace_Details.treeNode2",
                                                            "operationId": "vh7eZr/MDlGYRi0RZSrH7A"
                                                          }),
                                                          headerType: "custom",
                                                          openNodeOn: "iconClick",
                                                          headerContent: TemplatedWidgetProperty({
                                                            "dataSourceId": "p.22",
                                                            "editable": false,
                                                            "children": () => [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Details.container24",
                                                                  $widgetId: "p.ConversationalUI.Trace_Details.container24",
                                                                  class: "mx-name-container24 row-text-img",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container26",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container26",
                                                                        class: "mx-name-container26 row-text-img",
                                                                        style: void 0,
                                                                        tabIndex: void 0,
                                                                        renderMode: "div",
                                                                        onClick: ActionProperty({
                                                                          "action": { "type": "callMicroflow", "argMap": { "SpanTreeView": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" }, "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } }, "config": { "operationId": "Uqaw0YoAG1y4G0ddtEPbug", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true }
                                                                        }),
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.image26$visibility",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.image26$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.image26",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.image26",
                                                                                    datasource: "icon",
                                                                                    imageObject: void 0,
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: WebIconProperty({
                                                                                      "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$text_sparkle.svg" }
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
                                                                                    class: "mx-name-image26 img--24-24 spacing-outer-right-smaller",
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
                                                                              key: "p.ConversationalUI.Trace_Details.image27$visibility",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.image27$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "KnowledgeBaseCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.image27",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.image27",
                                                                                    datasource: "icon",
                                                                                    imageObject: void 0,
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: WebIconProperty({
                                                                                      "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                                                    class: "mx-name-image27 img--24-24 spacing-outer-right-smaller",
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
                                                                              key: "p.ConversationalUI.Trace_Details.image30$visibility",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.image30$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "MCPCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.image30",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.image30",
                                                                                    datasource: "icon",
                                                                                    imageObject: void 0,
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: WebIconProperty({
                                                                                      "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$MCP.svg" }
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
                                                                                    class: "mx-name-image30 img--24-24 spacing-outer-right-smaller",
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
                                                                              key: "p.ConversationalUI.Trace_Details.image31$visibility",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.image31$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ToolCall" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Image,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.image31",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.image31",
                                                                                    datasource: "icon",
                                                                                    imageObject: void 0,
                                                                                    defaultImageDynamic: void 0,
                                                                                    imageUrl: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                      })
                                                                                    ]),
                                                                                    imageIcon: WebIconProperty({
                                                                                      "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                                    class: "mx-name-image31 img--24-24 spacing-outer-right-smaller",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0
                                                                                  }
                                                                                )
                                                                              ]
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Tooltip,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.tooltip5",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.tooltip5",
                                                                              trigger: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Text,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.text15",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.text15",
                                                                                    class: "mx-name-text15 font-size-medium text-clamp--1-lines tree-item-hover",
                                                                                    style: void 0,
                                                                                    caption: selectTranslation([
                                                                                      ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                                      })
                                                                                    ]),
                                                                                    renderMode: "span"
                                                                                  }
                                                                                )
                                                                              ],
                                                                              renderMethod: "custom",
                                                                              htmlMessage: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Container,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.container39",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.container39",
                                                                                    class: "mx-name-container39 tooltip-container",
                                                                                    style: void 0,
                                                                                    renderMode: "div",
                                                                                    onClick: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Text,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Trace_Details.text17",
                                                                                          $widgetId: "p.ConversationalUI.Trace_Details.text17",
                                                                                          class: "mx-name-text17",
                                                                                          style: void 0,
                                                                                          caption: selectTranslation([
                                                                                            ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
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
                                                                              textMessage: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              tooltipPosition: "right",
                                                                              arrowPosition: "end",
                                                                              openOn: "hover",
                                                                              class: "mx-name-tooltip5 convui-tooltip",
                                                                              style: void 0,
                                                                              tabIndex: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $DataView,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.dataView9",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.dataView9",
                                                                              class: "mx-name-dataView9 form-horizontal",
                                                                              style: void 0,
                                                                              tabIndex: void 0,
                                                                              object: AssociationObjectProperty({
                                                                                "dataSourceId": "p.515",
                                                                                "scope": "p.ConversationalUI.Trace_Details.treeNode3",
                                                                                "editable": true,
                                                                                "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                "operationId": "WAv2MT7HCFu4e3srjXMpUQ"
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
                                                                                    key: "p.ConversationalUI.Trace_Details.container34$visibility",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.container34$visibility",
                                                                                    visible: ExpressionProperty({
                                                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsError" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView9", "source": "object" } } }
                                                                                    }),
                                                                                    contents: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Trace_Details.container34",
                                                                                          $widgetId: "p.ConversationalUI.Trace_Details.container34",
                                                                                          class: "mx-name-container34 spacing-outer-left-small",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Image,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Trace_Details.image34",
                                                                                                $widgetId: "p.ConversationalUI.Trace_Details.image34",
                                                                                                datasource: "icon",
                                                                                                imageObject: void 0,
                                                                                                defaultImageDynamic: void 0,
                                                                                                imageUrl: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                imageIcon: WebIconProperty({
                                                                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                                                class: "mx-name-image34 unset-img-width",
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
                                                                                )
                                                                              ],
                                                                              hideFooter: false,
                                                                              footer: void 0
                                                                            }
                                                                          )
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Details.container29",
                                                                        $widgetId: "p.ConversationalUI.Trace_Details.container29",
                                                                        class: "mx-name-container29 row-text-img tree-duration-position",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $DataView,
                                                                            {
                                                                              key: "p.ConversationalUI.Trace_Details.dataView4",
                                                                              $widgetId: "p.ConversationalUI.Trace_Details.dataView4",
                                                                              class: "mx-name-dataView4 form-horizontal",
                                                                              style: void 0,
                                                                              tabIndex: void 0,
                                                                              object: AssociationObjectProperty({
                                                                                "dataSourceId": "p.525",
                                                                                "scope": "p.ConversationalUI.Trace_Details.treeNode3",
                                                                                "editable": true,
                                                                                "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                "operationId": "TpPNdRwcelape3vk6Cx1Iw"
                                                                              }),
                                                                              emptyMessage: TextProperty({
                                                                                "value": selectTranslation([
                                                                                  ""
                                                                                ])
                                                                              }),
                                                                              body: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Fragment,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Trace_Details.snippetCall4",
                                                                                    $widgetId: "p.ConversationalUI.Trace_Details.snippetCall4",
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Container,
                                                                                        {
                                                                                          key: "p.ConversationalUI.Snippet_SpanDuration.container1.528",
                                                                                          $widgetId: "p.ConversationalUI.Snippet_SpanDuration.container1.528",
                                                                                          class: "mx-name-container1 row-text-img",
                                                                                          style: void 0,
                                                                                          renderMode: "div",
                                                                                          onClick: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Image,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_SpanDuration.image1.529",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_SpanDuration.image1.529",
                                                                                                datasource: "icon",
                                                                                                imageObject: void 0,
                                                                                                defaultImageDynamic: void 0,
                                                                                                imageUrl: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                imageIcon: WebIconProperty({
                                                                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                                                                class: "mx-name-image1 unset-img-width",
                                                                                                style: void 0,
                                                                                                tabIndex: void 0
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Text,
                                                                                              {
                                                                                                key: "p.ConversationalUI.Snippet_SpanDuration.text1.530",
                                                                                                $widgetId: "p.ConversationalUI.Snippet_SpanDuration.text1.530",
                                                                                                class: "mx-name-text1",
                                                                                                style: void 0,
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "Span": { "widget": "p.ConversationalUI.Trace_Details.dataView4", "source": "object" } } }
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
                                                                  ],
                                                                  ariaHidden: false
                                                                }
                                                              )
                                                            ]
                                                          }),
                                                          headerCaption: selectTranslation([
                                                            void 0
                                                          ]),
                                                          hasChildren: true,
                                                          startExpanded: true,
                                                          children: void 0,
                                                          animate: true,
                                                          showIcon: "left",
                                                          expandedIcon: void 0,
                                                          collapsedIcon: void 0,
                                                          animateIcon: false,
                                                          class: "mx-name-treeNode3 spacing-inner-none",
                                                          style: void 0,
                                                          tabIndex: void 0
                                                        }
                                                      )
                                                    ]
                                                  }),
                                                  animate: true,
                                                  showIcon: "left",
                                                  expandedIcon: void 0,
                                                  collapsedIcon: void 0,
                                                  animateIcon: true,
                                                  class: "mx-name-treeNode2 spacing-inner-none",
                                                  style: void 0,
                                                  tabIndex: void 0
                                                }
                                              )
                                            ]
                                          }),
                                          animate: true,
                                          showIcon: "left",
                                          expandedIcon: void 0,
                                          collapsedIcon: void 0,
                                          animateIcon: false,
                                          class: "mx-name-treeNode1 spacing-inner-none tree-width",
                                          style: void 0,
                                          tabIndex: void 0
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
                        ],
                        ariaHidden: false
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
      ],
      hideFooter: true,
      footer: void 0
    }
  )
]);
const title = selectTranslation([
  "Trace Details"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const url = "/p/trace/{Trace/TraceId}";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_MasterBase.Main": region$Main
};

export { classes, content, style, title, url };
