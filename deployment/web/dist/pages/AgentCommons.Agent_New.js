import { reactExports, asPluginWidgets, addEnumerations, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { DynamicClassProperty } from '../DynamicClassProperty-GqIRc8le.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { ComboboxWidgetModule } from '../Combobox-kwA1_Kpz.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextArea } from '../TextArea-CVgm5cpf.js';
import { TextBox } from '../TextBox-Fm7_ARBG.js';
import { TooltipWidgetModule } from '../Tooltip-Ca2Kf3P2.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-CdvE1MzX.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../index-BuuMIVCm.js';
import '../ScrollContainer-U0HrQ4Hh.js';

const React = { createElement: reactExports.createElement };
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $Combobox } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, Combobox });
addEnumerations({
  "AgentCommons.ENUM_Agent_UsageType": [
    [
      "Single_Call",
      selectTranslation([
        "Task"
      ])
    ],
    [
      "Conversational",
      selectTranslation([
        "Chat"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.Agent_New.layoutGrid1",
      $widgetId: "p.AgentCommons.Agent_New.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Agent_New.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Agent_New.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Agent_New.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Agent_New.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.Agent_New.dataView1",
                        $widgetId: "p.AgentCommons.Agent_New.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.22",
                          "scope": "$Agent",
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
                              key: "p.AgentCommons.Agent_New.textBox1$formGroup",
                              $widgetId: "p.AgentCommons.Agent_New.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.Agent_New.textBox1",
                                    $widgetId: "p.AgentCommons.Agent_New.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.Agent_New.dataView1",
                                      "path": "",
                                      "entity": "AgentCommons.Agent",
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
                                    readOnlyStyle: "control",
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
                                      "widgetId": "p.AgentCommons.Agent_New.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.Agent_New.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.Agent_New.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $FormGroup,
                            {
                              key: "p.AgentCommons.Agent_New.textArea1$formGroup",
                              $widgetId: "p.AgentCommons.Agent_New.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.AgentCommons.Agent_New.textArea1",
                                    $widgetId: "p.AgentCommons.Agent_New.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.Agent_New.dataView1",
                                      "path": "",
                                      "entity": "AgentCommons.Agent",
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
                                    maxLength: 200,
                                    numberOfLines: 2,
                                    autoGrow: false,
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
                                      "widgetId": "p.AgentCommons.Agent_New.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                })
                              ]),
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.Agent_New.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.Agent_New.textArea1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Agent_New.container5",
                              $widgetId: "p.AgentCommons.Agent_New.container5",
                              class: "mx-name-container5 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Agent_New.text1",
                                    $widgetId: "p.AgentCommons.Agent_New.text1",
                                    class: "mx-name-text1 text-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Usage type" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Tooltip,
                                  {
                                    key: "p.AgentCommons.Agent_New.tooltip2",
                                    $widgetId: "p.AgentCommons.Agent_New.tooltip2",
                                    trigger: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.Agent_New.actionButton21$visibility",
                                          $widgetId: "p.AgentCommons.Agent_New.actionButton21$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.Agent_New.actionButton21",
                                                $widgetId: "p.AgentCommons.Agent_New.actionButton21",
                                                buttonId: "p.AgentCommons.Agent_New.actionButton21",
                                                class: "mx-name-actionButton21 btn-sm spacing-outer-left spacing-outer-right",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "link",
                                                role: "button",
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
                                                  "abortOnServerValidation": true
                                                })
                                              }
                                            )
                                          ]
                                        }
                                      )
                                    ],
                                    renderMethod: "custom",
                                    htmlMessage: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Agent_New.container102",
                                          $widgetId: "p.AgentCommons.Agent_New.container102",
                                          class: "mx-name-container102 w306 spacing-inner-top spacing-inner-bottom spacing-inner-left spacing-inner-right",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.AgentCommons.Agent_New.container38",
                                                $widgetId: "p.AgentCommons.Agent_New.container38",
                                                class: "mx-name-container38 spacing-outer-bottom",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Agent_New.text43",
                                                      $widgetId: "p.AgentCommons.Agent_New.text43",
                                                      class: "mx-name-text43 text-semibold text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Single Call Agents: " }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Agent_New.text44",
                                                      $widgetId: "p.AgentCommons.Agent_New.text44",
                                                      class: "mx-name-text44 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "These agents execute based on variables and user input, typically for single call retention and programmatic use in microflows." }, "args": {} }
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
                                                key: "p.AgentCommons.Agent_New.container56",
                                                $widgetId: "p.AgentCommons.Agent_New.container56",
                                                class: "mx-name-container56 spacing-outer-bottom",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Agent_New.text45",
                                                      $widgetId: "p.AgentCommons.Agent_New.text45",
                                                      class: "mx-name-text45 text-semibold text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Conversational Agents: " }, "args": {} }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Agent_New.text46",
                                                      $widgetId: "p.AgentCommons.Agent_New.text46",
                                                      class: "mx-name-text46 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "These agents create interactive and dynamic dialogues by retaining and utilizing the context of ongoing conversations, making them suitable for conversational chat assistants, as well as non-chat agentic processes where earlier interactions are crucial." }, "args": {} }
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
                                    textMessage: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    tooltipPosition: "bottom",
                                    arrowPosition: "none",
                                    openOn: "hover",
                                    class: "mx-name-tooltip2 agent-tooltip",
                                    style: void 0,
                                    tabIndex: void 0
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Agent_New.container2",
                              $widgetId: "p.AgentCommons.Agent_New.container2",
                              class: "mx-name-container2 spacing-outer-top-smaller spacing-outer-bottom-large",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Agent_New.container1",
                                    $widgetId: "p.AgentCommons.Agent_New.container1",
                                    class: "mx-name-container1 segmented-control",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.Agent_New.actionButton4$visibility",
                                          $widgetId: "p.AgentCommons.Agent_New.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Single_Call" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.Agent_New.actionButton4",
                                                $widgetId: "p.AgentCommons.Agent_New.actionButton4",
                                                buttonId: "p.AgentCommons.Agent_New.actionButton4",
                                                class: "mx-name-actionButton4",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-primary",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "Single_Call" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" }] }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.AgentCommons.Agent_New.actionButton5$visibility",
                                          $widgetId: "p.AgentCommons.Agent_New.actionButton5$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Conversational" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.Agent_New.actionButton5",
                                                $widgetId: "p.AgentCommons.Agent_New.actionButton5",
                                                buttonId: "p.AgentCommons.Agent_New.actionButton5",
                                                class: DynamicClassProperty({
                                                  "staticClasses": "mx-name-actionButton5",
                                                  "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "border-right" }, "else": { "type": "literal", "value": "" } }, "args": { "currentObject": { "widget": "$Agent", "source": "object" } } }
                                                }),
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "Single_Call" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" }] }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "L37EgIhKcFWWW/VQv7EKNQ", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.AgentCommons.Agent_New.actionButton6$visibility",
                                          $widgetId: "p.AgentCommons.Agent_New.actionButton6$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Single_Call" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": null }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.Agent_New.actionButton6",
                                                $widgetId: "p.AgentCommons.Agent_New.actionButton6",
                                                buttonId: "p.AgentCommons.Agent_New.actionButton6",
                                                class: "mx-name-actionButton6",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "Conversational" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" }] }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "Bpd6lODVv1+XcStzuQQumw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.AgentCommons.Agent_New.actionButton3$visibility",
                                          $widgetId: "p.AgentCommons.Agent_New.actionButton3$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Conversational" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.Agent_New.actionButton3",
                                                $widgetId: "p.AgentCommons.Agent_New.actionButton3",
                                                buttonId: "p.AgentCommons.Agent_New.actionButton3",
                                                class: "mx-name-actionButton3",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-primary",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [{ "type": "literal", "value": "Conversational" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" }] }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: void 0,
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                  $FormGroup,
                                  {
                                    key: "p.AgentCommons.Agent_New.comboBox1$formGroup",
                                    $widgetId: "p.AgentCommons.Agent_New.comboBox1$formGroup",
                                    class: "mx-name-comboBox1 combobox-hidden-with-validation",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Combobox,
                                        {
                                          key: "p.AgentCommons.Agent_New.comboBox1",
                                          $widgetId: "p.AgentCommons.Agent_New.comboBox1",
                                          source: "context",
                                          optionsSourceType: "enumeration",
                                          attributeEnumeration: AttributeProperty({
                                            "scope": "p.AgentCommons.Agent_New.dataView1",
                                            "path": "",
                                            "entity": "AgentCommons.Agent",
                                            "attribute": "UsageType",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
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
                                            "widgetId": "p.AgentCommons.Agent_New.comboBox1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.Agent_New.comboBox1"
                                    }),
                                    width: void 0,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.AgentCommons.Agent_New.comboBox1"
                                    })
                                  }
                                )
                              ],
                              ariaHidden: false
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Agent_New.container3",
                              $widgetId: "p.AgentCommons.Agent_New.container3",
                              class: "mx-name-container3 row-right",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AgentCommons.Agent_New.actionButton2",
                                    $widgetId: "p.AgentCommons.Agent_New.actionButton2",
                                    buttonId: "p.AgentCommons.Agent_New.actionButton2",
                                    class: "mx-name-actionButton2 spacing-outer-right-medium pull-right",
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
                                      "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "XbqGUOyTz167AP+qnDtJmw", "closePage": true }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.Agent_New.actionButton1$visibility",
                                    $widgetId: "p.AgentCommons.Agent_New.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Agent_New.actionButton1",
                                          $widgetId: "p.AgentCommons.Agent_New.actionButton1",
                                          buttonId: "p.AgentCommons.Agent_New.actionButton1",
                                          class: "mx-name-actionButton1 pull-right",
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
                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "R4g5RiZ8t1SuzpzUdxkgSw", "progress": { "message": selectTranslation(["Creating agent.."]), "modal": true }, "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Create new agent"
]);
const classes = "";
const cancelChangesOperationId = "kjCV0T9+GF2LkUdHIC5PKA";
const closeButton = "p.AgentCommons.Agent_New.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
