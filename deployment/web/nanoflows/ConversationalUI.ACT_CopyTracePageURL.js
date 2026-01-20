import { addEnumerations, t } from "mendix";

export const ACT_CopyTracePageURL = {
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
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/conversationalui/actions/JS_CopyToClipboard").JS_CopyToClipboard,
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
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/nanoflowcommons/actions/Wait").Wait,
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
