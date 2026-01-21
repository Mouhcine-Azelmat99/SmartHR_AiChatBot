import { addEnumerations, t } from "mendix";

export const CopyToClipboard = {
  "name": "ConversationalUI.CopyToClipboard",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "3d9a437b-1fab-4efa-81b3-579039d4caac",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/conversationalui/actions/JS_CopyToClipboard").JS_CopyToClipboard,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "CopiedString"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "18348f21-4cb2-4800-a51b-6b8a810090d9",
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
      "type": "return",
      "label": "7532f53d-5012-4106-8c58-d76b1da63e07",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
