import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_Trace_CopyAssistantResponse = {
  "name": "ConversationalUI.ACT_Trace_CopyAssistantResponse",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "2c9e1c94-14da-4e01-9c5c-65fba538ed5a",
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
      "label": "67af2b7f-6b04-4ce1-a018-cc91815babe4",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "Trace",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "ba1571a9-ab31-4f3e-bb5e-e96bb7a3d7cd",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "818b7fb9-38d2-495a-a0ac-6ac7d27c5910",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/nanoflowcommons/actions/Wait").Wait,
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
      "label": "d63c11d6-db36-4963-bac6-b07165dc1b6c",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "457f2cf3-716d-46d2-b9af-a426c246ef10",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
