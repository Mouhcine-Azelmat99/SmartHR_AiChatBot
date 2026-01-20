import { reactExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-B-pQLZz2.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-C1uYYDJ5.js';
import { ActionButton, ActionProperty } from '../ActionButton-C47bDiwH.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-HKkAiyBV.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-BrlLyOx6.js';
import '../AttributeProperty-CBmdvzfK.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Dk1DF3Sc.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-QeaM9GtQ.js';
import { DynamicClassProperty } from '../DynamicClassProperty-CHrrqhFa.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-viDAZSOp.js';
import { TextProperty } from '../TextProperty-ukMsrrP8.js';
import { FormGroup, ValidationProperty } from '../FormGroup-yCagykDW.js';
import { WebIconProperty } from '../WebIconProperty-B4eQIHHv.js';
import { AccordionWidgetModule, ScrollToBottom, ACT_Textarea_ExecuteButtonAction, ACT_ChatContext_ExecuteSuggestedUserPrompt, ACT_ChatContext_SendMessage } from '../ConversationalUI.ACT_Textarea_ExecuteButtonAction-B5qKakF6.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-C-2xhd5O.js';
import { Container } from '../Container-CTbE-yQS.js';
import { DataView } from '../DataView-DtIsQy7l.js';
import { Div } from '../Div-C2k8MuH7.js';
import { EventsWidgetModule } from '../Events-B2twg6V1.js';
import '../Fragment-C3M8OT7J.js';
import { ImageWidgetModule } from '../Image-CwuIpbpH.js';
import { ListView } from '../ListView-CtnOFRNF.js';
import { MarkdownWidgetModule } from '../Markdown-C0rfO2h-.js';
import { Text } from '../Text-5NmEA291.js';
import { TextArea } from '../TextArea-DdodcWfx.js';
import { content as content$1 } from '../ConversationalUI.Layout_MasterBase-Ampsb9an.js';
import { AttributeProperty } from '../CTQxk13g-BDTc581w.js';
import '../BMuJrVqQ-C_cqhczO.js';
import '../CxMFexew-C1GWnP8G.js';
import '../UeptbR6O-9Cnv5Sxb.js';
import '../uEIG9e6s-CoI72Q4o.js';
import '../CkBXggmw-CEa7-Kz-.js';
import '../CxoxYXlg-rXnL4f6K.js';
import '../Wait-B4JnrbPE.js';
import '../index-DpgUatDd.js';
import '../bdxqAC6d-ISZWqfJE.js';
import '../index-CgEeXS6W.js';
import '../InlineText-CcVi-f0x.js';
import '../B6nacfjo-Di-qGXS2.js';
import '../B7_8A3ct-CdkfAVjR.js';
import '../F-L0MxFU-D5sOd2X2.js';
import '../Atlas_Core.Atlas_TopBar-Cl1SnfwM.js';
import '../ListExpressionProperty-Blkk1P49.js';
import '../CTcC6PjV-CLE6jBCq.js';
import '../WebStaticImageProperty-D6HpETLo.js';
import '../SidebarToggle-U7U0qqOC.js';
import '../D7vCi_Rn-Dtbqkh4B.js';
import '../CGlz0zm4-CawGDyow.js';
import '../ScrollContainer-B-pXvHDA.js';
import '../MenuBar-rOfPUVLa.js';

const React = { createElement: reactExports.createElement };
const Accordion = Object.getOwnPropertyDescriptor(AccordionWidgetModule, "Accordion")?.value || Object.getOwnPropertyDescriptor(AccordionWidgetModule, "default")?.value;
const Events = Object.getOwnPropertyDescriptor(EventsWidgetModule, "Events")?.value || Object.getOwnPropertyDescriptor(EventsWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Markdown = Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "Markdown")?.value || Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "default")?.value;
const { $Div, $DataView, $Container, $ConditionalVisibilityWrapper, $ActionButton, $Text, $Fragment, $ListView, $FormGroup, $Markdown, $Accordion, $Image, $Events, $TextArea } = asPluginWidgets({ Div, DataView, Container, ConditionalVisibilityWrapper, ActionButton, Text, Fragment, ListView, FormGroup, Markdown, Accordion, Image, Events, TextArea });
addEnumerations({
  "GenAICommons.ENUM_MessageRole": [
    [
      "user",
      selectTranslation([
        "User"
      ])
    ],
    [
      "assistant",
      selectTranslation([
        "Assistant"
      ])
    ],
    [
      "system",
      selectTranslation([
        "System"
      ])
    ],
    [
      "tool",
      selectTranslation([
        "Tool"
      ])
    ]
  ],
  "ConversationalUI.ENUM_MessageStatus": [
    [
      "Loading",
      selectTranslation([
        "Loading"
      ])
    ],
    [
      "Error",
      selectTranslation([
        "Error"
      ])
    ],
    [
      "Success",
      selectTranslation([
        "Success"
      ])
    ]
  ],
  "ConversationalUI.ENUM_ChatContextStatus": [
    [
      "Loading",
      selectTranslation([
        "Loading"
      ])
    ],
    [
      "Ready",
      selectTranslation([
        "Ready"
      ])
    ]
  ]
});
const region$Main = (historyId) => /* @__PURE__ */ React.createElement(PageFragment, { renderKey: historyId }, [
  /* @__PURE__ */ React.createElement(
    $Div,
    {
      key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1",
      $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1",
      class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid layoutgrid--full-height",
      style: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $Div,
          {
            key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0",
            $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0",
            class: "row",
            style: void 0,
            content: [
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column0",
                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column0",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: void 0
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column1",
                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column1",
                  class: "col-lg-9 col-md col",
                  style: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $DataView,
                      {
                        key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.dataView1",
                        $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.dataView1",
                        class: "mx-name-dataView1 chat-dataview--display-contents form-vertical",
                        style: void 0,
                        tabIndex: void 0,
                        object: AssociationObjectProperty({
                          "dataSourceId": "p.27",
                          "scope": "$ChatContext",
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
                              key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container1",
                              $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container1",
                              class: "mx-name-container1 card chat-container",
                              style: void 0,
                              renderMode: "div",
                              onClick: void 0,
                              content: [
                                /* @__PURE__ */ React.createElement(
                                  $ConditionalVisibilityWrapper,
                                  {
                                    key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container8$visibility",
                                    $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container8$visibility",
                                    visible: ExpressionProperty({
                                      "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "currentObject" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "CurrentUserPrompt" }] }, { "type": "literal", "value": "" }] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.ConversationStarters_Horizontal_Example.dataView1", "source": "object" } } }
                                    }),
                                    contents: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container8",
                                          $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container8",
                                          class: "mx-name-container8 conversationstarter-container--horizontal",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Div,
                                              {
                                                key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2",
                                                $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2",
                                                class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                style: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $Div,
                                                    {
                                                      key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0",
                                                      $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0",
                                                      class: "row",
                                                      style: void 0,
                                                      content: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column0",
                                                            $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column0",
                                                            class: "col-lg col-md col",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container9",
                                                                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container9",
                                                                  class: "mx-name-container9 card conversationstarter",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  renderMode: "div",
                                                                  onClick: ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "AiVhzmxMDVSr5qc1HpNGxw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true }
                                                                  }),
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container5",
                                                                        $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container5",
                                                                        class: "mx-name-container5 col-left",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton3",
                                                                              $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton3",
                                                                              buttonId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton3",
                                                                              class: "mx-name-actionButton3 spacing-outer-bottom spacing-outer-right-medium spacing-outer-left",
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
                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-pencil" }
                                                                              }),
                                                                              action: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.text5",
                                                                              $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.text5",
                                                                              class: "mx-name-text5 text-small text-break text-primary text-semibold spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Help me write a LinkedIn post" }, "args": {} }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column1",
                                                            $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column1",
                                                            class: "col-lg col-md col",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container12",
                                                                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container12",
                                                                  class: "mx-name-container12 card conversationstarter",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  renderMode: "div",
                                                                  onClick: ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "00g+qXa751mNo9qgyJ7f3w", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true }
                                                                  }),
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container14",
                                                                        $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container14",
                                                                        class: "mx-name-container14 col-left",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton5",
                                                                              $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton5",
                                                                              buttonId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton5",
                                                                              class: "mx-name-actionButton5 spacing-outer-bottom spacing-outer-right spacing-outer-left",
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
                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-file" }
                                                                              }),
                                                                              action: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.text4",
                                                                              $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.text4",
                                                                              class: "mx-name-text4 text-small text-break text-primary text-semibold spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Summarize my meeting notes" }, "args": {} }
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
                                                            ]
                                                          }
                                                        ),
                                                        /* @__PURE__ */ React.createElement(
                                                          $Div,
                                                          {
                                                            key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column2",
                                                            $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column2",
                                                            class: "col-lg col-md col",
                                                            style: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Container,
                                                                {
                                                                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container11",
                                                                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container11",
                                                                  class: "mx-name-container11 card conversationstarter",
                                                                  style: void 0,
                                                                  tabIndex: void 0,
                                                                  renderMode: "div",
                                                                  onClick: ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "1a6ki4cptVaPPIeKHb0rag", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true }
                                                                  }),
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container15",
                                                                        $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.container15",
                                                                        class: "mx-name-container15 col-left",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ActionButton,
                                                                            {
                                                                              key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton4",
                                                                              $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton4",
                                                                              buttonId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.actionButton4",
                                                                              class: "mx-name-actionButton4 spacing-outer-bottom spacing-outer-right spacing-outer-left",
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
                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-cutlery" }
                                                                              }),
                                                                              action: void 0
                                                                            }
                                                                          ),
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.text6",
                                                                              $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.text6",
                                                                              class: "mx-name-text6 text-small text-break text-primary text-semibold spacing-outer-bottom",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Find me a cupcake recipe" }, "args": {} }
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
                                          ariaHidden: false
                                        }
                                      )
                                    ]
                                  }
                                ),
                                /* @__PURE__ */ React.createElement(
                                  $Fragment,
                                  {
                                    key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.snippetCall1",
                                    $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.snippetCall1",
                                    content: [
                                      /* @__PURE__ */ React.createElement(
                                        $Container,
                                        {
                                          key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container15",
                                          $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container15",
                                          class: "mx-name-container15 chat-container",
                                          style: void 0,
                                          renderMode: "div",
                                          onClick: void 0,
                                          content: [
                                            /* @__PURE__ */ React.createElement(
                                              $Container,
                                              {
                                                key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container1",
                                                $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container1",
                                                class: "mx-name-container1 messages-container spacing-outer-bottom",
                                                style: void 0,
                                                renderMode: "div",
                                                onClick: void 0,
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ListView,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                      class: "mx-name-listView4 listview-scroll-to-last chat-listview-stylingless listview-hide-on-empty",
                                                      style: void 0,
                                                      listValue: DatabaseObjectListProperty({
                                                        "dataSourceId": "p.6",
                                                        "entity": "ConversationalUI.Message",
                                                        "scope": "$ChatContext",
                                                        "operationId": "7ZWACE6qW1qnesg8fxWDyA",
                                                        "sort": [
                                                          [
                                                            "createdDate",
                                                            "asc"
                                                          ]
                                                        ],
                                                        "arguments": {
                                                          "ChatContext": [
                                                            "$ChatContext"
                                                          ],
                                                          "CurrentObject": [
                                                            "$ChatContext"
                                                          ]
                                                        },
                                                        "constraints": { "type": "function", "name": "=", "parameters": [{ "type": "attribute", "attribute": "ConversationalUI.Message_ChatContext", "context": "ConversationalUI.Message", "attributeType": "ObjectReference" }, { "type": "variable", "name": "ChatContext" }] }
                                                      }),
                                                      itemTemplate: TemplatedWidgetProperty({
                                                        "dataSourceId": "p.6",
                                                        "editable": false,
                                                        "children": () => [
                                                          /* @__PURE__ */ React.createElement(
                                                            $Fragment,
                                                            {
                                                              key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall1",
                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall1",
                                                              content: [
                                                                /* @__PURE__ */ React.createElement(
                                                                  $Container,
                                                                  {
                                                                    key: "p.ConversationalUI.Snippet_Message.container13",
                                                                    $widgetId: "p.ConversationalUI.Snippet_Message.container13",
                                                                    class: DynamicClassProperty({
                                                                      "staticClasses": "mx-name-container13 hover-trigger",
                                                                      "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "literal", "value": "message--assistant" }, "else": { "type": "literal", "value": "message--user" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                    }),
                                                                    style: void 0,
                                                                    renderMode: "div",
                                                                    onClick: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Container,
                                                                        {
                                                                          key: "p.ConversationalUI.Snippet_Message.container14",
                                                                          $widgetId: "p.ConversationalUI.Snippet_Message.container14",
                                                                          class: "mx-name-container14 spacing-outer-bottom",
                                                                          style: void 0,
                                                                          renderMode: "div",
                                                                          onClick: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Div,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_Message.layoutGrid1",
                                                                                $widgetId: "p.ConversationalUI.Snippet_Message.layoutGrid1",
                                                                                class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                style: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Div,
                                                                                    {
                                                                                      key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0.77",
                                                                                      $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0.77",
                                                                                      class: "row align-children-center",
                                                                                      style: void 0,
                                                                                      content: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Div,
                                                                                          {
                                                                                            key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column0.78",
                                                                                            $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column0.78",
                                                                                            class: "col-lg-auto col-md-auto col-auto",
                                                                                            style: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Text,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message.text6",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message.text6",
                                                                                                  class: DynamicClassProperty({
                                                                                                    "staticClasses": "mx-name-text6 spacing-outer-bottom-none",
                                                                                                    "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "literal", "value": "text-primary" }, "else": { "type": "literal", "value": "" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                  }),
                                                                                                  style: void 0,
                                                                                                  caption: selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "function", "name": "+", "parameters": [{ "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "literal", "value": "Assistant" }, "else": { "type": "literal", "value": "You" } }, { "type": "literal", "value": " " }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                    })
                                                                                                  ]),
                                                                                                  renderMode: "h5"
                                                                                                }
                                                                                              )
                                                                                            ]
                                                                                          }
                                                                                        ),
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Div,
                                                                                          {
                                                                                            key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column1.81",
                                                                                            $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column1.81",
                                                                                            class: "col-lg col-md col",
                                                                                            style: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Text,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message.text2",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message.text2",
                                                                                                  class: "mx-name-text2 show-on-hover text-small text-light text-detail",
                                                                                                  style: void 0,
                                                                                                  caption: selectTranslation([
                                                                                                    ExpressionProperty({
                                                                                                      "expression": { "expr": { "type": "function", "name": "_format", "parameters": [{ "type": "variable", "variable": "Message", "path": "createdDate" }, { "type": "literal", "value": '{"type":"datetime"}' }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                    })
                                                                                                  ]),
                                                                                                  renderMode: "span"
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
                                                                          ariaHidden: false
                                                                        }
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $ConditionalVisibilityWrapper,
                                                                        {
                                                                          key: "p.ConversationalUI.Snippet_Message.container11$visibility",
                                                                          $widgetId: "p.ConversationalUI.Snippet_Message.container11$visibility",
                                                                          visible: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Success" }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                          }),
                                                                          contents: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Container,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_Message.container11",
                                                                                $widgetId: "p.ConversationalUI.Snippet_Message.container11",
                                                                                class: "mx-name-container11",
                                                                                style: void 0,
                                                                                renderMode: "div",
                                                                                onClick: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Fragment,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message.snippetCall3",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message.snippetCall3",
                                                                                      content: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Container,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_Message_Content.container1",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_Content.container1",
                                                                                            class: "mx-name-container1",
                                                                                            style: void 0,
                                                                                            renderMode: "div",
                                                                                            onClick: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $ConditionalVisibilityWrapper,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message_Content.text8$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_Content.text8$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "user" }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [{ "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, { "type": "literal", "value": false }] } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Text,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message_Content.text8",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message_Content.text8",
                                                                                                        class: "mx-name-text8",
                                                                                                        style: void 0,
                                                                                                        caption: selectTranslation([
                                                                                                          ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "variable", "variable": "Message", "path": "Content" }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
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
                                                                                                  key: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility",
                                                                                                  visible: ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                  }),
                                                                                                  contents: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $FormGroup,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup",
                                                                                                        class: "mx-name-markdownViewer1 chat-listview-stylingless spacing-outer-bottom-none",
                                                                                                        style: void 0,
                                                                                                        control: [
                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                            $Markdown,
                                                                                                            {
                                                                                                              key: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1",
                                                                                                              $widgetId: "p.ConversationalUI.Snippet_Message_Content.markdownViewer1",
                                                                                                              stringAttribute: AttributeProperty({
                                                                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                                                                "path": "",
                                                                                                                "entity": "ConversationalUI.Message",
                                                                                                                "attribute": "Content",
                                                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                                "isList": false,
                                                                                                                "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                                                              }),
                                                                                                              tabIndex: void 0,
                                                                                                              id: DerivedUniqueIdProperty({
                                                                                                                "widgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                              })
                                                                                                            }
                                                                                                          )
                                                                                                        ],
                                                                                                        caption: void 0,
                                                                                                        labelFor: DerivedUniqueIdProperty({
                                                                                                          "widgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                        }),
                                                                                                        width: void 0,
                                                                                                        orientation: "vertical",
                                                                                                        hasError: ValidationProperty({
                                                                                                          "inputWidgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
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
                                                                                  ),
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Fragment,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message.snippetCall1",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message.snippetCall1",
                                                                                      content: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $ConditionalVisibilityWrapper,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility",
                                                                                            visible: ExpressionProperty({
                                                                                              "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" }] }, "then": { "type": "variable", "variable": "Message", "path": "HasSources" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                            }),
                                                                                            contents: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Accordion,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.Snippet_Message_Sources.accordion1",
                                                                                                  $widgetId: "p.ConversationalUI.Snippet_Message_Sources.accordion1",
                                                                                                  advancedMode: false,
                                                                                                  groups: [
                                                                                                    {
                                                                                                      "headerRenderMode": "custom",
                                                                                                      "headerText": selectTranslation([
                                                                                                        ExpressionProperty({
                                                                                                          "expression": { "expr": { "type": "literal", "value": "Header" }, "args": {} }
                                                                                                        })
                                                                                                      ]),
                                                                                                      "headerHeading": "headingThree",
                                                                                                      "headerContent": [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Div,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_Message_Sources.layoutGrid2",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_Sources.layoutGrid2",
                                                                                                            class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                                            style: void 0,
                                                                                                            content: [
                                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                                $Div,
                                                                                                                {
                                                                                                                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0.105",
                                                                                                                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0.105",
                                                                                                                  class: "row align-children-center",
                                                                                                                  style: void 0,
                                                                                                                  content: [
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Div,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column0.106",
                                                                                                                        $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column0.106",
                                                                                                                        class: "col-lg-auto col-md-auto col-auto",
                                                                                                                        style: void 0,
                                                                                                                        content: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Image,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_Message_Sources.image1",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_Message_Sources.image1",
                                                                                                                              datasource: "icon",
                                                                                                                              imageObject: void 0,
                                                                                                                              defaultImageDynamic: void 0,
                                                                                                                              imageUrl: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              imageIcon: WebIconProperty({
                                                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-file" }
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
                                                                                                                              class: "mx-name-image1",
                                                                                                                              style: void 0,
                                                                                                                              tabIndex: void 0
                                                                                                                            }
                                                                                                                          )
                                                                                                                        ]
                                                                                                                      }
                                                                                                                    ),
                                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                                      $Div,
                                                                                                                      {
                                                                                                                        key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column1.109",
                                                                                                                        $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column1.109",
                                                                                                                        class: "col-lg-auto col-md-auto col-auto",
                                                                                                                        style: void 0,
                                                                                                                        content: [
                                                                                                                          /* @__PURE__ */ React.createElement(
                                                                                                                            $Text,
                                                                                                                            {
                                                                                                                              key: "p.ConversationalUI.Snippet_Message_Sources.text1",
                                                                                                                              $widgetId: "p.ConversationalUI.Snippet_Message_Sources.text1",
                                                                                                                              class: "mx-name-text1 spacing-outer-bottom-none",
                                                                                                                              style: void 0,
                                                                                                                              caption: selectTranslation([
                                                                                                                                ExpressionProperty({
                                                                                                                                  "expression": { "expr": { "type": "literal", "value": "Sources" }, "args": {} }
                                                                                                                                })
                                                                                                                              ]),
                                                                                                                              renderMode: "span"
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
                                                                                                      "content": [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $ListView,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.Snippet_Message_Sources.listView3",
                                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_Sources.listView3",
                                                                                                            class: "mx-name-listView3 chat-listview-horizontal listview-hide-on-empty",
                                                                                                            style: void 0,
                                                                                                            listValue: AssociationObjectListProperty({
                                                                                                              "dataSourceId": "p.7",
                                                                                                              "entity": "ConversationalUI.Source",
                                                                                                              "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                                                              "operationId": "Ec+Gtbcuw1iptAha9FcwDQ"
                                                                                                            }),
                                                                                                            itemTemplate: TemplatedWidgetProperty({
                                                                                                              "dataSourceId": "p.7",
                                                                                                              "editable": false,
                                                                                                              "children": () => [
                                                                                                                /* @__PURE__ */ React.createElement(
                                                                                                                  $ConditionalVisibilityWrapper,
                                                                                                                  {
                                                                                                                    key: "p.ConversationalUI.Snippet_Message_Sources.actionButton4$visibility",
                                                                                                                    $widgetId: "p.ConversationalUI.Snippet_Message_Sources.actionButton4$visibility",
                                                                                                                    visible: ExpressionProperty({
                                                                                                                      "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                                                                                    }),
                                                                                                                    contents: [
                                                                                                                      /* @__PURE__ */ React.createElement(
                                                                                                                        $ActionButton,
                                                                                                                        {
                                                                                                                          key: "p.ConversationalUI.Snippet_Message_Sources.actionButton4",
                                                                                                                          $widgetId: "p.ConversationalUI.Snippet_Message_Sources.actionButton4",
                                                                                                                          buttonId: "p.ConversationalUI.Snippet_Message_Sources.actionButton4",
                                                                                                                          class: "mx-name-actionButton4 source-btn btn-sm",
                                                                                                                          style: void 0,
                                                                                                                          tabIndex: void 0,
                                                                                                                          renderType: "button",
                                                                                                                          role: void 0,
                                                                                                                          buttonClass: "btn-default",
                                                                                                                          caption: selectTranslation([
                                                                                                                            ExpressionProperty({
                                                                                                                              "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" } } }
                                                                                                                            })
                                                                                                                          ]),
                                                                                                                          tooltip: TextProperty({
                                                                                                                            "value": selectTranslation([
                                                                                                                              ""
                                                                                                                            ])
                                                                                                                          }),
                                                                                                                          icon: void 0,
                                                                                                                          action: ActionProperty({
                                                                                                                            "action": { "type": "openPage", "argMap": { "param$Source": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" }, "currentObject": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" } }, "config": { "name": "ConversationalUI/Source_View.page.xml", "title": selectTranslation([{ "type": "variable", "variable": "currentObject", "path": "Title" }]), "location": "modal", "resizable": true, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                                                            "abortOnServerValidation": true
                                                                                                                          })
                                                                                                                        }
                                                                                                                      )
                                                                                                                    ]
                                                                                                                  }
                                                                                                                )
                                                                                                              ]
                                                                                                            }),
                                                                                                            onClick: void 0,
                                                                                                            pageSize: 10
                                                                                                          }
                                                                                                        )
                                                                                                      ],
                                                                                                      "visible": ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                      }),
                                                                                                      "loadContent": "whenExpanded",
                                                                                                      "initialCollapsedState": "collapsed",
                                                                                                      "initiallyCollapsed": ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                                      })
                                                                                                    }
                                                                                                  ],
                                                                                                  collapsible: true,
                                                                                                  expandBehavior: "singleExpanded",
                                                                                                  animate: true,
                                                                                                  showIcon: "right",
                                                                                                  icon: void 0,
                                                                                                  expandIcon: void 0,
                                                                                                  collapseIcon: void 0,
                                                                                                  animateIcon: true,
                                                                                                  class: "mx-name-accordion1 accordion-chat-sources widget-accordion-bordered-none spacing-outer-top",
                                                                                                  style: void 0,
                                                                                                  tabIndex: void 0
                                                                                                }
                                                                                              )
                                                                                            ]
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
                                                                      ),
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Fragment,
                                                                        {
                                                                          key: "p.ConversationalUI.Snippet_Message.snippetCall2",
                                                                          $widgetId: "p.ConversationalUI.Snippet_Message.snippetCall2",
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ConditionalVisibilityWrapper,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility",
                                                                                $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility",
                                                                                visible: ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Error" }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                }),
                                                                                contents: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Div,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2",
                                                                                      class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid",
                                                                                      style: void 0,
                                                                                      content: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Div,
                                                                                          {
                                                                                            key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0.120",
                                                                                            $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0.120",
                                                                                            class: "row align-children-center",
                                                                                            style: void 0,
                                                                                            content: [
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Div,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column0.121",
                                                                                                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column0.121",
                                                                                                  class: "col-lg-auto col-md-auto col-auto",
                                                                                                  style: void 0,
                                                                                                  content: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Image,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message_StatusHandling.image1",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.image1",
                                                                                                        datasource: "icon",
                                                                                                        imageObject: void 0,
                                                                                                        defaultImageDynamic: void 0,
                                                                                                        imageUrl: selectTranslation([
                                                                                                          ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                          })
                                                                                                        ]),
                                                                                                        imageIcon: WebIconProperty({
                                                                                                          "icon": { "type": "glyph", "iconClass": "glyphicon-warning-sign" }
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
                                                                                                        class: "mx-name-image1 text-danger",
                                                                                                        style: void 0,
                                                                                                        tabIndex: void 0
                                                                                                      }
                                                                                                    )
                                                                                                  ]
                                                                                                }
                                                                                              ),
                                                                                              /* @__PURE__ */ React.createElement(
                                                                                                $Div,
                                                                                                {
                                                                                                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column1.124",
                                                                                                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid2$row0$column1.124",
                                                                                                  class: "col-lg col-md-auto col-auto",
                                                                                                  style: void 0,
                                                                                                  content: [
                                                                                                    /* @__PURE__ */ React.createElement(
                                                                                                      $Text,
                                                                                                      {
                                                                                                        key: "p.ConversationalUI.Snippet_Message_StatusHandling.text10",
                                                                                                        $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.text10",
                                                                                                        class: "mx-name-text10 text-danger spacing-outer-left-none",
                                                                                                        style: void 0,
                                                                                                        caption: selectTranslation([
                                                                                                          ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                                                                                          })
                                                                                                        ]),
                                                                                                        renderMode: "span"
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
                                                                            ),
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ConditionalVisibilityWrapper,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_Message_StatusHandling.container4$visibility",
                                                                                $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container4$visibility",
                                                                                visible: ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Loading" }] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                }),
                                                                                contents: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Container,
                                                                                    {
                                                                                      key: "p.ConversationalUI.Snippet_Message_StatusHandling.container4",
                                                                                      $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container4",
                                                                                      class: "mx-name-container4 chat-loading-wrapper",
                                                                                      style: void 0,
                                                                                      renderMode: "div",
                                                                                      onClick: void 0,
                                                                                      content: [
                                                                                        /* @__PURE__ */ React.createElement(
                                                                                          $Container,
                                                                                          {
                                                                                            key: "p.ConversationalUI.Snippet_Message_StatusHandling.container7",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container7",
                                                                                            class: "mx-name-container7 loading-dot",
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
                                                                                            key: "p.ConversationalUI.Snippet_Message_StatusHandling.container6",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container6",
                                                                                            class: "mx-name-container6 loading-dot",
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
                                                                                            key: "p.ConversationalUI.Snippet_Message_StatusHandling.container5",
                                                                                            $widgetId: "p.ConversationalUI.Snippet_Message_StatusHandling.container5",
                                                                                            class: "mx-name-container5 loading-dot",
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
                                                                                  )
                                                                                ]
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
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Container,
                                                            {
                                                              key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container8",
                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container8",
                                                              class: "mx-name-container8 w-100 border spacing-outer-top-medium",
                                                              style: void 0,
                                                              renderMode: "div",
                                                              onClick: void 0,
                                                              content: void 0,
                                                              ariaHidden: false
                                                            }
                                                          ),
                                                          /* @__PURE__ */ React.createElement(
                                                            $Events,
                                                            {
                                                              key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.events1",
                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.events1",
                                                              onComponentLoad: ActionProperty({
                                                                "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ScrollToBottom, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                "argumentTypes": {}
                                                              }),
                                                              componentLoadDelay: 0,
                                                              componentLoadRepeat: false,
                                                              componentLoadRepeatInterval: 3e4,
                                                              onEventChangeAttribute: AttributeProperty({
                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                "path": "",
                                                                "entity": "ConversationalUI.Message",
                                                                "attribute": "Content",
                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                "isList": false,
                                                                "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                              }),
                                                              onEventChange: ActionProperty({
                                                                "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ScrollToBottom, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                "argumentTypes": {}
                                                              }),
                                                              onEventChangeDelay: 0,
                                                              class: "mx-name-events1",
                                                              style: void 0,
                                                              tabIndex: void 0
                                                            }
                                                          )
                                                        ]
                                                      }),
                                                      onClick: void 0,
                                                      pageSize: 200
                                                    }
                                                  )
                                                ],
                                                ariaHidden: false
                                              }
                                            ),
                                            /* @__PURE__ */ React.createElement(
                                              $Fragment,
                                              {
                                                key: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall3",
                                                $widgetId: "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall3",
                                                content: [
                                                  /* @__PURE__ */ React.createElement(
                                                    $ConditionalVisibilityWrapper,
                                                    {
                                                      key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3$visibility",
                                                      $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3$visibility",
                                                      visible: ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "System.owner" }, { "type": "token", "name": "currentUser" }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                      }),
                                                      contents: [
                                                        /* @__PURE__ */ React.createElement(
                                                          $Container,
                                                          {
                                                            key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3",
                                                            $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container3",
                                                            class: "mx-name-container3",
                                                            style: void 0,
                                                            renderMode: "div",
                                                            onClick: void 0,
                                                            content: [
                                                              /* @__PURE__ */ React.createElement(
                                                                $Events,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_ChatContext_Interaction.eventHitEnterToSend",
                                                                  $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.eventHitEnterToSend",
                                                                  onComponentLoad: ActionProperty({
                                                                    "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Textarea_ExecuteButtonAction, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": false },
                                                                    "argumentTypes": {}
                                                                  }),
                                                                  componentLoadDelay: 200,
                                                                  componentLoadRepeat: false,
                                                                  componentLoadRepeatInterval: 3e4,
                                                                  onEventChange: void 0,
                                                                  onEventChangeDelay: 0,
                                                                  class: "mx-name-eventHitEnterToSend",
                                                                  style: void 0,
                                                                  tabIndex: void 0
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ListView,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2",
                                                                  $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2",
                                                                  class: "mx-name-listView2 chat-listview-stylingless chat-listview-horizontal listview-hide-on-empty",
                                                                  style: void 0,
                                                                  listValue: AssociationObjectListProperty({
                                                                    "dataSourceId": "p.10",
                                                                    "entity": "ConversationalUI.SuggestedUserPrompt",
                                                                    "scope": "$ChatContext",
                                                                    "operationId": "+2RwumGSAFySbRGOChEDuA"
                                                                  }),
                                                                  itemTemplate: TemplatedWidgetProperty({
                                                                    "dataSourceId": "p.10",
                                                                    "editable": false,
                                                                    "children": () => [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $ConditionalVisibilityWrapper,
                                                                        {
                                                                          key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt$visibility",
                                                                          $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt$visibility",
                                                                          visible: ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "args": {} }
                                                                          }),
                                                                          contents: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $ActionButton,
                                                                              {
                                                                                key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt",
                                                                                $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt",
                                                                                buttonId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt",
                                                                                class: "mx-name-btnUseSuggestedUserPrompt chat-btn-suggested-prompt btn-sm",
                                                                                style: void 0,
                                                                                tabIndex: void 0,
                                                                                renderType: "button",
                                                                                role: void 0,
                                                                                buttonClass: "btn-default",
                                                                                caption: selectTranslation([
                                                                                  ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Content" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2", "source": "object" } } }
                                                                                  })
                                                                                ]),
                                                                                tooltip: TextProperty({
                                                                                  "value": selectTranslation([
                                                                                    ""
                                                                                  ])
                                                                                }),
                                                                                icon: void 0,
                                                                                action: ActionProperty({
                                                                                  "action": { "type": "callNanoflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "SuggestedUserPrompt": { "widget": "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2", "source": "object" } }, "config": { "nanoflow": () => ACT_ChatContext_ExecuteSuggestedUserPrompt, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                                                                  "abortOnServerValidation": true
                                                                                })
                                                                              }
                                                                            )
                                                                          ]
                                                                        }
                                                                      )
                                                                    ]
                                                                  }),
                                                                  onClick: void 0,
                                                                  pageSize: 10
                                                                }
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "ChatContext" }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container2",
                                                                        class: "mx-name-container2",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $Text,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.text7",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.text7",
                                                                              class: "mx-name-text7 text-center d-block spacing-outer-top-large",
                                                                              style: void 0,
                                                                              caption: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "How can I help you today?" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              renderMode: "h5"
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
                                                                  key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container17",
                                                                  $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container17",
                                                                  class: "mx-name-container17 chat-input-wrapper",
                                                                  style: void 0,
                                                                  renderMode: "div",
                                                                  onClick: void 0,
                                                                  content: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $FormGroup,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt$formGroup",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt$formGroup",
                                                                        class: "mx-name-textAreaUserPrompt spacing-outer-bottom-none mx-textarea",
                                                                        style: void 0,
                                                                        control: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $TextArea,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt",
                                                                              inputValue: AttributeProperty({
                                                                                "scope": "$ChatContext",
                                                                                "path": "",
                                                                                "entity": "ConversationalUI.ChatContext",
                                                                                "attribute": "CurrentUserPrompt",
                                                                                "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                "isList": false,
                                                                                "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Ready" }] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } },
                                                                                "validation": null
                                                                              }),
                                                                              counterMessage: void 0,
                                                                              maxLength: void 0,
                                                                              numberOfLines: void 0,
                                                                              autoGrow: true,
                                                                              placeholder: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "Type your message here..." }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              readOnlyStyle: "control",
                                                                              textTooLongMessage: void 0,
                                                                              onEnter: void 0,
                                                                              onLeave: void 0,
                                                                              ariaLabel: selectTranslation([
                                                                                ExpressionProperty({
                                                                                  "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                })
                                                                              ]),
                                                                              ariaRequired: void 0,
                                                                              submitWhileEditing: false,
                                                                              submitDelay: 100,
                                                                              tabIndex: 1,
                                                                              id: DerivedUniqueIdProperty({
                                                                                "widgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                              })
                                                                            }
                                                                          )
                                                                        ],
                                                                        caption: void 0,
                                                                        labelFor: DerivedUniqueIdProperty({
                                                                          "widgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                        }),
                                                                        width: void 0,
                                                                        orientation: "vertical",
                                                                        hasError: ValidationProperty({
                                                                          "inputWidgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                        })
                                                                      }
                                                                    ),
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Container,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.container16",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.container16",
                                                                        class: "mx-name-container16 send-btn-container",
                                                                        style: void 0,
                                                                        renderMode: "div",
                                                                        onClick: void 0,
                                                                        content: [
                                                                          /* @__PURE__ */ React.createElement(
                                                                            $ConditionalVisibilityWrapper,
                                                                            {
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Ready" }] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ActionButton,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage",
                                                                                    buttonId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage",
                                                                                    class: "mx-name-btnSendMessage send-btn",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    renderType: "button",
                                                                                    role: void 0,
                                                                                    buttonClass: "btn-primary",
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
                                                                                      "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                                                                    }),
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "callNanoflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "nanoflow": () => ACT_ChatContext_SendMessage, "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                                                                              key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled$visibility",
                                                                              $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled$visibility",
                                                                              visible: ExpressionProperty({
                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "function", "name": "=", "parameters": [{ "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Loading" }] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                              }),
                                                                              contents: [
                                                                                /* @__PURE__ */ React.createElement(
                                                                                  $ActionButton,
                                                                                  {
                                                                                    key: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled",
                                                                                    $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled",
                                                                                    buttonId: "p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled",
                                                                                    class: "mx-name-btnDisabled disabled send-btn",
                                                                                    style: void 0,
                                                                                    tabIndex: void 0,
                                                                                    renderType: "button",
                                                                                    role: void 0,
                                                                                    buttonClass: "btn-primary",
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
                                                                                      "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                                                                    }),
                                                                                    action: ActionProperty({
                                                                                      "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNwU6JsCtFehGaPFjDkTYg", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
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
                                                              ),
                                                              /* @__PURE__ */ React.createElement(
                                                                $ConditionalVisibilityWrapper,
                                                                {
                                                                  key: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3$visibility",
                                                                  $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3$visibility",
                                                                  visible: ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "constant", "name": "ConversationalUI.UserInputInstructions" }] }, { "type": "literal", "value": "" }] }, "args": {} }
                                                                  }),
                                                                  contents: [
                                                                    /* @__PURE__ */ React.createElement(
                                                                      $Text,
                                                                      {
                                                                        key: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3",
                                                                        $widgetId: "p.ConversationalUI.Snippet_ChatContext_Interaction.text3",
                                                                        class: "mx-name-text3 user-input-instructions text-small spacing-outer-top-medium",
                                                                        style: void 0,
                                                                        caption: selectTranslation([
                                                                          ExpressionProperty({
                                                                            "expression": { "expr": { "type": "constant", "name": "ConversationalUI.UserInputInstructions" }, "args": {} }
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
                                                      ]
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
                        hideFooter: true,
                        footer: void 0
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ React.createElement(
                $Div,
                {
                  key: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column2",
                  $widgetId: "p.ConversationalUI.ConversationStarters_Horizontal_Example.layoutGrid1$row0$column2",
                  class: "col-lg col-md col",
                  style: void 0,
                  content: void 0
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
  "Full Screen Chat"
]);
const classes = "layout-atlas layout-atlas-responsive-topbar";
const style = {};
const content = {
  ...content$1,
  "ConversationalUI.Layout_MasterBase.Main": region$Main
};

export { classes, content, style, title };
