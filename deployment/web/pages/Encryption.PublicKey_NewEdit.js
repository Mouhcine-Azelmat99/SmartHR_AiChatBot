import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicFileProperty } from "mendix/DynamicFileProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { FileUploadProperty } from "mendix/FileUploadProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FileManager } from "mendix/widgets/web/FileManager";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Label } from "mendix/widgets/web/Label";
import { Table } from "mendix/widgets/web/Table";
import { TableRow } from "mendix/widgets/web/TableRow";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.PopupLayout.js";

const { $Div, $DataView, $Table, $TableRow, $Label, $FormGroup, $TextBox, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Table, TableRow, Label, FormGroup, TextBox, FileManager, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.Encryption.PublicKey_NewEdit.layoutGrid1"
        $widgetId="p.Encryption.PublicKey_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.Encryption.PublicKey_NewEdit.layoutGrid1$row0"
                $widgetId="p.Encryption.PublicKey_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.Encryption.PublicKey_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.Encryption.PublicKey_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.Encryption.PublicKey_NewEdit.dataView1"
                                $widgetId="p.Encryption.PublicKey_NewEdit.dataView1"
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
                                    <$Table key="p.Encryption.PublicKey_NewEdit.table4"
                                        $widgetId="p.Encryption.PublicKey_NewEdit.table4"
                                        class={"mx-name-table4"}
                                        style={undefined}
                                        autoWidth={false}
                                        columnWidths={[
                                            "25%",
                                            "75%"
                                        ]}
                                        rows={[
                                            <$TableRow key="p.Encryption.PublicKey_NewEdit.table4$row0"
                                                $widgetId="p.Encryption.PublicKey_NewEdit.table4$row0"
                                                class={""}
                                                style={undefined}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PublicKey_NewEdit.label2"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.label2"
                                                                class={"mx-name-label2"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.label2"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Reference"
                                                                    ])
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PublicKey_NewEdit.textBox3$formGroup"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.textBox3$formGroup"
                                                                class={"mx-name-textBox3 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.Encryption.PublicKey_NewEdit.textBox3"
                                                                        $widgetId="p.Encryption.PublicKey_NewEdit.textBox3"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.Encryption.PublicKey_NewEdit.dataView1",
                                                                            "path": "",
                                                                            "entity": "Encryption.PGPCertificate",
                                                                            "attribute": "Reference",
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
                                                                        maxLength={100}
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
                                                                            "widgetId": "p.Encryption.PublicKey_NewEdit.textBox3"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.textBox3"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PublicKey_NewEdit.textBox3"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />,
                                            <$TableRow key="p.Encryption.PublicKey_NewEdit.table4$row1"
                                                $widgetId="p.Encryption.PublicKey_NewEdit.table4$row1"
                                                class={""}
                                                style={undefined}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PublicKey_NewEdit.label1"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.label1"
                                                                class={"mx-name-label1"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.label1"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Email"
                                                                    ])
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PublicKey_NewEdit.textBox1$formGroup"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.textBox1$formGroup"
                                                                class={"mx-name-textBox1 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.Encryption.PublicKey_NewEdit.textBox1"
                                                                        $widgetId="p.Encryption.PublicKey_NewEdit.textBox1"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.Encryption.PublicKey_NewEdit.dataView1",
                                                                            "path": "",
                                                                            "entity": "Encryption.PGPCertificate",
                                                                            "attribute": "EmailAddress",
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
                                                                            "widgetId": "p.Encryption.PublicKey_NewEdit.textBox1"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.textBox1"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PublicKey_NewEdit.textBox1"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />,
                                            <$TableRow key="p.Encryption.PublicKey_NewEdit.table4$row2"
                                                $widgetId="p.Encryption.PublicKey_NewEdit.table4$row2"
                                                class={""}
                                                style={undefined}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PublicKey_NewEdit.label8"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.label8"
                                                                class={"mx-name-label8"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.label8"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Name"
                                                                    ])
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PublicKey_NewEdit.textBox4$formGroup"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.textBox4$formGroup"
                                                                class={"mx-name-textBox4 mx-textbox"}
                                                                style={undefined}
                                                                control={[
                                                                    <$TextBox key="p.Encryption.PublicKey_NewEdit.textBox4"
                                                                        $widgetId="p.Encryption.PublicKey_NewEdit.textBox4"
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.Encryption.PublicKey_NewEdit.dataView1",
                                                                            "path": "",
                                                                            "entity": "Encryption.PGPCertificate",
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
                                                                        readOnlyStyle={"text"}
                                                                        maxLength={400}
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
                                                                            "widgetId": "p.Encryption.PublicKey_NewEdit.textBox4"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.textBox4"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PublicKey_NewEdit.textBox4"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />,
                                            <$TableRow key="p.Encryption.PublicKey_NewEdit.table4$row3"
                                                $widgetId="p.Encryption.PublicKey_NewEdit.table4$row3"
                                                class={""}
                                                style={undefined}
                                                cells={[
                                                    {
                                                        "header": true,
                                                        "class": "",
                                                        "content": [
                                                            <$Label key="p.Encryption.PublicKey_NewEdit.label10"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.label10"
                                                                class={"mx-name-label10"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.label10"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "File"
                                                                    ])
                                                                })} />
                                                        ]
                                                    },
                                                    {
                                                        "class": "",
                                                        "content": [
                                                            <$FormGroup key="p.Encryption.PublicKey_NewEdit.fileManager3$formGroup"
                                                                $widgetId="p.Encryption.PublicKey_NewEdit.fileManager3$formGroup"
                                                                class={"mx-fileinput mx-name-fileManager3 mx-filemanager"}
                                                                style={undefined}
                                                                control={[
                                                                    <$FileManager key="p.Encryption.PublicKey_NewEdit.fileManager3"
                                                                        $widgetId="p.Encryption.PublicKey_NewEdit.fileManager3"
                                                                        download={DynamicFileProperty({
                                                                            "scope": "p.Encryption.PublicKey_NewEdit.dataView1"
                                                                        })}
                                                                        upload={FileUploadProperty({
                                                                            "scope": "p.Encryption.PublicKey_NewEdit.dataView1"
                                                                        })}
                                                                        showInBrowser={false}
                                                                        maxFileSize={5}
                                                                        extensions={""}
                                                                        tabIndex={undefined}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.Encryption.PublicKey_NewEdit.fileManager3"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.Encryption.PublicKey_NewEdit.fileManager3"
                                                                })}
                                                                width={4}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.Encryption.PublicKey_NewEdit.fileManager3"
                                                                })} />
                                                        ]
                                                    }
                                                ]} />
                                        ]} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.Encryption.PublicKey_NewEdit.microflowButton3$visibility"
                                        $widgetId="p.Encryption.PublicKey_NewEdit.microflowButton3$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.Encryption.PublicKey_NewEdit.microflowButton3"
                                                $widgetId="p.Encryption.PublicKey_NewEdit.microflowButton3"
                                                buttonId={"p.Encryption.PublicKey_NewEdit.microflowButton3"}
                                                class={"mx-name-microflowButton3"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "Certificate": { "widget": "$PGPCertificate", "source": "object" } }, "config": { "operationId": "QPokFRfckVuo/xn9/6xATQ", "validate": "view", "allowedRoles": [] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.Encryption.PublicKey_NewEdit.cancelButton1"
                                        $widgetId="p.Encryption.PublicKey_NewEdit.cancelButton1"
                                        buttonId={"p.Encryption.PublicKey_NewEdit.cancelButton1"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "UazSKZDDY1mwBF1i4Xx1rQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Public Key Details"
]);

export const classes = "page-form page-form-default";

export const cancelChangesOperationId = "9flszf33wla5kDVbPbPzKg";
export const closeButton = "p.Encryption.PublicKey_NewEdit.cancelButton1";
export const style = {};
export const content = { ...parentContent,
    "Encryption.PopupLayout.Main": region$Main,
};
