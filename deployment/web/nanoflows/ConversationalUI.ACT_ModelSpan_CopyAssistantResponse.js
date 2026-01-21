import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_ModelSpan_CopyAssistantResponse = {
  "name": "ConversationalUI.ACT_ModelSpan_CopyAssistantResponse",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "51026507-755b-438d-9e83-37d1464b8cb4",
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
      "label": "9ea5cdb1-642c-4c8b-87d5-dacedd65dde8",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "ModelSpan",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "39b1b918-578b-4eaa-ad86-ccd228c0866f",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "73f84b99-e1c7-4b45-8f10-86b33c933b32",
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
      "label": "8b3c3cb4-30ea-4f72-a7df-d485ad0d1f72",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "589e8294-0fb8-487f-9e07-b3eba1d39448",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
