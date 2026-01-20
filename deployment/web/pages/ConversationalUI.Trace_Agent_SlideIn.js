import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
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
import { ACT_Trace_CopySystemPrompt } from "../nanoflows/ConversationalUI.ACT_Trace_CopySystemPrompt.js";
import { ACT_Trace_CopyUserPrompt } from "../nanoflows/ConversationalUI.ACT_Trace_CopyUserPrompt.js";
import { ACT_Trace_CopyAssistantResponse } from "../nanoflows/ConversationalUI.ACT_Trace_CopyAssistantResponse.js";

const { $DataView, $Container, $Image, $Tooltip, $ConditionalVisibilityWrapper, $Text, $ActionButton, $Fragment, $FormGroup, $Markdown } = asPluginWidgets({ DataView, Container, Image, Tooltip, ConditionalVisibilityWrapper, Text, ActionButton, Fragment, FormGroup, Markdown });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.ConversationalUI.Trace_Agent_SlideIn.dataView3"
        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.dataView3"
        class={"mx-name-dataView3 form-horizontal"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.12",
            "scope": "$SpanTreeView",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$DataView key="p.ConversationalUI.Trace_Agent_SlideIn.dataView1"
                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.dataView1"
                class={"mx-name-dataView1 form-horizontal"}
                style={undefined}
                tabIndex={undefined}
                object={AssociationObjectProperty({
                    "dataSourceId": "p.15",
                    "scope": "$Trace",
                    "editable": true
                })}
                emptyMessage={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                body={[
                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container7"
                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container7"
                        class={"mx-name-container7 slidein-header"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container73"
                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container73"
                                class={"mx-name-container73 pageheader-flex-container"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container17"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container17"
                                        class={"mx-name-container17 pageheader-flex-items"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container23"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container23"
                                                class={"mx-name-container23 row-left-aligned"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container22"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container22"
                                                        class={"mx-name-container22 spacing-outer-right-smaller"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Trace_Agent_SlideIn.image24"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.image24"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$robot.svg" }
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
                                                                class={"mx-name-image24"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container24"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container24"
                                                        class={"mx-name-container24"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Tooltip key="p.ConversationalUI.Trace_Agent_SlideIn.tooltip3"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.tooltip3"
                                                                trigger={[
                                                                    <$DataView key="p.ConversationalUI.Trace_Agent_SlideIn.dataView4"
                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.dataView4"
                                                                        class={"mx-name-dataView4 form-horizontal"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        object={MicroflowObjectProperty({
                                                                            "dataSourceId": "p.34",
                                                                            "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                                            "editable": true,
                                                                            "operationId": "1Dw9JXI0ZlGXW8EMspHTvg",
                                                                            "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
                                                                        })}
                                                                        emptyMessage={TextProperty({
                                                                            "value": t([
                                                                                ""
                                                                            ])
                                                                        })}
                                                                        body={[
                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.text8$visibility"
                                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text8$visibility"
                                                                                visible={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "Trace", "path": "_AgentVersionId" } ] }, { "type": "literal", "value": "" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                })}
                                                                                contents={[
                                                                                    <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text8"
                                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text8"
                                                                                        class={"mx-name-text8 font-weight-semibold font-size-larger text-clamp--1-lines"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Version_Agent/AgentCommons.Agent/Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView4", "source": "object" } } }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]} />
                                                                        ]}
                                                                        hideFooter={false}
                                                                        footer={undefined} />
                                                                ]}
                                                                renderMethod={"custom"}
                                                                htmlMessage={[
                                                                    <$DataView key="p.ConversationalUI.Trace_Agent_SlideIn.dataView5"
                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.dataView5"
                                                                        class={"mx-name-dataView5 form-horizontal"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        object={MicroflowObjectProperty({
                                                                            "dataSourceId": "p.40",
                                                                            "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                                            "editable": true,
                                                                            "operationId": "RHOjkqgOB16KdibIcFhlqA",
                                                                            "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
                                                                        })}
                                                                        emptyMessage={TextProperty({
                                                                            "value": t([
                                                                                ""
                                                                            ])
                                                                        })}
                                                                        body={[
                                                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container25"
                                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container25"
                                                                                class={"mx-name-container25 tooltip-container"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.text10$visibility"
                                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text10$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "Trace", "path": "_AgentVersionId" } ] }, { "type": "literal", "value": "" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text10"
                                                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text10"
                                                                                                class={"mx-name-text10"}
                                                                                                style={undefined}
                                                                                                caption={t([
                                                                                                    ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Version_Agent/AgentCommons.Agent/Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView5", "source": "object" } } }
                                                                                                    })
                                                                                                ])}
                                                                                                renderMode={"span"} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        hideFooter={false}
                                                                        footer={undefined} />
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
                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container26"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container26"
                                                class={"mx-name-container26 row-right-aligned"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton6$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton6$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton6"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton6"
                                                                buttonId={"p.ConversationalUI.Trace_Agent_SlideIn.actionButton6"}
                                                                class={"mx-name-actionButton6 btn-text-default btn-small"}
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
                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container88"
                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container88"
                                class={"mx-name-container88 plan-container"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container89"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container89"
                                        class={"mx-name-container89"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text37"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text37"
                                                class={"mx-name-text37 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Fragment key="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall1"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall1"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_TraceStartTime.container1"
                                                        $widgetId="p.ConversationalUI.Snippet_TraceStartTime.container1"
                                                        class={"mx-name-container1 row-text-img"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Snippet_TraceStartTime.image10"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceStartTime.image10"
                                                                datasource={"icon"}
                                                                imageObject={undefined}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                            <$Text key="p.ConversationalUI.Snippet_TraceStartTime.text1"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceStartTime.text1"
                                                                class={"mx-name-text1"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "StartTime" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container91"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container91"
                                        class={"mx-name-container91"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text38"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text38"
                                                class={"mx-name-text38 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "End time" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Fragment key="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall2"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall2"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_TraceEndTime.container1"
                                                        $widgetId="p.ConversationalUI.Snippet_TraceEndTime.container1"
                                                        class={"mx-name-container1 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Snippet_TraceEndTime.image10"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceEndTime.image10"
                                                                datasource={"icon"}
                                                                imageObject={undefined}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$calendar.svg" }
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
                                                            <$Text key="p.ConversationalUI.Snippet_TraceEndTime.text1"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceEndTime.text1"
                                                                class={"mx-name-text1"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "EndTime" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container93"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container93"
                                        class={"mx-name-container93"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text39"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text39"
                                                class={"mx-name-text39 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Fragment key="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall3"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall3"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_TraceDuration.container1"
                                                        $widgetId="p.ConversationalUI.Snippet_TraceDuration.container1"
                                                        class={"mx-name-container1 row-text-img"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Snippet_TraceDuration.image1"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceDuration.image1"
                                                                datasource={"icon"}
                                                                imageObject={undefined}
                                                                defaultImageDynamic={undefined}
                                                                imageUrl={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                imageIcon={WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$clock.svg" }
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
                                                            <$Text key="p.ConversationalUI.Snippet_TraceDuration.text1"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceDuration.text1"
                                                                class={"mx-name-text1"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "formatDecimal", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] } ] }, { "type": "literal", "value": "s" } ] } }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container95"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container95"
                                        class={"mx-name-container95"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text40"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text40"
                                                class={"mx-name-text40 font-weight-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Tokens" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Fragment key="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall4"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall4"
                                                content={[
                                                    <$Container key="p.ConversationalUI.Snippet_TraceTokens.container30"
                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.container30"
                                                        class={"mx-name-container30 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Image key="p.ConversationalUI.Snippet_TraceTokens.image11"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.image11"
                                                                datasource={"image"}
                                                                imageObject={WebStaticImageProperty({
                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
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
                                                                width={16}
                                                                heightUnit={"auto"}
                                                                height={100}
                                                                iconSize={14}
                                                                displayAs={"fullImage"}
                                                                responsive={true}
                                                                class={"mx-name-image11 unset-img-width"}
                                                                style={undefined}
                                                                tabIndex={undefined} />,
                                                            <$Text key="p.ConversationalUI.Snippet_TraceTokens.text3"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.text3"
                                                                class={"mx-name-text3"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, { "type": "literal", "value": " (" } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] } ] }, { "type": "literal", "value": " / " } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] } ] }, { "type": "literal", "value": ")" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$Tooltip key="p.ConversationalUI.Snippet_TraceTokens.tooltip5"
                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.tooltip5"
                                                                trigger={[
                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceTokens.actionButton25$visibility"
                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.actionButton25$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.ConversationalUI.Snippet_TraceTokens.actionButton25"
                                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.actionButton25"
                                                                                buttonId={"p.ConversationalUI.Snippet_TraceTokens.actionButton25"}
                                                                                class={"mx-name-actionButton25 tooltip-info-icon btn-sm spacing-outer-bottom-none"}
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
                                                                                    "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]}
                                                                renderMethod={"custom"}
                                                                htmlMessage={[
                                                                    <$Container key="p.ConversationalUI.Snippet_TraceTokens.container33"
                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.container33"
                                                                        class={"mx-name-container33 tooltip-container-token"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Container key="p.ConversationalUI.Snippet_TraceTokens.container31"
                                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.container31"
                                                                                class={"mx-name-container31 tooltip-row-text-icon"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceTokens.image5"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.image5"
                                                                                        datasource={"image"}
                                                                                        imageObject={WebStaticImageProperty({
                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$token.svg" }
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
                                                                                        class={"mx-name-image5 img--14-20"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined} />,
                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceTokens.text12"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.text12"
                                                                                        class={"mx-name-text12 font-weight-semibold"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Total tokens" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />,
                                                                            <$Container key="p.ConversationalUI.Snippet_TraceTokens.container32"
                                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.container32"
                                                                                class={"mx-name-container32 tooltip-col"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceTokens.text4"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.text4"
                                                                                        class={"mx-name-text4"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        ariaHidden={false} />,
                                                                    <$Container key="p.ConversationalUI.Snippet_TraceTokens.container34"
                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.container34"
                                                                        class={"mx-name-container34 divider spacing-inner-none spacing-outer-left spacing-outer-right"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={undefined}
                                                                        ariaHidden={false} />,
                                                                    <$Container key="p.ConversationalUI.Snippet_TraceTokens.container36"
                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.container36"
                                                                        class={"mx-name-container36 tooltip-container-token"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Container key="p.ConversationalUI.Snippet_TraceTokens.container38"
                                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.container38"
                                                                                class={"mx-name-container38 tooltip-row-text-icon"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceTokens.image9"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.image9"
                                                                                        datasource={"image"}
                                                                                        imageObject={WebStaticImageProperty({
                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$token_input.svg" }
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
                                                                                        class={"mx-name-image9 img--14-20"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined} />,
                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceTokens.text8"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.text8"
                                                                                        class={"mx-name-text8 font-weight-semibold"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Input tokens" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />,
                                                                            <$Container key="p.ConversationalUI.Snippet_TraceTokens.container39"
                                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.container39"
                                                                                class={"mx-name-container39 tooltip-col"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceTokens.text5"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.text5"
                                                                                        class={"mx-name-text5"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        ariaHidden={false} />,
                                                                    <$Container key="p.ConversationalUI.Snippet_TraceTokens.container40"
                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.container40"
                                                                        class={"mx-name-container40 divider spacing-inner-none spacing-outer-left spacing-outer-right"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={undefined}
                                                                        ariaHidden={false} />,
                                                                    <$Container key="p.ConversationalUI.Snippet_TraceTokens.container42"
                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.container42"
                                                                        class={"mx-name-container42 tooltip-container-token"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Container key="p.ConversationalUI.Snippet_TraceTokens.container44"
                                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.container44"
                                                                                class={"mx-name-container44 tooltip-row-text-icon"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceTokens.image13"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.image13"
                                                                                        datasource={"image"}
                                                                                        imageObject={WebStaticImageProperty({
                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$token_output.svg" }
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
                                                                                        class={"mx-name-image13 img--14-20"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined} />,
                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceTokens.text10"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.text10"
                                                                                        class={"mx-name-text10 font-weight-semibold"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Output tokens" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />,
                                                                            <$Container key="p.ConversationalUI.Snippet_TraceTokens.container45"
                                                                                $widgetId="p.ConversationalUI.Snippet_TraceTokens.container45"
                                                                                class={"mx-name-container45 tooltip-col"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceTokens.text7"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceTokens.text7"
                                                                                        class={"mx-name-text7"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Trace", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />
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
                                                                class={"mx-name-tooltip5 convui-tooltip"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container1"
                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container1"
                                class={"mx-name-container1 divider spacing-outer-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={undefined}
                                ariaHidden={false} />
                        ]}
                        ariaHidden={false} />,
                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container5"
                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container5"
                        class={"mx-name-container5 slidein-body"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container14"
                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container14"
                                class={"mx-name-container14 spacing-inner-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text3"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text3"
                                        class={"mx-name-text3 font-weight-semibold"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "System prompt" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />,
                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.container6$visibility"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container6$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SystemPrompt" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container6"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container6"
                                                class={"mx-name-container6 text-container-empty"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={undefined}
                                                ariaHidden={false} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.container10$visibility"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container10$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SystemPrompt" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container10"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container10"
                                                class={"mx-name-container10 text-container-clickable"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$FormGroup key="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3$formGroup"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3$formGroup"
                                                        class={"mx-name-markdownViewer3 text-break-word"}
                                                        style={undefined}
                                                        control={[
                                                            <$Markdown key="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                                                stringAttribute={AttributeProperty({
                                                                    "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                                    "path": "",
                                                                    "entity": "GenAICommons.Trace",
                                                                    "attribute": "SystemPrompt",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                    "isList": false
                                                                })}
                                                                tabIndex={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                                                })} />
                                                        ]}
                                                        caption={undefined}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                                        })}
                                                        width={3}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer3"
                                                        })} />,
                                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container21"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container21"
                                                        class={"mx-name-container21 btn-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton13$visibility"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton13$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "dataView3", "path": "IsCopiedFirstAttribute" } ] }, "else": { "type": "literal", "value": false } }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton13"
                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton13"
                                                                        buttonId={"p.ConversationalUI.Trace_Agent_SlideIn.actionButton13"}
                                                                        class={"mx-name-actionButton13 btn-hover flex-right"}
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
                                                                            "action": { "type": "callNanoflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CopySystemPrompt, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                            "abortOnServerValidation": true
                                                                        })} />
                                                                ]} />,
                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.container8$visibility"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container8$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "dataView3", "path": "IsCopiedFirstAttribute" }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                                })}
                                                                contents={[
                                                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container8"
                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container8"
                                                                        class={"mx-name-container8 copied-img-container"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Fragment key="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall5"
                                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall5"
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
                                        ]} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container15"
                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container15"
                                class={"mx-name-container15 spacing-inner-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text11"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text11"
                                        class={"mx-name-text11 font-weight-semibold"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "User prompt" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />,
                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container16"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container16"
                                        class={"mx-name-container16 text-container-clickable"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$FormGroup key="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2$formGroup"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2$formGroup"
                                                class={"mx-name-markdownViewer2"}
                                                style={undefined}
                                                control={[
                                                    <$Markdown key="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                                        stringAttribute={AttributeProperty({
                                                            "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                            "path": "",
                                                            "entity": "GenAICommons.Trace",
                                                            "attribute": "Input",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                                })}
                                                width={3}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer2"
                                                })} />,
                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container20"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container20"
                                                class={"mx-name-container20 btn-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton10$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton10$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "dataView3", "path": "IsCopiedSecondAttribute" } ] }, "else": { "type": "literal", "value": false } }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton10"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton10"
                                                                buttonId={"p.ConversationalUI.Trace_Agent_SlideIn.actionButton10"}
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
                                                                    "action": { "type": "callNanoflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CopyUserPrompt, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.container9$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container9$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "dataView3", "path": "IsCopiedSecondAttribute" }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container9"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container9"
                                                                class={"mx-name-container9 copied-img-container"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Fragment key="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall6"
                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall6"
                                                                        content={[
                                                                            <$Image key="p.ConversationalUI.Snippet_Copied.image1.186"
                                                                                $widgetId="p.ConversationalUI.Snippet_Copied.image1.186"
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
                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container12"
                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container12"
                                class={"mx-name-container12 spacing-inner-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.ConversationalUI.Trace_Agent_SlideIn.text6"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.text6"
                                        class={"mx-name-text6 font-weight-semibold"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Assistant response" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />,
                                    <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container13"
                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container13"
                                        class={"mx-name-container13 text-container-clickable"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$FormGroup key="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1$formGroup"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1$formGroup"
                                                class={"mx-name-markdownViewer1 text-break-word"}
                                                style={undefined}
                                                control={[
                                                    <$Markdown key="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                                        stringAttribute={AttributeProperty({
                                                            "scope": "p.ConversationalUI.Trace_Agent_SlideIn.dataView1",
                                                            "path": "",
                                                            "entity": "GenAICommons.Trace",
                                                            "attribute": "Output",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                                })}
                                                width={3}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.ConversationalUI.Trace_Agent_SlideIn.markdownViewer1"
                                                })} />,
                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container18"
                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container18"
                                                class={"mx-name-container18 btn-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton9$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton9$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "dataView3", "path": "IsCopiedThirdAttribute" } ] }, "else": { "type": "literal", "value": false } }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Trace_Agent_SlideIn.actionButton9"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.actionButton9"
                                                                buttonId={"p.ConversationalUI.Trace_Agent_SlideIn.actionButton9"}
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
                                                                    "action": { "type": "callNanoflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" }, "SpanTreeView": { "widget": "$SpanTreeView", "source": "object" } }, "config": { "nanoflow": () => ACT_Trace_CopyAssistantResponse, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Agent_SlideIn.container11$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container11$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "variable", "variable": "dataView3", "path": "IsCopiedThirdAttribute" }, "args": { "dataView3": { "widget": "p.ConversationalUI.Trace_Agent_SlideIn.dataView3", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.ConversationalUI.Trace_Agent_SlideIn.container11"
                                                                $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.container11"
                                                                class={"mx-name-container11 copied-img-container"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Fragment key="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall7"
                                                                        $widgetId="p.ConversationalUI.Trace_Agent_SlideIn.snippetCall7"
                                                                        content={[
                                                                            <$Image key="p.ConversationalUI.Snippet_Copied.image1.204"
                                                                                $widgetId="p.ConversationalUI.Snippet_Copied.image1.204"
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
        hideFooter={false}
        footer={undefined} />
]}</PageFragment>);

export const title = t([
    "Slide in agent"
]);

export const classes = "layout-slidein mx-window-view";

export const cancelChangesOperationId = "LGk9wJGg31CaM2l37FqGlg";
export const closeButton = "p.ConversationalUI.Trace_Agent_SlideIn.actionButton6";
export const style = {};
export const content = { ...parentContent,
    "ConversationalUI.Layout_SlideIn.Main": region$Main,
};
