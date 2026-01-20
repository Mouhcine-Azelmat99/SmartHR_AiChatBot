import { addEnumerations, t } from "mendix";

export const ACT_PageHelper_Refresh = {
  "name": "AgentCommons.ACT_PageHelper_Refresh",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "9cea37f9-5a60-4e16-9118-c7849c8002c6",
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
      "label": "dc17460a-2902-456e-93c6-d65442d28829",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
