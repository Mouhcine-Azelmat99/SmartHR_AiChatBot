import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { content as content$1 } from '../Encryption.PopupLayout-2QHFYelV.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';

const React = { createElement: reactExports.createElement };
const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.Encryption.Certificate_Generate.layoutGrid1",
      $widgetId: "p.Encryption.Certificate_Generate.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.Encryption.Certificate_Generate.layoutGrid1$row0",
            $widgetId: "p.Encryption.Certificate_Generate.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.Encryption.Certificate_Generate.layoutGrid1$row0$column0",
                  $widgetId: "p.Encryption.Certificate_Generate.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.Encryption.Certificate_Generate.dataView1",
                        $widgetId: "p.Encryption.Certificate_Generate.dataView1",
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
                            $FormGroup,
                            {
                              key: "p.Encryption.Certificate_Generate.textBox8$formGroup",
                              $widgetId: "p.Encryption.Certificate_Generate.textBox8$formGroup",
                              class: "mx-name-textBox8 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Encryption.Certificate_Generate.textBox8",
                                    $widgetId: "p.Encryption.Certificate_Generate.textBox8",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Encryption.Certificate_Generate.dataView1",
                                      "path": "",
                                      "entity": "Encryption.PGPCertificate",
                                      "attribute": "Reference",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["This field is required"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
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
                                    ariaRequired: true,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Reference" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                              }),
                              width: 4,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Encryption.Certificate_Generate.textBox8"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Encryption.Certificate_Generate.textBox9$formGroup",
                              $widgetId: "p.Encryption.Certificate_Generate.textBox9$formGroup",
                              class: "mx-name-textBox9 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Encryption.Certificate_Generate.textBox9",
                                    $widgetId: "p.Encryption.Certificate_Generate.textBox9",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Encryption.Certificate_Generate.dataView1",
                                      "path": "",
                                      "entity": "Encryption.PGPCertificate",
                                      "attribute": "EmailAddress",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["This field is required"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
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
                                    ariaRequired: true,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Email address" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                              }),
                              width: 4,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Encryption.Certificate_Generate.textBox9"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.Encryption.Certificate_Generate.textBox6$formGroup",
                              $widgetId: "p.Encryption.Certificate_Generate.textBox6$formGroup",
                              class: "mx-name-textBox6 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.Encryption.Certificate_Generate.textBox6",
                                    $widgetId: "p.Encryption.Certificate_Generate.textBox6",
                                    inputValue: AttributeProperty({
                                      "scope": "p.Encryption.Certificate_Generate.dataView1",
                                      "path": "",
                                      "entity": "Encryption.PGPCertificate",
                                      "attribute": "PassPhrase_Plain",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": { "message": selectTranslation(["This field is required"]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "value" }, { "type": "literal", "value": null }] }, "args": {} } },
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
                                    ariaRequired: true,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Pass phrase  plain" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                              }),
                              width: 4,
                              orientation: "horizontal",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.Encryption.Certificate_Generate.textBox6"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.Encryption.Certificate_Generate.actionButton1$visibility",
                              $widgetId: "p.Encryption.Certificate_Generate.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.Encryption.Certificate_Generate.actionButton1",
                                    $widgetId: "p.Encryption.Certificate_Generate.actionButton1",
                                    buttonId: "p.Encryption.Certificate_Generate.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-success",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Generate" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Certificate_PrivateKey": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "U3QEYWxv71KDr+6dLKstAg", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
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
                              key: "p.Encryption.Certificate_Generate.cancelButton1",
                              $widgetId: "p.Encryption.Certificate_Generate.cancelButton1",
                              buttonId: "p.Encryption.Certificate_Generate.cancelButton1",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "nE2HSJ/W8VeGdim51gx9ZA", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Certificate"
]);
const classes = "page-form page-form-default";
const cancelChangesOperationId = "zxma3rfatFa3Fx6psSn6bg";
const closeButton = "p.Encryption.Certificate_Generate.cancelButton1";
const style = {};
const content = {
  ...content$1,
  "Encryption.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
