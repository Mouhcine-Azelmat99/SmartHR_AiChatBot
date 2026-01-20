import { addEnumerations, t } from "mendix";

export const ACT_PageHelper_SelectDraftVersion = {
  "name": "AgentCommons.ACT_PageHelper_SelectDraftVersion",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "913b168e-f4f3-4c36-850b-4932a00e4c9d",
      "operationId": "vLJ3NRVhMlWIbdFFSS+b5Q",
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
      "outputVar": "VersionList"
    },
    {
      "type": "filterList",
      "label": "79edb1bb-2442-49e6-80b2-1662f2415408",
      "inputVar": "VersionList",
      "attribute": "IsDraftVersion",
      "expectedValue": {
        "type": "literal",
        "value": true
      },
      "retrieveSingleObject": true,
      "outputVar": "Version_Draft"
    },
    {
      "type": "changeObject",
      "label": "25f25a87-2b62-436d-b757-4dd5ffb91e97",
      "inputVar": "PageHelper",
      "member": "AgentCommons.PageHelper_Version",
      "value": {
        "type": "variable",
        "variable": "Version_Draft"
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "39ad4e34-8ac0-4d9c-80ba-fdda6d650ff0",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/webactions/actions/SetFocus").SetFocus,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": ".mx-name-textAreaSystemPrompt"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "32f2c69f-a434-494a-99ce-e1c3cdf6554d",
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
      "label": "52f4f3da-3d14-48db-897f-0a008fd05a72",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
