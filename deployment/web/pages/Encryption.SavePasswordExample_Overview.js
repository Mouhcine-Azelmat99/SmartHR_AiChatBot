import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { SelectionProperty } from "mendix/SelectionProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Encryption.ResponsiveLayout_Certificate.js";

const { $Datagrid, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Datagrid, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Datagrid key="p.Encryption.SavePasswordExample_Overview.dataGrid21"
        $widgetId="p.Encryption.SavePasswordExample_Overview.dataGrid21"
        datasource={DatabaseObjectListProperty({
            "dataSourceId": "p.0",
            "entity": "Encryption.ExampleConfiguration",
            "operationId": "kpYVM0YUAFyTxrbdj4AZ4Q",
            "sort": []
        })}
        refreshInterval={0}
        itemSelection={SelectionProperty({
            "selectionType": "Single",
            "dataSourceId": "p.0"
        })}
        itemSelectionMethod={"rowClick"}
        showSelectAllToggle={true}
        columns={[
            {
                "showContentAs": "attribute",
                "attribute": ListAttributeProperty({
                    "path": "",
                    "entity": "Encryption.ExampleConfiguration",
                    "attribute": "Title",
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
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
                "visible": ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                }),
                "sortable": true,
                "resizable": true,
                "draggable": true,
                "hidable": "yes",
                "width": "autoFill",
                "minWidth": "auto",
                "minWidthLimit": 100,
                "size": 1,
                "alignment": "left",
                "wrapText": false,
                "exportValue": t([
                    undefined
                ]),
                "allowEventPropagation": true
            },
            {
                "showContentAs": "attribute",
                "attribute": ListAttributeProperty({
                    "path": "",
                    "entity": "Encryption.ExampleConfiguration",
                    "attribute": "Username",
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
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Username" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
                "visible": ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                }),
                "sortable": true,
                "resizable": true,
                "draggable": true,
                "hidable": "yes",
                "width": "autoFill",
                "minWidth": "auto",
                "minWidthLimit": 100,
                "size": 1,
                "alignment": "left",
                "wrapText": false,
                "exportValue": t([
                    undefined
                ]),
                "allowEventPropagation": true
            },
            {
                "showContentAs": "attribute",
                "attribute": ListAttributeProperty({
                    "path": "",
                    "entity": "Encryption.ExampleConfiguration",
                    "attribute": "Password",
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
                "header": t([
                    ExpressionProperty({
                        "expression": { "expr": { "type": "literal", "value": "Password" }, "args": {} }
                    })
                ]),
                "tooltip": t([
                    undefined
                ]),
                "filter": undefined,
                "visible": ExpressionProperty({
                    "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                }),
                "sortable": true,
                "resizable": true,
                "draggable": true,
                "hidable": "yes",
                "width": "autoFill",
                "minWidth": "auto",
                "minWidthLimit": 100,
                "size": 1,
                "alignment": "left",
                "wrapText": false,
                "exportValue": t([
                    undefined
                ]),
                "allowEventPropagation": true
            }
        ]}
        columnsFilterable={true}
        pageSize={20}
        pagination={"buttons"}
        pagingPosition={"bottom"}
        showPagingButtons={"always"}
        showEmptyPlaceholder={"none"}
        emptyPlaceholder={undefined}
        rowClass={undefined}
        onClickTrigger={"single"}
        onClick={undefined}
        onSelectionChange={undefined}
        columnsSortable={true}
        columnsResizable={true}
        columnsDraggable={true}
        columnsHidable={true}
        filtersPlaceholder={[
            <$ConditionalVisibilityWrapper key="p.Encryption.SavePasswordExample_Overview.actionButton1$visibility"
                $widgetId="p.Encryption.SavePasswordExample_Overview.actionButton1$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p.Encryption.SavePasswordExample_Overview.actionButton1"
                        $widgetId="p.Encryption.SavePasswordExample_Overview.actionButton1"
                        buttonId={"p.Encryption.SavePasswordExample_Overview.actionButton1"}
                        class={"mx-name-actionButton1"}
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
                        icon={WebIconProperty({
                            "icon": { "type": "image", "iconUrl": "img/System$Images$New.png" }
                        })}
                        action={ActionProperty({
                            "action": { "type": "createObject", "argMap": {}, "config": { "entity": "Encryption.ExampleConfiguration", "operationId": "gv0Dk1guilK9KtHb+1JsHw", "pageSettings": { "name": "Encryption/SavePasswordExample_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [] }, "allowedRoles": [], "objectParameter": "param$ExampleConfiguration" }, "disabledDuringExecution": true },
                            "abortOnServerValidation": true
                        })} />
                ]} />,
            <$ConditionalVisibilityWrapper key="p.Encryption.SavePasswordExample_Overview.actionButton2$visibility"
                $widgetId="p.Encryption.SavePasswordExample_Overview.actionButton2$visibility"
                visible={ExpressionProperty({
                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [] }, "args": {} }
                })}
                contents={[
                    <$ActionButton key="p.Encryption.SavePasswordExample_Overview.actionButton2"
                        $widgetId="p.Encryption.SavePasswordExample_Overview.actionButton2"
                        buttonId={"p.Encryption.SavePasswordExample_Overview.actionButton2"}
                        class={"mx-name-actionButton2"}
                        style={undefined}
                        tabIndex={undefined}
                        renderType={"button"}
                        role={undefined}
                        buttonClass={"btn-default"}
                        caption={t([
                            ExpressionProperty({
                                "expression": { "expr": { "type": "literal", "value": "Edit [default]" }, "args": {} }
                            })
                        ])}
                        tooltip={TextProperty({
                            "value": t([
                                ""
                            ])
                        })}
                        icon={WebIconProperty({
                            "icon": { "type": "image", "iconUrl": "img/System$Images$Edit.png" }
                        })}
                        action={ActionProperty({
                            "action": { "type": "openPage", "argMap": { "param$ExampleConfiguration": { "widget": "p.Encryption.SavePasswordExample_Overview.dataGrid21", "source": "selection" } }, "config": { "name": "Encryption/SavePasswordExample_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [] }, "disabledDuringExecution": true },
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
        itemSelectionMode={"clear"}
        enableSelectAll={false}
        keepSelection={false}
        selectionCounterPosition={"bottom"}
        loadingType={"spinner"}
        refreshIndicator={false}
        showNumberOfRows={false}
        loadMoreButtonCaption={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Load More" }, "args": {} }
            })
        ])}
        configurationStorageType={"attribute"}
        storeFiltersInPersonalization={true}
        selectAllRowsLabel={t([
            ExpressionProperty({
                "expression": { "expr": { "type": "literal", "value": "Select all rows" }, "args": {} }
            })
        ])}
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
        class={"mx-name-dataGrid21"}
        style={undefined}
        tabIndex={undefined} />
]}</PageFragment>);

export const title = t([
    "Page Title"
]);

export const classes = "";

export const style = {};
export const content = { ...parentContent,
    "Encryption.ResponsiveLayout_Certificate.Main": region$Main,
};
