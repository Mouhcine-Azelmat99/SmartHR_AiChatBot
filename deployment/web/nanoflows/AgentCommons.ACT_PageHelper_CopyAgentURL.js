import { addEnumerations, t } from "mendix";

export const ACT_PageHelper_CopyAgentURL = {
  "name": "AgentCommons.ACT_PageHelper_CopyAgentURL",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "6dae2187-390a-4b19-ae26-e071d4346af7",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/agentcommons/actions/JS_CopyToClipboard").JS_CopyToClipboard,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "variable",
            "variable": "PageHelper",
            "path": "AgentPageURL"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "1ca0408f-8017-4134-b037-be52ae57c98f",
      "inputVar": "PageHelper",
      "member": "ShowCopyCheckmark",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "3371be8c-a610-4e4d-80be-1c6d92e7546e",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/nanoflowcommons/actions/Wait").Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "1200"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "391baf5d-3e54-4630-92e9-b94b28f1bfae",
      "inputVar": "PageHelper",
      "member": "ShowCopyCheckmark",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "b1c4f866-aea3-46e0-ad4a-3fb08f5ded56",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
