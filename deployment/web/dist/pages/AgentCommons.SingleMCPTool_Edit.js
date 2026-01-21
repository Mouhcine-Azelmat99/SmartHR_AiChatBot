import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import { Div } from '../Div-DnhZCXw4.js';
import '../Fragment-kXArd_1S.js';
import { SwitchWidgetModule } from '../Switch-M5IAxH5c.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { TextArea } from '../TextArea-CLTGOhN2.js';
import { TextBox } from '../TextBox-CWp8bmf4.js';
import { TooltipWidgetModule } from '../Tooltip-wE3mB9aV.js';
import { content as content$1 } from '../Atlas_Core.PopupLayout-B5WEKHCX.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../index-BP8nYpIk.js';
import '../InlineText-f914ePRH.js';
import '../B6nacfjo-DRlmgVxc.js';
import '../B7_8A3ct-PtP2BrDi.js';
import '../F-L0MxFU-CBWLJP8y.js';
import '../ScrollContainer-DO1bE89X.js';

const React = { createElement: reactExports.createElement };
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $TextBox, $Fragment, $Switch, $TextArea } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, TextBox, Fragment, Switch, TextArea });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.SingleMCPTool_Edit.layoutGrid1",
      $widgetId: "p.AgentCommons.SingleMCPTool_Edit.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.SingleMCPTool_Edit.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.SingleMCPTool_Edit.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.SingleMCPTool_Edit.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.SingleMCPTool_Edit.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.SingleMCPTool_Edit.dataView6",
                        $widgetId: "p.AgentCommons.SingleMCPTool_Edit.dataView6",
                        class: "mx-name-dataView6 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.22",
                          "scope": "$SingleMCPTool",
                          "editable": true
                        }),
                        emptyMessage: TextProperty({
                          "value": selectTranslation([
                            ""
                          ])
                        }),
                        body: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.SingleMCPTool_Edit.container39",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container39",
                              class: "mx-name-container39 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.text3",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.text3",
                                    class: "mx-name-text3 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "MCP tool name" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.container44",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container44",
                                    class: "mx-name-container44 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.SingleMCPTool_Edit.tooltip3",
                                          $widgetId: "p.AgentCommons.SingleMCPTool_Edit.tooltip3",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.SingleMCPTool_Edit.actionButton22$visibility",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton22$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.SingleMCPTool_Edit.actionButton22",
                                                      $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton22",
                                                      buttonId: "p.AgentCommons.SingleMCPTool_Edit.actionButton22",
                                                      class: "mx-name-actionButton22 spacing-outer-left spacing-outer-right",
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
                                                key: "p.AgentCommons.SingleMCPTool_Edit.container103",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container103",
                                                class: "mx-name-container103 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.SingleMCPTool_Edit.text45",
                                                      $widgetId: "p.AgentCommons.SingleMCPTool_Edit.text45",
                                                      class: "mx-name-text45 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "This is the name of the tool that is exposed by the MCP Server." }, "args": {} }
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
                                          textMessage: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltipPosition: "bottom",
                                          arrowPosition: "none",
                                          openOn: "hover",
                                          class: "mx-name-tooltip3 agent-tooltip",
                                          style: void 0,
                                          tabIndex: void 0
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
                              key: "p.AgentCommons.SingleMCPTool_Edit.textBox1$formGroup",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.textBox1$formGroup",
                              class: "mx-name-textBox1 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.textBox1",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.SingleMCPTool_Edit.dataView6",
                                      "path": "AgentCommons.SingleMCPTool_MCPTool/MCPClient.MCPTool",
                                      "entity": "MCPClient.MCPTool",
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
                                      "widgetId": "p.AgentCommons.SingleMCPTool_Edit.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.SingleMCPTool_Edit.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.SingleMCPTool_Edit.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Fragment,
                            {
                              key: "p.AgentCommons.SingleMCPTool_Edit.snippetCall1",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.snippetCall1",
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Snippet_Tool_Enable.container8",
                                    $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container8",
                                    class: "mx-name-container8 col-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.AgentCommons.Snippet_Tool_Enable.container48",
                                          $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container48",
                                          class: "mx-name-container48 row-left",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.AgentCommons.Snippet_Tool_Enable.text6",
                                                $widgetId: "p.AgentCommons.Snippet_Tool_Enable.text6",
                                                class: "mx-name-text6 custom-control-label",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Enabled" }, "args": {} }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.AgentCommons.Snippet_Tool_Enable.container49",
                                                $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container49",
                                                class: "mx-name-container49 icon-info-wrapper",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Tooltip,
                                                    {
                                                      key: "p.AgentCommons.Snippet_Tool_Enable.tooltip7",
                                                      $widgetId: "p.AgentCommons.Snippet_Tool_Enable.tooltip7",
                                                      trigger: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.AgentCommons.Snippet_Tool_Enable.actionButton26$visibility",
                                                            $widgetId: "p.AgentCommons.Snippet_Tool_Enable.actionButton26$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ActionButton,
                                                                {
                                                                  key: "p.AgentCommons.Snippet_Tool_Enable.actionButton26",
                                                                  $widgetId: "p.AgentCommons.Snippet_Tool_Enable.actionButton26",
                                                                  buttonId: "p.AgentCommons.Snippet_Tool_Enable.actionButton26",
                                                                  class: "mx-name-actionButton26 spacing-outer-left spacing-outer-right",
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
                                                            key: "p.AgentCommons.Snippet_Tool_Enable.container107",
                                                            $widgetId: "p.AgentCommons.Snippet_Tool_Enable.container107",
                                                            class: "mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.AgentCommons.Snippet_Tool_Enable.text48",
                                                                  $widgetId: "p.AgentCommons.Snippet_Tool_Enable.text48",
                                                                  class: "mx-name-text48 text-normal text-break text-small",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "The LLM is only aware of enabled tools and, as such, cannot call disabled tools. This holds for this Agent Builder interface as well as the Agent being used in the app logic. Disabling a tool can help during development to (temporarily) exclude a tool. It prevents having to add it back from scratch when it is needed again later." }, "args": {} }
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
                                                      textMessage: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltipPosition: "bottom",
                                                      arrowPosition: "none",
                                                      openOn: "hover",
                                                      class: "mx-name-tooltip7 agent-tooltip",
                                                      style: void 0,
                                                      tabIndex: void 0
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
                                          key: "p.AgentCommons.Snippet_Tool_Enable.switch1$formGroup",
                                          $widgetId: "p.AgentCommons.Snippet_Tool_Enable.switch1$formGroup",
                                          class: "mx-name-switch1 switch",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Switch,
                                              {
                                                key: "p.AgentCommons.Snippet_Tool_Enable.switch1",
                                                $widgetId: "p.AgentCommons.Snippet_Tool_Enable.switch1",
                                                booleanAttribute: AttributeProperty({
                                                  "scope": "$SingleMCPTool",
                                                  "path": "",
                                                  "entity": "AgentCommons.Tool",
                                                  "attribute": "IsEnabled",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                  "isList": false
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": false },
                                                  "argumentTypes": {}
                                                }),
                                                tabIndex: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                          }),
                                          width: void 0,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
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
                            $Container,
                            {
                              key: "p.AgentCommons.SingleMCPTool_Edit.container40",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container40",
                              class: "mx-name-container40 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.text4",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.text4",
                                    class: "mx-name-text4 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Name*" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.container45",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container45",
                                    class: "mx-name-container45 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.SingleMCPTool_Edit.tooltip4",
                                          $widgetId: "p.AgentCommons.SingleMCPTool_Edit.tooltip4",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.SingleMCPTool_Edit.actionButton23$visibility",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton23$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.SingleMCPTool_Edit.actionButton23",
                                                      $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton23",
                                                      buttonId: "p.AgentCommons.SingleMCPTool_Edit.actionButton23",
                                                      class: "mx-name-actionButton23 spacing-outer-left spacing-outer-right",
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
                                                key: "p.AgentCommons.SingleMCPTool_Edit.container104",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container104",
                                                class: "mx-name-container104 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.SingleMCPTool_Edit.text46",
                                                      $widgetId: "p.AgentCommons.SingleMCPTool_Edit.text46",
                                                      class: "mx-name-text46 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "You can specify a different name for the tool to be sent to the LLM than the one provided by the MCP server. This can be useful if the LLM has special requirements for tool names." }, "args": {} }
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
                                          textMessage: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltipPosition: "bottom",
                                          arrowPosition: "none",
                                          openOn: "hover",
                                          class: "mx-name-tooltip4 agent-tooltip",
                                          style: void 0,
                                          tabIndex: void 0
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
                              key: "p.AgentCommons.SingleMCPTool_Edit.textBox3$formGroup",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.textBox3$formGroup",
                              class: "mx-name-textBox3 mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.textBox3",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.SingleMCPTool_Edit.dataView6",
                                      "path": "",
                                      "entity": "AgentCommons.SingleMCPTool",
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
                                      "widgetId": "p.AgentCommons.SingleMCPTool_Edit.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.SingleMCPTool_Edit.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.SingleMCPTool_Edit.textBox3"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.SingleMCPTool_Edit.container41",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container41",
                              class: "mx-name-container41 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.text5",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.text5",
                                    class: "mx-name-text5 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Description*" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.container46",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container46",
                                    class: "mx-name-container46 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.SingleMCPTool_Edit.tooltip5",
                                          $widgetId: "p.AgentCommons.SingleMCPTool_Edit.tooltip5",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.SingleMCPTool_Edit.actionButton24$visibility",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton24$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.SingleMCPTool_Edit.actionButton24",
                                                      $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton24",
                                                      buttonId: "p.AgentCommons.SingleMCPTool_Edit.actionButton24",
                                                      class: "mx-name-actionButton24 spacing-outer-left spacing-outer-right",
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
                                                key: "p.AgentCommons.SingleMCPTool_Edit.container105",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container105",
                                                class: "mx-name-container105 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.SingleMCPTool_Edit.text47",
                                                      $widgetId: "p.AgentCommons.SingleMCPTool_Edit.text47",
                                                      class: "mx-name-text47 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "This is a description for the LLM that explains in human language what the tool does and what it returns. The string value returned is used by the agent to determine next steps.\r\n\r\nIt is used in combination with the name by the model to determine what tool calls are necessary and when." }, "args": {} }
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
                                          textMessage: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          tooltipPosition: "bottom",
                                          arrowPosition: "none",
                                          openOn: "hover",
                                          class: "mx-name-tooltip5 agent-tooltip",
                                          style: void 0,
                                          tabIndex: void 0
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
                              key: "p.AgentCommons.SingleMCPTool_Edit.textArea1$formGroup",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.textArea1$formGroup",
                              class: "mx-name-textArea1 mx-textarea",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextArea,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.textArea1",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.textArea1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.SingleMCPTool_Edit.dataView6",
                                      "path": "",
                                      "entity": "AgentCommons.SingleMCPTool",
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
                                    maxLength: 4096,
                                    numberOfLines: 5,
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
                                    ariaLabel: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    ariaRequired: void 0,
                                    submitWhileEditing: false,
                                    submitDelay: 300,
                                    tabIndex: void 0,
                                    id: DerivedUniqueIdProperty({
                                      "widgetId": "p.AgentCommons.SingleMCPTool_Edit.textArea1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.SingleMCPTool_Edit.textArea1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.SingleMCPTool_Edit.textArea1"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.SingleMCPTool_Edit.container2",
                              $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container2",
                              class: "mx-name-container2",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.SingleMCPTool_Edit.container3",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container3",
                                    class: "mx-name-container3 pull-left",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.SingleMCPTool_Edit.actionButton3$visibility",
                                          $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton3$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.SingleMCPTool_Edit.actionButton3",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton3",
                                                buttonId: "p.AgentCommons.SingleMCPTool_Edit.actionButton3",
                                                class: "mx-name-actionButton3 btn-without-border-red",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    ""
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$trash_can_red.svg" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$SingleMCPTool", "source": "object" } }, "config": { "operationId": "7ZdWmAvSvl2aSPXKla5uCw", "validate": "view", "confirmation": { "question": selectTranslation(["Are you sure?"]), "proceed": selectTranslation(["Proceed"]), "cancel": selectTranslation(["Cancel"]) }, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                    key: "p.AgentCommons.SingleMCPTool_Edit.container1",
                                    $widgetId: "p.AgentCommons.SingleMCPTool_Edit.container1",
                                    class: "mx-name-container1 row-right",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.SingleMCPTool_Edit.actionButton2",
                                          $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton2",
                                          buttonId: "p.AgentCommons.SingleMCPTool_Edit.actionButton2",
                                          class: "mx-name-actionButton2 spacing-outer-right-medium",
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "OcHwZ7JOFlafmY64Cmgc5g", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.AgentCommons.SingleMCPTool_Edit.actionButton1$visibility",
                                          $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton1$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.AgentCommons.SingleMCPTool_Edit.actionButton1",
                                                $widgetId: "p.AgentCommons.SingleMCPTool_Edit.actionButton1",
                                                buttonId: "p.AgentCommons.SingleMCPTool_Edit.actionButton1",
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
                                                  "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$SingleMCPTool", "source": "object" } }, "config": { "operationId": "yH+ZbH0WqlmmX9zdgAUCkw", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Edit tool"
]);
const classes = "";
const cancelChangesOperationId = "KpRRhzhVOFyZdLlfriGcEA";
const closeButton = "p.AgentCommons.SingleMCPTool_Edit.actionButton2";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
