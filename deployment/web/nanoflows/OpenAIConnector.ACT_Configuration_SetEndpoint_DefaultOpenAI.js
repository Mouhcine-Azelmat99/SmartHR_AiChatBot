import { addEnumerations, t } from "mendix";

export const ACT_Configuration_SetEndpoint_DefaultOpenAI = {
  "name": "OpenAIConnector.ACT_Configuration_SetEndpoint_DefaultOpenAI",
  "instructions": [
    {
      "type": "changeObject",
      "label": "a0947f91-f96b-419c-8742-f34089601672",
      "inputVar": "Configuration",
      "member": "Endpoint",
      "value": {
        "type": "literal",
        "value": "https://api.openai.com/v1/"
      }
    },
    {
      "type": "return",
      "label": "9fc5cd49-6d16-4b63-b1c7-87c4017eddab",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
