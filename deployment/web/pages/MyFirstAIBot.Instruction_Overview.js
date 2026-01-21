import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { SelectionProperty } from "mendix/SelectionProperty";
import { TextProperty } from "mendix/TextProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_TopBar.js";

const { $Container, $Div, $Text, $Datagrid, $DatagridTextFilter, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Container, Div, Text, Datagrid, DatagridTextFilter, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Container key="p.MyFirstAIBot.Instruction_Overview.container1"
        $widgetId="p.MyFirstAIBot.Instruction_Overview.container1"
        class={"mx-name-container1"}
        style={undefined}
        renderMode={"div"}
        onClick={undefined}
        content={[
            <$Div key="p.MyFirstAIBot.Instruction_Overview.layoutGrid1"
                $widgetId="p.MyFirstAIBot.Instruction_Overview.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0"
                        $widgetId="p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0$column0"
                                $widgetId="p.MyFirstAIBot.Instruction_Overview.layoutGrid1$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Text key="p.MyFirstAIBot.Instruction_Overview.text1"
                                        $widgetId="p.MyFirstAIBot.Instruction_Overview.text1"
                                        class={"mx-name-text1"}
                                        style={undefined}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "My Custom Instructions" }, "args": {} }
                                            })
                                        ])}
                                        renderMode={"h2"} />,
                                    <$Datagrid key="p.MyFirstAIBot.Instruction_Overview.grid1"
                                        $widgetId="p.MyFirstAIBot.Instruction_Overview.grid1"
                                        datasource={DatabaseObjectListProperty({
                                            "dataSourceId": "p.0",
                                            "entity": "MyFirstAIBot.Instruction",
                                            "operationId": "kNgc7EafX1a4N2dCkEdL4w",
                                            "sort": [],
                                            "constraints": { "type": "function", "name": "and", "parameters": [ { "type": "attribute", "attribute": "IsCustom", "context": "MyFirstAIBot.Instruction", "attributeType": "Boolean" }, { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "System.owner", "context": "MyFirstAIBot.Instruction", "attributeType": "ObjectReference" }, { "type": "token", "name": "currentUser" } ] } ] }
                                        })}
                                        refreshInterval={0}
                                        itemSelection={SelectionProperty({
                                            "selectionType": "Single",
                                            "dataSourceId": "p.0"
                                        })}
                                        itemSelectionMethod={"rowClick"}
                                        itemSelectionMode={"clear"}
                                        showSelectAllToggle={true}
                                        columns={[
                                            {
                                                "showContentAs": "attribute",
                                                "attribute": ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MyFirstAIBot.Instruction",
                                                    "attribute": "DisplayName",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.0",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                                    })
                                                ]),
                                                "tooltip": t([
                                                    undefined
                                                ]),
                                                "filter": [
                                                    <$DatagridTextFilter key="p.MyFirstAIBot.Instruction_Overview.textFilter1"
                                                        $widgetId="p.MyFirstAIBot.Instruction_Overview.textFilter1"
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
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        attrChoice={"auto"}
                                                        linkedDs={undefined}
                                                        attributes={[]}
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
                                                "width": "manual",
                                                "minWidth": "auto",
                                                "minWidthLimit": 100,
                                                "size": 30,
                                                "alignment": "left",
                                                "wrapText": false
                                            },
                                            {
                                                "showContentAs": "attribute",
                                                "attribute": ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MyFirstAIBot.Instruction",
                                                    "attribute": "Instruction",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.0",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Instruction" }, "args": {} }
                                                    })
                                                ]),
                                                "tooltip": t([
                                                    undefined
                                                ]),
                                                "filter": [
                                                    <$DatagridTextFilter key="p.MyFirstAIBot.Instruction_Overview.textFilter2"
                                                        $widgetId="p.MyFirstAIBot.Instruction_Overview.textFilter2"
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
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        attrChoice={"auto"}
                                                        linkedDs={undefined}
                                                        attributes={[]}
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
                                                "width": "manual",
                                                "minWidth": "auto",
                                                "minWidthLimit": 100,
                                                "size": 70,
                                                "alignment": "left",
                                                "wrapText": false
                                            }
                                        ]}
                                        columnsFilterable={true}
                                        pageSize={20}
                                        pagination={"buttons"}
                                        pagingPosition={"bottom"}
                                        showPagingButtons={"always"}
                                        loadMoreButtonCaption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
                                            })
                                        ])}
                                        showEmptyPlaceholder={"none"}
                                        emptyPlaceholder={undefined}
                                        rowClass={undefined}
                                        onClickTrigger={"double"}
                                        onClick={ListActionProperty({
                                            "action": { "type": "openPage", "argMap": { "param$Instruction": { "widget": "p.MyFirstAIBot.Instruction_Overview.grid1", "source": "object" } }, "config": { "name": "MyFirstAIBot/Instruction_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": false },
                                            "abortOnServerValidation": false,
                                            "dataSourceId": "p.0",
                                            "argumentTypes": { }
                                        })}
                                        onSelectionChange={undefined}
                                        columnsSortable={true}
                                        columnsResizable={true}
                                        columnsDraggable={true}
                                        columnsHidable={true}
                                        configurationStorageType={"attribute"}
                                        filtersPlaceholder={[
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Instruction_Overview.actionButton2$visibility"
                                                $widgetId="p.MyFirstAIBot.Instruction_Overview.actionButton2$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.MyFirstAIBot.Instruction_Overview.actionButton2"
                                                        $widgetId="p.MyFirstAIBot.Instruction_Overview.actionButton2"
                                                        buttonId={"p.MyFirstAIBot.Instruction_Overview.actionButton2"}
                                                        class={"mx-name-actionButton2 spacing-outer-bottom spacing-outer-right"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "New" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "oEQBirPEz1qcIdZxAz85/A", "validate": "view", "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />,
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Instruction_Overview.actionButton1$visibility"
                                                $widgetId="p.MyFirstAIBot.Instruction_Overview.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" }, { "type": "literal", "value": "User" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.MyFirstAIBot.Instruction_Overview.actionButton1"
                                                        $widgetId="p.MyFirstAIBot.Instruction_Overview.actionButton1"
                                                        buttonId={"p.MyFirstAIBot.Instruction_Overview.actionButton1"}
                                                        class={"mx-name-actionButton1 spacing-outer-bottom spacing-outer-right"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Edit" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "openPage", "argMap": { "param$Instruction": { "widget": "p.MyFirstAIBot.Instruction_Overview.grid1", "source": "selection" } }, "config": { "name": "MyFirstAIBot/Instruction_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator", "User" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />,
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.Instruction_Overview.actionButton3$visibility"
                                                $widgetId="p.MyFirstAIBot.Instruction_Overview.actionButton3$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "User" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.MyFirstAIBot.Instruction_Overview.actionButton3"
                                                        $widgetId="p.MyFirstAIBot.Instruction_Overview.actionButton3"
                                                        buttonId={"p.MyFirstAIBot.Instruction_Overview.actionButton3"}
                                                        class={"mx-name-actionButton3 spacing-outer-bottom spacing-outer-right"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Delete" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Instruction": { "widget": "p.MyFirstAIBot.Instruction_Overview.grid1", "source": "selection" } }, "config": { "operationId": "/pOdro+xc1CfdJorPjgJNQ", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "User" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]}
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
                                        loadingType={"spinner"}
                                        showNumberOfRows={false}
                                        storeFiltersInPersonalization={true}
                                        selectAllRowsLabel={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
                                            })
                                        ])}
                                        enableSelectAll={false}
                                        keepSelection={false}
                                        selectionCounterPosition={"bottom"}
                                        refreshIndicator={false}
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
                                        selectedCountTemplateSingular={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "%d row selected" }, "args": {} }
                                            })
                                        ])}
                                        selectedCountTemplatePlural={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "%d rows selected" }, "args": {} }
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
                                        class={"mx-name-grid1"}
                                        style={undefined}
                                        tabIndex={undefined} />
                                ]} />
                        ]} />
                ]} />
        ]}
        ariaHidden={false} />
]}</PageFragment>);

export const title = t([
    "My custom instructions"
]);

export const classes = "layout-atlas layout-atlas-responsive-topbar";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_TopBar.Main": region$Main,
};
