import { addEnumerations, t } from "mendix";

export const ACT_Trace_CloseSlideIn = {
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
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/conversationalui/actions/JS_SlideIn_Close").JS_SlideIn_Close,
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
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/nanoflowcommons/actions/Wait").Wait,
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
