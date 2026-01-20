import { addEnumerations, t } from "mendix";

export const ACT_Textarea_ExecuteButtonAction = {
  "name": "ConversationalUI.ACT_Textarea_ExecuteButtonAction",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "e0e074eb-6a49-48b9-b047-863228838134",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/conversationalui/actions/Textarea_ExecuteButtonAction").Textarea_ExecuteButtonAction,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "textAreaUserPrompt"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "btnSendMessage"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": true
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": false
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "e5fc74eb-219c-4776-a4b0-bb19acbbb96b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
