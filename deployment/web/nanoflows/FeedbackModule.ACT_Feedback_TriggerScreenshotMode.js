import { addEnumerations, t } from "mendix";

export const ACT_Feedback_TriggerScreenshotMode = {
  "name": "FeedbackModule.ACT_Feedback_TriggerScreenshotMode",
  "instructions": [
    {
      "type": "closeForm",
      "label": "e3500cca-c292-4b93-81c6-83feda9c1321"
    },
    {
      "type": "javaScriptActionCall",
      "label": "9c5592e9-bf2d-48b2-b03c-547f45b0c6ed",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/javascriptsource/feedbackmodule/actions/JS_ToggleFeedbackScreenshotWidget").JS_ToggleFeedbackScreenshotWidget,
      "outputVar": "base64FromWidget",
      "parameters": []
    },
    {
      "type": "switch",
      "label": "50eff435-6051-4fda-a563-600908ad855d",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": "uploadCancelled"
          }
        ]
      },
      "targets": {
        "true": "cccb4914-e9e3-447c-aeab-378e5570b0df",
        "false": "85f1b2b5-f19c-4606-b8a4-28887979e6a6"
      }
    },
    {
      "type": "jump",
      "label": "85f1b2b5-f19c-4606-b8a4-28887979e6a6",
      "target": "0300fe82-f623-4e88-a330-55bf850184a5"
    },
    {
      "type": "jump",
      "label": "0300fe82-f623-4e88-a330-55bf850184a5",
      "target": "03c52bac-4dc4-4bbf-ba5e-989468faa620"
    },
    {
      "type": "jump",
      "label": "03c52bac-4dc4-4bbf-ba5e-989468faa620",
      "target": "1e87d37e-b2cc-4200-b4dd-628515cc77b3"
    },
    {
      "type": "openForm",
      "label": "1e87d37e-b2cc-4200-b4dd-628515cc77b3",
      "path": "FeedbackModule/ShareFeedback.page.xml",
      "params": {
        "name": "FeedbackModule/ShareFeedback.page.xml",
        "location": "modal",
        "resizable": true
      }
    },
    {
      "type": "return",
      "label": "d1d9f582-cc1b-492c-95d5-aac796c27937",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "switch",
      "label": "cccb4914-e9e3-447c-aeab-378e5570b0df",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "base64FromWidget"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "true": "8fbb1ed0-ac00-498e-90c0-9dba1496ea12",
        "false": "5f2fa693-9de2-4366-ac67-907ef4274432"
      }
    },
    {
      "type": "return",
      "label": "5f2fa693-9de2-4366-ac67-907ef4274432",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    },
    {
      "type": "changeObject",
      "label": "8fbb1ed0-ac00-498e-90c0-9dba1496ea12",
      "inputVar": "Feedback",
      "member": "ImageB64",
      "value": {
        "type": "variable",
        "variable": "base64FromWidget"
      }
    },
    {
      "type": "commitObjects",
      "operationId": "xXZtzSbF91yFhkO3rX813A",
      "inputVar": "Feedback"
    },
    {
      "type": "jump",
      "label": "03c52bac-4dc4-4bbf-ba5e-989468faa620",
      "target": "1e87d37e-b2cc-4200-b4dd-628515cc77b3"
    }
  ]
};
