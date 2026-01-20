import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import '../Fragment-C3M8OT7J.js';
import { Label } from '../Label-DMkcf93j.js';
import { Table, TableRow } from '../TableRow-_cxj_MpJ.js';
import { TextBox } from '../TextBox-C2Olp2tK.js';
import { content as content$1 } from '../Encryption.PopupLayout-DdnWSJvf.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../InlineText-CcVi-f0x.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';

const React = { createElement: reactExports.createElement };
const { $DataView, $Fragment, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, Fragment, Table, TableRow, Label, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.Encryption.ChangePasswordExample_NewEdit.dataView",
      $widgetId: "p.Encryption.ChangePasswordExample_NewEdit.dataView",
      class: "mx-name-dataView form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.8",
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
          $Fragment,
          {
            key: "p.Encryption.ChangePasswordExample_NewEdit.snippetCallWidget1",
            $widgetId: "p.Encryption.ChangePasswordExample_NewEdit.snippetCallWidget1",
            content: [
              /* @__PURE__ */ React.createElement(
                $Table,
                {
                  key: "p.Encryption.ExampleConfiguration.table",
                  $widgetId: "p.Encryption.ExampleConfiguration.table",
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
                        key: "p.Encryption.ChangePasswordExample_NewEdit.table$row0",
                        $widgetId: "p.Encryption.ChangePasswordExample_NewEdit.table$row0",
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
                                  key: "p.Encryption.ExampleConfiguration.label2",
                                  $widgetId: "p.Encryption.ExampleConfiguration.label2",
                                  class: "mx-name-label2",
                                  style: void 0,
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ExampleConfiguration.label2"
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
                                  key: "p.Encryption.ExampleConfiguration.textBox2$formGroup",
                                  $widgetId: "p.Encryption.ExampleConfiguration.textBox2$formGroup",
                                  class: "mx-name-textBox2 mx-textbox",
                                  style: void 0,
                                  control: [
                                    /* @__PURE__ */ React.createElement(
                                      $TextBox,
                                      {
                                        key: "p.Encryption.ExampleConfiguration.textBox2",
                                        $widgetId: "p.Encryption.ExampleConfiguration.textBox2",
                                        inputValue: AttributeProperty({
                                          "scope": "$ExampleConfiguration",
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
                                          "widgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                        })
                                      }
                                    )
                                  ],
                                  caption: void 0,
                                  labelFor: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                  }),
                                  width: void 0,
                                  orientation: "vertical",
                                  hasError: ValidationProperty({
                                    "inputWidgetId": "p.Encryption.ExampleConfiguration.textBox2"
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
                        key: "p.Encryption.ChangePasswordExample_NewEdit.table$row1",
                        $widgetId: "p.Encryption.ChangePasswordExample_NewEdit.table$row1",
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
                                  key: "p.Encryption.ExampleConfiguration.label3",
                                  $widgetId: "p.Encryption.ExampleConfiguration.label3",
                                  class: "mx-name-label3",
                                  style: void 0,
                                  id: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ExampleConfiguration.label3"
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
                                  key: "p.Encryption.ExampleConfiguration.textBox3$formGroup",
                                  $widgetId: "p.Encryption.ExampleConfiguration.textBox3$formGroup",
                                  class: "mx-name-textBox3 mx-textbox",
                                  style: void 0,
                                  control: [
                                    /* @__PURE__ */ React.createElement(
                                      $TextBox,
                                      {
                                        key: "p.Encryption.ExampleConfiguration.textBox3",
                                        $widgetId: "p.Encryption.ExampleConfiguration.textBox3",
                                        inputValue: AttributeProperty({
                                          "scope": "$ExampleConfiguration",
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
                                          "widgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                        })
                                      }
                                    )
                                  ],
                                  caption: void 0,
                                  labelFor: DerivedUniqueIdProperty({
                                    "widgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                  }),
                                  width: void 0,
                                  orientation: "vertical",
                                  hasError: ValidationProperty({
                                    "inputWidgetId": "p.Encryption.ExampleConfiguration.textBox3"
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
                        key: "p.Encryption.ChangePasswordExample_NewEdit.table$row2",
                        $widgetId: "p.Encryption.ChangePasswordExample_NewEdit.table$row2",
                        class: "",
                        style: void 0,
                        cells: [
                          {
                            "class": "",
                            "content": void 0
                          },
                          {
                            "class": "",
                            "content": [
                              /* @__PURE__ */ React.createElement(
                                $ConditionalVisibilityWrapper,
                                {
                                  key: "p.Encryption.ExampleConfiguration.microflowButton$visibility",
                                  $widgetId: "p.Encryption.ExampleConfiguration.microflowButton$visibility",
                                  visible: ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                  }),
                                  contents: [
                                    /* @__PURE__ */ React.createElement(
                                      $ActionButton,
                                      {
                                        key: "p.Encryption.ExampleConfiguration.microflowButton",
                                        $widgetId: "p.Encryption.ExampleConfiguration.microflowButton",
                                        buttonId: "p.Encryption.ExampleConfiguration.microflowButton",
                                        class: "mx-name-microflowButton",
                                        style: void 0,
                                        tabIndex: void 0,
                                        renderType: "button",
                                        role: void 0,
                                        buttonClass: "btn-default",
                                        caption: selectTranslation([
                                          ExpressionProperty({
                                            "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                                          })
                                        ]),
                                        tooltip: TextProperty({
                                          "value": selectTranslation([
                                            ""
                                          ])
                                        }),
                                        icon: void 0,
                                        action: ActionProperty({
                                          "action": { "type": "callMicroflow", "argMap": { "ExampleConfiguration": { "widget": "$ExampleConfiguration", "source": "object" } }, "config": { "operationId": "EnLpb1Kx5lm2Jl6aCDZsEg", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": false },
                                          "abortOnServerValidation": true
                                        })
                                      }
                                    )
                                  ]
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
          $ActionButton,
          {
            key: "p.Encryption.ChangePasswordExample_NewEdit.saveButton1",
            $widgetId: "p.Encryption.ChangePasswordExample_NewEdit.saveButton1",
            buttonId: "p.Encryption.ChangePasswordExample_NewEdit.saveButton1",
            class: "mx-name-saveButton1",
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
              "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.Encryption.ChangePasswordExample_NewEdit.dataView", "source": "object" } }, "config": { "operationId": "vm5IqaRYWVuawvypEDO0ww", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
          }
        ),
        /* @__PURE__ */ React.createElement(
          $ActionButton,
          {
            key: "p.Encryption.ChangePasswordExample_NewEdit.cancelButton1",
            $widgetId: "p.Encryption.ChangePasswordExample_NewEdit.cancelButton1",
            buttonId: "p.Encryption.ChangePasswordExample_NewEdit.cancelButton1",
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
              "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "xR2zYMv/SlWa6rjapuizAA", "closePage": true }, "disabledDuringExecution": true },
              "abortOnServerValidation": true
            })
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
const cancelChangesOperationId = "3s2SELNkvl+MSNlrpbYe8g";
const closeButton = "p.Encryption.ChangePasswordExample_NewEdit.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
