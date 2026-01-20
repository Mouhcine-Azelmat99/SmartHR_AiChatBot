import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { FileUploadProperty } from "mendix/FileUploadProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FileManager } from "mendix/widgets/web/FileManager";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $FormGroup, $FileManager, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ Div, DataView, Container, FormGroup, FileManager, ActionButton, ConditionalVisibilityWrapper });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1"
        $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0"
                $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.AgentImportExportFile_NewEdit.dataView6"
                                $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$AgentImportExportFile",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.AgentImportExportFile_NewEdit.container2"
                                        $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.container2"
                                        class={"mx-name-container2 spacing-inner-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$FormGroup key="p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1$formGroup"
                                                $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1$formGroup"
                                                class={"mx-fileinput mx-name-fileManager1 spacing-outer-bottom-none mx-filemanager"}
                                                style={undefined}
                                                control={[
                                                    <$FileManager key="p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                                        $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                                        upload={FileUploadProperty({
                                                            "scope": "p.AgentCommons.AgentImportExportFile_NewEdit.dataView6"
                                                        })}
                                                        showInBrowser={false}
                                                        maxFileSize={5}
                                                        extensions={".json"}
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "File" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.AgentCommons.AgentImportExportFile_NewEdit.fileManager1"
                                                })} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.AgentImportExportFile_NewEdit.container1"
                                        $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.container1"
                                        class={"mx-name-container1 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2"
                                                $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2"
                                                buttonId={"p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2"}
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
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "ZzioSy2hrFuIOvV0dYIS6Q", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1"
                                                        $widgetId="p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1"
                                                        buttonId={"p.AgentCommons.AgentImportExportFile_NewEdit.actionButton1"}
                                                        class={"mx-name-actionButton1"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-primary"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Import" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "AgentImportExportFile": { "widget": "$AgentImportExportFile", "source": "object" } }, "config": { "operationId": "jo1gksrV1Fmu1tv3T5v0cg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Import Agent With File"
]);

export const classes = "";

export const cancelChangesOperationId = "vhI9xsHhd1yCHXGXZMZDvg";
export const closeButton = "p.AgentCommons.AgentImportExportFile_NewEdit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
