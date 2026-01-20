import { reactExports, asPluginWidgets, Fragment, addEnumerations, selectTranslation } from '../index-BgmvTcvh.js';
import { PageFragment, ExpressionProperty } from '../Placeholder-Cb4MO343.js';
import { ActionButton, ActionProperty } from '../ActionButton-7BeRw6Eb.js';
import { AssociationObjectListProperty } from '../AssociationObjectListProperty-Bq1c4uSS.js';
import { AssociationObjectProperty } from '../AssociationObjectProperty-ALaVt2gM.js';
import '../AttributeProperty-DLZOHEVl.js';
import { DatabaseObjectListProperty } from '../DatabaseObjectListProperty-Cmtbu3ww.js';
import { DerivedUniqueIdProperty } from '../DerivedUniqueIdProperty-Bivq5vCz.js';
import { DynamicClassProperty } from '../DynamicClassProperty-GqIRc8le.js';
import { TemplatedWidgetProperty } from '../TemplatedWidgetProperty-V0FBuqFr.js';
import { TextProperty } from '../TextProperty-BV2oKBbq.js';
import { FormGroup, ValidationProperty } from '../FormGroup-Clh5YKWK.js';
import { WebIconProperty } from '../WebIconProperty-MLEi2sc0.js';
import { AccordionWidgetModule, ScrollToBottom, ACT_Textarea_ExecuteButtonAction, ACT_ChatContext_ExecuteSuggestedUserPrompt, ACT_ChatContext_SendMessage } from '../ConversationalUI.ACT_Textarea_ExecuteButtonAction-DYD7cAES.js';
import { ConditionalVisibilityWrapper } from '../ConditionalVisibilityWrapper-D6sB2G5T.js';
import { Container } from '../Container-LyamVXag.js';
import { DataView } from '../DataView-BlzHzMI2.js';
import { Div } from '../Div-DznaFJxI.js';
import { EventsWidgetModule } from '../Events-C5cPRTBy.js';
import '../Fragment-C-45CGtT.js';
import { ImageWidgetModule } from '../Image-CNc12AI2.js';
import { ListView } from '../ListView-hken1fZ0.js';
import { MarkdownWidgetModule } from '../Markdown-rCm_gmRs.js';
import { Text } from '../Text-mON8QAZM.js';
import { TextArea } from '../TextArea-CVgm5cpf.js';
import { content as content$1 } from '../ConversationalUI.Layout_MasterBase-DJ46kSmY.js';
import { AttributeProperty } from '../CTQxk13g-Cpo2G8Em.js';
import '../BMuJrVqQ-CCtMHjkn.js';
import '../CxMFexew-Djrc9cTX.js';
import '../UeptbR6O-BTpvn_SV.js';
import '../uEIG9e6s-BfLfin4i.js';
import '../CkBXggmw-DpOc9R4C.js';
import '../CxoxYXlg-DglkwELR.js';
import '../Wait-DpHrtukH.js';
import '../index-DQ4aW2Di.js';
import '../bdxqAC6d-DXeZKQMd.js';
import '../index-BuuMIVCm.js';
import '../InlineText-D4EmJMFt.js';
import '../B6nacfjo-CjNcAaDz.js';
import '../B7_8A3ct-D5Y5qINW.js';
import '../F-L0MxFU-C_ISpEfs.js';
import '../Atlas_Core.Atlas_TopBar-CKgSzJ5B.js';
import '../ListExpressionProperty-CLcrpJsE.js';
import '../CTcC6PjV-DYXKqvux.js';
import '../WebStaticImageProperty-C3LJYoNm.js';
import '../SidebarToggle-Bw-HLNop.js';
import '../D7vCi_Rn-BKFLWyMt.js';
import '../CGlz0zm4-DhbfSt7O.js';
import '../ScrollContainer-U0HrQ4Hh.js';
import '../MenuBar-BOhekOWd.js';

