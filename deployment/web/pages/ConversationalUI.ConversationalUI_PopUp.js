import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectListProperty } from "mendix/AssociationObjectListProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicClassProperty } from "mendix/DynamicClassProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import * as AccordionWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/accordion/Accordion.mjs";
const Accordion = Object.getOwnPropertyDescriptor(AccordionWidgetModule, "Accordion")?.value || Object.getOwnPropertyDescriptor(AccordionWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/accordion/Accordion.css";
import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import * as EventsWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/events/Events.mjs";
const Events = Object.getOwnPropertyDescriptor(EventsWidgetModule, "Events")?.value || Object.getOwnPropertyDescriptor(EventsWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/events/Events.css";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { ListView } from "mendix/widgets/web/ListView";
import * as MarkdownWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/markdown/Markdown.mjs";
const Markdown = Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "Markdown")?.value || Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/markdown/Markdown.css";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/ConversationalUI.Layout_FloatingPopup.js";
import { ACT_ChatContext_ExecuteSuggestedUserPrompt } from "../nanoflows/ConversationalUI.ACT_ChatContext_ExecuteSuggestedUserPrompt.js";
import { ACT_ChatContext_SendMessage } from "../nanoflows/ConversationalUI.ACT_ChatContext_SendMessage.js";
import { ScrollToBottom } from "../nanoflows/ConversationalUI.ScrollToBottom.js";
import { ACT_Textarea_ExecuteButtonAction } from "../nanoflows/ConversationalUI.ACT_Textarea_ExecuteButtonAction.js";

const { $Div, $ActionButton, $DataView, $Container, $Fragment, $ListView, $Text, $ConditionalVisibilityWrapper, $FormGroup, $Markdown, $Accordion, $Image, $Events, $TextArea } = asPluginWidgets({ Div, ActionButton, DataView, Container, Fragment, ListView, Text, ConditionalVisibilityWrapper, FormGroup, Markdown, Accordion, Image, Events, TextArea });

addEnumerations({
    "GenAICommons.ENUM_MessageRole": [
        [
            "user",
            t([
                "User"
            ])
        ],
        [
            "assistant",
            t([
                "Assistant"
            ])
        ],
        [
            "system",
            t([
                "System"
            ])
        ],
        [
            "tool",
            t([
                "Tool"
            ])
        ]
    ],
    "ConversationalUI.ENUM_MessageStatus": [
        [
            "Loading",
            t([
                "Loading"
            ])
        ],
        [
            "Error",
            t([
                "Error"
            ])
        ],
        [
            "Success",
            t([
                "Success"
            ])
        ]
    ],
    "ConversationalUI.ENUM_ChatContextStatus": [
        [
            "Loading",
            t([
                "Loading"
            ])
        ],
        [
            "Ready",
            t([
                "Ready"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid1"
        $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid layoutgrid--full-height"}
        style={undefined}
        content={[
            <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid1$row0"
                $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid1$row0$column0"
                        $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$ActionButton key="p.ConversationalUI.ConversationalUI_PopUp.MinimizeChat"
                                $widgetId="p.ConversationalUI.ConversationalUI_PopUp.MinimizeChat"
                                buttonId={"p.ConversationalUI.ConversationalUI_PopUp.MinimizeChat"}
                                class={"mx-name-MinimizeChat hide"}
                                style={undefined}
                                tabIndex={undefined}
                                renderType={"button"}
                                role={undefined}
                                buttonClass={"btn-default"}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Minimize chat" }, "args": {} }
                                    })
                                ])}
                                tooltip={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                icon={undefined}
                                action={ActionProperty({
                                    "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />,
                            <$DataView key="p.ConversationalUI.ConversationalUI_PopUp.dataView1"
                                $widgetId="p.ConversationalUI.ConversationalUI_PopUp.dataView1"
                                class={"mx-name-dataView1 chat-dataview--display-contents form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.21",
                                    "scope": "$ChatContext",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.ConversationalUI.ConversationalUI_PopUp.container3"
                                        $widgetId="p.ConversationalUI.ConversationalUI_PopUp.container3"
                                        class={"mx-name-container3 chat-container col-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Fragment key="p.ConversationalUI.ConversationalUI_PopUp.snippetCall1"
                                                $widgetId="p.ConversationalUI.ConversationalUI_PopUp.snippetCall1"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.container15"
                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.container15"
                                                        class={"mx-name-container15 chat-container"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Container key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.container1"
                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.container1"
                                                                class={"mx-name-container1 messages-container spacing-outer-bottom"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$ListView key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4"
                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4"
                                                                        class={"mx-name-listView4 listview-scroll-to-last chat-listview-stylingless listview-hide-on-empty"}
                                                                        style={undefined}
                                                                        listValue={DatabaseObjectListProperty({
                                                                            "dataSourceId": "p.2",
                                                                            "entity": "ConversationalUI.Message",
                                                                            "scope": "$ChatContext",
                                                                            "operationId": "KhT9Yi5y/Fur7QeF11Wk7g",
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
                                                                            "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "ConversationalUI.Message_ChatContext", "context": "ConversationalUI.Message", "attributeType": "ObjectReference" }, { "type": "variable", "name": "ChatContext" } ] }
                                                                        })}
                                                                        itemTemplate={TemplatedWidgetProperty({
                                                                            "dataSourceId": "p.2",
                                                                            "editable": false,
                                                                            "children": () => [
                                                                                <$Container key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.container2"
                                                                                    $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.container2"
                                                                                    class={"mx-name-container2 spacing-inner-right"}
                                                                                    style={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={undefined}
                                                                                    content={[
                                                                                        <$Fragment key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.snippetCall1"
                                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.snippetCall1"
                                                                                            content={[
                                                                                                <$Container key="p.ConversationalUI.Snippet_Message_Bubble.containerChatBubbleWrapper"
                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Bubble.containerChatBubbleWrapper"
                                                                                                    class={DynamicClassProperty({
                                                                                                        "staticClasses": "mx-name-containerChatBubbleWrapper w-100 chat-bubble-wrapper hover-trigger",
                                                                                                        "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "literal", "value": "chat-bubble-wrapper--assistant message--assistant" }, "else": { "type": "literal", "value": "chat-bubble-wrapper--user message--user" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                    })}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Text key="p.ConversationalUI.Snippet_Message_Bubble.text1"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Bubble.text1"
                                                                                                            class={"mx-name-text1 show-on-hover text-detail"}
                                                                                                            style={undefined}
                                                                                                            caption={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "literal", "value": "Assistant" }, "else": { "type": "literal", "value": "You" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                })
                                                                                                            ])}
                                                                                                            renderMode={"span"} />,
                                                                                                        <$Container key="p.ConversationalUI.Snippet_Message_Bubble.container3"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Bubble.container3"
                                                                                                            class={"mx-name-container3 chat-message-card"}
                                                                                                            style={undefined}
                                                                                                            renderMode={"div"}
                                                                                                            onClick={undefined}
                                                                                                            content={[
                                                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_Bubble.container11$visibility"
                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Bubble.container11$visibility"
                                                                                                                    visible={ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Success" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                    })}
                                                                                                                    contents={[
                                                                                                                        <$Container key="p.ConversationalUI.Snippet_Message_Bubble.container11"
                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Bubble.container11"
                                                                                                                            class={"mx-name-container11"}
                                                                                                                            style={undefined}
                                                                                                                            renderMode={"div"}
                                                                                                                            onClick={undefined}
                                                                                                                            content={[
                                                                                                                                <$Fragment key="p.ConversationalUI.Snippet_Message_Bubble.snippetCall3"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Bubble.snippetCall3"
                                                                                                                                    content={[
                                                                                                                                        <$Container key="p.ConversationalUI.Snippet_Message_Content.container1"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Content.container1"
                                                                                                                                            class={"mx-name-container1"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={[
                                                                                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_Content.text8$visibility"
                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Content.text8$visibility"
                                                                                                                                                    visible={ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "user" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, { "type": "literal", "value": false } ] } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                                                    })}
                                                                                                                                                    contents={[
                                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_Message_Content.text8"
                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Content.text8"
                                                                                                                                                            class={"mx-name-text8"}
                                                                                                                                                            style={undefined}
                                                                                                                                                            caption={t([
                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "Message", "path": "Content" }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                                                                })
                                                                                                                                                            ])}
                                                                                                                                                            renderMode={"span"} />
                                                                                                                                                    ]} />,
                                                                                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility"
                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility"
                                                                                                                                                    visible={ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                                                    })}
                                                                                                                                                    contents={[
                                                                                                                                                        <$FormGroup key="p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup"
                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup"
                                                                                                                                                            class={"mx-name-markdownViewer1 chat-listview-stylingless spacing-outer-bottom-none"}
                                                                                                                                                            style={undefined}
                                                                                                                                                            control={[
                                                                                                                                                                <$Markdown key="p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                                                                                    stringAttribute={AttributeProperty({
                                                                                                                                                                        "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4",
                                                                                                                                                                        "path": "",
                                                                                                                                                                        "entity": "ConversationalUI.Message",
                                                                                                                                                                        "attribute": "Content",
                                                                                                                                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                                                                                        "isList": false,
                                                                                                                                                                        "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                                                                                                                    })}
                                                                                                                                                                    tabIndex={undefined}
                                                                                                                                                                    id={DerivedUniqueIdProperty({
                                                                                                                                                                        "widgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                                                                                    })} />
                                                                                                                                                            ]}
                                                                                                                                                            caption={undefined}
                                                                                                                                                            labelFor={DerivedUniqueIdProperty({
                                                                                                                                                                "widgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                                                                            })}
                                                                                                                                                            width={undefined}
                                                                                                                                                            orientation={"vertical"}
                                                                                                                                                            hasError={ValidationProperty({
                                                                                                                                                                "inputWidgetId": "p.ConversationalUI.Snippet_Message_Content.markdownViewer1"
                                                                                                                                                            })} />
                                                                                                                                                    ]} />
                                                                                                                                            ]}
                                                                                                                                            ariaHidden={false} />
                                                                                                                                    ]} />,
                                                                                                                                <$Fragment key="p.ConversationalUI.Snippet_Message_Bubble.snippetCall1"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Bubble.snippetCall1"
                                                                                                                                    content={[
                                                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility"
                                                                                                                                            visible={ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "variable", "variable": "Message", "path": "HasSources" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                                            })}
                                                                                                                                            contents={[
                                                                                                                                                <$Accordion key="p.ConversationalUI.Snippet_Message_Sources.accordion1"
                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Sources.accordion1"
                                                                                                                                                    advancedMode={false}
                                                                                                                                                    groups={[
                                                                                                                                                        {
                                                                                                                                                            "headerRenderMode": "custom",
                                                                                                                                                            "headerText": t([
                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Header" }, "args": {} }
                                                                                                                                                                })
                                                                                                                                                            ]),
                                                                                                                                                            "headerHeading": "headingThree",
                                                                                                                                                            "headerContent": [
                                                                                                                                                                <$Div key="p.ConversationalUI.Snippet_Message_Sources.layoutGrid2"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Sources.layoutGrid2"
                                                                                                                                                                    class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    content={[
                                                                                                                                                                        <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0"
                                                                                                                                                                            $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0"
                                                                                                                                                                            class={"row align-children-center"}
                                                                                                                                                                            style={undefined}
                                                                                                                                                                            content={[
                                                                                                                                                                                <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column0"
                                                                                                                                                                                    $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column0"
                                                                                                                                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                                                                                                                                    style={undefined}
                                                                                                                                                                                    content={[
                                                                                                                                                                                        <$Image key="p.ConversationalUI.Snippet_Message_Sources.image1"
                                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Sources.image1"
                                                                                                                                                                                            datasource={"icon"}
                                                                                                                                                                                            imageObject={undefined}
                                                                                                                                                                                            defaultImageDynamic={undefined}
                                                                                                                                                                                            imageUrl={t([
                                                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                                                                                })
                                                                                                                                                                                            ])}
                                                                                                                                                                                            imageIcon={WebIconProperty({
                                                                                                                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-file" }
                                                                                                                                                                                            })}
                                                                                                                                                                                            isBackgroundImage={false}
                                                                                                                                                                                            children={undefined}
                                                                                                                                                                                            onClickType={"action"}
                                                                                                                                                                                            onClick={undefined}
                                                                                                                                                                                            alternativeText={t([
                                                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                                                                                })
                                                                                                                                                                                            ])}
                                                                                                                                                                                            widthUnit={"auto"}
                                                                                                                                                                                            width={100}
                                                                                                                                                                                            heightUnit={"auto"}
                                                                                                                                                                                            height={100}
                                                                                                                                                                                            iconSize={14}
                                                                                                                                                                                            displayAs={"fullImage"}
                                                                                                                                                                                            responsive={true}
                                                                                                                                                                                            class={"mx-name-image1"}
                                                                                                                                                                                            style={undefined}
                                                                                                                                                                                            tabIndex={undefined} />
                                                                                                                                                                                    ]} />,
                                                                                                                                                                                <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column1"
                                                                                                                                                                                    $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column1"
                                                                                                                                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                                                                                                                                    style={undefined}
                                                                                                                                                                                    content={[
                                                                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_Message_Sources.text1"
                                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Sources.text1"
                                                                                                                                                                                            class={"mx-name-text1 spacing-outer-bottom-none"}
                                                                                                                                                                                            style={undefined}
                                                                                                                                                                                            caption={t([
                                                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Sources" }, "args": {} }
                                                                                                                                                                                                })
                                                                                                                                                                                            ])}
                                                                                                                                                                                            renderMode={"span"} />
                                                                                                                                                                                    ]} />
                                                                                                                                                                            ]} />
                                                                                                                                                                    ]} />
                                                                                                                                                            ],
                                                                                                                                                            "content": [
                                                                                                                                                                <$ListView key="p.ConversationalUI.Snippet_Message_Sources.listView3"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Sources.listView3"
                                                                                                                                                                    class={"mx-name-listView3 chat-listview-horizontal listview-hide-on-empty"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    listValue={AssociationObjectListProperty({
                                                                                                                                                                        "dataSourceId": "p.3",
                                                                                                                                                                        "entity": "ConversationalUI.Source",
                                                                                                                                                                        "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4",
                                                                                                                                                                        "operationId": "JbXAQrsfs1+RZv24fbHHqA"
                                                                                                                                                                    })}
                                                                                                                                                                    itemTemplate={TemplatedWidgetProperty({
                                                                                                                                                                        "dataSourceId": "p.3",
                                                                                                                                                                        "editable": false,
                                                                                                                                                                        "children": () => [
                                                                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_Sources.actionButton4$visibility"
                                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_Message_Sources.actionButton4$visibility"
                                                                                                                                                                                visible={ExpressionProperty({
                                                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                                                                                                                                })}
                                                                                                                                                                                contents={[
                                                                                                                                                                                    <$ActionButton key="p.ConversationalUI.Snippet_Message_Sources.actionButton4"
                                                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_Message_Sources.actionButton4"
                                                                                                                                                                                        buttonId={"p.ConversationalUI.Snippet_Message_Sources.actionButton4"}
                                                                                                                                                                                        class={"mx-name-actionButton4 source-btn btn-sm"}
                                                                                                                                                                                        style={undefined}
                                                                                                                                                                                        tabIndex={undefined}
                                                                                                                                                                                        renderType={"button"}
                                                                                                                                                                                        role={undefined}
                                                                                                                                                                                        buttonClass={"btn-default"}
                                                                                                                                                                                        caption={t([
                                                                                                                                                                                            ExpressionProperty({
                                                                                                                                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" } } }
                                                                                                                                                                                            })
                                                                                                                                                                                        ])}
                                                                                                                                                                                        tooltip={TextProperty({
                                                                                                                                                                                            "value": t([
                                                                                                                                                                                                ""
                                                                                                                                                                                            ])
                                                                                                                                                                                        })}
                                                                                                                                                                                        icon={undefined}
                                                                                                                                                                                        action={ActionProperty({
                                                                                                                                                                                            "action": { "type": "openPage", "argMap": { "param$Source": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" }, "currentObject": { "widget": "p.ConversationalUI.Snippet_Message_Sources.listView3", "source": "object" } }, "config": { "name": "ConversationalUI/Source_View.page.xml", "title": t([ { "type": "variable", "variable": "currentObject", "path": "Title" } ]), "location": "modal", "resizable": true, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                                                                                            "abortOnServerValidation": true
                                                                                                                                                                                        })} />
                                                                                                                                                                                ]} />
                                                                                                                                                                        ]
                                                                                                                                                                    })}
                                                                                                                                                                    onClick={undefined}
                                                                                                                                                                    pageSize={10} />
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
                                                                                                                                                    ]}
                                                                                                                                                    collapsible={true}
                                                                                                                                                    expandBehavior={"singleExpanded"}
                                                                                                                                                    animate={true}
                                                                                                                                                    showIcon={"right"}
                                                                                                                                                    icon={undefined}
                                                                                                                                                    expandIcon={undefined}
                                                                                                                                                    collapseIcon={undefined}
                                                                                                                                                    animateIcon={true}
                                                                                                                                                    class={"mx-name-accordion1 accordion-chat-sources widget-accordion-bordered-none spacing-outer-top"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    tabIndex={undefined} />
                                                                                                                                            ]} />
                                                                                                                                    ]} />,
                                                                                                                                <$Text key="p.ConversationalUI.Snippet_Message_Bubble.text2"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Bubble.text2"
                                                                                                                                    class={"mx-name-text2 d-inline-block spacing-inner-top-smaller text-small text-light text-detail"}
                                                                                                                                    style={undefined}
                                                                                                                                    caption={t([
                                                                                                                                        ExpressionProperty({
                                                                                                                                            "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Message", "path": "createdDate" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                                        })
                                                                                                                                    ])}
                                                                                                                                    renderMode={"span"} />
                                                                                                                            ]}
                                                                                                                            ariaHidden={false} />
                                                                                                                    ]} />,
                                                                                                                <$Fragment key="p.ConversationalUI.Snippet_Message_Bubble.snippetCall2"
                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Bubble.snippetCall2"
                                                                                                                    content={[
                                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility"
                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility"
                                                                                                                            visible={ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Error" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                            })}
                                                                                                                            contents={[
                                                                                                                                <$Div key="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2"
                                                                                                                                    class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                                                    style={undefined}
                                                                                                                                    content={[
                                                                                                                                        <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0.83"
                                                                                                                                            $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0.83"
                                                                                                                                            class={"row align-children-center"}
                                                                                                                                            style={undefined}
                                                                                                                                            content={[
                                                                                                                                                <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column0.84"
                                                                                                                                                    $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column0.84"
                                                                                                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    content={[
                                                                                                                                                        <$Image key="p.ConversationalUI.Snippet_Message_StatusHandling.image1"
                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.image1"
                                                                                                                                                            datasource={"icon"}
                                                                                                                                                            imageObject={undefined}
                                                                                                                                                            defaultImageDynamic={undefined}
                                                                                                                                                            imageUrl={t([
                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                                                })
                                                                                                                                                            ])}
                                                                                                                                                            imageIcon={WebIconProperty({
                                                                                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-warning-sign" }
                                                                                                                                                            })}
                                                                                                                                                            isBackgroundImage={false}
                                                                                                                                                            children={undefined}
                                                                                                                                                            onClickType={"action"}
                                                                                                                                                            onClick={undefined}
                                                                                                                                                            alternativeText={t([
                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                                                })
                                                                                                                                                            ])}
                                                                                                                                                            widthUnit={"auto"}
                                                                                                                                                            width={100}
                                                                                                                                                            heightUnit={"auto"}
                                                                                                                                                            height={100}
                                                                                                                                                            iconSize={14}
                                                                                                                                                            displayAs={"fullImage"}
                                                                                                                                                            responsive={true}
                                                                                                                                                            class={"mx-name-image1 text-danger"}
                                                                                                                                                            style={undefined}
                                                                                                                                                            tabIndex={undefined} />
                                                                                                                                                    ]} />,
                                                                                                                                                <$Div key="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column1.87"
                                                                                                                                                    $widgetId="p.ConversationalUI.ConversationalUI_PopUp.layoutGrid2$row0$column1.87"
                                                                                                                                                    class={"col-lg col-md-auto col-auto"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    content={[
                                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_Message_StatusHandling.text10"
                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.text10"
                                                                                                                                                            class={"mx-name-text10 text-danger spacing-outer-left-none"}
                                                                                                                                                            style={undefined}
                                                                                                                                                            caption={t([
                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                                                                                                                                                })
                                                                                                                                                            ])}
                                                                                                                                                            renderMode={"span"} />
                                                                                                                                                    ]} />
                                                                                                                                            ]} />
                                                                                                                                    ]} />
                                                                                                                            ]} />,
                                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_StatusHandling.container4$visibility"
                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.container4$visibility"
                                                                                                                            visible={ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Loading" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4", "source": "object" } } }
                                                                                                                            })}
                                                                                                                            contents={[
                                                                                                                                <$Container key="p.ConversationalUI.Snippet_Message_StatusHandling.container4"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.container4"
                                                                                                                                    class={"mx-name-container4 chat-loading-wrapper"}
                                                                                                                                    style={undefined}
                                                                                                                                    renderMode={"div"}
                                                                                                                                    onClick={undefined}
                                                                                                                                    content={[
                                                                                                                                        <$Container key="p.ConversationalUI.Snippet_Message_StatusHandling.container7"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.container7"
                                                                                                                                            class={"mx-name-container7 loading-dot"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={undefined}
                                                                                                                                            ariaHidden={false} />,
                                                                                                                                        <$Container key="p.ConversationalUI.Snippet_Message_StatusHandling.container6"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.container6"
                                                                                                                                            class={"mx-name-container6 loading-dot"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={undefined}
                                                                                                                                            ariaHidden={false} />,
                                                                                                                                        <$Container key="p.ConversationalUI.Snippet_Message_StatusHandling.container5"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.container5"
                                                                                                                                            class={"mx-name-container5 loading-dot"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={undefined}
                                                                                                                                            ariaHidden={false} />
                                                                                                                                    ]}
                                                                                                                                    ariaHidden={false} />
                                                                                                                            ]} />
                                                                                                                    ]} />
                                                                                                            ]}
                                                                                                            ariaHidden={false} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />
                                                                                            ]} />
                                                                                    ]}
                                                                                    ariaHidden={false} />,
                                                                                <$Events key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.events1"
                                                                                    $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.events1"
                                                                                    onComponentLoad={ActionProperty({
                                                                                        "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ScrollToBottom, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                                        "argumentTypes": { }
                                                                                    })}
                                                                                    componentLoadDelay={0}
                                                                                    componentLoadRepeat={false}
                                                                                    componentLoadRepeatInterval={30000}
                                                                                    onEventChangeAttribute={AttributeProperty({
                                                                                        "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.listView4",
                                                                                        "path": "",
                                                                                        "entity": "ConversationalUI.Message",
                                                                                        "attribute": "Content",
                                                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                        "isList": false,
                                                                                        "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} }
                                                                                    })}
                                                                                    onEventChange={ActionProperty({
                                                                                        "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ScrollToBottom, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                                        "argumentTypes": { }
                                                                                    })}
                                                                                    onEventChangeDelay={0}
                                                                                    class={"mx-name-events1"}
                                                                                    style={undefined}
                                                                                    tabIndex={undefined} />
                                                                            ]
                                                                        })}
                                                                        onClick={undefined}
                                                                        pageSize={200} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Fragment key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.snippetCall3"
                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI_Bubbles.snippetCall3"
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_Interaction.container3$visibility"
                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.container3$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "ChatContext", "path": "System.owner" }, { "type": "token", "name": "currentUser" } ] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.ConversationalUI.Snippet_ChatContext_Interaction.container3"
                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.container3"
                                                                                class={"mx-name-container3"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Events key="p.ConversationalUI.Snippet_ChatContext_Interaction.eventHitEnterToSend"
                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.eventHitEnterToSend"
                                                                                        onComponentLoad={ActionProperty({
                                                                                            "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_Textarea_ExecuteButtonAction, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                                            "argumentTypes": { }
                                                                                        })}
                                                                                        componentLoadDelay={200}
                                                                                        componentLoadRepeat={false}
                                                                                        componentLoadRepeatInterval={30000}
                                                                                        onEventChange={undefined}
                                                                                        onEventChangeDelay={0}
                                                                                        class={"mx-name-eventHitEnterToSend"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined} />,
                                                                                    <$ListView key="p.ConversationalUI.Snippet_ChatContext_Interaction.listView2"
                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.listView2"
                                                                                        class={"mx-name-listView2 chat-listview-stylingless chat-listview-horizontal listview-hide-on-empty"}
                                                                                        style={undefined}
                                                                                        listValue={AssociationObjectListProperty({
                                                                                            "dataSourceId": "p.6",
                                                                                            "entity": "ConversationalUI.SuggestedUserPrompt",
                                                                                            "scope": "$ChatContext",
                                                                                            "operationId": "r6JzK+cnvlGiDJFAeweUvw"
                                                                                        })}
                                                                                        itemTemplate={TemplatedWidgetProperty({
                                                                                            "dataSourceId": "p.6",
                                                                                            "editable": false,
                                                                                            "children": () => [
                                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt$visibility"
                                                                                                    $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$ActionButton key="p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt"
                                                                                                            buttonId={"p.ConversationalUI.Snippet_ChatContext_Interaction.btnUseSuggestedUserPrompt"}
                                                                                                            class={"mx-name-btnUseSuggestedUserPrompt chat-btn-suggested-prompt btn-sm"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            renderType={"button"}
                                                                                                            role={undefined}
                                                                                                            buttonClass={"btn-default"}
                                                                                                            caption={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Content" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2", "source": "object" } } }
                                                                                                                })
                                                                                                            ])}
                                                                                                            tooltip={TextProperty({
                                                                                                                "value": t([
                                                                                                                    ""
                                                                                                                ])
                                                                                                            })}
                                                                                                            icon={undefined}
                                                                                                            action={ActionProperty({
                                                                                                                "action": { "type": "callNanoflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "SuggestedUserPrompt": { "widget": "p.ConversationalUI.Snippet_ChatContext_Interaction.listView2", "source": "object" } }, "config": { "nanoflow": () => ACT_ChatContext_ExecuteSuggestedUserPrompt, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                "abortOnServerValidation": true
                                                                                                            })} />
                                                                                                    ]} />
                                                                                            ]
                                                                                        })}
                                                                                        onClick={undefined}
                                                                                        pageSize={10} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_Interaction.container2$visibility"
                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.container2$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "ChatContext" } ] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$Container key="p.ConversationalUI.Snippet_ChatContext_Interaction.container2"
                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.container2"
                                                                                                class={"mx-name-container2"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.ConversationalUI.Snippet_ChatContext_Interaction.text7"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.text7"
                                                                                                        class={"mx-name-text7 text-center d-block spacing-outer-top-large"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "How can I help you today?" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"h5"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]} />,
                                                                                    <$Container key="p.ConversationalUI.Snippet_ChatContext_Interaction.container17"
                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.container17"
                                                                                        class={"mx-name-container17 chat-input-wrapper"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$FormGroup key="p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt$formGroup"
                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt$formGroup"
                                                                                                class={"mx-name-textAreaUserPrompt spacing-outer-bottom-none mx-textarea"}
                                                                                                style={undefined}
                                                                                                control={[
                                                                                                    <$TextArea key="p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                                                        inputValue={AttributeProperty({
                                                                                                            "scope": "$ChatContext",
                                                                                                            "path": "",
                                                                                                            "entity": "ConversationalUI.ChatContext",
                                                                                                            "attribute": "CurrentUserPrompt",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false,
                                                                                                            "isEditable": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Ready" } ] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } },
                                                                                                            "validation": null
                                                                                                        })}
                                                                                                        counterMessage={undefined}
                                                                                                        maxLength={undefined}
                                                                                                        numberOfLines={undefined}
                                                                                                        autoGrow={true}
                                                                                                        placeholder={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Type your message here..." }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        readOnlyStyle={"control"}
                                                                                                        textTooLongMessage={undefined}
                                                                                                        onEnter={undefined}
                                                                                                        onLeave={undefined}
                                                                                                        ariaLabel={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        ariaRequired={undefined}
                                                                                                        submitWhileEditing={false}
                                                                                                        submitDelay={100}
                                                                                                        tabIndex={1}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={undefined}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                                                })}
                                                                                                width={undefined}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.ConversationalUI.Snippet_ChatContext_Interaction.textAreaUserPrompt"
                                                                                                })} />,
                                                                                            <$Container key="p.ConversationalUI.Snippet_ChatContext_Interaction.container16"
                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.container16"
                                                                                                class={"mx-name-container16 send-btn-container"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Ready" } ] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$ActionButton key="p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage"
                                                                                                                buttonId={"p.ConversationalUI.Snippet_ChatContext_Interaction.btnSendMessage"}
                                                                                                                class={"mx-name-btnSendMessage send-btn"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined}
                                                                                                                renderType={"button"}
                                                                                                                role={undefined}
                                                                                                                buttonClass={"btn-primary"}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                tooltip={TextProperty({
                                                                                                                    "value": t([
                                                                                                                        ""
                                                                                                                    ])
                                                                                                                })}
                                                                                                                icon={WebIconProperty({
                                                                                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                                                                                                })}
                                                                                                                action={ActionProperty({
                                                                                                                    "action": { "type": "callNanoflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "nanoflow": () => ACT_ChatContext_SendMessage, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                    "abortOnServerValidation": true
                                                                                                                })} />
                                                                                                        ]} />,
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "ChatContext", "path": "Status" }, { "type": "literal", "value": "Loading" } ] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$ActionButton key="p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled"
                                                                                                                buttonId={"p.ConversationalUI.Snippet_ChatContext_Interaction.btnDisabled"}
                                                                                                                class={"mx-name-btnDisabled disabled send-btn"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined}
                                                                                                                renderType={"button"}
                                                                                                                role={undefined}
                                                                                                                buttonClass={"btn-primary"}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                tooltip={TextProperty({
                                                                                                                    "value": t([
                                                                                                                        ""
                                                                                                                    ])
                                                                                                                })}
                                                                                                                icon={WebIconProperty({
                                                                                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-send" }
                                                                                                                })}
                                                                                                                action={ActionProperty({
                                                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNwU6JsCtFehGaPFjDkTYg", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                    "abortOnServerValidation": true
                                                                                                                })} />
                                                                                                        ]} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]}
                                                                                        ariaHidden={false} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_Interaction.text3$visibility"
                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.text3$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "constant", "name": "ConversationalUI.UserInputInstructions" } ] }, { "type": "literal", "value": "" } ] }, "args": {} }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$Text key="p.ConversationalUI.Snippet_ChatContext_Interaction.text3"
                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_Interaction.text3"
                                                                                                class={"mx-name-text3 user-input-instructions text-small spacing-outer-top-medium"}
                                                                                                style={undefined}
                                                                                                caption={t([
                                                                                                    ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "constant", "name": "ConversationalUI.UserInputInstructions" }, "args": {} }
                                                                                                    })
                                                                                                ])}
                                                                                                renderMode={"span"} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />
                                                                ]} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={true}
                                footer={undefined} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "ChatBot"
]);

export const classes = "layout-chat-popup";

export const cancelChangesOperationId = "BWZqUhsbIl6Zjxgpo+eP1g";
export const closeButton = "p.ConversationalUI.ConversationalUI_PopUp.MinimizeChat";
export const style = {};
export const content = { ...parentContent,
    "ConversationalUI.Layout_FloatingPopup.Main": region$Main,
};
