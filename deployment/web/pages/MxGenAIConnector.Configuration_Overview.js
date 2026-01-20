import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListenObjectProperty } from "mendix/ListenObjectProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WidgetVariableProperty } from "mendix/WidgetVariableProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { Fragment } from "mendix/widgets/web/Fragment";
import { ListView } from "mendix/widgets/web/ListView";
import { TabContainer } from "mendix/widgets/web/TabContainer";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $Text, $Fragment, $Container, $ConditionalVisibilityWrapper, $ActionButton, $TabContainer, $ListView, $DataView } = asPluginWidgets({ Div, Text, Fragment, Container, ConditionalVisibilityWrapper, ActionButton, TabContainer, ListView, DataView });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid1"
        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0"
                $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Text key="p.MxGenAIConnector.Configuration_Overview.text7"
                                $widgetId="p.MxGenAIConnector.Configuration_Overview.text7"
                                class={"mx-name-text7"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "GenAI Resources" }, "args": {} }
                                    })
                                ])}
                                renderMode={"h2"} />,
                            <$Fragment key="p.MxGenAIConnector.Configuration_Overview.snippetCall1"
                                $widgetId="p.MxGenAIConnector.Configuration_Overview.snippetCall1"
                                content={[
                                    <$Container key="p.MxGenAIConnector.Snippet_Configuration.container1"
                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container1"
                                        class={"mx-name-container1 card"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Div key="p.MxGenAIConnector.Snippet_Configuration.layoutGrid1"
                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.layoutGrid1"
                                                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0.37"
                                                        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0.37"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0.38"
                                                                $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row0$column0.38"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton1$visibility"
                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton1$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton1"
                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton1"
                                                                                buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton1"}
                                                                                class={"mx-name-actionButton1 spacing-outer-right"}
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
                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "1pITVbI2klyyMuchgsfN9g", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton3$visibility"
                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton3$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton3"
                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton3"
                                                                                buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton3"}
                                                                                class={"mx-name-actionButton3"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"button"}
                                                                                role={undefined}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Create key" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "openPage", "argMap": {}, "config": { "name": "MxGenAIConnector/CreateNewKey.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1"
                                                        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1$column0"
                                                                $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid1$row1$column0"
                                                                class={"col-lg col-md-12 col-12"}
                                                                style={undefined}
                                                                content={[
                                                                    <$TabContainer key="p.MxGenAIConnector.Snippet_Configuration.tabContainer1"
                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.tabContainer1"
                                                                        class={"mx-name-tabContainer1 tab-lined spacing-outer-top-medium"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        widgetId={"p.MxGenAIConnector.Snippet_Configuration.tabContainer1"}
                                                                        defaultTab={0}
                                                                        tabs={[
                                                                            {
                                                                                "name": "tabPage1",
                                                                                "caption": TextProperty({
                                                                                    "value": t([
                                                                                        "Deployed models"
                                                                                    ])
                                                                                }),
                                                                                "isDelayed": false,
                                                                                "refreshOnShow": false,
                                                                                "content": [
                                                                                    <$Container key="p.MxGenAIConnector.Snippet_Configuration.container39"
                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container39"
                                                                                        class={"mx-name-container39 grid-deployed-model grid-header"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container40"
                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container40"
                                                                                                class={"mx-name-container40"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.MxGenAIConnector.Snippet_Configuration.text14"
                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.text14"
                                                                                                        class={"mx-name-text14 text-bold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container41"
                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container41"
                                                                                                class={"mx-name-container41"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.MxGenAIConnector.Snippet_Configuration.text16"
                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.text16"
                                                                                                        class={"mx-name-text16 text-bold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Key name" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container42"
                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container42"
                                                                                                class={"mx-name-container42"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.MxGenAIConnector.Snippet_Configuration.text31"
                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.text31"
                                                                                                        class={"mx-name-text31 text-bold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container43"
                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container43"
                                                                                                class={"mx-name-container43"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.MxGenAIConnector.Snippet_Configuration.text34"
                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.text34"
                                                                                                        class={"mx-name-text34 text-bold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Output modality" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container44"
                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container44"
                                                                                                class={"mx-name-container44"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.MxGenAIConnector.Snippet_Configuration.text32"
                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.text32"
                                                                                                        class={"mx-name-text32 text-bold"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Environment" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />,
                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container45"
                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container45"
                                                                                                class={"mx-name-container45"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={undefined}
                                                                                                ariaHidden={false} />
                                                                                        ]}
                                                                                        ariaHidden={false} />,
                                                                                    <$ListView key="p.MxGenAIConnector.Snippet_Configuration.listView5"
                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.listView5"
                                                                                        class={"mx-name-listView5 listview-lined listview-hover"}
                                                                                        style={undefined}
                                                                                        listValue={DatabaseObjectListProperty({
                                                                                            "dataSourceId": "p.6",
                                                                                            "entity": "MxGenAIConnector.MxCloudDeployedModel",
                                                                                            "operationId": "B2jVRlirA1ebNmrFx37eNw",
                                                                                            "sort": []
                                                                                        })}
                                                                                        itemTemplate={TemplatedWidgetProperty({
                                                                                            "dataSourceId": "p.6",
                                                                                            "editable": false,
                                                                                            "children": () => [
                                                                                                <$DataView key="p.MxGenAIConnector.Snippet_Configuration.dataView2"
                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.dataView2"
                                                                                                    class={"mx-name-dataView2 form-vertical"}
                                                                                                    style={undefined}
                                                                                                    tabIndex={undefined}
                                                                                                    object={AssociationObjectProperty({
                                                                                                        "dataSourceId": "p.73",
                                                                                                        "scope": "p.MxGenAIConnector.Snippet_Configuration.listView5",
                                                                                                        "editable": true,
                                                                                                        "path": "MxGenAIConnector.MxCloudDeployedModel_Configuration/MxGenAIConnector.Configuration",
                                                                                                        "operationId": "KrZ8cbYvtFquf8ZPfiGabQ"
                                                                                                    })}
                                                                                                    emptyMessage={TextProperty({
                                                                                                        "value": t([
                                                                                                            ""
                                                                                                        ])
                                                                                                    })}
                                                                                                    body={[
                                                                                                        <$Container key="p.MxGenAIConnector.Snippet_Configuration.container31"
                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.container31"
                                                                                                            class={"mx-name-container31 grid-deployed-model"}
                                                                                                            style={undefined}
                                                                                                            renderMode={"div"}
                                                                                                            onClick={undefined}
                                                                                                            content={[
                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container32"
                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container32"
                                                                                                                    class={"mx-name-container32 item"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton22$visibility"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton22$visibility"
                                                                                                                            visible={ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
                                                                                                                            })}
                                                                                                                            contents={[
                                                                                                                                <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton22"
                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton22"
                                                                                                                                    buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton22"}
                                                                                                                                    class={"mx-name-actionButton22"}
                                                                                                                                    style={undefined}
                                                                                                                                    tabIndex={undefined}
                                                                                                                                    renderType={"link"}
                                                                                                                                    role={"button"}
                                                                                                                                    buttonClass={"btn-default"}
                                                                                                                                    caption={t([
                                                                                                                                        ExpressionProperty({
                                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "listView5", "path": "DisplayName" }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
                                                                                                                                        })
                                                                                                                                    ])}
                                                                                                                                    tooltip={TextProperty({
                                                                                                                                        "value": t([
                                                                                                                                            ""
                                                                                                                                        ])
                                                                                                                                    })}
                                                                                                                                    icon={undefined}
                                                                                                                                    action={ActionProperty({
                                                                                                                                        "action": { "type": "openLink", "argMap": { "$object": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "MxGenAIConnector.Configuration/DeepLinkURL" }, "disabledDuringExecution": true },
                                                                                                                                        "abortOnServerValidation": true
                                                                                                                                    })} />
                                                                                                                            ]} />,
                                                                                                                        <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.text26$visibility"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.text26$visibility"
                                                                                                                            visible={ExpressionProperty({
                                                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
                                                                                                                            })}
                                                                                                                            contents={[
                                                                                                                                <$Text key="p.MxGenAIConnector.Snippet_Configuration.text26"
                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.text26"
                                                                                                                                    class={"mx-name-text26"}
                                                                                                                                    style={undefined}
                                                                                                                                    caption={t([
                                                                                                                                        ExpressionProperty({
                                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "listView5", "path": "DisplayName" }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
                                                                                                                                        })
                                                                                                                                    ])}
                                                                                                                                    renderMode={"span"} />
                                                                                                                            ]} />
                                                                                                                    ]}
                                                                                                                    ariaHidden={false} />,
                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container33"
                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container33"
                                                                                                                    class={"mx-name-container33 item"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$Text key="p.MxGenAIConnector.Snippet_Configuration.text27"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.text27"
                                                                                                                            class={"mx-name-text27"}
                                                                                                                            style={undefined}
                                                                                                                            caption={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyName" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "variable", "variable": "currentObject", "path": "KeyName" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
                                                                                                                                })
                                                                                                                            ])}
                                                                                                                            renderMode={"span"} />
                                                                                                                    ]}
                                                                                                                    ariaHidden={false} />,
                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container34"
                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container34"
                                                                                                                    class={"mx-name-container34 item"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$Text key="p.MxGenAIConnector.Snippet_Configuration.text28"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.text28"
                                                                                                                            class={"mx-name-text28"}
                                                                                                                            style={undefined}
                                                                                                                            caption={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "listView5", "path": "Model" }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
                                                                                                                                })
                                                                                                                            ])}
                                                                                                                            renderMode={"span"} />
                                                                                                                    ]}
                                                                                                                    ariaHidden={false} />,
                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container35"
                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container35"
                                                                                                                    class={"mx-name-container35 item"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$Text key="p.MxGenAIConnector.Snippet_Configuration.text29"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.text29"
                                                                                                                            class={"mx-name-text29"}
                                                                                                                            style={undefined}
                                                                                                                            caption={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "listView5", "path": "OutputModality" }, { "type": "literal", "value": "GenAICommons.ENUM_ModelModality" } ] }, "args": { "listView5": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } } }
                                                                                                                                })
                                                                                                                            ])}
                                                                                                                            renderMode={"span"} />
                                                                                                                    ]}
                                                                                                                    ariaHidden={false} />,
                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container36"
                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container36"
                                                                                                                    class={"mx-name-container36 item"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$Text key="p.MxGenAIConnector.Snippet_Configuration.text30"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.text30"
                                                                                                                            class={"mx-name-text30"}
                                                                                                                            style={undefined}
                                                                                                                            caption={t([
                                                                                                                                ExpressionProperty({
                                                                                                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Environment" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "variable", "variable": "currentObject", "path": "Environment" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView2", "source": "object" } } }
                                                                                                                                })
                                                                                                                            ])}
                                                                                                                            renderMode={"span"} />
                                                                                                                    ]}
                                                                                                                    ariaHidden={false} />,
                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container37"
                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container37"
                                                                                                                    class={"mx-name-container37"}
                                                                                                                    style={undefined}
                                                                                                                    renderMode={"div"}
                                                                                                                    onClick={undefined}
                                                                                                                    content={[
                                                                                                                        <$Container key="p.MxGenAIConnector.Snippet_Configuration.container38"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.container38"
                                                                                                                            class={"mx-name-container38 row-right"}
                                                                                                                            style={undefined}
                                                                                                                            renderMode={"div"}
                                                                                                                            onClick={undefined}
                                                                                                                            content={[
                                                                                                                                <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton23$visibility"
                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton23$visibility"
                                                                                                                                    visible={ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                                                                    })}
                                                                                                                                    contents={[
                                                                                                                                        <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton23"
                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton23"
                                                                                                                                            buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton23"}
                                                                                                                                            class={"mx-name-actionButton23"}
                                                                                                                                            style={{
                                                                                                                                                "marginRight": "8px"
                                                                                                                                            }}
                                                                                                                                            tabIndex={undefined}
                                                                                                                                            renderType={"link"}
                                                                                                                                            role={"button"}
                                                                                                                                            buttonClass={"btn-default"}
                                                                                                                                            caption={t([
                                                                                                                                                ExpressionProperty({
                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Test Key" }, "args": {} }
                                                                                                                                                })
                                                                                                                                            ])}
                                                                                                                                            tooltip={TextProperty({
                                                                                                                                                "value": t([
                                                                                                                                                    "Test Key"
                                                                                                                                                ])
                                                                                                                                            })}
                                                                                                                                            icon={undefined}
                                                                                                                                            action={ActionProperty({
                                                                                                                                                "action": { "type": "callMicroflow", "argMap": { "MxCloudDeployedModel": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } }, "config": { "operationId": "mg+7xFnsll2z2FGasG+9VQ", "progress": { "message": t([ "" ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                                                                "abortOnServerValidation": true
                                                                                                                                            })} />
                                                                                                                                    ]} />,
                                                                                                                                <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton24$visibility"
                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton24$visibility"
                                                                                                                                    visible={ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                                                                    })}
                                                                                                                                    contents={[
                                                                                                                                        <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton24"
                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton24"
                                                                                                                                            buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton24"}
                                                                                                                                            class={"mx-name-actionButton24"}
                                                                                                                                            style={{
                                                                                                                                                "color": "#b6323e"
                                                                                                                                            }}
                                                                                                                                            tabIndex={undefined}
                                                                                                                                            renderType={"link"}
                                                                                                                                            role={"button"}
                                                                                                                                            buttonClass={"btn-default"}
                                                                                                                                            caption={t([
                                                                                                                                                ExpressionProperty({
                                                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                                                                                                })
                                                                                                                                            ])}
                                                                                                                                            tooltip={TextProperty({
                                                                                                                                                "value": t([
                                                                                                                                                    "Delete Configuration"
                                                                                                                                                ])
                                                                                                                                            })}
                                                                                                                                            icon={WebIconProperty({
                                                                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                                                                                            })}
                                                                                                                                            action={ActionProperty({
                                                                                                                                                "action": { "type": "callMicroflow", "argMap": { "MxCloudDeployedModel": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView5", "source": "object" } }, "config": { "operationId": "oRYcj9H9LFuXrbbQmEC9aQ", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                                                                "abortOnServerValidation": true
                                                                                                                                            })} />
                                                                                                                                    ]} />
                                                                                                                            ]}
                                                                                                                            ariaHidden={false} />
                                                                                                                    ]}
                                                                                                                    ariaHidden={false} />
                                                                                                            ]}
                                                                                                            ariaHidden={false} />
                                                                                                    ]}
                                                                                                    hideFooter={false}
                                                                                                    footer={undefined} />
                                                                                            ]
                                                                                        })}
                                                                                        onClick={undefined}
                                                                                        pageSize={5} />
                                                                                ]
                                                                            },
                                                                            {
                                                                                "name": "tabPage3",
                                                                                "caption": TextProperty({
                                                                                    "value": t([
                                                                                        "Knowledge bases"
                                                                                    ])
                                                                                }),
                                                                                "isDelayed": true,
                                                                                "refreshOnShow": false,
                                                                                "content": [
                                                                                    <$Div key="p.MxGenAIConnector.Snippet_Configuration.layoutGrid2"
                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.layoutGrid2"
                                                                                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                        style={undefined}
                                                                                        content={[
                                                                                            <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0"
                                                                                                $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0"
                                                                                                class={"row"}
                                                                                                style={undefined}
                                                                                                content={[
                                                                                                    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column0"
                                                                                                        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column0"
                                                                                                        class={"col-lg col-md col"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container11"
                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container11"
                                                                                                                class={"mx-name-container11 grid-knowledge-bases grid-header"}
                                                                                                                style={undefined}
                                                                                                                renderMode={"div"}
                                                                                                                onClick={undefined}
                                                                                                                content={[
                                                                                                                    <$Container key="p.MxGenAIConnector.Snippet_Configuration.container12"
                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container12"
                                                                                                                        class={"mx-name-container12 spacing-outer-right-medium"}
                                                                                                                        style={undefined}
                                                                                                                        renderMode={"div"}
                                                                                                                        onClick={undefined}
                                                                                                                        content={[
                                                                                                                            <$Text key="p.MxGenAIConnector.Snippet_Configuration.text3"
                                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.text3"
                                                                                                                                class={"mx-name-text3 text-bold"}
                                                                                                                                style={undefined}
                                                                                                                                caption={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                renderMode={"span"} />
                                                                                                                        ]}
                                                                                                                        ariaHidden={false} />,
                                                                                                                    <$Container key="p.MxGenAIConnector.Snippet_Configuration.container13"
                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container13"
                                                                                                                        class={"mx-name-container13"}
                                                                                                                        style={undefined}
                                                                                                                        renderMode={"div"}
                                                                                                                        onClick={undefined}
                                                                                                                        content={[
                                                                                                                            <$Text key="p.MxGenAIConnector.Snippet_Configuration.text6"
                                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.text6"
                                                                                                                                class={"mx-name-text6 text-bold"}
                                                                                                                                style={undefined}
                                                                                                                                caption={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Key name" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                renderMode={"span"} />
                                                                                                                        ]}
                                                                                                                        ariaHidden={false} />,
                                                                                                                    <$Container key="p.MxGenAIConnector.Snippet_Configuration.container14"
                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container14"
                                                                                                                        class={"mx-name-container14 spacing-outer-right-medium"}
                                                                                                                        style={undefined}
                                                                                                                        renderMode={"div"}
                                                                                                                        onClick={undefined}
                                                                                                                        content={[
                                                                                                                            <$Text key="p.MxGenAIConnector.Snippet_Configuration.text4"
                                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.text4"
                                                                                                                                class={"mx-name-text4 text-bold"}
                                                                                                                                style={undefined}
                                                                                                                                caption={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Embeddings generation resource" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                renderMode={"span"} />
                                                                                                                        ]}
                                                                                                                        ariaHidden={false} />,
                                                                                                                    <$Container key="p.MxGenAIConnector.Snippet_Configuration.container15"
                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container15"
                                                                                                                        class={"mx-name-container15"}
                                                                                                                        style={undefined}
                                                                                                                        renderMode={"div"}
                                                                                                                        onClick={undefined}
                                                                                                                        content={[
                                                                                                                            <$Text key="p.MxGenAIConnector.Snippet_Configuration.text5"
                                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.text5"
                                                                                                                                class={"mx-name-text5 text-bold"}
                                                                                                                                style={undefined}
                                                                                                                                caption={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Environment" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                renderMode={"span"} />
                                                                                                                        ]}
                                                                                                                        ariaHidden={false} />,
                                                                                                                    <$Container key="p.MxGenAIConnector.Snippet_Configuration.container16"
                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container16"
                                                                                                                        class={"mx-name-container16"}
                                                                                                                        style={undefined}
                                                                                                                        renderMode={"div"}
                                                                                                                        onClick={undefined}
                                                                                                                        content={undefined}
                                                                                                                        ariaHidden={false} />
                                                                                                                ]}
                                                                                                                ariaHidden={false} />,
                                                                                                            <$ListView key="p.MxGenAIConnector.Snippet_Configuration.listView3"
                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.listView3"
                                                                                                                class={"mx-name-listView3 listview-lined listview-hover"}
                                                                                                                style={undefined}
                                                                                                                listValue={DatabaseObjectListProperty({
                                                                                                                    "dataSourceId": "p.13",
                                                                                                                    "entity": "MxGenAIConnector.MxCloudKnowledgeBaseResource",
                                                                                                                    "operationId": "eBw93mJ43FKZwbjdBlU/Vg",
                                                                                                                    "sort": []
                                                                                                                })}
                                                                                                                itemTemplate={TemplatedWidgetProperty({
                                                                                                                    "dataSourceId": "p.13",
                                                                                                                    "editable": false,
                                                                                                                    "children": () => [
                                                                                                                        <$DataView key="p.MxGenAIConnector.Snippet_Configuration.dataView3"
                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.dataView3"
                                                                                                                            class={"mx-name-dataView3 form-vertical"}
                                                                                                                            style={undefined}
                                                                                                                            tabIndex={undefined}
                                                                                                                            object={AssociationObjectProperty({
                                                                                                                                "dataSourceId": "p.134",
                                                                                                                                "scope": "p.MxGenAIConnector.Snippet_Configuration.listView3",
                                                                                                                                "editable": true,
                                                                                                                                "path": "MxGenAIConnector.MxCloudKnowledgeBaseResource_Configuration/MxGenAIConnector.Configuration",
                                                                                                                                "operationId": "3MgR6r7/ll6Q4J8idyrZgQ"
                                                                                                                            })}
                                                                                                                            emptyMessage={TextProperty({
                                                                                                                                "value": t([
                                                                                                                                    ""
                                                                                                                                ])
                                                                                                                            })}
                                                                                                                            body={[
                                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container2"
                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container2"
                                                                                                                                    class={"mx-name-container2 grid-knowledge-bases"}
                                                                                                                                    style={undefined}
                                                                                                                                    renderMode={"div"}
                                                                                                                                    onClick={undefined}
                                                                                                                                    content={[
                                                                                                                                        <$Container key="p.MxGenAIConnector.Snippet_Configuration.container3"
                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.container3"
                                                                                                                                            class={"mx-name-container3 item spacing-outer-right-medium"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={[
                                                                                                                                                <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton15$visibility"
                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton15$visibility"
                                                                                                                                                    visible={ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
                                                                                                                                                    })}
                                                                                                                                                    contents={[
                                                                                                                                                        <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton15"
                                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton15"
                                                                                                                                                            buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton15"}
                                                                                                                                                            class={"mx-name-actionButton15"}
                                                                                                                                                            style={undefined}
                                                                                                                                                            tabIndex={undefined}
                                                                                                                                                            renderType={"link"}
                                                                                                                                                            role={"button"}
                                                                                                                                                            buttonClass={"btn-default"}
                                                                                                                                                            caption={t([
                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "listView3", "path": "DisplayName" }, "args": { "listView3": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } } }
                                                                                                                                                                })
                                                                                                                                                            ])}
                                                                                                                                                            tooltip={TextProperty({
                                                                                                                                                                "value": t([
                                                                                                                                                                    ""
                                                                                                                                                                ])
                                                                                                                                                            })}
                                                                                                                                                            icon={undefined}
                                                                                                                                                            action={ActionProperty({
                                                                                                                                                                "action": { "type": "openLink", "argMap": { "$object": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "MxGenAIConnector.Configuration/DeepLinkURL" }, "disabledDuringExecution": true },
                                                                                                                                                                "abortOnServerValidation": true
                                                                                                                                                            })} />
                                                                                                                                                    ]} />,
                                                                                                                                                <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.text15$visibility"
                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.text15$visibility"
                                                                                                                                                    visible={ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "DeepLinkURL" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
                                                                                                                                                    })}
                                                                                                                                                    contents={[
                                                                                                                                                        <$Text key="p.MxGenAIConnector.Snippet_Configuration.text15"
                                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.text15"
                                                                                                                                                            class={"mx-name-text15"}
                                                                                                                                                            style={undefined}
                                                                                                                                                            caption={t([
                                                                                                                                                                ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "variable", "variable": "listView3", "path": "DisplayName" }, "args": { "listView3": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } } }
                                                                                                                                                                })
                                                                                                                                                            ])}
                                                                                                                                                            renderMode={"span"} />
                                                                                                                                                    ]} />
                                                                                                                                            ]}
                                                                                                                                            ariaHidden={false} />,
                                                                                                                                        <$Container key="p.MxGenAIConnector.Snippet_Configuration.container7"
                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.container7"
                                                                                                                                            class={"mx-name-container7 item"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={[
                                                                                                                                                <$Text key="p.MxGenAIConnector.Snippet_Configuration.text33"
                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.text33"
                                                                                                                                                    class={"mx-name-text33"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    caption={t([
                                                                                                                                                        ExpressionProperty({
                                                                                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "KeyName" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "variable", "variable": "currentObject", "path": "KeyName" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
                                                                                                                                                        })
                                                                                                                                                    ])}
                                                                                                                                                    renderMode={"span"} />
                                                                                                                                            ]}
                                                                                                                                            ariaHidden={false} />,
                                                                                                                                        <$Container key="p.MxGenAIConnector.Snippet_Configuration.container8"
                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.container8"
                                                                                                                                            class={"mx-name-container8 item spacing-outer-right-medium"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={[
                                                                                                                                                <$Text key="p.MxGenAIConnector.Snippet_Configuration.text8"
                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.text8"
                                                                                                                                                    class={"mx-name-text8"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    caption={t([
                                                                                                                                                        ExpressionProperty({
                                                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "listView3", "path": "MxGenAIConnector.MxCloudKnowledgeBaseResource_MxCloudDeployedModel/MxGenAIConnector.MxCloudDeployedModel/DisplayName" }, "args": { "listView3": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } } }
                                                                                                                                                        })
                                                                                                                                                    ])}
                                                                                                                                                    renderMode={"span"} />
                                                                                                                                            ]}
                                                                                                                                            ariaHidden={false} />,
                                                                                                                                        <$Container key="p.MxGenAIConnector.Snippet_Configuration.container9"
                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.container9"
                                                                                                                                            class={"mx-name-container9 item"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={[
                                                                                                                                                <$Text key="p.MxGenAIConnector.Snippet_Configuration.text35"
                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.text35"
                                                                                                                                                    class={"mx-name-text35"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    caption={t([
                                                                                                                                                        ExpressionProperty({
                                                                                                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Environment" } ] }, { "type": "literal", "value": "" } ] }, "then": { "type": "variable", "variable": "currentObject", "path": "Environment" }, "else": { "type": "literal", "value": "N/A" } }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView3", "source": "object" } } }
                                                                                                                                                        })
                                                                                                                                                    ])}
                                                                                                                                                    renderMode={"span"} />
                                                                                                                                            ]}
                                                                                                                                            ariaHidden={false} />,
                                                                                                                                        <$Container key="p.MxGenAIConnector.Snippet_Configuration.container10"
                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.container10"
                                                                                                                                            class={"mx-name-container10"}
                                                                                                                                            style={undefined}
                                                                                                                                            renderMode={"div"}
                                                                                                                                            onClick={undefined}
                                                                                                                                            content={[
                                                                                                                                                <$Container key="p.MxGenAIConnector.Snippet_Configuration.container6"
                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.container6"
                                                                                                                                                    class={"mx-name-container6 row-right"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    renderMode={"div"}
                                                                                                                                                    onClick={undefined}
                                                                                                                                                    content={[
                                                                                                                                                        <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton20$visibility"
                                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton20$visibility"
                                                                                                                                                            visible={ExpressionProperty({
                                                                                                                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                                                                                            })}
                                                                                                                                                            contents={[
                                                                                                                                                                <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton20"
                                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton20"
                                                                                                                                                                    buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton20"}
                                                                                                                                                                    class={"mx-name-actionButton20"}
                                                                                                                                                                    style={{
                                                                                                                                                                        "marginRight": "8px"
                                                                                                                                                                    }}
                                                                                                                                                                    tabIndex={undefined}
                                                                                                                                                                    renderType={"link"}
                                                                                                                                                                    role={"button"}
                                                                                                                                                                    buttonClass={"btn-default"}
                                                                                                                                                                    caption={t([
                                                                                                                                                                        ExpressionProperty({
                                                                                                                                                                            "expression": { "expr": { "type": "literal", "value": "Test Key" }, "args": {} }
                                                                                                                                                                        })
                                                                                                                                                                    ])}
                                                                                                                                                                    tooltip={TextProperty({
                                                                                                                                                                        "value": t([
                                                                                                                                                                            "Test Key"
                                                                                                                                                                        ])
                                                                                                                                                                    })}
                                                                                                                                                                    icon={undefined}
                                                                                                                                                                    action={ActionProperty({
                                                                                                                                                                        "action": { "type": "callMicroflow", "argMap": { "MxCloudKnowledgeBaseResource": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } }, "config": { "operationId": "GMgd1dQ/2li4AyeGFJ+y2A", "progress": { "message": t([ "" ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                                                                                        "abortOnServerValidation": true
                                                                                                                                                                    })} />
                                                                                                                                                            ]} />,
                                                                                                                                                        <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton26$visibility"
                                                                                                                                                            $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton26$visibility"
                                                                                                                                                            visible={ExpressionProperty({
                                                                                                                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                                                                                            })}
                                                                                                                                                            contents={[
                                                                                                                                                                <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton26"
                                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton26"
                                                                                                                                                                    buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton26"}
                                                                                                                                                                    class={"mx-name-actionButton26"}
                                                                                                                                                                    style={{
                                                                                                                                                                        "color": "#b6323e"
                                                                                                                                                                    }}
                                                                                                                                                                    tabIndex={undefined}
                                                                                                                                                                    renderType={"link"}
                                                                                                                                                                    role={"button"}
                                                                                                                                                                    buttonClass={"btn-default"}
                                                                                                                                                                    caption={t([
                                                                                                                                                                        ExpressionProperty({
                                                                                                                                                                            "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                                                                                                                                        })
                                                                                                                                                                    ])}
                                                                                                                                                                    tooltip={TextProperty({
                                                                                                                                                                        "value": t([
                                                                                                                                                                            "Delete Configuration"
                                                                                                                                                                        ])
                                                                                                                                                                    })}
                                                                                                                                                                    icon={WebIconProperty({
                                                                                                                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                                                                                                                    })}
                                                                                                                                                                    action={ActionProperty({
                                                                                                                                                                        "action": { "type": "callMicroflow", "argMap": { "MxCloudKnowledgeBaseResource": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView3", "source": "object" } }, "config": { "operationId": "nv9m709YqleMU8RMR1UBpQ", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                                                                                        "abortOnServerValidation": true
                                                                                                                                                                    })} />
                                                                                                                                                            ]} />
                                                                                                                                                    ]}
                                                                                                                                                    ariaHidden={false} />
                                                                                                                                            ]}
                                                                                                                                            ariaHidden={false} />
                                                                                                                                    ]}
                                                                                                                                    ariaHidden={false} />
                                                                                                                            ]}
                                                                                                                            hideFooter={false}
                                                                                                                            footer={undefined} />
                                                                                                                    ]
                                                                                                                })}
                                                                                                                onClick={undefined}
                                                                                                                pageSize={5}
                                                                                                                selection={WidgetVariableProperty({
                                                                                                                    "slot": "selection",
                                                                                                                    "type": "ObjectReferenceSet"
                                                                                                                })} />
                                                                                                        ]} />,
                                                                                                    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column1"
                                                                                                        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid2$row0$column1"
                                                                                                        class={"col-lg-4 col-md col"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$DataView key="p.MxGenAIConnector.Snippet_Configuration.dataView1"
                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.dataView1"
                                                                                                                class={"mx-name-dataView1 form-horizontal"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined}
                                                                                                                object={ListenObjectProperty({
                                                                                                                    "dataSourceId": "p.165",
                                                                                                                    "editable": true,
                                                                                                                    "listenTo": "p.MxGenAIConnector.Snippet_Configuration.listView3",
                                                                                                                    "operationId": "lH2afGoxBVuyEP4ZW9HUXA"
                                                                                                                })}
                                                                                                                emptyMessage={TextProperty({
                                                                                                                    "value": t([
                                                                                                                        " "
                                                                                                                    ])
                                                                                                                })}
                                                                                                                body={[
                                                                                                                    <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.container4$visibility"
                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.container4$visibility"
                                                                                                                        visible={ExpressionProperty({
                                                                                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView1", "source": "object" } } }
                                                                                                                        })}
                                                                                                                        contents={[
                                                                                                                            <$Container key="p.MxGenAIConnector.Snippet_Configuration.container4"
                                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.container4"
                                                                                                                                class={"mx-name-container4"}
                                                                                                                                style={undefined}
                                                                                                                                renderMode={"div"}
                                                                                                                                onClick={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Div key="p.MxGenAIConnector.Snippet_Configuration.layoutGrid3"
                                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.layoutGrid3"
                                                                                                                                        class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                                                        style={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0"
                                                                                                                                                $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0"
                                                                                                                                                class={"row"}
                                                                                                                                                style={undefined}
                                                                                                                                                content={[
                                                                                                                                                    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column0"
                                                                                                                                                        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column0"
                                                                                                                                                        class={"col-lg col-md col"}
                                                                                                                                                        style={undefined}
                                                                                                                                                        content={[
                                                                                                                                                            <$Text key="p.MxGenAIConnector.Snippet_Configuration.text1"
                                                                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.text1"
                                                                                                                                                                class={"mx-name-text1 spacing-outer-left-medium"}
                                                                                                                                                                style={undefined}
                                                                                                                                                                caption={t([
                                                                                                                                                                    ExpressionProperty({
                                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Collections" }, "args": {} }
                                                                                                                                                                    })
                                                                                                                                                                ])}
                                                                                                                                                                renderMode={"h5"} />
                                                                                                                                                        ]} />,
                                                                                                                                                    <$Div key="p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column1"
                                                                                                                                                        $widgetId="p.MxGenAIConnector.Configuration_Overview.layoutGrid3$row0$column1"
                                                                                                                                                        class={"col-lg-auto col-md col"}
                                                                                                                                                        style={undefined}
                                                                                                                                                        content={[
                                                                                                                                                            <$ConditionalVisibilityWrapper key="p.MxGenAIConnector.Snippet_Configuration.actionButton2$visibility"
                                                                                                                                                                $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton2$visibility"
                                                                                                                                                                visible={ExpressionProperty({
                                                                                                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                                                                                                })}
                                                                                                                                                                contents={[
                                                                                                                                                                    <$ActionButton key="p.MxGenAIConnector.Snippet_Configuration.actionButton2"
                                                                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.actionButton2"
                                                                                                                                                                        buttonId={"p.MxGenAIConnector.Snippet_Configuration.actionButton2"}
                                                                                                                                                                        class={"mx-name-actionButton2 pull-right"}
                                                                                                                                                                        style={undefined}
                                                                                                                                                                        tabIndex={undefined}
                                                                                                                                                                        renderType={"link"}
                                                                                                                                                                        role={"button"}
                                                                                                                                                                        buttonClass={"btn-default"}
                                                                                                                                                                        caption={t([
                                                                                                                                                                            ExpressionProperty({
                                                                                                                                                                                "expression": { "expr": { "type": "literal", "value": "Update" }, "args": {} }
                                                                                                                                                                            })
                                                                                                                                                                        ])}
                                                                                                                                                                        tooltip={TextProperty({
                                                                                                                                                                            "value": t([
                                                                                                                                                                                ""
                                                                                                                                                                            ])
                                                                                                                                                                        })}
                                                                                                                                                                        icon={WebIconProperty({
                                                                                                                                                                            "icon": { "type": "glyph", "iconClass": "glyphicon-refresh" }
                                                                                                                                                                        })}
                                                                                                                                                                        action={ActionProperty({
                                                                                                                                                                            "action": { "type": "callMicroflow", "argMap": { "MxCloudKnowledgeBaseResource": { "widget": "p.MxGenAIConnector.Snippet_Configuration.dataView1", "source": "object" } }, "config": { "operationId": "XnwMd/PTW1ymUh97/nPa+w", "progress": { "message": t([ "Synchronizing.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                                                                                            "abortOnServerValidation": true
                                                                                                                                                                        })} />
                                                                                                                                                                ]} />
                                                                                                                                                        ]} />
                                                                                                                                                ]} />
                                                                                                                                        ]} />,
                                                                                                                                    <$ListView key="p.MxGenAIConnector.Snippet_Configuration.listView1"
                                                                                                                                        $widgetId="p.MxGenAIConnector.Snippet_Configuration.listView1"
                                                                                                                                        class={"mx-name-listView1 spacing-outer-top-medium"}
                                                                                                                                        style={undefined}
                                                                                                                                        listValue={DatabaseObjectListProperty({
                                                                                                                                            "dataSourceId": "p.22",
                                                                                                                                            "entity": "MxGenAIConnector.Collection",
                                                                                                                                            "scope": "p.MxGenAIConnector.Snippet_Configuration.dataView1",
                                                                                                                                            "operationId": "5PUj11ObP1KvYTFzftn1Mw",
                                                                                                                                            "sort": [
                                                                                                                                                [
                                                                                                                                                    "Name",
                                                                                                                                                    "asc"
                                                                                                                                                ]
                                                                                                                                            ],
                                                                                                                                            "arguments": {
                                                                                                                                                "currentObject": [
                                                                                                                                                    "p.MxGenAIConnector.Snippet_Configuration.dataView1"
                                                                                                                                                ],
                                                                                                                                                "CurrentObject": [
                                                                                                                                                    "p.MxGenAIConnector.Snippet_Configuration.dataView1"
                                                                                                                                                ]
                                                                                                                                            },
                                                                                                                                            "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "MxGenAIConnector.Collection_MxCloudKnowledgeBaseResource", "context": "MxGenAIConnector.Collection", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" } ] }
                                                                                                                                        })}
                                                                                                                                        itemTemplate={TemplatedWidgetProperty({
                                                                                                                                            "dataSourceId": "p.22",
                                                                                                                                            "editable": false,
                                                                                                                                            "children": () => [
                                                                                                                                                <$Text key="p.MxGenAIConnector.Snippet_Configuration.text2"
                                                                                                                                                    $widgetId="p.MxGenAIConnector.Snippet_Configuration.text2"
                                                                                                                                                    class={"mx-name-text2"}
                                                                                                                                                    style={undefined}
                                                                                                                                                    caption={t([
                                                                                                                                                        ExpressionProperty({
                                                                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MxGenAIConnector.Snippet_Configuration.listView1", "source": "object" } } }
                                                                                                                                                        })
                                                                                                                                                    ])}
                                                                                                                                                    renderMode={"span"} />
                                                                                                                                            ]
                                                                                                                                        })}
                                                                                                                                        onClick={undefined}
                                                                                                                                        pageSize={10} />
                                                                                                                                ]}
                                                                                                                                ariaHidden={false} />
                                                                                                                        ]} />
                                                                                                                ]}
                                                                                                                hideFooter={true}
                                                                                                                footer={undefined} />
                                                                                                        ]} />
                                                                                                ]} />
                                                                                        ]} />
                                                                                ]
                                                                            }
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "GenAI Resources"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
