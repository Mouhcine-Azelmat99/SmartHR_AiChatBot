import { addEnumerations, t } from "mendix";

export const ChatContext_SendMessage = {
  "name": "ConversationalUI.ChatContext_SendMessage",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "00d2cab6-5a4d-4d84-9b21-30c3012c546f",
      "operationId": "5QP4H+VeHVizITt0Tdj3Vw",
      "parameters": [
        {
          "name": "ChatContext",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          },
          "kind": "object"
        }
      ],
      "outputVar": "Success"
    },
    {
      "type": "switch",
      "label": "acfcc607-0a29-430d-8057-d8cfcf319477",
      "condition": {
        "type": "variable",
        "variable": "Success"
      },
      "targets": {
        "true": "fb120fd6-f7e1-4fe1-9d1f-11575e218cd6",
        "false": "9d2048a6-521b-4d95-82dc-03aa19aabfcc"
      }
    },
    {
      "type": "return",
      "label": "9d2048a6-521b-4d95-82dc-03aa19aabfcc",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "javaScriptActionCall",
      "label": "fb120fd6-f7e1-4fe1-9d1f-11575e218cd6",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/nanoflowcommons/actions/RefreshObject").RefreshObject,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "ChatContext"
          }
        }
      ]
    },
    {
      "type": "microflowCall",
      "label": "0df52ba9-5a25-478a-b047-4ed9a1e7bbf7",
      "operationId": "sxbNWkPhz1CgC2VXDIkcdg",
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
      "type": "javaScriptActionCall",
      "label": "9223ca6d-53e3-40d4-a047-cc6f43b6f0f3",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/webactions/actions/SetFocus").SetFocus,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".mx-name-textAreaUserPrompt"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "c0fa5289-5efc-4954-a066-b1a88356fcaa",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
