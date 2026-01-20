import { reactExports, getAugmentedNamespace } from './index-B-pQLZz2.js';
import { require$$0 as require$$0$2 } from './Wait-B4JnrbPE.js';
import './index-DpgUatDd.js';

var r,c={exports:{}};
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/r=c,function(){var e={}.hasOwnProperty;function n(){for(var a=[],o=0;o<arguments.length;o++){var t=arguments[o];if(t){var l=typeof t;if("string"===l||"number"===l)a.push(t);else if(Array.isArray(t)){if(t.length){var i=n.apply(null,t);i&&a.push(i);}}else if("object"===l){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){a.push(t.toString());continue}for(var r in t)e.call(t,r)&&t[r]&&a.push(r);}}}return a.join(" ")}r.exports?(n.default=n,r.exports=n):window.classNames=n;}();var d=c.exports;function s(l){var i;const{animateContent:r,changeFocus:c,showHeaderIcon:s,toggleCollapsed:u,onToggleCompletion:p,loadContent:g}=l,[v,h]=reactExports.useState(l.collapsed),m=reactExports.useRef(v),w=reactExports.useRef(!1),C=reactExports.useRef(null),b=reactExports.useRef(null),f=reactExports.useRef(null),x=reactExports.useRef("always"===g);x.current||(x.current=!v);const y=reactExports.useCallback((()=>{b.current&&C.current&&w.current&&(v?(C.current.classList.remove("widget-accordion-group-expanding"),b.current.style.height="",h(!1)):(C.current.classList.add("widget-accordion-group-collapsed"),C.current.classList.remove("widget-accordion-group-collapsing"),h(!0)),w.current=!1);}),[v]);reactExports.useEffect((()=>{l.collapsed!==v&&C.current&&b.current&&f.current&&r?(w.current=!0,l.collapsed?(b.current.style.height="".concat(f.current.getBoundingClientRect().height,"px"),C.current.classList.add("widget-accordion-group-collapsing"),setTimeout((()=>{b.current&&(b.current.style.height="");}),50)):(C.current.classList.add("widget-accordion-group-expanding"),C.current.classList.remove("widget-accordion-group-collapsed"),setTimeout((()=>{b.current&&f.current&&(b.current.style.height="".concat(f.current.getBoundingClientRect().height,"px"));}),50))):l.collapsed===v||r&&l.visible||h(l.collapsed);}),[l.collapsed,l.visible,v,r]),reactExports.useEffect((()=>{v!==m.current&&(m.current=v,null==p||p(l.collapsed));}),[l.collapsed,p,v]);const I=reactExports.useCallback((e=>{switch(e.key){case"Enter":case" ":e.preventDefault(),null==u||u();break;case"Home":e.preventDefault(),null==c||c(e.currentTarget,"first");break;case"End":e.preventDefault(),null==c||c(e.currentTarget,"last");break;case"Up":case"ArrowUp":e.preventDefault(),null==c||c(e.currentTarget,"previous");break;case"Down":case"ArrowDown":e.preventDefault(),null==c||c(e.currentTarget,"next");}}),[u,c]);return l.visible?reactExports.createElement("section",{ref:C,className:d("widget-accordion-group",{"widget-accordion-group-collapsed":v},l.dynamicClassName)},reactExports.createElement("header",{className:"widget-accordion-group-header"},reactExports.createElement("div",{id:"".concat(l.id,"HeaderButton"),className:d("widget-accordion-group-header-button",{"widget-accordion-group-header-button-clickable":l.collapsible,"widget-accordion-group-header-button-icon-left":l.collapsible&&"left"===s,"widget-accordion-group-header-button-icon-right":l.collapsible&&"right"===s}),tabIndex:l.collapsible?0:void 0,"data-focusindex":0,role:"button",onClick:l.collapsible?u:void 0,onKeyDown:l.collapsible?I:void 0,"aria-expanded":!v,"aria-disabled":!l.collapsible,"aria-controls":"".concat(l.id,"ContentWrapper")},l.header,!l.collapsible||"left"!==s&&"right"!==s?null:null===(i=l.generateHeaderIcon)||void 0===i?void 0:i.call(l,null!=v&&v))),reactExports.createElement("div",{ref:b,id:"".concat(l.id,"ContentWrapper"),className:"widget-accordion-group-content-wrapper","data-focusindex":0,onTransitionEnd:y,role:"region","aria-labelledby":"".concat(l.id,"HeaderButton")},reactExports.createElement("div",{ref:f,className:"widget-accordion-group-content"},x.current&&l.content))):null}function u(e){const a=reactExports.useRef((o=e.singleExpandedGroup?"single":"multiple",(e,n)=>{if("expand"===n.type&&"single"===o)return e.map(((e,a)=>a!==n.index));const a=[...e];return a[n.index]="collapse"===n.type,a}));var o;const[r,c]=reactExports.useReducer(a.current,void 0,(()=>{const n=e.groups.map((n=>!e.previewMode&&e.collapsible&&!!n.initiallyCollapsed));if(!e.previewMode&&e.singleExpandedGroup){const e=n.lastIndexOf(!1);if(e>-1)for(let a=0;a<e;a++)n[a]=!0;}return n})),s=reactExports.useRef(e.groups.map((e=>e.collapsed)));reactExports.useMemo((()=>{e.groups.forEach(((e,n)=>{void 0!==e.collapsed&&e.collapsed!==s.current[n]&&(s.current[n]=e.collapsed,c({type:e.collapsed?"collapse":"expand",index:n}));}));}),[e.groups]);const u=reactExports.useRef(null),g=e.groups.map(((n,a)=>reactExports.createElement(p,{key:a,index:a,parent:u,id:"".concat(e.id,"AccordionGroup").concat(a),collapsible:e.collapsible,accordionGroupCollapsedStateDispatch:c,...n,collapsed:r[a],animateContent:e.animateContent,generateHeaderIcon:e.generateHeaderIcon,showHeaderIcon:e.showGroupHeaderIcon})));return reactExports.createElement("div",{ref:u,id:e.id,className:d("widget-accordion",{"widget-accordion-preview":e.previewMode},e.class),style:e.style,"data-focusindex":e.tabIndex||0},g)}function p(e){const{accordionGroupCollapsedStateDispatch:n}=e,o=reactExports.useCallback((()=>{e.collapsed?n({type:"expand",index:e.index}):n({type:"collapse",index:e.index});}),[e.collapsed,n,e.index]),l=reactExports.useCallback(((n,a)=>{var o;if(e.parent.current&&n&&n instanceof Node){const t=Array.from(e.parent.current.querySelectorAll(":scope > .widget-accordion-group > .widget-accordion-group-header > .widget-accordion-group-header-button"));if(0===t.length)return;switch(a){case"first":t[0].focus();break;case"last":t[t.length-1].focus();break;case"previous":case"next":const e=t.findIndex((e=>e.isSameNode(n)));null===(o=t[e+("next"===a?1:-1)])||void 0===o||o.focus();}}}),[e.parent]);return reactExports.createElement(s,{key:e.index,id:e.id,header:e.header,content:e.content,collapsed:e.collapsed,visible:e.visible,dynamicClassName:e.dynamicClassName,collapsible:e.collapsible,toggleCollapsed:o,onToggleCompletion:e.onToggleCompletion,changeFocus:l,animateContent:e.animateContent,generateHeaderIcon:e.generateHeaderIcon,showHeaderIcon:e.showHeaderIcon,loadContent:e.loadContent})}function g(e){let n="h1";switch(e.heading){case"headingTwo":n="h2";break;case"headingThree":n="h3";break;case"headingFour":n="h4";break;case"headingFive":n="h5";break;case"headingSix":n="h6";}return reactExports.createElement(n,null,e.children)}const v=e=>{let{icon:n,className:a="",fallback:o}=e;return "glyph"===(null==n?void 0:n.type)?reactExports.createElement("span",{className:d("glyphicon",a,n.iconClass),"aria-hidden":!0}):"image"===(null==n?void 0:n.type)?reactExports.createElement("img",{className:a,src:n.iconUrl,"aria-hidden":!0,alt:""}):"icon"===(null==n?void 0:n.type)?reactExports.createElement("span",{className:d(a,n.iconClass),"aria-hidden":!0}):o||null};function h(e){let{data:n,loading:a,animate:o}=e;return n?reactExports.createElement(v,{icon:n,className:d("widget-accordion-group-header-button-icon",{"widget-accordion-group-header-button-icon-animate":o})}):a?null:reactExports.createElement("svg",{className:d("widget-accordion-group-header-button-icon",{"widget-accordion-group-header-button-icon-animate":o}),"aria-hidden":!0,width:"16",height:"16",viewBox:"0 0 16 16",xmlns:"http://www.w3.org/2000/svg"},reactExports.createElement("path",{d:"M1.64598 4.64601C1.69242 4.59945 1.7476 4.5625 1.80834 4.5373C1.86909 4.51209 1.93421 4.49911 1.99998 4.49911C2.06575 4.49911 2.13087 4.51209 2.19161 4.5373C2.25236 4.5625 2.30753 4.59945 2.35398 4.64601L7.99998 10.293L13.646 4.64601C13.6925 4.59952 13.7477 4.56264 13.8084 4.53749C13.8691 4.51233 13.9342 4.49938 14 4.49938C14.0657 4.49938 14.1308 4.51233 14.1916 4.53749C14.2523 4.56264 14.3075 4.59952 14.354 4.64601C14.4005 4.6925 14.4373 4.74769 14.4625 4.80842C14.4877 4.86916 14.5006 4.93426 14.5006 5.00001C14.5006 5.06575 14.4877 5.13085 14.4625 5.19159C14.4373 5.25233 14.4005 5.30752 14.354 5.35401L8.35398 11.354C8.30753 11.4006 8.25236 11.4375 8.19161 11.4627C8.13087 11.4879 8.06575 11.5009 7.99998 11.5009C7.93421 11.5009 7.86909 11.4879 7.80834 11.4627C7.7476 11.4375 7.69242 11.4006 7.64598 11.354L1.64598 5.35401C1.59942 5.30756 1.56247 5.25239 1.53727 5.19164C1.51206 5.1309 1.49908 5.06578 1.49908 5.00001C1.49908 4.93424 1.51206 4.86912 1.53727 4.80837C1.56247 4.74763 1.59942 4.69245 1.64598 4.64601V4.64601Z"}))}function m(e){var o,l,r,c,d,s;const p=reactExports.useRef(function(){const e="com.mendix.widgets.web.UUID";return window[e]||(window[e]=1),window[e]++}()),v=reactExports.useMemo((()=>function(e){if(function(e){return e.some((e=>void 0===e.visible.value||void 0===e.headerText.value||void 0===e.initiallyCollapsed.value||e.collapsed&&void 0===e.collapsed.value))}(e))return;return e.map((e=>{var n,a,o;let l=e.headerContent;return "text"===e.headerRenderMode&&(l=reactExports.createElement(g,{heading:e.headerHeading},e.headerText.value)),{header:l,content:e.content,collapsed:null===(n=e.collapsed)||void 0===n?void 0:n.value,initiallyCollapsed:"dynamic"===e.initialCollapsedState?e.initiallyCollapsed.value:"collapsed"===e.initialCollapsedState,visible:e.visible.value,dynamicClassName:null===(a=e.dynamicClass)||void 0===a?void 0:a.value,onToggleCompletion:null===(o=e.collapsed)||void 0===o?void 0:o.setValue,loadContent:e.loadContent}}))}(e.groups)),[e.groups]),m=(w=e.animateIcon,C={data:null===(o=e.icon)||void 0===o?void 0:o.value,loading:"loading"===(null===(l=e.icon)||void 0===l?void 0:l.status)},b={data:null===(r=e.expandIcon)||void 0===r?void 0:r.value,loading:"loading"===(null===(c=e.expandIcon)||void 0===c?void 0:c.status)},f={data:null===(d=e.collapseIcon)||void 0===d?void 0:d.value,loading:"loading"===(null===(s=e.collapseIcon)||void 0===s?void 0:s.status)},reactExports.useCallback((e=>reactExports.createElement(h,w?{...C,animate:w}:e?{...b,animate:w}:{...f,animate:w})),[w,C,b,f]));var w,C,b,f;return v?reactExports.createElement(u,{id:"Accordion".concat(p.current),class:e.class,style:e.style,tabIndex:e.tabIndex,groups:v,collapsible:e.collapsible,animateContent:e.animate,singleExpandedGroup:e.collapsible?"singleExpanded"===e.expandBehavior:void 0,generateHeaderIcon:m,showGroupHeaderIcon:e.showIcon}):null}v.displayName="IconInternal";

