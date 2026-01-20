import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectListProperty } from "mendix/AssociationObjectListProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DecimalProperty } from "mendix/DecimalProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicClassProperty } from "mendix/DynamicClassProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import * as AccordionWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/accordion/Accordion.mjs";
const Accordion = Object.getOwnPropertyDescriptor(AccordionWidgetModule, "Accordion")?.value || Object.getOwnPropertyDescriptor(AccordionWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/accordion/Accordion.css";
import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import * as EventsWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/events/Events.mjs";
const Events = Object.getOwnPropertyDescriptor(EventsWidgetModule, "Events")?.value || Object.getOwnPropertyDescriptor(EventsWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/events/Events.css";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as GalleryWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/gallery/Gallery.mjs";
const Gallery = Object.getOwnPropertyDescriptor(GalleryWidgetModule, "Gallery")?.value || Object.getOwnPropertyDescriptor(GalleryWidgetModule, "default")?.value;   
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { ListView } from "mendix/widgets/web/ListView";
import * as MarkdownWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/markdown/Markdown.mjs";
const Markdown = Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "Markdown")?.value || Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/markdown/Markdown.css";
import * as SliderWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/custom/slider/Slider.mjs";
const Slider = Object.getOwnPropertyDescriptor(SliderWidgetModule, "Slider")?.value || Object.getOwnPropertyDescriptor(SliderWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/custom/slider/Slider.css";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_TopBar.js";
import { ACT_ChatContext_ExecuteSuggestedUserPrompt } from "../nanoflows/ConversationalUI.ACT_ChatContext_ExecuteSuggestedUserPrompt.js";
import { ACT_ChatContext_SendMessage } from "../nanoflows/ConversationalUI.ACT_ChatContext_SendMessage.js";
import { ScrollToBottom } from "../nanoflows/ConversationalUI.ScrollToBottom.js";
import { ACT_Textarea_ExecuteButtonAction } from "../nanoflows/ConversationalUI.ACT_Textarea_ExecuteButtonAction.js";

const { $DataView, $Div, $Container, $ConditionalVisibilityWrapper, $ActionButton, $Text, $ListView, $Fragment, $Gallery, $FormGroup, $Markdown, $Accordion, $Image, $Events, $TextArea, $Combobox, $Slider } = asPluginWidgets({ DataView, Div, Container, ConditionalVisibilityWrapper, ActionButton, Text, ListView, Fragment, Gallery, FormGroup, Markdown, Accordion, Image, Events, TextArea, Combobox, Slider });

addEnumerations({
    "MyFirstAIBot.ENUM_InitialUserPromptCategory": [
        [
            "PersonalAssistant",
            t([
                "Personal Assistant"
            ])
        ],
        [
            "TextWriter",
            t([
                "Text Writer"
            ])
        ],
        [
            "BrainstormingAssistant",
            t([
                "Brainstorming Assistant"
            ])
        ],
        [
            "LinkedInWriter",
            t([
                "LinkedIn Writer"
            ])
        ]
    ],
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
    ],
    "MyFirstAIBot.ENUM_ActionMicroflowSelection": [
        [
            "ChatContext_ChatWithHistory_ActionMicroflow",
            t([
                "ChatContext_ChatWithHistory_ActionMicroflow"
            ])
        ],
        [
            "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow",
            t([
                "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.MyFirstAIBot.Chat.dataView4"
        $widgetId="p.MyFirstAIBot.Chat.dataView4"
        class={"mx-name-dataView4 chat-dataview--display-contents form-vertical"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.40",
            "scope": "$ChatContext",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$Div key="p.MyFirstAIBot.Chat.layoutGrid1"
                $widgetId="p.MyFirstAIBot.Chat.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid layoutgrid--full-height"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstAIBot.Chat.layoutGrid1$row0"
                        $widgetId="p.MyFirstAIBot.Chat.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.MyFirstAIBot.Chat.layoutGrid1$row0$column0"
                                $widgetId="p.MyFirstAIBot.Chat.layoutGrid1$row0$column0"
                                class={"col-lg-3 col-md-auto col-auto"}
                                style={undefined}
                                content={[
                                    <$Container key="p.MyFirstAIBot.Chat.container2"
                                        $widgetId="p.MyFirstAIBot.Chat.container2"
                                        class={"mx-name-container2 card chat-card--full-height chat-history-sidebar margin-bottom-0"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton1$visibility"
                                                $widgetId="p.MyFirstAIBot.Chat.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.MyFirstAIBot.Chat.actionButton1"
                                                        $widgetId="p.MyFirstAIBot.Chat.actionButton1"
                                                        buttonId={"p.MyFirstAIBot.Chat.actionButton1"}
                                                        class={"mx-name-actionButton1 spacing-outer-bottom-medium btn-block"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "New Chat" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil-write-paper" }
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNdXYulmr16GLrk/mFpECw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />,
                                            <$Text key="p.MyFirstAIBot.Chat.text3"
                                                $widgetId="p.MyFirstAIBot.Chat.text3"
                                                class={"mx-name-text3"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Chat history" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"h5"} />,
                                            <$ListView key="p.MyFirstAIBot.Chat.listView3"
                                                $widgetId="p.MyFirstAIBot.Chat.listView3"
                                                class={"mx-name-listView3 listview-hover listview-stylingless"}
                                                style={undefined}
                                                listValue={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.2",
                                                    "entity": "ConversationalUI.ChatContext",
                                                    "scope": "p.MyFirstAIBot.Chat.dataView4",
                                                    "operationId": "NzJe6iP85FOfQ687YDDMpw",
                                                    "sort": [
                                                        [
                                                            "changedDate",
                                                            "desc"
                                                        ]
                                                    ],
                                                    "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "System.owner", "context": "ConversationalUI.ChatContext", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" } ] }
                                                })}
                                                itemTemplate={TemplatedWidgetProperty({
                                                    "dataSourceId": "p.2",
                                                    "editable": false,
                                                    "children": () => [
                                                        <$Container key="p.MyFirstAIBot.Chat.container7"
                                                            $widgetId="p.MyFirstAIBot.Chat.container7"
                                                            class={DynamicClassProperty({
                                                                "staticClasses": "mx-name-container7",
                                                                "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "dataView4" }, { "type": "variable", "variable": "currentObject" } ] }, "then": { "type": "literal", "value": "chat-history-active" }, "else": { "type": "literal", "value": "" } }, "args": { "dataView4": { "widget": "$ChatContext", "source": "object" }, "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } } }
                                                            })}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$Fragment key="p.MyFirstAIBot.Chat.snippetCall2"
                                                                    $widgetId="p.MyFirstAIBot.Chat.snippetCall2"
                                                                    content={[
                                                                        <$Container key="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container4"
                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container4"
                                                                            class={"mx-name-container4 hover-trigger spacing-inner-top spacing-inner-bottom spacing-inner-left spacing-inner-right"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$Div key="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.layoutGrid6"
                                                                                    $widgetId="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.layoutGrid6"
                                                                                    class={"mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                    style={undefined}
                                                                                    content={[
                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid6$row0"
                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid6$row0"
                                                                                            class={"row align-children-center"}
                                                                                            style={undefined}
                                                                                            content={[
                                                                                                <$Div key="p.MyFirstAIBot.Chat.layoutGrid6$row0$column0"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.layoutGrid6$row0$column0"
                                                                                                    class={"col-lg col-md col"}
                                                                                                    style={undefined}
                                                                                                    content={[
                                                                                                        <$Container key="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container5"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.container5"
                                                                                                            class={"mx-name-container5 text-break-word"}
                                                                                                            style={undefined}
                                                                                                            renderMode={"div"}
                                                                                                            onClick={undefined}
                                                                                                            content={[
                                                                                                                <$Text key="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.text3"
                                                                                                                    $widgetId="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.text3"
                                                                                                                    class={"mx-name-text3 text-clamp--2-lines"}
                                                                                                                    style={undefined}
                                                                                                                    caption={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "ChatContext", "path": "Topic" }, "args": { "ChatContext": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } } }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    renderMode={"span"} />
                                                                                                            ]}
                                                                                                            ariaHidden={false} />
                                                                                                    ]} />,
                                                                                                <$Div key="p.MyFirstAIBot.Chat.layoutGrid6$row0$column1"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.layoutGrid6$row0$column1"
                                                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                                                    style={undefined}
                                                                                                    content={[
                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6$visibility"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6$visibility"
                                                                                                            visible={ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                                                            })}
                                                                                                            contents={[
                                                                                                                <$ActionButton key="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6"
                                                                                                                    $widgetId="p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6"
                                                                                                                    buttonId={"p.ConversationalUI.Snippet_ChatContext_HistorySideBar.actionButton6"}
                                                                                                                    class={"mx-name-actionButton6 btn-image show-on-hover line-height--1 spacing-outer-right"}
                                                                                                                    style={undefined}
                                                                                                                    tabIndex={undefined}
                                                                                                                    renderType={"button"}
                                                                                                                    role={undefined}
                                                                                                                    buttonClass={"btn-default"}
                                                                                                                    caption={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    tooltip={TextProperty({
                                                                                                                        "value": t([
                                                                                                                            "Delete chat"
                                                                                                                        ])
                                                                                                                    })}
                                                                                                                    icon={WebIconProperty({
                                                                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                                                                    })}
                                                                                                                    action={ActionProperty({
                                                                                                                        "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } }, "config": { "operationId": "MwJ2U+XF3l2F8DwzwZN6aQ", "progress": { "message": t([ "" ]), "modal": true }, "validate": "view", "confirmation": { "question": t([ "Are you sure you want to delete this conversation?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                        "abortOnServerValidation": true
                                                                                                                    })} />
                                                                                                            ]} />
                                                                                                    ]} />
                                                                                            ]} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ]} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]
                                                })}
                                                onClick={ListActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "p.MyFirstAIBot.Chat.listView3", "source": "object" } }, "config": { "operationId": "34X1203IIlurkOOja2vqGw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": false,
                                                    "dataSourceId": "p.2"
                                                })}
                                                pageSize={200} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />,
                            <$Div key="p.MyFirstAIBot.Chat.layoutGrid1$row0$column1"
                                $widgetId="p.MyFirstAIBot.Chat.layoutGrid1$row0$column1"
                                class={"col-lg-6 col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p.MyFirstAIBot.Chat.container3"
                                        $widgetId="p.MyFirstAIBot.Chat.container3"
                                        class={"mx-name-container3 card chat-card--full-height margin-bottom-0"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.MyFirstAIBot.Chat.container1"
                                                $widgetId="p.MyFirstAIBot.Chat.container1"
                                                class={"mx-name-container1 chat-container--center chat-container"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.container10$visibility"
                                                        $widgetId="p.MyFirstAIBot.Chat.container10$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "ChatContext" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "ChatContext", "path": "CurrentUserPrompt" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.MyFirstAIBot.Chat.container10"
                                                                $widgetId="p.MyFirstAIBot.Chat.container10"
                                                                class={"mx-name-container10 conversationstarter-container--horizontal"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Gallery key="p.MyFirstAIBot.Chat.gallery1"
                                                                        $widgetId="p.MyFirstAIBot.Chat.gallery1"
                                                                        datasource={DatabaseObjectListProperty({
                                                                            "dataSourceId": "p.5",
                                                                            "entity": "MyFirstAIBot.InitialUserPrompt",
                                                                            "scope": "p.MyFirstAIBot.Chat.dataView4",
                                                                            "operationId": "My0YdydHoV2y+TbwPz2/+w",
                                                                            "sort": [
                                                                                [
                                                                                    "Order",
                                                                                    "asc"
                                                                                ]
                                                                            ]
                                                                        })}
                                                                        itemSelectionMode={"clear"}
                                                                        content={TemplatedWidgetProperty({
                                                                            "dataSourceId": "p.5",
                                                                            "editable": false,
                                                                            "children": () => [
                                                                                <$Container key="p.MyFirstAIBot.Chat.container12"
                                                                                    $widgetId="p.MyFirstAIBot.Chat.container12"
                                                                                    class={"mx-name-container12 card conversationstarter"}
                                                                                    style={undefined}
                                                                                    tabIndex={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={ActionProperty({
                                                                                        "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true }
                                                                                    })}
                                                                                    content={[
                                                                                        <$Container key="p.MyFirstAIBot.Chat.container13"
                                                                                            $widgetId="p.MyFirstAIBot.Chat.container13"
                                                                                            class={"mx-name-container13"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton9$visibility"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.actionButton9$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "TextWriter" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$ActionButton key="p.MyFirstAIBot.Chat.actionButton9"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.actionButton9"
                                                                                                            buttonId={"p.MyFirstAIBot.Chat.actionButton9"}
                                                                                                            class={"mx-name-actionButton9 spacing-outer-bottom spacing-outer-right"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            renderType={"link"}
                                                                                                            role={"button"}
                                                                                                            buttonClass={"btn-default"}
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
                                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pen-write-paper" }
                                                                                                            })}
                                                                                                            action={ActionProperty({
                                                                                                                "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                "abortOnServerValidation": true
                                                                                                            })} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton10$visibility"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.actionButton10$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "PersonalAssistant" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$ActionButton key="p.MyFirstAIBot.Chat.actionButton10"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.actionButton10"
                                                                                                            buttonId={"p.MyFirstAIBot.Chat.actionButton10"}
                                                                                                            class={"mx-name-actionButton10 spacing-outer-bottom spacing-outer-right"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            renderType={"link"}
                                                                                                            role={"button"}
                                                                                                            buttonClass={"btn-default"}
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
                                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-task-list-multiple" }
                                                                                                            })}
                                                                                                            action={ActionProperty({
                                                                                                                "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                "abortOnServerValidation": true
                                                                                                            })} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton11$visibility"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.actionButton11$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "LinkedInWriter" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$ActionButton key="p.MyFirstAIBot.Chat.actionButton11"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.actionButton11"
                                                                                                            buttonId={"p.MyFirstAIBot.Chat.actionButton11"}
                                                                                                            class={"mx-name-actionButton11 spacing-outer-bottom spacing-outer-right"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            renderType={"link"}
                                                                                                            role={"button"}
                                                                                                            buttonClass={"btn-default"}
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
                                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-browser-trophy" }
                                                                                                            })}
                                                                                                            action={ActionProperty({
                                                                                                                "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                "abortOnServerValidation": true
                                                                                                            })} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton12$visibility"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.actionButton12$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": "BrainstormingAssistant" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$ActionButton key="p.MyFirstAIBot.Chat.actionButton12"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.actionButton12"
                                                                                                            buttonId={"p.MyFirstAIBot.Chat.actionButton12"}
                                                                                                            class={"mx-name-actionButton12 spacing-outer-bottom spacing-outer-right"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            renderType={"link"}
                                                                                                            role={"button"}
                                                                                                            buttonClass={"btn-default"}
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
                                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-robot-head" }
                                                                                                            })}
                                                                                                            action={ActionProperty({
                                                                                                                "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                "abortOnServerValidation": true
                                                                                                            })} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton13$visibility"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.actionButton13$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Category" }, { "type": "literal", "value": null } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$ActionButton key="p.MyFirstAIBot.Chat.actionButton13"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.actionButton13"
                                                                                                            buttonId={"p.MyFirstAIBot.Chat.actionButton13"}
                                                                                                            class={"mx-name-actionButton13 spacing-outer-right spacing-outer-bottom-large"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            renderType={"link"}
                                                                                                            role={"button"}
                                                                                                            buttonClass={"btn-default"}
                                                                                                            caption={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                                                                                                })
                                                                                                            ])}
                                                                                                            tooltip={TextProperty({
                                                                                                                "value": t([
                                                                                                                    ""
                                                                                                                ])
                                                                                                            })}
                                                                                                            icon={undefined}
                                                                                                            action={ActionProperty({
                                                                                                                "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                "abortOnServerValidation": true
                                                                                                            })} />
                                                                                                    ]} />,
                                                                                                <$Text key="p.MyFirstAIBot.Chat.text8"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.text8"
                                                                                                    class={"mx-name-text8 text-small text-break text-primary text-semibold spacing-outer-bottom"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Header" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } } }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]}
                                                                                    ariaHidden={false} />
                                                                            ]
                                                                        })}
                                                                        desktopItems={4}
                                                                        tabletItems={2}
                                                                        phoneItems={2}
                                                                        pageSize={20}
                                                                        pagination={"buttons"}
                                                                        pagingPosition={"bottom"}
                                                                        showEmptyPlaceholder={"none"}
                                                                        emptyPlaceholder={undefined}
                                                                        itemClass={undefined}
                                                                        onClickTrigger={"single"}
                                                                        onClick={ListActionProperty({
                                                                            "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" }, "InitialUserPrompt": { "widget": "p.MyFirstAIBot.Chat.gallery1", "source": "object" } }, "config": { "operationId": "H0btJ6gdB1aaz4QiWiqRCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                            "abortOnServerValidation": false,
                                                                            "dataSourceId": "p.5",
                                                                            "argumentTypes": { }
                                                                        })}
                                                                        onSelectionChange={undefined}
                                                                        filtersPlaceholder={undefined}
                                                                        filterSectionTitle={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        emptyMessageTitle={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        ariaLabelListBox={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        showTotalCount={false}
                                                                        showPagingButtons={"always"}
                                                                        loadMoreButtonCaption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        stateStorageType={"attribute"}
                                                                        storeFilters={true}
                                                                        storeSort={true}
                                                                        ariaLabelItem={t([
                                                                            undefined
                                                                        ])}
                                                                        keepSelection={false}
                                                                        selectionCountPosition={"bottom"}
                                                                        clearSelectionButtonLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        refreshIndicator={false}
                                                                        selectedCountTemplateSingular={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "%d item selected" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        selectedCountTemplatePlural={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "%d items selected" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        class={"mx-name-gallery1 gallery-hide-paging"}
                                                                        style={undefined}
                                                                        tabIndex={undefined} />
                                                                ]}
                                                                ariaHidden={false} />
                                                        ]} />,
                                                    <$Fragment key="p.MyFirstAIBot.Chat.snippetCall1"
                                                        $widgetId="p.MyFirstAIBot.Chat.snippetCall1"
                                                        content={[
                                                            <$Container key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container15"
                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container15"
                                                                class={"mx-name-container15 chat-container"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Container key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container1"
                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container1"
                                                                        class={"mx-name-container1 messages-container spacing-outer-bottom"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$ListView key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4"
                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4"
                                                                                class={"mx-name-listView4 listview-scroll-to-last chat-listview-stylingless listview-hide-on-empty"}
                                                                                style={undefined}
                                                                                listValue={DatabaseObjectListProperty({
                                                                                    "dataSourceId": "p.16",
                                                                                    "entity": "ConversationalUI.Message",
                                                                                    "scope": "$ChatContext",
                                                                                    "operationId": "YwWxk2+rDVaKmwmQ5wTmGA",
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
                                                                                    "dataSourceId": "p.16",
                                                                                    "editable": false,
                                                                                    "children": () => [
                                                                                        <$Fragment key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall1"
                                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall1"
                                                                                            content={[
                                                                                                <$Container key="p.ConversationalUI.Snippet_Message.container13"
                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message.container13"
                                                                                                    class={DynamicClassProperty({
                                                                                                        "staticClasses": "mx-name-container13 hover-trigger",
                                                                                                        "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "literal", "value": "message--assistant" }, "else": { "type": "literal", "value": "message--user" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                    })}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Container key="p.ConversationalUI.Snippet_Message.container14"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message.container14"
                                                                                                            class={"mx-name-container14 spacing-outer-bottom"}
                                                                                                            style={undefined}
                                                                                                            renderMode={"div"}
                                                                                                            onClick={undefined}
                                                                                                            content={[
                                                                                                                <$Div key="p.ConversationalUI.Snippet_Message.layoutGrid1"
                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message.layoutGrid1"
                                                                                                                    class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                                    style={undefined}
                                                                                                                    content={[
                                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid1$row0.111"
                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid1$row0.111"
                                                                                                                            class={"row align-children-center"}
                                                                                                                            style={undefined}
                                                                                                                            content={[
                                                                                                                                <$Div key="p.MyFirstAIBot.Chat.layoutGrid1$row0$column0.112"
                                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.layoutGrid1$row0$column0.112"
                                                                                                                                    class={"col-lg-auto col-md-auto col-auto"}
                                                                                                                                    style={undefined}
                                                                                                                                    content={[
                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_Message.text6"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message.text6"
                                                                                                                                            class={DynamicClassProperty({
                                                                                                                                                "staticClasses": "mx-name-text6 spacing-outer-bottom-none",
                                                                                                                                                "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "literal", "value": "text-primary" }, "else": { "type": "literal", "value": "" } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                                                            })}
                                                                                                                                            style={undefined}
                                                                                                                                            caption={t([
                                                                                                                                                ExpressionProperty({
                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "literal", "value": "Assistant" }, "else": { "type": "literal", "value": "You" } }, { "type": "literal", "value": " " } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                                                                })
                                                                                                                                            ])}
                                                                                                                                            renderMode={"h5"} />
                                                                                                                                    ]} />,
                                                                                                                                <$Div key="p.MyFirstAIBot.Chat.layoutGrid1$row0$column1.115"
                                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.layoutGrid1$row0$column1.115"
                                                                                                                                    class={"col-lg col-md col"}
                                                                                                                                    style={undefined}
                                                                                                                                    content={[
                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_Message.text2"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message.text2"
                                                                                                                                            class={"mx-name-text2 show-on-hover text-small text-light text-detail"}
                                                                                                                                            style={undefined}
                                                                                                                                            caption={t([
                                                                                                                                                ExpressionProperty({
                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Message", "path": "createdDate" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                                                                })
                                                                                                                                            ])}
                                                                                                                                            renderMode={"span"} />
                                                                                                                                    ]} />
                                                                                                                            ]} />
                                                                                                                    ]} />
                                                                                                            ]}
                                                                                                            ariaHidden={false} />,
                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message.container11$visibility"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message.container11$visibility"
                                                                                                            visible={ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Success" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                            })}
                                                                                                            contents={[
                                                                                                                <$Container key="p.ConversationalUI.Snippet_Message.container11"
                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message.container11"
                                                                                                                    class={"mx-name-container11"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$Fragment key="p.ConversationalUI.Snippet_Message.snippetCall3"
                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message.snippetCall3"
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
                                                                                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "user" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, { "type": "literal", "value": false } ] } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                                                            })}
                                                                                                                                            contents={[
                                                                                                                                                <$Text key="p.ConversationalUI.Snippet_Message_Content.text8"
                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Content.text8"
                                                                                                                                                    class={"mx-name-text8"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    caption={t([
                                                                                                                                                        ExpressionProperty({
                                                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "Message", "path": "Content" }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                                                                        })
                                                                                                                                                    ])}
                                                                                                                                                    renderMode={"span"} />
                                                                                                                                            ]} />,
                                                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility"
                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_Content.markdownViewer1$formGroup$visibility"
                                                                                                                                            visible={ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "constant", "name": "ConversationalUI.EnableMarkdownViewer" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
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
                                                                                                                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
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
                                                                                                                        <$Fragment key="p.ConversationalUI.Snippet_Message.snippetCall1"
                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message.snippetCall1"
                                                                                                                            content={[
                                                                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_Sources.accordion1$visibility"
                                                                                                                                    visible={ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Role" }, { "type": "literal", "value": "assistant" } ] }, "then": { "type": "variable", "variable": "Message", "path": "HasSources" }, "else": { "type": "literal", "value": false } }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
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
                                                                                                                                                                <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0"
                                                                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0"
                                                                                                                                                                    class={"row align-children-center"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    content={[
                                                                                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0$column0"
                                                                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0$column0"
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
                                                                                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0$column1"
                                                                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0$column1"
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
                                                                                                                                                                "dataSourceId": "p.17",
                                                                                                                                                                "entity": "ConversationalUI.Source",
                                                                                                                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
                                                                                                                                                                "operationId": "JP103s4dE1WmtXXqbIwZwQ"
                                                                                                                                                            })}
                                                                                                                                                            itemTemplate={TemplatedWidgetProperty({
                                                                                                                                                                "dataSourceId": "p.17",
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
                                                                                                                            ]} />
                                                                                                                    ]}
                                                                                                                    ariaHidden={false} />
                                                                                                            ]} />,
                                                                                                        <$Fragment key="p.ConversationalUI.Snippet_Message.snippetCall2"
                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message.snippetCall2"
                                                                                                            content={[
                                                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility"
                                                                                                                    $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2$visibility"
                                                                                                                    visible={ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Error" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
                                                                                                                    })}
                                                                                                                    contents={[
                                                                                                                        <$Div key="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2"
                                                                                                                            $widgetId="p.ConversationalUI.Snippet_Message_StatusHandling.layoutGrid2"
                                                                                                                            class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                                            style={undefined}
                                                                                                                            content={[
                                                                                                                                <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0.157"
                                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0.157"
                                                                                                                                    class={"row align-children-center"}
                                                                                                                                    style={undefined}
                                                                                                                                    content={[
                                                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.158"
                                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.158"
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
                                                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.161"
                                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.161"
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
                                                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Message", "path": "Status" }, { "type": "literal", "value": "Loading" } ] }, "args": { "Message": { "widget": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4", "source": "object" } } }
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
                                                                                            ]} />,
                                                                                        <$Container key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container8"
                                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.container8"
                                                                                            class={"mx-name-container8 w-100 border spacing-outer-top-medium"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={undefined}
                                                                                            ariaHidden={false} />,
                                                                                        <$Events key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.events1"
                                                                                            $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.events1"
                                                                                            onComponentLoad={ActionProperty({
                                                                                                "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ScrollToBottom, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                                                "argumentTypes": { }
                                                                                            })}
                                                                                            componentLoadDelay={0}
                                                                                            componentLoadRepeat={false}
                                                                                            componentLoadRepeatInterval={30000}
                                                                                            onEventChangeAttribute={AttributeProperty({
                                                                                                "scope": "p.ConversationalUI.Snippet_ChatContext_ConversationalUI.listView4",
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
                                                                    <$Fragment key="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall3"
                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_ConversationalUI.snippetCall3"
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
                                                                                                    "dataSourceId": "p.20",
                                                                                                    "entity": "ConversationalUI.SuggestedUserPrompt",
                                                                                                    "scope": "$ChatContext",
                                                                                                    "operationId": "l4+rJL1i4Vq1jJYGN/JIZA"
                                                                                                })}
                                                                                                itemTemplate={TemplatedWidgetProperty({
                                                                                                    "dataSourceId": "p.20",
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
                                        ariaHidden={false} />
                                ]} />,
                            <$Div key="p.MyFirstAIBot.Chat.layoutGrid1$row0$column2"
                                $widgetId="p.MyFirstAIBot.Chat.layoutGrid1$row0$column2"
                                class={"col-lg-3 col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p.MyFirstAIBot.Chat.container4"
                                        $widgetId="p.MyFirstAIBot.Chat.container4"
                                        class={"mx-name-container4 card"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$FormGroup key="p.MyFirstAIBot.Chat.comboBox1$formGroup"
                                                $widgetId="p.MyFirstAIBot.Chat.comboBox1$formGroup"
                                                class={"mx-name-comboBox1"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.MyFirstAIBot.Chat.comboBox1"
                                                        $widgetId="p.MyFirstAIBot.Chat.comboBox1"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MyFirstAIBot.BotConfig",
                                                            "attribute": "DisplayName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.27",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "ConversationalUI.ChatContext",
                                                            "path": "",
                                                            "attribute": "ConversationalUI.ChatContext_ProviderConfig_Active",
                                                            "endpointEntity": "MyFirstAIBot.BotConfig",
                                                            "selectableObjectsId": "p.27",
                                                            "scope": "p.MyFirstAIBot.Chat.dataView4",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.27",
                                                            "entity": "MyFirstAIBot.BotConfig",
                                                            "scope": "p.MyFirstAIBot.Chat.dataView4",
                                                            "operationId": "b9qh+6X5HliXMfVWTcKoyg",
                                                            "sort": [
                                                                [
                                                                    "DisplayName",
                                                                    "asc"
                                                                ]
                                                            ],
                                                            "constraints": { "type": "attribute", "attribute": "IsSelectable", "context": "MyFirstAIBot.BotConfig", "attributeType": "Boolean" }
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                        staticDataSourceCustomContentType={"no"}
                                                        showFooter={false}
                                                        menuFooterContent={undefined}
                                                        selectionMethod={"checkbox"}
                                                        selectedItemsStyle={"text"}
                                                        selectAllButton={false}
                                                        selectAllButtonCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                            })
                                                        ])}
                                                        readOnlyStyle={"text"}
                                                        onChangeEvent={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "vUHf3Rfd2lu/Cldii/MyqA", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                            "argumentTypes": { }
                                                        })}
                                                        onEnterEvent={undefined}
                                                        onLeaveEvent={undefined}
                                                        ariaRequired={false}
                                                        clearButtonAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                            })
                                                        ])}
                                                        removeValueAriaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11ySelectedValue={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yOptionsAvailable={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                            })
                                                        ])}
                                                        a11yInstructions={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                            })
                                                        ])}
                                                        lazyLoading={true}
                                                        loadingType={"spinner"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MyFirstAIBot.Chat.comboBox1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Configuration" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstAIBot.Chat.comboBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.MyFirstAIBot.Chat.comboBox1"
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.container5$visibility"
                                                $widgetId="p.MyFirstAIBot.Chat.container5$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "ChatContext", "path": "ConversationalUI.ChatContext_ProviderConfig_Active" }, { "type": "literal", "value": null } ] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.MyFirstAIBot.Chat.container5"
                                                        $widgetId="p.MyFirstAIBot.Chat.container5"
                                                        class={"mx-name-container5"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$DataView key="p.MyFirstAIBot.Chat.dataView5"
                                                                $widgetId="p.MyFirstAIBot.Chat.dataView5"
                                                                class={"mx-name-dataView5 spacing-outer-bottom-medium form-vertical"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                object={MicroflowObjectProperty({
                                                                    "dataSourceId": "p.216",
                                                                    "scope": "p.MyFirstAIBot.Chat.dataView4",
                                                                    "editable": true,
                                                                    "operationId": "ilmqUf1S/FCmwP20WRQoHg",
                                                                    "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }
                                                                })}
                                                                emptyMessage={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                body={[
                                                                    <$FormGroup key="p.MyFirstAIBot.Chat.referenceSelector2$formGroup"
                                                                        $widgetId="p.MyFirstAIBot.Chat.referenceSelector2$formGroup"
                                                                        class={"mx-name-referenceSelector2 spacing-outer-bottom-none"}
                                                                        style={undefined}
                                                                        control={[
                                                                            <$Combobox key="p.MyFirstAIBot.Chat.referenceSelector2"
                                                                                $widgetId="p.MyFirstAIBot.Chat.referenceSelector2"
                                                                                source={"context"}
                                                                                optionsSourceType={"association"}
                                                                                optionsSourceDatabaseDataSource={undefined}
                                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                                optionsSourceDatabaseDefaultValue={undefined}
                                                                                attributeAssociation={AssociationProperty({
                                                                                    "type": "Reference",
                                                                                    "entity": "MyFirstAIBot.ContextExtension",
                                                                                    "path": "",
                                                                                    "attribute": "MyFirstAIBot.ContextExtension_Instruction",
                                                                                    "endpointEntity": "MyFirstAIBot.Instruction",
                                                                                    "selectableObjectsId": "p.28",
                                                                                    "scope": "p.MyFirstAIBot.Chat.dataView5",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                                })}
                                                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                                                    "dataSourceId": "p.28",
                                                                                    "entity": "MyFirstAIBot.Instruction",
                                                                                    "scope": "p.MyFirstAIBot.Chat.dataView5",
                                                                                    "operationId": "YBSvIPiAPFaeItMOJYFlzg",
                                                                                    "sort": [],
                                                                                    "constraints": { "type": "function", "name": "or", "parameters": [ { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "IsCustom", "context": "MyFirstAIBot.Instruction", "attributeType": "Boolean" }, { "type": "literal", "value": false } ] }, { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "System.owner", "context": "MyFirstAIBot.Instruction", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" } ] } ] }
                                                                                })}
                                                                                optionsSourceAssociationCaptionType={"attribute"}
                                                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "MyFirstAIBot.Instruction",
                                                                                    "attribute": "DisplayName",
                                                                                    "attributeType": "String",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.28",
                                                                                    "isList": false
                                                                                })}
                                                                                optionsSourceAssociationCaptionExpression={undefined}
                                                                                optionsSourceStaticDataSource={[]}
                                                                                emptyOptionText={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                filterType={"contains"}
                                                                                noOptionsText={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                clearable={true}
                                                                                optionsSourceAssociationCustomContentType={"no"}
                                                                                optionsSourceAssociationCustomContent={undefined}
                                                                                optionsSourceDatabaseCustomContentType={"no"}
                                                                                staticDataSourceCustomContentType={"no"}
                                                                                showFooter={false}
                                                                                menuFooterContent={undefined}
                                                                                selectionMethod={"rowclick"}
                                                                                selectedItemsStyle={"text"}
                                                                                selectAllButton={false}
                                                                                selectAllButtonCaption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                readOnlyStyle={"text"}
                                                                                onChangeEvent={undefined}
                                                                                onEnterEvent={undefined}
                                                                                onLeaveEvent={undefined}
                                                                                ariaRequired={false}
                                                                                clearButtonAriaLabel={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                removeValueAriaLabel={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                a11ySelectedValue={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                a11yOptionsAvailable={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                a11yInstructions={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                lazyLoading={true}
                                                                                loadingType={"spinner"}
                                                                                tabIndex={undefined}
                                                                                id={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.MyFirstAIBot.Chat.referenceSelector2"
                                                                                })} />
                                                                        ]}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Instructions" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.MyFirstAIBot.Chat.referenceSelector2"
                                                                        })}
                                                                        width={undefined}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.MyFirstAIBot.Chat.referenceSelector2"
                                                                        })} />,
                                                                    <$DataView key="p.MyFirstAIBot.Chat.dataView2"
                                                                        $widgetId="p.MyFirstAIBot.Chat.dataView2"
                                                                        class={"mx-name-dataView2 form-horizontal"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        object={AssociationObjectProperty({
                                                                            "dataSourceId": "p.222",
                                                                            "scope": "p.MyFirstAIBot.Chat.dataView5",
                                                                            "editable": true,
                                                                            "path": "MyFirstAIBot.ContextExtension_Instruction/MyFirstAIBot.Instruction",
                                                                            "operationId": "l/8cif6YAVKWOGlYIYfD7w"
                                                                        })}
                                                                        emptyMessage={TextProperty({
                                                                            "value": t([
                                                                                ""
                                                                            ])
                                                                        })}
                                                                        body={[
                                                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.container8$visibility"
                                                                                $widgetId="p.MyFirstAIBot.Chat.container8$visibility"
                                                                                visible={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "dataView5", "path": "MyFirstAIBot.ContextExtension_Instruction" }, { "type": "literal", "value": null } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView2", "source": "object" }, "dataView5": { "widget": "p.MyFirstAIBot.Chat.dataView5", "source": "object" } } }
                                                                                })}
                                                                                contents={[
                                                                                    <$Container key="p.MyFirstAIBot.Chat.container8"
                                                                                        $widgetId="p.MyFirstAIBot.Chat.container8"
                                                                                        class={"mx-name-container8 textinput-no-padding"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$FormGroup key="p.MyFirstAIBot.Chat.textArea2$formGroup"
                                                                                                $widgetId="p.MyFirstAIBot.Chat.textArea2$formGroup"
                                                                                                class={"mx-name-textArea2 spacing-outer-bottom-none spacing-outer-top-medium mx-textarea"}
                                                                                                style={undefined}
                                                                                                control={[
                                                                                                    <$TextArea key="p.MyFirstAIBot.Chat.textArea2"
                                                                                                        $widgetId="p.MyFirstAIBot.Chat.textArea2"
                                                                                                        inputValue={AttributeProperty({
                                                                                                            "scope": "p.MyFirstAIBot.Chat.dataView2",
                                                                                                            "path": "",
                                                                                                            "entity": "MyFirstAIBot.Instruction",
                                                                                                            "attribute": "Instruction",
                                                                                                            "onChange": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "p.MyFirstAIBot.Chat.dataView2", "source": "object" } }, "config": { "operationId": "rujWornrYlmUJBZrE5lMRQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                                                            "isList": false,
                                                                                                            "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsCustom" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView2", "source": "object" } } },
                                                                                                            "validation": null
                                                                                                        })}
                                                                                                        counterMessage={undefined}
                                                                                                        maxLength={undefined}
                                                                                                        numberOfLines={undefined}
                                                                                                        autoGrow={true}
                                                                                                        placeholder={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        readOnlyStyle={"text"}
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
                                                                                                        submitDelay={300}
                                                                                                        tabIndex={undefined}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.MyFirstAIBot.Chat.textArea2"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={undefined}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.MyFirstAIBot.Chat.textArea2"
                                                                                                })}
                                                                                                width={3}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.MyFirstAIBot.Chat.textArea2"
                                                                                                })} />
                                                                                        ]}
                                                                                        ariaHidden={false} />
                                                                                ]} />
                                                                        ]}
                                                                        hideFooter={false}
                                                                        footer={undefined} />,
                                                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton2$visibility"
                                                                        $widgetId="p.MyFirstAIBot.Chat.actionButton2$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.MyFirstAIBot.Chat.actionButton2"
                                                                                $widgetId="p.MyFirstAIBot.Chat.actionButton2"
                                                                                buttonId={"p.MyFirstAIBot.Chat.actionButton2"}
                                                                                class={"mx-name-actionButton2 pull-right"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"link"}
                                                                                role={"button"}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Create custom.." }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "ContextExtension": { "widget": "p.MyFirstAIBot.Chat.dataView5", "source": "object" } }, "config": { "operationId": "9BYJWXZpOFqESz3Q+LUp2Q", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]}
                                                                hideFooter={false}
                                                                footer={undefined} />,
                                                            <$Fragment key="p.MyFirstAIBot.Chat.snippetCall3"
                                                                $widgetId="p.MyFirstAIBot.Chat.snippetCall3"
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1$visibility"
                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "ChatContext" }, { "type": "literal", "value": null } ] }, "args": { "ChatContext": { "widget": "$ChatContext", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$DataView key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1"
                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1"
                                                                                class={"mx-name-dataView1 form-vertical"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                object={MicroflowObjectProperty({
                                                                                    "dataSourceId": "p.235",
                                                                                    "scope": "$ChatContext",
                                                                                    "editable": true,
                                                                                    "operationId": "iXa5MJ4DDlupT8C/5vT4VA",
                                                                                    "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }
                                                                                })}
                                                                                emptyMessage={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                body={[
                                                                                    <$Container key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container15"
                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container15"
                                                                                        class={"mx-name-container15"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Container key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container1"
                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.container1"
                                                                                                class={"mx-name-container1 form-group no-columns row-left spacing-outer-bottom-none"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.text1"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.text1"
                                                                                                        class={"mx-name-text1 control-label"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Temperature" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />,
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$ActionButton key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1"
                                                                                                                buttonId={"p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.actionButton1"}
                                                                                                                class={"mx-name-actionButton1 btn-sm spacing-outer-left"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined}
                                                                                                                renderType={"link"}
                                                                                                                role={"button"}
                                                                                                                buttonClass={"btn-default"}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                tooltip={TextProperty({
                                                                                                                    "value": t([
                                                                                                                        "Controls randomness. Lowering the temperature means that the model will produce more repetitive and deterministic responses. Increasing the temperature will result in more unexpected or creative responses."
                                                                                                                    ])
                                                                                                                })}
                                                                                                                icon={WebIconProperty({
                                                                                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-info-sign" }
                                                                                                                })}
                                                                                                                action={ActionProperty({
                                                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNwU6JsCtFehGaPFjDkTYg", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                    "abortOnServerValidation": true
                                                                                                                })} />
                                                                                                        ]} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$FormGroup key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1$formGroup"
                                                                                                $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1$formGroup"
                                                                                                class={"mx-name-slider1"}
                                                                                                style={undefined}
                                                                                                control={[
                                                                                                    <$Slider key="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                                                        valueAttribute={AttributeProperty({
                                                                                                            "scope": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "ConversationalUI.AdvancedSettings",
                                                                                                            "attribute": "Temperature",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false
                                                                                                        })}
                                                                                                        advanced={false}
                                                                                                        minValueType={"dynamic"}
                                                                                                        staticMinimumValue={DecimalProperty({
                                                                                                            "value": "0"
                                                                                                        })}
                                                                                                        minAttribute={AttributeProperty({
                                                                                                            "scope": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "ConversationalUI.AdvancedSettings",
                                                                                                            "attribute": "TemperatureMin",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false
                                                                                                        })}
                                                                                                        expressionMinimumValue={undefined}
                                                                                                        maxValueType={"dynamic"}
                                                                                                        staticMaximumValue={DecimalProperty({
                                                                                                            "value": "100"
                                                                                                        })}
                                                                                                        maxAttribute={AttributeProperty({
                                                                                                            "scope": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.dataView1",
                                                                                                            "path": "",
                                                                                                            "entity": "ConversationalUI.AdvancedSettings",
                                                                                                            "attribute": "TemperatureMax",
                                                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                            "isList": false
                                                                                                        })}
                                                                                                        expressionMaximumValue={undefined}
                                                                                                        stepSizeType={"static"}
                                                                                                        stepValue={DecimalProperty({
                                                                                                            "value": "0.01"
                                                                                                        })}
                                                                                                        expressionStepSize={undefined}
                                                                                                        showTooltip={true}
                                                                                                        tooltipType={"value"}
                                                                                                        tooltip={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        tooltipAlwaysVisible={false}
                                                                                                        noOfMarkers={0}
                                                                                                        decimalPlaces={0}
                                                                                                        orientation={"horizontal"}
                                                                                                        heightUnit={"percentage"}
                                                                                                        height={100}
                                                                                                        onChange={ActionProperty({
                                                                                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "dNwU6JsCtFehGaPFjDkTYg", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                                                                                            "argumentTypes": { }
                                                                                                        })}
                                                                                                        tabIndex={undefined}
                                                                                                        id={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                                                        })} />
                                                                                                ]}
                                                                                                caption={undefined}
                                                                                                labelFor={DerivedUniqueIdProperty({
                                                                                                    "widgetId": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                                                })}
                                                                                                width={undefined}
                                                                                                orientation={"vertical"}
                                                                                                hasError={ValidationProperty({
                                                                                                    "inputWidgetId": "p.ConversationalUI.Snippet_ChatContext_AdvancedSettings.slider1"
                                                                                                })} />
                                                                                        ]}
                                                                                        ariaHidden={false} />
                                                                                ]}
                                                                                hideFooter={false}
                                                                                footer={undefined} />
                                                                        ]} />
                                                                ]} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$DataView key="p.MyFirstAIBot.Chat.dataView3"
                                        $widgetId="p.MyFirstAIBot.Chat.dataView3"
                                        class={"mx-name-dataView3 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.248",
                                            "scope": "$ChatContext",
                                            "editable": true,
                                            "path": "ConversationalUI.ChatContext_ProviderConfig_Active/MyFirstAIBot.BotConfig",
                                            "operationId": "F0YETRRL8V2l39VkazMC+A"
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.container6$visibility"
                                                $widgetId="p.MyFirstAIBot.Chat.container6$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView3", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.MyFirstAIBot.Chat.container6"
                                                        $widgetId="p.MyFirstAIBot.Chat.container6"
                                                        class={"mx-name-container6 card margin-bottom-0"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.MyFirstAIBot.Chat.text2"
                                                                $widgetId="p.MyFirstAIBot.Chat.text2"
                                                                class={"mx-name-text2 text-semibold"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Ask the document" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.text30$visibility"
                                                                $widgetId="p.MyFirstAIBot.Chat.text30$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" } ] } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView3", "source": "object" } } }
                                                                })}
                                                                contents={[
                                                                    <$Text key="p.MyFirstAIBot.Chat.text30"
                                                                        $widgetId="p.MyFirstAIBot.Chat.text30"
                                                                        class={"mx-name-text30"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Be aware that only .pdf files can be uploaded for OpenAI or Mistral models." }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"p"} />
                                                                ]} />,
                                                            <$DataView key="p.MyFirstAIBot.Chat.dataView1"
                                                                $widgetId="p.MyFirstAIBot.Chat.dataView1"
                                                                class={"mx-name-dataView1 form-vertical"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                object={MicroflowObjectProperty({
                                                                    "dataSourceId": "p.259",
                                                                    "scope": "p.MyFirstAIBot.Chat.dataView3",
                                                                    "editable": true,
                                                                    "operationId": "NwzrlvysTVWzQmpU6ZpDZA",
                                                                    "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }
                                                                })}
                                                                emptyMessage={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                body={[
                                                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.container14$visibility"
                                                                        $widgetId="p.MyFirstAIBot.Chat.container14$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": ">", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "1" } ] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "dataView3", "path": "Architecture" }, { "type": "literal", "value": "Azure" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "dataView3", "path": "Architecture" }, { "type": "literal", "value": "Mistral" } ] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" }, "dataView3": { "widget": "p.MyFirstAIBot.Chat.dataView3", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.MyFirstAIBot.Chat.container14"
                                                                                $widgetId="p.MyFirstAIBot.Chat.container14"
                                                                                class={"mx-name-container14 alert alert-info"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Text key="p.MyFirstAIBot.Chat.text32"
                                                                                        $widgetId="p.MyFirstAIBot.Chat.text32"
                                                                                        class={"mx-name-text32 alert-description"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "The selected model only supports one document, thus only the first will be taken into account." }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"p"} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton5$visibility"
                                                                        $widgetId="p.MyFirstAIBot.Chat.actionButton5$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "SupportsMultipleFiles" }, "then": { "type": "function", "name": "<", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "5" } ] }, "else": { "type": "literal", "value": false } } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.MyFirstAIBot.Chat.actionButton5"
                                                                                $widgetId="p.MyFirstAIBot.Chat.actionButton5"
                                                                                buttonId={"p.MyFirstAIBot.Chat.actionButton5"}
                                                                                class={"mx-name-actionButton5 spacing-outer-bottom-medium spacing-inner-top"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"link"}
                                                                                role={"button"}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Upload File" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={WebIconProperty({
                                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-move-up" }
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "fecU+SyJ4lyIsbDy6T4g6A", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.listView1$visibility"
                                                                        $widgetId="p.MyFirstAIBot.Chat.listView1$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": ">", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NumberOfDocuments" }, { "type": "literalNumeric", "value": "0" } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ListView key="p.MyFirstAIBot.Chat.listView1"
                                                                                $widgetId="p.MyFirstAIBot.Chat.listView1"
                                                                                class={"mx-name-listView1 listview-stylingless"}
                                                                                style={undefined}
                                                                                listValue={MicroflowObjectListProperty({
                                                                                    "argMap": { "DocumentDisplay": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } },
                                                                                    "dataSourceId": "p.35",
                                                                                    "entity": "MyFirstAIBot.AttachedDocument",
                                                                                    "scope": "p.MyFirstAIBot.Chat.dataView1",
                                                                                    "operationId": "OaCDFTzYWF2vZHxTQSUfKw"
                                                                                })}
                                                                                itemTemplate={TemplatedWidgetProperty({
                                                                                    "dataSourceId": "p.35",
                                                                                    "editable": false,
                                                                                    "children": () => [
                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2"
                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2"
                                                                                            class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-bottom"}
                                                                                            style={undefined}
                                                                                            content={[
                                                                                                <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0.271"
                                                                                                    $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0.271"
                                                                                                    class={"row"}
                                                                                                    style={undefined}
                                                                                                    content={[
                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.272"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0$column0.272"
                                                                                                            class={"col-lg-auto col-md col"}
                                                                                                            style={undefined}
                                                                                                            content={[
                                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.image1$visibility"
                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.image1$visibility"
                                                                                                                    visible={ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "function", "name": "endsWith", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Name" }, { "type": "literal", "value": ".pdf" } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" } } }
                                                                                                                    })}
                                                                                                                    contents={[
                                                                                                                        <$Image key="p.MyFirstAIBot.Chat.image1"
                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.image1"
                                                                                                                            datasource={"icon"}
                                                                                                                            imageObject={undefined}
                                                                                                                            defaultImageDynamic={undefined}
                                                                                                                            imageUrl={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                            ])}
                                                                                                                            imageIcon={WebIconProperty({
                                                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-file-pdf" }
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
                                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.image2$visibility"
                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.image2$visibility"
                                                                                                                    visible={ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "endsWith", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Name" }, { "type": "literal", "value": ".pdf" } ] } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" } } }
                                                                                                                    })}
                                                                                                                    contents={[
                                                                                                                        <$Image key="p.MyFirstAIBot.Chat.image2"
                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.image2"
                                                                                                                            datasource={"icon"}
                                                                                                                            imageObject={undefined}
                                                                                                                            defaultImageDynamic={undefined}
                                                                                                                            imageUrl={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                            ])}
                                                                                                                            imageIcon={WebIconProperty({
                                                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-document" }
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
                                                                                                                            class={"mx-name-image2"}
                                                                                                                            style={undefined}
                                                                                                                            tabIndex={undefined} />
                                                                                                                    ]} />
                                                                                                            ]} />,
                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.279"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0$column1.279"
                                                                                                            class={"col-lg col-md col"}
                                                                                                            style={undefined}
                                                                                                            content={[
                                                                                                                <$Text key="p.MyFirstAIBot.Chat.text1"
                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.text1"
                                                                                                                    class={"mx-name-text1"}
                                                                                                                    style={undefined}
                                                                                                                    caption={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" } } }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    renderMode={"span"} />
                                                                                                            ]} />,
                                                                                                        <$Div key="p.MyFirstAIBot.Chat.layoutGrid2$row0$column2"
                                                                                                            $widgetId="p.MyFirstAIBot.Chat.layoutGrid2$row0$column2"
                                                                                                            class={"col-lg-auto col-md col"}
                                                                                                            style={undefined}
                                                                                                            content={[
                                                                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.actionButton3$visibility"
                                                                                                                    $widgetId="p.MyFirstAIBot.Chat.actionButton3$visibility"
                                                                                                                    visible={ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                                                                                    })}
                                                                                                                    contents={[
                                                                                                                        <$ActionButton key="p.MyFirstAIBot.Chat.actionButton3"
                                                                                                                            $widgetId="p.MyFirstAIBot.Chat.actionButton3"
                                                                                                                            buttonId={"p.MyFirstAIBot.Chat.actionButton3"}
                                                                                                                            class={"mx-name-actionButton3 spacing-outer-right spacing-outer-left pull-right"}
                                                                                                                            style={undefined}
                                                                                                                            tabIndex={undefined}
                                                                                                                            renderType={"link"}
                                                                                                                            role={"button"}
                                                                                                                            buttonClass={"btn-default"}
                                                                                                                            caption={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                })
                                                                                                                            ])}
                                                                                                                            tooltip={TextProperty({
                                                                                                                                "value": t([
                                                                                                                                    "Remove PDF from chat"
                                                                                                                                ])
                                                                                                                            })}
                                                                                                                            icon={WebIconProperty({
                                                                                                                                "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                                                                                            })}
                                                                                                                            action={ActionProperty({
                                                                                                                                "action": { "type": "callMicroflow", "argMap": { "AttachedDocument": { "widget": "p.MyFirstAIBot.Chat.listView1", "source": "object" }, "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "dBiexq9fTlWWTqYJ2QA5Ng", "validate": "view", "confirmation": { "question": t([ "Are you sure to remove the file from the chat?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                                                                                "abortOnServerValidation": true
                                                                                                                            })} />
                                                                                                                    ]} />
                                                                                                            ]} />
                                                                                                    ]} />
                                                                                            ]} />
                                                                                    ]
                                                                                })}
                                                                                onClick={undefined}
                                                                                pageSize={10} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Chat.container11$visibility"
                                                                        $widgetId="p.MyFirstAIBot.Chat.container11$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ContentLength" }, { "type": "literal", "value": null } ] }, "then": { "type": "function", "name": ">=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ContentLength" }, { "type": "literalNumeric", "value": "25000" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.Chat.dataView1", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.MyFirstAIBot.Chat.container11"
                                                                                $widgetId="p.MyFirstAIBot.Chat.container11"
                                                                                class={"mx-name-container11 alert alert-warning"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Text key="p.MyFirstAIBot.Chat.text4"
                                                                                        $widgetId="p.MyFirstAIBot.Chat.text4"
                                                                                        class={"mx-name-text4 alert-title"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Long PDF" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"h5"} />,
                                                                                    <$Text key="p.MyFirstAIBot.Chat.text5"
                                                                                        $widgetId="p.MyFirstAIBot.Chat.text5"
                                                                                        class={"mx-name-text5 alert-description"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Be aware that chatting with long PDFs might decrease the chat experience (reducing the accuracy or preventing the model to generate a response)." }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />,
                                                                    <$Container key="p.MyFirstAIBot.Chat.container9"
                                                                        $widgetId="p.MyFirstAIBot.Chat.container9"
                                                                        class={"mx-name-container9 info spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={undefined}
                                                                        ariaHidden={false} />
                                                                ]}
                                                                hideFooter={false}
                                                                footer={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        hideFooter={false}
                                        footer={undefined} />
                                ]} />
                        ]} />
                ]} />
        ]}
        hideFooter={true}
        footer={undefined} />
]}</PageFragment>);

export const title = t([
    "Chat"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar custom-height-fix";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
