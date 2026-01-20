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
    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid2"
        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid2"
        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid2$row0"
                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid2$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid2$row0$column0"
                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid2$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Text key="p.OpenAIConnector.Resources_Overview.text1"
                                $widgetId="p.OpenAIConnector.Resources_Overview.text1"
                                class={"mx-name-text1"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Resources" }, "args": {} }
                                    })
                                ])}
                                renderMode={"h2"} />,
                            <$Container key="p.OpenAIConnector.Resources_Overview.container1"
                                $widgetId="p.OpenAIConnector.Resources_Overview.container1"
                                class={"mx-name-container1 spacing-outer-bottom-medium"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid1"
                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid1"
                                        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid1$row0"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid1$row0"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid1$row0$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid1$row0$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label4"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label4"
                                                                class={"mx-name-label4 spacing-outer-top spacing-outer-bottom"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label4"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Technical documentation"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid1$row0$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid1$row0$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton11"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.actionButton11"
                                                                buttonId={"p.OpenAIConnector.Resources_Overview.actionButton11"}
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
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid1$row1"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid1$row1"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid1$row1$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid1$row1$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label9"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label9"
                                                                class={"mx-name-label9 spacing-outer-bottom spacing-outer-top"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label9"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "GenAI showcase application"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid1$row1$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid1$row1$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton3"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.actionButton3"
                                                                buttonId={"p.OpenAIConnector.Resources_Overview.actionButton3"}
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
                            <$Container key="p.OpenAIConnector.Resources_Overview.container2"
                                $widgetId="p.OpenAIConnector.Resources_Overview.container2"
                                class={"mx-name-container2"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.OpenAIConnector.Resources_Overview.text3"
                                        $widgetId="p.OpenAIConnector.Resources_Overview.text3"
                                        class={"mx-name-text3 spacing-outer-top-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "API Documentation" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h4"} />,
                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3"
                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3"
                                        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={undefined} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label1"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label1"
                                                                class={"mx-name-label1"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label1"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "OpenAI"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0$column2"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row0$column2"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label2"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label2"
                                                                class={"mx-name-label2"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label2"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Azure OpenAI"
                                                                    ])
                                                                })} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label3"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label3"
                                                                class={"mx-name-label3 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label3"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "General information"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton2"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.actionButton2"
                                                                buttonId={"p.OpenAIConnector.Resources_Overview.actionButton2"}
                                                                class={"mx-name-actionButton2"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"link"}
                                                                role={"button"}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Manage API Keys" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/account/api-keys" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1$column2"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row1$column2"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton6"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.actionButton6"
                                                                buttonId={"p.OpenAIConnector.Resources_Overview.actionButton6"}
                                                                class={"mx-name-actionButton6"}
                                                                style={undefined}
                                                                tabIndex={undefined}
                                                                renderType={"link"}
                                                                role={"button"}
                                                                buttonClass={"btn-default"}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "About Azure OpenAI" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltip={TextProperty({
                                                                    "value": t([
                                                                        ""
                                                                    ])
                                                                })}
                                                                icon={undefined}
                                                                action={ActionProperty({
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-gb/azure/ai-services/openai/overview" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label5"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label5"
                                                                class={"mx-name-label5 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label5"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Chat Completions API"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4"
                                                                class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row0"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton1"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton1"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton1"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/api-reference/chat" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row1"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row1$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton4"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton4"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton4"}
                                                                                        class={"mx-name-actionButton4"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "FAQ" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/guides/text-generation/faq" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row2"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row2"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row2$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row2$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton15"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton15"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton15"}
                                                                                        class={"mx-name-actionButton15"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Function Calling" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/guides/function-calling" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row3"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row3"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid4$row3$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid4$row3$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton16"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton16"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton16"}
                                                                                        class={"mx-name-actionButton16"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/guides/vision" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2$column2"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row2$column2"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid8"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid8"
                                                                class={"mx-name-layoutGrid8 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid8$row0"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid8$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid8$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid8$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton5"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton5"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton5"}
                                                                                        class={"mx-name-actionButton5"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference#completions" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid8$row1"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid8$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid8$row1$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid8$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton17"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton17"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton17"}
                                                                                        class={"mx-name-actionButton17"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-us/azure/ai-services/openai/gpt-v-quickstart?tabs=image%2Ccommand-line&pivots=programming-language-studio" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label6"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label6"
                                                                class={"mx-name-label6 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label6"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Image Generations API"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton9"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.actionButton9"
                                                                buttonId={"p.OpenAIConnector.Resources_Overview.actionButton9"}
                                                                class={"mx-name-actionButton9"}
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
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/api-reference/images" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3$column2"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row3$column2"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton18"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.actionButton18"
                                                                buttonId={"p.OpenAIConnector.Resources_Overview.actionButton18"}
                                                                class={"mx-name-actionButton18"}
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
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-gb/azure/ai-services/openai/reference#image-generation" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label7"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label7"
                                                                class={"mx-name-label7 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label7"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Embeddings API"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid6"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid6"
                                                                class={"mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid6$row0"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid6$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid6$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid6$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton12"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton12"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton12"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/guides/embeddings" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid6$row1"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid6$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid6$row1$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid6$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton13"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton13"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton13"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/api-reference/embeddings" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4$column2"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row4$column2"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid7"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid7"
                                                                class={"mx-name-layoutGrid7 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid7$row0"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid7$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid7$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid7$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton14"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton14"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton14"}
                                                                                        class={"mx-name-actionButton14"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-us/azure/ai-services/openai/how-to/embeddings?tabs=console" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label8"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label8"
                                                                class={"mx-name-label8 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label8"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Prompt Engineering"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton7"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.actionButton7"
                                                                buttonId={"p.OpenAIConnector.Resources_Overview.actionButton7"}
                                                                class={"mx-name-actionButton7"}
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
                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/guides/prompt-engineering" }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5$column2"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid3$row5$column2"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid5"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid5"
                                                                class={"mx-name-layoutGrid5 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid5$row0"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid5$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid5$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid5$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton10"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton10"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton10"}
                                                                                        class={"mx-name-actionButton10"}
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
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid5$row1"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid5$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid5$row1$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid5$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton8"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton8"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton8"}
                                                                                        class={"mx-name-actionButton8"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Advanced Documentation" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions" }, "disabledDuringExecution": true },
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
                            <$Container key="p.OpenAIConnector.Resources_Overview.container3"
                                $widgetId="p.OpenAIConnector.Resources_Overview.container3"
                                class={"mx-name-container3"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Text key="p.OpenAIConnector.Resources_Overview.text4"
                                        $widgetId="p.OpenAIConnector.Resources_Overview.text4"
                                        class={"mx-name-text4 spacing-outer-top-large"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Other resources" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h4"} />,
                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid9"
                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid9"
                                        class={"mx-name-layoutGrid9 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid9$row0"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid9$row0"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid9$row0$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid9$row0$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label17"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label17"
                                                                class={"mx-name-label17 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label17"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Prompt Engineering"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid9$row0$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid9$row0$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid13"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid13"
                                                                class={"mx-name-layoutGrid13 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid13$row0"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid13$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid13$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid13$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton26"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton26"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton26"}
                                                                                        class={"mx-name-actionButton26"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "OpenAI Documentation" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://platform.openai.com/docs/guides/prompt-engineering" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid13$row1"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid13$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid13$row1$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid13$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton27"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton27"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton27"}
                                                                                        class={"mx-name-actionButton27"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Azure OpenAI Documentation" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/prompt-engineering" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid13$row2"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid13$row2"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid13$row2$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid13$row2$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton28"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton28"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton28"}
                                                                                        class={"mx-name-actionButton28"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Azure OpenAI Advanced Documntation" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://learn.microsoft.com/en-us/azure/ai-services/openai/concepts/advanced-prompt-engineering?pivots=programming-language-chat-completions" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />,
                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid9$row1"
                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid9$row1"
                                                class={"row align-children-center"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid9$row1$column0"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid9$row1$column0"
                                                        class={"col-lg-2 col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Label key="p.OpenAIConnector.Resources_Overview.label18"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.label18"
                                                                class={"mx-name-label18 spacing-outer-top-large spacing-outer-bottom-large"}
                                                                style={undefined}
                                                                id={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.OpenAIConnector.Resources_Overview.label18"
                                                                })}
                                                                caption={TextProperty({
                                                                    "value": t([
                                                                        "Retrieval Augmented Generation (RAG)"
                                                                    ])
                                                                })} />
                                                        ]} />,
                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid9$row1$column1"
                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid9$row1$column1"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14"
                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14"
                                                                class={"mx-name-layoutGrid14 mx-layoutgrid mx-layoutgrid-fluid spacing-outer-top-medium spacing-outer-bottom-medium"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row0"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row0$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton29"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton29"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton29"}
                                                                                        class={"mx-name-actionButton29"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "OpenAI Cookbook For Embeddings-based Search" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://cookbook.openai.com/examples/question_answering_using_embeddings" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row1"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row1"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row1$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row1$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton31"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton31"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton31"}
                                                                                        class={"mx-name-actionButton31"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Mendix Database Connector Documentation" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/connectors/database-connector/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row2"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row2"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row2$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row2$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton32"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton32"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton32"}
                                                                                        class={"mx-name-actionButton32"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Vector Database Options On AWS" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://aws.amazon.com/blogs/database/the-role-of-vector-datastores-in-generative-ai-applications/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row3"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row3"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row3$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row3$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton33"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton33"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton33"}
                                                                                        class={"mx-name-actionButton33"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Vector Database Options Suggested By OpenAI" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://cookbook.openai.com/examples/vector_databases/readme" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row4"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row4"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row4$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row4$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton34"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton34"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton34"}
                                                                                        class={"mx-name-actionButton34"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "How to: AI-powered search in AWS Relational Database Service (RDS) For PostgreSQL Using pgvector" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://aws.amazon.com/blogs/database/building-ai-powered-search-in-postgresql-using-amazon-sagemaker-and-pgvector/" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />,
                                                                    <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row5"
                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row5"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Resources_Overview.layoutGrid14$row5$column0"
                                                                                $widgetId="p.OpenAIConnector.Resources_Overview.layoutGrid14$row5$column0"
                                                                                class={"col-lg col-md col"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$ActionButton key="p.OpenAIConnector.Resources_Overview.actionButton30"
                                                                                        $widgetId="p.OpenAIConnector.Resources_Overview.actionButton30"
                                                                                        buttonId={"p.OpenAIConnector.Resources_Overview.actionButton30"}
                                                                                        class={"mx-name-actionButton30"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"link"}
                                                                                        role={"button"}
                                                                                        buttonClass={"btn-default"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "pgvector: Open-Source Extension For Vector Similarity Search For PostgreSQL" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://github.com/pgvector/pgvector?tab=readme-ov-file#pgvector" }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]} />
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
