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
import { Text } from '../Text-Ct6rfb-k.js';
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
const { $Div, $DataView, $Text, $Table, $TableRow, $Label, $FormGroup, $TextBox, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Text, Table, TableRow, Label, FormGroup, TextBox, FileManager, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Encryption.PrivateKey_NewEdit.layoutGrid1",
      $widgetId: "p.Encryption.PrivateKey_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0",
            $widgetId: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.Encryption.PrivateKey_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Encryption.PrivateKey_NewEdit.dataView1",
                        $widgetId: "p.Encryption.PrivateKey_NewEdit.dataView1",
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
                            $DataView,
                            {
                              key: "p.Encryption.PrivateKey_NewEdit.dataView2",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.dataView2",
                              class: "mx-name-dataView2 form-horizontal",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.15",
                                "scope": "$PGPCertificate",
                                "editable": true,
                                "path": "Encryption.SecretKey_PublicKey/Encryption.PGPCertificate",
                                "operationId": "AD88oPda9lKLrcc0xl0MVw"
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.Encryption.PrivateKey_NewEdit.label4",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.label4",
                                    class: "mx-name-label4",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Public Key Pair" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "h2"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Table,
                                  {
                                    key: "p.Encryption.PrivateKey_NewEdit.table3",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table3",
                                    class: "mx-name-table3",
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
                                          key: "p.Encryption.PrivateKey_NewEdit.table3$row0",
                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.table3$row0",
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
                                                    key: "p.Encryption.PrivateKey_NewEdit.label5",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.label5",
                                                    class: "mx-name-label5",
                                                    style: void 0,
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.label5"
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
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox2$formGroup",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox2$formGroup",
                                                    class: "mx-name-textBox2 mx-textbox",
                                                    style: void 0,
                                                    control: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $TextBox,
                                                        {
                                                          key: "p.Encryption.PrivateKey_NewEdit.textBox2",
                                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox2",
                                                          inputValue: AttributeProperty({
                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView2",
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
                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
                                                          })
                                                        }
                                                      )
                                                    ],
                                                    caption: void 0,
                                                    labelFor: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
                                                    }),
                                                    width: 4,
                                                    orientation: "vertical",
                                                    hasError: ValidationProperty({
                                                      "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox2"
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
                                          key: "p.Encryption.PrivateKey_NewEdit.table3$row1",
                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.table3$row1",
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
                                                    key: "p.Encryption.PrivateKey_NewEdit.label6",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.label6",
                                                    class: "mx-name-label6",
                                                    style: void 0,
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.label6"
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
                                                    key: "p.Encryption.PrivateKey_NewEdit.fileManager4$formGroup",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager4$formGroup",
                                                    class: "mx-fileinput mx-name-fileManager4 mx-filemanager",
                                                    style: void 0,
                                                    control: [
                                                      /* @__PURE__ */ React.createElement(
                                                        $FileManager,
                                                        {
                                                          key: "p.Encryption.PrivateKey_NewEdit.fileManager4",
                                                          $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager4",
                                                          download: DynamicFileProperty({
                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView2"
                                                          }),
                                                          upload: FileUploadProperty({
                                                            "scope": "p.Encryption.PrivateKey_NewEdit.dataView2"
                                                          }),
                                                          showInBrowser: false,
                                                          maxFileSize: 5,
                                                          extensions: "",
                                                          tabIndex: void 0,
                                                          id: DerivedUniqueIdProperty({
                                                            "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                          })
                                                        }
                                                      )
                                                    ],
                                                    caption: void 0,
                                                    labelFor: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
                                                    }),
                                                    width: 4,
                                                    orientation: "vertical",
                                                    hasError: ValidationProperty({
                                                      "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.fileManager4"
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
                              hideFooter: true,
                              footer: void 0
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.Encryption.PrivateKey_NewEdit.label7",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label7",
                              class: "mx-name-label7",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Private Key" }, "args": {} }
                                })
                              ]),
                              renderMode: "h2"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Table,
                            {
                              key: "p.Encryption.PrivateKey_NewEdit.table4",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.table4",
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row0",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row0",
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
                                              key: "p.Encryption.PrivateKey_NewEdit.label2",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label2",
                                              class: "mx-name-label2",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label2"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox3$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox3$formGroup",
                                              class: "mx-name-textBox3 mx-textbox",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox3",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox3",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
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
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox3"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row1",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row1",
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
                                              key: "p.Encryption.PrivateKey_NewEdit.label1",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label1",
                                              class: "mx-name-label1",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label1"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox1$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox1$formGroup",
                                              class: "mx-name-textBox1 mx-textbox",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox1",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox1",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
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
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox1"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row2",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row2",
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
                                              key: "p.Encryption.PrivateKey_NewEdit.label8",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label8",
                                              class: "mx-name-label8",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label8"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox4$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox4$formGroup",
                                              class: "mx-name-textBox4 mx-textbox",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox4",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox4",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
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
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox4"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row3",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row3",
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
                                              key: "p.Encryption.PrivateKey_NewEdit.label9",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label9",
                                              class: "mx-name-label9",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label9"
                                              }),
                                              caption: TextProperty({
                                                "value": selectTranslation([
                                                  "Pass Phrase"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.textBox5$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox5$formGroup",
                                              class: "mx-name-textBox5 mx-textbox",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $TextBox,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.textBox5",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.textBox5",
                                                    inputValue: AttributeProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1",
                                                      "path": "",
                                                      "entity": "Encryption.PGPCertificate",
                                                      "attribute": "PassPhrase_Plain",
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
                                                    maxLength: 20,
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
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.textBox5"
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
                                    key: "p.Encryption.PrivateKey_NewEdit.table4$row4",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.table4$row4",
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
                                              key: "p.Encryption.PrivateKey_NewEdit.label10",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.label10",
                                              class: "mx-name-label10",
                                              style: void 0,
                                              id: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.label10"
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
                                              key: "p.Encryption.PrivateKey_NewEdit.fileManager3$formGroup",
                                              $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager3$formGroup",
                                              class: "mx-fileinput mx-name-fileManager3 mx-filemanager",
                                              style: void 0,
                                              control: [
                                                /* @__PURE__ */ React.createElement(
                                                  $FileManager,
                                                  {
                                                    key: "p.Encryption.PrivateKey_NewEdit.fileManager3",
                                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.fileManager3",
                                                    download: DynamicFileProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1"
                                                    }),
                                                    upload: FileUploadProperty({
                                                      "scope": "p.Encryption.PrivateKey_NewEdit.dataView1"
                                                    }),
                                                    showInBrowser: false,
                                                    maxFileSize: 5,
                                                    extensions: "",
                                                    tabIndex: void 0,
                                                    id: DerivedUniqueIdProperty({
                                                      "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
                                                    })
                                                  }
                                                )
                                              ],
                                              caption: void 0,
                                              labelFor: DerivedUniqueIdProperty({
                                                "widgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
                                              }),
                                              width: 4,
                                              orientation: "vertical",
                                              hasError: ValidationProperty({
                                                "inputWidgetId": "p.Encryption.PrivateKey_NewEdit.fileManager3"
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
                              key: "p.Encryption.PrivateKey_NewEdit.microflowButton3$visibility",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.microflowButton3$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Encryption.PrivateKey_NewEdit.microflowButton3",
                                    $widgetId: "p.Encryption.PrivateKey_NewEdit.microflowButton3",
                                    buttonId: "p.Encryption.PrivateKey_NewEdit.microflowButton3",
                                    class: "mx-name-microflowButton3",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-success",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Upload" }, "args": {} }
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
                              key: "p.Encryption.PrivateKey_NewEdit.cancelButton1",
                              $widgetId: "p.Encryption.PrivateKey_NewEdit.cancelButton1",
                              buttonId: "p.Encryption.PrivateKey_NewEdit.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "FdHUtuwCiVGbx76Oe/X5Wg", "closePage": true }, "disabledDuringExecution": true },
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
  "External Certificate Details"
]);
const classes = "page-form page-form-default";
const cancelChangesOperationId = "E25LYrl2QVyNyJtzMHS/kQ";
const closeButton = "p.Encryption.PrivateKey_NewEdit.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
