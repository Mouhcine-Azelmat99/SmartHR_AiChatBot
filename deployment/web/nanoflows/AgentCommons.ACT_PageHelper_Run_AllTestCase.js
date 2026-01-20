import { addEnumerations, t } from "mendix";
import { PageHelper_ToggleIsRunning } from "./AgentCommons.PageHelper_ToggleIsRunning.js";

export const ACT_PageHelper_Run_AllTestCase = {
  "name": "AgentCommons.ACT_PageHelper_Run_AllTestCase",
  "instructions": [
    {
      "type": "switch",
      "label": "601c67e9-f1e6-43f9-b032-9a4e8a48173d",
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
        "false": "4b982b08-6254-4746-b884-260cf7e96bf0",
        "true": "ccc5c508-027d-46d7-9f09-eb4a1d86e510"
      }
    },
    {
      "type": "microflowCall",
      "label": "ccc5c508-027d-46d7-9f09-eb4a1d86e510",
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
      "label": "d8c12f48-cea9-4f38-83ab-1ef51ec2ef57",
      "condition": {
        "type": "variable",
        "variable": "IsValid"
      },
      "targets": {
        "false": "a8f18785-dd61-4b83-9114-3c53cdba5db4",
        "true": "906c4d76-8303-4149-8289-cee06fe07181"
      }
    },
    {
      "type": "nanoflowCall",
      "label": "906c4d76-8303-4149-8289-cee06fe07181",
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
            "value": false
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "2279a5d6-d9d2-47e7-bc9e-f197a4bce38f",
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
      "label": "cbcd6278-5d97-4576-a86e-ecb3a29ed1f3",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/webactions/actions/ScrollTo").ScrollTo,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".scroll-to-multiple-output"
          }
        }
      ]
    },
    {
      "type": "microflowCall",
      "label": "dd23eb7c-d476-4721-9461-58b27725faa8",
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
      "label": "6be65554-c961-49b9-af15-ffd6282a42e5",
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
      "label": "5489f936-318c-4e5e-ade5-a88a4a2cfa3d",
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
      "label": "05065404-3828-45c7-8571-765101330437",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "return",
      "label": "a8f18785-dd61-4b83-9114-3c53cdba5db4",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "return",
      "label": "4b982b08-6254-4746-b884-260cf7e96bf0",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
