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
import { DataView } from "mendix/widgets/web/DataView";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import { Label } from "mendix/widgets/web/Label";
import { Table } from "mendix/widgets/web/Table";
import { TableRow } from "mendix/widgets/web/TableRow";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.PopupLayout.js";

const { $DataView, $Fragment, $Table, $TableRow, $Label, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ DataView, Fragment, Table, TableRow, Label, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.Encryption.ChangePasswordExample_NewEdit.dataView"
        $widgetId="p.Encryption.ChangePasswordExample_NewEdit.dataView"
        class={"mx-name-dataView form-vertical"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.8",
            "scope": "$ExampleConfiguration",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$Fragment key="p.Encryption.ChangePasswordExample_NewEdit.snippetCallWidget1"
                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.snippetCallWidget1"
                content={[
                    <$Table key="p.Encryption.ExampleConfiguration.table"
                        $widgetId="p.Encryption.ExampleConfiguration.table"
                        class={"mx-name-table"}
                        style={undefined}
                        autoWidth={false}
                        columnWidths={[
                            "25%",
                            "75%"
                        ]}
                        rows={[
                            <$TableRow key="p.Encryption.ChangePasswordExample_NewEdit.table$row0"
                                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.table$row0"
                                class={""}
                                style={undefined}
                                cells={[
                                    {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                            <$Label key="p.Encryption.ExampleConfiguration.label2"
                                                $widgetId="p.Encryption.ExampleConfiguration.label2"
                                                class={"mx-name-label2"}
                                                style={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.label2"
                                                })}
                                                caption={TextProperty({
                                                    "value": t([
                                                        "Title"
                                                    ])
                                                })} />
                                        ]
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$FormGroup key="p.Encryption.ExampleConfiguration.textBox2$formGroup"
                                                $widgetId="p.Encryption.ExampleConfiguration.textBox2$formGroup"
                                                class={"mx-name-textBox2 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.Encryption.ExampleConfiguration.textBox2"
                                                        $widgetId="p.Encryption.ExampleConfiguration.textBox2"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$ExampleConfiguration",
                                                            "path": "",
                                                            "entity": "Encryption.ExampleConfiguration",
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
                                                        readOnlyStyle={"text"}
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
                                                            "widgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.Encryption.ExampleConfiguration.textBox2"
                                                })} />
                                        ]
                                    }
                                ]} />,
                            <$TableRow key="p.Encryption.ChangePasswordExample_NewEdit.table$row1"
                                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.table$row1"
                                class={""}
                                style={undefined}
                                cells={[
                                    {
                                        "header": true,
                                        "class": "",
                                        "content": [
                                            <$Label key="p.Encryption.ExampleConfiguration.label3"
                                                $widgetId="p.Encryption.ExampleConfiguration.label3"
                                                class={"mx-name-label3"}
                                                style={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.label3"
                                                })}
                                                caption={TextProperty({
                                                    "value": t([
                                                        "Username"
                                                    ])
                                                })} />
                                        ]
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$FormGroup key="p.Encryption.ExampleConfiguration.textBox3$formGroup"
                                                $widgetId="p.Encryption.ExampleConfiguration.textBox3$formGroup"
                                                class={"mx-name-textBox3 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.Encryption.ExampleConfiguration.textBox3"
                                                        $widgetId="p.Encryption.ExampleConfiguration.textBox3"
                                                        inputValue={AttributeProperty({
                                                            "scope": "$ExampleConfiguration",
                                                            "path": "",
                                                            "entity": "Encryption.ExampleConfiguration",
                                                            "attribute": "Username",
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
                                                        readOnlyStyle={"text"}
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
                                                            "widgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.Encryption.ExampleConfiguration.textBox3"
                                                })} />
                                        ]
                                    }
                                ]} />,
                            <$TableRow key="p.Encryption.ChangePasswordExample_NewEdit.table$row2"
                                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.table$row2"
                                class={""}
                                style={undefined}
                                cells={[
                                    {
                                        "class": "",
                                        "content": undefined
                                    },
                                    {
                                        "class": "",
                                        "content": [
                                            <$ConditionalVisibilityWrapper key="p.Encryption.ExampleConfiguration.microflowButton$visibility"
                                                $widgetId="p.Encryption.ExampleConfiguration.microflowButton$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.Encryption.ExampleConfiguration.microflowButton"
                                                        $widgetId="p.Encryption.ExampleConfiguration.microflowButton"
                                                        buttonId={"p.Encryption.ExampleConfiguration.microflowButton"}
                                                        class={"mx-name-microflowButton"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Change password" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "ExampleConfiguration": { "widget": "$ExampleConfiguration", "source": "object" } }, "config": { "operationId": "EnLpb1Kx5lm2Jl6aCDZsEg", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": false },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]
                                    }
                                ]} />
                        ]} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$ActionButton key="p.Encryption.ChangePasswordExample_NewEdit.saveButton1"
                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.saveButton1"
                buttonId={"p.Encryption.ChangePasswordExample_NewEdit.saveButton1"}
                class={"mx-name-saveButton1"}
                style={undefined}
                tabIndex={undefined}
                renderType={"button"}
                role={undefined}
                buttonClass={"btn-default"}
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
                icon={WebIconProperty({
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Save.png" }
                })}
                action={ActionProperty({
                    "action": { "type": "saveChanges", "argMap": { "$object": { "widget": "p.Encryption.ChangePasswordExample_NewEdit.dataView", "source": "object" } }, "config": { "operationId": "vm5IqaRYWVuawvypEDO0ww", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />,
            <$ActionButton key="p.Encryption.ChangePasswordExample_NewEdit.cancelButton1"
                $widgetId="p.Encryption.ChangePasswordExample_NewEdit.cancelButton1"
                buttonId={"p.Encryption.ChangePasswordExample_NewEdit.cancelButton1"}
                class={"mx-name-cancelButton1"}
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
                icon={WebIconProperty({
                    "icon": { "type": "image", "iconUrl": "img/System$Images$Cancel.png" }
                })}
                action={ActionProperty({
                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "xR2zYMv/SlWa6rjapuizAA", "closePage": true }, "disabledDuringExecution": true },
                    "abortOnServerValidation": true
                })} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Example Configuration"
]);

export const classes = "mx-window-view";

export const cancelChangesOperationId = "3s2SELNkvl+MSNlrpbYe8g";
export const closeButton = "p.Encryption.ChangePasswordExample_NewEdit.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
