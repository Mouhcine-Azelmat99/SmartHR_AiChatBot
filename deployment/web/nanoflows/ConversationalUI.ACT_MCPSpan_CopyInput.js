import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_MCPSpan_CopyInput = {
  "name": "ConversationalUI.ACT_MCPSpan_CopyInput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "a498e496-c6a9-4fd1-81b2-cbd56868b210",
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
      "label": "465002a1-54fd-4631-b13d-4495aab213ab",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "MCPSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "e197b09c-6bb0-4637-91f4-4af6b24bc329",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "b4d53c4f-1d72-4f63-9374-5456c18d5994",
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
      "label": "2eba1791-4051-46e9-a544-04b3c2fff06e",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "22f64e04-e2b7-4001-b826-bd183be40e3b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
