import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { Fragment } from "mendix/widgets/web/Fragment";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/ConversationalUI.Layout_MasterBase.js";
import { ACT_TokenMonitor_Export_Execute } from "../nanoflows/ConversationalUI.ACT_TokenMonitor_Export_Execute.js";

const { $Div, $Container, $Fragment, $ActionButton, $Text, $ConditionalVisibilityWrapper, $Datagrid } = asPluginWidgets({ Div, Container, Fragment, ActionButton, Text, ConditionalVisibilityWrapper, Datagrid });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid4"
        $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid4"
        class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid container-fluid layoutgrid--full-height"}
        style={undefined}
        content={[
            <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid4$row0"
                $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid4$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid4$row0$column0"
                        $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid4$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.TokenConsumptionMonitor_Export.container1"
                                $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.container1"
                                class={"mx-name-container1 card card-border spacing-outer-bottom-none"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$Fragment key="p.ConversationalUI.TokenConsumptionMonitor_Export.snippetCall1"
                                        $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.snippetCall1"
                                        content={[
                                            <$Div key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.layoutGrid2"
                                                $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.layoutGrid2"
                                                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row0"
                                                        $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row0"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row0$column0"
                                                                $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row0$column0"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Container key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.container2"
                                                                        $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.container2"
                                                                        class={"mx-name-container2 pageheader spacing-outer-bottom-large"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$ActionButton key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton18"
                                                                                $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton18"
                                                                                buttonId={"p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton18"}
                                                                                class={"mx-name-actionButton18 link-back spacing-outer-bottom-medium"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"link"}
                                                                                role={"link"}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Back" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={WebIconProperty({
                                                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-menu-left" }
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "closePage", "argMap": {}, "config": {}, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />,
                                                                            <$Text key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.text40"
                                                                                $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.text40"
                                                                                class={"mx-name-text40 pageheader-title spacing-outer-bottom spacing-outer-right-medium"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Export usage data" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                renderMode={"h1"} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]} />,
                                                            <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row0$column1"
                                                                $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row0$column1"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Container key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.container3"
                                                                        $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.container3"
                                                                        class={"mx-name-container3 row-right"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$ConditionalVisibilityWrapper key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton1$visibility"
                                                                                $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton1$visibility"
                                                                                visible={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                })}
                                                                                contents={[
                                                                                    <$ActionButton key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton1"
                                                                                        $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton1"
                                                                                        buttonId={"p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.actionButton1"}
                                                                                        class={"mx-name-actionButton1"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined}
                                                                                        renderType={"button"}
                                                                                        role={undefined}
                                                                                        buttonClass={"btn-primary"}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Download .xlsx" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        tooltip={TextProperty({
                                                                                            "value": t([
                                                                                                ""
                                                                                            ])
                                                                                        })}
                                                                                        icon={undefined}
                                                                                        action={ActionProperty({
                                                                                            "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_TokenMonitor_Export_Execute, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                            "abortOnServerValidation": true
                                                                                        })} />
                                                                                ]} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]} />
                                                        ]} />,
                                                    <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row1"
                                                        $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row1"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row1$column0"
                                                                $widgetId="p.ConversationalUI.TokenConsumptionMonitor_Export.layoutGrid2$row1$column0"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Text key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.text27"
                                                                        $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.text27"
                                                                        class={"mx-name-text27 card-title spacing-outer-bottom-large"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "All usage data" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"h4"} />,
                                                                    <$Datagrid key="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.dataGrid21"
                                                                        $widgetId="p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.dataGrid21"
                                                                        datasource={DatabaseObjectListProperty({
                                                                            "dataSourceId": "p.4",
                                                                            "entity": "GenAICommons.Usage",
                                                                            "operationId": "W4qWYfB86l2tkPZqnfYfDA",
                                                                            "sort": []
                                                                        })}
                                                                        columns={[
                                                                            {
                                                                                "showContentAs": "dynamicText",
                                                                                "attribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "GenAICommons.Usage",
                                                                                    "attribute": "createdDate",
                                                                                    "attributeType": "DateTime",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.4",
                                                                                    "isList": false
                                                                                }),
                                                                                "content": undefined,
                                                                                "dynamicText": t([
                                                                                    ListExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "createdDate" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "currentObject": { "widget": "p.ConversationalUI.Snippet_TokenConsumptionMonitor_Export.dataGrid21", "source": "object" } } },
                                                                                        "dataSourceId": "p.4"
                                                                                    })
                                                                                ]),
                                                                                "header": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Created on" }, "args": {} }
                                                                                    })
                                                                                ]),
                                                                                "tooltip": t([
                                                                                    undefined
                                                                                ]),
                                                                                "filter": undefined,
                                                                                "sortable": true,
                                                                                "resizable": true,
                                                                                "draggable": true,
                                                                                "hidable": "yes",
                                                                                "width": "autoFill",
                                                                                "size": 1,
                                                                                "alignment": "left",
                                                                                "wrapText": false,
                                                                                "exportValue": t([
                                                                                    undefined
                                                                                ]),
                                                                                "visible": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                }),
                                                                                "allowEventPropagation": true,
                                                                                "minWidth": "auto",
                                                                                "minWidthLimit": 100
                                                                            },
                                                                            {
                                                                                "showContentAs": "attribute",
                                                                                "attribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "GenAICommons.Usage",
                                                                                    "attribute": "_DeploymentIdentifier",
                                                                                    "attributeType": "String",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.4",
                                                                                    "isList": false
                                                                                }),
                                                                                "content": undefined,
                                                                                "dynamicText": t([
                                                                                    undefined
                                                                                ]),
                                                                                "header": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Deployment identifier" }, "args": {} }
                                                                                    })
                                                                                ]),
                                                                                "tooltip": t([
                                                                                    undefined
                                                                                ]),
                                                                                "filter": undefined,
                                                                                "sortable": true,
                                                                                "resizable": true,
                                                                                "draggable": true,
                                                                                "hidable": "yes",
                                                                                "width": "autoFill",
                                                                                "size": 1,
                                                                                "alignment": "left",
                                                                                "wrapText": false,
                                                                                "exportValue": t([
                                                                                    undefined
                                                                                ]),
                                                                                "visible": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                }),
                                                                                "allowEventPropagation": true,
                                                                                "minWidth": "auto",
                                                                                "minWidthLimit": 100
                                                                            },
                                                                            {
                                                                                "showContentAs": "attribute",
                                                                                "attribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "GenAICommons.Usage",
                                                                                    "attribute": "InputTokens",
                                                                                    "attributeType": "Integer",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.4",
                                                                                    "isList": false
                                                                                }),
                                                                                "content": undefined,
                                                                                "dynamicText": t([
                                                                                    undefined
                                                                                ]),
                                                                                "header": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Input tokens" }, "args": {} }
                                                                                    })
                                                                                ]),
                                                                                "tooltip": t([
                                                                                    undefined
                                                                                ]),
                                                                                "filter": undefined,
                                                                                "sortable": true,
                                                                                "resizable": true,
                                                                                "draggable": true,
                                                                                "hidable": "yes",
                                                                                "width": "autoFill",
                                                                                "size": 1,
                                                                                "alignment": "left",
                                                                                "wrapText": false,
                                                                                "exportValue": t([
                                                                                    undefined
                                                                                ]),
                                                                                "visible": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                }),
                                                                                "allowEventPropagation": true,
                                                                                "minWidth": "auto",
                                                                                "minWidthLimit": 100
                                                                            },
                                                                            {
                                                                                "showContentAs": "attribute",
                                                                                "attribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "GenAICommons.Usage",
                                                                                    "attribute": "OutputTokens",
                                                                                    "attributeType": "Integer",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.4",
                                                                                    "isList": false
                                                                                }),
                                                                                "content": undefined,
                                                                                "dynamicText": t([
                                                                                    undefined
                                                                                ]),
                                                                                "header": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Output tokens" }, "args": {} }
                                                                                    })
                                                                                ]),
                                                                                "tooltip": t([
                                                                                    undefined
                                                                                ]),
                                                                                "filter": undefined,
                                                                                "sortable": true,
                                                                                "resizable": true,
                                                                                "draggable": true,
                                                                                "hidable": "yes",
                                                                                "width": "autoFill",
                                                                                "size": 1,
                                                                                "alignment": "left",
                                                                                "wrapText": false,
                                                                                "exportValue": t([
                                                                                    undefined
                                                                                ]),
                                                                                "visible": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                }),
                                                                                "allowEventPropagation": true,
                                                                                "minWidth": "auto",
                                                                                "minWidthLimit": 100
                                                                            },
                                                                            {
                                                                                "showContentAs": "attribute",
                                                                                "attribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "GenAICommons.Usage",
                                                                                    "attribute": "TotalTokens",
                                                                                    "attributeType": "Integer",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.4",
                                                                                    "isList": false
                                                                                }),
                                                                                "content": undefined,
                                                                                "dynamicText": t([
                                                                                    undefined
                                                                                ]),
                                                                                "header": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Total tokens" }, "args": {} }
                                                                                    })
                                                                                ]),
                                                                                "tooltip": t([
                                                                                    undefined
                                                                                ]),
                                                                                "filter": undefined,
                                                                                "sortable": true,
                                                                                "resizable": true,
                                                                                "draggable": true,
                                                                                "hidable": "yes",
                                                                                "width": "autoFill",
                                                                                "size": 1,
                                                                                "alignment": "left",
                                                                                "wrapText": false,
                                                                                "exportValue": t([
                                                                                    undefined
                                                                                ]),
                                                                                "visible": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                }),
                                                                                "allowEventPropagation": true,
                                                                                "minWidth": "auto",
                                                                                "minWidthLimit": 100
                                                                            },
                                                                            {
                                                                                "showContentAs": "attribute",
                                                                                "attribute": ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "GenAICommons.Usage",
                                                                                    "attribute": "DurationMilliseconds",
                                                                                    "attributeType": "Integer",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.4",
                                                                                    "isList": false
                                                                                }),
                                                                                "content": undefined,
                                                                                "dynamicText": t([
                                                                                    undefined
                                                                                ]),
                                                                                "header": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Duration (ms)" }, "args": {} }
                                                                                    })
                                                                                ]),
                                                                                "tooltip": t([
                                                                                    undefined
                                                                                ]),
                                                                                "filter": undefined,
                                                                                "sortable": true,
                                                                                "resizable": true,
                                                                                "draggable": true,
                                                                                "hidable": "yes",
                                                                                "width": "autoFill",
                                                                                "size": 1,
                                                                                "alignment": "left",
                                                                                "wrapText": false,
                                                                                "exportValue": t([
                                                                                    undefined
                                                                                ]),
                                                                                "visible": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                }),
                                                                                "allowEventPropagation": true,
                                                                                "minWidth": "auto",
                                                                                "minWidthLimit": 100
                                                                            },
                                                                            {
                                                                                "showContentAs": "attribute",
                                                                                "attribute": ListAttributeProperty({
                                                                                    "path": "System.owner/System.User",
                                                                                    "entity": "System.User",
                                                                                    "attribute": "Name",
                                                                                    "attributeType": "String",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.4",
                                                                                    "isList": false
                                                                                }),
                                                                                "content": undefined,
                                                                                "dynamicText": t([
                                                                                    undefined
                                                                                ]),
                                                                                "header": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Username" }, "args": {} }
                                                                                    })
                                                                                ]),
                                                                                "tooltip": t([
                                                                                    undefined
                                                                                ]),
                                                                                "filter": undefined,
                                                                                "sortable": true,
                                                                                "resizable": true,
                                                                                "draggable": true,
                                                                                "hidable": "yes",
                                                                                "width": "autoFill",
                                                                                "size": 1,
                                                                                "alignment": "left",
                                                                                "wrapText": false,
                                                                                "exportValue": t([
                                                                                    undefined
                                                                                ]),
                                                                                "visible": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                                }),
                                                                                "allowEventPropagation": true,
                                                                                "minWidth": "auto",
                                                                                "minWidthLimit": 100
                                                                            }
                                                                        ]}
                                                                        columnsFilterable={true}
                                                                        pageSize={10}
                                                                        pagination={"buttons"}
                                                                        pagingPosition={"bottom"}
                                                                        showEmptyPlaceholder={"none"}
                                                                        emptyPlaceholder={undefined}
                                                                        rowClass={undefined}
                                                                        onClick={undefined}
                                                                        columnsSortable={true}
                                                                        columnsResizable={true}
                                                                        columnsDraggable={true}
                                                                        columnsHidable={true}
                                                                        filtersPlaceholder={undefined}
                                                                        filterSectionTitle={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        refreshInterval={0}
                                                                        itemSelectionMethod={"checkbox"}
                                                                        itemSelectionMode={"clear"}
                                                                        showSelectAllToggle={true}
                                                                        showPagingButtons={"always"}
                                                                        loadMoreButtonCaption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        onClickTrigger={"single"}
                                                                        onSelectionChange={undefined}
                                                                        configurationStorageType={"attribute"}
                                                                        exportDialogLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Export progress" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        cancelExportLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Cancel data export" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        selectRowLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Select row" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        loadingType={"spinner"}
                                                                        showNumberOfRows={false}
                                                                        storeFiltersInPersonalization={true}
                                                                        selectAllRowsLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        keepSelection={false}
                                                                        refreshIndicator={false}
                                                                        selectedCountTemplateSingular={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        selectedCountTemplatePlural={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        enableSelectAll={false}
                                                                        selectionCounterPosition={"bottom"}
                                                                        selectingAllLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Selecting all items..." }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        cancelSelectionLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Cancel selection" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        selectAllText={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Select all rows in the data source" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        selectAllTemplate={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Select all %d rows in the data source" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        allSelectedText={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "All %d rows selected." }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        clearSelectionButtonLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        class={"mx-name-dataGrid21"}
                                                                        style={undefined}
                                                                        tabIndex={undefined} />
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
    "Token consumption monitor"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "ConversationalUI.Layout_MasterBase.Main": region$Main,
};