var AccordionWidgetModule = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Accordion: m
});

var undefined$1 = undefined;

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Updates an entity object without needing to refresh the whole page via passing an entity object.
 * @param {MxObject} objectToRefresh - Object which will be refreshed.
 * @returns {Promise.<void>}
 */
async function RefreshObject(objectToRefresh) {
  // BEGIN USER CODE
  if (!objectToRefresh) {
    return Promise.reject(new Error("ObjectToRefresh parameter is required"));
  }
  return new Promise(resolve => {
    mx.data.update({
      guid: objectToRefresh.getGuid(),
      callback: () => resolve(true)
    });
  });
  // END USER CODE
}

var RefreshObject$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	RefreshObject: RefreshObject
});

var require$$1$1 = /*@__PURE__*/getAugmentedNamespace(RefreshObject$1);

function setFocus(element) {
  clearSelection();
  element.focus();
  selectText(element);
}
function clearSelection() {
  // This is necessary for IE and Edge
  const selection = document.getSelection();
  if (selection === null || isEmptySelection(selection)) {
    // Prevent IE11 from switching focus to document.body unless absolutely necessary
    return;
  }
  selection.removeAllRanges();
  selection.addRange(document.createRange());
}
function isEmptySelection(selection) {
  if (selection.rangeCount === 1) {
    const range = selection.getRangeAt(0);
    return range.startOffset === range.endOffset;
  }
  return selection.rangeCount === 0;
}
function selectText(element) {
  const input = element;
  if (input.type === "text" || input.type === "password") {
    input.select();
  }
}
function getFocus() {
  const activeElement = document.activeElement && getHTMLElement(document.activeElement);
  return activeElement !== document.body ? activeElement : null;
}
function clearFocus() {
  const current = getFocus();
  if (current) {
    current.blur();
  }
}
function focusFirst(container) {
  const first = findFirst(container);
  if (first) {
    setFocus(first);
  }
}
function focusNext() {
  const next = findNext(getFocus());
  if (next) {
    setFocus(next);
  }
}
function findFirst(container) {
  return findNextInContainer(container, false);
}
function findNext(target) {
  let reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var _a;
  const element = target && getHTMLElement(target);
  const next = () => element && findNextNonWrapping(element, reverse);
  const wrapAround = () => {
    var _a;
    return findNextNonWrapping((_a = getFocusCapturingRoot(element)) !== null && _a !== void 0 ? _a : document.body, reverse);
  };
  return (_a = next()) !== null && _a !== void 0 ? _a : wrapAround();
}
function findNextNonWrapping(element) {
  let reverse = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const focusRoot = getFocusRoot(element);
  let current;
  if (!focusRoot.contains(element)) {
    if (isFocusable(focusRoot)) {
      return focusRoot;
    }
    current = focusRoot;
  } else {
    current = element;
  }
  let found;
  if (!reverse && isFocusContext(current) && !skipContainer(current)) {
    found = findNextInContainer(current, !!reverse);
    if (found) {
      return found;
    }
  }
  do {
    const context = findFocusContext(current, focusRoot);
    found = findNextInContainer(context, !!reverse, current);
    if (found) {
      return found;
    }
    if (reverse && isFocusable(context)) {
      return context;
    }
    current = context;
  } while (current !== focusRoot);
  return null;
}
const FOCUS_CONTEXT_ATTRIBUTE = "data-focusindex";
const FOCUS_CAPTURING_ATTRIBUTE = "data-focus-capturing";
const FOCUS_CAPTURING_MODAL = "modal";
const FOCUS_CAPTURING_NON_MODAL = "non-modal";
function findFocusContext(element, focusRoot) {
  if (element === focusRoot) {
    return focusRoot;
  }
  let current = element;
  while (current !== focusRoot && current.parentElement) {
    current = current.parentElement;
    if (isFocusContext(current)) {
      return current;
    }
  }
  return focusRoot;
}
function getFocusRoot(element) {
  var _a;
  const capturingRoot = getFocusCapturingRoot(element);
  if (!capturingRoot) {
    // We're outside all focus capturing elements, e.g. in a floating popup
    return document.body;
  }
  return (_a = getModalFocusRoot()) !== null && _a !== void 0 ? _a : capturingRoot;
}
function getModalFocusRoot() {
  const focusRoots = document.querySelectorAll(`[${FOCUS_CAPTURING_ATTRIBUTE}=${FOCUS_CAPTURING_MODAL}]`);
  const focusRoot = focusRoots.length ? focusRoots[focusRoots.length - 1] : null;
  return focusRoot && isHTMLElement(focusRoot) ? focusRoot : null;
}
function getFocusCapturingRoot(element) {
  if (!element || element === document.body) {
    return document.body;
  }
  let current = element;
  while (current && isHTMLElement(current)) {
    const captureMode = current.getAttribute(FOCUS_CAPTURING_ATTRIBUTE);
    if (captureMode === FOCUS_CAPTURING_MODAL || captureMode === FOCUS_CAPTURING_NON_MODAL) {
      return current;
    }
    current = current.parentElement;
  }
  return null;
}
function findNextInContainer(container, reverse, afterElement) {
  const startTabIndex = afterElement && afterElement !== container ? getEffectiveTabIndex(afterElement) : undefined;
  const candidates = gatherDescendants(container);
  const tabIndices = Object.keys(candidates).map(s => parseInt(s, 10)).filter(tabIndexFilter(startTabIndex, reverse)).sort(compareTabIndex);
  if (reverse) {
    tabIndices.reverse();
  }
  for (const tabIndex of tabIndices) {
    let array = candidates[tabIndex];
    if (array !== undefined) {
      if (reverse) {
        array.reverse();
      }
      if (tabIndex === startTabIndex) {
        array = array.slice(array.indexOf(afterElement) + 1);
      }
      const candidate = findNextInArray(array, reverse);
      if (candidate) {
        return candidate;
      }
    }
  }
  return null;
}
function findNextInArray(array, reverse) {
  for (const element of array) {
    if (!reverse && isFocusable(element)) {
      return element;
    }
    if (isFocusContext(element) && !skipContainer(element)) {
      const candidate = findNextInContainer(element, reverse);
      if (candidate) {
        return candidate;
      }
    }
    if (reverse && isFocusable(element)) {
      return element;
    }
  }
  return null;
}
function gatherDescendants(e) {
  let output = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  for (let i = 0; i < e.children.length; i++) {
    const child = e.children.item(i);
    if (!isHTMLElement(child)) {
      continue;
    }
    const tabIndex = getEffectiveTabIndex(child);
    const elements = output[tabIndex] = tabIndex in output ? output[tabIndex] : [];
    elements.push(child);
    if (!isFocusContext(child)) {
      gatherDescendants(child, output);
    }
  }
  return output;
}
function tabIndexFilter(startTabIndex, reverse) {
  return startTabIndex === undefined ? () => true : reverse ? t => compareTabIndex(t, startTabIndex) <= 0 : t => compareTabIndex(t, startTabIndex) >= 0;
}
function compareTabIndex(a, b) {
  return a === b ? 0 : a === 0 ? 1 : b === 0 ? -1 : a - b;
}
function isFocusContext(element) {
  return element === document.body || element.getAttribute(FOCUS_CONTEXT_ATTRIBUTE) !== null;
}
function getEffectiveTabIndex(element) {
  const focusIndex = getIntAttribute(element, FOCUS_CONTEXT_ATTRIBUTE);
  const tabIndexValue = focusIndex !== null ? focusIndex : getTabIndex(element);
  // An element with tabindex -1 is placed within the natural order of elements with effective tabindex 0
  return Math.max(0, tabIndexValue !== null && tabIndexValue !== void 0 ? tabIndexValue : 0);
}
function getTabIndex(element) {
  const tabIndex = getIntAttribute(element, "tabindex");
  return tabIndex !== -32768 ? tabIndex : null; // -32768 is returned by IE/Edge for tabindex="" :(
}
function getIntAttribute(element, attribute) {
  const value = element.getAttribute(attribute);
  return value ? parseInt(value, 10) : null;
}
function skipContainer(element) {
  return element.getAttribute(FOCUS_CONTEXT_ATTRIBUTE) === "-1";
}
function isFocusable(element) {
  return isNavigableElement(element) && isInteractive(element);
}
function isNavigableElement(element) {
  if (skipContainer(element)) {
    return false;
  }
  const tabIndex = getTabIndex(element);
  return (tabIndex === null ? getDefaultTabIndex(element) : tabIndex) >= 0;
}
function getFocusableContainer(target) {
  let element = getHTMLElement(target);
  while (element) {
    if (getTabIndex(element) !== null || getDefaultTabIndex(element) === 0) {
      return element;
    }
    element = element.parentElement;
  }
  return null;
}
function getDefaultTabIndex(element) {
  // We have to check this ourselves, because IE and Edge return the wrong default value for the tabIndex JS property.
  switch (element.tagName.toLowerCase()) {
    case "a":
    case "area":
    case "button":
    case "input":
    case "object":
    case "select":
    case "textarea":
      return 0;
    default:
      return element.getAttribute("contenteditable") ? 0 : -1;
  }
}
function isInteractive(element) {
  return isVisible(element) && isEnabled(element);
}
function isVisible(element) {
  if (element.offsetWidth === 0 && element.offsetHeight === 0) {
    return false;
  }
  return window.getComputedStyle(element).visibility === "visible";
}
function isEnabled(element) {
  return !element.disabled;
}
function getHTMLElement(target) {
  return isHTMLElement(target) ? target : isNode(target) ? target.parentElement : null;
}
function isNode(target) {
  return target.parentElement !== undefined;
}
function isHTMLElement(target) {
  return target.offsetParent !== undefined;
}

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Set focus to the element found with the selector, The element should be able to hold focus like a link, button, or input.
 * @param {string} targetSelector - Selector to reach the element to give focus. Examples: .warning to scroll to focus element with the class warning, or .mx-name-textBox1 to focus to a text box with the class mx-name-textBox1 (and name textBox1).
 * @returns {Promise.<void>}
 */
