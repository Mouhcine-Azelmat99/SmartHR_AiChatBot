import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import { AssociationProperty } from '../AssociationProperty-vuO-mMD-.js';
import '../AttributeProperty-DPm6A02S.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-BEIxbT2n.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { ListExpressionProperty } from '../ListExpressionProperty-Cd_aouEd.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-Bn_uSbc6.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { ComboboxWidgetModule } from '../Combobox-BIE6CPmt.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import { RadioButtonGroup } from '../RadioButtonGroup-Bum-qRf7.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../UeptbR6O-Dse5KB9T.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../CTcC6PjV-eX91G0mv.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../CxMFexew-CFDhnrRu.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';
import '../DxNyuBBG-C1dI5rNR.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $Container, $RadioButtonGroup, $Combobox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, Container, RadioButtonGroup, Combobox, ActionButton });
addEnumerations({
  "GenAICommons.ENUM_ModelModality": [
    [
      "Text",
      selectTranslation([
        "Text"
      ])
    ],
    [
      "Embeddings",
      selectTranslation([
        "Embeddings"
      ])
    ],
    [
      "Image",
      selectTranslation([
        "Image"
      ])
    ],
    [
      "Document",
      selectTranslation([
        "Document"
      ])
    ],
    [
      "Audio",
      selectTranslation([
        "Audio"
      ])
    ],
    [
      "Video",
      selectTranslation([
        "Video"
      ])
    ],
    [
      "Other",
      selectTranslation([
        "Other"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1",
      $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0",
            $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg-12 col-md-12 col-12",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                        $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.14",
                          "scope": "$BedrockDeployedModel",
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
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4$formGroup",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4",
                                    $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                      "attribute": "DisplayName",
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
                                      "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Display name*" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2$visibility",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsCustom" }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2",
                                    $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2",
                                    class: "mx-name-container2",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3$formGroup",
                                          class: "mx-name-textBox3 mx-textbox",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $TextBox,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3",
                                                inputValue: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "ProviderName",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Provider name" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6$formGroup",
                                          class: "mx-name-textBox6 mx-textbox",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $TextBox,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6",
                                                inputValue: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "Model",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Model id*" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1$formGroup",
                                          class: "mx-name-radioButtons1 mx-radiobuttons inline",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $RadioButtonGroup,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1",
                                                value: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "LifecycleStatus",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Lifecycle status" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2$formGroup",
                                          class: "mx-name-textBox2 mx-textbox",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $TextBox,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2",
                                                inputValue: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "ModelName",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Model name" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1$formGroup",
                                          class: "mx-name-textBox1 mx-textbox",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $TextBox,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1",
                                                inputValue: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "ModelARN",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Model ARN" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2$formGroup",
                                          class: "mx-name-comboBox2",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Combobox,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2",
                                                source: "context",
                                                optionsSourceType: "association",
                                                optionsSourceDatabaseDataSource: void 0,
                                                optionsSourceDatabaseCaptionType: "attribute",
                                                optionsSourceDatabaseDefaultValue: void 0,
                                                attributeAssociation: AssociationProperty({
                                                  "type": "ReferenceSet",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "path": "",
                                                  "attribute": "AmazonBedrockConnector.BedrockDeployedModel_ModelInferenceType",
                                                  "endpointEntity": "AmazonBedrockConnector.ModelInferenceType",
                                                  "selectableObjectsId": "p.0",
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                }),
                                                optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                                  "dataSourceId": "p.0",
                                                  "entity": "AmazonBedrockConnector.ModelInferenceType",
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "operationId": "MdY6UeWlnV6taXIByCkisg",
                                                  "sort": []
                                                }),
                                                optionsSourceAssociationCaptionType: "expression",
                                                optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "getKey", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "InferenceType" }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2", "source": "object" } } },
                                                  "dataSourceId": "p.0"
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Inference type" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                          })
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
                            $FormGroup,
                            {
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2$formGroup",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2$formGroup",
                              class: "mx-name-radioButtons2 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2",
                                    $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2",
                                    value: AttributeProperty({
                                      "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                      "attribute": "OutputModality",
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
                                      "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Output modality*" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1$visibility",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "OutputModality" }, { "type": "literal", "value": "Text" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "OutputModality" }, { "type": "literal", "value": "Other" }] } }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1",
                                    $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1",
                                    class: "mx-name-container1",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4$formGroup",
                                          class: "mx-name-radioButtons4 mx-radiobuttons inline",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $RadioButtonGroup,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4",
                                                value: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "SupportsSystemPrompt",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Supports system prompt*" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5$formGroup",
                                          class: "mx-name-radioButtons5 mx-radiobuttons inline",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $RadioButtonGroup,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5",
                                                value: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "SupportsConversationsWithHistory",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Supports conversations with history*" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6$formGroup",
                                          $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6$formGroup",
                                          class: "mx-name-radioButtons6 mx-radiobuttons inline",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $RadioButtonGroup,
                                              {
                                                key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6",
                                                $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6",
                                                value: AttributeProperty({
                                                  "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                  "path": "",
                                                  "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                  "attribute": "SupportsFunctionCalling",
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
                                                  "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Supports function calling*" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                          })
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
                            $FormGroup,
                            {
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1$formGroup",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1",
                                    $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "ReferenceSet",
                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                      "path": "",
                                      "attribute": "GenAICommons.DeployedModel_InputModality",
                                      "endpointEntity": "GenAICommons.InputModality",
                                      "selectableObjectsId": "p.1",
                                      "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: MicroflowObjectListProperty({
                                      "argMap": {},
                                      "dataSourceId": "p.1",
                                      "entity": "GenAICommons.InputModality",
                                      "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                      "operationId": "im3UQpMbeFWQMQ6yoA1EPQ"
                                    }),
                                    optionsSourceAssociationCaptionType: "expression",
                                    optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "getKey", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ModelModality" }] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1", "source": "object" } } },
                                      "dataSourceId": "p.1"
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
                                      "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Input modality*" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7$formGroup",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7$formGroup",
                              class: "mx-name-radioButtons7 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7",
                                    $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7",
                                    value: AttributeProperty({
                                      "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                      "path": "",
                                      "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                      "attribute": "IsActive",
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
                                      "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Is active" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1$visibility",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1",
                                    $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1",
                                    buttonId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "BedrockDeployedModel": { "widget": "$BedrockDeployedModel", "source": "object" } }, "config": { "operationId": "p/JnoMN21lqCX7WgGDoBoQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton2",
                              $widgetId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton2",
                              buttonId: "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "meTpet3yul6NzFAHuZSmHw", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Bedrock Model"
]);
const classes = "";
const cancelChangesOperationId = "fa72ETlJhlm39KvuKQ4Fhw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
