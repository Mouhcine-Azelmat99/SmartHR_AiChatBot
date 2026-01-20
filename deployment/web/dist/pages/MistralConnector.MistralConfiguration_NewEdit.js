import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-z5djVxQ4.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextArea } from '../TextArea-CVgm5cpf.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const ACT_MistralConfiguration_SetEndpoint_DefaultMistral = {
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

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, Container, Text, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MistralConnector.MistralConfiguration_NewEdit.layoutGrid1",
      $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MistralConnector.MistralConfiguration_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MistralConnector.MistralConfiguration_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MistralConnector.MistralConfiguration_NewEdit.dataView1",
                        $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.14",
                          "scope": "$MistralConfigurationCopy",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MistralConnector.MistralConfiguration_NewEdit.textBox4$formGroup",
                              $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MistralConnector.MistralConfiguration_NewEdit.textBox4",
                                    $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MistralConnector.MistralConfiguration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MistralConnector.MistralConfiguration",
                                      "attribute": "DisplayName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null,
                                      "formatting": {}
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: 200,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    onEnterKeyPress: void 0,
                                    ariaLabel: void 0,
                                    autocomplete: "on",
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    ariaRequired: void 0,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textBox4"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Display name *" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MistralConnector.MistralConfiguration_NewEdit.textArea1$formGroup",
                              $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 spacing-outer-bottom-none mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.MistralConnector.MistralConfiguration_NewEdit.textArea1",
                                    $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MistralConnector.MistralConfiguration_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "MistralConnector.MistralConfiguration",
                                      "attribute": "Endpoint",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    maxLength: 500,
                                    numberOfLines: void 0,
                                    autoGrow: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: TextProperty({
                                      "value": selectTranslation([
                                        "Value too long."
                                      ])
                                    }),
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Endpoint *" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textArea1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.MistralConnector.MistralConfiguration_NewEdit.container2",
                              $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.container2",
                              class: "mx-name-container2 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.MistralConnector.MistralConfiguration_NewEdit.container1",
                                    $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.container1",
                                    class: "mx-name-container1 row-right",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.MistralConnector.MistralConfiguration_NewEdit.text2",
                                          $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.text2",
                                          class: "mx-name-text2 text-detail text-small spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "e.g. https://api.mistral.ai/v1/" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton3$visibility",
                                          $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton3$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton3",
                                                $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton3",
                                                buttonId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton3",
                                                class: "mx-name-actionButton3 btn-sm spacing-outer-left spacing-outer-bottom-none",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Apply" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callNanoflow", "argMap": { "MistralConfiguration": { "widget": "$MistralConfigurationCopy", "source": "object" } }, "config": { "nanoflow": () => ACT_MistralConfiguration_SetEndpoint_DefaultMistral, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                  "abortOnServerValidation": true
                                                })
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.MistralConnector.MistralConfiguration_NewEdit.dataView2",
                              $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.dataView2",
                              class: "mx-name-dataView2 spacing-outer-bottom form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: MicroflowObjectProperty({
                                "dataSourceId": "p.30",
                                "scope": "p.MistralConnector.MistralConfiguration_NewEdit.dataView1",
                                "editable": true,
                                "operationId": "LY9pYp9+jViQqGg3Wfhfmg",
                                "argMap": { "Configuration": { "widget": "$MistralConfigurationCopy", "source": "object" } }
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.MistralConnector.MistralConfiguration_NewEdit.textBox5$formGroup",
                                    $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.textBox5$formGroup",
                                    class: "mx-name-textBox5 spacing-outer-bottom-none mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.MistralConnector.MistralConfiguration_NewEdit.textBox5",
                                          $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.textBox5",
                                          inputValue: AttributeProperty({
                                            "scope": "p.MistralConnector.MistralConfiguration_NewEdit.dataView2",
                                            "path": "",
                                            "entity": "OpenAIConnector.ApiKey",
                                            "attribute": "ApiKey",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: true,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: void 0,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: void 0,
                                          autocomplete: "on",
                                          submitWhileEditing: false,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textBox5"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "API Key *" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textBox5"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.MistralConnector.MistralConfiguration_NewEdit.textBox5"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.MistralConnector.MistralConfiguration_NewEdit.container3$visibility",
                                    $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.container3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "dataView1" }] }, { "type": "literal", "value": false }] }, "args": { "dataView1": { "widget": "p.MistralConnector.MistralConfiguration_NewEdit.dataView1", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.MistralConnector.MistralConfiguration_NewEdit.container3",
                                          $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.container3",
                                          class: "mx-name-container3 row-right",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.MistralConnector.MistralConfiguration_NewEdit.text3",
                                                $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.text3",
                                                class: "mx-name-text3 text-detail text-small spacing-outer-bottom",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "If you don't enter a new value, it will remain unchanged." }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ]
                                  }
                                )
                              ],
                              hideFooter: false,
                              footer: void 0
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton1$visibility",
                              $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton1",
                                    $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton1",
                                    buttonId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "$MistralConfigurationCopy", "source": "object" } }, "config": { "operationId": "lOCHGrK6xlKaYnL4E1HTRQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton2",
                              $widgetId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton2",
                              buttonId: "p.MistralConnector.MistralConfiguration_NewEdit.actionButton2",
                              class: "mx-name-actionButton2",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "button",
                              role: void 0,
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "GcoabB+dklyONwZydqBXSQ", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    )
                  ]
                }
              )
            ]
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Edit Configuration"
]);
const classes = "";
const cancelChangesOperationId = "RfKdfMwlwVSeFxJoD2V9lQ";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
