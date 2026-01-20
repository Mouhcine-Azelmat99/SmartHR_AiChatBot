import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import * as MarkdownWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/markdown/Markdown.mjs";
const Markdown = Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "Markdown")?.value || Object.getOwnPropertyDescriptor(MarkdownWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/markdown/Markdown.css";
import { Text } from "mendix/widgets/web/Text";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/ConversationalUI.Layout_SlideIn.js";
import { ACT_Trace_CloseSlideIn } from "../nanoflows/ConversationalUI.ACT_Trace_CloseSlideIn.js";
import { ACT_KnowledgeBaseSpan_CopyInput } from "../nanoflows/ConversationalUI.ACT_KnowledgeBaseSpan_CopyInput.js";
import { ACT_KnowledgeBaseSpan_CopyOutput } from "../nanoflows/ConversationalUI.ACT_KnowledgeBaseSpan_CopyOutput.js";

const { $DataView, $Container, $Image, $Tooltip, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Fragment, $FormGroup, $Markdown } = asPluginWidgets({ DataView, Container, Image, Tooltip, Text, ConditionalVisibilityWrapper, ActionButton, Fragment, FormGroup, Markdown });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2"
        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2"
        class={"mx-name-dataView2 form-horizontal"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.8",
            "scope": "$SpanTreeView",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$DataView key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1"
                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1"
                class={"mx-name-dataView1 form-horizontal"}
                style={undefined}
                tabIndex={undefined}
                object={AssociationObjectProperty({
                    "dataSourceId": "p.11",
                    "scope": "$KnowledgeBaseSpan",
                    "editable": true
                })}
                emptyMessage={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                body={[
                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container5"
                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container5"
                        class={"mx-name-container5 slidein-header"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container73"
                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container73"
                                class={"mx-name-container73 pageheader-flex-container"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container14"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container14"
                                        class={"mx-name-container14 pageheader-flex-items"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container23"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container23"
                                                class={"mx-name-container23 row-left-aligned"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container22"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container22"
                                                        class={"mx-name-container22 spacing-outer-right-smaller"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image23"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image23"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
                                                                })}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={undefined}
                                                                isBackgroundImage={false}
                                                                children={undefined}
                                                                onClickType={"action"}
                                                                onClick={undefined}
                                                                alternativeText={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                widthUnit={"pixels"}
                                                                width={24}
                                                                heightUnit={"auto"}
                                                                height={100}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image23"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container24"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container24"
                                                        class={"mx-name-container24"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Tooltip key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.tooltip3"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.tooltip3"
                                                                trigger={[
                                                                    <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text22"
                                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text22"
                                                                        class={"mx-name-text22 font-weight-semibold font-size-larger text-clamp--1-lines"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />
                                                                ]}
                                                                renderMethod={"custom"}
                                                                htmlMessage={[
                                                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container25"
                                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container25"
                                                                        class={"mx-name-container25 tooltip-container"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text21"
                                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text21"
                                                                                class={"mx-name-text21"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                                                    })
                                                                                ])}
                                                                                renderMode={"span"} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]}
                                                                textMessage={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltipPosition={"bottom"}
                                                                arrowPosition={"end"}
                                                                openOn={"hover"}
                                                                class={"mx-name-tooltip3 convui-tooltip"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container26"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container26"
                                                class={"mx-name-container26 row-right-aligned"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4"
                                                                buttonId={"p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4"}
                                                                class={"mx-name-actionButton4 btn-text-default btn-small"}
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
                                                                        "Close"
                                                                    ])
                                                                })}
                                                                icon={WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$sidebar_open.svg" }
                                                                })}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callNanoflow", "argMap": { "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" }, "TraceView": { "widget": "$TraceView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CloseSlideIn, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container88"
                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container88"
                                class={"mx-name-container88 plan-container"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container89"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container89"
                                        class={"mx-name-container89"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text37"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text37"
                                                class={"mx-name-text37 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Fragment key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall1"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall1"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_SpanStartTime.container1"
                                                        $widgetId="p.ConversationalUI.Snippet_SpanStartTime.container1"
                                                        class={"mx-name-container1 row-text-img"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Snippet_SpanStartTime.image10"
                                                                $widgetId="p.ConversationalUI.Snippet_SpanStartTime.image10"
                                                                datasource={"icon"}
                                                                imageObject={undefined}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar-1" }
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
                                                                class={"mx-name-image10 unset-img-width"}
                                                                style={undefined}
                                                                tabIndex={undefined} />,
                                                            <$Text key="p.ConversationalUI.Snippet_SpanStartTime.text1"
                                                                $widgetId="p.ConversationalUI.Snippet_SpanStartTime.text1"
                                                                class={"mx-name-text1"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Span", "path": "StartTime" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "Span": { "widget": "$KnowledgeBaseSpan", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container91"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container91"
                                        class={"mx-name-container91"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text38"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text38"
                                                class={"mx-name-text38 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "End time" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Fragment key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall2"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall2"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_SpanEndTime.container1"
                                                        $widgetId="p.ConversationalUI.Snippet_SpanEndTime.container1"
                                                        class={"mx-name-container1 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Snippet_SpanEndTime.image10"
                                                                $widgetId="p.ConversationalUI.Snippet_SpanEndTime.image10"
                                                                datasource={"icon"}
                                                                imageObject={undefined}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-calendar-1" }
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
                                                                class={"mx-name-image10 unset-img-width"}
                                                                style={undefined}
                                                                tabIndex={undefined} />,
                                                            <$Text key="p.ConversationalUI.Snippet_SpanEndTime.text1"
                                                                $widgetId="p.ConversationalUI.Snippet_SpanEndTime.text1"
                                                                class={"mx-name-text1"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Span", "path": "EndTime" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "Span": { "widget": "$KnowledgeBaseSpan", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container93"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container93"
                                        class={"mx-name-container93"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text39"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text39"
                                                class={"mx-name-text39 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Fragment key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall3"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall3"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_SpanDuration.container1"
                                                        $widgetId="p.ConversationalUI.Snippet_SpanDuration.container1"
                                                        class={"mx-name-container1 row-text-img"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Snippet_SpanDuration.image1"
                                                                $widgetId="p.ConversationalUI.Snippet_SpanDuration.image1"
                                                                datasource={"icon"}
                                                                imageObject={undefined}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={WebIconProperty({
                                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-time-clock" }
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
                                                                class={"mx-name-image1 unset-img-width"}
                                                                style={undefined}
                                                                tabIndex={undefined} />,
                                                            <$Text key="p.ConversationalUI.Snippet_SpanDuration.text1"
                                                                $widgetId="p.ConversationalUI.Snippet_SpanDuration.text1"
                                                                class={"mx-name-text1"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "formatDecimal", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] } ] }, { "type": "literal", "value": "s" } ] } } }, "args": { "Span": { "widget": "$KnowledgeBaseSpan", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container100"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container100"
                                        class={"mx-name-container100"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text54"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text54"
                                                class={"mx-name-text54 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Knowledge base display name" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container27"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container27"
                                                class={"mx-name-container27 row-text-img"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text55"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text55"
                                                        class={"mx-name-text55"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "KBDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container95"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container95"
                                        class={"mx-name-container95"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text42"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text42"
                                                class={"mx-name-text42 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Knowledge base toolcall ID" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container8"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container8"
                                                class={"mx-name-container8 row-text-img"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Image key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image11"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image11"
                                                        datasource={"icon"}
                                                        imageObject={undefined}
                                                        defaultImageDynamic={undefined}
                                                        imageUrl={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        imageIcon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-tag" }
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
                                                        class={"mx-name-image11 unset-img-width"}
                                                        style={undefined}
                                                        tabIndex={undefined} />,
                                                    <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text43"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text43"
                                                        class={"mx-name-text43"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "_ToolCallId" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container97"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container97"
                                        class={"mx-name-container97"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text46"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text46"
                                                class={"mx-name-text46 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Max. results" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container10"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container10"
                                                class={"mx-name-container10 row-text-img"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Image key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image15"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image15"
                                                        datasource={"icon"}
                                                        imageObject={undefined}
                                                        defaultImageDynamic={undefined}
                                                        imageUrl={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        imageIcon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-light-bulb-shine" }
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
                                                        class={"mx-name-image15 unset-img-width"}
                                                        style={undefined}
                                                        tabIndex={undefined} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MaxNumberOfResults" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text47"
                                                                class={"mx-name-text47"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MaxNumberOfResults" }, { "type": "literal", "value": "{}" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MaxNumberOfResults" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text52"
                                                                class={"mx-name-text52"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container96"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container96"
                                        class={"mx-name-container96"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text44"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text44"
                                                class={"mx-name-text44 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Min. similarity" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container9"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container9"
                                                class={"mx-name-container9 row-text-img"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Image key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image12"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.image12"
                                                        datasource={"icon"}
                                                        imageObject={undefined}
                                                        defaultImageDynamic={undefined}
                                                        imageUrl={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        imageIcon={WebIconProperty({
                                                            "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-duplicate" }
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
                                                        class={"mx-name-image12 unset-img-width"}
                                                        style={undefined}
                                                        tabIndex={undefined} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MinimumSimilarity" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text45"
                                                                class={"mx-name-text45"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MinimumSimilarity" }, { "type": "literal", "value": "{}" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "MinimumSimilarity" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text53"
                                                                class={"mx-name-text53"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "-" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container1"
                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container1"
                                class={"mx-name-container1 divider spacing-outer-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={undefined}
                                ariaHidden={false} />
                        ]}
                        ariaHidden={false} />,
                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container12"
                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container12"
                        class={"mx-name-container12 slidein-body"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container98"
                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container98"
                                class={"mx-name-container98 spacing-inner-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text48"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text48"
                                        class={"mx-name-text48 font-weight-semibold"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Knowledge base tool name" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container11"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container11"
                                        class={"mx-name-container11"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text49"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text49"
                                                class={"mx-name-text49"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container99"
                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container99"
                                class={"mx-name-container99 spacing-inner-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text50"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text50"
                                        class={"mx-name-text50 font-weight-semibold"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Knowledge base tool description" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container15"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container15"
                                        class={"mx-name-container15"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text51"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text51"
                                                class={"mx-name-text51"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "ToolDescription" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1", "source": "object" } } }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container16"
                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container16"
                                class={"mx-name-container16 spacing-inner-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text6"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text6"
                                        class={"mx-name-text6 font-weight-semibold"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Input" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container17"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container17"
                                        class={"mx-name-container17 text-container-clickable"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$FormGroup key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2$formGroup"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2$formGroup"
                                                class={"mx-name-markdownViewer2 text-break-word"}
                                                style={undefined}
                                                control={[
                                                    <$Markdown key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                                        stringAttribute={AttributeProperty({
                                                            "scope": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1",
                                                            "path": "",
                                                            "entity": "GenAICommons.KnowledgeBaseSpan",
                                                            "attribute": "Input",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                                })}
                                                width={3}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer2"
                                                })} />,
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container18"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container18"
                                                class={"mx-name-container18 btn-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" } ] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9"
                                                                buttonId={"p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton9"}
                                                                class={"mx-name-actionButton9 btn-hover flex-right"}
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
                                                                        "Copy to clipboard"
                                                                    ])
                                                                })}
                                                                icon={WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$copy_duplicate.svg" }
                                                                })}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callNanoflow", "argMap": { "KnowledgeBaseSpan": { "widget": "$KnowledgeBaseSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_KnowledgeBaseSpan_CopyInput, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedFirstAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container7"
                                                                class={"mx-name-container7 copied-img-container"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Fragment key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall4"
                                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall4"
                                                                        content={[
                                                                            <$Image key="p.ConversationalUI.Snippet_Copied.image1"
                                                                                $widgetId="p.ConversationalUI.Snippet_Copied.image1"
                                                                                datasource={"image"}
                                                                                imageObject={WebStaticImageProperty({
                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$checkmark.svg" }
                                                                                })}
                                                                                defaultImageDynamic={undefined}
                                                                                imageUrl={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                imageIcon={undefined}
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
                                                                                class={"mx-name-image1 img--14-14"}
                                                                                style={undefined}
                                                                                tabIndex={undefined} />
                                                                        ]} />
                                                                ]}
                                                                ariaHidden={false} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container20"
                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container20"
                                class={"mx-name-container20 spacing-inner-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text7"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.text7"
                                        class={"mx-name-text7 font-weight-semibold"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Output" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />,
                                    <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container21"
                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container21"
                                        class={"mx-name-container21 text-container-clickable"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$FormGroup key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1$formGroup"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1$formGroup"
                                                class={"mx-name-markdownViewer1 text-break-word"}
                                                style={undefined}
                                                control={[
                                                    <$Markdown key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                                        stringAttribute={AttributeProperty({
                                                            "scope": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView1",
                                                            "path": "",
                                                            "entity": "GenAICommons.KnowledgeBaseSpan",
                                                            "attribute": "Output",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                                })}
                                                width={3}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.markdownViewer1"
                                                })} />,
                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container19"
                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container19"
                                                class={"mx-name-container19 btn-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" } ] }, "else": { "type": "literal", "value": false } }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10"
                                                                buttonId={"p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton10"}
                                                                class={"mx-name-actionButton10 btn-hover flex-right"}
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
                                                                        "Copy to clipboard"
                                                                    ])
                                                                })}
                                                                icon={WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$copy_duplicate.svg" }
                                                                })}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callNanoflow", "argMap": { "KnowledgeBaseSpan": { "widget": "$KnowledgeBaseSpan", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_KnowledgeBaseSpan_CopyOutput, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13$visibility"
                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "dataView2", "path": "IsCopiedSecondAttribute" }, "args": { "dataView2": { "widget": "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.dataView2", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13"
                                                                $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.container13"
                                                                class={"mx-name-container13 copied-img-container"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Fragment key="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall5"
                                                                        $widgetId="p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.snippetCall5"
                                                                        content={[
                                                                            <$Image key="p.ConversationalUI.Snippet_Copied.image1.177"
                                                                                $widgetId="p.ConversationalUI.Snippet_Copied.image1.177"
                                                                                datasource={"image"}
                                                                                imageObject={WebStaticImageProperty({
                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$checkmark.svg" }
                                                                                })}
                                                                                defaultImageDynamic={undefined}
                                                                                imageUrl={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                imageIcon={undefined}
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
                                                                                class={"mx-name-image1 img--14-14"}
                                                                                style={undefined}
                                                                                tabIndex={undefined} />
                                                                        ]} />
                                                                ]}
                                                                ariaHidden={false} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />
                        ]}
                        ariaHidden={false} />
                ]}
                hideFooter={true}
                footer={undefined} />
        ]}
        hideFooter={true}
        footer={undefined} />
]}</PageFragment>);

export const title = t([
    "Slide in knowledge base"
]);

export const classes = "layout-slidein mx-window-view";

export const cancelChangesOperationId = "dsB4GgglmFSfiu+BcKnyvw";
export const closeButton = "p.ConversationalUI.Span_KnowledgeBaseSpan_SlideIn.actionButton4";
export const style = {};
export const content = { ...parentContent,
    "ConversationalUI.Layout_SlideIn.Main": region$Main,
};
