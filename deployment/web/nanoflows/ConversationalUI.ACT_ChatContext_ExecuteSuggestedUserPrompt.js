import { addEnumerations, t } from "mendix";
import { ChatContext_SendMessage } from "./ConversationalUI.ChatContext_SendMessage.js";

export const ACT_ChatContext_ExecuteSuggestedUserPrompt = {
  "name": "ConversationalUI.ACT_ChatContext_ExecuteSuggestedUserPrompt",
  "instructions": [
    {
      "type": "changeObject",
      "label": "057990e6-1dde-4304-926e-adc11f9a8339",
      "inputVar": "ChatContext",
      "member": "CurrentUserPrompt",
      "value": {
        "type": "function",
        "name": "trim",
        "parameters": [
          {
            "type": "variable",
            "variable": "SuggestedUserPrompt",
            "path": "Content"
          }
        ]
      }
    },
    {
      "type": "nanoflowCall",
      "label": "a7e1b78a-5835-4872-891f-2cad38f78205",
      "flow": () => ChatContext_SendMessage,
      "parameters": [
        {
          "name": "ChatContext",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "52560940-3726-42c5-8deb-380aa1f31e98",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
