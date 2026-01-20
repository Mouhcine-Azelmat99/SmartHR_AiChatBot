import { addEnumerations, t } from "mendix";
import { PageHelper_ToggleIsRunning } from "./AgentCommons.PageHelper_ToggleIsRunning.js";

export const ACT_PageHelper_Run_SingleTestCase = {
  "name": "AgentCommons.ACT_PageHelper_Run_SingleTestCase",
  "instructions": [
    {
      "type": "switch",
      "label": "87c6eec3-3c06-48e3-a84a-d0e2e669aaa6",
      "condition": {
        "type": "function",
        "name": "not",
        "parameters": [
          {
            "type": "variable",
            "variable": "PageHelper",
            "path": "IsTestRunning"
          }
        ]
      },
      "targets": {
        "false": "bf3be2ec-8ba7-471a-948b-c5fe5c669ecf",
        "true": "b2082d3a-b142-4858-92bb-f4d8f4c087ed"
      }
    },
    {
      "type": "microflowCall",
      "label": "b2082d3a-b142-4858-92bb-f4d8f4c087ed",
      "operationId": "Jtb3ofK1JFStC4T2ovcYlA",
      "parameters": [
        {
          "name": "PageHelper",
          "value": {
            "type": "variable",
            "variable": "PageHelper"
          },
          "kind": "object"
        }
      ],
      "outputVar": "IsValid"
    },
    {
      "type": "switch",
      "label": "1f8d805c-af7f-4fe8-a54d-8a7434cbf68f",
      "condition": {
        "type": "variable",
        "variable": "IsValid"
      },
      "targets": {
        "false": "4c4de724-5b2c-4879-9dd6-fc5a47ed0f5c",
        "true": "0339a9af-711f-46b4-a456-1b64bc9b7e9f"
      }
    },
    {
      "type": "nanoflowCall",
      "label": "0339a9af-711f-46b4-a456-1b64bc9b7e9f",
      "flow": () => PageHelper_ToggleIsRunning,
      "parameters": [
        {
          "name": "PageHelper",
          "value": {
            "type": "variable",
            "variable": "PageHelper"
          },
          "kind": "object"
        },
        {
          "name": "IsSingleRun",
          "value": {
            "type": "literal",
            "value": true
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "15adcbdf-8e48-4f6c-a9a6-96596b5b66e6",
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
      "label": "e182e217-3d1c-4c7c-ae5c-c61585b93bca",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/webactions/actions/ScrollTo").ScrollTo,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".scroll-to-single-output"
          }
        }
      ]
    },
    {
      "type": "microflowCall",
      "label": "4e31046f-793b-4d88-9f13-940ae25ed4b1",
      "operationId": "X91SqIfIHVOb5IXGDhFNcQ",
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
      "type": "nanoflowCall",
      "label": "2d08592d-12c3-46ad-b9db-f98b478f89f6",
      "flow": () => PageHelper_ToggleIsRunning,
      "parameters": [
        {
          "name": "PageHelper",
          "value": {
            "type": "variable",
            "variable": "PageHelper"
          },
          "kind": "object"
        },
        {
          "name": "IsSingleRun",
          "value": {
            "type": "variable",
            "variable": "PageHelper",
            "path": "IsSingleTestRun"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "8d6c3b52-8de6-46af-891d-3b960d73e770",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/nanoflowcommons/actions/RefreshObject").RefreshObject,
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
      "label": "95fa51f8-1a54-4c71-acfa-12bf016a7f57",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "return",
      "label": "4c4de724-5b2c-4879-9dd6-fc5a47ed0f5c",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "return",
      "label": "bf3be2ec-8ba7-471a-948b-c5fe5c669ecf",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
