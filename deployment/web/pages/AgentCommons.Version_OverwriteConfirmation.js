import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $Container, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, Container, Text, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1"
        $widgetId="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0"
                $widgetId="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p.AgentCommons.Version_OverwriteConfirmation.container1"
                                $widgetId="p.AgentCommons.Version_OverwriteConfirmation.container1"
                                class={"mx-name-container1 spacing-outer-bottom-large"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.AgentCommons.Version_OverwriteConfirmation.text1"
                                        $widgetId="p.AgentCommons.Version_OverwriteConfirmation.text1"
                                        class={"mx-name-text1"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Are you sure that you want to overwrite your unsaved draft?" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"span"} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />,
            <$Div key="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1"
                $widgetId="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1$column0"
                        $widgetId="p.AgentCommons.Version_OverwriteConfirmation.layoutGrid1$row1$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_OverwriteConfirmation.actionButton1$visibility"
                                $widgetId="p.AgentCommons.Version_OverwriteConfirmation.actionButton1$visibility"
                                visible={ExpressionProperty({
                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                })}
                                contents={[
                                    <$ActionButton key="p.AgentCommons.Version_OverwriteConfirmation.actionButton1"
                                        $widgetId="p.AgentCommons.Version_OverwriteConfirmation.actionButton1"
                                        buttonId={"p.AgentCommons.Version_OverwriteConfirmation.actionButton1"}
                                        class={"mx-name-actionButton1 pull-right spacing-outer-left"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-primary"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Overwrite" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "PageHelper": { "widget": "$PageHelper", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "snCt5+iXY1euOlPC01YPaA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />,
                            <$ActionButton key="p.AgentCommons.Version_OverwriteConfirmation.actionButton2"
                                $widgetId="p.AgentCommons.Version_OverwriteConfirmation.actionButton2"
                                buttonId={"p.AgentCommons.Version_OverwriteConfirmation.actionButton2"}
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
                                    "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                    "abortOnServerValidation": true
                                })} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Overwrite unsaved draft"
]);

export const classes = "";

export const cancelChangesOperationId = "UcOF2TB5tlyKahaVDts22g";
export const closeButton = "p.AgentCommons.Version_OverwriteConfirmation.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
