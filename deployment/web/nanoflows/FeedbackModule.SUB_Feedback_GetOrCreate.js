import { addEnumerations, t } from "mendix";

export const SUB_Feedback_GetOrCreate = {
  "name": "FeedbackModule.SUB_Feedback_GetOrCreate",
  "instructions": [
    {
      "type": "tryCatch",
      "label": "a2095ce5-b44d-436b-b3a5-5272f1710c7e",
      "catchTarget": "fdf09a62-70cb-4b75-916e-aa0a31d7709c",
      "body": [
        {
          "type": "javaScriptActionCall",
          "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/feedbackmodule/actions/GetStorageItemObject").GetStorageItemObject,
          "outputVar": "LocalFeedback",
          "parameters": [
            {
              "kind": "primitive",
              "value": {
                "type": "constant",
                "name": "FeedbackModule.LocalStorageKey"
              }
            },
            {
              "kind": "primitive",
              "value": {
                "type": "literal",
                "value": "FeedbackModule.Feedback"
              }
            }
          ]
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "switch",
      "label": "8f3409fb-9d15-4404-827a-c1433a2e72d6",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "LocalFeedback"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "9183048c-8599-4531-a752-0987b0f29058",
        "true": "f7bcca8b-dfeb-4d63-89f6-1034d889b283"
      }
    },
    {
      "type": "return",
      "label": "f7bcca8b-dfeb-4d63-89f6-1034d889b283",
      "result": {
        "type": "variable",
        "variable": "LocalFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "9183048c-8599-4531-a752-0987b0f29058",
      "target": "5c1d9df6-237a-4b63-b33d-b897586c4996"
    },
    {
      "type": "createObject",
      "label": "5c1d9df6-237a-4b63-b33d-b897586c4996",
      "objectType": "FeedbackModule.Feedback",
      "outputVar": "NewFeedback"
    },
    {
      "type": "return",
      "label": "4588386f-8cc9-459d-9e82-fd993bd73b31",
      "result": {
        "type": "variable",
        "variable": "NewFeedback"
      },
      "resultKind": "object"
    },
    {
      "type": "jump",
      "label": "fdf09a62-70cb-4b75-916e-aa0a31d7709c",
      "target": "9183048c-8599-4531-a752-0987b0f29058"
    },
    {
      "type": "jump",
      "label": "9183048c-8599-4531-a752-0987b0f29058",
      "target": "5c1d9df6-237a-4b63-b33d-b897586c4996"
    }
  ]
};
