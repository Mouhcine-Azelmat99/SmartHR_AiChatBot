import { addEnumerations, t } from "mendix";
import { SUB_Feedback_ResetLocalStorage } from "./FeedbackModule.SUB_Feedback_ResetLocalStorage.js";

export const ACT_SubmitFeedback = {
  "name": "FeedbackModule.ACT_SubmitFeedback",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "c6d191e1-8524-4a97-9255-2ea94aaf7d27",
      "operationId": "KQF4BSfp5VyiOzExACkDzQ",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "isValid"
    },
    {
      "type": "switch",
      "label": "620eeb33-1275-4b51-9983-657ae3ac2841",
      "condition": {
        "type": "variable",
        "variable": "isValid"
      },
      "targets": {
        "true": "1966c2d6-fcb5-4c56-b7b7-8e6b1edc578f",
        "false": "9f610687-d482-4d5c-b61c-d5353e6aefa2"
      }
    },
    {
      "type": "return",
      "label": "9f610687-d482-4d5c-b61c-d5353e6aefa2",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "microflowCall",
      "label": "1966c2d6-fcb5-4c56-b7b7-8e6b1edc578f",
      "operationId": "TJyamp7vjlqRcTjUaQ6tEw",
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ],
      "outputVar": "ResponseHelper"
    },
    {
      "type": "closeForm",
      "label": "9a9d9b34-5230-4433-badd-d4f4a7dde756",
      "numberOfPagesToClose": {
        "type": "literalNumeric",
        "value": "1"
      }
    },
    {
      "type": "switch",
      "label": "e201c8c3-d605-4639-b0a6-d06156f6a50c",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "ResponseHelper"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "ab91d536-ed27-4b10-ba1c-c061e67b16a3",
        "false": "541b0f15-d197-4c27-b3f9-daf8177b46c2"
      }
    },
    {
      "type": "jump",
      "label": "541b0f15-d197-4c27-b3f9-daf8177b46c2",
      "target": "1a7482a0-3be6-44dc-8001-7d28db1f706a"
    },
    {
      "type": "openForm",
      "label": "1a7482a0-3be6-44dc-8001-7d28db1f706a",
      "path": "FeedbackModule/PopupFailure.page.xml",
      "params": {
        "name": "FeedbackModule/PopupFailure.page.xml",
        "location": "modal",
        "resizable": false
      }
    },
    {
      "type": "return",
      "label": "7bfcff21-7d45-4459-a847-343f5352b732",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "openForm",
      "label": "ab91d536-ed27-4b10-ba1c-c061e67b16a3",
      "path": "FeedbackModule/PopupSuccess.page.xml",
      "params": {
        "name": "FeedbackModule/PopupSuccess.page.xml",
        "location": "modal",
        "resizable": false
      },
      "inputArgs": {
        "$Response": {
          "type": "variable",
          "variable": "ResponseHelper"
        }
      }
    },
    {
      "type": "nanoflowCall",
      "label": "308b81ba-1179-419f-b52a-f320a562ff31",
      "flow": () => SUB_Feedback_ResetLocalStorage,
      "parameters": [
        {
          "name": "Feedback",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "return",
      "label": "5db9a2d6-29a3-4122-adc6-eb11208e8122",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
