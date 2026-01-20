import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-BXvprvCj.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { Text } from '../Text-5NmEA291.js';
import { TextArea } from '../TextArea-DdodcWfx.js';
import { TextBox } from '../TextBox-C2Olp2tK.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../BMuJrVqQ-C_cqhczO.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../InlineText-CcVi-f0x.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextArea, $TextBox, $ConditionalVisibilityWrapper, $Container, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextArea, TextBox, ConditionalVisibilityWrapper, Container, Text, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1",
      $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0",
            $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                        $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$AzureAISearchResource",
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
                              key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1$formGroup",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1",
                                    $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "OpenAIConnector.AzureAISearchResource",
                                      "attribute": "DisplayName",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: void 0,
                                    maxLength: void 0,
                                    numberOfLines: 1,
                                    autoGrow: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: void 0,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Display name*" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2$formGroup",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2$formGroup",
                              class: "mx-name-textArea2 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2",
                                    $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "OpenAIConnector.AzureAISearchResource",
                                      "attribute": "Endpoint",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: void 0,
                                    maxLength: void 0,
                                    numberOfLines: 1,
                                    autoGrow: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: void 0,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Endpoint URL*" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3$formGroup",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3$formGroup",
                              class: "mx-name-textArea3 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3",
                                    $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3",
                                    inputValue: AttributeProperty({
                                      "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "OpenAIConnector.AzureAISearchResource",
                                      "attribute": "ApiVersion",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: void 0,
                                    maxLength: void 0,
                                    numberOfLines: 1,
                                    autoGrow: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: void 0,
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "API version*" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $DataView,
                            {
                              key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView2",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView2",
                              class: "mx-name-dataView2 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: MicroflowObjectProperty({
                                "dataSourceId": "p.24",
                                "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                "editable": true,
                                "operationId": "K1Z8rl7gCV6HTUUMrOtlEg",
                                "argMap": { "AzureAISearchResource": { "widget": "$AzureAISearchResource", "source": "object" } }
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
                                    key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5$formGroup",
                                    $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5$formGroup",
                                    class: "mx-name-textBox5 spacing-outer-bottom-none mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5",
                                          $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5",
                                          inputValue: AttributeProperty({
                                            "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView2",
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
                                            "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "API key*" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.container3$visibility",
                                    $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.container3$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "dataView6" }] }, { "type": "literal", "value": false }] }, "args": { "dataView6": { "widget": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.container3",
                                          $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.container3",
                                          class: "mx-name-container3 row-right",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.text3",
                                                $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.text3",
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
                              key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1$visibility",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1",
                                    $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1",
                                    buttonId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "AzureAISearchResource": { "widget": "$AzureAISearchResource", "source": "object" } }, "config": { "operationId": "7rY8g1O5kV+4IcLZjCf05w", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton2",
                              $widgetId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton2",
                              buttonId: "p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "slHKAKd2EFi7w6Tpzh5Orw", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit AI Search Resource"
]);
const classes = "";
const cancelChangesOperationId = "aRjthIwMXl2iu0bGqKlWFw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
