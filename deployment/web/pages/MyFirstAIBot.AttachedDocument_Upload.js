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
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FileManager } from "mendix/widgets/web/FileManager";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $FileManager, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, FileManager, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1"
        $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0"
                $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MyFirstAIBot.AttachedDocument_Upload.dataView6"
                                $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$AttachedDocument",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.MyFirstAIBot.AttachedDocument_Upload.fileManager1$formGroup"
                                        $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.fileManager1$formGroup"
                                        class={"mx-fileinput mx-name-fileManager1 mx-filemanager"}
                                        style={undefined}
                                        control={[
                                            <$FileManager key="p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                                                $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                                                upload={FileUploadProperty({
                                                    "scope": "p.MyFirstAIBot.AttachedDocument_Upload.dataView6"
                                                })}
                                                showInBrowser={false}
                                                maxFileSize={5}
                                                extensions={".pdf,.csv,.doc,.docx,.xls,.xlsx,.html,.txt,.md"}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstAIBot.AttachedDocument_Upload.fileManager1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.AttachedDocument_Upload.actionButton4$visibility"
                                        $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.actionButton4$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MyFirstAIBot.AttachedDocument_Upload.actionButton4"
                                                $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.actionButton4"
                                                buttonId={"p.MyFirstAIBot.AttachedDocument_Upload.actionButton4"}
                                                class={"mx-name-actionButton4"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Add to chat" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "AttachedDocument": { "widget": "$AttachedDocument", "source": "object" }, "ChatContext": { "widget": "$ChatContext", "source": "object" } }, "config": { "operationId": "B7mhg7AHMlmqTq68/0lrEw", "progress": { "message": t([ "Uploading.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.MyFirstAIBot.AttachedDocument_Upload.actionButton2"
                                        $widgetId="p.MyFirstAIBot.AttachedDocument_Upload.actionButton2"
                                        buttonId={"p.MyFirstAIBot.AttachedDocument_Upload.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "FJfM/eU3PlCrqXHHxP2P+g", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Upload document"
]);

export const classes = "";

export const cancelChangesOperationId = "YjSu5vXkv1uXU/JMYwmT/w";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
