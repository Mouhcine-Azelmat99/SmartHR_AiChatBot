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
import { ACT_Trace_CopySystemPrompt } from '../ConversationalUI.ACT_Trace_CopySystemPrompt-D5zDWtE-.js';
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

const ACT_ModelSpan_CopyUserPrompt = {
  "name": "ConversationalUI.ACT_ModelSpan_CopyUserPrompt",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "f9c57793-08cb-4423-83bb-63e0f514a5b4",
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
      "label": "da27b698-2bef-4fdc-83dd-927a1a6283a4",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "ModelSpan",
            "path": "Input"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "b72955d9-f07e-43e8-8a94-7a56528afa1c",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "ac9be202-08e2-465b-a464-a6cb0b2293a2",
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
      "label": "90146ad5-4b62-4fe8-94fa-f7dfad225b2a",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedSecondAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "06f78748-399c-4d76-9357-da0eb323e4bd",
      "result": {
        "type": "literal",
        "value": null
      },
      "resultKind": "primitive"
    }
  ]
};

const ACT_ModelSpan_CopyAssistantResponse = {
  "name": "ConversationalUI.ACT_ModelSpan_CopyAssistantResponse",
  "instructions": [
    {
      "type": "microflowCall",
      "label": "51026507-755b-438d-9e83-37d1464b8cb4",
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
      "label": "9ea5cdb1-642c-4c8b-87d5-dacedd65dde8",
      "flow": () => CopyToClipboard,
      "parameters": [
        {
          "name": "CopiedString",
          "value": {
            "type": "variable",
            "variable": "ModelSpan",
            "path": "Output"
          },
          "kind": "primitive"
        }
      ]
    },
    {
      "type": "changeObject",
      "label": "39b1b918-578b-4eaa-ad86-ccd228c0866f",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": true
      }
    },
    {
      "type": "javaScriptActionCall",
      "label": "73f84b99-e1c7-4b45-8f10-86b33c933b32",
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
      "label": "8b3c3cb4-30ea-4f72-a7df-d485ad0d1f72",
      "inputVar": "SpanTreeView",
      "member": "IsCopiedThirdAttribute",
      "value": {
        "type": "literal",
        "value": false
      }
    },
    {
      "type": "return",
      "label": "589e8294-0fb8-487f-9e07-b3eba1d39448",
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
      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4",
      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4",
      class: "mx-name-dataView4 form-horizontal",
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
            key: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView1",
            $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView1",
            class: "mx-name-dataView1 form-horizontal",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p.15",
              "scope": "$ModelSpan",
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
                  key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container7",
                  $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container7",
                  class: "mx-name-container7 slidein-header",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $Container,
                      {
                        key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container72",
                        $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container72",
                        class: "mx-name-container72 pageheader-flex-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container2",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container2",
                              class: "mx-name-container2 pageheader-flex-items",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container21",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container21",
                                    class: "mx-name-container21 row-left-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container22",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container22",
                                          class: "mx-name-container22 spacing-outer-right-smaller",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.image24",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.image24",
                                                datasource: "image",
                                                imageObject: WebStaticImageProperty({
                                                  "image": { "uri": "img/ConversationalUI$Image_Traces$text_gen.svg" }
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
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container17",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container17",
                                          class: "mx-name-container17",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Tooltip,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.tooltip3",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.tooltip3",
                                                trigger: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text22",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text22",
                                                      class: "mx-name-text22 font-weight-semibold font-size-larger text-clamp--1-lines",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "literal", "value": "Text Generation" }, "args": {} }
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
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container25",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container25",
                                                      class: "mx-name-container25 tooltip-container",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text21",
                                                            $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text21",
                                                            class: "mx-name-text21",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Text Generation" }, "args": {} }
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container4",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container4",
                                    class: "mx-name-container4 row-right-aligned",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $ConditionalVisibilityWrapper,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton4$visibility",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton4$visibility",
                                          visible: ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                          }),
                                          contents: [
                                            /* @__PURE__ */ React.createElement(
                                              $ActionButton,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton4",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton4",
                                                buttonId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton4",
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
                        key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container88",
                        $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container88",
                        class: "mx-name-container88 plan-container",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container89",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container89",
                              class: "mx-name-container89",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text37",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text37",
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall1",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall1",
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
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "StartTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$ModelSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container91",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container91",
                              class: "mx-name-container91",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text38",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text38",
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall2",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall2",
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
                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Span", "path": "EndTime" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Span": { "widget": "$ModelSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container93",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container93",
                              class: "mx-name-container93",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text39",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text39",
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall3",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall3",
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
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null }] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }, { "type": "literalNumeric", "value": "0" }] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "formatDecimal", "parameters": [{ "type": "function", "name": "round", "parameters": [{ "type": "function", "name": ":", "parameters": [{ "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" }] }, { "type": "literalNumeric", "value": "1" }] }] }, { "type": "literal", "value": "s" }] } } }, "args": { "Span": { "widget": "$ModelSpan", "source": "object" } } }
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
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container95",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container95",
                              class: "mx-name-container95",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text40",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text40",
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall4",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall4",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_SpanTokens.container96",
                                          $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container96",
                                          class: "mx-name-container96 row-text-img",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Image,
                                              {
                                                key: "p.ConversationalUI.Snippet_SpanTokens.image30",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanTokens.image30",
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
                                                class: "mx-name-image30 unset-img-width spacing-inner-top-smallest",
                                                style: void 0,
                                                tabIndex: void 0
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Snippet_SpanTokens.text3$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text3$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "ModelSpan", "path": "InputTokens" }, { "type": "literal", "value": null }] }, "args": { "ModelSpan": { "widget": "$ModelSpan", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Text,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_SpanTokens.text3",
                                                      $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text3",
                                                      class: "mx-name-text3",
                                                      style: void 0,
                                                      caption: selectTranslation([
                                                        ExpressionProperty({
                                                          "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "+", "parameters": [{ "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "SpanTreeView", "path": "TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, { "type": "literal", "value": " (" }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "ModelSpan", "path": "InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": " / " }] }, { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "ModelSpan", "path": "OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }] }, { "type": "literal", "value": ")" }] }, "args": { "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" }, "ModelSpan": { "widget": "$ModelSpan", "source": "object" } } }
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
                                                key: "p.ConversationalUI.Snippet_SpanTokens.tooltip5$visibility",
                                                $widgetId: "p.ConversationalUI.Snippet_SpanTokens.tooltip5$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "variable", "variable": "ModelSpan", "path": "InputTokens" }, { "type": "literal", "value": null }] }, "args": { "ModelSpan": { "widget": "$ModelSpan", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Tooltip,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_SpanTokens.tooltip5",
                                                      $widgetId: "p.ConversationalUI.Snippet_SpanTokens.tooltip5",
                                                      trigger: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_SpanTokens.actionButton25$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_SpanTokens.actionButton25$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "args": {} }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $ActionButton,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_SpanTokens.actionButton25",
                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanTokens.actionButton25",
                                                                  buttonId: "p.ConversationalUI.Snippet_SpanTokens.actionButton25",
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
                                                            key: "p.ConversationalUI.Snippet_SpanTokens.container33",
                                                            $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container33",
                                                            class: "mx-name-container33 tooltip-container-token",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_SpanTokens.container31",
                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container31",
                                                                  class: "mx-name-container31 tooltip-row-text-icon",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Image,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.image5",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.image5",
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
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.text12",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text12",
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
                                                                  key: "p.ConversationalUI.Snippet_SpanTokens.container32",
                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container32",
                                                                  class: "mx-name-container32 tooltip-col",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.text4",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text4",
                                                                        class: "mx-name-text4",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "SpanTreeView", "path": "TotalTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } } }
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
                                                            key: "p.ConversationalUI.Snippet_SpanTokens.container34",
                                                            $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container34",
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
                                                            key: "p.ConversationalUI.Snippet_SpanTokens.container36",
                                                            $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container36",
                                                            class: "mx-name-container36 tooltip-container-token",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_SpanTokens.container38",
                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container38",
                                                                  class: "mx-name-container38 tooltip-row-text-icon",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Image,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.image9",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.image9",
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
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.text8",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text8",
                                                                        class: "mx-name-text8 font-weight-semibold",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Input token" }, "args": {} }
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
                                                                  key: "p.ConversationalUI.Snippet_SpanTokens.container39",
                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container39",
                                                                  class: "mx-name-container39 tooltip-col",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.text5",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text5",
                                                                        class: "mx-name-text5",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "ModelSpan", "path": "InputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "ModelSpan": { "widget": "$ModelSpan", "source": "object" } } }
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
                                                            key: "p.ConversationalUI.Snippet_SpanTokens.container40",
                                                            $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container40",
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
                                                            key: "p.ConversationalUI.Snippet_SpanTokens.container42",
                                                            $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container42",
                                                            class: "mx-name-container42 tooltip-container-token",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_SpanTokens.container44",
                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container44",
                                                                  class: "mx-name-container44 tooltip-row-text-icon",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Image,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.image13",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.image13",
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
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.text10",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text10",
                                                                        class: "mx-name-text10 font-weight-semibold",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "Output token" }, "args": {} }
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
                                                                  key: "p.ConversationalUI.Snippet_SpanTokens.container45",
                                                                  $widgetId: "p.ConversationalUI.Snippet_SpanTokens.container45",
                                                                  class: "mx-name-container45 tooltip-col",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_SpanTokens.text7",
                                                                        $widgetId: "p.ConversationalUI.Snippet_SpanTokens.text7",
                                                                        class: "mx-name-text7",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "ModelSpan", "path": "OutputTokens" }, { "type": "literal", "value": '{"groupDigits":true}' }] }, "args": { "ModelSpan": { "widget": "$ModelSpan", "source": "object" } } }
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
                          ),
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container102",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container102",
                              class: "mx-name-container102",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text41",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text41",
                                    class: "mx-name-text41 font-weight-semibold",
                                    style: void 0,
                                    caption: selectTranslation([
                                      ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
                                      })
                                    ]),
                                    renderMode: "span"
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $DataView,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView3",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView3",
                                    class: "mx-name-dataView3 form-horizontal",
                                    style: void 0,
                                    tabIndex: void 0,
                                    object: AssociationObjectProperty({
                                      "dataSourceId": "p.142",
                                      "scope": "$ModelSpan",
                                      "editable": true,
                                      "path": "GenAICommons.Span_Trace/GenAICommons.Trace",
                                      "operationId": "HF/vU8sb216pj7wkdgCytQ"
                                    }),
                                    emptyMessage: TextProperty({
                                      "value": selectTranslation([
                                        ""
                                      ])
                                    }),
                                    body: [
                                      /* @__PURE__ */ React.createElement(
                                        $Fragment,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall5",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall5",
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $DataView,
                                              {
                                                key: "p.ConversationalUI.Snippet_TraceModel.dataView2",
                                                $widgetId: "p.ConversationalUI.Snippet_TraceModel.dataView2",
                                                class: "mx-name-dataView2 form-horizontal",
                                                style: void 0,
                                                tabIndex: void 0,
                                                object: AssociationObjectProperty({
                                                  "dataSourceId": "p.147",
                                                  "scope": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView3",
                                                  "editable": true,
                                                  "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                  "operationId": "nhNPLr58F16gUzEFVVSHHg"
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
                                                      key: "p.ConversationalUI.Snippet_TraceModel.container30",
                                                      $widgetId: "p.ConversationalUI.Snippet_TraceModel.container30",
                                                      class: "mx-name-container30 row-text-img",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceModel.image6$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceModel.image6$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceModel.image6",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceModel.image6",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$openai.svg" }
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
                                                                  class: "mx-name-image6 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceModel.image7$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceModel.image7$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Bedrock" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceModel.image7",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceModel.image7",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$bedrock.svg" }
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
                                                                  class: "mx-name-image7 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceModel.image8$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceModel.image8$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Azure" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceModel.image8",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceModel.image8",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$Azure_outline.svg" }
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
                                                                  class: "mx-name-image8 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceModel.image9$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceModel.image9$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mendix" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceModel.image9",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceModel.image9",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$cloud_sparkle.svg" }
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
                                                                  class: "mx-name-image9 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $ConditionalVisibilityWrapper,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceModel.image10$visibility",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceModel.image10$visibility",
                                                            visible: ExpressionProperty({
                                                              "expression": { "expr": { "type": "function", "name": "contains", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                            }),
                                                            contents: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_TraceModel.image10",
                                                                  $widgetId: "p.ConversationalUI.Snippet_TraceModel.image10",
                                                                  datasource: "image",
                                                                  imageObject: WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$Mistral.svg" }
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
                                                                  class: "mx-name-image10 unset-img-width",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              )
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Text,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_TraceModel.text80",
                                                            $widgetId: "p.ConversationalUI.Snippet_TraceModel.text80",
                                                            class: "mx-name-text80",
                                                            style: void 0,
                                                            caption: selectTranslation([
                                                              ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeployedModelDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
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
                                                hideFooter: false,
                                                footer: void 0
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
                        key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container1",
                        $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container1",
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
                $DataView,
                {
                  key: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView2",
                  $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView2",
                  class: "mx-name-dataView2 form-horizontal",
                  style: void 0,
                  tabIndex: void 0,
                  object: AssociationObjectProperty({
                    "dataSourceId": "p.171",
                    "scope": "$ModelSpan",
                    "editable": true,
                    "path": "GenAICommons.Span_Trace/GenAICommons.Trace",
                    "operationId": "RZe1BirC31K3l5QafAA8yA"
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
                        key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container5",
                        $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container5",
                        class: "mx-name-container5 slidein-body",
                        style: void 0,
                        renderMode: "div",
                        onClick: void 0,
                        content: [
                          /* @__PURE__ */ React.createElement(
                            $Container,
                            {
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container11",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container11",
                              class: "mx-name-container11 spacing-inner-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text2",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text2",
                                    class: "mx-name-text2 font-weight-semibold",
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container6$visibility",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container6$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SystemPrompt" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView2", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container6",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container6",
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container9$visibility",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container9$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "SystemPrompt" }] }, { "type": "literal", "value": "" }] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView2", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container9",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container9",
                                          class: "mx-name-container9 text-container-clickable",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $FormGroup,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer3$formGroup",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer3$formGroup",
                                                class: "mx-name-markdownViewer3 text-break-word",
                                                style: void 0,
                                                control: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Markdown,
                                                    {
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer3",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer3",
                                                      stringAttribute: AttributeProperty({
                                                        "scope": "$ModelSpan",
                                                        "path": "GenAICommons.Span_Trace/GenAICommons.Trace",
                                                        "entity": "GenAICommons.Trace",
                                                        "attribute": "SystemPrompt",
                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                        "isList": false
                                                      }),
                                                      tabIndex: void 0,
                                                      id: DerivedUniqueIdProperty({
                                                        "widgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer3"
                                                      })
                                                    }
                                                  )
                                                ],
                                                caption: void 0,
                                                labelFor: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer3"
                                                }),
                                                width: 3,
                                                orientation: "vertical",
                                                hasError: ValidationProperty({
                                                  "inputWidgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer3"
                                                })
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container19",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container19",
                                                class: "mx-name-container19 btn-wrapper",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton12$visibility",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton12$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView4", "path": "IsCopiedFirstAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $ActionButton,
                                                          {
                                                            key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton12",
                                                            $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton12",
                                                            buttonId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton12",
                                                            class: "mx-name-actionButton12 btn-hover flex-right",
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
                                                              "action": { "type": "callNanoflow", "argMap": { "Trace": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView2", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CopySystemPrompt, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container8$visibility",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container8$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "dataView4", "path": "IsCopiedFirstAttribute" }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container8",
                                                            $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container8",
                                                            class: "mx-name-container8 copied-img-container",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Fragment,
                                                                {
                                                                  key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall6",
                                                                  $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall6",
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
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container15",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container15",
                              class: "mx-name-container15 spacing-inner-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text11$visibility",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text11$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView4", "path": "HasToolResultInput" }] }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text11",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text11",
                                          class: "mx-name-text11 font-weight-semibold",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "User prompt" }, "args": {} }
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text12$visibility",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text12$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "variable", "variable": "dataView4", "path": "HasToolResultInput" }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Text,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text12",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text12",
                                          class: "mx-name-text12 font-weight-semibold",
                                          style: void 0,
                                          caption: selectTranslation([
                                            ExpressionProperty({
                                              "expression": { "expr": { "type": "literal", "value": "Tool result" }, "args": {} }
                                            })
                                          ]),
                                          renderMode: "span"
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Container,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container16",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container16",
                                    class: "mx-name-container16 text-container-clickable",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer2$formGroup",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer2$formGroup",
                                          class: "mx-name-markdownViewer2 text-break-word",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Markdown,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer2",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer2",
                                                stringAttribute: AttributeProperty({
                                                  "scope": "$ModelSpan",
                                                  "path": "",
                                                  "entity": "GenAICommons.ModelSpan",
                                                  "attribute": "Input",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                  "isList": false
                                                }),
                                                tabIndex: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer2"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer2"
                                          }),
                                          width: 3,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer2"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container20",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container20",
                                          class: "mx-name-container20 btn-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton10$visibility",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton10$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView4", "path": "IsCopiedSecondAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton10",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton10",
                                                      buttonId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton10",
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
                                                        "action": { "type": "callNanoflow", "argMap": { "ModelSpan": { "widget": "$ModelSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_ModelSpan_CopyUserPrompt, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container10$visibility",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container10$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "variable", "variable": "dataView4", "path": "IsCopiedSecondAttribute" }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container10",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container10",
                                                      class: "mx-name-container10 copied-img-container",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall7",
                                                            $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall7",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_Copied.image1.218",
                                                                  $widgetId: "p.ConversationalUI.Snippet_Copied.image1.218",
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
                              key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container12",
                              $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container12",
                              class: "mx-name-container12 spacing-inner-bottom-medium",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $Text,
                                  {
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.text6",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.text6",
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
                                    key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container13",
                                    $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container13",
                                    class: "mx-name-container13 text-container-clickable",
                                    style: void 0,
                                    renderMode: "div",
                                    onClick: void 0,
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $FormGroup,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer1$formGroup",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer1$formGroup",
                                          class: "mx-name-markdownViewer1 text-break-word",
                                          style: void 0,
                                          control: [
                                            /* @__PURE__ */ React.createElement(
                                              $Markdown,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer1",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer1",
                                                stringAttribute: AttributeProperty({
                                                  "scope": "$ModelSpan",
                                                  "path": "",
                                                  "entity": "GenAICommons.ModelSpan",
                                                  "attribute": "Output",
                                                  "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                  "isList": false
                                                }),
                                                tabIndex: void 0,
                                                id: DerivedUniqueIdProperty({
                                                  "widgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer1"
                                                })
                                              }
                                            )
                                          ],
                                          caption: void 0,
                                          labelFor: DerivedUniqueIdProperty({
                                            "widgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer1"
                                          }),
                                          width: 3,
                                          orientation: "vertical",
                                          hasError: ValidationProperty({
                                            "inputWidgetId": "p.ConversationalUI.Span_TextGeneration_SlideIn.markdownViewer1"
                                          })
                                        }
                                      ),
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container18",
                                          $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container18",
                                          class: "mx-name-container18 btn-wrapper",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $ConditionalVisibilityWrapper,
                                              {
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton9$visibility",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton9$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }] }, "then": { "type": "function", "name": "not", "parameters": [{ "type": "variable", "variable": "dataView4", "path": "IsCopiedThirdAttribute" }] }, "else": { "type": "literal", "value": false } }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ActionButton,
                                                    {
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton9",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton9",
                                                      buttonId: "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton9",
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
                                                        "action": { "type": "callNanoflow", "argMap": { "ModelSpan": { "widget": "$ModelSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_ModelSpan_CopyAssistantResponse, "allowedRoles": ["Administrator"] }, "disabledDuringExecution": true },
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
                                                key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container14$visibility",
                                                $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container14$visibility",
                                                visible: ExpressionProperty({
                                                  "expression": { "expr": { "type": "variable", "variable": "dataView4", "path": "IsCopiedThirdAttribute" }, "args": { "dataView4": { "widget": "p.ConversationalUI.Span_TextGeneration_SlideIn.dataView4", "source": "object" } } }
                                                }),
                                                contents: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Container,
                                                    {
                                                      key: "p.ConversationalUI.Span_TextGeneration_SlideIn.container14",
                                                      $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.container14",
                                                      class: "mx-name-container14 copied-img-container",
                                                      style: void 0,
                                                      renderMode: "div",
                                                      onClick: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Fragment,
                                                          {
                                                            key: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall8",
                                                            $widgetId: "p.ConversationalUI.Span_TextGeneration_SlideIn.snippetCall8",
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Image,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_Copied.image1.236",
                                                                  $widgetId: "p.ConversationalUI.Snippet_Copied.image1.236",
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
                  hideFooter: false,
                  footer: void 0
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
  "Slide in text generation"
]);
const classes = "layout-slidein mx-window-view";
const cancelChangesOperationId = "lVMHd9X02F2nQXO35Zxqug";
const closeButton = "p.ConversationalUI.Span_TextGeneration_SlideIn.actionButton4";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_SlideIn.Main": region$Main
};

export { cancelChangesOperationId, classes, closeButton, content, style, title };
