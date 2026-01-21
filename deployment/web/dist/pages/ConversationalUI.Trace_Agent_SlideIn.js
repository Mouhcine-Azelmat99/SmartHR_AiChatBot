import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-C4WMXW3y.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-BoF30MPe.js';
import { ActionButton, ActionProperty } from '../ActionButton-B8GWmPwn.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-iFOPmzlY.js';
import '../AttributeProperty-DPm6A02S.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-DirRMZIL.js';
import { MicroflowObjectProperty } from '../MicroflowObjectProperty-D79UAin-.js';
import { TextProperty } from '../TextProperty-C-8HEWcn.js';
import { FormGroup, ValidationProperty } from '../FormGroup-bFu0BNb6.js';
import { WebIconProperty } from '../WebIconProperty-I8EGGvK6.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-B3bpPygB.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-BilSZaU4.js';
import { Container } from '../Container-PSi6m2QL.js';
import { DataView } from '../DataView-RrZIPNzV.js';
import '../Fragment-kXArd_1S.js';
import { ImageWidgetModule } from '../Image-Cid1Yr5n.js';
import { MarkdownWidgetModule } from '../Markdown-DpZwKJVP.js';
import { Text } from '../Text-Ct6rfb-k.js';
import { TooltipWidgetModule } from '../Tooltip-wE3mB9aV.js';
import { CopyToClipboard, ACT_Trace_CloseSlideIn, content as content$1 } from '../ConversationalUI.CopyToClipboard-DEoadDeP.js';
import { ACT_Trace_CopySystemPrompt } from '../ConversationalUI.ACT_Trace_CopySystemPrompt-D9-zzmnd.js';
import { require$$0 } from '../Wait-BQ43-mQF.js';
import { AttributeProperty } from '../CTQxk13g-CU8g3epp.js';
import '../CkBXggmw-D1iecObi.js';
import '../uEIG9e6s-VBk3qU43.js';
import '../CxoxYXlg-BJ3P5g_E.js';
import '../BMuJrVqQ-CWJgr9IB.js';
import '../bdxqAC6d-BooPaEdW.js';
import '../index-BP8nYpIk.js';
import '../InlineText-f914ePRH.js';
import '../index-AGJlsSto.js';
import '../JS_CopyToClipboard-BR0sEQff.js';

