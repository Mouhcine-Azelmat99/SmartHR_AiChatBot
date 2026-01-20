import { addEnumerations, t } from "mendix";

export const Variable_FindInPrompt = {
  "name": "AgentCommons.Variable_FindInPrompt",
  "instructions": [
    {
      "type": "setVariable",
      "label": "8b838716-4d5c-4ae5-a884-a92e2462213d",
      "value": {
        "type": "variable",
        "variable": "PromptString"
      },
      "outputVar": "Prompt_ToExtract",
      "outputKind": "primitive"
    },
    {
      "type": "setVariable",
      "label": "dca44055-7038-4b9a-9d3a-d80c31c031be",
      "value": {
        "type": "function",
        "name": "_newList",
        "parameters": []
      },
      "outputVar": "VariableList_ToKeep",
      "outputKind": "list"
    },
    {
      "type": "whileLoop",
      "label": "047463f7-2ae7-4109-8402-e480cb7d8dbc",
      "condition": {
        "type": "function",
        "name": ">",
        "parameters": [
          {
            "type": "function",
            "name": "length",
            "parameters": [
              {
                "type": "variable",
                "variable": "Prompt_ToExtract"
              }
            ]
          },
          {
            "type": "literalNumeric",
            "value": "0"
          }
        ]
      },
      "body": [
        {
          "type": "setVariable",
          "label": "fbe762e8-b0f8-4391-ae39-8798bb29d9d8",
          "value": {
            "type": "function",
            "name": "find",
            "parameters": [
              {
                "type": "variable",
                "variable": "Prompt_ToExtract"
              },
              {
                "type": "literal",
                "value": "{{"
              }
            ]
          },
          "outputVar": "Position_StartVariable",
          "outputKind": "primitive"
        },
        {
          "type": "setVariable",
          "label": "f132a979-18fc-4371-98ec-9aba139d3498",
          "value": {
            "type": "function",
            "name": "find",
            "parameters": [
              {
                "type": "variable",
                "variable": "Prompt_ToExtract"
              },
              {
                "type": "literal",
                "value": "}}"
              }
            ]
          },
          "outputVar": "Position_EndVariable",
          "outputKind": "primitive"
        },
        {
          "type": "switch",
          "label": "84ddf2a0-b3b1-4d63-be30-bc8660334f0d",
          "condition": {
            "type": "conditional",
            "condition": {
              "type": "conditional",
              "condition": {
                "type": "function",
                "name": ">=",
                "parameters": [
                  {
                    "type": "variable",
                    "variable": "Position_StartVariable"
                  },
                  {
                    "type": "literalNumeric",
                    "value": "0"
                  }
                ]
              },
              "then": {
                "type": "function",
                "name": ">=",
                "parameters": [
                  {
                    "type": "variable",
                    "variable": "Position_EndVariable"
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
            "then": {
              "type": "function",
              "name": ">",
              "parameters": [
                {
                  "type": "variable",
                  "variable": "Position_EndVariable"
                },
                {
                  "type": "variable",
                  "variable": "Position_StartVariable"
                }
              ]
            },
            "else": {
              "type": "literal",
              "value": false
            }
          },
          "targets": {
            "true": "14b013fe-976b-4184-9c07-1fb5547a31ae",
            "false": "a94d541a-628c-4cd0-a1e6-cb917019c517"
          }
        },
        {
          "type": "return",
          "label": "a94d541a-628c-4cd0-a1e6-cb917019c517",
          "result": {
            "type": "literal",
            "value": true
          },
          "resultKind": "primitive"
        },
        {
          "type": "setVariable",
          "label": "14b013fe-976b-4184-9c07-1fb5547a31ae",
          "value": {
            "type": "function",
            "name": "substring",
            "parameters": [
              {
                "type": "variable",
                "variable": "Prompt_ToExtract"
              },
              {
                "type": "function",
                "name": "+",
                "parameters": [
                  {
                    "type": "variable",
                    "variable": "Position_StartVariable"
                  },
                  {
                    "type": "literalNumeric",
                    "value": "2"
                  }
                ]
              },
              {
                "type": "function",
                "name": "-",
                "parameters": [
                  {
                    "type": "function",
                    "name": "-",
                    "parameters": [
                      {
                        "type": "variable",
                        "variable": "Position_EndVariable"
                      },
                      {
                        "type": "variable",
                        "variable": "Position_StartVariable"
                      }
                    ]
                  },
                  {
                    "type": "literalNumeric",
                    "value": "2"
                  }
                ]
              }
            ]
          },
          "outputVar": "VariableKey_FromPrompt",
          "outputKind": "primitive"
        },
        {
          "type": "microflowCall",
          "label": "b02a8ea4-43f5-4d0b-b253-de29b8ad2f4b",
          "operationId": "ESmjy1KwZlKrm1a4MDyshA",
          "parameters": [
            {
              "name": "Agent",
              "value": {
                "type": "variable",
                "variable": "Agent"
              },
              "kind": "object"
            },
            {
              "name": "Key",
              "value": {
                "type": "variable",
                "variable": "VariableKey_FromPrompt"
              },
              "kind": "primitive"
            },
            {
              "name": "VariableList",
              "value": {
                "type": "variable",
                "variable": "VariableList"
              },
              "kind": "list"
            }
          ],
          "outputVar": "Variable"
        },
        {
          "type": "listLoop",
          "label": "a35145a4-2de7-4efe-bb6b-6aced5dc7307",
          "listVar": "TestCaseList",
          "iteratorVar": "IteratorTestCase",
          "body": [
            {
              "type": "microflowCall",
              "label": "019e434c-598a-4c5a-8483-0774ef2c820b",
              "operationId": "LoYSUV3lKVGkCukKujMN5Q",
              "parameters": [
                {
                  "name": "Variable",
                  "value": {
                    "type": "variable",
                    "variable": "Variable"
                  },
                  "kind": "object"
                },
                {
                  "name": "TestCase",
                  "value": {
                    "type": "variable",
                    "variable": "IteratorTestCase"
                  },
                  "kind": "object"
                }
              ]
            },
            {
              "type": "return",
              "result": {
                "type": "literal",
                "value": false
              },
              "resultKind": "primitive"
            }
          ]
        },
        {
          "type": "setVariable",
          "label": "9bf74be6-dd87-4670-ac5f-f44e897fca06",
          "value": {
            "type": "function",
            "name": "_addToList",
            "parameters": [
              {
                "type": "variable",
                "variable": "VariableList_ToKeep"
              },
              {
                "type": "variable",
                "variable": "Variable"
              }
            ]
          },
          "outputVar": "VariableList_ToKeep",
          "outputKind": "list"
        },
        {
          "type": "setVariable",
          "label": "cfd5704c-03d0-46bf-abd6-f0da7723c34d",
          "value": {
            "type": "function",
            "name": "substring",
            "parameters": [
              {
                "type": "variable",
                "variable": "Prompt_ToExtract"
              },
              {
                "type": "function",
                "name": "+",
                "parameters": [
                  {
                    "type": "variable",
                    "variable": "Position_EndVariable"
                  },
                  {
                    "type": "literalNumeric",
                    "value": "2"
                  }
                ]
              }
            ]
          },
          "outputVar": "Prompt_ToExtract",
          "outputKind": "primitive"
        },
        {
          "type": "return",
          "result": {
            "type": "literal",
            "value": false
          },
          "resultKind": "primitive"
        }
      ]
    },
    {
      "type": "return",
      "label": "cd5366a8-8155-4428-bafc-4ffb9ec08433",
      "result": {
        "type": "variable",
        "variable": "VariableList_ToKeep"
      },
      "resultKind": "list"
    }
  ]
};
