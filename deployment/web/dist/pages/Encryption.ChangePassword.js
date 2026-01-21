import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
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
import '../Fragment-kXArd_1S.js';
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
const { $DataView, $Fragment, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, Fragment, Table, TableRow, Label, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.Encryption.ChangePassword.dataView",
      $widgetId: "p.Encryption.ChangePassword.dataView",
      class: "mx-name-dataView form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.6",
        "scope": "$PasswordData",
        "editable": true
      }),
      emptyMessage: TextProperty({
        "value": selectTranslation([
          ""
        ])
      }),
      body: [
        /* @__PURE__ */ React.createElement(
          $Fragment,
          {
            key: "p.Encryption.ChangePassword.snippetCallWidget1",
            $widgetId: "p.Encryption.ChangePassword.snippetCallWidget1",
            content: [
              /* @__PURE__ */ React.createElement(
                $Table,
                {
                  key: "p.Encryption.ChangePasswordSnippet.table",
                  $widgetId: "p.Encryption.ChangePasswordSnippet.table",
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
                        key: "p.Encryption.ChangePassword.table$row0",
                        $widgetId: "p.Encryption.ChangePassword.table$row0",
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
                                  key: "p.Encryption.ChangePasswordSnippet.label2",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.label2",
                                  class: "mx-name-label2",
                                  style: void 0,
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.label2"
                                  }),
                                  caption: TextProperty({
                                    "value": selectTranslation([
                                      "New password"
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
                                  key: "p.Encryption.ChangePasswordSnippet.textBox2$formGroup",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.textBox2$formGroup",
                                  class: "mx-name-textBox2 mx-textbox",
                                  style: void 0,
                                  control: [
                                    /* @__PURE__ */ React.createElement(
                                      $TextBox,
                                      {
                                        key: "p.Encryption.ChangePasswordSnippet.textBox2",
                                        $widgetId: "p.Encryption.ChangePasswordSnippet.textBox2",
                                        inputValue: AttributeProperty({
                                          "scope": "$PasswordData",
                                          "path": "",
                                          "entity": "Encryption.PasswordData",
                                          "attribute": "NewPassword",
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
                                          "widgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
                                        })
                                      }
                                    )
                                  ],
                                  caption: void 0,
                                  labelFor: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
                                  }),
                                  width: void 0,
                                  orientation: "vertical",
                                  hasError: ValidationProperty({
                                    "inputWidgetId": "p.Encryption.ChangePasswordSnippet.textBox2"
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
                        key: "p.Encryption.ChangePassword.table$row1",
                        $widgetId: "p.Encryption.ChangePassword.table$row1",
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
                                  key: "p.Encryption.ChangePasswordSnippet.label",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.label",
                                  class: "mx-name-label",
                                  style: void 0,
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.label"
                                  }),
                                  caption: TextProperty({
                                    "value": selectTranslation([
                                      "Confirm password"
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
                                  key: "p.Encryption.ChangePasswordSnippet.textBox$formGroup",
                                  $widgetId: "p.Encryption.ChangePasswordSnippet.textBox$formGroup",
                                  class: "mx-name-textBox mx-textbox",
                                  style: void 0,
                                  control: [
                                    /* @__PURE__ */ React.createElement(
                                      $TextBox,
                                      {
                                        key: "p.Encryption.ChangePasswordSnippet.textBox",
                                        $widgetId: "p.Encryption.ChangePasswordSnippet.textBox",
                                        inputValue: AttributeProperty({
                                          "scope": "$PasswordData",
                                          "path": "",
                                          "entity": "Encryption.PasswordData",
                                          "attribute": "ConfirmPassword",
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
                                          "widgetId": "p.Encryption.ChangePasswordSnippet.textBox"
                                        })
                                      }
                                    )
                                  ],
                                  caption: void 0,
                                  labelFor: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ChangePasswordSnippet.textBox"
                                  }),
                                  width: void 0,
                                  orientation: "vertical",
                                  hasError: ValidationProperty({
                                    "inputWidgetId": "p.Encryption.ChangePasswordSnippet.textBox"
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
            ]
          }
        )
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $ConditionalVisibilityWrapper,
          {
            key: "p.Encryption.ChangePassword.actionButton1$visibility",
            $widgetId: "p.Encryption.ChangePassword.actionButton1$visibility",
            visible: ExpressionProperty({
              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
            }),
            contents: [
              /* @__PURE__ */ React.createElement(
                $ActionButton,
                {
                  key: "p.Encryption.ChangePassword.actionButton1",
                  $widgetId: "p.Encryption.ChangePassword.actionButton1",
                  buttonId: "p.Encryption.ChangePassword.actionButton1",
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
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Save.png" }
                  }),
                  action: ActionProperty({
                    "action": { "type": "callMicroflow", "argMap": { "PasswordData": { "widget": "$PasswordData", "source": "object" } }, "config": { "operationId": "qxwB7l+HXV+YcNu2DE+w1g", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
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
            key: "p.Encryption.ChangePassword.cancelButton1",
            $widgetId: "p.Encryption.ChangePassword.cancelButton1",
            buttonId: "p.Encryption.ChangePassword.cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "+h1isAA0nVu8K+a5MAkC6g", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Page Title"
]);
const classes = "mx-window-view";
const cancelChangesOperationId = "LaF8rBB2/lODpEEEfHJf+A";
const closeButton = "p.Encryption.ChangePassword.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
