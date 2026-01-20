import { addEnumerations, t } from "mendix";

export const PageHelper_ToggleIsRunning = {
  "name": "AgentCommons.PageHelper_ToggleIsRunning",
  "instructions": [
    {
      "type": "changeObject",
      "label": "c40c7064-2664-45e4-8914-80b3a3fd1306",
      "inputVar": "PageHelper",
      "member": "IsTestRunning",
      "value": {
        "type": "function",
        "name": "not",
        "parameters": [
          {
            "type": "variable",
            "variable": "PageHelper",
            "path": "IsTestRunning"
          }
        ]
      }
    },
    {
      "type": "changeObject",
      "inputVar": "PageHelper",
      "member": "IsSingleTestRun",
      "value": {
        "type": "variable",
        "variable": "IsSingleRun"
      }
    },
    {
      "type": "return",
      "label": "31ec0b13-c0b2-4aca-bac7-1e897c617db2",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
