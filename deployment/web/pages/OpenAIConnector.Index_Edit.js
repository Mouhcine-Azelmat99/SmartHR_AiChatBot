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
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $RadioButtonGroup, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, RadioButtonGroup, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.OpenAIConnector.Index_Edit.layoutGrid1"
        $widgetId="p.OpenAIConnector.Index_Edit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.OpenAIConnector.Index_Edit.layoutGrid1$row0"
                $widgetId="p.OpenAIConnector.Index_Edit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.OpenAIConnector.Index_Edit.layoutGrid1$row0$column0"
                        $widgetId="p.OpenAIConnector.Index_Edit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.OpenAIConnector.Index_Edit.dataView6"
                                $widgetId="p.OpenAIConnector.Index_Edit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$Index",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.OpenAIConnector.Index_Edit.textBox1$formGroup"
                                        $widgetId="p.OpenAIConnector.Index_Edit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.OpenAIConnector.Index_Edit.textBox1"
                                                $widgetId="p.OpenAIConnector.Index_Edit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.Index_Edit.dataView6",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.Index",
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
                                                maxLength={200}
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
                                                    "widgetId": "p.OpenAIConnector.Index_Edit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Index_Edit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.Index_Edit.textBox1"
                                        })} />,
                                    <$FormGroup key="p.OpenAIConnector.Index_Edit.textBox2$formGroup"
                                        $widgetId="p.OpenAIConnector.Index_Edit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.OpenAIConnector.Index_Edit.textBox2"
                                                $widgetId="p.OpenAIConnector.Index_Edit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.Index_Edit.dataView6",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.Index",
                                                    "attribute": "Name",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
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
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.OpenAIConnector.Index_Edit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Index_Edit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.Index_Edit.textBox2"
                                        })} />,
                                    <$FormGroup key="p.OpenAIConnector.Index_Edit.radioButtons1$formGroup"
                                        $widgetId="p.OpenAIConnector.Index_Edit.radioButtons1$formGroup"
                                        class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p.OpenAIConnector.Index_Edit.radioButtons1"
                                                $widgetId="p.OpenAIConnector.Index_Edit.radioButtons1"
                                                value={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.Index_Edit.dataView6",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.Index",
                                                    "attribute": "IsActive",
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
                                                    "widgetId": "p.OpenAIConnector.Index_Edit.radioButtons1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Is active" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Index_Edit.radioButtons1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.Index_Edit.radioButtons1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Index_Edit.actionButton1$visibility"
                                        $widgetId="p.OpenAIConnector.Index_Edit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.OpenAIConnector.Index_Edit.actionButton1"
                                                $widgetId="p.OpenAIConnector.Index_Edit.actionButton1"
                                                buttonId={"p.OpenAIConnector.Index_Edit.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-success"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "Index": { "widget": "$Index", "source": "object" } }, "config": { "operationId": "+xgedd9fI1WHBncSG5n/mQ", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.OpenAIConnector.Index_Edit.actionButton2"
                                        $widgetId="p.OpenAIConnector.Index_Edit.actionButton2"
                                        buttonId={"p.OpenAIConnector.Index_Edit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "pBk2+vIiVVa0yMt81LuAfA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Index"
]);

export const classes = "";

export const cancelChangesOperationId = "uuqqMUvwJFu5Bom+Dj+/zw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
