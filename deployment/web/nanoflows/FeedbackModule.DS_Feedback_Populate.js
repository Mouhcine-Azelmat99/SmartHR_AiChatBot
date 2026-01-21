import { addEnumerations, t } from "mendix";
import { SUB_Feedback_GetOrCreate } from "./FeedbackModule.SUB_Feedback_GetOrCreate.js";

export const DS_Feedback_Populate = {
  "name": "FeedbackModule.DS_Feedback_Populate",
  "instructions": [
    {
      "type": "nanoflowCall",
      "label": "54c89a56-bd09-45fb-8e6e-49022ba04a51",
      "flow": () => SUB_Feedback_GetOrCreate,
      "parameters": [],
      "outputVar": "Feedback"
    },
    {
      "type": "microflowCall",
      "label": "bf901330-aee9-4c7f-bd86-b846e34d5eb0",
      "operationId": "+ifxSaHX8leO+x0e9n4+7w",
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
      "type": "changeObject",
      "label": "7be0cd29-cd49-4841-aeda-9c2cdb1fe57f",
      "inputVar": "Feedback",
      "member": "_showEmail",
      "value": {
        "type": "conditional",
        "condition": {
          "type": "conditional",
          "condition": {
            "type": "function",
            "name": "!=",
            "parameters": [
              {
                "type": "variable",
                "variable": "Feedback",
                "path": "SubmitterEmail"
              },
              {
                "type": "literal",
                "value": null
              }
            ]
          },
          "then": {
            "type": "function",
            "name": "!=",
            "parameters": [
              {
                "type": "variable",
                "variable": "Feedback",
                "path": "SubmitterEmail"
              },
              {
                "type": "literal",
                "value": ""
              }
            ]
          },
          "else": {
            "type": "literal",
            "value": false
          }
        },
        "then": {
          "type": "literal",
          "value": false
        },
        "else": {
          "type": "literal",
          "value": true
        }
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "75ec2776-e39d-4000-9e91-02b0698d5c64",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/feedbackmodule/actions/JS_PopulateFeedbackMetadata").JS_PopulateFeedbackMetadata,
      "parameters": [
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "javaScriptActionCall",
      "label": "cfcfcaa3-186f-4915-b963-5cdfd1853fb5",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/feedbackmodule/actions/SetStorageItemObject").SetStorageItemObject,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "constant",
            "name": "FeedbackModule.LocalStorageKey"
          }
        },
        {
          "kind": "object",
          "value": {
            "type": "variable",
            "variable": "Feedback"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "6d28a48c-aa93-41c9-b027-dc75e236c933",
      "result": {
        "type": "variable",
        "variable": "Feedback"
      },
      "resultKind": "object"
    }
  ]
};
