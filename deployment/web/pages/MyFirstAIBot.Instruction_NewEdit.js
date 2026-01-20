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
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $ConditionalVisibilityWrapper, $RadioButtonGroup, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, ConditionalVisibilityWrapper, RadioButtonGroup, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1"
        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0"
                $widgetId="p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MyFirstAIBot.Instruction_NewEdit.dataView6"
                                $widgetId="p.MyFirstAIBot.Instruction_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$Instruction",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.MyFirstAIBot.Instruction_NewEdit.textBox2$formGroup"
                                        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                                                $widgetId="p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstAIBot.Instruction",
                                                    "attribute": "DisplayName",
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
                                                    "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstAIBot.Instruction_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p.MyFirstAIBot.Instruction_NewEdit.textArea1$formGroup"
                                        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.textArea1$formGroup"
                                        class={"mx-name-textArea1 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                                                $widgetId="p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MyFirstAIBot.Instruction",
                                                    "attribute": "Instruction",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                counterMessage={undefined}
                                                maxLength={undefined}
                                                numberOfLines={5}
                                                autoGrow={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                readOnlyStyle={"control"}
                                                textTooLongMessage={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Instruction" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstAIBot.Instruction_NewEdit.textArea1"
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup$visibility"
                                        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$FormGroup key="p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup"
                                                $widgetId="p.MyFirstAIBot.Instruction_NewEdit.radioButtons1$formGroup"
                                                class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                                        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                                        value={AttributeProperty({
                                                            "scope": "p.MyFirstAIBot.Instruction_NewEdit.dataView6",
                                                            "path": "",
                                                            "entity": "MyFirstAIBot.Instruction",
                                                            "attribute": "IsCustom",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null
                                                        })}
                                                        readOnlyStyle={"control"}
                                                        onEnter={undefined}
                                                        onLeave={undefined}
                                                        ariaLabel={undefined}
                                                        ariaRequired={undefined}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Custom instruction (only visible for you)" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.MyFirstAIBot.Instruction_NewEdit.radioButtons1"
                                                })} />
                                        ]} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Instruction_NewEdit.actionButton1$visibility"
                                        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MyFirstAIBot.Instruction_NewEdit.actionButton1"
                                                $widgetId="p.MyFirstAIBot.Instruction_NewEdit.actionButton1"
                                                buttonId={"p.MyFirstAIBot.Instruction_NewEdit.actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "$Instruction", "source": "object" } }, "config": { "operationId": "y6eJqytpAFOEKWjHF3cGJw", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Instruction_NewEdit.actionButton2$visibility"
                                        $widgetId="p.MyFirstAIBot.Instruction_NewEdit.actionButton2$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MyFirstAIBot.Instruction_NewEdit.actionButton2"
                                                $widgetId="p.MyFirstAIBot.Instruction_NewEdit.actionButton2"
                                                buttonId={"p.MyFirstAIBot.Instruction_NewEdit.actionButton2"}
                                                class={"mx-name-actionButton2"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "$Instruction", "source": "object" } }, "config": { "operationId": "sRQ0zzhu+VKV/IMWhmjrCQ", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Instruction"
]);

export const classes = "";

export const cancelChangesOperationId = "qChQsPXqXFaMR+mujFXheg";
export const closeButton = "p.MyFirstAIBot.Instruction_NewEdit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
