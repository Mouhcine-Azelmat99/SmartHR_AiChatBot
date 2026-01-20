import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { RadioButtonGroup } from '../RadioButtonGroup-Dw7gZsmC.js';
import { TextArea } from '../TextArea-DdodcWfx.js';
import { TextBox } from '../TextBox-C2Olp2tK.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../DxNyuBBG-CO3699Ph.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $ConditionalVisibilityWrapper, $RadioButtonGroup, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, ConditionalVisibilityWrapper, RadioButtonGroup, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1",
      $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                        $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$Instruction",
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
                              key: "p.MyFirstAIBot.Instruction_NewEdit.textBox2$formGroup",
                              $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstAIBot.Instruction_NewEdit.textBox2",
                                    $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstAIBot.Instruction",
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
                                    maxLength: 50,
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
                                      "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstAIBot.Instruction_NewEdit.textArea1$formGroup",
                              $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.MyFirstAIBot.Instruction_NewEdit.textArea1",
                                    $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstAIBot.Instruction",
                                      "attribute": "Instruction",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: void 0,
                                    maxLength: void 0,
                                    numberOfLines: 5,
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
                                      "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Instruction" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup$visibility",
                              $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup",
                                    $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup",
                                    class: "mx-name-radioButtons1 mx-radiobuttons inline",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $RadioButtonGroup,
                                        {
                                          key: "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1",
                                          $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1",
                                          value: AttributeProperty({
                                            "scope": "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                                            "path": "",
                                            "entity": "MyFirstAIBot.Instruction",
                                            "attribute": "IsCustom",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null
                                          }),
                                          readOnlyStyle: "control",
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          ariaLabel: void 0,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Custom instruction (only visible for you)" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MyFirstAIBot.Instruction_NewEdit.actionButton1$visibility",
                              $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstAIBot.Instruction_NewEdit.actionButton1",
                                    $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.actionButton1",
                                    buttonId: "p.MyFirstAIBot.Instruction_NewEdit.actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "$Instruction", "source": "object" } }, "config": { "operationId": "y6eJqytpAFOEKWjHF3cGJw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MyFirstAIBot.Instruction_NewEdit.actionButton2$visibility",
                              $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.actionButton2$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstAIBot.Instruction_NewEdit.actionButton2",
                                    $widgetId: "p.MyFirstAIBot.Instruction_NewEdit.actionButton2",
                                    buttonId: "p.MyFirstAIBot.Instruction_NewEdit.actionButton2",
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
                                      "action": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "$Instruction", "source": "object" } }, "config": { "operationId": "sRQ0zzhu+VKV/IMWhmjrCQ", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
      ]
    }
  )
]);
const title = selectTranslation([
  "Edit Instruction"
]);
const classes = "";
const cancelChangesOperationId = "qChQsPXqXFaMR+mujFXheg";
const closeButton = "p.MyFirstAIBot.Instruction_NewEdit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