const ACT_Trace_CopyUserPrompt = {
  "name": "ConversationalUI.ACT_Trace_CopyUserPrompt",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "72432bfe-4204-4632-b783-903d10fdfe1a",
      "operationId": "3likZssz8leyObiYtjyD3Q",
      "parameters": [
        {
          "name": "SpanTreeView",
          "value": {
            "type": "variable",
            "variable": "SpanTreeView"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "nanoflowCall",
      "label": "602f4128-c136-45a5-8d9b-ea9e33946957",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "Trace",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "7ba55ddb-a180-431e-949f-a577e7149468",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "b7679a90-6637-4026-8d80-f49bc006df20",
      "action": () => require$$0.Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "1200"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "19b83566-809a-4818-9ab5-a9355d2c88e6",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "6d5ecab6-40a0-4cd7-b001-6b56d1acfff0",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_Trace_CopyAssistantResponse = {
  "name": "ConversationalUI.ACT_Trace_CopyAssistantResponse",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "2c9e1c94-14da-4e01-9c5c-65fba538ed5a",
      "operationId": "3likZssz8leyObiYtjyD3Q",
      "parameters": [
        {
          "name": "SpanTreeView",
          "value": {
            "type": "variable",
            "variable": "SpanTreeView"
          },
          "kind": "object"
        }
      ]
    },
    {
      "type": "nanoflowCall",
      "label": "67af2b7f-6b04-4ce1-a018-cc91815babe4",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "Trace",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "ba1571a9-ab31-4f3e-bb5e-e96bb7a3d7cd",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "818b7fb9-38d2-495a-a0ac-6ac7d27c5910",
      "action": () => require$$0.Wait,
      "parameters": [
        {
          "kind": "primitive",
          "value": {
            "type": "literalNumeric",
            "value": "1200"
          }
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "d63c11d6-db36-4963-bac6-b07165dc1b6c",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "457f2cf3-716d-46d2-b9af-a426c246ef10",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const React = { createElement: reactExports.createElement };
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Markdown = Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "Markdown")?.value || Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "default")?.value;
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;
const { $DataView, $Container, $Image, $Tooltip, $ConditionalVisibilityWrapper, $Text, $ActionButton, $Fragment, $FormGroup, $Markdown } = asPluginWidgets({ DataView, Container, Image, Tooltip, ConditionalVisibilityWrapper, Text, ActionButton, Fragment, FormGroup, Markdown });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.ConversationalUI.Trace_Agent_SlideIn.dataView3",
      $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.dataView3",
      class: "mx-name-dataView3 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.12",
        "scope": "$SpanTreeView",
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
            key: "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
            $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
            class: "mx-name-dataView1 form-horizontal",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p.15",
              "scope": "$Trace",
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
                  key: "p.ConversationalUI.Trace_Agent_SlideIn.container7",
                  $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container7",
                  class: "mx-name-container7 slidein-header",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Trace_Agent_SlideIn.container73",
                        $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container73",
                        class: "mx-name-container73 pageheader-flex-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container17",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container17",
                              class: "mx-name-container17 pageheader-flex-items",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.container23",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container23",
                                    class: "mx-name-container23 row-left-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.container22",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container22",
                                          class: "mx-name-container22 spacing-outer-right-smaller",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.image24",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.image24",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$robot.svg" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: void 0,
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 24,
                                                heightUnit: "auto",
                                                height: 100,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image24",
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
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.container24",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container24",
                                          class: "mx-name-container24",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.tooltip3",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $DataView,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Agent_SlideIn.dataView4",
                                                      $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.dataView4",
                                                      class: "mx-name-dataView4 form-horizontal",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      object: MicroflowObjectProperty({
                                                        "dataSourceId": "p.34",
                                                        "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                        "editable": true,
                                                        "operationId": "1Dw9JXI0ZlGXW8EMspHTvg",
                                                        "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
                                                      }),
                                                      emptyMessage: TextProperty({
                                                        "value": selectTranslation([
                                                          ""
                                                        ])
                                                      }),
                                                      body: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Agent_SlideIn.text8$visibility",
                                                            $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text8$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Trace", "path": "_AgentVersionId" }] }, { "type": "literal", "value": "" }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Agent_SlideIn.text8",
                                                                  $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text8",
                                                                  class: "mx-name-text8 font-weight-semibold font-size-larger text-clamp--1-lines",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Version_Agent/AgentCommons.Agent/Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView4", "source": "object" } } }
                                                                    })
                                                                  ]),
                                                                  renderMode: "span"
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        )
                                                      ],
                                                      hideFooter: false,
                                                      footer: void 0
                                                    }
                                                  )
                                                ],
                                                renderMethod: "custom",
                                                htmlMessage: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $DataView,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Agent_SlideIn.dataView5",
                                                      $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.dataView5",
                                                      class: "mx-name-dataView5 form-horizontal",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      object: MicroflowObjectProperty({
                                                        "dataSourceId": "p.40",
                                                        "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                        "editable": true,
                                                        "operationId": "RHOjkqgOB16KdibIcFhlqA",
                                                        "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
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
                                                            key: "p.ConversationalUI.Trace_Agent_SlideIn.container25",
                                                            $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container25",
                                                            class: "mx-name-container25 tooltip-container",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Trace_Agent_SlideIn.text10$visibility",
                                                                  $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text10$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "Trace", "path": "_AgentVersionId" }] }, { "type": "literal", "value": "" }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Trace_Agent_SlideIn.text10",
                                                                        $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text10",
                                                                        class: "mx-name-text10",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Version_Agent/AgentCommons.Agent/Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView5", "source": "object" } } }
                                                                          })
                                                                        ]),
                                                                        renderMode: "span"
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
                                                      hideFooter: false,
                                                      footer: void 0
                                                    }
                                                  )
                                                ],
                                                textMessage: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltipPosition: "bottom",
                                                arrowPosition: "end",
                                                openOn: "hover",
                                                class: "mx-name-tooltip3 convui-tooltip",
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
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.container26",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container26",
                                    class: "mx-name-container26 row-right-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton6$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton6$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton6",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton6",
                                                buttonId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton6",
                                                class: "mx-name-actionButton6 btn-text-default btn-small",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Close"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$sidebar_open.svg" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callNanoflow", "argMap": { "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" }, "TraceView": { "widget": "$TraceView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CloseSlideIn, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Trace_Agent_SlideIn.container88",
                        $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container88",
                        class: "mx-name-container88 plan-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container89",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container89",
                              class: "mx-name-container89",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.text37",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text37",
                                    class: "mx-name-text37 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall1",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall1",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceStartTime.container1",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.container1",
                                          class: "mx-name-container1 row-text-img",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceStartTime.image10",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.image10",
                                                datasource: "icon",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image10 unset-img-width",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceStartTime.text1",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceStartTime.text1",
                                                class: "mx-name-text1",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "span"
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container91",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container91",
                              class: "mx-name-container91",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.text38",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text38",
                                    class: "mx-name-text38 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "End time" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall2",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall2",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceEndTime.container1",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceEndTime.container1",
                                          class: "mx-name-container1 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceEndTime.image10",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceEndTime.image10",
                                                datasource: "icon",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image10 unset-img-width",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceEndTime.text1",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceEndTime.text1",
                                                class: "mx-name-text1",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "span"
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container93",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container93",
                              class: "mx-name-container93",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.text39",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text39",
                                    class: "mx-name-text39 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall3",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall3",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceDuration.container1",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceDuration.container1",
                                          class: "mx-name-container1 row-text-img",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceDuration.image1",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceDuration.image1",
                                                datasource: "icon",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$clock.svg" }
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
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image1 unset-img-width",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceDuration.text1",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceDuration.text1",
                                                class: "mx-name-text1",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "span"
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container95",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container95",
                              class: "mx-name-container95",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.text40",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text40",
                                    class: "mx-name-text40 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Tokens" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall4",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall4",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_TraceTokens.container30",
                                          $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container30",
                                          class: "mx-name-container30 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceTokens.image11",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image11",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
                                                }),
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: void 0,
                                                isBackgroundImage: false,
                                                children: void 0,
                                                onClickType: "action",
                                                onClick: void 0,
                                                alternativeText: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                widthUnit: "pixels",
                                                width: 16,
                                                heightUnit: "auto",
                                                height: 100,
                                                iconSize: 14,
                                                displayAs: "fullImage",
                                                responsive: true,
                                                class: "mx-name-image11 unset-img-width",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceTokens.text3",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text3",
                                                class: "mx-name-text3",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, { "type": "literal", "value": " (" }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": ")" }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                  })
                                                ]),
                                                renderMode: "span"
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceTokens.tooltip5",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceTokens.tooltip5",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceTokens.actionButton25$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceTokens.actionButton25$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.actionButton25",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.actionButton25",
                                                            buttonId: "p.ConversationalUI.Snippet_TraceTokens.actionButton25",
                                                            class: "mx-name-actionButton25 tooltip-info-icon btn-sm spacing-outer-bottom-none",
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
                                                      key: "p.ConversationalUI.Snippet_TraceTokens.container33",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container33",
                                                      class: "mx-name-container33 tooltip-container-token",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.container31",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container31",
                                                            class: "mx-name-container31 tooltip-row-text-icon",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.image5",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image5",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
                                                                  }),
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: void 0,
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
                                                                  iconSize: 14,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image5 img--14-20",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.text12",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text12",
                                                                  class: "mx-name-text12 font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Total tokens" }, "args": {} }
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
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.container32",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container32",
                                                            class: "mx-name-container32 tooltip-col",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.text4",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text4",
                                                                  class: "mx-name-text4",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
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
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceTokens.container34",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container34",
                                                      class: "mx-name-container34 divider spacing-inner-none spacing-outer-left spacing-outer-right",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: void 0,
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceTokens.container36",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container36",
                                                      class: "mx-name-container36 tooltip-container-token",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.container38",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container38",
                                                            class: "mx-name-container38 tooltip-row-text-icon",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.image9",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image9",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$token_input.svg" }
                                                                  }),
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: void 0,
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
                                                                  iconSize: 14,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image9 img--14-20",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.text8",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text8",
                                                                  class: "mx-name-text8 font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Input tokens" }, "args": {} }
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
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.container39",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container39",
                                                            class: "mx-name-container39 tooltip-col",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.text5",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text5",
                                                                  class: "mx-name-text5",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
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
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceTokens.container40",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container40",
                                                      class: "mx-name-container40 divider spacing-inner-none spacing-outer-left spacing-outer-right",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: void 0,
                                                      ariaHidden: false
                                                    }
                                                  ),
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_TraceTokens.container42",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container42",
                                                      class: "mx-name-container42 tooltip-container-token",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.container44",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container44",
                                                            class: "mx-name-container44 tooltip-row-text-icon",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.image13",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.image13",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$token_output.svg" }
                                                                  }),
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: void 0,
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
                                                                  iconSize: 14,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image13 img--14-20",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.text10",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text10",
                                                                  class: "mx-name-text10 font-weight-semibold",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "Output tokens" }, "args": {} }
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
                                                            key: "p.ConversationalUI.Snippet_TraceTokens.container45",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceTokens.container45",
                                                            class: "mx-name-container45 tooltip-col",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Text,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceTokens.text7",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceTokens.text7",
                                                                  class: "mx-name-text7",
                                                                  style: void 0,
                                                                  caption: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
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
                                                arrowPosition: "end",
                                                openOn: "hover",
                                                class: "mx-name-tooltip5 convui-tooltip",
                                                style: void 0,
                                                tabIndex: void 0
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
                        ],
                        ariaHidden: false
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Trace_Agent_SlideIn.container1",
                        $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container1",
                        class: "mx-name-container1 divider spacing-outer-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: void 0,
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
                  key: "p.ConversationalUI.Trace_Agent_SlideIn.container5",
                  $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container5",
                  class: "mx-name-container5 slidein-body",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Trace_Agent_SlideIn.container14",
                        $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container14",
                        class: "mx-name-container14 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.text3",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text3",
                              class: "mx-name-text3 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "System prompt" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container6$visibility",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container6$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SystemPrompt" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.container6",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container6",
                                    class: "mx-name-container6 text-container-empty",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: void 0,
                                    ariaHidden: false
                                  }
                                )
                              ]
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $ConditionalVisibilityWrapper,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container10$visibility",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container10$visibility",
                              visible: ExpressionProperty({
                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SystemPrompt" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1", "source": "object" } } }
                              }),
                              contents: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.container10",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container10",
                                    class: "mx-name-container10 text-container-clickable",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3$formGroup",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3$formGroup",
                                          class: "mx-name-markdownViewer3 text-break-word",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Markdown,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3",
                                                stringAttribute: AttributeProperty({
                                                  "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                  "path": "",
                                                  "entity": "GenAICommons.Trace",
                                                  "attribute": "SystemPrompt",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                  "isList": false
                                                }),
                                                tabIndex: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                          }),
                                          width: 3,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.container21",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container21",
                                          class: "mx-name-container21 btn-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton13$visibility",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton13$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView3", "path": "IsCopiedFirstAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton13",
                                                      $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton13",
                                                      buttonId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton13",
                                                      class: "mx-name-actionButton13 btn-hover flex-right",
                                                      style: void 0,
                                                      tabIndex: void 0,
                                                      renderType: "button",
                                                      role: void 0,
                                                      buttonClass: "btn-default",
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                        })
                                                      ]),
                                                      tooltip: TextProperty({
                                                        "value": selectTranslation([
                                                          "Copy to clipboard"
                                                        ])
                                                      }),
                                                      icon: WebIconProperty({
                                                        "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$copy_duplicate.svg" }
                                                      }),
                                                      action: ActionProperty({
                                                        "action": { "type": "callNanoflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CopySystemPrompt, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.container8$visibility",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container8$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "variable", "variable": "dataView3", "path": "IsCopiedFirstAttribute" }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Agent_SlideIn.container8",
                                                      $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container8",
                                                      class: "mx-name-container8 copied-img-container",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall5",
                                                            $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall5",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_Copied.image1",
                                                                  $widgetId: "p.ConversationalUI.Snippet_Copied.image1",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$checkmark.svg" }
                                                                  }),
                                                                  defaultImageDynamic: void 0,
                                                                  imageUrl: selectTranslation([
                                                                    ExpressionProperty({
                                                                      "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                  ]),
                                                                  imageIcon: void 0,
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
                                                                  iconSize: 14,
                                                                  displayAs: "fullImage",
                                                                  responsive: true,
                                                                  class: "mx-name-image1 img--14-14",
                                                                  style: void 0,
                                                                  tabIndex: void 0
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
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Trace_Agent_SlideIn.container15",
                        $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container15",
                        class: "mx-name-container15 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.text11",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text11",
                              class: "mx-name-text11 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "User prompt" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container16",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container16",
                              class: "mx-name-container16 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2$formGroup",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2$formGroup",
                                    class: "mx-name-markdownViewer2",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.Trace",
                                            "attribute": "Input",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.container20",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container20",
                                    class: "mx-name-container20 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton10$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton10$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView3", "path": "IsCopiedSecondAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton10",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton10",
                                                buttonId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton10",
                                                class: "mx-name-actionButton10 btn-hover flex-right",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Copy to clipboard"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$copy_duplicate.svg" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callNanoflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CopyUserPrompt, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.container9$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container9$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView3", "path": "IsCopiedSecondAttribute" }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.container9",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container9",
                                                class: "mx-name-container9 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall6",
                                                      $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall6",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Image,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_Copied.image1.186",
                                                            $widgetId: "p.ConversationalUI.Snippet_Copied.image1.186",
                                                            datasource: "image",
                                                            imageObject: WebStaticImageProperty({
                                                              "image": { "uri": "img/ConversationalUI$Image_Traces$checkmark.svg" }
                                                            }),
                                                            defaultImageDynamic: void 0,
                                                            imageUrl: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            imageIcon: void 0,
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
                                                            iconSize: 14,
                                                            displayAs: "fullImage",
                                                            responsive: true,
                                                            class: "mx-name-image1 img--14-14",
                                                            style: void 0,
                                                            tabIndex: void 0
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
                        key: "p.ConversationalUI.Trace_Agent_SlideIn.container12",
                        $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container12",
                        class: "mx-name-container12 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.text6",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.text6",
                              class: "mx-name-text6 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Assistant response" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Trace_Agent_SlideIn.container13",
                              $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container13",
                              class: "mx-name-container13 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1$formGroup",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1$formGroup",
                                    class: "mx-name-markdownViewer1 text-break-word",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.Trace",
                                            "attribute": "Output",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Trace_Agent_SlideIn.container18",
                                    $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container18",
                                    class: "mx-name-container18 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton9$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton9$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView3", "path": "IsCopiedThirdAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton9",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton9",
                                                buttonId: "p.ConversationalUI.Trace_Agent_SlideIn.actionButton9",
                                                class: "mx-name-actionButton9 btn-hover flex-right",
                                                style: void 0,
                                                tabIndex: void 0,
                                                renderType: "button",
                                                role: void 0,
                                                buttonClass: "btn-default",
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                tooltip: TextProperty({
                                                  "value": selectTranslation([
                                                    "Copy to clipboard"
                                                  ])
                                                }),
                                                icon: WebIconProperty({
                                                  "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$copy_duplicate.svg" }
                                                }),
                                                action: ActionProperty({
                                                  "action": { "type": "callNanoflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CopyAssistantResponse, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Trace_Agent_SlideIn.container11$visibility",
                                          $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container11$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView3", "path": "IsCopiedThirdAttribute" }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Trace_Agent_SlideIn.container11",
                                                $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.container11",
                                                class: "mx-name-container11 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall7",
                                                      $widgetId: "p.ConversationalUI.Trace_Agent_SlideIn.snippetCall7",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Image,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_Copied.image1.204",
                                                            $widgetId: "p.ConversationalUI.Snippet_Copied.image1.204",
                                                            datasource: "image",
                                                            imageObject: WebStaticImageProperty({
                                                              "image": { "uri": "img/ConversationalUI$Image_Traces$checkmark.svg" }
                                                            }),
                                                            defaultImageDynamic: void 0,
                                                            imageUrl: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                              })
                                                            ]),
                                                            imageIcon: void 0,
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
                                                            iconSize: 14,
                                                            displayAs: "fullImage",
                                                            responsive: true,
                                                            class: "mx-name-image1 img--14-14",
                                                            style: void 0,
                                                            tabIndex: void 0
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
            ],
            hideFooter: true,
            footer: void 0
          }
        )
      ],
      hideFooter: false,
      footer: void 0
    }
  )
]);
const title = selectTranslation([
  "Slide in agent"
]);
const classes = "layout-slidein mx-window-view";
const cancelChangesOperationId = "LGk9wJGg31CaM2l37FqGlg";
const closeButton = "p.ConversationalUI.Trace_Agent_SlideIn.actionButton6";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_SlideIn.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
