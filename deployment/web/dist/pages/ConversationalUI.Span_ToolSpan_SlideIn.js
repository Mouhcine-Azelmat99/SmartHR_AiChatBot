import { reactExports, asPluginWidgets, Fragment, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { WebStaticImageProperty } from '../WebStaticImageProperty-C3LJYoNm.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import '../Fragment-C-45CGtT.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { MarkdownWidgetModule } from '../Markdown-rCm_gmRs.js';
import { Text } from '../Text-mON8QAZM.js';
import { TooltipWidgetModule } from '../Tooltip-Ca2Kf3P2.js';
import { CopyToClipboard, ACT_Trace_CloseSlideIn, content as content$1 } from '../ConversationalUI.CopyToClipboard-BOyYWya5.js';
import { require$$0 } from '../Wait-DpHrtukH.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CxoxYXlg-DglkwELR.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../index-BuuMIVCm.js';
import '../InlineText-D4EmJMFt.js';
import '../index-DQ4aW2Di.js';
import '../JS_CopyToClipboard-BZg-2HWf.js';

const ACT_Toolspan_CopyInput = {
  "name": "ConversationalUI.ACT_Toolspan_CopyInput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "3a04b8f1-19f6-44bc-95c0-51eef972e64b",
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
      "label": "a650631b-48ed-4025-a792-5aeb96a79b58",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "ToolSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "14089165-26f1-42c4-874a-0fd4b82b7520",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "bebbe3fd-d1ae-4976-b675-4a9af56d162b",
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
      "label": "dac10d74-5590-412b-8c5b-3a1d33fb6244",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedFirstAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "5275dbd2-46ba-479d-8704-1106aea3b706",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_ToolSpan_CopyOutput = {
  "name": "ConversationalUI.ACT_ToolSpan_CopyOutput",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "fc396f07-a317-4630-ae13-6dea2785deb1",
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
      "label": "3057c18c-93c8-472f-9faa-a535eda135cb",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "ToolSpan",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "ebbb8f2a-1266-45c1-ae28-41faf07e8482",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "5354abd0-515b-4a81-8a47-5f8fbdb9ba54",
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
      "label": "6a5ffded-98d1-4c07-b169-41ab6e13ee38",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "a4073f0d-a943-4d2a-86a5-144eb1a7ef03",
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
      key: "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView2",
      $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView2",
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
            key: "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1",
            $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1",
            class: "mx-name-dataView1 form-horizontal",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p.11",
              "scope": "$ToolSpan",
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
                  key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container5",
                  $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container5",
                  class: "mx-name-container5 slidein-header",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container72",
                        $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container72",
                        class: "mx-name-container72 pageheader-flex-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container2",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container2",
                              class: "mx-name-container2 pageheader-flex-items",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container3",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container3",
                                    class: "mx-name-container3 row-left-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container20",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container20",
                                          class: "mx-name-container20 spacing-outer-right-smaller",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Span_ToolSpan_SlideIn.image22",
                                                $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.image22",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                class: "mx-name-image22",
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
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container17",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container17",
                                          class: "mx-name-container17",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.ConversationalUI.Span_ToolSpan_SlideIn.tooltip3",
                                                $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text20",
                                                      $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text20",
                                                      class: "mx-name-text20 font-weight-semibold font-size-larger text-clamp--1-lines",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1", "source": "object" } } }
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
                                                      key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container25",
                                                      $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container25",
                                                      class: "mx-name-container25 tooltip-container",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text21",
                                                            $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text21",
                                                            class: "mx-name-text21",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1", "source": "object" } } }
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
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container4",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container4",
                                    class: "mx-name-container4 row-right-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton4$visibility",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton4",
                                                $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton4",
                                                buttonId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton4",
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
                        key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container88",
                        $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container88",
                        class: "mx-name-container88 plan-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container89",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container89",
                              class: "mx-name-container89",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text37",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text37",
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
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall1",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall1",
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
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$ToolSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container91",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container91",
                              class: "mx-name-container91",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text38",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text38",
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
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall2",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall2",
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
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$ToolSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container93",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container93",
                              class: "mx-name-container93",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text39",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text39",
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
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall3",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall3",
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
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "Span": { "widget": "$ToolSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container94",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container94",
                              class: "mx-name-container94",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text40",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text40",
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
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container6",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container6",
                                    class: "mx-name-container6 row-text-img",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Image,
                                        {
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.image10",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.image10",
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
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text41",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text41",
                                          class: "mx-name-text41",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_ToolCallId" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1", "source": "object" } } }
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
                        key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container1",
                        $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container1",
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
                  key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container9",
                  $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container9",
                  class: "mx-name-container9 slidein-body",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container98",
                        $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container98",
                        class: "mx-name-container98 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text48",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text48",
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
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container11",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container11",
                              class: "mx-name-container11",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text49",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text49",
                                    class: "mx-name-text49",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1", "source": "object" } } }
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
                        key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container99",
                        $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container99",
                        class: "mx-name-container99 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text50",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text50",
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
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container15",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container15",
                              class: "mx-name-container15",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text51",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text51",
                                    class: "mx-name-text51",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolDescription" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1", "source": "object" } } }
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
                        key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container12",
                        $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container12",
                        class: "mx-name-container12 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text6",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text6",
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
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container13",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container13",
                              class: "mx-name-container13 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer2$formGroup",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer2$formGroup",
                                    class: "mx-name-markdownViewer2 text-break-word",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer2",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer2",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.ToolSpan",
                                            "attribute": "Input",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer2"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer2"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer2"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container18",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container18",
                                    class: "mx-name-container18 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton9$visibility",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton9$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton9",
                                                $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton9",
                                                buttonId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton9",
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
                                                  "action": { "type": "callNanoflow", "argMap": { "ToolSpan": { "widget": "$ToolSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Toolspan_CopyInput, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container7$visibility",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container7$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container7",
                                                $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container7",
                                                class: "mx-name-container7 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall4",
                                                      $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall4",
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
                        key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container14",
                        $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container14",
                        class: "mx-name-container14 spacing-inner-bottom-medium",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Text,
                            {
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.text7",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.text7",
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
                              key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container16",
                              $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container16",
                              class: "mx-name-container16 text-container-clickable",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $FormGroup,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer1$formGroup",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer1$formGroup",
                                    class: "mx-name-markdownViewer1 text-break-word",
                                    style: void 0,
                                    control: [
                                      /* @__PURE__ */ React.createElement(
                                        $Markdown,
                                        {
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer1",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer1",
                                          stringAttribute: AttributeProperty({
                                            "scope": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView1",
                                            "path": "",
                                            "entity": "GenAICommons.ToolSpan",
                                            "attribute": "Output",
                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                            "isList": false
                                          }),
                                          tabIndex: void 0,
                                          id: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer1"
                                          })
                                        }
                                      )
                                    ],
                                    caption: void 0,
                                    labelFor: DerivedUniqueIdProperty({
                                      "widgetId": "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer1"
                                    }),
                                    width: 3,
                                    orientation: "vertical",
                                    hasError: ValidationProperty({
                                      "inputWidgetId": "p.ConversationalUI.Span_ToolSpan_SlideIn.markdownViewer1"
                                    })
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container19",
                                    $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container19",
                                    class: "mx-name-container19 btn-wrapper",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton10$visibility",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton10$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton10",
                                                $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton10",
                                                buttonId: "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton10",
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
                                                  "action": { "type": "callNanoflow", "argMap": { "ToolSpan": { "widget": "$ToolSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_ToolSpan_CopyOutput, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                          key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container8$visibility",
                                          $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container8$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_ToolSpan_SlideIn.dataView2", "source": "object" } } }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Span_ToolSpan_SlideIn.container8",
                                                $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.container8",
                                                class: "mx-name-container8 copied-img-container",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Fragment,
                                                    {
                                                      key: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall5",
                                                      $widgetId: "p.ConversationalUI.Span_ToolSpan_SlideIn.snippetCall5",
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Image,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_Copied.image1.141",
                                                            $widgetId: "p.ConversationalUI.Snippet_Copied.image1.141",
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
  "Slide in tool"
]);
const classes = "layout-slidein mx-window-view";
const cancelChangesOperationId = "ZmZz+sRnn1SqKJ484DNo2g";
const closeButton = "p.ConversationalUI.Span_ToolSpan_SlideIn.actionButton4";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_SlideIn.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
