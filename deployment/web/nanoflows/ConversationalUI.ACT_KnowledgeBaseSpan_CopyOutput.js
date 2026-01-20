import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_KnowledgeBaseSpan_CopyOutput = {
  "name": "ConversationalUI.ACT_KnowledgeBaseSpan_CopyOutput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "5676b913-858c-4ae5-a351-f1cabd1fa00d",
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
      "label": "7283cc96-1528-45ca-bef7-9c8e9ab12037",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "KnowledgeBaseSpan",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "06b1148b-66e6-469c-abaa-55ec89f763ac",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "3dec5322-6f51-4536-a516-fdf06742c3e3",
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
      "label": "e664235b-8e21-4438-a0dc-70fcc4d05639",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "bb68ab34-dce4-4b1b-9922-5eb26002633b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
