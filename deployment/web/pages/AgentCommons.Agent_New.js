import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicClassProperty } from "mendix/DynamicClassProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $Combobox } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, Combobox });

addEnumerations({
    "AgentCommons.ENUM_Agent_UsageType": [
        [
            "Single_Call",
            t([
                "Task"
            ])
        ],
        [
            "Conversational",
            t([
                "Chat"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.Agent_New.layoutGrid1"
        $widgetId="p.AgentCommons.Agent_New.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.Agent_New.layoutGrid1$row0"
                $widgetId="p.AgentCommons.Agent_New.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Agent_New.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.Agent_New.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.Agent_New.dataView1"
                                $widgetId="p.AgentCommons.Agent_New.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.22",
                                    "scope": "$Agent",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.AgentCommons.Agent_New.textBox1$formGroup"
                                        $widgetId="p.AgentCommons.Agent_New.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.Agent_New.textBox1"
                                                $widgetId="p.AgentCommons.Agent_New.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.Agent_New.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.Agent",
                                                    "attribute": "Title",
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
                                                maxLength={50}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.Agent_New.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Agent_New.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Agent_New.textBox1"
                                        })} />,
                                    <$FormGroup key="p.AgentCommons.Agent_New.textArea1$formGroup"
                                        $widgetId="p.AgentCommons.Agent_New.textArea1$formGroup"
                                        class={"mx-name-textArea1 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.AgentCommons.Agent_New.textArea1"
                                                $widgetId="p.AgentCommons.Agent_New.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.Agent_New.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.Agent",
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
                                                maxLength={200}
                                                numberOfLines={2}
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
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.Agent_New.textArea1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Agent_New.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Agent_New.textArea1"
                                        })} />,
                                    <$Container key="p.AgentCommons.Agent_New.container5"
                                        $widgetId="p.AgentCommons.Agent_New.container5"
                                        class={"mx-name-container5 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.Agent_New.text1"
                                                $widgetId="p.AgentCommons.Agent_New.text1"
                                                class={"mx-name-text1 text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Usage type" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Tooltip key="p.AgentCommons.Agent_New.tooltip2"
                                                $widgetId="p.AgentCommons.Agent_New.tooltip2"
                                                trigger={[
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_New.actionButton21$visibility"
                                                        $widgetId="p.AgentCommons.Agent_New.actionButton21$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.Agent_New.actionButton21"
                                                                $widgetId="p.AgentCommons.Agent_New.actionButton21"
                                                                buttonId={"p.AgentCommons.Agent_New.actionButton21"}
                                                                class={"mx-name-actionButton21 btn-sm spacing-outer-left spacing-outer-right"}
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
                                                    <$Container key="p.AgentCommons.Agent_New.container102"
                                                        $widgetId="p.AgentCommons.Agent_New.container102"
                                                        class={"mx-name-container102 w306 spacing-inner-top spacing-inner-bottom spacing-inner-left spacing-inner-right"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Container key="p.AgentCommons.Agent_New.container38"
                                                                $widgetId="p.AgentCommons.Agent_New.container38"
                                                                class={"mx-name-container38 spacing-outer-bottom"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.Agent_New.text43"
                                                                        $widgetId="p.AgentCommons.Agent_New.text43"
                                                                        class={"mx-name-text43 text-semibold text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Single Call Agents: " }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Text key="p.AgentCommons.Agent_New.text44"
                                                                        $widgetId="p.AgentCommons.Agent_New.text44"
                                                                        class={"mx-name-text44 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "These agents execute based on variables and user input, typically for single call retention and programmatic use in microflows." }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.AgentCommons.Agent_New.container56"
                                                                $widgetId="p.AgentCommons.Agent_New.container56"
                                                                class={"mx-name-container56 spacing-outer-bottom"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.Agent_New.text45"
                                                                        $widgetId="p.AgentCommons.Agent_New.text45"
                                                                        class={"mx-name-text45 text-semibold text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Conversational Agents: " }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Text key="p.AgentCommons.Agent_New.text46"
                                                                        $widgetId="p.AgentCommons.Agent_New.text46"
                                                                        class={"mx-name-text46 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "These agents create interactive and dynamic dialogues by retaining and utilizing the context of ongoing conversations, making them suitable for conversational chat assistants, as well as non-chat agentic processes where earlier interactions are crucial." }, "args": {} }
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
                                                arrowPosition={"none"}
                                                openOn={"hover"}
                                                class={"mx-name-tooltip2 agent-tooltip"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.AgentCommons.Agent_New.container2"
                                        $widgetId="p.AgentCommons.Agent_New.container2"
                                        class={"mx-name-container2 spacing-outer-top-smaller spacing-outer-bottom-large"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.AgentCommons.Agent_New.container1"
                                                $widgetId="p.AgentCommons.Agent_New.container1"
                                                class={"mx-name-container1 segmented-control"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_New.actionButton4$visibility"
                                                        $widgetId="p.AgentCommons.Agent_New.actionButton4$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Single_Call" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.Agent_New.actionButton4"
                                                                $widgetId="p.AgentCommons.Agent_New.actionButton4"
                                                                buttonId={"p.AgentCommons.Agent_New.actionButton4"}
                                                                class={"mx-name-actionButton4"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-primary"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "Single_Call" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" } ] }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_New.actionButton5$visibility"
                                                        $widgetId="p.AgentCommons.Agent_New.actionButton5$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Conversational" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": null } ] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.Agent_New.actionButton5"
                                                                $widgetId="p.AgentCommons.Agent_New.actionButton5"
                                                                buttonId={"p.AgentCommons.Agent_New.actionButton5"}
                                                                class={DynamicClassProperty({
                                                                    "staticClasses": "mx-name-actionButton5",
                                                                    "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "border-right" }, "else": { "type": "literal", "value": "" } }, "args": { "currentObject": { "widget": "$Agent", "source": "object" } } }
                                                                })}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "Single_Call" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" } ] }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "L37EgIhKcFWWW/VQv7EKNQ", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_New.actionButton6$visibility"
                                                        $widgetId="p.AgentCommons.Agent_New.actionButton6$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Single_Call" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": null } ] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.Agent_New.actionButton6"
                                                                $widgetId="p.AgentCommons.Agent_New.actionButton6"
                                                                buttonId={"p.AgentCommons.Agent_New.actionButton6"}
                                                                class={"mx-name-actionButton6"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "Conversational" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" } ] }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "Bpd6lODVv1+XcStzuQQumw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_New.actionButton3$visibility"
                                                        $widgetId="p.AgentCommons.Agent_New.actionButton3$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "UsageType" }, { "type": "literal", "value": "Conversational" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.Agent_New.dataView1", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.Agent_New.actionButton3"
                                                                $widgetId="p.AgentCommons.Agent_New.actionButton3"
                                                                buttonId={"p.AgentCommons.Agent_New.actionButton3"}
                                                                class={"mx-name-actionButton3"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"button"}
                                                                role={undefined}
                                                                buttonClass={"btn-primary"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "Conversational" }, { "type": "literal", "value": "AgentCommons.ENUM_Agent_UsageType" } ] }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$FormGroup key="p.AgentCommons.Agent_New.comboBox1$formGroup"
                                                $widgetId="p.AgentCommons.Agent_New.comboBox1$formGroup"
                                                class={"mx-name-comboBox1 combobox-hidden-with-validation"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.AgentCommons.Agent_New.comboBox1"
                                                        $widgetId="p.AgentCommons.Agent_New.comboBox1"
                                                        source={"context"}
                                                        optionsSourceType={"enumeration"}
                                                        attributeEnumeration={AttributeProperty({
                                                            "scope": "p.AgentCommons.Agent_New.dataView1",
                                                            "path": "",
                                                            "entity": "AgentCommons.Agent",
                                                            "attribute": "UsageType",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false
                                                        })}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        optionsSourceAssociationDataSource={undefined}
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
                                                            "widgetId": "p.AgentCommons.Agent_New.comboBox1"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.Agent_New.comboBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.AgentCommons.Agent_New.comboBox1"
                                                })} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.Agent_New.container3"
                                        $widgetId="p.AgentCommons.Agent_New.container3"
                                        class={"mx-name-container3 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.Agent_New.actionButton2"
                                                $widgetId="p.AgentCommons.Agent_New.actionButton2"
                                                buttonId={"p.AgentCommons.Agent_New.actionButton2"}
                                                class={"mx-name-actionButton2 spacing-outer-right-medium pull-right"}
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
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "XbqGUOyTz167AP+qnDtJmw", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_New.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.Agent_New.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.Agent_New.actionButton1"
                                                        $widgetId="p.AgentCommons.Agent_New.actionButton1"
                                                        buttonId={"p.AgentCommons.Agent_New.actionButton1"}
                                                        class={"mx-name-actionButton1 pull-right"}
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
                                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "R4g5RiZ8t1SuzpzUdxkgSw", "progress": { "message": t([ "Creating agent.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Create new agent"
]);

export const classes = "";

export const cancelChangesOperationId = "kjCV0T9+GF2LkUdHIC5PKA";
export const closeButton = "p.AgentCommons.Agent_New.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
