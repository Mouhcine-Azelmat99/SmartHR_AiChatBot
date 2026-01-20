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

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import * as SwitchWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.mjs";
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.css";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $TextBox, $Switch, $TextArea } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, TextBox, Switch, TextArea });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.SingleMCPToolView_Edit.layoutGrid1"
        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.SingleMCPToolView_Edit.layoutGrid1$row0"
                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.SingleMCPToolView_Edit.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.SingleMCPToolView_Edit.dataView6"
                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.20",
                                    "scope": "$SingleMCPToolView",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container39"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container39"
                                        class={"mx-name-container39 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text3"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text3"
                                                class={"mx-name-text3 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "MCP tool name" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container44"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container44"
                                                class={"mx-name-container44 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.SingleMCPToolView_Edit.tooltip3"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.tooltip3"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.SingleMCPToolView_Edit.actionButton22$visibility"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton22$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.SingleMCPToolView_Edit.actionButton22"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton22"
                                                                        buttonId={"p.AgentCommons.SingleMCPToolView_Edit.actionButton22"}
                                                                        class={"mx-name-actionButton22 spacing-outer-left spacing-outer-right"}
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
                                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container103"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container103"
                                                                class={"mx-name-container103 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text45"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text45"
                                                                        class={"mx-name-text45 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "This is the name of the tool that is exposed by the MCP Server." }, "args": {} }
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
                                                        arrowPosition={"none"}
                                                        openOn={"hover"}
                                                        class={"mx-name-tooltip3 agent-tooltip"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.AgentCommons.SingleMCPToolView_Edit.textBox1$formGroup"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.SingleMCPToolView_Edit.textBox1"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.SingleMCPToolView_Edit.dataView6",
                                                    "path": "AgentCommons.SingleMCPToolView_MCPTool/MCPClient.MCPTool",
                                                    "entity": "MCPClient.MCPTool",
                                                    "attribute": "Name",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.textBox1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.SingleMCPToolView_Edit.textBox1"
                                        })} />,
                                    <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container8"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container8"
                                        class={"mx-name-container8 col-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container48"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container48"
                                                class={"mx-name-container48 row-left"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text6"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text6"
                                                        class={"mx-name-text6 custom-control-label"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Enabled" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />,
                                                    <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container49"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container49"
                                                        class={"mx-name-container49 icon-info-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Tooltip key="p.AgentCommons.SingleMCPToolView_Edit.tooltip7"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.tooltip7"
                                                                trigger={[
                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.SingleMCPToolView_Edit.actionButton26$visibility"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton26$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AgentCommons.SingleMCPToolView_Edit.actionButton26"
                                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton26"
                                                                                buttonId={"p.AgentCommons.SingleMCPToolView_Edit.actionButton26"}
                                                                                class={"mx-name-actionButton26 spacing-outer-left spacing-outer-right"}
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
                                                                    <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container107"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container107"
                                                                        class={"mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text48"
                                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text48"
                                                                                class={"mx-name-text48 text-normal text-break text-small"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "The LLM is only aware of enabled tools and, as such, cannot call disabled tools. This holds for this Agent Builder interface as well as the Agent being used in the app logic. Disabling a tool can help during development to (temporarily) exclude a tool. It prevents having to add it back from scratch when it is needed again later." }, "args": {} }
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
                                                                arrowPosition={"none"}
                                                                openOn={"hover"}
                                                                class={"mx-name-tooltip7 agent-tooltip"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$FormGroup key="p.AgentCommons.SingleMCPToolView_Edit.switch1$formGroup"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.switch1$formGroup"
                                                class={"mx-name-switch1 switch"}
                                                style={undefined}
                                                control={[
                                                    <$Switch key="p.AgentCommons.SingleMCPToolView_Edit.switch1"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.switch1"
                                                        booleanAttribute={AttributeProperty({
                                                            "scope": "$SingleMCPToolView",
                                                            "path": "",
                                                            "entity": "AgentCommons.SingleMCPToolView",
                                                            "attribute": "IsEnabled",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                            "argumentTypes": { }
                                                        })}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.switch1"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.switch1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.AgentCommons.SingleMCPToolView_Edit.switch1"
                                                })} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container40"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container40"
                                        class={"mx-name-container40 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text4"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text4"
                                                class={"mx-name-text4 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Name*" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container45"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container45"
                                                class={"mx-name-container45 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.SingleMCPToolView_Edit.tooltip4"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.tooltip4"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.SingleMCPToolView_Edit.actionButton23$visibility"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton23$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.SingleMCPToolView_Edit.actionButton23"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton23"
                                                                        buttonId={"p.AgentCommons.SingleMCPToolView_Edit.actionButton23"}
                                                                        class={"mx-name-actionButton23 spacing-outer-left spacing-outer-right"}
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
                                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container104"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container104"
                                                                class={"mx-name-container104 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text46"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text46"
                                                                        class={"mx-name-text46 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "You can specify a different name for the tool to be sent to the LLM than the one provided by the MCP server. This can be useful if the LLM has special requirements for tool names." }, "args": {} }
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
                                                        arrowPosition={"none"}
                                                        openOn={"hover"}
                                                        class={"mx-name-tooltip4 agent-tooltip"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.AgentCommons.SingleMCPToolView_Edit.textBox3$formGroup"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.SingleMCPToolView_Edit.textBox3"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.SingleMCPToolView_Edit.dataView6",
                                                    "path": "",
                                                    "entity": "AgentCommons.SingleMCPToolView",
                                                    "attribute": "Name",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.textBox3"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.SingleMCPToolView_Edit.textBox3"
                                        })} />,
                                    <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container41"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container41"
                                        class={"mx-name-container41 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text5"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text5"
                                                class={"mx-name-text5 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Description*" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container46"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container46"
                                                class={"mx-name-container46 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.SingleMCPToolView_Edit.tooltip5"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.tooltip5"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.SingleMCPToolView_Edit.actionButton24$visibility"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton24$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.SingleMCPToolView_Edit.actionButton24"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton24"
                                                                        buttonId={"p.AgentCommons.SingleMCPToolView_Edit.actionButton24"}
                                                                        class={"mx-name-actionButton24 spacing-outer-left spacing-outer-right"}
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
                                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container105"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container105"
                                                                class={"mx-name-container105 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.SingleMCPToolView_Edit.text47"
                                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.text47"
                                                                        class={"mx-name-text47 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "This is a description for the LLM that explains in human language what the tool does and what it returns. The string value returned is used by the agent to determine next steps.\r\n\r\nIt is used in combination with the name by the model to determine what tool calls are necessary and when." }, "args": {} }
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
                                                        arrowPosition={"none"}
                                                        openOn={"hover"}
                                                        class={"mx-name-tooltip5 agent-tooltip"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.AgentCommons.SingleMCPToolView_Edit.textArea1$formGroup"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.textArea1$formGroup"
                                        class={"mx-name-textArea1 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.AgentCommons.SingleMCPToolView_Edit.textArea1"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.SingleMCPToolView_Edit.dataView6",
                                                    "path": "",
                                                    "entity": "AgentCommons.SingleMCPToolView",
                                                    "attribute": "Description",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                counterMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                maxLength={4096}
                                                numberOfLines={5}
                                                autoGrow={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                readOnlyStyle={"control"}
                                                textTooLongMessage={TextProperty({
                                                    "value": t([
                                                        "Value too long."
                                                    ])
                                                })}
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
                                                    "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.textArea1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.SingleMCPToolView_Edit.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.SingleMCPToolView_Edit.textArea1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container2"
                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container2"
                                        class={"mx-name-container2"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.AgentCommons.SingleMCPToolView_Edit.container1"
                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.container1"
                                                class={"mx-name-container1 row-right"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ActionButton key="p.AgentCommons.SingleMCPToolView_Edit.actionButton2"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton2"
                                                        buttonId={"p.AgentCommons.SingleMCPToolView_Edit.actionButton2"}
                                                        class={"mx-name-actionButton2 spacing-outer-right-medium"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "kdHb2O5pB1KW1nAwFNSEzg", "closePage": true }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />,
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.SingleMCPToolView_Edit.actionButton1$visibility"
                                                        $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton1$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.SingleMCPToolView_Edit.actionButton1"
                                                                $widgetId="p.AgentCommons.SingleMCPToolView_Edit.actionButton1"
                                                                buttonId={"p.AgentCommons.SingleMCPToolView_Edit.actionButton1"}
                                                                class={"mx-name-actionButton1"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-primary"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "SingleMCPToolView": { "widget": "$SingleMCPToolView", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "Es92vCdnpVKwI8n599NexA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit tool"
]);

export const classes = "";

export const cancelChangesOperationId = "RHKotXmt2FOdB+ODepIudQ";
export const closeButton = "p.AgentCommons.SingleMCPToolView_Edit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
