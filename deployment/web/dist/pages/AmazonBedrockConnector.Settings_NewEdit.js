import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { RadioButtonGroup } from '../RadioButtonGroup-DfkQ2jWG.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../DxNyuBBG-BPeNmzCp.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $Combobox, $RadioButtonGroup, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, Combobox, RadioButtonGroup, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AmazonBedrockConnector.Settings_NewEdit.layoutGrid1",
      $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AmazonBedrockConnector.Settings_NewEdit.layoutGrid1$row0",
            $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AmazonBedrockConnector.Settings_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AmazonBedrockConnector.Settings_NewEdit.dataView6",
                        $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.12",
                          "scope": "$Settings",
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
                              key: "p.AmazonBedrockConnector.Settings_NewEdit.comboBox1$formGroup",
                              $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.AmazonBedrockConnector.Settings_NewEdit.comboBox1",
                                    $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "enumeration",
                                    attributeEnumeration: AttributeProperty({
                                      "scope": "p.AmazonBedrockConnector.Settings_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AWSAuthentication.Settings",
                                      "attribute": "Region",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false
                                    }),
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    optionsSourceAssociationDataSource: void 0,
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceStaticDataSource: [],
                                    emptyOptionText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    filterType: "contains",
                                    noOptionsText: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    clearable: true,
                                    optionsSourceAssociationCustomContentType: "no",
                                    optionsSourceDatabaseCustomContentType: "no",
                                    staticDataSourceCustomContentType: "no",
                                    showFooter: false,
                                    menuFooterContent: void 0,
                                    selectionMethod: "checkbox",
                                    selectedItemsStyle: "text",
                                    selectAllButton: false,
                                    selectAllButtonCaption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "text",
                                    onChangeEvent: void 0,
                                    onEnterEvent: void 0,
                                    onLeaveEvent: void 0,
                                    ariaRequired: false,
                                    clearButtonAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                      })
                                    ]),
                                    removeValueAriaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                      })
                                    ]),
                                    a11ySelectedValue: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                      })
                                    ]),
                                    a11yOptionsAvailable: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                      })
                                    ]),
                                    a11yInstructions: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                      })
                                    ]),
                                    lazyLoading: true,
                                    loadingType: "spinner",
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.AmazonBedrockConnector.Settings_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Region" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AmazonBedrockConnector.Settings_NewEdit.comboBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AmazonBedrockConnector.Settings_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.AmazonBedrockConnector.Settings_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p.AmazonBedrockConnector.Settings_NewEdit.radioButtons1",
                                    $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p.AmazonBedrockConnector.Settings_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "AWSAuthentication.Settings",
                                      "attribute": "UseStaticCredentials",
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
                                      "widgetId": "p.AmazonBedrockConnector.Settings_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Use static credentials" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AmazonBedrockConnector.Settings_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AmazonBedrockConnector.Settings_NewEdit.radioButtons1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton1$visibility",
                              $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton1",
                                    $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton1",
                                    buttonId: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-success",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Save & Sync Data" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "Settings": { "widget": "$Settings", "source": "object" } }, "config": { "operationId": "zxBMFSr2kl+XeIqbuxOloA", "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton2$visibility",
                              $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton2$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton2",
                                    $widgetId: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton2",
                                    buttonId: "p.AmazonBedrockConnector.Settings_NewEdit.actionButton2",
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
                                      "action": { "type": "callMicroflow", "argMap": { "Settings": { "widget": "$Settings", "source": "object" } }, "config": { "operationId": "b7XrDOgHb1O2BaahCgb3Ng", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Configure AWS Bedrock Settings"
]);
const classes = "";
const cancelChangesOperationId = "CtbjDB5QAV20wj311ICBJg";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
