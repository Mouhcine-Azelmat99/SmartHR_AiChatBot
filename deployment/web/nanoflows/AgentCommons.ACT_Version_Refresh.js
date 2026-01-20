import { addEnumerations, t } from "mendix";

export const ACT_Version_Refresh = {
  "name": "AgentCommons.ACT_Version_Refresh",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "0714c7be-f32c-4285-8985-20daa938e620",
      "operationId": "z3RGAR96xVKYgQtqctUW9Q",
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
      "type": "return",
      "label": "562d1fe0-2aee-4011-a67f-03f4d82a418f",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
