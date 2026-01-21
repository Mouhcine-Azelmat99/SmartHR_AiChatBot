import { addEnumerations, t } from "mendix";
import { Version_IsVariableInPrompt } from "./AgentCommons.Version_IsVariableInPrompt.js";
import { Version_UpdateVariables } from "./AgentCommons.Version_UpdateVariables.js";

export const OCh_PageHelper_CheckForNewVariable_System = {
  "name": "AgentCommons.OCh_PageHelper_CheckForNewVariable_System",
  "instructions": [
    {
      "type": "associationRetrieve",
      "label": "59fc4f8f-8906-4340-a08d-3cbbfc3a2f81",
      "inputVar": "PageHelper",
      "association": "AgentCommons.PageHelper_Version",
      "direction": "direct",
      "entity": "AgentCommons.Version",
      "operationId": "PEOV6cVM7lCstS+wd9IygQ",
      "retrieveSingleObject": true,
      "outputVar": "Version"
    },
    {
      "type": "microflowCall",
      "label": "16535cdb-be67-40de-869e-ee101cf4748b",
      "operationId": "jzAHoUulAVCbEobyfv8tqQ",
      "parameters": [
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
      "label": "5de24d56-64dd-4b16-8be2-911c2ea14079",
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
            "path": "SystemPrompt"
          },
          "kind": "primitive"
        }
      ],
      "outputVar": "IsVariableInPrompt"
    },
    {
      "type": "switch",
      "label": "40ce3ab5-3ddb-4736-b5c3-18d43d3af754",
      "condition": {
        "type": "variable",
        "variable": "IsVariableInPrompt"
      },
      "targets": {
        "true": "3fe1d53d-3a8f-4787-a688-b5039880a0f1",
        "false": "e73f9155-dea4-4678-a1a6-aaa1f97a8881"
      }
    },
    {
      "type": "return",
      "label": "e73f9155-dea4-4678-a1a6-aaa1f97a8881",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "nanoflowCall",
      "label": "3fe1d53d-3a8f-4787-a688-b5039880a0f1",
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
      "label": "57cd574e-3264-4386-b758-f36bbf8fd1da",
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
      "label": "18dab36e-e727-44f2-8df7-a648f077191e",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
