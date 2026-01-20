import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_Toolspan_CopyInput = {
  "name": "ConversationalUI.ACT_Toolspan_CopyInput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "3a04b8f1-19f6-44bc-95c0-51eef972e64b",
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
      "label": "a650631b-48ed-4025-a792-5aeb96a79b58",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "ToolSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "14089165-26f1-42c4-874a-0fd4b82b7520",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "bebbe3fd-d1ae-4976-b675-4a9af56d162b",
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
      "label": "dac10d74-5590-412b-8c5b-3a1d33fb6244",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "5275dbd2-46ba-479d-8704-1106aea3b706",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
