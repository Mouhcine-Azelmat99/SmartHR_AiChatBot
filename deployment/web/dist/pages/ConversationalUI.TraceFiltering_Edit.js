import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import { AssociationProperty } from '../AssociationProperty-BQ-xenUM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { ListAttributeProperty } from '../ListAttributeProperty-Dsd9EADd.js';
import { ListExpressionProperty } from '../ListExpressionProperty-CLcrpJsE.js';
import { MicroflowObjectListProperty } from '../MicroflowObjectListProperty-BR95nzdd.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { CheckBox } from '../CheckBox-Btqt46d7.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import { require$$0 } from '../Wait-DpHrtukH.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../CxMFexew-Djrc9cTX.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const OCH_TraceFiltering_Agent = {
  "name": "ConversationalUI.OCH_TraceFiltering_Agent",
  "instructions": [
    {
      "type": "associationRetrieve",
      "label": "e87343ac-a424-4339-92f2-f3c7c2db9e97",
      "inputVar": "TraceFiltering",
      "association": "ConversationalUI.TraceFiltering_Agent",
      "direction": "direct",
      "entity": "AgentCommons.Agent",
      "operationId": "iFJFx9PHyVe5Do98dBmT/w",
      "retrieveSingleObject": false,
      "outputVar": "AgentList"
    },
    {
      "type": "changeObject",
      "label": "eff4f3e9-15c2-4ef8-b8e9-3c999fcb6129",
      "inputVar": "TraceFiltering",
      "member": "ConversationalUI.TraceFiltering_Version",
      "value": {
        "type": "function",
        "name": "_toList",
        "parameters": [
          {
            "type": "literal",
            "value": null
          }
        ]
      }
    },
    {
      "type": "changeObject",
      "inputVar": "TraceFiltering",
      "member": "ConversationalUI.TraceFiltering_Agent",
      "value": {
        "type": "function",
        "name": "_toList",
        "parameters": [
          {
            "type": "literal",
            "value": null
          }
        ]
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "fadb8740-d45e-4cc1-b62e-34a45891c3ae",
      "action": () => require$$0.Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "30"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "17d2b9e2-1971-4d9d-a12e-4eb2b4f12b13",
      "inputVar": "TraceFiltering",
      "member": "ConversationalUI.TraceFiltering_Agent",
      "value": {
        "type": "function",
        "name": "_toList",
        "parameters": [
          {
            "type": "variable",
            "variable": "AgentList"
          }
        ]
      }
    },
    {
      "type": "return",
      "label": "7c0fbbf0-c248-424a-8528-61e96ed19365",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const { $DataView, $Div, $Container, $Text, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $Combobox, $CheckBox, $ActionButton } = asPluginWidgets({ DataView, Div, Container, Text, FormGroup, TextBox, ConditionalVisibilityWrapper, Combobox, CheckBox, ActionButton });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.ConversationalUI.TraceFiltering_Edit.dataView6",
      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.dataView6",
      class: "mx-name-dataView6 form-vertical",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.10",
        "scope": "$TraceFiltering",
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
            key: "p.ConversationalUI.TraceFiltering_Edit.layoutGrid1",
            $widgetId: "p.ConversationalUI.TraceFiltering_Edit.layoutGrid1",
            class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-top-small spacing-inner-bottom-small",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0",
                  $widgetId: "p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0",
                  class: "row",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Div,
                      {
                        key: "p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0$column0",
                        $widgetId: "p.ConversationalUI.TraceFiltering_Edit.layoutGrid1$row0$column0",
                        class: "col-lg col-md col",
                        style: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.TraceFiltering_Edit.container1",
                              $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container1",
                              class: "mx-name-container1",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.container10",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container10",
                                    class: "mx-name-container10 spacing-outer-bottom-small",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.text1",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text1",
                                          class: "mx-name-text1 font-size-medium font-weight-semibold",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "General" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.container3",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container3",
                                    class: "mx-name-container3 col-left-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.text3",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text3",
                                          class: "mx-name-text3 font-weight-semibold",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Trace ID" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.text4",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text4",
                                          class: "mx-name-text4 spacing-outer-bottom-smaller font-weight-light",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Note: Conversation ID and Agent name are ignored when filtering by Trace ID." }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ],
                                    ariaHidden: false
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.textBox2$formGroup",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox2$formGroup",
                                    class: "mx-name-textBox2 mx-textbox",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $TextBox,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.textBox2",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox2",
                                          inputValue: AttributeProperty({
                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                            "path": "",
                                            "entity": "ConversationalUI.TraceFiltering",
                                            "attribute": "TraceID",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false,
                                            "validation": null,
                                            "formatting": {}
                                          }),
                                          isPassword: false,
                                          placeholder: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "e.g. 1ab12345b-a67b-8c9d" }, "args": {} }
                                            })
                                          ]),
                                          mask: "",
                                          readOnlyStyle: "control",
                                          maxLength: 200,
                                          onEnter: void 0,
                                          onLeave: void 0,
                                          onEnterKeyPress: void 0,
                                          ariaLabel: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          autocomplete: "on",
                                          submitWhileEditing: false,
                                          submitDelay: 300,
                                          ariaRequired: void 0,
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.container18$visibility",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container18$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "TraceFiltering", "path": "TraceID" }] }, { "type": "literal", "value": "" }] }, "args": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container18",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container18",
                                          class: "mx-name-container18",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.container17",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container17",
                                                class: "mx-name-container17 col-left-aligned",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.text12",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text12",
                                                      class: "mx-name-text12 font-weight-semibold",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Conversation ID" }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.text13",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text13",
                                                      class: "mx-name-text13 spacing-outer-bottom-smaller font-weight-light",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Note: Agent is ignored when filtering by Conversation ID." }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  )
                                                ],
                                                ariaHidden: false
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox3$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox3$formGroup",
                                                class: "mx-name-textBox3 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox3",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox3",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "ConversationID",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {}
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "e.g. b04c4-db9-213" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: 200,
                                                      onEnter: void 0,
                                                      onLeave: void 0,
                                                      onEnterKeyPress: void 0,
                                                      ariaLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      autocomplete: "on",
                                                      submitWhileEditing: false,
                                                      submitDelay: 300,
                                                      ariaRequired: void 0,
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox3"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox3"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox3"
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
                                    key: "p.ConversationalUI.TraceFiltering_Edit.comboBox3$formGroup",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.comboBox3$formGroup",
                                    class: "mx-name-comboBox3 combobox-model-selection",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.comboBox3",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.comboBox3",
                                          source: "context",
                                          optionsSourceType: "association",
                                          optionsSourceDatabaseDataSource: void 0,
                                          optionsSourceAssociationCaptionType: "attribute",
                                          optionsSourceDatabaseCaptionType: "attribute",
                                          optionsSourceAssociationCaptionAttribute: ListAttributeProperty({
                                            "path": "",
                                            "entity": "AgentCommons.Agent",
                                            "attribute": "Title",
                                            "attributeType": "String",
                                            "sortable": true,
                                            "filterable": true,
                                            "dataSourceId": "p.0",
                                            "isList": false
                                          }),
                                          optionsSourceAssociationCaptionExpression: void 0,
                                          optionsSourceDatabaseDefaultValue: void 0,
                                          attributeAssociation: AssociationProperty({
                                            "type": "ReferenceSet",
                                            "entity": "ConversationalUI.TraceFiltering",
                                            "path": "",
                                            "attribute": "ConversationalUI.TraceFiltering_Agent",
                                            "endpointEntity": "AgentCommons.Agent",
                                            "selectableObjectsId": "p.0",
                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isEditable": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "TraceFiltering", "path": "TraceID" }] }, { "type": "literal", "value": "" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "TraceFiltering", "path": "ConversationID" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "args": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } } }
                                          }),
                                          optionsSourceAssociationDataSource: DatabaseObjectListProperty({
                                            "dataSourceId": "p.0",
                                            "entity": "AgentCommons.Agent",
                                            "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                            "operationId": "7u2Nk9HfL1WiI3N2fDVINw",
                                            "sort": []
                                          }),
                                          optionsSourceStaticDataSource: [],
                                          emptyOptionText: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select agent" }, "args": {} }
                                            })
                                          ]),
                                          filterType: "none",
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
                                          selectAllButton: true,
                                          selectAllButtonCaption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                            })
                                          ]),
                                          readOnlyStyle: "bordered",
                                          onChangeEvent: ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "nanoflow": () => OCH_TraceFiltering_Agent, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                            "argumentTypes": {}
                                          }),
                                          onEnterEvent: void 0,
                                          onLeaveEvent: ActionProperty({
                                            "action": { "type": "synchronize", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "argumentTypes": {}
                                          }),
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
                                          lazyLoading: false,
                                          loadingType: "spinner",
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                          })
                                        }
                                      )
                                    ],
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Agent name" }, "args": {} }
                                      })
                                    ]),
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox3"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup$visibility",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "ConversationalUI.TraceFiltering_Agent" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.TraceFiltering_Edit.dataView6", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.comboBox2$formGroup",
                                          class: "mx-name-comboBox2 combobox-model-selection",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Combobox,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.comboBox2",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.comboBox2",
                                                source: "context",
                                                optionsSourceType: "association",
                                                optionsSourceDatabaseDataSource: void 0,
                                                optionsSourceAssociationCaptionType: "expression",
                                                optionsSourceDatabaseCaptionType: "attribute",
                                                optionsSourceAssociationCaptionExpression: ListExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "AgentCommons.Version_Agent/AgentCommons.Agent/Title" }, { "type": "literal", "value": " - " }] }, { "type": "variable", "variable": "currentObject", "path": "Title" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.TraceFiltering_Edit.comboBox2", "source": "object" } } },
                                                  "dataSourceId": "p.1"
                                                }),
                                                optionsSourceDatabaseDefaultValue: void 0,
                                                attributeAssociation: AssociationProperty({
                                                  "type": "ReferenceSet",
                                                  "entity": "ConversationalUI.TraceFiltering",
                                                  "path": "",
                                                  "attribute": "ConversationalUI.TraceFiltering_Version",
                                                  "endpointEntity": "AgentCommons.Version",
                                                  "selectableObjectsId": "p.1",
                                                  "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                }),
                                                optionsSourceAssociationDataSource: MicroflowObjectListProperty({
                                                  "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } },
                                                  "dataSourceId": "p.1",
                                                  "entity": "AgentCommons.Version",
                                                  "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                  "operationId": "tulgOawHQ1Wz2WFGN6dXyw"
                                                }),
                                                optionsSourceStaticDataSource: [],
                                                emptyOptionText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Select Version(s)" }, "args": {} }
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
                                                selectAllButton: true,
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
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Agent version(s)" }, "args": {} }
                                            })
                                          ]),
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.comboBox2"
                                          })
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.container4",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container4",
                                    class: "mx-name-container4",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container11",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container11",
                                          class: "mx-name-container11 spacing-outer-bottom-small",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text6",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text6",
                                                class: "mx-name-text6 font-size-medium font-weight-semibold",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container5",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container5",
                                          class: "mx-name-container5 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox1$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox1$formGroup",
                                                class: "mx-name-textBox1 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox1",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox1",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MinDuration",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false,
                                                            "decimalPrecision": 1
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "1.0" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Min. duration in seconds" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox1"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text7",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text7",
                                                class: "mx-name-text7 spacing-outer-left-large spacing-outer-right-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox4$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox4$formGroup",
                                                class: "mx-name-textBox4 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox4",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox4",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MaxDuration",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false,
                                                            "decimalPrecision": 1
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Max. duration in seconds" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox4"
                                                })
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container12",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container12",
                                          class: "mx-name-container12 spacing-outer-bottom-small",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text5",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text5",
                                                class: "mx-name-text5 font-size-medium font-weight-semibold",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "LLM & Tokens" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container6",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container6",
                                          class: "mx-name-container6 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox5$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox5$formGroup",
                                                class: "mx-name-textBox5 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox5",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox5",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MinTotalTokens",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "100" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Min. total tokens" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox5"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text8",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text8",
                                                class: "mx-name-text8 spacing-outer-left-large spacing-outer-right-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox6$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox6$formGroup",
                                                class: "mx-name-textBox6 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox6",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox6",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MaxTotalTokens",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Max. total tokens" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox6"
                                                })
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container7",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container7",
                                          class: "mx-name-container7 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox7$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox7$formGroup",
                                                class: "mx-name-textBox7 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox7",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox7",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MinInputTokens",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "100" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Min. input tokens" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox7"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text9",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text9",
                                                class: "mx-name-text9 spacing-outer-left-large spacing-outer-right-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox8$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox8$formGroup",
                                                class: "mx-name-textBox8 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox8",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox8",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MaxInputTokens",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Max. input tokens" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox8"
                                                })
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container16",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container16",
                                          class: "mx-name-container16 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox9$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox9$formGroup",
                                                class: "mx-name-textBox9 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox9",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox9",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MinOutputTokens",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "100" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Min. output tokens" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox9"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text10",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text10",
                                                class: "mx-name-text10 spacing-outer-left-large spacing-outer-right-large",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.textBox10$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox10$formGroup",
                                                class: "mx-name-textBox10 mx-textbox",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $TextBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.textBox10",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.textBox10",
                                                      inputValue: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "MaxOutputTokens",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null,
                                                        "formatting": {
                                                          "numberFormat": {
                                                            "groupDigits": false
                                                          }
                                                        }
                                                      }),
                                                      isPassword: false,
                                                      placeholder: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "10000" }, "args": {} }
                                                        })
                                                      ]),
                                                      mask: "",
                                                      readOnlyStyle: "control",
                                                      maxLength: void 0,
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
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox10"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Max. output tokens" }, "args": {} }
                                                  })
                                                ]),
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox10"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.textBox10"
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
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.container14",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container14",
                                    class: "mx-name-container14",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container13",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container13",
                                          class: "mx-name-container13 spacing-outer-bottom-small",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text11",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text11",
                                                class: "mx-name-text11 font-size-medium font-weight-semibold",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.TraceFiltering_Edit.container15",
                                          $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container15",
                                          class: "mx-name-container15 row-text-img",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.checkBox1$formGroup",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.checkBox1$formGroup",
                                                class: "mx-name-checkBox1 spacing-outer-bottom-none spacing-outer-right-small mx-checkbox label-after",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $CheckBox,
                                                    {
                                                      key: "p.ConversationalUI.TraceFiltering_Edit.checkBox1",
                                                      $widgetId: "p.ConversationalUI.TraceFiltering_Edit.checkBox1",
                                                      value: AttributeProperty({
                                                        "scope": "p.ConversationalUI.TraceFiltering_Edit.dataView6",
                                                        "path": "",
                                                        "entity": "ConversationalUI.TraceFiltering",
                                                        "attribute": "ShowOnlyError",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false,
                                                        "validation": null
                                                      }),
                                                      readOnlyStyle: "control",
                                                      onEnter: void 0,
                                                      onLeave: void 0,
                                                      caption: void 0,
                                                      ariaLabel: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                }),
                                                width: void 0,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.TraceFiltering_Edit.checkBox1"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.TraceFiltering_Edit.text2",
                                                $widgetId: "p.ConversationalUI.TraceFiltering_Edit.text2",
                                                class: "mx-name-text2",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Display only the traces that contain errors" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            )
                                          ],
                                          ariaHidden: false
                                        }
                                      )
                                    ],
                                    ariaHidden: false
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
      ],
      hideFooter: false,
      footer: [
        /* @__PURE__ */ React.createElement(
          $Container,
          {
            key: "p.ConversationalUI.TraceFiltering_Edit.container73",
            $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container73",
            class: "mx-name-container73 pop-up-footer-flex-container",
            style: void 0,
            renderMode: "div",
            onClick: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Container,
                {
                  key: "p.ConversationalUI.TraceFiltering_Edit.container2",
                  $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container2",
                  class: "mx-name-container2 pop-up-flex-items",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.TraceFiltering_Edit.container8",
                        $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container8",
                        class: "mx-name-container8 row-left-aligned",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.ConversationalUI.TraceFiltering_Edit.actionButton3$visibility",
                              $widgetId: "p.ConversationalUI.TraceFiltering_Edit.actionButton3$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.actionButton3",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.actionButton3",
                                    buttonId: "p.ConversationalUI.TraceFiltering_Edit.actionButton3",
                                    class: "mx-name-actionButton3 btn-text-danger",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-default",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Reset" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "operationId": "Tc0tOKGYs165TJHYdOo60A", "progress": { "message": selectTranslation(["Updating graph.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        ariaHidden: false
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.TraceFiltering_Edit.container9",
                        $widgetId: "p.ConversationalUI.TraceFiltering_Edit.container9",
                        class: "mx-name-container9 row-right-aligned",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.ConversationalUI.TraceFiltering_Edit.actionButton2",
                              $widgetId: "p.ConversationalUI.TraceFiltering_Edit.actionButton2",
                              buttonId: "p.ConversationalUI.TraceFiltering_Edit.actionButton2",
                              class: "mx-name-actionButton2 spacing-outer-right-small",
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
                                "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "bjvWR+CRPFS7fD2oriFScw", "closePage": true }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.ConversationalUI.TraceFiltering_Edit.actionButton1$visibility",
                              $widgetId: "p.ConversationalUI.TraceFiltering_Edit.actionButton1$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.ConversationalUI.TraceFiltering_Edit.actionButton1",
                                    $widgetId: "p.ConversationalUI.TraceFiltering_Edit.actionButton1",
                                    buttonId: "p.ConversationalUI.TraceFiltering_Edit.actionButton1",
                                    class: "mx-name-actionButton1",
                                    style: void 0,
                                    tabIndex: void 0,
                                    renderType: "button",
                                    role: void 0,
                                    buttonClass: "btn-primary",
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Apply" }, "args": {} }
                                      })
                                    ]),
                                    tooltip: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    icon: void 0,
                                    action: ActionProperty({
                                      "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "operationId": "hqiwQ9HZGF6USKObg0Kvew", "progress": { "message": selectTranslation(["Filtering..."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                )
                              ]
                            }
                          )
                        ],
                        ariaHidden: false
                      }
                    )
                  ],
                  ariaHidden: false
                }
              )
            ],
            ariaHidden: false
          }
        )
      ]
    }
  )
]);
const title = selectTranslation([
  "Filters"
]);
const classes = "";
const cancelChangesOperationId = "3tkHLPY/6lmunhS9nBkoUQ";
const closeButton = "p.ConversationalUI.TraceFiltering_Edit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
