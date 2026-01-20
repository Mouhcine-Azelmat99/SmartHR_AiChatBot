import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-D6HpETLo.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import '../Fragment-C3M8OT7J.js';
import { ImageWidgetModule } from '../Image-CwuIpbpH.js';
import { MarkdownWidgetModule } from '../Markdown-C0rfO2h-.js';
import { Text } from '../Text-5NmEA291.js';
import { TooltipWidgetModule } from '../Tooltip-BBhx9N9q.js';
import { CopyToClipboard, ACT_Trace_CloseSlideIn, content as content$1 } from '../ConversationalUI.CopyToClipboard-B1O0rboe.js';
import { require$$0 } from '../Wait-B4JnrbPE.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../index-CgEeXS6W.js';
import '../InlineText-CcVi-f0x.js';
import '../index-DpgUatDd.js';
import '../JS_CopyToClipboard-B7E1Uot7.js';

const ACT_MCPSpan_CopyInput = {
  "name": "ConversationalUI.ACT_MCPSpan_CopyInput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "a498e496-c6a9-4fd1-81b2-cbd56868b210",
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
      "label": "465002a1-54fd-4631-b13d-4495aab213ab",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "MCPSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "e197b09c-6bb0-4637-91f4-4af6b24bc329",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "b4d53c4f-1d72-4f63-9374-5456c18d5994",
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
      "label": "2eba1791-4051-46e9-a544-04b3c2fff06e",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "22f64e04-e2b7-4001-b826-bd183be40e3b",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_MCPSpan_CopyOutput = {
  "name": "ConversationalUI.ACT_MCPSpan_CopyOutput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "c1667ea9-a5fd-4af4-844b-3036aa85f7b7",
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
      "label": "80eb5a51-39a0-4384-a339-ee32f622114d",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "MCPSpan",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "0c3b0828-c96c-4859-91e3-b973bb02d7e3",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "81ab24e5-0fe1-4fce-a0b3-58ce9884dbd4",
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
      "label": "70781741-22f7-4e92-8512-cc3cf1f9c1bb",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "e560549f-bd7d-4989-8c57-e56095ab5ccb",
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
const { $DataView, $Container, $Image, $Tooltip, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Fragment, $FormGroup, $Markdown } = asPluginWidgets({ DataView, Container, Image, Tooltip, Text, ConditionalVisibilityWrapper, ActionButton, Fragment, FormGroup, Markdown });
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $DataView,
    {
      key: "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView2",
      $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView2",
      class: "mx-name-dataView2 form-horizontal",
      style: void 0,
      tabIndex: void 0,
      object: AssociationObjectProperty({
        "dataSourceId": "p.8",
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
            key: "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1",
            $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1",
            class: "mx-name-dataView1 overflow-hidden form-horizontal",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p.11",
              "scope": "$MCPSpan",
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
                  key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container5",
                  $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container5",
                  class: "mx-name-container5 slidein-header",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container73",
                        $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container73",
                        class: "mx-name-container73 pageheader-flex-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container17",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container17",
                              class: "mx-name-container17 pageheader-flex-items",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container23",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container23",
                                    class: "mx-name-container23 row-left-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container22",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container22",
                                          class: "mx-name-container22 spacing-outer-right-smaller",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Span_MCPSpan_SlideIn.image24",
                                                $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.image24",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$MCP.svg" }
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
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container24",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container24",
                                          class: "mx-name-container24",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.ConversationalUI.Span_MCPSpan_SlideIn.tooltip3",
                                                $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text23",
                                                      $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text23",
                                                      class: "mx-name-text23 font-weight-semibold font-size-larger text-clamp--1-lines",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1", "source": "object" } } }
                                                        })
                                                      ]),
                                                      renderMode: "span"
                                                    }
                                                  )
                                                ],
                                                renderMethod: "custom",
                                                htmlMessage: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container25",
                                                      $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container25",
                                                      class: "mx-name-container25 tooltip-container",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text22",
                                                            $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text22",
                                                            class: "mx-name-text22",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1", "source": "object" } } }
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
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container26",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container26",
                                    class: "mx-name-container26 row-right-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton5$visibility",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton5$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton5",
                                                $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton5",
                                                buttonId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton5",
                                                class: "mx-name-actionButton5 btn-text-default btn-small",
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
                        key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container88",
                        $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container88",
                        class: "mx-name-container88 plan-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container89",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container89",
                              class: "mx-name-container89",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text37",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text37",
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
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall1",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall1",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_SpanStartTime.container1",
                                          $widgetId: "p.ConversationalUI.Snippet_SpanStartTime.container1",
                                          class: "mx-name-container1 row-text-img",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_SpanStartTime.image10",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanStartTime.image10",
                                                datasource: "icon",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: WebIconProperty({
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar-1" }
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
                                                key: "p.ConversationalUI.Snippet_SpanStartTime.text1",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanStartTime.text1",
                                                class: "mx-name-text1",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$MCPSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container91",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container91",
                              class: "mx-name-container91",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text38",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text38",
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
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall2",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall2",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_SpanEndTime.container1",
                                          $widgetId: "p.ConversationalUI.Snippet_SpanEndTime.container1",
                                          class: "mx-name-container1 row-left-aligned",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_SpanEndTime.image10",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanEndTime.image10",
                                                datasource: "icon",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: WebIconProperty({
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar-1" }
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
                                                key: "p.ConversationalUI.Snippet_SpanEndTime.text1",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanEndTime.text1",
                                                class: "mx-name-text1",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$MCPSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container93",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container93",
                              class: "mx-name-container93",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text39",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text39",
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
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall3",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall3",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_SpanDuration.container1",
                                          $widgetId: "p.ConversationalUI.Snippet_SpanDuration.container1",
                                          class: "mx-name-container1 row-text-img",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_SpanDuration.image1",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanDuration.image1",
                                                datasource: "icon",
                                                imageObject: void 0,
                                                defaultImageDynamic: void 0,
                                                imageUrl: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                  })
                                                ]),
                                                imageIcon: WebIconProperty({
                                                  "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                key: "p.ConversationalUI.Snippet_SpanDuration.text1",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanDuration.text1",
                                                class: "mx-name-text1",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "Span": { "widget": "$MCPSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container94",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container94",
                              class: "mx-name-container94",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text40",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text40",
                                    class: "mx-name-text40 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Toolcall ID" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container6",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container6",
                                    class: "mx-name-container6 row-text-img",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Image,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.image10",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.image10",
                                          datasource: "icon",
                                          imageObject: void 0,
                                          defaultImageDynamic: void 0,
                                          imageUrl: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          imageIcon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-tag" }
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
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text41",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text41",
                                          class: "mx-name-text41",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_ToolCallId" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1", "source": "object" } } }
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
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container1",
                        $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container1",
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
                  key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container9",
                  $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container9",
                  class: "mx-name-container9 slidein-body",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container98",
                        $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container98",
                        class: "mx-name-container98 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text48",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text48",
                              class: "mx-name-text48 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Tool name" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container11",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container11",
                              class: "mx-name-container11",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text49",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text49",
                                    class: "mx-name-text49 spacing-outer-right-small",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1", "source": "object" } } }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container121",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container121",
                                    class: "mx-name-container121 purple-badge spacing-outer-right",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text29",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text29",
                                          class: "mx-name-text29",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ServerName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1", "source": "object" } } }
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
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container99",
                        $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container99",
                        class: "mx-name-container99 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text50",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text50",
                              class: "mx-name-text50 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Tool description" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container15",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container15",
                              class: "mx-name-container15",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text51",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text51",
                                    class: "mx-name-text51",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolDescription" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1", "source": "object" } } }
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
                        key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container12",
                        $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container12",
                        class: "mx-name-container12 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text6",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text6",
                              class: "mx-name-text6 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Input" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container13",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container13",
                              class: "mx-name-container13 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer2$formGroup",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer2$formGroup",
                                    class: "mx-name-markdownViewer2 text-break-word",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer2",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer2",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.MCPSpan",
                                            "attribute": "Input",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer2"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container18",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container18",
                                    class: "mx-name-container18 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton9$visibility",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton9$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton9",
                                                $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton9",
                                                buttonId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton9",
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
                                                  "action": { "type": "callNanoflow", "argMap": { "MCPSpan": { "widget": "$MCPSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_MCPSpan_CopyInput, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container7$visibility",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container7$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container7",
                                                $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container7",
                                                class: "mx-name-container7 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall4",
                                                      $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall4",
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
                        ],
                        ariaHidden: false
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container14",
                        $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container14",
                        class: "mx-name-container14 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.text7",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.text7",
                              class: "mx-name-text7 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Output" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container16",
                              $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container16",
                              class: "mx-name-container16 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer1$formGroup",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer1$formGroup",
                                    class: "mx-name-markdownViewer1 text-break-word",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer1",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer1",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.MCPSpan",
                                            "attribute": "Output",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer1"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Span_MCPSpan_SlideIn.markdownViewer1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container19",
                                    $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container19",
                                    class: "mx-name-container19 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton10$visibility",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton10$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton10",
                                                $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton10",
                                                buttonId: "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton10",
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
                                                  "action": { "type": "callNanoflow", "argMap": { "MCPSpan": { "widget": "$MCPSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_MCPSpan_CopyOutput, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container8$visibility",
                                          $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container8$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_MCPSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Span_MCPSpan_SlideIn.container8",
                                                $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.container8",
                                                class: "mx-name-container8 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall5",
                                                      $widgetId: "p.ConversationalUI.Span_MCPSpan_SlideIn.snippetCall5",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Image,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_Copied.image1.145",
                                                            $widgetId: "p.ConversationalUI.Snippet_Copied.image1.145",
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
  "Slide in MCP"
]);
const classes = "layout-slidein mx-window-view";
const cancelChangesOperationId = "qeLHI5NEQFKFRj8NbIy3mQ";
const closeButton = "p.ConversationalUI.Span_MCPSpan_SlideIn.actionButton5";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_SlideIn.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
