import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/MxGenAIConnector.Popup_MxGenAI.js";

const { $Div, $Container, $Text, $ActionButton } = asPluginWidgets({ Div, Container, Text, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MxGenAIConnector.CreateNewKey.layoutGrid1"
        $widgetId="p.MxGenAIConnector.CreateNewKey.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0"
                $widgetId="p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0$column0"
                        $widgetId="p.MxGenAIConnector.CreateNewKey.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$Container key="p.MxGenAIConnector.CreateNewKey.container1"
                                $widgetId="p.MxGenAIConnector.CreateNewKey.container1"
                                class={"mx-name-container1"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.MxGenAIConnector.CreateNewKey.text31"
                                        $widgetId="p.MxGenAIConnector.CreateNewKey.text31"
                                        class={"mx-name-text31 alert-description spacing-outer-bottom-none"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Visit the Mendix Portal to connect to your GenAI Resources or request a new GenAI Resource." }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"p"} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.MxGenAIConnector.CreateNewKey.container2"
                                $widgetId="p.MxGenAIConnector.CreateNewKey.container2"
                                class={"mx-name-container2 spacing-outer-top-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$ActionButton key="p.MxGenAIConnector.CreateNewKey.actionButton1"
                                        $widgetId="p.MxGenAIConnector.CreateNewKey.actionButton1"
                                        buttonId={"p.MxGenAIConnector.CreateNewKey.actionButton1"}
                                        class={"mx-name-actionButton1"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-primary"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Go to Mendix Portal" }, "args": {} }
                                            })
                                        ])}
                                        tooltip={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        icon={undefined}
                                        action={ActionProperty({
                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://genai.home.mendix.com/" }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Create new key"
]);

export const classes = "";

export const cancelChangesOperationId = "chMcp4remFiAVu2AXaCsCw";
export const style = {
    "width": "40vw"
};
export const content = { ...parentContent,
    "MxGenAIConnector.Popup_MxGenAI.Main": region$Main,
};
