import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import * as TreeNodeWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/treenode/TreeNode.mjs";
const TreeNode = Object.getOwnPropertyDescriptor(TreeNodeWidgetModule, "TreeNode")?.value || Object.getOwnPropertyDescriptor(TreeNodeWidgetModule, "default")?.value;   
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/ConversationalUI.Layout_MasterBase.js";
import { ACT_CopyTracePageURL } from "../nanoflows/ConversationalUI.ACT_CopyTracePageURL.js";

const { $DataView, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton, $Fragment, $Tooltip, $Image, $ListView, $TreeNode } = asPluginWidgets({ DataView, Container, Text, ConditionalVisibilityWrapper, ActionButton, Fragment, Tooltip, Image, ListView, TreeNode });

addEnumerations({
    "ConversationalUI.ENUM_SpanType": [
        [
            "Agent",
            t([
                "Agent"
            ])
        ],
        [
            "ModelCall",
            t([
                "ModelCall"
            ])
        ],
        [
            "ToolCall",
            t([
                "ToolCall"
            ])
        ],
        [
            "KnowledgeBaseCall",
            t([
                "KnowledgeBaseCall"
            ])
        ],
        [
            "MCPCall",
            t([
                "MCPCall"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.ConversationalUI.Trace_Details.dataView6"
        $widgetId="p.ConversationalUI.Trace_Details.dataView6"
        class={"mx-name-dataView6 height-full form-vertical"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.25",
            "scope": "$Trace",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$DataView key="p.ConversationalUI.Trace_Details.dataView3"
                $widgetId="p.ConversationalUI.Trace_Details.dataView3"
                class={"mx-name-dataView3 height-full form-vertical"}
                style={undefined}
                tabIndex={undefined}
                object={MicroflowObjectProperty({
                    "dataSourceId": "p.28",
                    "scope": "p.ConversationalUI.Trace_Details.dataView6",
                    "editable": true,
                    "operationId": "IJvfjmAa/VK/VdbfhbKwrg",
                    "argMap": {}
                })}
                emptyMessage={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                body={[
                    <$Container key="p.ConversationalUI.Trace_Details.container5"
                        $widgetId="p.ConversationalUI.Trace_Details.container5"
                        class={"mx-name-container5 traces-page-content-container spacing-inner-bottom-large"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.Trace_Details.container96"
                                $widgetId="p.ConversationalUI.Trace_Details.container96"
                                class={"mx-name-container96 traces-breadcrumb row-left-aligned spacing-outer-bottom-small"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.Trace_Details.container22"
                                        $widgetId="p.ConversationalUI.Trace_Details.container22"
                                        class={"mx-name-container22 spacing-inner-bottom-smallest"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderMode={"div"}
                                        onClick={ActionProperty({
                                            "action": { "type": "openPage", "argMap": {}, "config": { "name": "ConversationalUI/Trace_Overview.page.xml", "location": "content", "allowedRoles": [ "Administrator" ], "numberOfPagesToClose": { "type": "literalNumeric", "value": "1" } }, "disabledDuringExecution": true }
                                        })}
                                        content={[
                                            <$Text key="p.ConversationalUI.Trace_Details.text2"
                                                $widgetId="p.ConversationalUI.Trace_Details.text2"
                                                class={"mx-name-text2 font-size-small breadcrumb-text"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Traces " }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Text key="p.ConversationalUI.Trace_Details.text24"
                                                $widgetId="p.ConversationalUI.Trace_Details.text24"
                                                class={"mx-name-text24 font-size-small"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "/" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.ConversationalUI.Trace_Details.container100"
                                        $widgetId="p.ConversationalUI.Trace_Details.container100"
                                        class={"mx-name-container100 row-text-img breadcrumb-container"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.ConversationalUI.Trace_Details.text25"
                                                $widgetId="p.ConversationalUI.Trace_Details.text25"
                                                class={"mx-name-text25 font-weight-semibold font-size-small"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Trace ID " }, { "type": "variable", "variable": "dataView6", "path": "TraceId" } ] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.ConversationalUI.Trace_Details.container32"
                                                $widgetId="p.ConversationalUI.Trace_Details.container32"
                                                class={"mx-name-container32 btn-wrapper"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderMode={"div"}
                                                onClick={ActionProperty({
                                                    "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true }
                                                })}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton12$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton12$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton12"
                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton12"
                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton12"}
                                                                class={"mx-name-actionButton12 btn-icon-only"}
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
                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$link.svg" }
                                                                })}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton8$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton8$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ShowCopyChecked" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton8"
                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton8"
                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton8"}
                                                                class={"mx-name-actionButton8 btn-hover"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "click to copy link" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        "Copy to clipboard"
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton14$visibility"
                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton14$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "variable", "variable": "currentObject", "path": "ShowCopyChecked" }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton14"
                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton14"
                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton14"}
                                                                class={"mx-name-actionButton14 btn-hover"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "link copied!" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        "Copy to clipboard"
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callNanoflow", "argMap": { "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "nanoflow": () => ACT_CopyTracePageURL, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.Trace_Details.container4"
                                $widgetId="p.ConversationalUI.Trace_Details.container4"
                                class={"mx-name-container4 traces-content"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.Trace_Details.container1"
                                        $widgetId="p.ConversationalUI.Trace_Details.container1"
                                        class={"mx-name-container1 card"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.ConversationalUI.Trace_Details.container17"
                                                $widgetId="p.ConversationalUI.Trace_Details.container17"
                                                class={"mx-name-container17 pageheader-flex-container"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.ConversationalUI.Trace_Details.container18"
                                                        $widgetId="p.ConversationalUI.Trace_Details.container18"
                                                        class={"mx-name-container18 pageheader-flex-items"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Container key="p.ConversationalUI.Trace_Details.container7"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container7"
                                                                class={"mx-name-container7"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.Trace_Details.text1"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.text1"
                                                                        class={"mx-name-text1"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "Trace ID " }, { "type": "variable", "variable": "dataView6", "path": "TraceId" } ] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                                            })
                                                                        ])}
                                                                        renderMode={"h1"} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.ConversationalUI.Trace_Details.container20"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container20"
                                                                class={"mx-name-container20"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={undefined}
                                                                ariaHidden={false} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Container key="p.ConversationalUI.Trace_Details.container6"
                                                $widgetId="p.ConversationalUI.Trace_Details.container6"
                                                class={"mx-name-container6 card-content-scroll"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.ConversationalUI.Trace_Details.container88"
                                                        $widgetId="p.ConversationalUI.Trace_Details.container88"
                                                        class={"mx-name-container88 plan-container"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Container key="p.ConversationalUI.Trace_Details.container89"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container89"
                                                                class={"mx-name-container89 col-left-aligned"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.Trace_Details.text11"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.text11"
                                                                        class={"mx-name-text11 font-weight-semibold"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Conversation ID" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton3$visibility"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton3$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton3"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton3"
                                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton3"}
                                                                                class={"mx-name-actionButton3 link-bold spacing-outer-top-smaller"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"link"}
                                                                                role={"button"}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "variable", "variable": "dataView6", "path": "_ConversationId" }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        "Filter for the same Conversation ID"
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "KIRhqh6C0VuZ78VKieccVg", "progress": { "message": t([ "Filtering..." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.ConversationalUI.Trace_Details.container91"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container91"
                                                                class={"mx-name-container91"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$DataView key="p.ConversationalUI.Trace_Details.dataView5"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.dataView5"
                                                                        class={"mx-name-dataView5 form-vertical"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        object={MicroflowObjectProperty({
                                                                            "dataSourceId": "p.75",
                                                                            "scope": "p.ConversationalUI.Trace_Details.dataView3",
                                                                            "editable": true,
                                                                            "operationId": "Z1nc6AzKk1mg0kpOojIwmg",
                                                                            "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
                                                                        })}
                                                                        emptyMessage={TextProperty({
                                                                            "value": t([
                                                                                ""
                                                                            ])
                                                                        })}
                                                                        body={[
                                                                            <$Container key="p.ConversationalUI.Trace_Details.container16"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.container16"
                                                                                class={"mx-name-container16 row-left-aligned spacing-outer-bottom-smallest"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container52"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container52"
                                                                                        class={"mx-name-container52"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Text key="p.ConversationalUI.Trace_Details.text38"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.text38"
                                                                                                class={"mx-name-text38 font-weight-semibold"}
                                                                                                style={undefined}
                                                                                                caption={t([
                                                                                                    ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                                                                                    })
                                                                                                ])}
                                                                                                renderMode={"span"} />
                                                                                        ]}
                                                                                        ariaHidden={false} />,
                                                                                    <$Fragment key="p.ConversationalUI.Trace_Details.snippetCall2"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.snippetCall2"
                                                                                        content={[
                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container3"
                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container3"
                                                                                                class={"mx-name-container3 row-left-aligned"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$DataView key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1"
                                                                                                        class={"mx-name-dataView1 form-vertical"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined}
                                                                                                        object={MicroflowObjectProperty({
                                                                                                            "dataSourceId": "p.88",
                                                                                                            "scope": "$Trace",
                                                                                                            "editable": true,
                                                                                                            "operationId": "JIMsR7Kb9lWKDpEzYbD5eg",
                                                                                                            "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }
                                                                                                        })}
                                                                                                        emptyMessage={TextProperty({
                                                                                                            "value": t([
                                                                                                                ""
                                                                                                            ])
                                                                                                        })}
                                                                                                        body={[
                                                                                                            <$Tooltip key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.tooltip3"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.tooltip3"
                                                                                                                trigger={[
                                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22$visibility"
                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22$visibility"
                                                                                                                        visible={ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                                                        })}
                                                                                                                        contents={[
                                                                                                                            <$ActionButton key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22"
                                                                                                                                buttonId={"p.ConversationalUI.Snippet_TraceVersion_Tooltip.actionButton22"}
                                                                                                                                class={"mx-name-actionButton22 tooltip-info-icon btn-sm spacing-outer-bottom-none"}
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
                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container103"
                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container103"
                                                                                                                        class={"mx-name-container103 tooltip-container-version"}
                                                                                                                        style={undefined}
                                                                                                                        renderMode={"div"}
                                                                                                                        onClick={undefined}
                                                                                                                        content={[
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container67"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container67"
                                                                                                                                class={"mx-name-container67 tooltip-col"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text69"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text69"
                                                                                                                                        class={"mx-name-text69 font-weight-semibold"}
                                                                                                                                        style={undefined}
                                                                                                                                        caption={t([
                                                                                                                                            ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "literal", "value": "Agent version" }, "args": {} }
                                                                                                                                            })
                                                                                                                                        ])}
                                                                                                                                        renderMode={"span"} />
                                                                                                                                ]}
                                                                                                                                ariaHidden={false} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "Version", "path": "IsDraftVersion" } ] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container24"
                                                                                                                                        class={"mx-name-container24 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text3"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text3"
                                                                                                                                                class={"mx-name-text3"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Version", "path": "VersionNumber" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "Version", "path": "IsDraftVersion" }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container41"
                                                                                                                                        class={"mx-name-container41 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container4"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container4"
                                                                                                                                                class={"mx-name-container4 tooltip-version-draft"}
                                                                                                                                                style={undefined}
                                                                                                                                                renderMode={"div"}
                                                                                                                                                onClick={undefined}
                                                                                                                                                content={[
                                                                                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image14"
                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image14"
                                                                                                                                                        datasource={"image"}
                                                                                                                                                        imageObject={WebStaticImageProperty({
                                                                                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$warning_triangle.svg" }
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
                                                                                                                                                        class={"mx-name-image14 img--14-14"}
                                                                                                                                                        style={undefined}
                                                                                                                                                        tabIndex={undefined} />,
                                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container7"
                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container7"
                                                                                                                                                        class={"mx-name-container7 spacing-outer-left-small"}
                                                                                                                                                        style={undefined}
                                                                                                                                                        renderMode={"div"}
                                                                                                                                                        onClick={undefined}
                                                                                                                                                        content={[
                                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text13"
                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text13"
                                                                                                                                                                class={"mx-name-text13 font-weight-semibold"}
                                                                                                                                                                style={undefined}
                                                                                                                                                                caption={t([
                                                                                                                                                                    ExpressionProperty({
                                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Draft, " }, "args": {} }
                                                                                                                                                                    })
                                                                                                                                                                ])}
                                                                                                                                                                renderMode={"span"} />,
                                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text12"
                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text12"
                                                                                                                                                                class={"mx-name-text12"}
                                                                                                                                                                style={undefined}
                                                                                                                                                                caption={t([
                                                                                                                                                                    ExpressionProperty({
                                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "your draft might have been changed after this execution" }, "args": {} }
                                                                                                                                                                    })
                                                                                                                                                                ])}
                                                                                                                                                                renderMode={"span"} />
                                                                                                                                                        ]}
                                                                                                                                                        ariaHidden={false} />
                                                                                                                                                ]}
                                                                                                                                                ariaHidden={false} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "Version", "path": "Description" } ] }, { "type": "literal", "value": "" } ] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container68"
                                                                                                                                        class={"mx-name-container68 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text70"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text70"
                                                                                                                                                class={"mx-name-text70 font-weight-semibold"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "Version", "path": "Description" } ] }, { "type": "literal", "value": "" } ] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container25"
                                                                                                                                        class={"mx-name-container25 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text71"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text71"
                                                                                                                                                class={"mx-name-text71 text-clamp--5-lines"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "variable", "variable": "Version", "path": "Description" }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "Version", "path": "SystemPrompt" }, { "type": "literal", "value": null } ] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container69"
                                                                                                                                        class={"mx-name-container69 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text72"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text72"
                                                                                                                                                class={"mx-name-text72 font-weight-semibold"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "System prompt" }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "Version", "path": "SystemPrompt" }, { "type": "literal", "value": null } ] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container26"
                                                                                                                                        class={"mx-name-container26 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text73"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text73"
                                                                                                                                                class={"mx-name-text73 text-clamp--5-lines"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "variable", "variable": "Version", "path": "SystemPrompt" }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container70"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container70"
                                                                                                                                class={"mx-name-container70 tooltip-col"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text74"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text74"
                                                                                                                                        class={"mx-name-text74 font-weight-semibold"}
                                                                                                                                        style={undefined}
                                                                                                                                        caption={t([
                                                                                                                                            ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "literal", "value": "User prompt" }, "args": {} }
                                                                                                                                            })
                                                                                                                                        ])}
                                                                                                                                        renderMode={"span"} />
                                                                                                                                ]}
                                                                                                                                ariaHidden={false} />,
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container27"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container27"
                                                                                                                                class={"mx-name-container27 tooltip-col"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text75"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text75"
                                                                                                                                        class={"mx-name-text75"}
                                                                                                                                        style={undefined}
                                                                                                                                        caption={t([
                                                                                                                                            ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "variable", "variable": "Trace", "path": "Input" }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                                                                            })
                                                                                                                                        ])}
                                                                                                                                        renderMode={"span"} />
                                                                                                                                ]}
                                                                                                                                ariaHidden={false} />,
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container71"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container71"
                                                                                                                                class={"mx-name-container71 tooltip-col"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text76"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text76"
                                                                                                                                        class={"mx-name-text76 font-weight-semibold"}
                                                                                                                                        style={undefined}
                                                                                                                                        caption={t([
                                                                                                                                            ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "literal", "value": "Model\r\n" }, "args": {} }
                                                                                                                                            })
                                                                                                                                        ])}
                                                                                                                                        renderMode={"span"} />
                                                                                                                                ]}
                                                                                                                                ariaHidden={false} />,
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container2"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container2"
                                                                                                                                class={"mx-name-container2 tooltip-col"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$DataView key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3"
                                                                                                                                        class={"mx-name-dataView3 form-horizontal"}
                                                                                                                                        style={undefined}
                                                                                                                                        tabIndex={undefined}
                                                                                                                                        object={AssociationObjectProperty({
                                                                                                                                            "dataSourceId": "p.152",
                                                                                                                                            "scope": "$Trace",
                                                                                                                                            "editable": true,
                                                                                                                                            "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                                                                                                            "operationId": "IexT4QgAZlOJOosB1gH8FQ"
                                                                                                                                        })}
                                                                                                                                        emptyMessage={TextProperty({
                                                                                                                                            "value": t([
                                                                                                                                                ""
                                                                                                                                            ])
                                                                                                                                        })}
                                                                                                                                        body={[
                                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container31"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container31"
                                                                                                                                                class={"mx-name-container31 tooltip-icon-text"}
                                                                                                                                                style={undefined}
                                                                                                                                                renderMode={"div"}
                                                                                                                                                onClick={undefined}
                                                                                                                                                content={[
                                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container6"
                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container6"
                                                                                                                                                        class={"mx-name-container6"}
                                                                                                                                                        style={undefined}
                                                                                                                                                        renderMode={"div"}
                                                                                                                                                        onClick={undefined}
                                                                                                                                                        content={[
                                                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6$visibility"
                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6$visibility"
                                                                                                                                                                visible={ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                                                                })}
                                                                                                                                                                contents={[
                                                                                                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6"
                                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image6"
                                                                                                                                                                        datasource={"image"}
                                                                                                                                                                        imageObject={WebStaticImageProperty({
                                                                                                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$openai.svg" }
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
                                                                                                                                                                        class={"mx-name-image6 unset-img-width"}
                                                                                                                                                                        style={undefined}
                                                                                                                                                                        tabIndex={undefined} />
                                                                                                                                                                ]} />,
                                                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12$visibility"
                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12$visibility"
                                                                                                                                                                visible={ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Bedrock" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                                                                })}
                                                                                                                                                                contents={[
                                                                                                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12"
                                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image12"
                                                                                                                                                                        datasource={"image"}
                                                                                                                                                                        imageObject={WebStaticImageProperty({
                                                                                                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$bedrock.svg" }
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
                                                                                                                                                                        class={"mx-name-image12 unset-img-width"}
                                                                                                                                                                        style={undefined}
                                                                                                                                                                        tabIndex={undefined} />
                                                                                                                                                                ]} />,
                                                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13$visibility"
                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13$visibility"
                                                                                                                                                                visible={ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Azure" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                                                                })}
                                                                                                                                                                contents={[
                                                                                                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13"
                                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image13"
                                                                                                                                                                        datasource={"image"}
                                                                                                                                                                        imageObject={WebStaticImageProperty({
                                                                                                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$Azure_outline.svg" }
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
                                                                                                                                                                        class={"mx-name-image13 unset-img-width"}
                                                                                                                                                                        style={undefined}
                                                                                                                                                                        tabIndex={undefined} />
                                                                                                                                                                ]} />,
                                                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9$visibility"
                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9$visibility"
                                                                                                                                                                visible={ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mendix" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                                                                })}
                                                                                                                                                                contents={[
                                                                                                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9"
                                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image9"
                                                                                                                                                                        datasource={"image"}
                                                                                                                                                                        imageObject={WebStaticImageProperty({
                                                                                                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$cloud_sparkle.svg" }
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
                                                                                                                                                                        class={"mx-name-image9 unset-img-width"}
                                                                                                                                                                        style={undefined}
                                                                                                                                                                        tabIndex={undefined} />
                                                                                                                                                                ]} />,
                                                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15$visibility"
                                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15$visibility"
                                                                                                                                                                visible={ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                                                                })}
                                                                                                                                                                contents={[
                                                                                                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15"
                                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image15"
                                                                                                                                                                        datasource={"image"}
                                                                                                                                                                        imageObject={WebStaticImageProperty({
                                                                                                                                                                            "image": { "uri": "img/ConversationalUI$Image_Traces$Mistral.svg" }
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
                                                                                                                                                                        class={"mx-name-image15 unset-img-width"}
                                                                                                                                                                        style={undefined}
                                                                                                                                                                        tabIndex={undefined} />
                                                                                                                                                                ]} />
                                                                                                                                                        ]}
                                                                                                                                                        ariaHidden={false} />,
                                                                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text80"
                                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text80"
                                                                                                                                                        class={"mx-name-text80"}
                                                                                                                                                        style={undefined}
                                                                                                                                                        caption={t([
                                                                                                                                                            ExpressionProperty({
                                                                                                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeployedModelDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView3", "source": "object" } } }
                                                                                                                                                            })
                                                                                                                                                        ])}
                                                                                                                                                        renderMode={"span"} />
                                                                                                                                                ]}
                                                                                                                                                ariaHidden={false} />
                                                                                                                                        ]}
                                                                                                                                        hideFooter={false}
                                                                                                                                        footer={undefined} />
                                                                                                                                ]}
                                                                                                                                ariaHidden={false} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" } ] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container72"
                                                                                                                                        class={"mx-name-container72 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text78"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text78"
                                                                                                                                                class={"mx-name-text78 font-weight-semibold"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Tools\r\n" }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NrOfMCPCalls" }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NrOfToolCalls" }, { "type": "literalNumeric", "value": "0" } ] } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container1"
                                                                                                                                        class={"mx-name-container1 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$ListView key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1"
                                                                                                                                                class={"mx-name-listView1 listview-custom-spacing listview-hide-on-empty listview-remove-spacing listview-stylingless"}
                                                                                                                                                style={undefined}
                                                                                                                                                listValue={DatabaseObjectListProperty({
                                                                                                                                                    "dataSourceId": "p.10",
                                                                                                                                                    "entity": "AgentCommons.Tool",
                                                                                                                                                    "scope": "p.ConversationalUI.Trace_Details.dataView5",
                                                                                                                                                    "operationId": "ti6paQvc91qEPS4EdO9E9Q",
                                                                                                                                                    "sort": [],
                                                                                                                                                    "arguments": {
                                                                                                                                                        "Version": [
                                                                                                                                                            "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                                                        ],
                                                                                                                                                        "CurrentObject": [
                                                                                                                                                            "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                                                        ]
                                                                                                                                                    },
                                                                                                                                                    "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "AgentCommons.Tool_Version", "context": "AgentCommons.Tool", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Version" } ] }
                                                                                                                                                })}
                                                                                                                                                itemTemplate={TemplatedWidgetProperty({
                                                                                                                                                    "dataSourceId": "p.10",
                                                                                                                                                    "editable": false,
                                                                                                                                                    "children": () => [
                                                                                                                                                        <$ConditionalVisibilityWrapper key="p.184"
                                                                                                                                                            $widgetId="p.184"
                                                                                                                                                            visible={ExpressionProperty({
                                                                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.Tool" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                                                            })}
                                                                                                                                                            contents={[
                                                                                                                                                                <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container30"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container30"
                                                                                                                                                                    class={"mx-name-container30 row-text-img"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    renderMode={"div"}
                                                                                                                                                                    onClick={undefined}
                                                                                                                                                                    content={[
                                                                                                                                                                        <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image7"
                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image7"
                                                                                                                                                                            datasource={"image"}
                                                                                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                                                                                                                            class={"mx-name-image7 img--20-20"}
                                                                                                                                                                            style={undefined}
                                                                                                                                                                            tabIndex={undefined} />,
                                                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text79"
                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text79"
                                                                                                                                                                            class={"mx-name-text79 text-clamp--1-lines spacing-outer-left-smallest"}
                                                                                                                                                                            style={undefined}
                                                                                                                                                                            caption={t([
                                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                                                                                })
                                                                                                                                                                            ])}
                                                                                                                                                                            renderMode={"span"} />
                                                                                                                                                                    ]}
                                                                                                                                                                    ariaHidden={false} />
                                                                                                                                                            ]} />,
                                                                                                                                                        <$ConditionalVisibilityWrapper key="p.191"
                                                                                                                                                            $widgetId="p.191"
                                                                                                                                                            visible={ExpressionProperty({
                                                                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.MCP" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                                                            })}
                                                                                                                                                            contents={[
                                                                                                                                                                <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container36"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container36"
                                                                                                                                                                    class={"mx-name-container36 row-text-img"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    renderMode={"div"}
                                                                                                                                                                    onClick={undefined}
                                                                                                                                                                    content={[
                                                                                                                                                                        <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image8"
                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image8"
                                                                                                                                                                            datasource={"image"}
                                                                                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$MCP.svg" }
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
                                                                                                                                                                            class={"mx-name-image8 img--20-20"}
                                                                                                                                                                            style={undefined}
                                                                                                                                                                            tabIndex={undefined} />,
                                                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text85"
                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text85"
                                                                                                                                                                            class={"mx-name-text85 text-clamp--1-lines spacing-outer-left-smallest"}
                                                                                                                                                                            style={undefined}
                                                                                                                                                                            caption={t([
                                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                                                                                })
                                                                                                                                                                            ])}
                                                                                                                                                                            renderMode={"span"} />
                                                                                                                                                                    ]}
                                                                                                                                                                    ariaHidden={false} />
                                                                                                                                                            ]} />,
                                                                                                                                                        <$ConditionalVisibilityWrapper key="p.198"
                                                                                                                                                            $widgetId="p.198"
                                                                                                                                                            visible={ExpressionProperty({
                                                                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "type" }, { "type": "literal", "value": "AgentCommons.SingleMCPTool" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                                                            })}
                                                                                                                                                            contents={[
                                                                                                                                                                <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container37"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container37"
                                                                                                                                                                    class={"mx-name-container37 row-text-img"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    renderMode={"div"}
                                                                                                                                                                    onClick={undefined}
                                                                                                                                                                    content={[
                                                                                                                                                                        <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image11"
                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image11"
                                                                                                                                                                            datasource={"image"}
                                                                                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                                                                                "image": { "uri": "img/ConversationalUI$Image_Traces$wrench.svg" }
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
                                                                                                                                                                            class={"mx-name-image11 img--20-20"}
                                                                                                                                                                            style={undefined}
                                                                                                                                                                            tabIndex={undefined} />,
                                                                                                                                                                        <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text86"
                                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text86"
                                                                                                                                                                            class={"mx-name-text86 text-clamp--1-lines spacing-outer-left-smallest"}
                                                                                                                                                                            style={undefined}
                                                                                                                                                                            caption={t([
                                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView1", "source": "object" } } }
                                                                                                                                                                                })
                                                                                                                                                                            ])}
                                                                                                                                                                            renderMode={"span"} />
                                                                                                                                                                    ]}
                                                                                                                                                                    ariaHidden={false} />
                                                                                                                                                            ]} />
                                                                                                                                                    ]
                                                                                                                                                })}
                                                                                                                                                onClick={undefined}
                                                                                                                                                pageSize={10} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container73"
                                                                                                                                        class={"mx-name-container73 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text82"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text82"
                                                                                                                                                class={"mx-name-text82 font-weight-semibold"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Knowledge base\r\n" }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5$visibility"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5$visibility"
                                                                                                                                visible={ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "NrOfKBCalls" }, { "type": "literalNumeric", "value": "0" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView1", "source": "object" } } }
                                                                                                                                })}
                                                                                                                                contents={[
                                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container5"
                                                                                                                                        class={"mx-name-container5 tooltip-col"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$ListView key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2"
                                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2"
                                                                                                                                                class={"mx-name-listView2 listview-custom-spacing listview-hide-on-empty listview-remove-spacing listview-stylingless"}
                                                                                                                                                style={undefined}
                                                                                                                                                listValue={DatabaseObjectListProperty({
                                                                                                                                                    "dataSourceId": "p.11",
                                                                                                                                                    "entity": "AgentCommons.KnowledgeBase",
                                                                                                                                                    "scope": "p.ConversationalUI.Trace_Details.dataView5",
                                                                                                                                                    "operationId": "flq2x0nbUla2xji6ZQBF0g",
                                                                                                                                                    "sort": [],
                                                                                                                                                    "arguments": {
                                                                                                                                                        "Version": [
                                                                                                                                                            "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                                                        ],
                                                                                                                                                        "CurrentObject": [
                                                                                                                                                            "p.ConversationalUI.Trace_Details.dataView5"
                                                                                                                                                        ]
                                                                                                                                                    },
                                                                                                                                                    "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "AgentCommons.KnowledgeBase_Version", "context": "AgentCommons.KnowledgeBase", "attributeType": "ObjectReference" }, { "type": "variable", "name": "Version" } ] }
                                                                                                                                                })}
                                                                                                                                                itemTemplate={TemplatedWidgetProperty({
                                                                                                                                                    "dataSourceId": "p.11",
                                                                                                                                                    "editable": false,
                                                                                                                                                    "children": () => [
                                                                                                                                                        <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container34"
                                                                                                                                                            $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container34"
                                                                                                                                                            class={"mx-name-container34 row-text-img"}
                                                                                                                                                            style={undefined}
                                                                                                                                                            renderMode={"div"}
                                                                                                                                                            onClick={undefined}
                                                                                                                                                            content={[
                                                                                                                                                                <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image10"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image10"
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
                                                                                                                                                                    class={"mx-name-image10 img--20-20"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    tabIndex={undefined} />,
                                                                                                                                                                <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text83"
                                                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text83"
                                                                                                                                                                    class={"mx-name-text83 text-clamp--1-lines spacing-outer-left-smallest"}
                                                                                                                                                                    style={undefined}
                                                                                                                                                                    caption={t([
                                                                                                                                                                        ExpressionProperty({
                                                                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.listView2", "source": "object" } } }
                                                                                                                                                                        })
                                                                                                                                                                    ])}
                                                                                                                                                                    renderMode={"span"} />
                                                                                                                                                            ]}
                                                                                                                                                            ariaHidden={false} />
                                                                                                                                                    ]
                                                                                                                                                })}
                                                                                                                                                onClick={undefined}
                                                                                                                                                pageSize={10} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />,
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container76"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container76"
                                                                                                                                class={"mx-name-container76 tooltip-col"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text89"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text89"
                                                                                                                                        class={"mx-name-text89 font-weight-semibold"}
                                                                                                                                        style={undefined}
                                                                                                                                        caption={t([
                                                                                                                                            ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "literal", "value": "Last edited" }, "args": {} }
                                                                                                                                            })
                                                                                                                                        ])}
                                                                                                                                        renderMode={"span"} />
                                                                                                                                ]}
                                                                                                                                ariaHidden={false} />,
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container38"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container38"
                                                                                                                                class={"mx-name-container38 tooltip-icon-text"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Image key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image16"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.image16"
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
                                                                                                                                        class={"mx-name-image16 unset-img-width"}
                                                                                                                                        style={undefined}
                                                                                                                                        tabIndex={undefined} />,
                                                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text90"
                                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.text90"
                                                                                                                                        class={"mx-name-text90"}
                                                                                                                                        style={undefined}
                                                                                                                                        caption={t([
                                                                                                                                            ExpressionProperty({
                                                                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "Version", "path": "VersionChangedDate" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
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
                                                                                                                class={"mx-name-tooltip3 convui-tooltip"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined} />
                                                                                                        ]}
                                                                                                        hideFooter={false}
                                                                                                        footer={undefined} />,
                                                                                                    <$DataView key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2"
                                                                                                        class={"mx-name-dataView2 form-horizontal"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined}
                                                                                                        object={AssociationObjectProperty({
                                                                                                            "dataSourceId": "p.233",
                                                                                                            "scope": "p.ConversationalUI.Trace_Details.dataView5",
                                                                                                            "editable": true,
                                                                                                            "path": "AgentCommons.Version_Agent/AgentCommons.Agent",
                                                                                                            "operationId": "YyX2uHm69FqnC+PXqvqEng"
                                                                                                        })}
                                                                                                        emptyMessage={TextProperty({
                                                                                                            "value": t([
                                                                                                                ""
                                                                                                            ])
                                                                                                        })}
                                                                                                        body={[
                                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28$visibility"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28$visibility"
                                                                                                                visible={ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "variable", "variable": "Version" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceVersion_Tooltip.dataView2", "source": "object" }, "Version": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                })}
                                                                                                                contents={[
                                                                                                                    <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28"
                                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container28"
                                                                                                                        class={"mx-name-container28 circle-badge circle-badge--success"}
                                                                                                                        style={undefined}
                                                                                                                        renderMode={"div"}
                                                                                                                        onClick={undefined}
                                                                                                                        content={[
                                                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container65"
                                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceVersion_Tooltip.container65"
                                                                                                                                class={"mx-name-container65 circle"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={undefined}
                                                                                                                                ariaHidden={false} />
                                                                                                                        ]}
                                                                                                                        ariaHidden={false} />
                                                                                                                ]} />
                                                                                                        ]}
                                                                                                        hideFooter={false}
                                                                                                        footer={undefined} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />,
                                                                            <$Container key="p.ConversationalUI.Trace_Details.container31"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.container31"
                                                                                class={"mx-name-container31 row-left-aligned"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.container37$visibility"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container37$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container37"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container37"
                                                                                                class={"mx-name-container37"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton5$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton5$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton5"
                                                                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton5"
                                                                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton5"}
                                                                                                                class={"mx-name-actionButton5 link-bold"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined}
                                                                                                                renderType={"link"}
                                                                                                                role={"button"}
                                                                                                                buttonClass={"btn-default"}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Draft" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                tooltip={TextProperty({
                                                                                                                    "value": t([
                                                                                                                        "Filter for the same agent draft"
                                                                                                                    ])
                                                                                                                })}
                                                                                                                icon={undefined}
                                                                                                                action={ActionProperty({
                                                                                                                    "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "QwR8+fQC7V+jOlT9MHfOcA", "progress": { "message": t([ "Filtering..." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                                    "abortOnServerValidation": true
                                                                                                                })} />
                                                                                                        ]} />,
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton4$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton4$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton4"
                                                                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton4"
                                                                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton4"}
                                                                                                                class={"mx-name-actionButton4 link-bold"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined}
                                                                                                                renderType={"link"}
                                                                                                                role={"button"}
                                                                                                                buttonClass={"btn-default"}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView5", "source": "object" } } }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                tooltip={TextProperty({
                                                                                                                    "value": t([
                                                                                                                        "Filter for the same agent version"
                                                                                                                    ])
                                                                                                                })}
                                                                                                                icon={undefined}
                                                                                                                action={ActionProperty({
                                                                                                                    "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "QwR8+fQC7V+jOlT9MHfOcA", "progress": { "message": t([ "Filtering..." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                                    "abortOnServerValidation": true
                                                                                                                })} />
                                                                                                        ]} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton13$visibility"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton13$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "Trace", "path": "_AgentVersionId" } ] }, { "type": "literal", "value": "" } ] }, "else": { "type": "literal", "value": false } }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton13"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton13"
                                                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton13"}
                                                                                                class={"mx-name-actionButton13 btn-icon-only spacing-outer-left-small"}
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
                                                                                                        "Go to Version"
                                                                                                    ])
                                                                                                })}
                                                                                                icon={WebIconProperty({
                                                                                                    "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$link_attachments.svg" }
                                                                                                })}
                                                                                                action={ActionProperty({
                                                                                                    "action": { "type": "callMicroflow", "argMap": { "Trace": { "widget": "$Trace", "source": "object" } }, "config": { "operationId": "HFrZY1HgO1GWSXg16plHcw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                    "abortOnServerValidation": true
                                                                                                })} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        hideFooter={false}
                                                                        footer={undefined} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.ConversationalUI.Trace_Details.container92"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container92"
                                                                class={"mx-name-container92"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.Trace_Details.text37"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.text37"
                                                                        class={"mx-name-text37 font-weight-semibold"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Start time" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Container key="p.ConversationalUI.Trace_Details.container12"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.container12"
                                                                        class={"mx-name-container12 spacing-outer-top-smaller"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Fragment key="p.ConversationalUI.Trace_Details.snippetCall8"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.snippetCall8"
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
                                                                        ariaHidden={false} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.ConversationalUI.Trace_Details.container102"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container102"
                                                                class={"mx-name-container102"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.Trace_Details.text41"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.text41"
                                                                        class={"mx-name-text41 font-weight-semibold"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "End time" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Container key="p.ConversationalUI.Trace_Details.container13"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.container13"
                                                                        class={"mx-name-container13 spacing-outer-top-smaller"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Fragment key="p.ConversationalUI.Trace_Details.snippetCall9"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.snippetCall9"
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
                                                                        ariaHidden={false} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.ConversationalUI.Trace_Details.container110"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container110"
                                                                class={"mx-name-container110"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.Trace_Details.text47"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.text47"
                                                                        class={"mx-name-text47 font-weight-semibold"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Duration" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Container key="p.ConversationalUI.Trace_Details.container14"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.container14"
                                                                        class={"mx-name-container14 spacing-outer-top-smaller"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Fragment key="p.ConversationalUI.Trace_Details.snippetCall10"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.snippetCall10"
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
                                                                        ariaHidden={false} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.ConversationalUI.Trace_Details.container111"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container111"
                                                                class={"mx-name-container111"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.Trace_Details.text48"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.text48"
                                                                        class={"mx-name-text48 font-weight-semibold"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Container key="p.ConversationalUI.Trace_Details.container27"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.container27"
                                                                        class={"mx-name-container27 spacing-outer-top-smaller"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Fragment key="p.ConversationalUI.Trace_Details.snippetCall1"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.snippetCall1"
                                                                                content={[
                                                                                    <$DataView key="p.ConversationalUI.Snippet_TraceModel.dataView2"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceModel.dataView2"
                                                                                        class={"mx-name-dataView2 form-horizontal"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        object={AssociationObjectProperty({
                                                                                            "dataSourceId": "p.299",
                                                                                            "scope": "$Trace",
                                                                                            "editable": true,
                                                                                            "path": "GenAICommons.Trace_Usage/GenAICommons.Usage",
                                                                                            "operationId": "D00IaAVG11+Ypm6BGgCyPA"
                                                                                        })}
                                                                                        emptyMessage={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        body={[
                                                                                            <$Container key="p.ConversationalUI.Snippet_TraceModel.container30"
                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceModel.container30"
                                                                                                class={"mx-name-container30 row-text-img"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceModel.image6$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceModel.image6$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "OpenAI" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$Image key="p.ConversationalUI.Snippet_TraceModel.image6"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceModel.image6"
                                                                                                                datasource={"image"}
                                                                                                                imageObject={WebStaticImageProperty({
                                                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$openai.svg" }
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
                                                                                                                class={"mx-name-image6 unset-img-width"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined} />
                                                                                                        ]} />,
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceModel.image7$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceModel.image7$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Bedrock" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$Image key="p.ConversationalUI.Snippet_TraceModel.image7"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceModel.image7"
                                                                                                                datasource={"image"}
                                                                                                                imageObject={WebStaticImageProperty({
                                                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$bedrock.svg" }
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
                                                                                                                class={"mx-name-image7 unset-img-width"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined} />
                                                                                                        ]} />,
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceModel.image8$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceModel.image8$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Azure" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$Image key="p.ConversationalUI.Snippet_TraceModel.image8"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceModel.image8"
                                                                                                                datasource={"image"}
                                                                                                                imageObject={WebStaticImageProperty({
                                                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$Azure_outline.svg" }
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
                                                                                                                class={"mx-name-image8 unset-img-width"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined} />
                                                                                                        ]} />,
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceModel.image9$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceModel.image9$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mendix" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$Image key="p.ConversationalUI.Snippet_TraceModel.image9"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceModel.image9"
                                                                                                                datasource={"image"}
                                                                                                                imageObject={WebStaticImageProperty({
                                                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$cloud_sparkle.svg" }
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
                                                                                                                class={"mx-name-image9 unset-img-width"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined} />
                                                                                                        ]} />,
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TraceModel.image10$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceModel.image10$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" }, { "type": "literal", "value": "Mistral" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$Image key="p.ConversationalUI.Snippet_TraceModel.image10"
                                                                                                                $widgetId="p.ConversationalUI.Snippet_TraceModel.image10"
                                                                                                                datasource={"image"}
                                                                                                                imageObject={WebStaticImageProperty({
                                                                                                                    "image": { "uri": "img/ConversationalUI$Image_Traces$Mistral.svg" }
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
                                                                                                                class={"mx-name-image10 unset-img-width"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined} />
                                                                                                        ]} />,
                                                                                                    <$Text key="p.ConversationalUI.Snippet_TraceModel.text80"
                                                                                                        $widgetId="p.ConversationalUI.Snippet_TraceModel.text80"
                                                                                                        class={"mx-name-text80"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DeployedModelDisplayName" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TraceModel.dataView2", "source": "object" } } }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]}
                                                                                        hideFooter={false}
                                                                                        footer={undefined} />
                                                                                ]} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.ConversationalUI.Trace_Details.container95"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container95"
                                                                class={"mx-name-container95"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Container key="p.ConversationalUI.Trace_Details.container40"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.container40"
                                                                        class={"mx-name-container40 row-left-aligned spacing-outer-bottom-smallest"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Container key="p.ConversationalUI.Trace_Details.container51"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.container51"
                                                                                class={"mx-name-container51"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text40"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text40"
                                                                                        class={"mx-name-text40 font-weight-semibold"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Tokens" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />,
                                                                            <$Tooltip key="p.ConversationalUI.Trace_Details.tooltip6"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.tooltip6"
                                                                                trigger={[
                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.actionButton25$visibility"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.actionButton25$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$ActionButton key="p.ConversationalUI.Trace_Details.actionButton25"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.actionButton25"
                                                                                                buttonId={"p.ConversationalUI.Trace_Details.actionButton25"}
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
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container47"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container47"
                                                                                        class={"mx-name-container47 tooltip-container-token"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container48"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container48"
                                                                                                class={"mx-name-container48 tooltip-row-text-icon"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image6"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image6"
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
                                                                                                        class={"mx-name-image6 img--14-20"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined} />,
                                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text23"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text23"
                                                                                                        class={"mx-name-text23 font-weight-semibold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Total tokens" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container49"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container49"
                                                                                                class={"mx-name-container49 tooltip-col"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text6"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text6"
                                                                                                        class={"mx-name-text6"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]}
                                                                                        ariaHidden={false} />,
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container50"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container50"
                                                                                        class={"mx-name-container50 divider spacing-inner-none spacing-outer-left spacing-outer-right"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={undefined}
                                                                                        ariaHidden={false} />,
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container56"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container56"
                                                                                        class={"mx-name-container56 tooltip-container-token"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container57"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container57"
                                                                                                class={"mx-name-container57 tooltip-row-text-icon"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image10"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image10"
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
                                                                                                        class={"mx-name-image10 img--14-20"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined} />,
                                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text8"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text8"
                                                                                                        class={"mx-name-text8 font-weight-semibold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Input token" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container58"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container58"
                                                                                                class={"mx-name-container58 tooltip-col"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text5"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text5"
                                                                                                        class={"mx-name-text5"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]}
                                                                                        ariaHidden={false} />,
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container59"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container59"
                                                                                        class={"mx-name-container59 divider spacing-inner-none spacing-outer-left spacing-outer-right"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={undefined}
                                                                                        ariaHidden={false} />,
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container60"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container60"
                                                                                        class={"mx-name-container60 tooltip-container-token"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container61"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container61"
                                                                                                class={"mx-name-container61 tooltip-row-text-icon"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image14"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image14"
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
                                                                                                        class={"mx-name-image14 img--14-20"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined} />,
                                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text27"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text27"
                                                                                                        class={"mx-name-text27 font-weight-semibold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Output token" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container62"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container62"
                                                                                                class={"mx-name-container62 tooltip-col"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text7"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text7"
                                                                                                        class={"mx-name-text7"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
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
                                                                                class={"mx-name-tooltip6 convui-tooltip"}
                                                                                style={undefined}
                                                                                tabIndex={undefined} />
                                                                        ]}
                                                                        ariaHidden={false} />,
                                                                    <$Container key="p.ConversationalUI.Trace_Details.container15"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.container15"
                                                                        class={"mx-name-container15 spacing-outer-top-smaller"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Container key="p.ConversationalUI.Trace_Details.container41"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.container41"
                                                                                class={"mx-name-container41 row-left-aligned"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image11"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image11"
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
                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text9"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text9"
                                                                                        class={"mx-name-text9"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/TotalTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] }, { "type": "literal", "value": " (" } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/InputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] } ] }, { "type": "literal", "value": " / " } ] }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "dataView6", "path": "GenAICommons.Trace_Usage/GenAICommons.Usage/OutputTokens" }, { "type": "literal", "value": "{\"groupDigits\":true}" } ] } ] }, { "type": "literal", "value": ")" } ] }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"span"} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.container112$visibility"
                                                                $widgetId="p.ConversationalUI.Trace_Details.container112$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "dataView6", "path": "HasError" }, "args": { "dataView6": { "widget": "p.ConversationalUI.Trace_Details.dataView6", "source": "object" } } }
                                                                })}
                                                                contents={[
                                                                    <$Container key="p.ConversationalUI.Trace_Details.container112"
                                                                        $widgetId="p.ConversationalUI.Trace_Details.container112"
                                                                        class={"mx-name-container112"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Text key="p.ConversationalUI.Trace_Details.text49"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.text49"
                                                                                class={"mx-name-text49 font-weight-semibold"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Error" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                renderMode={"span"} />,
                                                                            <$Container key="p.ConversationalUI.Trace_Details.container28"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.container28"
                                                                                class={"mx-name-container28 spacing-outer-top-smaller row-text-img"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image32"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image32"
                                                                                        datasource={"icon"}
                                                                                        imageObject={undefined}
                                                                                        defaultImageDynamic={undefined}
                                                                                        imageUrl={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        imageIcon={WebIconProperty({
                                                                                            "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                                        class={"mx-name-image32 unset-img-width"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$Container key="p.ConversationalUI.Trace_Details.container2"
                                                        $widgetId="p.ConversationalUI.Trace_Details.container2"
                                                        class={"mx-name-container2 divider spacing-outer-bottom-large spacing-outer-top-large"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={undefined}
                                                        ariaHidden={false} />,
                                                    <$TreeNode key="p.ConversationalUI.Trace_Details.treeNode1"
                                                        $widgetId="p.ConversationalUI.Trace_Details.treeNode1"
                                                        advancedMode={false}
                                                        datasource={MicroflowObjectListProperty({
                                                            "argMap": { "Trace": { "widget": "$Trace", "source": "object" } },
                                                            "dataSourceId": "p.20",
                                                            "entity": "ConversationalUI.SpanTreeView",
                                                            "scope": "p.ConversationalUI.Trace_Details.dataView3",
                                                            "operationId": "c9WeK571/1S+i6F3CY9TOQ"
                                                        })}
                                                        headerType={"custom"}
                                                        openNodeOn={"iconClick"}
                                                        headerContent={TemplatedWidgetProperty({
                                                            "dataSourceId": "p.20",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$Container key="p.ConversationalUI.Trace_Details.container68"
                                                                    $widgetId="p.ConversationalUI.Trace_Details.container68"
                                                                    class={"mx-name-container68 row-text-img"}
                                                                    style={undefined}
                                                                    renderMode={"div"}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$Container key="p.ConversationalUI.Trace_Details.container21"
                                                                            $widgetId="p.ConversationalUI.Trace_Details.container21"
                                                                            class={"mx-name-container21 row-text-img"}
                                                                            style={undefined}
                                                                            tabIndex={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": { "SpanTreeView": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" }, "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } }, "config": { "operationId": "Uqaw0YoAG1y4G0ddtEPbug", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true }
                                                                            })}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image25$visibility"
                                                                                    $widgetId="p.ConversationalUI.Trace_Details.image25$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "Agent" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$Image key="p.ConversationalUI.Trace_Details.image25"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image25"
                                                                                            datasource={"icon"}
                                                                                            imageObject={undefined}
                                                                                            defaultImageDynamic={undefined}
                                                                                            imageUrl={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            imageIcon={WebIconProperty({
                                                                                                "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$robot.svg" }
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
                                                                                            class={"mx-name-image25 img--24-24 spacing-outer-right-smaller"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined} />
                                                                                    ]} />,
                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image22$visibility"
                                                                                    $widgetId="p.ConversationalUI.Trace_Details.image22$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$Image key="p.ConversationalUI.Trace_Details.image22"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image22"
                                                                                            datasource={"icon"}
                                                                                            imageObject={undefined}
                                                                                            defaultImageDynamic={undefined}
                                                                                            imageUrl={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            imageIcon={WebIconProperty({
                                                                                                "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$text_sparkle.svg" }
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
                                                                                            class={"mx-name-image22 img--24-24 spacing-outer-right-smaller"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined} />
                                                                                    ]} />,
                                                                                <$Tooltip key="p.ConversationalUI.Trace_Details.tooltip3"
                                                                                    $widgetId="p.ConversationalUI.Trace_Details.tooltip3"
                                                                                    trigger={[
                                                                                        <$Text key="p.ConversationalUI.Trace_Details.text12"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.text12"
                                                                                            class={"mx-name-text12 font-size-medium text-clamp--1-lines tree-item-hover"}
                                                                                            style={undefined}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                                                                })
                                                                                            ])}
                                                                                            renderMode={"span"} />
                                                                                    ]}
                                                                                    renderMethod={"custom"}
                                                                                    htmlMessage={[
                                                                                        <$Container key="p.ConversationalUI.Trace_Details.container25"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.container25"
                                                                                            class={"mx-name-container25 tooltip-container"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$Text key="p.ConversationalUI.Trace_Details.text13"
                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.text13"
                                                                                                    class={"mx-name-text13"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
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
                                                                                    tooltipPosition={"right"}
                                                                                    arrowPosition={"end"}
                                                                                    openOn={"hover"}
                                                                                    class={"mx-name-tooltip3 convui-tooltip"}
                                                                                    style={undefined}
                                                                                    tabIndex={undefined} />,
                                                                                <$DataView key="p.ConversationalUI.Trace_Details.dataView7"
                                                                                    $widgetId="p.ConversationalUI.Trace_Details.dataView7"
                                                                                    class={"mx-name-dataView7 form-horizontal"}
                                                                                    style={undefined}
                                                                                    tabIndex={undefined}
                                                                                    object={AssociationObjectProperty({
                                                                                        "dataSourceId": "p.411",
                                                                                        "scope": "p.ConversationalUI.Trace_Details.treeNode1",
                                                                                        "editable": true,
                                                                                        "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                        "operationId": "8xILStGRp1+AHSI5kwaIMQ"
                                                                                    })}
                                                                                    emptyMessage={TextProperty({
                                                                                        "value": t([
                                                                                            ""
                                                                                        ])
                                                                                    })}
                                                                                    body={[
                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.container33$visibility"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.container33$visibility"
                                                                                            visible={ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsError" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView7", "source": "object" } } }
                                                                                            })}
                                                                                            contents={[
                                                                                                <$Container key="p.ConversationalUI.Trace_Details.container33"
                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container33"
                                                                                                    class={"mx-name-container33 spacing-outer-left-small"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Image key="p.ConversationalUI.Trace_Details.image33"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image33"
                                                                                                            datasource={"icon"}
                                                                                                            imageObject={undefined}
                                                                                                            defaultImageDynamic={undefined}
                                                                                                            imageUrl={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                })
                                                                                                            ])}
                                                                                                            imageIcon={WebIconProperty({
                                                                                                                "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                                                            class={"mx-name-image33 unset-img-width"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />
                                                                                            ]} />
                                                                                    ]}
                                                                                    hideFooter={false}
                                                                                    footer={undefined} />
                                                                            ]}
                                                                            ariaHidden={false} />,
                                                                        <$Container key="p.ConversationalUI.Trace_Details.container9"
                                                                            $widgetId="p.ConversationalUI.Trace_Details.container9"
                                                                            class={"mx-name-container9 row-text-img tree-duration-position-parent"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.container8$visibility"
                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container8$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "Agent" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$Container key="p.ConversationalUI.Trace_Details.container8"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.container8"
                                                                                            class={"mx-name-container8 row-left-aligned spacing-inner-left-20"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$Container key="p.ConversationalUI.Trace_Details.container19"
                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container19"
                                                                                                    class={"mx-name-container19 row-text-img"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Image key="p.ConversationalUI.Trace_Details.image1"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image1"
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
                                                                                                        <$Text key="p.ConversationalUI.Trace_Details.text3"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.text3"
                                                                                                            class={"mx-name-text3 font-weight-semibold"}
                                                                                                            style={undefined}
                                                                                                            caption={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "formatDecimal", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Trace", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] } ] }, { "type": "literal", "value": "s" } ] } } }, "args": { "Trace": { "widget": "$Trace", "source": "object" } } }
                                                                                                                })
                                                                                                            ])}
                                                                                                            renderMode={"span"} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />,
                                                                        <$Container key="p.ConversationalUI.Trace_Details.container23"
                                                                            $widgetId="p.ConversationalUI.Trace_Details.container23"
                                                                            class={"mx-name-container23 row-text-img tree-duration-position"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.dataView1$visibility"
                                                                                    $widgetId="p.ConversationalUI.Trace_Details.dataView1$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" } } }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$DataView key="p.ConversationalUI.Trace_Details.dataView1"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.dataView1"
                                                                                            class={"mx-name-dataView1 form-horizontal"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined}
                                                                                            object={AssociationObjectProperty({
                                                                                                "dataSourceId": "p.433",
                                                                                                "scope": "p.ConversationalUI.Trace_Details.treeNode1",
                                                                                                "editable": true,
                                                                                                "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                                "operationId": "TSjWh7PU4VGI44a7FIRZ5Q"
                                                                                            })}
                                                                                            emptyMessage={TextProperty({
                                                                                                "value": t([
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            body={[
                                                                                                <$Container key="p.ConversationalUI.Trace_Details.container30"
                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container30"
                                                                                                    class={"mx-name-container30 row-text-img"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Image key="p.ConversationalUI.Trace_Details.image2"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image2"
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
                                                                                                            class={"mx-name-image2 unset-img-width"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />,
                                                                                                        <$Text key="p.ConversationalUI.Trace_Details.text4"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.text4"
                                                                                                            class={"mx-name-text4"}
                                                                                                            style={undefined}
                                                                                                            caption={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DurationMilliseconds" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": "0.0" }, "else": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "formatDecimal", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] } ] }, { "type": "literal", "value": "s" } ] } } }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView1", "source": "object" } } }
                                                                                                                })
                                                                                                            ])}
                                                                                                            renderMode={"span"} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />
                                                                                            ]}
                                                                                            hideFooter={false}
                                                                                            footer={undefined} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ]}
                                                                    ariaHidden={false} />
                                                            ]
                                                        })}
                                                        headerCaption={t([
                                                            undefined
                                                        ])}
                                                        hasChildren={true}
                                                        startExpanded={true}
                                                        children={TemplatedWidgetProperty({
                                                            "dataSourceId": "p.20",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$TreeNode key="p.ConversationalUI.Trace_Details.treeNode2"
                                                                    $widgetId="p.ConversationalUI.Trace_Details.treeNode2"
                                                                    advancedMode={false}
                                                                    datasource={MicroflowObjectListProperty({
                                                                        "argMap": { "SpanTreeView_Parent": { "widget": "p.ConversationalUI.Trace_Details.treeNode1", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } },
                                                                        "dataSourceId": "p.21",
                                                                        "entity": "ConversationalUI.SpanTreeView",
                                                                        "scope": "p.ConversationalUI.Trace_Details.treeNode1",
                                                                        "operationId": "ZjwXVR+5IlezVTnT55eSAw"
                                                                    })}
                                                                    headerType={"custom"}
                                                                    openNodeOn={"iconClick"}
                                                                    headerContent={TemplatedWidgetProperty({
                                                                        "dataSourceId": "p.21",
                                                                        "editable": false,
                                                                        "children": () => [
                                                                            <$Container key="p.ConversationalUI.Trace_Details.container10"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.container10"
                                                                                class={"mx-name-container10 row-text-img"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container3"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container3"
                                                                                        class={"mx-name-container3 row-text-img"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={ActionProperty({
                                                                                            "action": { "type": "callMicroflow", "argMap": { "SpanTreeView": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" }, "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } }, "config": { "operationId": "Uqaw0YoAG1y4G0ddtEPbug", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true }
                                                                                        })}
                                                                                        content={[
                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image23$visibility"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.image23$visibility"
                                                                                                visible={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                                                })}
                                                                                                contents={[
                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image23"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image23"
                                                                                                        datasource={"icon"}
                                                                                                        imageObject={undefined}
                                                                                                        defaultImageDynamic={undefined}
                                                                                                        imageUrl={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        imageIcon={WebIconProperty({
                                                                                                            "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$text_sparkle.svg" }
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
                                                                                                        class={"mx-name-image23 img--24-24 spacing-outer-right-smaller"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined} />
                                                                                                ]} />,
                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image24$visibility"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.image24$visibility"
                                                                                                visible={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "KnowledgeBaseCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                                                })}
                                                                                                contents={[
                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image24"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image24"
                                                                                                        datasource={"icon"}
                                                                                                        imageObject={undefined}
                                                                                                        defaultImageDynamic={undefined}
                                                                                                        imageUrl={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        imageIcon={WebIconProperty({
                                                                                                            "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                                                                        class={"mx-name-image24 img--24-24 spacing-outer-right-smaller"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined} />
                                                                                                ]} />,
                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image29$visibility"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.image29$visibility"
                                                                                                visible={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "MCPCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                                                })}
                                                                                                contents={[
                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image29"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image29"
                                                                                                        datasource={"icon"}
                                                                                                        imageObject={undefined}
                                                                                                        defaultImageDynamic={undefined}
                                                                                                        imageUrl={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        imageIcon={WebIconProperty({
                                                                                                            "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$MCP.svg" }
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
                                                                                                        class={"mx-name-image29 img--24-24 spacing-outer-right-smaller"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined} />
                                                                                                ]} />,
                                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image28$visibility"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.image28$visibility"
                                                                                                visible={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ToolCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                                                })}
                                                                                                contents={[
                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image28"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image28"
                                                                                                        datasource={"icon"}
                                                                                                        imageObject={undefined}
                                                                                                        defaultImageDynamic={undefined}
                                                                                                        imageUrl={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        imageIcon={WebIconProperty({
                                                                                                            "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                                                        class={"mx-name-image28 img--24-24 spacing-outer-right-smaller"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined} />
                                                                                                ]} />,
                                                                                            <$Tooltip key="p.ConversationalUI.Trace_Details.tooltip4"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.tooltip4"
                                                                                                trigger={[
                                                                                                    <$Text key="p.ConversationalUI.Trace_Details.text14"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.text14"
                                                                                                        class={"mx-name-text14 font-size-medium text-clamp--1-lines tree-item-hover"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                renderMethod={"custom"}
                                                                                                htmlMessage={[
                                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container35"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container35"
                                                                                                        class={"mx-name-container35 tooltip-container"}
                                                                                                        style={undefined}
                                                                                                        renderMode={"div"}
                                                                                                        onClick={undefined}
                                                                                                        content={[
                                                                                                            <$Text key="p.ConversationalUI.Trace_Details.text16"
                                                                                                                $widgetId="p.ConversationalUI.Trace_Details.text16"
                                                                                                                class={"mx-name-text16"}
                                                                                                                style={undefined}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" } } }
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
                                                                                                tooltipPosition={"right"}
                                                                                                arrowPosition={"end"}
                                                                                                openOn={"hover"}
                                                                                                class={"mx-name-tooltip4 convui-tooltip"}
                                                                                                style={undefined}
                                                                                                tabIndex={undefined} />,
                                                                                            <$DataView key="p.ConversationalUI.Trace_Details.dataView8"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.dataView8"
                                                                                                class={"mx-name-dataView8 form-horizontal"}
                                                                                                style={undefined}
                                                                                                tabIndex={undefined}
                                                                                                object={AssociationObjectProperty({
                                                                                                    "dataSourceId": "p.468",
                                                                                                    "scope": "p.ConversationalUI.Trace_Details.treeNode2",
                                                                                                    "editable": true,
                                                                                                    "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                                    "operationId": "mPbelsF9vliXhcXI4n4fiA"
                                                                                                })}
                                                                                                emptyMessage={TextProperty({
                                                                                                    "value": t([
                                                                                                        ""
                                                                                                    ])
                                                                                                })}
                                                                                                body={[
                                                                                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.container36$visibility"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container36$visibility"
                                                                                                        visible={ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsError" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView8", "source": "object" } } }
                                                                                                        })}
                                                                                                        contents={[
                                                                                                            <$Container key="p.ConversationalUI.Trace_Details.container36"
                                                                                                                $widgetId="p.ConversationalUI.Trace_Details.container36"
                                                                                                                class={"mx-name-container36 spacing-outer-left-small"}
                                                                                                                style={undefined}
                                                                                                                renderMode={"div"}
                                                                                                                onClick={undefined}
                                                                                                                content={[
                                                                                                                    <$Image key="p.ConversationalUI.Trace_Details.image36"
                                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.image36"
                                                                                                                        datasource={"icon"}
                                                                                                                        imageObject={undefined}
                                                                                                                        defaultImageDynamic={undefined}
                                                                                                                        imageUrl={t([
                                                                                                                            ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                            })
                                                                                                                        ])}
                                                                                                                        imageIcon={WebIconProperty({
                                                                                                                            "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                                                                        class={"mx-name-image36 unset-img-width"}
                                                                                                                        style={undefined}
                                                                                                                        tabIndex={undefined} />
                                                                                                                ]}
                                                                                                                ariaHidden={false} />
                                                                                                        ]} />
                                                                                                ]}
                                                                                                hideFooter={false}
                                                                                                footer={undefined} />
                                                                                        ]}
                                                                                        ariaHidden={false} />,
                                                                                    <$Container key="p.ConversationalUI.Trace_Details.container11"
                                                                                        $widgetId="p.ConversationalUI.Trace_Details.container11"
                                                                                        class={"mx-name-container11 row-text-img tree-duration-position"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$DataView key="p.ConversationalUI.Trace_Details.dataView2"
                                                                                                $widgetId="p.ConversationalUI.Trace_Details.dataView2"
                                                                                                class={"mx-name-dataView2 form-horizontal"}
                                                                                                style={undefined}
                                                                                                tabIndex={undefined}
                                                                                                object={AssociationObjectProperty({
                                                                                                    "dataSourceId": "p.478",
                                                                                                    "scope": "p.ConversationalUI.Trace_Details.treeNode2",
                                                                                                    "editable": true,
                                                                                                    "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                                    "operationId": "HI+vxA8t0l6eMisgZnSJkw"
                                                                                                })}
                                                                                                emptyMessage={TextProperty({
                                                                                                    "value": t([
                                                                                                        ""
                                                                                                    ])
                                                                                                })}
                                                                                                body={[
                                                                                                    <$Fragment key="p.ConversationalUI.Trace_Details.snippetCall3"
                                                                                                        $widgetId="p.ConversationalUI.Trace_Details.snippetCall3"
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
                                                                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "formatDecimal", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] } ] }, { "type": "literal", "value": "s" } ] } } }, "args": { "Span": { "widget": "p.ConversationalUI.Trace_Details.dataView2", "source": "object" } } }
                                                                                                                            })
                                                                                                                        ])}
                                                                                                                        renderMode={"span"} />
                                                                                                                ]}
                                                                                                                ariaHidden={false} />
                                                                                                        ]} />
                                                                                                ]}
                                                                                                hideFooter={false}
                                                                                                footer={undefined} />
                                                                                        ]}
                                                                                        ariaHidden={false} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]
                                                                    })}
                                                                    headerCaption={t([
                                                                        undefined
                                                                    ])}
                                                                    hasChildren={true}
                                                                    startExpanded={true}
                                                                    children={TemplatedWidgetProperty({
                                                                        "dataSourceId": "p.21",
                                                                        "editable": false,
                                                                        "children": () => [
                                                                            <$TreeNode key="p.ConversationalUI.Trace_Details.treeNode3"
                                                                                $widgetId="p.ConversationalUI.Trace_Details.treeNode3"
                                                                                advancedMode={false}
                                                                                datasource={MicroflowObjectListProperty({
                                                                                    "argMap": { "SpanTreeView_Parent": { "widget": "p.ConversationalUI.Trace_Details.treeNode2", "source": "object" }, "Trace": { "widget": "$Trace", "source": "object" } },
                                                                                    "dataSourceId": "p.22",
                                                                                    "entity": "ConversationalUI.SpanTreeView",
                                                                                    "scope": "p.ConversationalUI.Trace_Details.treeNode2",
                                                                                    "operationId": "vh7eZr/MDlGYRi0RZSrH7A"
                                                                                })}
                                                                                headerType={"custom"}
                                                                                openNodeOn={"iconClick"}
                                                                                headerContent={TemplatedWidgetProperty({
                                                                                    "dataSourceId": "p.22",
                                                                                    "editable": false,
                                                                                    "children": () => [
                                                                                        <$Container key="p.ConversationalUI.Trace_Details.container24"
                                                                                            $widgetId="p.ConversationalUI.Trace_Details.container24"
                                                                                            class={"mx-name-container24 row-text-img"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$Container key="p.ConversationalUI.Trace_Details.container26"
                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container26"
                                                                                                    class={"mx-name-container26 row-text-img"}
                                                                                                    style={undefined}
                                                                                                    tabIndex={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": { "SpanTreeView": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" }, "TraceView": { "widget": "p.ConversationalUI.Trace_Details.dataView3", "source": "object" } }, "config": { "operationId": "Uqaw0YoAG1y4G0ddtEPbug", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true }
                                                                                                    })}
                                                                                                    content={[
                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image26$visibility"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image26$visibility"
                                                                                                            visible={ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ModelCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                                                            })}
                                                                                                            contents={[
                                                                                                                <$Image key="p.ConversationalUI.Trace_Details.image26"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.image26"
                                                                                                                    datasource={"icon"}
                                                                                                                    imageObject={undefined}
                                                                                                                    defaultImageDynamic={undefined}
                                                                                                                    imageUrl={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    imageIcon={WebIconProperty({
                                                                                                                        "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$text_sparkle.svg" }
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
                                                                                                                    class={"mx-name-image26 img--24-24 spacing-outer-right-smaller"}
                                                                                                                    style={undefined}
                                                                                                                    tabIndex={undefined} />
                                                                                                            ]} />,
                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image27$visibility"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image27$visibility"
                                                                                                            visible={ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "KnowledgeBaseCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                                                            })}
                                                                                                            contents={[
                                                                                                                <$Image key="p.ConversationalUI.Trace_Details.image27"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.image27"
                                                                                                                    datasource={"icon"}
                                                                                                                    imageObject={undefined}
                                                                                                                    defaultImageDynamic={undefined}
                                                                                                                    imageUrl={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    imageIcon={WebIconProperty({
                                                                                                                        "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$book_sparkle.svg" }
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
                                                                                                                    class={"mx-name-image27 img--24-24 spacing-outer-right-smaller"}
                                                                                                                    style={undefined}
                                                                                                                    tabIndex={undefined} />
                                                                                                            ]} />,
                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image30$visibility"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image30$visibility"
                                                                                                            visible={ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "MCPCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                                                            })}
                                                                                                            contents={[
                                                                                                                <$Image key="p.ConversationalUI.Trace_Details.image30"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.image30"
                                                                                                                    datasource={"icon"}
                                                                                                                    imageObject={undefined}
                                                                                                                    defaultImageDynamic={undefined}
                                                                                                                    imageUrl={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    imageIcon={WebIconProperty({
                                                                                                                        "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$MCP.svg" }
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
                                                                                                                    class={"mx-name-image30 img--24-24 spacing-outer-right-smaller"}
                                                                                                                    style={undefined}
                                                                                                                    tabIndex={undefined} />
                                                                                                            ]} />,
                                                                                                        <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.image31$visibility"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.image31$visibility"
                                                                                                            visible={ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SpanType" }, { "type": "literal", "value": "ToolCall" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                                                            })}
                                                                                                            contents={[
                                                                                                                <$Image key="p.ConversationalUI.Trace_Details.image31"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.image31"
                                                                                                                    datasource={"icon"}
                                                                                                                    imageObject={undefined}
                                                                                                                    defaultImageDynamic={undefined}
                                                                                                                    imageUrl={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    imageIcon={WebIconProperty({
                                                                                                                        "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$microflow.svg" }
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
                                                                                                                    class={"mx-name-image31 img--24-24 spacing-outer-right-smaller"}
                                                                                                                    style={undefined}
                                                                                                                    tabIndex={undefined} />
                                                                                                            ]} />,
                                                                                                        <$Tooltip key="p.ConversationalUI.Trace_Details.tooltip5"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.tooltip5"
                                                                                                            trigger={[
                                                                                                                <$Text key="p.ConversationalUI.Trace_Details.text15"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.text15"
                                                                                                                    class={"mx-name-text15 font-size-medium text-clamp--1-lines tree-item-hover"}
                                                                                                                    style={undefined}
                                                                                                                    caption={t([
                                                                                                                        ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
                                                                                                                        })
                                                                                                                    ])}
                                                                                                                    renderMode={"span"} />
                                                                                                            ]}
                                                                                                            renderMethod={"custom"}
                                                                                                            htmlMessage={[
                                                                                                                <$Container key="p.ConversationalUI.Trace_Details.container39"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container39"
                                                                                                                    class={"mx-name-container39 tooltip-container"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$Text key="p.ConversationalUI.Trace_Details.text17"
                                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.text17"
                                                                                                                            class={"mx-name-text17"}
                                                                                                                            style={undefined}
                                                                                                                            caption={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.treeNode3", "source": "object" } } }
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
                                                                                                            tooltipPosition={"right"}
                                                                                                            arrowPosition={"end"}
                                                                                                            openOn={"hover"}
                                                                                                            class={"mx-name-tooltip5 convui-tooltip"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />,
                                                                                                        <$DataView key="p.ConversationalUI.Trace_Details.dataView9"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.dataView9"
                                                                                                            class={"mx-name-dataView9 form-horizontal"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            object={AssociationObjectProperty({
                                                                                                                "dataSourceId": "p.515",
                                                                                                                "scope": "p.ConversationalUI.Trace_Details.treeNode3",
                                                                                                                "editable": true,
                                                                                                                "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                                                "operationId": "WAv2MT7HCFu4e3srjXMpUQ"
                                                                                                            })}
                                                                                                            emptyMessage={TextProperty({
                                                                                                                "value": t([
                                                                                                                    ""
                                                                                                                ])
                                                                                                            })}
                                                                                                            body={[
                                                                                                                <$ConditionalVisibilityWrapper key="p.ConversationalUI.Trace_Details.container34$visibility"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container34$visibility"
                                                                                                                    visible={ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsError" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Trace_Details.dataView9", "source": "object" } } }
                                                                                                                    })}
                                                                                                                    contents={[
                                                                                                                        <$Container key="p.ConversationalUI.Trace_Details.container34"
                                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.container34"
                                                                                                                            class={"mx-name-container34 spacing-outer-left-small"}
                                                                                                                            style={undefined}
                                                                                                                            renderMode={"div"}
                                                                                                                            onClick={undefined}
                                                                                                                            content={[
                                                                                                                                <$Image key="p.ConversationalUI.Trace_Details.image34"
                                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.image34"
                                                                                                                                    datasource={"icon"}
                                                                                                                                    imageObject={undefined}
                                                                                                                                    defaultImageDynamic={undefined}
                                                                                                                                    imageUrl={t([
                                                                                                                                        ExpressionProperty({
                                                                                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                        })
                                                                                                                                    ])}
                                                                                                                                    imageIcon={WebIconProperty({
                                                                                                                                        "icon": { "type": "image", "iconUrl": "img/ConversationalUI$Image_Traces$alert_triangle.svg" }
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
                                                                                                                                    class={"mx-name-image34 unset-img-width"}
                                                                                                                                    style={undefined}
                                                                                                                                    tabIndex={undefined} />
                                                                                                                            ]}
                                                                                                                            ariaHidden={false} />
                                                                                                                    ]} />
                                                                                                            ]}
                                                                                                            hideFooter={false}
                                                                                                            footer={undefined} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />,
                                                                                                <$Container key="p.ConversationalUI.Trace_Details.container29"
                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.container29"
                                                                                                    class={"mx-name-container29 row-text-img tree-duration-position"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$DataView key="p.ConversationalUI.Trace_Details.dataView4"
                                                                                                            $widgetId="p.ConversationalUI.Trace_Details.dataView4"
                                                                                                            class={"mx-name-dataView4 form-horizontal"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined}
                                                                                                            object={AssociationObjectProperty({
                                                                                                                "dataSourceId": "p.525",
                                                                                                                "scope": "p.ConversationalUI.Trace_Details.treeNode3",
                                                                                                                "editable": true,
                                                                                                                "path": "ConversationalUI.SpanTreeView_Span/GenAICommons.Span",
                                                                                                                "operationId": "TpPNdRwcelape3vk6Cx1Iw"
                                                                                                            })}
                                                                                                            emptyMessage={TextProperty({
                                                                                                                "value": t([
                                                                                                                    ""
                                                                                                                ])
                                                                                                            })}
                                                                                                            body={[
                                                                                                                <$Fragment key="p.ConversationalUI.Trace_Details.snippetCall4"
                                                                                                                    $widgetId="p.ConversationalUI.Trace_Details.snippetCall4"
                                                                                                                    content={[
                                                                                                                        <$Container key="p.ConversationalUI.Snippet_SpanDuration.container1.528"
                                                                                                                            $widgetId="p.ConversationalUI.Snippet_SpanDuration.container1.528"
                                                                                                                            class={"mx-name-container1 row-text-img"}
                                                                                                                            style={undefined}
                                                                                                                            renderMode={"div"}
                                                                                                                            onClick={undefined}
                                                                                                                            content={[
                                                                                                                                <$Image key="p.ConversationalUI.Snippet_SpanDuration.image1.529"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_SpanDuration.image1.529"
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
                                                                                                                                <$Text key="p.ConversationalUI.Snippet_SpanDuration.text1.530"
                                                                                                                                    $widgetId="p.ConversationalUI.Snippet_SpanDuration.text1.530"
                                                                                                                                    class={"mx-name-text1"}
                                                                                                                                    style={undefined}
                                                                                                                                    caption={t([
                                                                                                                                        ExpressionProperty({
                                                                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "-" }, "else": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] }, { "type": "literalNumeric", "value": "0" } ] }, "then": { "type": "literal", "value": "0.0s" }, "else": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "formatDecimal", "parameters": [ { "type": "function", "name": "round", "parameters": [ { "type": "function", "name": ":", "parameters": [ { "type": "variable", "variable": "Span", "path": "DurationMilliseconds" }, { "type": "literalNumeric", "value": "1000" } ] }, { "type": "literalNumeric", "value": "1" } ] } ] }, { "type": "literal", "value": "s" } ] } } }, "args": { "Span": { "widget": "p.ConversationalUI.Trace_Details.dataView4", "source": "object" } } }
                                                                                                                                        })
                                                                                                                                    ])}
                                                                                                                                    renderMode={"span"} />
                                                                                                                            ]}
                                                                                                                            ariaHidden={false} />
                                                                                                                    ]} />
                                                                                                            ]}
                                                                                                            hideFooter={false}
                                                                                                            footer={undefined} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]
                                                                                })}
                                                                                headerCaption={t([
                                                                                    undefined
                                                                                ])}
                                                                                hasChildren={true}
                                                                                startExpanded={true}
                                                                                children={undefined}
                                                                                animate={true}
                                                                                showIcon={"left"}
                                                                                expandedIcon={undefined}
                                                                                collapsedIcon={undefined}
                                                                                animateIcon={false}
                                                                                class={"mx-name-treeNode3 spacing-inner-none"}
                                                                                style={undefined}
                                                                                tabIndex={undefined} />
                                                                        ]
                                                                    })}
                                                                    animate={true}
                                                                    showIcon={"left"}
                                                                    expandedIcon={undefined}
                                                                    collapsedIcon={undefined}
                                                                    animateIcon={true}
                                                                    class={"mx-name-treeNode2 spacing-inner-none"}
                                                                    style={undefined}
                                                                    tabIndex={undefined} />
                                                            ]
                                                        })}
                                                        animate={true}
                                                        showIcon={"left"}
                                                        expandedIcon={undefined}
                                                        collapsedIcon={undefined}
                                                        animateIcon={false}
                                                        class={"mx-name-treeNode1 spacing-inner-none tree-width"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                ariaHidden={false} />
                        ]}
                        ariaHidden={false} />
                ]}
                hideFooter={false}
                footer={undefined} />
        ]}
        hideFooter={true}
        footer={undefined} />
]}</PageFragment>);

export const title = t([
    "Trace Details"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const url = "/p/trace/{Trace/TraceId}";
export const style = {};
export const content = { ...parentContent,
    "ConversationalUI.Layout_MasterBase.Main": region$Main,
};
