import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Label } from '../Label-CIXm_zR5.js';
import { Table, TableRow } from '../TableRow-D4rQtRXm.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { content as content$1 } from '../Encryption.PopupLayout-L_MVSoVK.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../InlineText-f914ePRH.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ DataView, Table, TableRow, Label, FormGroup, TextBox, ActionButton, ConditionalVisibilityWrapper });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.Encryption.SavePasswordExample_NewEdit.dataView",
      $widgetId: "p.Encryption.SavePasswordExample_NewEdit.dataView",
      class: "mx-name-dataView form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.6",
        "scope": "$ExampleConfiguration",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $Table,
          {
            key: "p.Encryption.SavePasswordExample_NewEdit.table",
            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table",
            class: "mx-name-table",
            style: void 0,
            autoWidth: false,
            columnWidths: [
              "25%",
              "75%"
            ],
            rows: [
              /* @__PURE__ */ React.createElement(
                $TableRow,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.table$row0",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table$row0",
                  class: "",
                  style: void 0,
                  cells: [
                    {
                      "header": true,
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $Label,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.label2",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.label2",
                            class: "mx-name-label2",
                            style: void 0,
                            id: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label2"
                            }),
                            caption: TextProperty({
                              "value": selectTranslation([
                                "Title"
                              ])
                            })
                          }
                        )
                      ]
                    },
                    {
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $FormGroup,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.textBox2$formGroup",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox2$formGroup",
                            class: "mx-name-textBox2 mx-textbox",
                            style: void 0,
                            control: [
                              /* @__PURE__ */ React.createElement(
                                $TextBox,
                                {
                                  key: "p.Encryption.SavePasswordExample_NewEdit.textBox2",
                                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox2",
                                  inputValue: AttributeProperty({
                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                    "path": "",
                                    "entity": "Encryption.ExampleConfiguration",
                                    "attribute": "Title",
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
                                  readOnlyStyle: "text",
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
                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                                  })
                                }
                              )
                            ],
                            caption: void 0,
                            labelFor: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                            }),
                            width: void 0,
                            orientation: "vertical",
                            hasError: ValidationProperty({
                              "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox2"
                            })
                          }
                        )
                      ]
                    }
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $TableRow,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.table$row1",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table$row1",
                  class: "",
                  style: void 0,
                  cells: [
                    {
                      "header": true,
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $Label,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.label3",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.label3",
                            class: "mx-name-label3",
                            style: void 0,
                            id: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label3"
                            }),
                            caption: TextProperty({
                              "value": selectTranslation([
                                "Username"
                              ])
                            })
                          }
                        )
                      ]
                    },
                    {
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $FormGroup,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.textBox3$formGroup",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox3$formGroup",
                            class: "mx-name-textBox3 mx-textbox",
                            style: void 0,
                            control: [
                              /* @__PURE__ */ React.createElement(
                                $TextBox,
                                {
                                  key: "p.Encryption.SavePasswordExample_NewEdit.textBox3",
                                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox3",
                                  inputValue: AttributeProperty({
                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                    "path": "",
                                    "entity": "Encryption.ExampleConfiguration",
                                    "attribute": "Username",
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
                                  readOnlyStyle: "text",
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
                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                                  })
                                }
                              )
                            ],
                            caption: void 0,
                            labelFor: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                            }),
                            width: void 0,
                            orientation: "vertical",
                            hasError: ValidationProperty({
                              "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox3"
                            })
                          }
                        )
                      ]
                    }
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $TableRow,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.table$row2",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.table$row2",
                  class: "",
                  style: void 0,
                  cells: [
                    {
                      "header": true,
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $Label,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.label",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.label",
                            class: "mx-name-label",
                            style: void 0,
                            id: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.label"
                            }),
                            caption: TextProperty({
                              "value": selectTranslation([
                                "Password"
                              ])
                            })
                          }
                        )
                      ]
                    },
                    {
                      "class": "",
                      "content": [
                        /* @__PURE__ */ React.createElement(
                          $FormGroup,
                          {
                            key: "p.Encryption.SavePasswordExample_NewEdit.textBox$formGroup",
                            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox$formGroup",
                            class: "mx-name-textBox mx-textbox",
                            style: void 0,
                            control: [
                              /* @__PURE__ */ React.createElement(
                                $TextBox,
                                {
                                  key: "p.Encryption.SavePasswordExample_NewEdit.textBox",
                                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.textBox",
                                  inputValue: AttributeProperty({
                                    "scope": "p.Encryption.SavePasswordExample_NewEdit.dataView",
                                    "path": "",
                                    "entity": "Encryption.ExampleConfiguration",
                                    "attribute": "Password",
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
                                  readOnlyStyle: "text",
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
                                    "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                                  })
                                }
                              )
                            ],
                            caption: void 0,
                            labelFor: DerivedUniqueIdProperty({
                              "widgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                            }),
                            width: void 0,
                            orientation: "vertical",
                            hasError: ValidationProperty({
                              "inputWidgetId": "p.Encryption.SavePasswordExample_NewEdit.textBox"
                            })
                          }
                        )
                      ]
                    }
                  ]
                }
              )
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p.Encryption.SavePasswordExample_NewEdit.cancelButton1",
            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.cancelButton1",
            buttonId: "p.Encryption.SavePasswordExample_NewEdit.cancelButton1",
            class: "mx-name-cancelButton1",
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
            icon: WebIconProperty({
              "icon": { "type": "image", "iconUrl": "img/System$Images$Cancel.png" }
            }),
            action: ActionProperty({
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "8jE/BPHAf1CbiQlf2i9F7Q", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p.Encryption.SavePasswordExample_NewEdit.actionButton1$visibility",
            $widgetId: "p.Encryption.SavePasswordExample_NewEdit.actionButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p.Encryption.SavePasswordExample_NewEdit.actionButton1",
                  $widgetId: "p.Encryption.SavePasswordExample_NewEdit.actionButton1",
                  buttonId: "p.Encryption.SavePasswordExample_NewEdit.actionButton1",
                  class: "mx-name-actionButton1",
                  style: void 0,
                  tabIndex: void 0,
                  renderType: "button",
                  role: void 0,
                  buttonClass: "btn-default",
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
                  icon: WebIconProperty({
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Microflow.png" }
                  }),
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "ExampleConfiguration": { "widget": "$ExampleConfiguration", "source": "object" } }, "config": { "operationId": "ehSGY1XCB1i/HzyHzmv5+w", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
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
]);
const title = selectTranslation([
  "Edit Example Configuration"
]);
const classes = "mx-window-view";
const cancelChangesOperationId = "qf0k7KoA7FiokUklDlF98Q";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
