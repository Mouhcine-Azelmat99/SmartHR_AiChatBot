import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { AssociationObjectListProperty } from "mendix/AssociationObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";

import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { ListView } from "mendix/widgets/web/ListView";
import { TabContainer } from "mendix/widgets/web/TabContainer";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $TabContainer, $Datagrid, $DatagridTextFilter, $ListView, $Text } = asPluginWidgets({ Div, TabContainer, Datagrid, DatagridTextFilter, ListView, Text });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1"
        $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0"
                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0$column0"
                        $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$TabContainer key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.tabContainer1"
                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.tabContainer1"
                                class={"mx-name-tabContainer1"}
                                style={undefined}
                                tabIndex={undefined}
                                widgetId={"p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.tabContainer1"}
                                defaultTab={0}
                                tabs={[
                                    {
                                        "name": "tabPage1",
                                        "caption": TextProperty({
                                            "value": t([
                                                "Tools"
                                            ])
                                        }),
                                        "isDelayed": false,
                                        "refreshOnShow": false,
                                        "content": [
                                            <$Datagrid key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_1"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_1"
                                                datasource={AssociationObjectListProperty({
                                                    "dataSourceId": "p.2",
                                                    "entity": "MCPClient.Tool",
                                                    "scope": "$ListToolsResult",
                                                    "operationId": "AgPBkdQ9K1+TAkXhB3tb0Q"
                                                })}
                                                refreshInterval={0}
                                                itemSelectionMethod={"checkbox"}
                                                itemSelectionMode={"clear"}
                                                showSelectAllToggle={true}
                                                loadingType={"spinner"}
                                                columns={[
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.Tool",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.2",
                                                            "isList": false
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
                                                            <$DatagridTextFilter key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter1"
                                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter1"
                                                                attrChoice={"auto"}
                                                                linkedDs={undefined}
                                                                attributes={[]}
                                                                defaultValue={undefined}
                                                                defaultFilter={"contains"}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                adjustable={true}
                                                                delay={500}
                                                                onChange={undefined}
                                                                screenReaderButtonCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                screenReaderInputCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                                    })
                                                                ])}
                                                                class={"mx-name-textFilter1"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "allowEventPropagation": true,
                                                        "width": "autoFill",
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false
                                                    },
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.Tool",
                                                            "attribute": "Description",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.2",
                                                            "isList": false
                                                        }),
                                                        "content": undefined,
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
                                                            <$DatagridTextFilter key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter2"
                                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter2"
                                                                attrChoice={"auto"}
                                                                linkedDs={undefined}
                                                                attributes={[]}
                                                                defaultValue={undefined}
                                                                defaultFilter={"contains"}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                adjustable={true}
                                                                delay={500}
                                                                onChange={undefined}
                                                                screenReaderButtonCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                screenReaderInputCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                                    })
                                                                ])}
                                                                class={"mx-name-textFilter2"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "allowEventPropagation": true,
                                                        "width": "autoFill",
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false
                                                    },
                                                    {
                                                        "showContentAs": "customContent",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.Tool",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.2",
                                                            "isList": false
                                                        }),
                                                        "content": TemplatedWidgetProperty({
                                                            "dataSourceId": "p.2",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$ListView key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView1"
                                                                    $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView1"
                                                                    class={"mx-name-listView1 argument-listview"}
                                                                    style={undefined}
                                                                    listValue={AssociationObjectListProperty({
                                                                        "dataSourceId": "p.3",
                                                                        "entity": "MCPClient.ToolArgument",
                                                                        "scope": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_1",
                                                                        "operationId": "F+qatz1MdlWSLRcNrkSINQ"
                                                                    })}
                                                                    itemTemplate={TemplatedWidgetProperty({
                                                                        "dataSourceId": "p.3",
                                                                        "editable": false,
                                                                        "children": () => [
                                                                            <$Text key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text1"
                                                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text1"
                                                                                class={"mx-name-text1"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Name" }, { "type": "literal", "value": " (" } ] }, { "type": "variable", "variable": "currentObject", "path": "_Type" } ] }, { "type": "literal", "value": ")" } ] }, "args": { "currentObject": { "widget": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView1", "source": "object" } } }
                                                                                    })
                                                                                ])}
                                                                                renderMode={"span"} />
                                                                        ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    pageSize={10} />
                                                            ]
                                                        }),
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Arguments" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": undefined,
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": false,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "no",
                                                        "allowEventPropagation": true,
                                                        "width": "autoFit",
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false
                                                    }
                                                ]}
                                                columnsFilterable={true}
                                                pageSize={20}
                                                pagination={"buttons"}
                                                showPagingButtons={"always"}
                                                showNumberOfRows={false}
                                                pagingPosition={"bottom"}
                                                loadMoreButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                    })
                                                ])}
                                                showEmptyPlaceholder={"none"}
                                                emptyPlaceholder={undefined}
                                                rowClass={undefined}
                                                onClickTrigger={"single"}
                                                onClick={undefined}
                                                onSelectionChange={undefined}
                                                filtersPlaceholder={undefined}
                                                columnsSortable={true}
                                                columnsResizable={true}
                                                columnsDraggable={true}
                                                columnsHidable={true}
                                                configurationStorageType={"attribute"}
                                                storeFiltersInPersonalization={true}
                                                filterSectionTitle={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
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
                                                class={"mx-name-dataGrid2_1 table-compact"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ]
                                    },
                                    {
                                        "name": "tabPage2",
                                        "caption": TextProperty({
                                            "value": t([
                                                "Prompts"
                                            ])
                                        }),
                                        "isDelayed": false,
                                        "refreshOnShow": false,
                                        "content": [
                                            <$Datagrid key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_2"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_2"
                                                datasource={AssociationObjectListProperty({
                                                    "dataSourceId": "p.4",
                                                    "entity": "MCPClient.Prompt",
                                                    "scope": "$ListPromptsResult",
                                                    "operationId": "sO9OEkCzzFGUzucmntgOAg"
                                                })}
                                                refreshInterval={0}
                                                itemSelectionMethod={"checkbox"}
                                                itemSelectionMode={"clear"}
                                                showSelectAllToggle={true}
                                                loadingType={"spinner"}
                                                columns={[
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.Prompt",
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
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
                                                            <$DatagridTextFilter key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter3"
                                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter3"
                                                                attrChoice={"auto"}
                                                                linkedDs={undefined}
                                                                attributes={[]}
                                                                defaultValue={undefined}
                                                                defaultFilter={"contains"}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                adjustable={true}
                                                                delay={500}
                                                                onChange={undefined}
                                                                screenReaderButtonCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                screenReaderInputCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                                    })
                                                                ])}
                                                                class={"mx-name-textFilter3"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "allowEventPropagation": true,
                                                        "width": "autoFill",
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false
                                                    },
                                                    {
                                                        "showContentAs": "attribute",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.Prompt",
                                                            "attribute": "Description",
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
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Description" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": [
                                                            <$DatagridTextFilter key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter4"
                                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.textFilter4"
                                                                attrChoice={"auto"}
                                                                linkedDs={undefined}
                                                                attributes={[]}
                                                                defaultValue={undefined}
                                                                defaultFilter={"contains"}
                                                                placeholder={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                adjustable={true}
                                                                delay={500}
                                                                onChange={undefined}
                                                                screenReaderButtonCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                screenReaderInputCaption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                                    })
                                                                ])}
                                                                class={"mx-name-textFilter4"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ],
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": true,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "yes",
                                                        "allowEventPropagation": true,
                                                        "width": "autoFill",
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false
                                                    },
                                                    {
                                                        "showContentAs": "customContent",
                                                        "attribute": ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.Prompt",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.4",
                                                            "isList": false
                                                        }),
                                                        "content": TemplatedWidgetProperty({
                                                            "dataSourceId": "p.4",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$ListView key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView2"
                                                                    $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView2"
                                                                    class={"mx-name-listView2 argument-listview"}
                                                                    style={undefined}
                                                                    listValue={AssociationObjectListProperty({
                                                                        "dataSourceId": "p.5",
                                                                        "entity": "MCPClient.PromptArgument",
                                                                        "scope": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.dataGrid2_2",
                                                                        "operationId": "+6RFTD/pNlq+7Q9F0Om8EA"
                                                                    })}
                                                                    itemTemplate={TemplatedWidgetProperty({
                                                                        "dataSourceId": "p.5",
                                                                        "editable": false,
                                                                        "children": () => [
                                                                            <$Text key="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text2"
                                                                                $widgetId="p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.text2"
                                                                                class={"mx-name-text2"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MCPClient.MCPServerConfiguration_ViewToolsAndPrompts.listView2", "source": "object" } } }
                                                                                    })
                                                                                ])}
                                                                                renderMode={"span"} />
                                                                        ]
                                                                    })}
                                                                    onClick={undefined}
                                                                    pageSize={10} />
                                                            ]
                                                        }),
                                                        "dynamicText": t([
                                                            undefined
                                                        ]),
                                                        "exportValue": t([
                                                            undefined
                                                        ]),
                                                        "header": t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Arguments" }, "args": {} }
                                                            })
                                                        ]),
                                                        "tooltip": t([
                                                            undefined
                                                        ]),
                                                        "filter": undefined,
                                                        "visible": ExpressionProperty({
                                                            "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                        }),
                                                        "sortable": false,
                                                        "resizable": true,
                                                        "draggable": true,
                                                        "hidable": "no",
                                                        "allowEventPropagation": true,
                                                        "width": "autoFit",
                                                        "minWidth": "auto",
                                                        "minWidthLimit": 100,
                                                        "size": 1,
                                                        "alignment": "left",
                                                        "wrapText": false
                                                    }
                                                ]}
                                                columnsFilterable={true}
                                                pageSize={20}
                                                pagination={"buttons"}
                                                showPagingButtons={"always"}
                                                showNumberOfRows={false}
                                                pagingPosition={"bottom"}
                                                loadMoreButtonCaption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                                    })
                                                ])}
                                                showEmptyPlaceholder={"none"}
                                                emptyPlaceholder={undefined}
                                                rowClass={undefined}
                                                onClickTrigger={"single"}
                                                onClick={undefined}
                                                onSelectionChange={undefined}
                                                filtersPlaceholder={undefined}
                                                columnsSortable={true}
                                                columnsResizable={true}
                                                columnsDraggable={true}
                                                columnsHidable={true}
                                                configurationStorageType={"attribute"}
                                                storeFiltersInPersonalization={true}
                                                filterSectionTitle={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
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
                                                class={"mx-name-dataGrid2_2 table-compact"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ]
                                    }
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "View MCP server tools and prompts"
]);

export const classes = "";

export const cancelChangesOperationId = "ESemGQS0klKV3+Nomfqc7g";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
