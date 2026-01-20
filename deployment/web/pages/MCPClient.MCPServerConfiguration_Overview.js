import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AttributeMetaDataProperty } from "mendix/AttributeMetaDataProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { SelectionProperty } from "mendix/SelectionProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridDropdownFilterWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/datagriddropdownfilter/DatagridDropdownFilter.mjs";
const DatagridDropdownFilter = Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "DatagridDropdownFilter")?.value || Object.getOwnPropertyDescriptor(DatagridDropdownFilterWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import * as EventsWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/events/Events.mjs";
const Events = Object.getOwnPropertyDescriptor(EventsWidgetModule, "Events")?.value || Object.getOwnPropertyDescriptor(EventsWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/events/Events.css";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";
import { ACT_MCPServerConfiguration_Refresh } from "../nanoflows/MCPClient.ACT_MCPServerConfiguration_Refresh.js";

const { $Div, $Text, $Fragment, $ConditionalVisibilityWrapper, $ActionButton, $Events, $Datagrid, $DatagridTextFilter, $DatagridDropdownFilter, $Image } = asPluginWidgets({ Div, Text, Fragment, ConditionalVisibilityWrapper, ActionButton, Events, Datagrid, DatagridTextFilter, DatagridDropdownFilter, Image });

addEnumerations({
    "MCPClient.ENUM_SyncState": [
        [
            "Synced",
            t([
                "Synced"
            ])
        ],
        [
            "Syncing",
            t([
                "Syncing"
            ])
        ],
        [
            "Not_synced",
            t([
                "Not synced"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1"
        $widgetId="p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0"
                $widgetId="p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.MCPClient.MCPServerConfiguration_Overview.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Text key="p.MCPClient.MCPServerConfiguration_Overview.text1"
                                $widgetId="p.MCPClient.MCPServerConfiguration_Overview.text1"
                                class={"mx-name-text1"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "MCP Server Configurations" }, "args": {} }
                                    })
                                ])}
                                renderMode={"h2"} />,
                            <$Fragment key="p.MCPClient.MCPServerConfiguration_Overview.snippetCall1"
                                $widgetId="p.MCPClient.MCPServerConfiguration_Overview.snippetCall1"
                                content={[
                                    <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1$visibility"
                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1"
                                                $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1"
                                                buttonId={"p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
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
                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-add" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "xnFVJVS94l+ECz2ejwgI+Q", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6$visibility"
                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6"
                                                $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6"
                                                buttonId={"p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton6"}
                                                class={"mx-name-actionButton6 spacing-outer-left"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Sync tools for all servers" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={WebIconProperty({
                                                    "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-cloud-sync" }
                                                })}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "8mHuBba7a1ytqA9jyQPKvw", "progress": { "message": t([ "" ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$Events key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.events1"
                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.events1"
                                        onComponentLoad={ActionProperty({
                                            "action": { "type": "callNanoflow", "argMap": {}, "config": { "nanoflow": () => ACT_MCPServerConfiguration_Refresh, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                            "argumentTypes": { }
                                        })}
                                        componentLoadDelay={5000}
                                        componentLoadRepeat={true}
                                        componentLoadRepeatInterval={5000}
                                        onEventChange={undefined}
                                        onEventChangeDelay={0}
                                        class={"mx-name-events1"}
                                        style={undefined}
                                        tabIndex={undefined} />,
                                    <$Datagrid key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1"
                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1"
                                        datasource={DatabaseObjectListProperty({
                                            "dataSourceId": "p.4",
                                            "entity": "MCPClient.MCPServerConfiguration",
                                            "operationId": "7Ys94z2tLFmjQkjyg7QuRg",
                                            "sort": []
                                        })}
                                        refreshInterval={0}
                                        itemSelection={SelectionProperty({
                                            "selectionType": "Single",
                                            "dataSourceId": "p.4"
                                        })}
                                        itemSelectionMethod={"rowClick"}
                                        itemSelectionMode={"clear"}
                                        showSelectAllToggle={true}
                                        loadingType={"spinner"}
                                        columns={[
                                            {
                                                "showContentAs": "attribute",
                                                "attribute": ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
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
                                                    <$DatagridTextFilter key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter3"
                                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter3"
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
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "MCPEndpoint",
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
                                                        "expression": { "expr": { "type": "literal", "value": "MCP endpoint" }, "args": {} }
                                                    })
                                                ]),
                                                "tooltip": t([
                                                    undefined
                                                ]),
                                                "filter": [
                                                    <$DatagridTextFilter key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter2"
                                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter2"
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
                                                "showContentAs": "attribute",
                                                "attribute": ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "Version",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                                    })
                                                ]),
                                                "tooltip": t([
                                                    undefined
                                                ]),
                                                "filter": [
                                                    <$DatagridTextFilter key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter4"
                                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter4"
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
                                                "showContentAs": "attribute",
                                                "attribute": ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "ProtocolVersion",
                                                    "attributeType": "Enum",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Protocol version" }, "args": {} }
                                                    })
                                                ]),
                                                "tooltip": t([
                                                    undefined
                                                ]),
                                                "filter": [
                                                    <$DatagridDropdownFilter key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.drop_downFilter1"
                                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.drop_downFilter1"
                                                        baseType={"attr"}
                                                        linkedDs={undefined}
                                                        attrChoice={"auto"}
                                                        auto={true}
                                                        filterOptions={[]}
                                                        refOptions={undefined}
                                                        refCaptionSource={"attr"}
                                                        fetchOptionsLazy={false}
                                                        defaultValue={undefined}
                                                        filterable={false}
                                                        multiSelect={false}
                                                        emptyOptionCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "None" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        selectedItemsStyle={"text"}
                                                        selectionMethod={"checkbox"}
                                                        onChange={undefined}
                                                        ariaLabel={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        emptySelectionCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterInputPlaceholderCaption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Search" }, "args": {} }
                                                            })
                                                        ])}
                                                        class={"mx-name-drop_downFilter1"}
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
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "GetCredentialsMicroflow",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Get credentials microflow" }, "args": {} }
                                                    })
                                                ]),
                                                "tooltip": t([
                                                    undefined
                                                ]),
                                                "filter": [
                                                    <$DatagridTextFilter key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter1"
                                                        $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter1"
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
                                                "showContentAs": "customContent",
                                                "attribute": ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "SyncState",
                                                    "attributeType": "Enum",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.4",
                                                    "isList": false
                                                }),
                                                "content": TemplatedWidgetProperty({
                                                    "dataSourceId": "p.4",
                                                    "editable": false,
                                                    "children": () => [
                                                        <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20$visibility"
                                                            $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SyncState" }, { "type": "literal", "value": "Not_synced" } ] }, "args": { "currentObject": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } } }
                                                            })}
                                                            contents={[
                                                                <$Image key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20"
                                                                    $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image20"
                                                                    datasource={"image"}
                                                                    imageObject={WebStaticImageProperty({
                                                                        "image": { "uri": "img/MCPClient$Images_MCPClient$alert_circle_filled.svg" }
                                                                    })}
                                                                    defaultImageDynamic={undefined}
                                                                    imageUrl={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    imageIcon={undefined}
                                                                    isBackgroundImage={false}
                                                                    children={undefined}
                                                                    onClickType={"action"}
                                                                    onClick={undefined}
                                                                    alternativeText={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    widthUnit={"auto"}
                                                                    width={100}
                                                                    heightUnit={"auto"}
                                                                    height={100}
                                                                    iconSize={14}
                                                                    displayAs={"fullImage"}
                                                                    responsive={true}
                                                                    class={"mx-name-image20"}
                                                                    style={undefined}
                                                                    tabIndex={undefined} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21$visibility"
                                                            $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SyncState" }, { "type": "literal", "value": "Synced" } ] }, "args": { "currentObject": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } } }
                                                            })}
                                                            contents={[
                                                                <$Image key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21"
                                                                    $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image21"
                                                                    datasource={"image"}
                                                                    imageObject={WebStaticImageProperty({
                                                                        "image": { "uri": "img/MCPClient$Images_MCPClient$checkmark_circle.svg" }
                                                                    })}
                                                                    defaultImageDynamic={undefined}
                                                                    imageUrl={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    imageIcon={undefined}
                                                                    isBackgroundImage={false}
                                                                    children={undefined}
                                                                    onClickType={"action"}
                                                                    onClick={undefined}
                                                                    alternativeText={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    widthUnit={"auto"}
                                                                    width={100}
                                                                    heightUnit={"auto"}
                                                                    height={100}
                                                                    iconSize={14}
                                                                    displayAs={"fullImage"}
                                                                    responsive={true}
                                                                    class={"mx-name-image21"}
                                                                    style={undefined}
                                                                    tabIndex={undefined} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22$visibility"
                                                            $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "SyncState" }, { "type": "literal", "value": "Syncing" } ] }, "args": { "currentObject": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } } }
                                                            })}
                                                            contents={[
                                                                <$Image key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22"
                                                                    $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.image22"
                                                                    datasource={"image"}
                                                                    imageObject={WebStaticImageProperty({
                                                                        "image": { "uri": "img/MCPClient$Images_MCPClient$refresh.svg" }
                                                                    })}
                                                                    defaultImageDynamic={undefined}
                                                                    imageUrl={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    imageIcon={undefined}
                                                                    isBackgroundImage={false}
                                                                    children={undefined}
                                                                    onClickType={"action"}
                                                                    onClick={undefined}
                                                                    alternativeText={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    widthUnit={"auto"}
                                                                    width={100}
                                                                    heightUnit={"auto"}
                                                                    height={100}
                                                                    iconSize={14}
                                                                    displayAs={"fullImage"}
                                                                    responsive={true}
                                                                    class={"mx-name-image22"}
                                                                    style={undefined}
                                                                    tabIndex={undefined} />
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
                                                        "expression": { "expr": { "type": "literal", "value": "Sync state" }, "args": {} }
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
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "MCPEndpoint",
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
                                                        <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4$visibility"
                                                            $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4"
                                                                    $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4"
                                                                    buttonId={"p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton4"}
                                                                    class={"mx-name-actionButton4 btn-lg"}
                                                                    style={undefined}
                                                                    tabIndex={undefined}
                                                                    renderType={"link"}
                                                                    role={"button"}
                                                                    buttonClass={"btn-primary"}
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
                                                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-pencil" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "openPage", "argMap": { "param$MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MCPClient/MCPServerConfiguration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5$visibility"
                                                            $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5"
                                                                    $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5"
                                                                    buttonId={"p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton5"}
                                                                    class={"mx-name-actionButton5 btn-lg spacing-outer-left"}
                                                                    style={undefined}
                                                                    tabIndex={undefined}
                                                                    renderType={"link"}
                                                                    role={"button"}
                                                                    buttonClass={"btn-primary"}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    tooltip={TextProperty({
                                                                        "value": t([
                                                                            "Snyc tools from server"
                                                                        ])
                                                                    })}
                                                                    icon={WebIconProperty({
                                                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-cloud-sync" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "operationId": "MjltZmsQCVa+zzIsmJlboA", "progress": { "message": t([ "Syncing MCP tools. This may take a while." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2$visibility"
                                                            $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2"
                                                                    $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2"
                                                                    buttonId={"p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton2"}
                                                                    class={"mx-name-actionButton2 btn-lg spacing-outer-left spacing-outer-right"}
                                                                    style={undefined}
                                                                    tabIndex={undefined}
                                                                    renderType={"link"}
                                                                    role={"button"}
                                                                    buttonClass={"btn-primary"}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    tooltip={TextProperty({
                                                                        "value": t([
                                                                            "View MCP tools & prompts"
                                                                        ])
                                                                    })}
                                                                    icon={WebIconProperty({
                                                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-browser-search" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "operationId": "hpJwPbazyl+QyV6izwGmBA", "progress": { "message": t([ "Syncing MCP tools and prompts from server. This may take a while." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3$visibility"
                                                            $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3"
                                                                    $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3"
                                                                    buttonId={"p.MCPClient.Snippet_MCPServerConfiguration_Overview.actionButton3"}
                                                                    class={"mx-name-actionButton3 btn-lg"}
                                                                    style={undefined}
                                                                    tabIndex={undefined}
                                                                    renderType={"link"}
                                                                    role={"button"}
                                                                    buttonClass={"btn-primary"}
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
                                                                        "icon": { "type": "icon", "iconClass": "mx-icon-lined mx-icon-trash-can" }
                                                                    })}
                                                                    action={ActionProperty({
                                                                        "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "operationId": "WvMSAg1zEFGi/GgJIzSj4g", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
                                        onClickTrigger={"double"}
                                        onClick={ListActionProperty({
                                            "action": { "type": "openPage", "argMap": { "param$MCPServerConfiguration": { "widget": "p.MCPClient.Snippet_MCPServerConfiguration_Overview.dataGrid2_1", "source": "object" } }, "config": { "name": "MCPClient/MCPServerConfiguration_NewEdit.page.xml", "location": "modal", "resizable": true, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                            "abortOnServerValidation": false,
                                            "dataSourceId": "p.4",
                                            "argumentTypes": { }
                                        })}
                                        onSelectionChange={undefined}
                                        filtersPlaceholder={[
                                            <$DatagridTextFilter key="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter5"
                                                $widgetId="p.MCPClient.Snippet_MCPServerConfiguration_Overview.textFilter5"
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
                                                            "entity": "MCPClient.MCPServerConfiguration",
                                                            "attribute": "MCPEndpoint",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.4",
                                                            "isList": false
                                                        })
                                                    },
                                                    {
                                                        "attribute": AttributeMetaDataProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.MCPServerConfiguration",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.4",
                                                            "isList": false
                                                        })
                                                    }
                                                ]}
                                                class={"mx-name-textFilter5 spacing-outer-top spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined} />
                                        ]}
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
                                        class={"mx-name-dataGrid2_1"}
                                        style={undefined}
                                        tabIndex={undefined} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "MCP Server Configuration Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
