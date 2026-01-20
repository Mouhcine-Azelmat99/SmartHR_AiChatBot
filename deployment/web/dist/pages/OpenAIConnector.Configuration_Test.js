import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-B-pQLZz2.js';
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
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { ComboboxWidgetModule } from '../Combobox-DFFkbHK0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { ImageWidgetModule } from '../Image-CwuIpbpH.js';
import { Label } from '../Label-DMkcf93j.js';
import { Text } from '../Text-5NmEA291.js';
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
import '../index-CgEeXS6W.js';
import '../InlineText-CcVi-f0x.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $Combobox, $ConditionalVisibilityWrapper, $ActionButton, $Container, $Label, $Image, $Text } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, Combobox, ConditionalVisibilityWrapper, ActionButton, Container, Label, Image, Text });
addEnumerations({
  "OpenAIConnector.ENUM_ApiType": [
    [
      "AzureOpenAI",
      selectTranslation([
        "Azure OpenAI"
      ])
    ],
    [
      "OpenAI",
      selectTranslation([
        "OpenAI"
      ])
    ]
  ],
  "OpenAIConnector.ENUM_TestSuccess": [
    [
      "Success",
      selectTranslation([
        "Success"
      ])
    ],
    [
      "Failure",
      selectTranslation([
        "Failure"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.OpenAIConnector.Configuration_Test.layoutGrid1",
      $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.OpenAIConnector.Configuration_Test.layoutGrid1$row0",
            $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.OpenAIConnector.Configuration_Test.layoutGrid1$row0$column0",
                  $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.OpenAIConnector.Configuration_Test.dataView1",
                        $widgetId: "p.OpenAIConnector.Configuration_Test.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.11",
                          "scope": "$Configuration",
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
                              key: "p.OpenAIConnector.Configuration_Test.dataView5",
                              $widgetId: "p.OpenAIConnector.Configuration_Test.dataView5",
                              class: "mx-name-dataView5 form-vertical",
                              style: void 0,
                              tabIndex: void 0,
                              object: AssociationObjectProperty({
                                "dataSourceId": "p.14",
                                "scope": "$ConfigurationTest",
                                "editable": true
                              }),
                              emptyMessage: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              body: [
                                /* @__PURE__ */ React.createElement(
                                  $Div,
                                  {
                                    key: "p.OpenAIConnector.Configuration_Test.layoutGrid2",
                                    $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid2",
                                    class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                    style: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Div,
                                        {
                                          key: "p.OpenAIConnector.Configuration_Test.layoutGrid2$row0",
                                          $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid2$row0",
                                          class: "row",
                                          style: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.OpenAIConnector.Configuration_Test.layoutGrid2$row0$column0",
                                                $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid2$row0$column0",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $FormGroup,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_Test.textBox1$formGroup",
                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.textBox1$formGroup",
                                                      class: "mx-name-textBox1 mx-textbox",
                                                      style: void 0,
                                                      control: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $TextBox,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_Test.textBox1",
                                                            $widgetId: "p.OpenAIConnector.Configuration_Test.textBox1",
                                                            inputValue: AttributeProperty({
                                                              "scope": "$Configuration",
                                                              "path": "",
                                                              "entity": "OpenAIConnector.Configuration",
                                                              "attribute": "DisplayName",
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
                                                            readOnlyStyle: "control",
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
                                                              "widgetId": "p.OpenAIConnector.Configuration_Test.textBox1"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Configuration name" }, "args": {} }
                                                        })
                                                      ]),
                                                      labelFor: DerivedUniqueIdProperty({
                                                        "widgetId": "p.OpenAIConnector.Configuration_Test.textBox1"
                                                      }),
                                                      width: void 0,
                                                      orientation: "vertical",
                                                      hasError: ValidationProperty({
                                                        "inputWidgetId": "p.OpenAIConnector.Configuration_Test.textBox1"
                                                      })
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $FormGroup,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_Test.textArea3$formGroup",
                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.textArea3$formGroup",
                                                      class: "mx-name-textArea3 mx-textarea",
                                                      style: void 0,
                                                      control: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $TextArea,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_Test.textArea3",
                                                            $widgetId: "p.OpenAIConnector.Configuration_Test.textArea3",
                                                            inputValue: AttributeProperty({
                                                              "scope": "$Configuration",
                                                              "path": "",
                                                              "entity": "OpenAIConnector.Configuration",
                                                              "attribute": "Endpoint",
                                                              "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                              "isList": false,
                                                              "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                              "validation": null
                                                            }),
                                                            counterMessage: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            maxLength: 500,
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
                                                              "widgetId": "p.OpenAIConnector.Configuration_Test.textArea3"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Endpoint" }, "args": {} }
                                                        })
                                                      ]),
                                                      labelFor: DerivedUniqueIdProperty({
                                                        "widgetId": "p.OpenAIConnector.Configuration_Test.textArea3"
                                                      }),
                                                      width: void 0,
                                                      orientation: "vertical",
                                                      hasError: ValidationProperty({
                                                        "inputWidgetId": "p.OpenAIConnector.Configuration_Test.textArea3"
                                                      })
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $FormGroup,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_Test.comboBox2$formGroup",
                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.comboBox2$formGroup",
                                                      class: "mx-name-comboBox2",
                                                      style: void 0,
                                                      control: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Combobox,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_Test.comboBox2",
                                                            $widgetId: "p.OpenAIConnector.Configuration_Test.comboBox2",
                                                            source: "context",
                                                            optionsSourceType: "enumeration",
                                                            attributeEnumeration: AttributeProperty({
                                                              "scope": "$Configuration",
                                                              "path": "",
                                                              "entity": "OpenAIConnector.Configuration",
                                                              "attribute": "ApiType",
                                                              "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                              "isList": false,
                                                              "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                            }),
                                                            optionsSourceDatabaseDataSource: void 0,
                                                            optionsSourceAssociationCaptionType: "attribute",
                                                            optionsSourceDatabaseCaptionType: "attribute",
                                                            optionsSourceDatabaseDefaultValue: void 0,
                                                            optionsSourceAssociationDataSource: void 0,
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
                                                            readOnlyStyle: "bordered",
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
                                                              "widgetId": "p.OpenAIConnector.Configuration_Test.comboBox2"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "API type" }, "args": {} }
                                                        })
                                                      ]),
                                                      labelFor: DerivedUniqueIdProperty({
                                                        "widgetId": "p.OpenAIConnector.Configuration_Test.comboBox2"
                                                      }),
                                                      width: void 0,
                                                      orientation: "vertical",
                                                      hasError: ValidationProperty({
                                                        "inputWidgetId": "p.OpenAIConnector.Configuration_Test.comboBox2"
                                                      })
                                                    }
                                                  )
                                                ]
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.OpenAIConnector.Configuration_Test.layoutGrid2$row0$column1",
                                                $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid2$row0$column1",
                                                class: "col-lg col-md col",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $FormGroup,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_Test.comboBox1$formGroup",
                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.comboBox1$formGroup",
                                                      class: "mx-name-comboBox1",
                                                      style: void 0,
                                                      control: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Combobox,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_Test.comboBox1",
                                                            $widgetId: "p.OpenAIConnector.Configuration_Test.comboBox1",
                                                            source: "context",
                                                            optionsSourceType: "association",
                                                            optionsSourceDatabaseDataSource: void 0,
                                                            optionsSourceDatabaseCaptionType: "attribute",
                                                            optionsSourceDatabaseDefaultValue: void 0,
                                                            attributeAssociation: AssociationProperty({
                                                              "type": "Reference",
                                                              "entity": "OpenAIConnector.ConfigurationTest",
                                                              "path": "",
                                                              "attribute": "OpenAIConnector.ConfigurationTest_OpenAIDeployedModel",
                                                              "endpointEntity": "OpenAIConnector.OpenAIDeployedModel",
                                                              "selectableObjectsId": "p.0",
                                                              "scope": "p.OpenAIConnector.Configuration_Test.dataView5",
                                                              "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                            }),
                                                            optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                                              "dataSourceId": "p.0",
                                                              "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                              "scope": "p.OpenAIConnector.Configuration_Test.dataView5",
                                                              "operationId": "ZIOwktYzHFyJ8kxFzAyQKA",
                                                              "sort": [
                                                                [
                                                                  "OutputModality",
                                                                  "desc"
                                                                ],
                                                                [
                                                                  "DisplayName",
                                                                  "desc"
                                                                ]
                                                              ],
                                                              "arguments": {
                                                                "dataView1": [
                                                                  "$Configuration"
                                                                ]
                                                              },
                                                              "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "OpenAIConnector.OpenAIDeployedModel_Configuration", "context": "OpenAIConnector.OpenAIDeployedModel", "attributeType": "ObjectReference" }, { "type": "variable", "name": "dataView1" }] }
                                                            }),
                                                            optionsSourceAssociationCaptionType: "attribute",
                                                            optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                                              "path": "",
                                                              "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                              "attribute": "DisplayName",
                                                              "attributeType": "String",
                                                              "sortable": true,
                                                              "filterable": true,
                                                              "dataSourceId": "p.0",
                                                              "isList": false
                                                            }),
                                                            optionsSourceAssociationCaptionExpression: void 0,
                                                            optionsSourceStaticDataSource: [],
                                                            emptyOptionText: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            filterType: "contains",
                                                            noOptionsText: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Please register deployed models for the configuration on the overview page." }, "args": {} }
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
                                                              "widgetId": "p.OpenAIConnector.Configuration_Test.comboBox1"
                                                            })
                                                          }
                                                        )
                                                      ],
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Deployed model" }, "args": {} }
                                                        })
                                                      ]),
                                                      labelFor: DerivedUniqueIdProperty({
                                                        "widgetId": "p.OpenAIConnector.Configuration_Test.comboBox1"
                                                      }),
                                                      width: void 0,
                                                      orientation: "vertical",
                                                      hasError: ValidationProperty({
                                                        "inputWidgetId": "p.OpenAIConnector.Configuration_Test.comboBox1"
                                                      })
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_Test.textBox2$formGroup$visibility",
                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.textBox2$formGroup$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "OpenAIConnector.ConfigurationTest_OpenAIDeployedModel" }, { "type": "literal", "value": null }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "dataView1", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_Test.dataView5", "source": "object" }, "dataView1": { "widget": "p.OpenAIConnector.Configuration_Test.dataView1", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $FormGroup,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_Test.textBox2$formGroup",
                                                            $widgetId: "p.OpenAIConnector.Configuration_Test.textBox2$formGroup",
                                                            class: "mx-name-textBox2 mx-textbox",
                                                            style: void 0,
                                                            control: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $TextBox,
                                                                {
                                                                  key: "p.OpenAIConnector.Configuration_Test.textBox2",
                                                                  $widgetId: "p.OpenAIConnector.Configuration_Test.textBox2",
                                                                  inputValue: AttributeProperty({
                                                                    "scope": "p.OpenAIConnector.Configuration_Test.dataView5",
                                                                    "path": "OpenAIConnector.ConfigurationTest_OpenAIDeployedModel/OpenAIConnector.OpenAIDeployedModel",
                                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                                    "attribute": "AzureApiVersion",
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
                                                                  readOnlyStyle: "control",
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
                                                                    "widgetId": "p.OpenAIConnector.Configuration_Test.textBox2"
                                                                  })
                                                                }
                                                              )
                                                            ],
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Azure API version" }, "args": {} }
                                                              })
                                                            ]),
                                                            labelFor: DerivedUniqueIdProperty({
                                                              "widgetId": "p.OpenAIConnector.Configuration_Test.textBox2"
                                                            }),
                                                            width: void 0,
                                                            orientation: "vertical",
                                                            hasError: ValidationProperty({
                                                              "inputWidgetId": "p.OpenAIConnector.Configuration_Test.textBox2"
                                                            })
                                                          }
                                                        )
                                                      ]
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.OpenAIConnector.Configuration_Test.actionButton1$visibility",
                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.actionButton1$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_Test.actionButton1",
                                                            $widgetId: "p.OpenAIConnector.Configuration_Test.actionButton1",
                                                            buttonId: "p.OpenAIConnector.Configuration_Test.actionButton1",
                                                            class: "mx-name-actionButton1 spacing-outer-bottom-medium",
                                                            style: void 0,
                                                            tabIndex: void 0,
                                                            renderType: "button",
                                                            role: void 0,
                                                            buttonClass: "btn-primary",
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Test" }, "args": {} }
                                                              })
                                                            ]),
                                                            tooltip: TextProperty({
                                                              "value": selectTranslation([
                                                                ""
                                                              ])
                                                            }),
                                                            icon: void 0,
                                                            action: ActionProperty({
                                                              "action": { "type": "callMicroflow", "argMap": { "ConfigurationTest": { "widget": "$ConfigurationTest", "source": "object" } }, "config": { "operationId": "xgS7Sd1u91u3D4yUB7Tl+w", "async": true, "progress": { "message": selectTranslation([""]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      key: "p.OpenAIConnector.Configuration_Test.container3$visibility",
                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.container3$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Success" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Failure" }] } }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_Test.dataView5", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.OpenAIConnector.Configuration_Test.container3",
                                                            $widgetId: "p.OpenAIConnector.Configuration_Test.container3",
                                                            class: "mx-name-container3 label-with-text",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Label,
                                                                {
                                                                  key: "p.OpenAIConnector.Configuration_Test.label1",
                                                                  $widgetId: "p.OpenAIConnector.Configuration_Test.label1",
                                                                  class: "mx-name-label1",
                                                                  style: void 0,
                                                                  id: DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Configuration_Test.label1"
                                                                  }),
                                                                  caption: TextProperty({
                                                                    "value": selectTranslation([
                                                                      "Assistant response"
                                                                    ])
                                                                  })
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.OpenAIConnector.Configuration_Test.container6$visibility",
                                                                  $widgetId: "p.OpenAIConnector.Configuration_Test.container6$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Success" }] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_Test.dataView5", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.OpenAIConnector.Configuration_Test.container6",
                                                                        $widgetId: "p.OpenAIConnector.Configuration_Test.container6",
                                                                        class: "mx-name-container6 alert alert-success spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.OpenAIConnector.Configuration_Test.layoutGrid6",
                                                                              $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid6",
                                                                              class: "mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Div,
                                                                                  {
                                                                                    key: "p.OpenAIConnector.Configuration_Test.layoutGrid6$row0",
                                                                                    $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid6$row0",
                                                                                    class: "row",
                                                                                    style: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.OpenAIConnector.Configuration_Test.layoutGrid6$row0$column0",
                                                                                          $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid6$row0$column0",
                                                                                          class: "col-lg-auto col-md-auto col-auto align-self-start",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Image,
                                                                                              {
                                                                                                key: "p.OpenAIConnector.Configuration_Test.image3",
                                                                                                $widgetId: "p.OpenAIConnector.Configuration_Test.image3",
                                                                                                datasource: "icon",
                                                                                                imageObject: void 0,
                                                                                                defaultImageDynamic: void 0,
                                                                                                imageUrl: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                imageIcon: WebIconProperty({
                                                                                                  "icon": { "type": "glyph", "iconClass": "glyphicon-info-sign" }
                                                                                                }),
                                                                                                isBackgroundImage: false,
                                                                                                children: void 0,
                                                                                                onClickType: "action",
                                                                                                onClick: void 0,
                                                                                                alternativeText: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                widthUnit: "auto",
                                                                                                width: 100,
                                                                                                heightUnit: "auto",
                                                                                                height: 100,
                                                                                                iconSize: 24,
                                                                                                displayAs: "fullImage",
                                                                                                responsive: true,
                                                                                                class: "mx-name-image3",
                                                                                                style: void 0,
                                                                                                tabIndex: void 0
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.OpenAIConnector.Configuration_Test.layoutGrid6$row0$column1",
                                                                                          $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid6$row0$column1",
                                                                                          class: "col-lg col-md col align-self-center",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Text,
                                                                                              {
                                                                                                key: "p.OpenAIConnector.Configuration_Test.text27",
                                                                                                $widgetId: "p.OpenAIConnector.Configuration_Test.text27",
                                                                                                class: "mx-name-text27 alert-title text-bold spacing-outer-bottom-none",
                                                                                                style: void 0,
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Success!" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                renderMode: "h5"
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
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.OpenAIConnector.Configuration_Test.container7$visibility",
                                                                  $widgetId: "p.OpenAIConnector.Configuration_Test.container7$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Failure" }] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_Test.dataView5", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.OpenAIConnector.Configuration_Test.container7",
                                                                        $widgetId: "p.OpenAIConnector.Configuration_Test.container7",
                                                                        class: "mx-name-container7 alert alert-danger spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Div,
                                                                            {
                                                                              key: "p.OpenAIConnector.Configuration_Test.layoutGrid7",
                                                                              $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid7",
                                                                              class: "mx-name-layoutGrid7 mx-layoutgrid mx-layoutgrid-fluid",
                                                                              style: void 0,
                                                                              content: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $Div,
                                                                                  {
                                                                                    key: "p.OpenAIConnector.Configuration_Test.layoutGrid7$row0",
                                                                                    $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid7$row0",
                                                                                    class: "row",
                                                                                    style: void 0,
                                                                                    content: [
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.OpenAIConnector.Configuration_Test.layoutGrid7$row0$column0",
                                                                                          $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid7$row0$column0",
                                                                                          class: "col-lg-auto col-md-auto col-auto align-self-start",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Image,
                                                                                              {
                                                                                                key: "p.OpenAIConnector.Configuration_Test.image4",
                                                                                                $widgetId: "p.OpenAIConnector.Configuration_Test.image4",
                                                                                                datasource: "icon",
                                                                                                imageObject: void 0,
                                                                                                defaultImageDynamic: void 0,
                                                                                                imageUrl: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                imageIcon: WebIconProperty({
                                                                                                  "icon": { "type": "glyph", "iconClass": "glyphicon-exclamation-sign" }
                                                                                                }),
                                                                                                isBackgroundImage: false,
                                                                                                children: void 0,
                                                                                                onClickType: "action",
                                                                                                onClick: void 0,
                                                                                                alternativeText: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                widthUnit: "auto",
                                                                                                width: 100,
                                                                                                heightUnit: "auto",
                                                                                                height: 100,
                                                                                                iconSize: 24,
                                                                                                displayAs: "fullImage",
                                                                                                responsive: true,
                                                                                                class: "mx-name-image4",
                                                                                                style: void 0,
                                                                                                tabIndex: void 0
                                                                                              }
                                                                                            )
                                                                                          ]
                                                                                        }
                                                                                      ),
                                                                                      /* @__PURE__ */ React.createElement(
                                                                                        $Div,
                                                                                        {
                                                                                          key: "p.OpenAIConnector.Configuration_Test.layoutGrid7$row0$column1",
                                                                                          $widgetId: "p.OpenAIConnector.Configuration_Test.layoutGrid7$row0$column1",
                                                                                          class: "col-lg col-md col align-self-center",
                                                                                          style: void 0,
                                                                                          content: [
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $Text,
                                                                                              {
                                                                                                key: "p.OpenAIConnector.Configuration_Test.text28",
                                                                                                $widgetId: "p.OpenAIConnector.Configuration_Test.text28",
                                                                                                class: "mx-name-text28 alert-title text-bold spacing-outer-bottom-none",
                                                                                                style: void 0,
                                                                                                caption: selectTranslation([
                                                                                                  ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Failure!" }, "args": {} }
                                                                                                  })
                                                                                                ]),
                                                                                                renderMode: "h5"
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.OpenAIConnector.Configuration_Test.text2$visibility",
                                                                                                $widgetId: "p.OpenAIConnector.Configuration_Test.text2$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "dataView1", "path": "ApiType" }, { "type": "literal", "value": "OpenAI" }] }, "args": { "dataView1": { "widget": "p.OpenAIConnector.Configuration_Test.dataView1", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.OpenAIConnector.Configuration_Test.text2",
                                                                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.text2",
                                                                                                      class: "mx-name-text2",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Check the logs for details. If you have signed up for an OpenAI account and are using free trial credits, please note that these are only valid for three months after the account has been created (not after the api-key has been created). To continue using the OpenAI API with an account that is older than three months, you will need to top up your account balance with credit and create a new api-key." }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      renderMode: "span"
                                                                                                    }
                                                                                                  )
                                                                                                ]
                                                                                              }
                                                                                            ),
                                                                                            /* @__PURE__ */ React.createElement(
                                                                                              $ConditionalVisibilityWrapper,
                                                                                              {
                                                                                                key: "p.OpenAIConnector.Configuration_Test.text3$visibility",
                                                                                                $widgetId: "p.OpenAIConnector.Configuration_Test.text3$visibility",
                                                                                                visible: ExpressionProperty({
                                                                                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "dataView1", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" }] }, "args": { "dataView1": { "widget": "p.OpenAIConnector.Configuration_Test.dataView1", "source": "object" } } }
                                                                                                }),
                                                                                                contents: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Text,
                                                                                                    {
                                                                                                      key: "p.OpenAIConnector.Configuration_Test.text3",
                                                                                                      $widgetId: "p.OpenAIConnector.Configuration_Test.text3",
                                                                                                      class: "mx-name-text3",
                                                                                                      style: void 0,
                                                                                                      caption: selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Check the logs for details." }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      renderMode: "span"
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
                                                                        ],
                                                                        ariaHidden: false
                                                                      }
                                                                    )
                                                                  ]
                                                                }
                                                              )
                                                            ],
                                                            ariaHidden: false
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
                              ],
                              hideFooter: true,
                              footer: void 0
                            }
                          )
                        ],
                        hideFooter: true,
                        footer: void 0
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
  "Test configuration"
]);
const classes = "";
const cancelChangesOperationId = "QvNmG5DlB1GoiMuPs6N8Ag";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
