import { addEnumerations, t } from "mendix";

export const ACT_MistralConfiguration_SetEndpoint_DefaultMistral = {
  "name": "MistralConnector.ACT_MistralConfiguration_SetEndpoint_DefaultMistral",
  "instructions": [
    {
      "type": "changeObject",
      "label": "2725db27-bac1-49a5-b906-9c7733bf9241",
      "inputVar": "MistralConfiguration",
      "member": "Endpoint",
      "value": {
        "type": "literal",
        "value": "https://api.mistral.ai/v1/"
      }
    },
    {
      "type": "return",
      "label": "8098da3d-2e7a-40d7-a388-eb5950c4d0e9",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
