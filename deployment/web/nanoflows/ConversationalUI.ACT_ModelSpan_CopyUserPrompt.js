import { addEnumerations, t } from "mendix";
import { CopyToClipboard } from "./ConversationalUI.CopyToClipboard.js";

export const ACT_ModelSpan_CopyUserPrompt = {
  "name": "ConversationalUI.ACT_ModelSpan_CopyUserPrompt",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "f9c57793-08cb-4423-83bb-63e0f514a5b4",
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
      "label": "da27b698-2bef-4fdc-83dd-927a1a6283a4",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "ModelSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "b72955d9-f07e-43e8-8a94-7a56528afa1c",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "ac9be202-08e2-465b-a464-a6cb0b2293a2",
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
      "label": "90146ad5-4b62-4fe8-94fa-f7dfad225b2a",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "06f78748-399c-4d76-9357-da0eb323e4bd",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
