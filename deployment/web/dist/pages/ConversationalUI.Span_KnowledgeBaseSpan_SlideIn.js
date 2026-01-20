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

const ACT_KnowledgeBaseSpan_CopyInput = {
  "name": "ConversationalUI.ACT_KnowledgeBaseSpan_CopyInput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "14185180-94cf-46bc-8304-d33c4d10ee75",
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
      "label": "3b71083b-497a-44f6-a4db-a0320e473cbd",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "KnowledgeBaseSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "3dd2b35d-020e-406b-b781-3293c8a33c2f",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "36aac776-22f7-4c68-acfe-51bcec5a002d",
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
      "label": "7ecf358e-5242-4790-8542-deae6c9d5af2",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "23edc188-e959-47b1-aec9-50a549e7c241",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_KnowledgeBaseSpan_CopyOutput = {
  "name": "ConversationalUI.ACT_KnowledgeBaseSpan_CopyOutput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "5676b913-858c-4ae5-a351-f1cabd1fa00d",
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
      "label": "7283cc96-1528-45ca-bef7-9c8e9ab12037",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "KnowledgeBaseSpan",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "06b1148b-66e6-469c-abaa-55ec89f763ac",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "3dec5322-6f51-4536-a516-fdf06742c3e3",
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
      "label": "e664235b-8e21-4438-a0dc-70fcc4d05639",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "bb68ab34-dce4-4b1b-9922-5eb26002633b",
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
      key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2",
      $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2",
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
            key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1",
            $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1",
            class: "mx-name-dataView1 form-horizontal",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p.11",
              "scope": "$KnowledgeBaseSpan",
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
                  key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container5",
                  $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container5",
                  class: "mx-name-container5 slidein-header",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container73",
                        $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container73",
                        class: "mx-name-container73 pageheader-flex-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container14",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container14",
                              class: "mx-name-container14 pageheader-flex-items",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container23",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container23",
                                    class: "mx-name-container23 row-left-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container22",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container22",
                                          class: "mx-name-container22 spacing-outer-right-smaller",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image23",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image23",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                class: "mx-name-image23",
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
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container24",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container24",
                                          class: "mx-name-container24",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.tooltip3",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text22",
                                                      $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text22",
                                                      class: "mx-name-text22 font-weight-semibold font-size-larger text-clamp--1-lines",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                                                      key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container25",
                                                      $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container25",
                                                      class: "mx-name-container25 tooltip-container",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text21",
                                                            $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text21",
                                                            class: "mx-name-text21",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container26",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container26",
                                    class: "mx-name-container26 row-right-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4",
                                                buttonId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4",
                                                class: "mx-name-actionButton4 btn-text-default btn-small",
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
                        key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container88",
                        $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container88",
                        class: "mx-name-container88 plan-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container89",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container89",
                              class: "mx-name-container89",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text37",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text37",
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
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall1",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall1",
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
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$KnowledgeBaseSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container91",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container91",
                              class: "mx-name-container91",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text38",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text38",
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
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall2",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall2",
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
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$KnowledgeBaseSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container93",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container93",
                              class: "mx-name-container93",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text39",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text39",
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
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall3",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall3",
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
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "Span": { "widget": "$KnowledgeBaseSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container100",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container100",
                              class: "mx-name-container100",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text54",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text54",
                                    class: "mx-name-text54 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Knowledge base display name" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container27",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container27",
                                    class: "mx-name-container27 row-text-img",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text55",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text55",
                                          class: "mx-name-text55",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "KBDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container95",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container95",
                              class: "mx-name-container95",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text42",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text42",
                                    class: "mx-name-text42 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Knowledge base toolcall ID" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container8",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container8",
                                    class: "mx-name-container8 row-text-img",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Image,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image11",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image11",
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
                                          class: "mx-name-image11 unset-img-width",
                                          style: void 0,
                                          tabIndex: void 0
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text43",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text43",
                                          class: "mx-name-text43",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_ToolCallId" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container97",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container97",
                              class: "mx-name-container97",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text46",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text46",
                                    class: "mx-name-text46 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Max. results" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container10",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container10",
                                    class: "mx-name-container10 row-text-img",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Image,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image15",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image15",
                                          datasource: "icon",
                                          imageObject: void 0,
                                          defaultImageDynamic: void 0,
                                          imageUrl: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          imageIcon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-light-bulb-shine" }
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
                                          class: "mx-name-image15 unset-img-width",
                                          style: void 0,
                                          tabIndex: void 0
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MaxNumberOfResults" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47",
                                                class: "mx-name-text47",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MaxNumberOfResults" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MaxNumberOfResults" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52",
                                                class: "mx-name-text52",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
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
                              ariaHidden: false
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container96",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container96",
                              class: "mx-name-container96",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text44",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text44",
                                    class: "mx-name-text44 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Min. similarity" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container9",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container9",
                                    class: "mx-name-container9 row-text-img",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Image,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image12",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image12",
                                          datasource: "icon",
                                          imageObject: void 0,
                                          defaultImageDynamic: void 0,
                                          imageUrl: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                            })
                                          ]),
                                          imageIcon: WebIconProperty({
                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-duplicate" }
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
                                          class: "mx-name-image12 unset-img-width",
                                          style: void 0,
                                          tabIndex: void 0
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MinimumSimilarity" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45",
                                                class: "mx-name-text45",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MinimumSimilarity" }, { "type": "literal", "value": "{}" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "MinimumSimilarity" }, { "type": "literal", "value": null }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Text,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53",
                                                class: "mx-name-text53",
                                                style: void 0,
                                                caption: selectTranslation([
                                                  ExpressionProperty({
                                                    "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
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
                        key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container1",
                        $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container1",
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
                  key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container12",
                  $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container12",
                  class: "mx-name-container12 slidein-body",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container98",
                        $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container98",
                        class: "mx-name-container98 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text48",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text48",
                              class: "mx-name-text48 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Knowledge base tool name" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container11",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container11",
                              class: "mx-name-container11",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text49",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text49",
                                    class: "mx-name-text49",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                        key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container99",
                        $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container99",
                        class: "mx-name-container99 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text50",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text50",
                              class: "mx-name-text50 font-weight-semibold",
                              style: void 0,
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Knowledge base tool description" }, "args": {} }
                                })
                              ]),
                              renderMode: "span"
                            }
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container15",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container15",
                              class: "mx-name-container15",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text51",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text51",
                                    class: "mx-name-text51",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolDescription" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
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
                        key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container16",
                        $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container16",
                        class: "mx-name-container16 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text6",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text6",
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
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container17",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container17",
                              class: "mx-name-container17 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2$formGroup",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2$formGroup",
                                    class: "mx-name-markdownViewer2 text-break-word",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.KnowledgeBaseSpan",
                                            "attribute": "Input",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container18",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container18",
                                    class: "mx-name-container18 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9",
                                                buttonId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9",
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
                                                  "action": { "type": "callNanoflow", "argMap": { "KnowledgeBaseSpan": { "widget": "$KnowledgeBaseSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_KnowledgeBaseSpan_CopyInput, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7",
                                                class: "mx-name-container7 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall4",
                                                      $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall4",
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
                        key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container20",
                        $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container20",
                        class: "mx-name-container20 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text7",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text7",
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
                              key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container21",
                              $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container21",
                              class: "mx-name-container21 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1$formGroup",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1$formGroup",
                                    class: "mx-name-markdownViewer1 text-break-word",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.KnowledgeBaseSpan",
                                            "attribute": "Output",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container19",
                                    $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container19",
                                    class: "mx-name-container19 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10",
                                                buttonId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10",
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
                                                  "action": { "type": "callNanoflow", "argMap": { "KnowledgeBaseSpan": { "widget": "$KnowledgeBaseSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_KnowledgeBaseSpan_CopyOutput, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13$visibility",
                                          $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13",
                                                $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13",
                                                class: "mx-name-container13 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall5",
                                                      $widgetId: "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall5",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Image,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_Copied.image1.177",
                                                            $widgetId: "p.ConversationalUI.Snippet_Copied.image1.177",
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
      hideFooter: true,
      footer: void 0
    }
  )
]);
const title = selectTranslation([
  "Slide in knowledge base"
]);
const classes = "layout-slidein mx-window-view";
const cancelChangesOperationId = "dsB4GgglmFSfiu+BcKnyvw";
const closeButton = "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_SlideIn.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
