import { addEnumerations, t } from "mendix";

export const Version_IsVariableInPrompt = {
  "name": "AgentCommons.Version_IsVariableInPrompt",
  "instructions": [
    {
      "type": "switch",
      "label": "99797ff9-7f66-4fb8-b82f-33f0259c8d6d",
      "condition": {
        "type": "conditional",
        "condition": {
          "type": "function",
          "name": ">=",
          "parameters": [
            {
              "type": "function",
              "name": "find",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "PromptString"
                },
                {
                  "type": "literal",
                  "value": "{{"
                }
              ]
            },
            {
              "type": "literalNumeric",
              "value": "0"
            }
          ]
        },
        "then": {
          "type": "function",
          "name": ">",
          "parameters": [
            {
              "type": "function",
              "name": "find",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "PromptString"
                },
                {
                  "type": "literal",
                  "value": "}}"
                }
              ]
            },
            {
              "type": "literalNumeric",
              "value": "0"
            }
          ]
        },
        "else": {
          "type": "literal",
          "value": false
        }
      },
      "targets": {
        "true": "e3288968-66bd-4f07-b417-2b74cd2cfd57",
        "false": "6d25c83d-da9c-4009-9bf5-406f13c52eff"
      }
    },
    {
      "type": "associationRetrieve",
      "label": "6d25c83d-da9c-4009-9bf5-406f13c52eff",
      "inputVar": "Version",
      "association": "AgentCommons.Version_Agent",
      "direction": "direct",
      "entity": "AgentCommons.Agent",
      "operationId": "P5xujmEDfFauJpZAZg2qiQ",
      "retrieveSingleObject": true,
      "outputVar": "Agent"
    },
    {
      "type": "associationRetrieve",
      "label": "ab918706-c44f-4473-9f81-1da4f8fd3677",
      "inputVar": "Agent",
      "association": "AgentCommons.Variable_Agent",
      "direction": "reverse",
      "entity": "AgentCommons.Variable",
      "operationId": "E7EEz9KYzF6VsCydTK22Eg",
      "retrieveSingleObject": false,
      "outputVar": "VariableList"
    },
    {
      "type": "switch",
      "label": "1fe1fb0c-3fdc-4998-af75-999242adf2df",
      "condition": {
        "type": "function",
        "name": "!=",
        "parameters": [
          {
            "type": "variable",
            "variable": "VariableList"
          },
          {
            "type": "literal",
            "value": null
          }
        ]
      },
      "targets": {
        "false": "cd516987-0175-4ee0-b98f-b136e6198d5d",
        "true": "e3288968-66bd-4f07-b417-2b74cd2cfd57"
      }
    },
    {
      "type": "jump",
      "label": "e3288968-66bd-4f07-b417-2b74cd2cfd57",
      "target": "0bad6cd4-6b21-40b6-88fb-65aca4d5f3be"
    },
    {
      "type": "return",
      "label": "0bad6cd4-6b21-40b6-88fb-65aca4d5f3be",
      "result": {
        "type": "literal",
        "value": true
      },
      "resultKind": "primitive"
    },
    {
      "type": "return",
      "label": "cd516987-0175-4ee0-b98f-b136e6198d5d",
      "result": {
        "type": "literal",
        "value": false
      },
      "resultKind": "primitive"
    },
    {
      "type": "jump",
      "label": "e3288968-66bd-4f07-b417-2b74cd2cfd57",
      "target": "0bad6cd4-6b21-40b6-88fb-65aca4d5f3be"
    }
  ]
};
