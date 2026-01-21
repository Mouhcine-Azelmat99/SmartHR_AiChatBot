import { addEnumerations, t } from "mendix";

export const ACT_TokenMonitor_Export_Execute = {
  "name": "ConversationalUI.ACT_TokenMonitor_Export_Execute",
  "instructions": [
    {
      "type": "javaScriptActionCall",
      "label": "6690ca8e-7f14-442f-93a2-49485bde889d",
      "action": () => require("C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/javascriptsource/datawidgets/actions/Export_To_Excel").Export_To_Excel,
      "outputVar": "ExportSuccess",
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "dataGrid21"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "function",
            "name": "+",
            "parameters": [
              {
                "type": "function",
                "name": "+",
                "parameters": [
                  {
                    "type": "literal",
                    "value": "tokenmonitor_export_"
                  },
                  {
                    "type": "function",
                    "name": "formatDateTimeUTC",
                    "parameters": [
                      {
                        "type": "token",
                        "name": "currentDateTime"
                      },
                      {
                        "type": "literal",
                        "value": "yyyyMMdd-HHmmss"
                      }
                    ]
                  }
                ]
              },
              {
                "type": "literal",
                "value": "UTC"
              }
            ]
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": "Token Usage"
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literal",
            "value": true
          }
        },
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "500"
          }
        }
      ]
    },
    {
      "type": "return",
      "label": "512f8726-1bdc-423e-a283-f3a32ee66ec7",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};
