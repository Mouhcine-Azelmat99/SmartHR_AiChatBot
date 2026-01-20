import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_KnowledgeBaseSpan_CopyInput = {
  "name": "ConversationalUI.ACT_KnowledgeBaseSpan_CopyInput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "14185180-94cf-46bc-8304-d33c4d10ee75",
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
      "label": "3b71083b-497a-44f6-a4db-a0320e473cbd",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "KnowledgeBaseSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "3dd2b35d-020e-406b-b781-3293c8a33c2f",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "36aac776-22f7-4c68-acfe-51bcec5a002d",
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
      "label": "7ecf358e-5242-4790-8542-deae6c9d5af2",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "23edc188-e959-47b1-aec9-50a549e7c241",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
