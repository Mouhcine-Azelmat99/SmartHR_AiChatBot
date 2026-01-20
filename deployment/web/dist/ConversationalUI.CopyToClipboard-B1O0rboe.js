import { reactExports, asPluginWidgets, PlaceholderProperty, getAugmentedNamespace } from './index-B-pQLZz2.js';
import { Placeholder } from './Placeholder-C1uYYDJ5.js';
import './index-DpgUatDd.js';
import { require$$0 as require$$0$1 } from './Wait-B4JnrbPE.js';
import { require$$0 as require$$0$2 } from './JS_CopyToClipboard-B7E1Uot7.js';

const React = { createElement: reactExports.createElement };
const { $Placeholder } = asPluginWidgets({ Placeholder });
const region$Main = [
  /* @__PURE__ */ React.createElement(
    $Placeholder,
    {
      key: "l.ConversationalUI.Layout_SlideIn.Main",
      $widgetId: "l.ConversationalUI.Layout_SlideIn.Main",
      content: PlaceholderProperty({
        "id": "ConversationalUI.Layout_SlideIn.Main"
      })
    }
  )
];
const content = {
  "Main": region$Main
};

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} selector
 * @param {string} className
 * @returns {Promise.<void>}
 */
async function JS_SlideIn_Close(selector, className) {
  // BEGIN USER CODE
  var element = document.getElementsByClassName(selector)[0];
  if (element) {
    element.classList.add(className);
  } else {
    console.error('Element not found');
  }
  // END USER CODE
}

var JS_SlideIn_Close$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    JS_SlideIn_Close: JS_SlideIn_Close
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(JS_SlideIn_Close$1);

const ACT_Trace_CloseSlideIn = {
  "name": "ConversationalUI.ACT_Trace_CloseSlideIn",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "614585b5-4684-48e4-96a8-ca36c2b05cce",
      "operationId": "I1KEv/2AZ1anbbfTKxInOw",
      "parameters": [
        {
          "name": "SpanTreeView",
          "value": {
            "type": "variable",
            "variable": "SpanTreeView"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "11795e66-36e1-47a2-ae02-c01268b3c9f7",
      "action": () => require$$0.JS_SlideIn_Close,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "layout-slidein"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "slidein-close"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "aa8d8515-150d-4819-b12f-0d1361c550cb",
      "action": () => require$$0$1.Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "300"
          }
        }
      ]
    },
    {
      "type": "switch",
      "label": "013748c6-9267-4250-a3ff-681ffaa4b0a5",
      "condition": {
        "type": "function",
        "name": ">",
        "parameters": [
          {
            "type": "variable",
            "variable": "TraceView",
            "path": "PageCounter"
          },
          {
            "type": "literalNumeric",
            "value": "0"
          }
        ]
      },
      "targets": {
        "true": "7ac73f3f-de7c-451c-9c08-11f363750881",
        "false": "2a5a7ec7-8d2e-4cdb-8f67-8ed9bf6e8378"
      }
    },
    {
      "type": "return",
      "label": "2a5a7ec7-8d2e-4cdb-8f67-8ed9bf6e8378",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "closeForm",
      "label": "7ac73f3f-de7c-451c-9c08-11f363750881",
      "numberOfPagesToClose": {
        "type": "variable",
        "variable": "TraceView",
        "path": "PageCounter"
      }
    },
    {
      "type": "changeObject",
      "label": "f6ed9edc-2b33-40bd-b7b3-15488d42da7f",
      "inputVar": "TraceView",
      "member": "PageCounter",
      "value": {
        "type": "literalNumeric",
        "value": "0"
      }
    },
    {
      "type": "return",
      "label": "489113b3-6d75-4272-aaca-a33de93b46c6",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const CopyToClipboard = {
  "name": "ConversationalUI.CopyToClipboard",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "3d9a437b-1fab-4efa-81b3-579039d4caac",
      "action": () => require$$0$2.JS_CopyToClipboard,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "CopiedString"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "18348f21-4cb2-4800-a51b-6b8a810090d9",
      "action": () => require$$0$1.Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "300"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "7532f53d-5012-4106-8c58-d76b1da63e07",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

export { ACT_Trace_CloseSlideIn, CopyToClipboard, content };
