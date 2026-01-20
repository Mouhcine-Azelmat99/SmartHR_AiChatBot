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
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/MxGenAIConnector.Popup_MxGenAI.js";

const { $Div, $DataView, $Text, $FormGroup, $TextArea, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ Div, DataView, Text, FormGroup, TextArea, ActionButton, ConditionalVisibilityWrapper });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1"
        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0"
                $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.dataView1"
                                $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$ConfigurationImport",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Text key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.text1"
                                        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.text1"
                                        class={"mx-name-text1"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Paste the key from the Mendix Portal." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h4"} />,
                                    <$FormGroup key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1$formGroup"
                                        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1$formGroup"
                                        class={"mx-name-textArea1 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                                                $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MxGenAIConnector.ConfigurationStringImport",
                                                    "attribute": "Key",
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
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.textArea1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Div key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2"
                                        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2"
                                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0"
                                                $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column0"
                                                        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2"
                                                                $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2"
                                                                buttonId={"p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2"}
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
                                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "3izk5dv7oFuJvAMoQ003Gw", "closePage": true }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column1"
                                                        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.layoutGrid2$row0$column1"
                                                        class={"col-lg-auto col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1$visibility"
                                                                $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1"
                                                                        $widgetId="p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1"
                                                                        buttonId={"p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton1"}
                                                                        class={"mx-name-actionButton1 pull-right"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        renderType={"button"}
                                                                        role={undefined}
                                                                        buttonClass={"btn-primary"}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Import key" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        tooltip={TextProperty({
                                                                            "value": t([
                                                                                ""
                                                                            ])
                                                                        })}
                                                                        icon={undefined}
                                                                        action={ActionProperty({
                                                                            "action": { "type": "callMicroflow", "argMap": { "ConfigurationStringImport": { "widget": "$ConfigurationImport", "source": "object" } }, "config": { "operationId": "+Uv/naZOCl6+/258LGzpFQ", "progress": { "message": t([ "" ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                            "abortOnServerValidation": true
                                                                        })} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Import key"
]);

export const classes = "";

export const cancelChangesOperationId = "Owqe7i4rsVa6zQbVEF0Nyg";
export const closeButton = "p.MxGenAIConnector.ConfigurationStringImport_NewEdit.actionButton2";
export const style = {
    "width": "40vw"
};
export const content = { ...parentContent,
    "MxGenAIConnector.Popup_MxGenAI.Main": region$Main,
};
