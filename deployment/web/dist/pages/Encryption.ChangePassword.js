import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import '../Fragment-C-45CGtT.js';
import { Label } from '../Label-CtWq-WVv.js';
import { Table, TableRow } from '../TableRow-dgCBfk93.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { content as content$1 } from '../Encryption.PopupLayout-2QHFYelV.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';

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
