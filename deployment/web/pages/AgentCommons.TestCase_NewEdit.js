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
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $Container, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Container, ActionButton, ConditionalVisibilityWrapper });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.TestCase_NewEdit.layoutGrid1"
        $widgetId="p.AgentCommons.TestCase_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.TestCase_NewEdit.layoutGrid1$row0"
                $widgetId="p.AgentCommons.TestCase_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.TestCase_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.TestCase_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.TestCase_NewEdit.dataView1"
                                $widgetId="p.AgentCommons.TestCase_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$TestCase",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.AgentCommons.TestCase_NewEdit.textBox1$formGroup"
                                        $widgetId="p.AgentCommons.TestCase_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.TestCase_NewEdit.textBox1"
                                                $widgetId="p.AgentCommons.TestCase_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.TestCase_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.TestCase",
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
                                                    "widgetId": "p.AgentCommons.TestCase_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.TestCase_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.TestCase_NewEdit.textBox1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.TestCase_NewEdit.container2"
                                        $widgetId="p.AgentCommons.TestCase_NewEdit.container2"
                                        class={"mx-name-container2 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.TestCase_NewEdit.actionButton2"
                                                $widgetId="p.AgentCommons.TestCase_NewEdit.actionButton2"
                                                buttonId={"p.AgentCommons.TestCase_NewEdit.actionButton2"}
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
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "Rs3AenH8gVGXPTZZzJWPKQ", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.TestCase_NewEdit.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.TestCase_NewEdit.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.TestCase_NewEdit.actionButton1"
                                                        $widgetId="p.AgentCommons.TestCase_NewEdit.actionButton1"
                                                        buttonId={"p.AgentCommons.TestCase_NewEdit.actionButton1"}
                                                        class={"mx-name-actionButton1 spacing-outer-left"}
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
                                                            "action": { "type": "callMicroflow", "argMap": { "TestCase": { "widget": "$TestCase", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" } }, "config": { "operationId": "sCQeVZTwNlSD6lEQ1R+q8A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Save test case"
]);

export const classes = "";

export const cancelChangesOperationId = "KjxmrKEXslmFrW29OWmGQg";
export const closeButton = "p.AgentCommons.TestCase_NewEdit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
