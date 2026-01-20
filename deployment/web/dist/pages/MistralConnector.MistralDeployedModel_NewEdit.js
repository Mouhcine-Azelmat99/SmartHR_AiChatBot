import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import { AssociationProperty } from '../AssociationProperty-Dro-5rqe.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { ListExpressionProperty } from '../ListExpressionProperty-Blkk1P49.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { ComboboxWidgetModule } from '../Combobox-DFFkbHK0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { RadioButtonGroup } from '../RadioButtonGroup-Dw7gZsmC.js';
import { Text } from '../Text-5NmEA291.js';
import { TextBox } from '../TextBox-C2Olp2tK.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-D5lHkh-a.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../DxNyuBBG-CO3699Ph.js';
import '../InlineText-CcVi-f0x.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../ScrollContainer-B-pXvHDA.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $Container, $Text, $ActionButton, $RadioButtonGroup, $ConditionalVisibilityWrapper, $Combobox } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Container, Text, ActionButton, RadioButtonGroup, ConditionalVisibilityWrapper, Combobox });
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
      key: "p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1",
      $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0",
            $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0$column0",
                  $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                        $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.15",
                          "scope": "$MistralDeployedModel",
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
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2$formGroup",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2$formGroup",
                              class: "mx-name-textBox2 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MistralConnector.MistralDeployedModel",
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
                                      "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4$formGroup",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4$formGroup",
                              class: "mx-name-textBox4 spacing-outer-bottom-none mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4",
                                    inputValue: AttributeProperty({
                                      "scope": "$MistralDeployedModel",
                                      "path": "",
                                      "entity": "MistralConnector.MistralDeployedModel",
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
                                      "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
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
                                "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.container2",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.container2",
                              class: "mx-name-container2 spacing-outer-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.container5",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.container5",
                                    class: "mx-name-container5 row-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_NewEdit.text2",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.text2",
                                          class: "mx-name-text2 text-detail text-small spacing-outer-bottom-none",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "The name of the model as indicated by " }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "p"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton4",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton4",
                                          buttonId: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton4",
                                          class: "mx-name-actionButton4 btn-sm spacing-outer-bottom-none spacing-outer-left spacing-outer-top-none",
                                          style: void 0,
                                          tabIndex: void 0,
                                          renderType: "link",
                                          role: "button",
                                          buttonClass: "btn-default",
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Mistral" }, "args": {} }
                                            })
                                          ]),
                                          tooltip: TextProperty({
                                            "value": selectTranslation([
                                              ""
                                            ])
                                          }),
                                          icon: void 0,
                                          action: ActionProperty({
                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/getting-started/models/models_overview/" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1$formGroup",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1$formGroup",
                              class: "mx-name-radioButtons1 mx-radiobuttons inline",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $RadioButtonGroup,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1",
                                    value: AttributeProperty({
                                      "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                      "path": "",
                                      "entity": "MistralConnector.MistralDeployedModel",
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
                                      "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Output modality" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.container1$visibility",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.container1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "OutputModality" }, { "type": "literal", "value": "Text" }] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.container1",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.container1",
                                    class: "mx-name-container1",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2$formGroup",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2$formGroup",
                                          class: "mx-name-radioButtons2 mx-radiobuttons inline",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $RadioButtonGroup,
                                              {
                                                key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2",
                                                $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2",
                                                value: AttributeProperty({
                                                  "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                  "path": "",
                                                  "entity": "MistralConnector.MistralDeployedModel",
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
                                                  "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Supports system prompt" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3$formGroup",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3$formGroup",
                                          class: "mx-name-radioButtons3 mx-radiobuttons inline",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $RadioButtonGroup,
                                              {
                                                key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3",
                                                $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3",
                                                value: AttributeProperty({
                                                  "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                  "path": "",
                                                  "entity": "MistralConnector.MistralDeployedModel",
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
                                                  "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Supports conversations with history" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4$formGroup",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4$formGroup",
                                          class: "mx-name-radioButtons4 mx-radiobuttons inline",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $RadioButtonGroup,
                                              {
                                                key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4",
                                                $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4",
                                                value: AttributeProperty({
                                                  "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                  "path": "",
                                                  "entity": "MistralConnector.MistralDeployedModel",
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
                                                  "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Supports function calling" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
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
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1$formGroup",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1$formGroup",
                              class: "mx-name-comboBox1",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $Combobox,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1",
                                    source: "context",
                                    optionsSourceType: "association",
                                    optionsSourceDatabaseDataSource: void 0,
                                    optionsSourceDatabaseCaptionType: "attribute",
                                    optionsSourceDatabaseDefaultValue: void 0,
                                    attributeAssociation: AssociationProperty({
                                      "type": "ReferenceSet",
                                      "entity": "MistralConnector.MistralDeployedModel",
                                      "path": "",
                                      "attribute": "GenAICommons.DeployedModel_InputModality",
                                      "endpointEntity": "GenAICommons.InputModality",
                                      "selectableObjectsId": "p.2",
                                      "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                    }),
                                    optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                      "dataSourceId": "p.2",
                                      "entity": "GenAICommons.InputModality",
                                      "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                      "operationId": "tOOXacxciVyYNO3Kg8pgTQ",
                                      "sort": [
                                        [
                                          "ModelModality",
                                          "asc"
                                        ]
                                      ]
                                    }),
                                    optionsSourceAssociationCaptionType: "expression",
                                    optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "getKey", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ModelModality" }] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1", "source": "object" } } },
                                      "dataSourceId": "p.2"
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
                                      "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Input modality" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup$visibility",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "currentObject" }] }, { "type": "literal", "value": false }] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup",
                                    class: "mx-name-radioButtons5 mx-radiobuttons inline",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $RadioButtonGroup,
                                        {
                                          key: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5",
                                          $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5",
                                          value: AttributeProperty({
                                            "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                            "path": "",
                                            "entity": "MistralConnector.MistralDeployedModel",
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
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
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
                                      "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
                                    })
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
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1$visibility",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1",
                                    $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1",
                                    buttonId: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1",
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
                                      "action": { "type": "callMicroflow", "argMap": { "MistralDeployedModel": { "widget": "$MistralDeployedModel", "source": "object" } }, "config": { "operationId": "TS5xr8/Pw1i4fA+rj1Gcsg", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                              key: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton2",
                              $widgetId: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton2",
                              buttonId: "p.MistralConnector.MistralDeployedModel_NewEdit.actionButton2",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "VLxC3IEWQFWql56wjlfVag", "closePage": true }, "disabledDuringExecution": true },
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
  "Edit Deployed Model"
]);
const classes = "";
const cancelChangesOperationId = "42xO1Cs08liwn89sHOdqEQ";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
