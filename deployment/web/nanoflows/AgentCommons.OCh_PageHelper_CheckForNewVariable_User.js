import { addEnumerations, t } from "mendix";
import { Version_IsVariableInPrompt } from "./AgentCommons.Version_IsVariableInPrompt.js";
import { Version_UpdateVariables } from "./AgentCommons.Version_UpdateVariables.js";

export const OCh_PageHelper_CheckForNewVariable_User = {
  "name": "AgentCommons.OCh_PageHelper_CheckForNewVariable_User",
  "instructions": [
    {
      "type": "associationRetrieve",
      "label": "10144a33-d50b-4c1b-b328-a47923967fb9",
      "inputVar": "PageHelper",
      "association": "AgentCommons.PageHelper_Version",
      "direction": "direct",
      "entity": "AgentCommons.Version",
      "operationId": "TAxycw/tBVSiOY5Y4EPBXA",
      "retrieveSingleObject": true,
      "outputVar": "Version"
    },
    {
      "type": "microflowCall",
      "label": "fe77c2eb-303f-4788-ac11-49006ed6f041",
      "operationId": "jzAHoUulAVCbEobyfv8tqQ",
      "parameters": [
        {
          "name": "Version",
          "value": {
            "type": "variable",
            "variable": "Version"
          },
          "kind": "object"
        },
        {
          "name": "Version",
          "value": {
            "type": "variable",
            "variable": "Version"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "nanoflowCall",
      "label": "c4bfd13d-3ddb-440d-acb9-33a0992db644",
      "flow": () => Version_IsVariableInPrompt,
      "parameters": [
        {
          "name": "Version",
          "value": {
            "type": "variable",
            "variable": "Version"
          },
          "kind": "object"
        },
        {
          "name": "PromptString",
          "value": {
            "type": "variable",
            "variable": "Version",
            "path": "UserPrompt"
          },
          "kind": "primitive"
        }
      ],
      "outputVar": "IsVariableInPrompt"
    },
    {
      "type": "switch",
      "label": "45b94493-0145-4363-8eb8-839fe38d04bf",
      "condition": {
        "type": "variable",
        "variable": "IsVariableInPrompt"
      },
      "targets": {
        "false": "f10d1e04-b53b-4f03-93d5-c965a06fa1c0",
        "true": "48dcadf3-75d4-4075-b84c-71228ce5a9f2"
      }
    },
    {
      "type": "nanoflowCall",
      "label": "48dcadf3-75d4-4075-b84c-71228ce5a9f2",
      "flow": () => Version_UpdateVariables,
      "parameters": [
        {
          "name": "PageHelper",
          "value": {
            "type": "variable",
            "variable": "PageHelper"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "7fc6c327-9748-4b30-a2c2-1f9eb3603fe6",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/nanoflowcommons/actions/RefreshObject").RefreshObject,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "PageHelper"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "4d0f84c6-94b4-407c-a9fb-abfbf4afdfc8",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "return",
      "label": "f10d1e04-b53b-4f03-93d5-c965a06fa1c0",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
