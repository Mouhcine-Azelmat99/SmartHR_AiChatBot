import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { Container } from "mendix/widgets/web/Container";
import { Div } from "mendix/widgets/web/Div";
import { Label } from "mendix/widgets/web/Label";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $Text, $Container, $Label, $ActionButton } = asPluginWidgets({ Div, Text, Container, Label, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid2"
        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid2$row0"
                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid2$row0$column0"
                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Text key="p.MistralConnector.Resources_Overview.text1"
                                $widgetId="p.MistralConnector.Resources_Overview.text1"
                                class={"mx-name-text1"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Resources" }, "args": {} }
                                    })
                                ])}
                                renderMode={"h2"} />,
                            <$Container key="p.MistralConnector.Resources_Overview.container1"
                                $widgetId="p.MistralConnector.Resources_Overview.container1"
                                class={"mx-name-container1 spacing-outer-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid1"
                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid1"
                                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid1$row0"
                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid1$row0"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid1$row0$column0"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid1$row0$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.MistralConnector.Resources_Overview.label4"
                                                                $widgetId="p.MistralConnector.Resources_Overview.label4"
                                                                class={"mx-name-label4 spacing-outer-top spacing-outer-bottom"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MistralConnector.Resources_Overview.label4"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Technical documentation"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid1$row0$column1"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid1$row0$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton11"
                                                                $widgetId="p.MistralConnector.Resources_Overview.actionButton11"
                                                                buttonId={"p.MistralConnector.Resources_Overview.actionButton11"}
                                                                class={"mx-name-actionButton11"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"link"}
                                                                role={"button"}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Mendix Docs" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/connectors/openai-connector/" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid1$row1"
                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid1$row1"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid1$row1$column0"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid1$row1$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.MistralConnector.Resources_Overview.label9"
                                                                $widgetId="p.MistralConnector.Resources_Overview.label9"
                                                                class={"mx-name-label9 spacing-outer-bottom spacing-outer-top"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MistralConnector.Resources_Overview.label9"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "GenAI showcase application"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid1$row1$column1"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid1$row1$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton3"
                                                                $widgetId="p.MistralConnector.Resources_Overview.actionButton3"
                                                                buttonId={"p.MistralConnector.Resources_Overview.actionButton3"}
                                                                class={"mx-name-actionButton3"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"link"}
                                                                role={"button"}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Mendix Marketplace" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://marketplace.mendix.com/link/component/220475" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.MistralConnector.Resources_Overview.container2"
                                $widgetId="p.MistralConnector.Resources_Overview.container2"
                                class={"mx-name-container2"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.MistralConnector.Resources_Overview.text3"
                                        $widgetId="p.MistralConnector.Resources_Overview.text3"
                                        class={"mx-name-text3 spacing-outer-top-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "API Documentation" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h4"} />,
                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3"
                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3"
                                        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row0"
                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row0"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row0$column0"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row0$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={undefined} />,
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row0$column1"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row0$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.MistralConnector.Resources_Overview.label1"
                                                                $widgetId="p.MistralConnector.Resources_Overview.label1"
                                                                class={"mx-name-label1"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MistralConnector.Resources_Overview.label1"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Mistral"
                                                                    ])
                                                                })} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row1"
                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row1"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row1$column0"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row1$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.MistralConnector.Resources_Overview.label3"
                                                                $widgetId="p.MistralConnector.Resources_Overview.label3"
                                                                class={"mx-name-label3 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MistralConnector.Resources_Overview.label3"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "General information"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row1$column1"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row1$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton2"
                                                                $widgetId="p.MistralConnector.Resources_Overview.actionButton2"
                                                                buttonId={"p.MistralConnector.Resources_Overview.actionButton2"}
                                                                class={"mx-name-actionButton2"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"link"}
                                                                role={"button"}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Quickstart" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/getting-started/quickstart/" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row2"
                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row2"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row2$column0"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row2$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.MistralConnector.Resources_Overview.label5"
                                                                $widgetId="p.MistralConnector.Resources_Overview.label5"
                                                                class={"mx-name-label5 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MistralConnector.Resources_Overview.label5"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Chat Completions API"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row2$column1"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row2$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4"
                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4"
                                                                class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row0"
                                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row0$column0"
                                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton14"
                                                                                        $widgetId="p.MistralConnector.Resources_Overview.actionButton14"
                                                                                        buttonId={"p.MistralConnector.Resources_Overview.actionButton14"}
                                                                                        class={"mx-name-actionButton14"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Documentation" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/capabilities/completion/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row1"
                                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row1$column0"
                                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton16"
                                                                                        $widgetId="p.MistralConnector.Resources_Overview.actionButton16"
                                                                                        buttonId={"p.MistralConnector.Resources_Overview.actionButton16"}
                                                                                        class={"mx-name-actionButton16"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Function calling" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/capabilities/function_calling/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row2"
                                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row2"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row2$column0"
                                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row2$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton15"
                                                                                        $widgetId="p.MistralConnector.Resources_Overview.actionButton15"
                                                                                        buttonId={"p.MistralConnector.Resources_Overview.actionButton15"}
                                                                                        class={"mx-name-actionButton15"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Vision" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/capabilities/vision/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row3"
                                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row3"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row3$column0"
                                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row3$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton17"
                                                                                        $widgetId="p.MistralConnector.Resources_Overview.actionButton17"
                                                                                        buttonId={"p.MistralConnector.Resources_Overview.actionButton17"}
                                                                                        class={"mx-name-actionButton17"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Coding" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/capabilities/code_generation/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row4"
                                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row4"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid4$row4$column0"
                                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid4$row4$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton1"
                                                                                        $widgetId="p.MistralConnector.Resources_Overview.actionButton1"
                                                                                        buttonId={"p.MistralConnector.Resources_Overview.actionButton1"}
                                                                                        class={"mx-name-actionButton1"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "API Reference" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/api/#tag/chat" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row3"
                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row3"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row3$column0"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row3$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.MistralConnector.Resources_Overview.label7"
                                                                $widgetId="p.MistralConnector.Resources_Overview.label7"
                                                                class={"mx-name-label7 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MistralConnector.Resources_Overview.label7"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Embeddings API"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid3$row3$column1"
                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid3$row3$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid6"
                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid6"
                                                                class={"mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid6$row0"
                                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid6$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid6$row0$column0"
                                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid6$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton12"
                                                                                        $widgetId="p.MistralConnector.Resources_Overview.actionButton12"
                                                                                        buttonId={"p.MistralConnector.Resources_Overview.actionButton12"}
                                                                                        class={"mx-name-actionButton12"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Documentation" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/capabilities/embeddings/overview/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.MistralConnector.Resources_Overview.layoutGrid6$row1"
                                                                        $widgetId="p.MistralConnector.Resources_Overview.layoutGrid6$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.MistralConnector.Resources_Overview.layoutGrid6$row1$column0"
                                                                                $widgetId="p.MistralConnector.Resources_Overview.layoutGrid6$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.MistralConnector.Resources_Overview.actionButton13"
                                                                                        $widgetId="p.MistralConnector.Resources_Overview.actionButton13"
                                                                                        buttonId={"p.MistralConnector.Resources_Overview.actionButton13"}
                                                                                        class={"mx-name-actionButton13"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "API Reference" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/api/#tag/embeddings" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]}
                                ariaHidden={false} />,
                            <$Container key="p.MistralConnector.Resources_Overview.container3"
                                $widgetId="p.MistralConnector.Resources_Overview.container3"
                                class={"mx-name-container3"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.MistralConnector.Resources_Overview.text4"
                                        $widgetId="p.MistralConnector.Resources_Overview.text4"
                                        class={"mx-name-text4 spacing-outer-top-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Other resources" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h4"} />
                                ]}
                                ariaHidden={false} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Resources Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
