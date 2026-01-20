import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $ListView, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Text, ListView, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.TestCase_Overview.layoutGrid1"
        $widgetId="p.AgentCommons.TestCase_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.TestCase_Overview.layoutGrid1$row0"
                $widgetId="p.AgentCommons.TestCase_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.TestCase_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.TestCase_Overview.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.TestCase_Overview.dataView1"
                                $widgetId="p.AgentCommons.TestCase_Overview.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.13",
                                    "scope": "$Agent",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.TestCase_Overview.container43"
                                        $widgetId="p.AgentCommons.TestCase_Overview.container43"
                                        class={"mx-name-container43 table-header spacing-outer-top-none"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.TestCase_Overview.text51"
                                                $widgetId="p.AgentCommons.TestCase_Overview.text51"
                                                class={"mx-name-text51 text-test-case text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Test Cases" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$ListView key="p.AgentCommons.TestCase_Overview.listView3"
                                        $widgetId="p.AgentCommons.TestCase_Overview.listView3"
                                        class={"mx-name-listView3 listview-stylingless"}
                                        style={undefined}
                                        listValue={DatabaseObjectListProperty({
                                            "dataSourceId": "p.0",
                                            "entity": "AgentCommons.TestCase",
                                            "scope": "p.AgentCommons.TestCase_Overview.dataView1",
                                            "operationId": "txxIqqnI1FKbGmDZFm4d7w",
                                            "sort": [],
                                            "arguments": {
                                                "currentObject": [
                                                    "$Agent"
                                                ]
                                            },
                                            "constraints": { "type": "function", "name": "and", "parameters": [ { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "AgentCommons.TestCase_Agent", "context": "AgentCommons.TestCase", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" } ] }, { "type": "function", "name": "not", "parameters": [ { "type": "attribute", "attribute": "IsDraftTestCase", "context": "AgentCommons.TestCase", "attributeType": "Boolean" } ] } ] }
                                        })}
                                        itemTemplate={TemplatedWidgetProperty({
                                            "dataSourceId": "p.0",
                                            "editable": false,
                                            "children": () => [
                                                <$Container key="p.AgentCommons.TestCase_Overview.container48"
                                                    $widgetId="p.AgentCommons.TestCase_Overview.container48"
                                                    class={"mx-name-container48 testcase-table spacing-outer-top-medium spacing-inner-right-none"}
                                                    style={undefined}
                                                    renderMode={"div"}
                                                    onClick={undefined}
                                                    content={[
                                                        <$Text key="p.AgentCommons.TestCase_Overview.text56"
                                                            $widgetId="p.AgentCommons.TestCase_Overview.text56"
                                                            class={"mx-name-text56 text-testcase spacing-inner-left-none"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.TestCase_Overview.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"span"} />,
                                                        <$ConditionalVisibilityWrapper key="p.AgentCommons.TestCase_Overview.actionButton1$visibility"
                                                            $widgetId="p.AgentCommons.TestCase_Overview.actionButton1$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.AgentCommons.TestCase_Overview.actionButton1"
                                                                    $widgetId="p.AgentCommons.TestCase_Overview.actionButton1"
                                                                    buttonId={"p.AgentCommons.TestCase_Overview.actionButton1"}
                                                                    class={"mx-name-actionButton1 delete-icon"}
                                                                    style={undefined}
                                                                    tabIndex={undefined}
                                                                    renderType={"link"}
                                                                    role={"button"}
                                                                    buttonClass={"btn-default"}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    tooltip={TextProperty({
                                                                        "value": t([
                                                                            "Delete test case"
                                                                        ])
                                                                    })}
                                                                    icon={WebIconProperty({
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "TestCase": { "widget": "p.AgentCommons.TestCase_Overview.listView3", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" } }, "config": { "operationId": "KEEBt4Ttu1GyNliawmzwDA", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />
                                                    ]}
                                                    ariaHidden={false} />
                                            ]
                                        })}
                                        onClick={undefined}
                                        pageSize={10} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p.AgentCommons.TestCase_Overview.actionButton2"
                                        $widgetId="p.AgentCommons.TestCase_Overview.actionButton2"
                                        buttonId={"p.AgentCommons.TestCase_Overview.actionButton2"}
                                        class={"mx-name-actionButton2 pull-right"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-primary"}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Close" }, "args": {} }
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
        ]} />
]}</PageFragment>);

export const title = t([
    "Manage test cases"
]);

export const classes = "";

export const cancelChangesOperationId = "kh2gh9NhCl2jGNhqI9dIUA";
export const closeButton = "p.AgentCommons.TestCase_Overview.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
