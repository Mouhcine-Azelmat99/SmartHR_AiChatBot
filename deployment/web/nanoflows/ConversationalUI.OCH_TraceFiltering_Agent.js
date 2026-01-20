import { addEnumerations, t } from "mendix";

export const OCH_TraceFiltering_Agent = {
  "name": "ConversationalUI.OCH_TraceFiltering_Agent",
  "instructions": [
    {
      "type": "associationRetrieve",
      "label": "e87343ac-a424-4339-92f2-f3c7c2db9e97",
      "inputVar": "TraceFiltering",
      "association": "ConversationalUI.TraceFiltering_Agent",
      "direction": "direct",
      "entity": "AgentCommons.Agent",
      "operationId": "iFJFx9PHyVe5Do98dBmT/w",
      "retrieveSingleObject": false,
      "outputVar": "AgentList"
    },
    {
      "type": "changeObject",
      "label": "eff4f3e9-15c2-4ef8-b8e9-3c999fcb6129",
      "inputVar": "TraceFiltering",
      "member": "ConversationalUI.TraceFiltering_Version",
      "value": {
        "type": "function",
        "name": "_toList",
        "parameters": [
          {
            "type": "literal",
            "value": null
          }
        ]
      }
    },
    {
      "type": "changeObject",
      "inputVar": "TraceFiltering",
      "member": "ConversationalUI.TraceFiltering_Agent",
      "value": {
        "type": "function",
        "name": "_toList",
        "parameters": [
          {
            "type": "literal",
            "value": null
          }
        ]
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "fadb8740-d45e-4cc1-b62e-34a45891c3ae",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/nanoflowcommons/actions/Wait").Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "30"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "17d2b9e2-1971-4d9d-a12e-4eb2b4f12b13",
      "inputVar": "TraceFiltering",
      "member": "ConversationalUI.TraceFiltering_Agent",
      "value": {
        "type": "function",
        "name": "_toList",
        "parameters": [
          {
            "type": "variable",
            "variable": "AgentList"
          }
        ]
      }
    },
    {
      "type": "return",
      "label": "7c0fbbf0-c248-424a-8528-61e96ed19365",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
