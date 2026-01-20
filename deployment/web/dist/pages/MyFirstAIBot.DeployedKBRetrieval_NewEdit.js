import { reactExports, asPluginWidgets, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { AssociationProperty } from '../AssociationProperty-Dro-5rqe.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { ListAttributeProperty } from '../ListAttributeProperty-CJPrRUfN.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { ComboboxWidgetModule } from '../Combobox-DFFkbHK0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { TextArea } from '../TextArea-DdodcWfx.js';
import { TextBox } from '../TextBox-C2Olp2tK.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $Combobox, $TextBox, $TextArea, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, Combobox, TextBox, TextArea, ConditionalVisibilityWrapper, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.layoutGrid1",
      $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.dataView6",
                        $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.13",
                          "scope": "$DeployedKBRetrieval",
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
                              key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.comboBox1$formGroup",
                              $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.comboBox1",
                                    $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceAssociationCaptionType: "attribute",
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                      "path": "",
                                      "entity": "GenAICommons.DeployedKnowledgeBase",
                                      "attribute": "Name",
                                      "attributeType": "String",
                                      "sortable": true,
                                      "filterable": true,
                                      "dataSourceId": "p.0",
                                      "isList": false
                                    }),
                                    optionsSourceAssociationCaptionExpression: void 0,
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "Reference",
                                      "entity": "MyFirstAIBot.DeployedKBRetrieval",
                                      "path": "",
                                      "attribute": "MyFirstAIBot.DeployedKBRetrieval_DeployedKnowledgeBase",
                                      "endpointEntity": "GenAICommons.DeployedKnowledgeBase",
                                      "selectableObjectsId": "p.0",
                                      "scope": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.0",
                                      "entity": "GenAICommons.DeployedKnowledgeBase",
                                      "scope": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.dataView6",
                                      "operationId": "+2q1qp7NI1OXVTQ++TsVNg",
                                      "sort": []
                                    }),
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
                                    optionsSourceAssociationCustomContent: void 0,
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
                                      "widgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Knowledge Base *" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.comboBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textBox1$formGroup",
                              $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textBox1",
                                    $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstAIBot.DeployedKBRetrieval",
                                      "attribute": "Name",
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
                                      "widgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Name* (this helps the model to interact with the knowledge base)" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textArea1$formGroup",
                              $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textArea1",
                                    $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MyFirstAIBot.DeployedKBRetrieval",
                                      "attribute": "Description",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "validation": null
                                    }),
                                    counterMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    maxLength: 100,
                                    numberOfLines: void 0,
                                    autoGrow: true,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    readOnlyStyle: "control",
                                    textTooLongMessage: TextProperty({
                                      "value": selectTranslation([
                                        "Value too long."
                                      ])
                                    }),
                                    onEnter: void 0,
                                    onLeave: void 0,
                                    ariaLabel: void 0,
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Description (this helps the model to interact with the knowledge base)" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.textArea1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton1$visibility",
                              $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton1",
                                    $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton1",
                                    buttonId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "DeployedKBRetrieval": { "widget": "$DeployedKBRetrieval", "source": "object" } }, "config": { "operationId": "lIzZa/eAA1+Rl9KklLy7Tw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton2",
                              $widgetId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton2",
                              buttonId: "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "87dWnb1MxlGemf/xdNhvdg", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Knowledge Base Retrieval"
]);
const classes = "";
const cancelChangesOperationId = "dXSCfm7Hb1GCaVyMwefzCw";
const closeButton = "p.MyFirstAIBot.DeployedKBRetrieval_NewEdit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
