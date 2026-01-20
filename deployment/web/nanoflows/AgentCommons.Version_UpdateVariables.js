import { addEnumerations, t } from "mendix";
import { Variable_FindInPrompt } from "./AgentCommons.Variable_FindInPrompt.js";

export const Version_UpdateVariables = {
  "name": "AgentCommons.Version_UpdateVariables",
  "instructions": [
    {
      "type": "associationRetrieve",
      "label": "ff153c0f-de3e-4ba2-8b3e-e2327fa96c57",
      "inputVar": "PageHelper",
      "association": "AgentCommons.PageHelper_Version",
      "direction": "direct",
      "entity": "AgentCommons.Version",
      "operationId": "9l6Bori39lK+Qe4XCyrkig",
      "retrieveSingleObject": true,
      "outputVar": "Version"
    },
    {
      "type": "associationRetrieve",
      "label": "fef763e5-4e53-45c0-8a00-e4553e65223d",
      "inputVar": "PageHelper",
      "association": "AgentCommons.PageHelper_Agent",
      "direction": "direct",
      "entity": "AgentCommons.Agent",
      "operationId": "enyPi0ubz1GSoTcUfPuKDg",
      "retrieveSingleObject": true,
      "outputVar": "Agent"
    },
    {
      "type": "associationRetrieve",
      "label": "c47ae78a-ce12-4de6-8e59-6afdd391074e",
      "inputVar": "Agent",
      "association": "AgentCommons.Variable_Agent",
      "direction": "reverse",
      "entity": "AgentCommons.Variable",
      "operationId": "FSz2f/+bNl+/gzDXaclzzQ",
      "retrieveSingleObject": false,
      "outputVar": "VariableList"
    },
    {
      "type": "associationRetrieve",
      "label": "0bd188b0-f4ff-4d30-b8c4-708c639cf44e",
      "inputVar": "Agent",
      "association": "AgentCommons.TestCase_Agent",
      "direction": "reverse",
      "entity": "AgentCommons.TestCase",
      "operationId": "c3HpmliWsVOvSxrx3pNR3g",
      "retrieveSingleObject": false,
      "outputVar": "TestCaseList"
    },
    {
      "type": "nanoflowCall",
      "label": "c4cd6a95-0325-4e90-8ba5-30a8f4009255",
      "flow": () => Variable_FindInPrompt,
      "parameters": [
        {
          "name": "PromptString",
          "value": {
            "type": "variable",
            "variable": "Version",
            "path": "SystemPrompt"
          },
          "kind": "primitive"
        },
        {
          "name": "VariableList",
          "value": {
            "type": "variable",
            "variable": "VariableList"
          },
          "kind": "list"
        },
        {
          "name": "Agent",
          "value": {
            "type": "variable",
            "variable": "Agent"
          },
          "kind": "object"
        },
        {
          "name": "TestCaseList",
          "value": {
            "type": "variable",
            "variable": "TestCaseList"
          },
          "kind": "list"
        }
      ],
      "outputVar": "VariableList_SystemPrompt"
    },
    {
      "type": "nanoflowCall",
      "label": "aebb8c56-f848-4139-a5b6-7e3db75eefaf",
      "flow": () => Variable_FindInPrompt,
      "parameters": [
        {
          "name": "PromptString",
          "value": {
            "type": "variable",
            "variable": "Version",
            "path": "UserPrompt"
          },
          "kind": "primitive"
        },
        {
          "name": "VariableList",
          "value": {
            "type": "variable",
            "variable": "VariableList"
          },
          "kind": "list"
        },
        {
          "name": "Agent",
          "value": {
            "type": "variable",
            "variable": "Agent"
          },
          "kind": "object"
        },
        {
          "name": "TestCaseList",
          "value": {
            "type": "variable",
            "variable": "TestCaseList"
          },
          "kind": "list"
        }
      ],
      "outputVar": "VariableList_UserPrompt"
    },
    {
      "type": "setVariable",
      "label": "16140c36-078e-45ee-a3de-26ea981d70ea",
      "value": {
        "type": "function",
        "name": "_unionLists",
        "parameters": [
          {
            "type": "variable",
            "variable": "VariableList_SystemPrompt"
          },
          {
            "type": "variable",
            "variable": "VariableList_UserPrompt"
          }
        ]
      },
      "outputVar": "VariableList_ToKeep",
      "outputKind": "list"
    },
    {
      "type": "setVariable",
      "label": "aa2d877c-82b2-4aac-871f-81e60481f60f",
      "value": {
        "type": "function",
        "name": "_removeFromList",
        "parameters": [
          {
            "type": "variable",
            "variable": "VariableList"
          },
          {
            "type": "variable",
            "variable": "VariableList_ToKeep"
          }
        ]
      },
      "outputVar": "VariableList_ToDelete",
      "outputKind": "list"
    },
    {
      "type": "switch",
      "label": "dce6dcfa-1fa5-4397-b4ed-b335033620ca",
      "condition": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": "!=",
          "parameters": [
            {
              "type": "variable",
              "variable": "VariableList_ToKeep"
            },
            {
              "type": "variable",
              "variable": "VariableList"
            }
          ]
        },
        "then": {
          "type": "literal",
          "value": true
        },
        "else": {
          "type": "function",
          "name": "!=",
          "parameters": [
            {
              "type": "variable",
              "variable": "VariableList_ToDelete"
            },
            {
              "type": "literal",
              "value": null
            }
          ]
        }
      },
      "targets": {
        "false": "3191f759-d160-4e13-9370-92f46c8ec28c",
        "true": "8c3ab58b-5a5d-4a76-b42a-3e223574cc48"
      }
    },
    {
      "type": "microflowCall",
      "label": "8c3ab58b-5a5d-4a76-b42a-3e223574cc48",
      "operationId": "IK9QH5VTulaID4L0x4iW3A",
      "parameters": [
        {
          "name": "VariableList_ToKeep",
          "value": {
            "type": "variable",
            "variable": "VariableList_ToKeep"
          },
          "kind": "list"
        },
        {
          "name": "VariableList_ToDelete",
          "value": {
            "type": "variable",
            "variable": "VariableList_ToDelete"
          },
          "kind": "list"
        },
        {
          "name": "TestCaseList",
          "value": {
            "type": "variable",
            "variable": "TestCaseList"
          },
          "kind": "list"
        },
        {
          "name": "Version",
          "value": {
            "type": "variable",
            "variable": "Version"
          },
          "kind": "object"
        },
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
      "type": "jump",
      "label": "3191f759-d160-4e13-9370-92f46c8ec28c",
      "target": "b98f307c-d787-4ed6-ac74-6d927fc96813"
    },
    {
      "type": "return",
      "label": "b98f307c-d787-4ed6-ac74-6d927fc96813",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "jump",
      "label": "3191f759-d160-4e13-9370-92f46c8ec28c",
      "target": "b98f307c-d787-4ed6-ac74-6d927fc96813"
    }
  ]
};
