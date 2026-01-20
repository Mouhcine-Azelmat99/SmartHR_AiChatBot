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
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.Encryption.Certificate_Generate.layoutGrid1"
        $widgetId="p.Encryption.Certificate_Generate.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.Encryption.Certificate_Generate.layoutGrid1$row0"
                $widgetId="p.Encryption.Certificate_Generate.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.Encryption.Certificate_Generate.layoutGrid1$row0$column0"
                        $widgetId="p.Encryption.Certificate_Generate.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.Encryption.Certificate_Generate.dataView1"
                                $widgetId="p.Encryption.Certificate_Generate.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$PGPCertificate",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.Encryption.Certificate_Generate.textBox8$formGroup"
                                        $widgetId="p.Encryption.Certificate_Generate.textBox8$formGroup"
                                        class={"mx-name-textBox8 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.Encryption.Certificate_Generate.textBox8"
                                                $widgetId="p.Encryption.Certificate_Generate.textBox8"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.Certificate_Generate.dataView1",
                                                    "path": "",
                                                    "entity": "Encryption.PGPCertificate",
                                                    "attribute": "Reference",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "This field is required" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
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
                                                maxLength={100}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Reference" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.Certificate_Generate.textBox8"
                                        })}
                                        width={4}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.Certificate_Generate.textBox8"
                                        })} />,
                                    <$FormGroup key="p.Encryption.Certificate_Generate.textBox9$formGroup"
                                        $widgetId="p.Encryption.Certificate_Generate.textBox9$formGroup"
                                        class={"mx-name-textBox9 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.Encryption.Certificate_Generate.textBox9"
                                                $widgetId="p.Encryption.Certificate_Generate.textBox9"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.Certificate_Generate.dataView1",
                                                    "path": "",
                                                    "entity": "Encryption.PGPCertificate",
                                                    "attribute": "EmailAddress",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "This field is required" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
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
                                                maxLength={50}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Email address" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.Certificate_Generate.textBox9"
                                        })}
                                        width={4}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.Certificate_Generate.textBox9"
                                        })} />,
                                    <$FormGroup key="p.Encryption.Certificate_Generate.textBox6$formGroup"
                                        $widgetId="p.Encryption.Certificate_Generate.textBox6$formGroup"
                                        class={"mx-name-textBox6 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.Encryption.Certificate_Generate.textBox6"
                                                $widgetId="p.Encryption.Certificate_Generate.textBox6"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.Encryption.Certificate_Generate.dataView1",
                                                    "path": "",
                                                    "entity": "Encryption.PGPCertificate",
                                                    "attribute": "PassPhrase_Plain",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": { "message": t([ "This field is required" ]), "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "value" }, { "type": "literal", "value": null } ] }, "args": {} } },
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
                                                maxLength={20}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={true}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Pass phrase  plain" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.Encryption.Certificate_Generate.textBox6"
                                        })}
                                        width={4}
                                        orientation={"horizontal"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.Encryption.Certificate_Generate.textBox6"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.Encryption.Certificate_Generate.actionButton1$visibility"
                                        $widgetId="p.Encryption.Certificate_Generate.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.Certificate_Generate.actionButton1"
                                                $widgetId="p.Encryption.Certificate_Generate.actionButton1"
                                                buttonId={"p.Encryption.Certificate_Generate.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-success"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Generate" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Certificate_PrivateKey": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "U3QEYWxv71KDr+6dLKstAg", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.Encryption.Certificate_Generate.cancelButton1"
                                        $widgetId="p.Encryption.Certificate_Generate.cancelButton1"
                                        buttonId={"p.Encryption.Certificate_Generate.cancelButton1"}
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
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "nE2HSJ/W8VeGdim51gx9ZA", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Certificate"
]);

export const classes = "page-form page-form-default";

export const cancelChangesOperationId = "zxma3rfatFa3Fx6psSn6bg";
export const closeButton = "p.Encryption.Certificate_Generate.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
