import { reactExports, asPluginWidgets, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { DynamicFileProperty } from '../DynamicFileProperty-Dw_4dLZ9.js';
import { FileManager, FileUploadProperty } from '../FileManager-LK0jKgWi.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { Label } from '../Label-CIXm_zR5.js';
import { Table, TableRow } from '../TableRow-D4rQtRXm.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { content as content$1 } from '../Encryption.PopupLayout-L_MVSoVK.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../InlineText-f914ePRH.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../F-L0MxFU-CBWLJP8y.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $Table, $TableRow, $Label, $FormGroup, $TextBox, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Table, TableRow, Label, FormGroup, TextBox, FileManager, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Encryption.PublicKey_NewEdit.layoutGrid1",
      $widgetId: "p.Encryption.PublicKey_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Encryption.PublicKey_NewEdit.layoutGrid1$row0",
            $widgetId: "p.Encryption.PublicKey_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Encryption.PublicKey_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.Encryption.PublicKey_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Encryption.PublicKey_NewEdit.dataView1",
                        $widgetId: "p.Encryption.PublicKey_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-horizontal",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$PGPCertificate",
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
                              key: "p.Encryption.PublicKey_NewEdit.table4",
                              $widgetId: "p.Encryption.PublicKey_NewEdit.table4",
                              class: "mx-name-table4",
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
                                    key: "p.Encryption.PublicKey_NewEdit.table4$row0",
                                    $widgetId: "p.Encryption.PublicKey_NewEdit.table4$row0",
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
                                              key: "p.Encryption.PublicKey_NewEdit.label2",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.label2",
                                              class: "mx-name-label2",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.label2"
                                              }),
                                              caption: TextProperty({
                                                "value": selectTranslation([
                                                  "Reference"
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
                                              key: "p.Encryption.PublicKey_NewEdit.textBox3$formGroup",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.textBox3$formGroup",
                                              class: "mx-name-textBox3 mx-textbox",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PublicKey_NewEdit.textBox3",
                                                    $widgetId: "p.Encryption.PublicKey_NewEdit.textBox3",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PublicKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
                                                      "attribute": "Reference",
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
                                                    maxLength: 100,
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
                                                      "widgetId": "p.Encryption.PublicKey_NewEdit.textBox3"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.textBox3"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PublicKey_NewEdit.textBox3"
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
                                    key: "p.Encryption.PublicKey_NewEdit.table4$row1",
                                    $widgetId: "p.Encryption.PublicKey_NewEdit.table4$row1",
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
                                              key: "p.Encryption.PublicKey_NewEdit.label1",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.label1",
                                              class: "mx-name-label1",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.label1"
                                              }),
                                              caption: TextProperty({
                                                "value": selectTranslation([
                                                  "Email"
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
                                              key: "p.Encryption.PublicKey_NewEdit.textBox1$formGroup",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.textBox1$formGroup",
                                              class: "mx-name-textBox1 mx-textbox",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PublicKey_NewEdit.textBox1",
                                                    $widgetId: "p.Encryption.PublicKey_NewEdit.textBox1",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PublicKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
                                                      "attribute": "EmailAddress",
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
                                                      "widgetId": "p.Encryption.PublicKey_NewEdit.textBox1"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.textBox1"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PublicKey_NewEdit.textBox1"
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
                                    key: "p.Encryption.PublicKey_NewEdit.table4$row2",
                                    $widgetId: "p.Encryption.PublicKey_NewEdit.table4$row2",
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
                                              key: "p.Encryption.PublicKey_NewEdit.label8",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.label8",
                                              class: "mx-name-label8",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.label8"
                                              }),
                                              caption: TextProperty({
                                                "value": selectTranslation([
                                                  "Name"
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
                                              key: "p.Encryption.PublicKey_NewEdit.textBox4$formGroup",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.textBox4$formGroup",
                                              class: "mx-name-textBox4 mx-textbox",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PublicKey_NewEdit.textBox4",
                                                    $widgetId: "p.Encryption.PublicKey_NewEdit.textBox4",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PublicKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
                                                      "attribute": "Name",
                                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                      "isList": false,
                                                      "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
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
                                                    maxLength: 400,
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
                                                      "widgetId": "p.Encryption.PublicKey_NewEdit.textBox4"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.textBox4"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PublicKey_NewEdit.textBox4"
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
                                    key: "p.Encryption.PublicKey_NewEdit.table4$row3",
                                    $widgetId: "p.Encryption.PublicKey_NewEdit.table4$row3",
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
                                              key: "p.Encryption.PublicKey_NewEdit.label10",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.label10",
                                              class: "mx-name-label10",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.label10"
                                              }),
                                              caption: TextProperty({
                                                "value": selectTranslation([
                                                  "File"
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
                                              key: "p.Encryption.PublicKey_NewEdit.fileManager3$formGroup",
                                              $widgetId: "p.Encryption.PublicKey_NewEdit.fileManager3$formGroup",
                                              class: "mx-fileinput mx-name-fileManager3 mx-filemanager",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $FileManager,
                                                  {
                                                    key: "p.Encryption.PublicKey_NewEdit.fileManager3",
                                                    $widgetId: "p.Encryption.PublicKey_NewEdit.fileManager3",
                                                    download: DynamicFileProperty({
                                                      "scope": "p.Encryption.PublicKey_NewEdit.dataView1"
                                                    }),
                                                    upload: FileUploadProperty({
                                                      "scope": "p.Encryption.PublicKey_NewEdit.dataView1"
                                                    }),
                                                    showInBrowser: false,
                                                    maxFileSize: 5,
                                                    extensions: "",
                                                    tabIndex: void 0,
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PublicKey_NewEdit.fileManager3"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PublicKey_NewEdit.fileManager3"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PublicKey_NewEdit.fileManager3"
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
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Encryption.PublicKey_NewEdit.microflowButton3$visibility",
                              $widgetId: "p.Encryption.PublicKey_NewEdit.microflowButton3$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Encryption.PublicKey_NewEdit.microflowButton3",
                                    $widgetId: "p.Encryption.PublicKey_NewEdit.microflowButton3",
                                    buttonId: "p.Encryption.PublicKey_NewEdit.microflowButton3",
                                    class: "mx-name-microflowButton3",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-success",
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
                                      "action": { "type": "callMicroflow", "argMap": { "Certificate": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "QPokFRfckVuo/xn9/6xATQ", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
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
                              key: "p.Encryption.PublicKey_NewEdit.cancelButton1",
                              $widgetId: "p.Encryption.PublicKey_NewEdit.cancelButton1",
                              buttonId: "p.Encryption.PublicKey_NewEdit.cancelButton1",
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
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "UazSKZDDY1mwBF1i4Xx1rQ", "closePage": true }, "disabledDuringExecution": true },
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
  "Public Key Details"
]);
const classes = "page-form page-form-default";
const cancelChangesOperationId = "9flszf33wla5kDVbPbPzKg";
const closeButton = "p.Encryption.PublicKey_NewEdit.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