const React = { createElement: reactExports.createElement };
const Accordion = Object.getOwnPropertyDescriptor(AccordionWidgetModule, "Accordion")?.value || Object.getOwnPropertyDescriptor(AccordionWidgetModule, "default")?.value;
const Events = Object.getOwnPropertyDescriptor(EventsWidgetModule, "Events")?.value || Object.getOwnPropertyDescriptor(EventsWidgetModule, "default")?.value;
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;
const Markdown = Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "Markdown")?.value || Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "default")?.value;
const { $Container, $DataView, $ConditionalVisibilityWrapper, $ActionButton, $Fragment, $ListView, $Div, $Text, $FormGroup, $Markdown, $Accordion, $Image, $Events, $TextArea } = asPluginWidgets({ Container, DataView, ConditionalVisibilityWrapper, ActionButton, Fragment, ListView, Div, Text, FormGroup, Markdown, Accordion, Image, Events, TextArea });
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
    $Container,
    {
      key: "p.ConversationalUI.ConversationalUI_FullScreenChat.container2",
      $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.container2",
      class: "mx-name-container2 chat-page--fullheight-centered",
      style: void 0,
      renderMode: "div",
      onClick: void 0,
      content: [
        /* @__PURE__ */ React.createElement(
          $DataView,
          {
            key: "p.ConversationalUI.ConversationalUI_FullScreenChat.dataView1",
            $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.dataView1",
            class: "mx-name-dataView1 chat-dataview--display-contents form-vertical",
            style: void 0,
            tabIndex: void 0,
            object: AssociationObjectProperty({
              "dataSourceId": "p.17",
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
                  key: "p.ConversationalUI.ConversationalUI_FullScreenChat.container1",
                  $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.container1",
                  class: "mx-name-container1 card chat-container col-right",
                  style: void 0,
                  renderMode: "div",
                  onClick: void 0,
                  content: [
                    /* @__PURE__ */ React.createElement(
                      $ConditionalVisibilityWrapper,
                      {
                        key: "p.ConversationalUI.ConversationalUI_FullScreenChat.actionButton1$visibility",
                        $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.actionButton1$visibility",
                        visible: ExpressionProperty({
                          "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [{ "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" }] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [{ "type": "function", "name": "isNew", "parameters": [{ "type": "variable", "variable": "currentObject" }] }, { "type": "literal", "value": false }] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [{ "type": "function", "name": "trim", "parameters": [{ "type": "variable", "variable": "currentObject", "path": "CurrentUserPrompt" }] }, { "type": "literal", "value": "" }] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.ConversationalUI_FullScreenChat.dataView1", "source": "object" } } }
                        }),
                        contents: [
                          /* @__PURE__ */ React.createElement(
                            $ActionButton,
                            {
                              key: "p.ConversationalUI.ConversationalUI_FullScreenChat.actionButton1",
                              $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.actionButton1",
                              buttonId: "p.ConversationalUI.ConversationalUI_FullScreenChat.actionButton1",
                              class: "mx-name-actionButton1 pull-right spacing-outer-bottom-medium",
                              style: void 0,
                              tabIndex: void 0,
                              renderType: "link",
                              role: "button",
                              buttonClass: "btn-default",
                              caption: selectTranslation([
                                ExpressionProperty({
                                  "expression": { "expr": { "type": "literal", "value": "Clear chat" }, "args": {} }
                                })
                              ]),
                              tooltip: TextProperty({
                                "value": selectTranslation([
                                  ""
                                ])
                              }),
                              icon: void 0,
                              action: ActionProperty({
                                "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "0ZDBOHDkVF6+uEgXlW1Xpw", "validate": "view", "allowedRoles": ["Administrator", "User"] }, "disabledDuringExecution": true },
                                "abortOnServerValidation": true
                              })
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ React.createElement(
                      $Fragment,
                      {
                        key: "p.ConversationalUI.ConversationalUI_FullScreenChat.snippetCall1",
                        $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.snippetCall1",
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
                                            "dataSourceId": "p.2",
                                            "entity": "ConversationalUI.Message",
                                            "scope": "$ChatContext",
                                            "operationId": "kibpwJbBsV2L4AAns5G+jQ",
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
                                            "dataSourceId": "p.2",
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
                                                                    class: "mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                                                                    style: void 0,
                                                                    content: [
                                                                      /* @__PURE__ */ React.createElement(
                                                                        $Div,
                                                                        {
                                                                          key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid1$row0",
                                                                          $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid1$row0",
                                                                          class: "row align-children-center",
                                                                          style: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Div,
                                                                              {
                                                                                key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid1$row0$column0",
                                                                                $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid1$row0$column0",
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
                                                                                key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid1$row0$column1",
                                                                                $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid1$row0$column1",
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
                                                                                                class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                                                                                                style: void 0,
                                                                                                content: [
                                                                                                  /* @__PURE__ */ React.createElement(
                                                                                                    $Div,
                                                                                                    {
                                                                                                      key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0",
                                                                                                      $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0",
                                                                                                      class: "row align-children-center",
                                                                                                      style: void 0,
                                                                                                      content: [
                                                                                                        /* @__PURE__ */ React.createElement(
                                                                                                          $Div,
                                                                                                          {
                                                                                                            key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column0",
                                                                                                            $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column0",
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
                                                                                                            key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column1",
                                                                                                            $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column1",
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
                                                                                                  "dataSourceId": "p.3",
                                                                                                  "entity": "ConversationalUI.Source",
                                                                                                  "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                                                  "operationId": "/pij1oeaVFSA/AdYmbWiug"
                                                                                                }),
                                                                                                itemTemplate: TemplatedWidgetProperty({
                                                                                                  "dataSourceId": "p.3",
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
                                                                          class: "mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid",
                                                                          style: void 0,
                                                                          content: [
                                                                            /* @__PURE__ */ React.createElement(
                                                                              $Div,
                                                                              {
                                                                                key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0.86",
                                                                                $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0.86",
                                                                                class: "row align-children-center",
                                                                                style: void 0,
                                                                                content: [
                                                                                  /* @__PURE__ */ React.createElement(
                                                                                    $Div,
                                                                                    {
                                                                                      key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column0.87",
                                                                                      $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column0.87",
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
                                                                                      key: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column1.90",
                                                                                      $widgetId: "p.ConversationalUI.ConversationalUI_FullScreenChat.layoutGrid2$row0$column1.90",
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
                                                        "dataSourceId": "p.6",
                                                        "entity": "ConversationalUI.SuggestedUserPrompt",
                                                        "scope": "$ChatContext",
                                                        "operationId": "gRCWo2bvZF6Fs8d+rqeq8g"
                                                      }),
                                                      itemTemplate: TemplatedWidgetProperty({
                                                        "dataSourceId": "p.6",
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
      ],
      ariaHidden: false
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
