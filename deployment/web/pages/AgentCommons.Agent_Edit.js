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

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Container, $DataView, $FormGroup, $TextBox, $TextArea, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ Container, DataView, FormGroup, TextBox, TextArea, ActionButton, ConditionalVisibilityWrapper });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p.AgentCommons.Agent_Edit.container1"
        $widgetId="p.AgentCommons.Agent_Edit.container1"
        class={"mx-name-container1 spacing-inner-left-20 spacing-inner-bottom-large spacing-inner-right-large spacing-inner-top"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$DataView key="p.AgentCommons.Agent_Edit.dataView1"
                $widgetId="p.AgentCommons.Agent_Edit.dataView1"
                class={"mx-name-dataView1 form-vertical"}
                style={undefined}
                tabIndex={undefined}
                object={AssociationObjectProperty({
                    "dataSourceId": "p.8",
                    "scope": "$Agent",
                    "editable": true
                })}
                emptyMessage={TextProperty({
                    "value": t([
                        ""
                    ])
                })}
                body={[
                    <$FormGroup key="p.AgentCommons.Agent_Edit.textBox1$formGroup"
                        $widgetId="p.AgentCommons.Agent_Edit.textBox1$formGroup"
                        class={"mx-name-textBox1 mx-textbox"}
                        style={undefined}
                        control={[
                            <$TextBox key="p.AgentCommons.Agent_Edit.textBox1"
                                $widgetId="p.AgentCommons.Agent_Edit.textBox1"
                                inputValue={AttributeProperty({
                                    "scope": "p.AgentCommons.Agent_Edit.dataView1",
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
                                    "widgetId": "p.AgentCommons.Agent_Edit.textBox1"
                                })} />
                        ]}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                            })
                        ])}
                        labelFor={DerivedUniqueIdProperty({
                            "widgetId": "p.AgentCommons.Agent_Edit.textBox1"
                        })}
                        width={undefined}
                        orientation={"vertical"}
                        hasError={ValidationProperty({
                            "inputWidgetId": "p.AgentCommons.Agent_Edit.textBox1"
                        })} />,
                    <$FormGroup key="p.AgentCommons.Agent_Edit.textArea1$formGroup"
                        $widgetId="p.AgentCommons.Agent_Edit.textArea1$formGroup"
                        class={"mx-name-textArea1 mx-textarea"}
                        style={undefined}
                        control={[
                            <$TextArea key="p.AgentCommons.Agent_Edit.textArea1"
                                $widgetId="p.AgentCommons.Agent_Edit.textArea1"
                                inputValue={AttributeProperty({
                                    "scope": "p.AgentCommons.Agent_Edit.dataView1",
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
                                    "widgetId": "p.AgentCommons.Agent_Edit.textArea1"
                                })} />
                        ]}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                            })
                        ])}
                        labelFor={DerivedUniqueIdProperty({
                            "widgetId": "p.AgentCommons.Agent_Edit.textArea1"
                        })}
                        width={undefined}
                        orientation={"vertical"}
                        hasError={ValidationProperty({
                            "inputWidgetId": "p.AgentCommons.Agent_Edit.textArea1"
                        })} />
                ]}
                hideFooter={false}
                footer={[
                    <$Container key="p.AgentCommons.Agent_Edit.container2"
                        $widgetId="p.AgentCommons.Agent_Edit.container2"
                        class={"mx-name-container2 row-right"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$ActionButton key="p.AgentCommons.Agent_Edit.actionButton2"
                                $widgetId="p.AgentCommons.Agent_Edit.actionButton2"
                                buttonId={"p.AgentCommons.Agent_Edit.actionButton2"}
                                class={"mx-name-actionButton2 pull-right"}
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
                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "//yjiJK+uVahv6MxswA/DA", "closePage": true }, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />,
                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_Edit.actionButton1$visibility"
                                $widgetId="p.AgentCommons.Agent_Edit.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.AgentCommons.Agent_Edit.actionButton1"
                                        $widgetId="p.AgentCommons.Agent_Edit.actionButton1"
                                        buttonId={"p.AgentCommons.Agent_Edit.actionButton1"}
                                        class={"mx-name-actionButton1 pull-right spacing-outer-left"}
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
                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "5EaBdMNcPF+rFSp/MDiqVg", "progress": { "message": t([ "Creating agent.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]}
                        ariaHidden={false} />
                ]} />
        ]}
        ariaHidden={false} />
]}</PageFragment>);

export const title = t([
    "Edit agent details"
]);

export const classes = "";

export const cancelChangesOperationId = "mTvDgwhjHleWm4gAssWcwQ";
export const closeButton = "p.AgentCommons.Agent_Edit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
