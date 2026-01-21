import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectListProperty } from "mendix/AssociationObjectListProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeMetaDataProperty } from "mendix/AttributeMetaDataProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Datagrid, $ConditionalVisibilityWrapper, $ActionButton, $DatagridTextFilter } = asPluginWidgets({ Div, DataView, Datagrid, ConditionalVisibilityWrapper, ActionButton, DatagridTextFilter });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1"
        $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0"
                $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataView1"
                                $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.15",
                                    "scope": "$AzureAISearchResource",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Datagrid key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21"
                                        datasource={AssociationObjectListProperty({
                                            "dataSourceId": "p.0",
                                            "entity": "OpenAIConnector.Index",
                                            "scope": "$AzureAISearchResource",
                                            "operationId": "mJXiEQWk3Vqil7hA2sf6rQ"
                                        })}
                                        refreshInterval={0}
                                        itemSelectionMethod={"checkbox"}
                                        itemSelectionMode={"clear"}
                                        showSelectAllToggle={true}
                                        columns={[
                                            {
                                                "showContentAs": "attribute",
                                                "attribute": ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "OpenAIConnector.Index",
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
                                                "filter": undefined,
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
                                                    "entity": "OpenAIConnector.Index",
                                                    "attribute": "Name",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
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
                                                    "entity": "OpenAIConnector.Index",
                                                    "attribute": "IsActive",
                                                    "attributeType": "Boolean",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Is active" }, "args": {} }
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
                                                    "entity": "OpenAIConnector.Index",
                                                    "attribute": "DisplayName",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.0",
                                                    "isList": false
                                                }),
                                                "content": TemplatedWidgetProperty({
                                                    "dataSourceId": "p.0",
                                                    "editable": false,
                                                    "children": () => [
                                                        <$ConditionalVisibilityWrapper key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4$visibility"
                                                            $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4"
                                                                    $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4"
                                                                    buttonId={"p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton4"}
                                                                    class={"mx-name-actionButton4 spacing-outer-right"}
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
                                                                            "Edit"
                                                                        ])
                                                                    })}
                                                                    icon={WebIconProperty({
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-pencil" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "openPage", "argMap": { "param$Index": { "widget": "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21", "source": "object" } }, "config": { "name": "OpenAIConnector/Index_Edit.page.xml", "location": "modal", "width": 1200, "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5$visibility"
                                                            $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5"
                                                                    $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5"
                                                                    buttonId={"p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton5"}
                                                                    class={"mx-name-actionButton5"}
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
                                                                            "Delete"
                                                                        ])
                                                                    })}
                                                                    icon={WebIconProperty({
                                                                        "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "Index": { "widget": "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "gygQsx6VXl2rA6TORCMTtg", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />
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
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
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
                                            "action": { "type": "openPage", "argMap": { "param$Index": { "widget": "p.OpenAIConnector.AzureAISearchResource_Index_Overview.dataGrid21", "source": "object" } }, "config": { "name": "OpenAIConnector/Index_Edit.page.xml", "location": "modal", "width": 1200, "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
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
                                            <$DatagridTextFilter key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.textFilter1"
                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.textFilter1"
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
                                                attrChoice={"linked"}
                                                linkedDs={undefined}
                                                attributes={[
                                                    {
                                                        "attribute": AttributeMetaDataProperty({
                                                            "path": "",
                                                            "entity": "OpenAIConnector.Index",
                                                            "attribute": "DisplayName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.0",
                                                            "isList": false
                                                        })
                                                    },
                                                    {
                                                        "attribute": AttributeMetaDataProperty({
                                                            "path": "",
                                                            "entity": "OpenAIConnector.Index",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.0",
                                                            "isList": false
                                                        })
                                                    }
                                                ]}
                                                class={"mx-name-textFilter1"}
                                                style={undefined}
                                                tabIndex={undefined} />
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
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton1"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton1"
                                        buttonId={"p.OpenAIConnector.AzureAISearchResource_Index_Overview.actionButton1"}
                                        class={"mx-name-actionButton1"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        renderType={"button"}
                                        role={undefined}
                                        buttonClass={"btn-default"}
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
    "Manage Indexes"
]);

export const classes = "";

export const cancelChangesOperationId = "yptuPQzlili8CnNZ9A7Ogg";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
