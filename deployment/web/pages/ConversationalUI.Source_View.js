import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Text, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Text, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.ConversationalUI.Source_View.layoutGrid1"
        $widgetId="p.ConversationalUI.Source_View.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.ConversationalUI.Source_View.layoutGrid1$row0"
                $widgetId="p.ConversationalUI.Source_View.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.ConversationalUI.Source_View.layoutGrid1$row0$column0"
                        $widgetId="p.ConversationalUI.Source_View.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.ConversationalUI.Source_View.dataView1"
                                $widgetId="p.ConversationalUI.Source_View.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.10",
                                    "scope": "$Source",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Div key="p.ConversationalUI.Source_View.layoutGrid2"
                                        $widgetId="p.ConversationalUI.Source_View.layoutGrid2"
                                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                        style={undefined}
                                        content={[
                                            <$Div key="p.ConversationalUI.Source_View.layoutGrid2$row0"
                                                $widgetId="p.ConversationalUI.Source_View.layoutGrid2$row0"
                                                class={"row"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.ConversationalUI.Source_View.layoutGrid2$row0$column0"
                                                        $widgetId="p.ConversationalUI.Source_View.layoutGrid2$row0$column0"
                                                        class={"col-lg col-md col"}
                                                        style={undefined}
                                                        content={[
                                                            <$Text key="p.ConversationalUI.Source_View.text2"
                                                                $widgetId="p.ConversationalUI.Source_View.text2"
                                                                class={"mx-name-text2"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Content" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Source_View.dataView1", "source": "object" } } }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]} />
                                                ]} />
                                        ]} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.Source_View.actionButton1$visibility"
                                        $widgetId="p.ConversationalUI.Source_View.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Source" } ] }, { "type": "literal", "value": "" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Source_View.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.ConversationalUI.Source_View.actionButton1"
                                                $widgetId="p.ConversationalUI.Source_View.actionButton1"
                                                buttonId={"p.ConversationalUI.Source_View.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"link"}
                                                role={"button"}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Source" }, "args": { "currentObject": { "widget": "p.ConversationalUI.Source_View.dataView1", "source": "object" } } }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        "Open link"
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "openLink", "argMap": { "$object": { "widget": "$Source", "source": "object" } }, "config": { "schema": "web", "addressAttribute": "ConversationalUI.Source/Source" }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Response Sources"
]);

export const classes = "";

export const cancelChangesOperationId = "LzdTRC06nlWAgPTBbrEKSA";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
