import { addEnumerations, t } from "mendix";
import { ChatContext_SendMessage } from "./ConversationalUI.ChatContext_SendMessage.js";

export const ACT_ChatContext_SendMessage = {
  "name": "ConversationalUI.ACT_ChatContext_SendMessage",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "3cc43615-13c5-4c8c-a35a-65b4c88ab55a",
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
      "label": "a7bc7f0f-8d5b-420c-a43f-53f39a2d00a2",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
