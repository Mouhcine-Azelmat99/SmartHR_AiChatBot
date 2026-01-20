import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_Trace_CopyUserPrompt = {
  "name": "ConversationalUI.ACT_Trace_CopyUserPrompt",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "72432bfe-4204-4632-b783-903d10fdfe1a",
      "operationId": "3likZssz8leyObiYtjyD3Q",
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
      "type": "nanoflowCall",
      "label": "602f4128-c136-45a5-8d9b-ea9e33946957",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "Trace",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "7ba55ddb-a180-431e-949f-a577e7149468",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "b7679a90-6637-4026-8d80-f49bc006df20",
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
      "label": "19b83566-809a-4818-9ab5-a9355d2c88e6",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "6d5ecab6-40a0-4cd7-b001-6b56d1acfff0",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
