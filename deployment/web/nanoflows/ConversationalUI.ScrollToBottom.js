import { addEnumerations, t } from "mendix";

export const ScrollToBottom = {
  "name": "ConversationalUI.ScrollToBottom",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "969dae52-0307-4d2e-b5e0-a265165e4345",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/nanoflowcommons/actions/Wait").Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "150"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "1945f8d9-aeac-42b7-9d5a-29494e001323",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/webactions/actions/ScrollTo").ScrollTo,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".listview-scroll-to-last> ul > li:last-child"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "2414d58f-da4b-4b88-ac9c-3656a7b48741",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
