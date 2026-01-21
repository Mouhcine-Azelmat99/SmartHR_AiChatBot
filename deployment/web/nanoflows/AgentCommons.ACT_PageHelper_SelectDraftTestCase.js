import { addEnumerations, t } from "mendix";

export const ACT_PageHelper_SelectDraftTestCase = {
  "name": "AgentCommons.ACT_PageHelper_SelectDraftTestCase",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "eaa4b5b4-938b-42ab-878f-a78d8118320c",
      "operationId": "DKPEUMV9uVqqAgT+vmugSQ",
      "parameters": [
        {
          "name": "Agent",
          "value": {
            "type": "variable",
            "variable": "PageHelper",
            "path": "AgentCommons.PageHelper_Agent/AgentCommons.Agent"
          },
          "kind": "object"
        }
      ],
      "outputVar": "TestCaseList"
    },
    {
      "type": "filterList",
      "label": "f59de27f-0b86-488e-97c4-31277869e4b0",
      "inputVar": "TestCaseList",
      "attribute": "IsDraftTestCase",
      "expectedValue": {
        "type": "literal",
        "value": true
      },
      "retrieveSingleObject": true,
      "outputVar": "TestCase_Draft"
    },
    {
      "type": "changeObject",
      "label": "8fa01e28-2b23-46ca-91ea-6c4f745333cd",
      "inputVar": "PageHelper",
      "member": "AgentCommons.PageHelper_TestCase",
      "value": {
        "type": "variable",
        "variable": "TestCase_Draft"
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "11b1556c-f124-466d-b89a-d89f48cb8911",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/webactions/actions/SetFocus").SetFocus,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".mx-name-textAreaValue"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "8def4182-bdc8-4821-924e-4d427c015e8b",
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
      "label": "2168856f-444b-4b69-9227-dc43f0f061a3",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
