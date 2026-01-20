import { reactExports, asPluginWidgets, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { Text } from '../Text-mON8QAZM.js';
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
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $TextBox } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, TextBox });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.AgentCommons.Version_ModelSettings.layoutGrid1",
      $widgetId: "p.AgentCommons.Version_ModelSettings.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.AgentCommons.Version_ModelSettings.layoutGrid1$row0",
            $widgetId: "p.AgentCommons.Version_ModelSettings.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.AgentCommons.Version_ModelSettings.layoutGrid1$row0$column0",
                  $widgetId: "p.AgentCommons.Version_ModelSettings.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.AgentCommons.Version_ModelSettings.dataView1",
                        $widgetId: "p.AgentCommons.Version_ModelSettings.dataView1",
                        class: "mx-name-dataView1 form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.18",
                          "scope": "$Version",
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
                              key: "p.AgentCommons.Version_ModelSettings.container51",
                              $widgetId: "p.AgentCommons.Version_ModelSettings.container51",
                              class: "mx-name-container51 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.text7",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.text7",
                                    class: "mx-name-text7 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Temperature" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.container52",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.container52",
                                    class: "mx-name-container52 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.Version_ModelSettings.tooltip8",
                                          $widgetId: "p.AgentCommons.Version_ModelSettings.tooltip8",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.Version_ModelSettings.actionButton27$visibility",
                                                $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton27$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.Version_ModelSettings.actionButton27",
                                                      $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton27",
                                                      buttonId: "p.AgentCommons.Version_ModelSettings.actionButton27",
                                                      class: "mx-name-actionButton27 spacing-outer-left spacing-outer-right",
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
                                                key: "p.AgentCommons.Version_ModelSettings.container108",
                                                $widgetId: "p.AgentCommons.Version_ModelSettings.container108",
                                                class: "mx-name-container108 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Version_ModelSettings.text49",
                                                      $widgetId: "p.AgentCommons.Version_ModelSettings.text49",
                                                      class: "mx-name-text49 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity. It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed temperature range." }, "args": {} }
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
                                          class: "mx-name-tooltip8 agent-tooltip",
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
                              key: "p.AgentCommons.Version_ModelSettings.textBox1$formGroup",
                              $widgetId: "p.AgentCommons.Version_ModelSettings.textBox1$formGroup",
                              class: "mx-name-textBox1 width-full mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.textBox1",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.textBox1",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.Version_ModelSettings.dataView1",
                                      "path": "",
                                      "entity": "AgentCommons.Version",
                                      "attribute": "Temperature",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } },
                                      "validation": null,
                                      "formatting": {
                                        "numberFormat": {
                                          "groupDigits": false,
                                          "decimalPrecision": 2
                                        }
                                      }
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: void 0,
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
                                      "widgetId": "p.AgentCommons.Version_ModelSettings.textBox1"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.Version_ModelSettings.textBox1"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.Version_ModelSettings.textBox1"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Version_ModelSettings.container53",
                              $widgetId: "p.AgentCommons.Version_ModelSettings.container53",
                              class: "mx-name-container53 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.text8",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.text8",
                                    class: "mx-name-text8 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Max tokens" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.container54",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.container54",
                                    class: "mx-name-container54 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.Version_ModelSettings.tooltip9",
                                          $widgetId: "p.AgentCommons.Version_ModelSettings.tooltip9",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.Version_ModelSettings.actionButton28$visibility",
                                                $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton28$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.Version_ModelSettings.actionButton28",
                                                      $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton28",
                                                      buttonId: "p.AgentCommons.Version_ModelSettings.actionButton28",
                                                      class: "mx-name-actionButton28 spacing-outer-left spacing-outer-right",
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
                                                key: "p.AgentCommons.Version_ModelSettings.container109",
                                                $widgetId: "p.AgentCommons.Version_ModelSettings.container109",
                                                class: "mx-name-container109 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Version_ModelSettings.text50",
                                                      $widgetId: "p.AgentCommons.Version_ModelSettings.text50",
                                                      class: "mx-name-text50 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "The maximum number of tokens per request." }, "args": {} }
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
                                          class: "mx-name-tooltip9 agent-tooltip",
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
                              key: "p.AgentCommons.Version_ModelSettings.textBox2$formGroup",
                              $widgetId: "p.AgentCommons.Version_ModelSettings.textBox2$formGroup",
                              class: "mx-name-textBox2 width-full mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.textBox2",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.textBox2",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.Version_ModelSettings.dataView1",
                                      "path": "",
                                      "entity": "AgentCommons.Version",
                                      "attribute": "MaxTokens",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } },
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
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: void 0,
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
                                      "widgetId": "p.AgentCommons.Version_ModelSettings.textBox2"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.Version_ModelSettings.textBox2"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.Version_ModelSettings.textBox2"
                              })
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Version_ModelSettings.container55",
                              $widgetId: "p.AgentCommons.Version_ModelSettings.container55",
                              class: "mx-name-container55 row-left",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.text9",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.text9",
                                    class: "mx-name-text9 custom-control-label",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Top P" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.container56",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.container56",
                                    class: "mx-name-container56 icon-info-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Tooltip,
                                        {
                                          key: "p.AgentCommons.Version_ModelSettings.tooltip10",
                                          $widgetId: "p.AgentCommons.Version_ModelSettings.tooltip10",
                                          trigger: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.AgentCommons.Version_ModelSettings.actionButton29$visibility",
                                                $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton29$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.AgentCommons.Version_ModelSettings.actionButton29",
                                                      $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton29",
                                                      buttonId: "p.AgentCommons.Version_ModelSettings.actionButton29",
                                                      class: "mx-name-actionButton29 spacing-outer-left spacing-outer-right",
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
                                                key: "p.AgentCommons.Version_ModelSettings.container110",
                                                $widgetId: "p.AgentCommons.Version_ModelSettings.container110",
                                                class: "mx-name-container110 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.AgentCommons.Version_ModelSettings.text51",
                                                      $widgetId: "p.AgentCommons.Version_ModelSettings.text51",
                                                      class: "mx-name-text51 text-normal text-break text-small",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Top P is an alternative to temperature for controlling the randomness of the model response. Top P defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response. It is recommended to steer either the temperature or Top P, but not both. Review the documentation of the model provider for more information about the allowed Top P range." }, "args": {} }
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
                                          class: "mx-name-tooltip10 agent-tooltip",
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
                              key: "p.AgentCommons.Version_ModelSettings.textBox3$formGroup",
                              $widgetId: "p.AgentCommons.Version_ModelSettings.textBox3$formGroup",
                              class: "mx-name-textBox3 width-full mx-textbox",
                              style: void 0,
                              control: [
                                /* @__PURE__ */ React.createElement(
                                  $TextBox,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.textBox3",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.textBox3",
                                    inputValue: AttributeProperty({
                                      "scope": "p.AgentCommons.Version_ModelSettings.dataView1",
                                      "path": "",
                                      "entity": "AgentCommons.Version",
                                      "attribute": "TopP",
                                      "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                      "isList": false,
                                      "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } },
                                      "validation": null,
                                      "formatting": {
                                        "numberFormat": {
                                          "groupDigits": false,
                                          "decimalPrecision": 2
                                        }
                                      }
                                    }),
                                    isPassword: false,
                                    placeholder: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                      })
                                    ]),
                                    mask: "",
                                    readOnlyStyle: "control",
                                    maxLength: void 0,
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
                                      "widgetId": "p.AgentCommons.Version_ModelSettings.textBox3"
                                    })
                                  }
                                )
                              ],
                              caption: void 0,
                              labelFor: DerivedUniqueIdProperty({
                                "widgetId": "p.AgentCommons.Version_ModelSettings.textBox3"
                              }),
                              width: void 0,
                              orientation: "vertical",
                              hasError: ValidationProperty({
                                "inputWidgetId": "p.AgentCommons.Version_ModelSettings.textBox3"
                              })
                            }
                          )
                        ],
                        hideFooter: false,
                        footer: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.AgentCommons.Version_ModelSettings.container1",
                              $widgetId: "p.AgentCommons.Version_ModelSettings.container1",
                              class: "mx-name-container1 row-right",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ActionButton,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.actionButton2",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton2",
                                    buttonId: "p.AgentCommons.Version_ModelSettings.actionButton2",
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
                                      "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "mLwEQ1dnN1mz/qHspR74og", "closePage": true }, "disabledDuringExecution": true },
                                      "abortOnServerValidation": true
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.AgentCommons.Version_ModelSettings.actionButton1$visibility",
                                    $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton1$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $ActionButton,
                                        {
                                          key: "p.AgentCommons.Version_ModelSettings.actionButton1",
                                          $widgetId: "p.AgentCommons.Version_ModelSettings.actionButton1",
                                          buttonId: "p.AgentCommons.Version_ModelSettings.actionButton1",
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
                                            "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "WQPP6WveQFKglv+71mNnYA", "validate": "view", "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
  "Model settings"
]);
const classes = "";
const cancelChangesOperationId = "R262ag/mxViVrBTNm5BaDw";
const style = {};
const content = {
  ...content$1,
  "Atlas_Core.PopupLayout.Main": region$Main
};

export { cancelChangesOperationId, classes, content, style, title };