async function SetFocus(targetSelector) {
  // BEGIN USER CODE
  const targetNode = targetSelector ? document.querySelector(targetSelector) : null;
  if (targetNode) {
    if (isFocusable(targetNode)) {
      setFocus(targetNode);
    } else {
      // If the target is not focusable, select the first focusable within
      focusFirst(targetNode);
    }
  } else {
    console.warn(`No DOM node found to set focus for query selector ${targetSelector}`);
  }
  // END USER CODE
}

var SetFocus$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	SetFocus: SetFocus
});

var require$$0$1 = /*@__PURE__*/getAugmentedNamespace(SetFocus$1);

const ChatContext_SendMessage = {
  "name": "ConversationalUI.ChatContext_SendMessage",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "00d2cab6-5a4d-4d84-9b21-30c3012c546f",
      "operationId": "5QP4H+VeHVizITt0Tdj3Vw",
      "parameters": [
        {
          "name": "ChatContext",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          },
          "kind": "object"
        }
      ],
      "outputVar": "Success"
    },
    {
      "type": "switch",
      "label": "acfcc607-0a29-430d-8057-d8cfcf319477",
      "condition": {
        "type": "variable",
        "variable": "Success"
      },
      "targets": {
        "true": "fb120fd6-f7e1-4fe1-9d1f-11575e218cd6",
        "false": "9d2048a6-521b-4d95-82dc-03aa19aabfcc"
      }
    },
    {
      "type": "return",
      "label": "9d2048a6-521b-4d95-82dc-03aa19aabfcc",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "fb120fd6-f7e1-4fe1-9d1f-11575e218cd6",
      "action": () => require$$1$1.RefreshObject,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          }
        }
      ]
    },
    {
      "type": "microflowCall",
      "label": "0df52ba9-5a25-478a-b047-4ed9a1e7bbf7",
      "operationId": "sxbNWkPhz1CgC2VXDIkcdg",
      "parameters": [
        {
          "name": "ChatContext",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "9223ca6d-53e3-40d4-a047-cc6f43b6f0f3",
      "action": () => require$$0$1.SetFocus,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".mx-name-textAreaUserPrompt"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "c0fa5289-5efc-4954-a066-b1a88356fcaa",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_ChatContext_ExecuteSuggestedUserPrompt = {
  "name": "ConversationalUI.ACT_ChatContext_ExecuteSuggestedUserPrompt",
  "instructions": [
    {
      "type": "changeObject",
      "label": "057990e6-1dde-4304-926e-adc11f9a8339",
      "inputVar": "ChatContext",
      "member": "CurrentUserPrompt",
      "value": {
        "type": "function",
        "name": "trim",
        "parameters": [
          {
            "type": "variable",
            "variable": "SuggestedUserPrompt",
            "path": "Content"
          }
        ]
      }
    },
    {
      "type": "nanoflowCall",
      "label": "a7e1b78a-5835-4872-891f-2cad38f78205",
      "flow": () => ChatContext_SendMessage,
      "parameters": [
        {
          "name": "ChatContext",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "52560940-3726-42c5-8deb-380aa1f31e98",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_ChatContext_SendMessage = {
  "name": "ConversationalUI.ACT_ChatContext_SendMessage",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "3cc43615-13c5-4c8c-a35a-65b4c88ab55a",
      "flow": () => ChatContext_SendMessage,
      "parameters": [
        {
          "name": "ChatContext",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "a7bc7f0f-8d5b-420c-a43f-53f39a2d00a2",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Scroll the window to make targeted element visible
 * @param {string} targetSelector - Selector to reach the element to be scrolled to. Examples: .warning to scroll to an element with the class warning, or .mx-name-textBox1 to scroll to a text box with the class mx-name-textBox1 (and name textBox1).
 * @returns {Promise.<void>}
 */
async function ScrollTo(targetSelector) {
  // BEGIN USER CODE
  const element = document.querySelector(targetSelector);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  } else {
    console.log("no item found");
  }
  // END USER CODE
}

var ScrollTo$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	ScrollTo: ScrollTo
});

var require$$1 = /*@__PURE__*/getAugmentedNamespace(ScrollTo$1);

const ScrollToBottom = {
  "name": "ConversationalUI.ScrollToBottom",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "969dae52-0307-4d2e-b5e0-a265165e4345",
      "action": () => require$$0$2.Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "150"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "1945f8d9-aeac-42b7-9d5a-29494e001323",
      "action": () => require$$1.ScrollTo,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".listview-scroll-to-last> ul > li:last-child"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "2414d58f-da4b-4b88-ac9c-3656a7b48741",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

// BEGIN EXTRA CODE
function clickButton(buttonName) {
  //Get buttonElement. The mx-name is part of the class name

  const buttonElement = document.querySelector('button[class*="' + buttonName + '"]');
  if (buttonElement === null) {
    throw new Error("Button with that name could not be found.");
  }
  buttonElement.click();
}
// END EXTRA CODE

/**
 * This JavaScript action can be used in a nanoflow that was called from an event widget (when the component is loaded).
 * 
 * It is intended to create an event that listens to the user input in a textarea. Once either Enter or Shift+Enter is hitted, the specified button will be called. It is sufficient to call this action only once when the element is loaded.
 * 
 * Make sure that the names of the button and textarea match with the input parameters of this action. 
 * @param {string} textAreaName - Name of the textarea on the page that the event listens to. Can be changed under "Common".
 * @param {string} buttonName - Name of the button on the page that should be clicked. Can be changed under "Common".
 * @param {boolean} submitOnEnter - Button will be clicked when the users enters the enter key on their keyboard.
 * @param {boolean} submitOnShiftEnter - Button will be clicked when the users enters the enter and shift key on their keyboard.
 * @returns {Promise.<void>}
 */
async function Textarea_ExecuteButtonAction(textAreaName, buttonName, submitOnEnter, submitOnShiftEnter) {
  // BEGIN USER CODE
  try {
    //Validations
    if (!textAreaName || textAreaName.trim().length === 0) {
      throw new Error("TextAreaName is required.");
    }
    if (!buttonName || buttonName.trim().length === 0) {
      throw new Error("ButtonName is required.");
    }

    //Get textAreaElement. The mx-name is part of the ID.
    const textAreaElement = document.querySelector('textarea[id*="' + textAreaName + '"]');
    if (textAreaElement === null) {
      throw new Error("Textarea with that name could not be found.");
    }

    //Add Event Listener that clicks the button
    textAreaElement.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        if (event.shiftKey) {
          if (submitOnShiftEnter) {
            clickButton(buttonName);
          }
        } else if (!event.ctrlKey && !event.altKey && !event.metaKey) {
          if (submitOnEnter) {
            clickButton(buttonName);
          }
        }
      }
    });
  } catch (err) {
    console.error(err);
  }
  // END USER CODE
}

var Textarea_ExecuteButtonAction$1 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	Textarea_ExecuteButtonAction: Textarea_ExecuteButtonAction
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(Textarea_ExecuteButtonAction$1);

const ACT_Textarea_ExecuteButtonAction = {
  "name": "ConversationalUI.ACT_Textarea_ExecuteButtonAction",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "e0e074eb-6a49-48b9-b047-863228838134",
      "action": () => require$$0.Textarea_ExecuteButtonAction,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "textAreaUserPrompt"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "btnSendMessage"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": true
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": false
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "e5fc74eb-219c-4776-a4b0-bb19acbbb96b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

export { ACT_ChatContext_ExecuteSuggestedUserPrompt, ACT_ChatContext_SendMessage, ACT_Textarea_ExecuteButtonAction, AccordionWidgetModule, ScrollToBottom, require$$0$1 as require$$0, require$$1, require$$1$1 };
