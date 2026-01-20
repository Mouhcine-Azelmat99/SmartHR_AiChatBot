import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectListProperty } from "mendix/AssociationObjectListProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeMetaDataProperty } from "mendix/AttributeMetaDataProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListActionProperty } from "mendix/ListActionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $ConditionalVisibilityWrapper, $ActionButton, $Datagrid, $ListView, $Text, $DatagridTextFilter } = asPluginWidgets({ Div, DataView, ConditionalVisibilityWrapper, ActionButton, Datagrid, ListView, Text, DatagridTextFilter });

addEnumerations({
    "OpenAIConnector.ENUM_ApiType": [
        [
            "AzureOpenAI",
            t([
                "Azure OpenAI"
            ])
        ],
        [
            "OpenAI",
            t([
                "OpenAI"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.OpenAIConnector.OpenAIDeployedModel_Overview.layoutGrid1"
        $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.OpenAIConnector.OpenAIDeployedModel_Overview.layoutGrid1$row0"
                $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.OpenAIConnector.OpenAIDeployedModel_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.OpenAIConnector.OpenAIDeployedModel_Overview.dataView1"
                                $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.dataView1"
                                class={"mx-name-dataView1 form-horizontal"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.20",
                                    "scope": "$Configuration",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$ConditionalVisibilityWrapper key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton5$visibility"
                                        $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton5$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton5"
                                                $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton5"
                                                buttonId={"p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton5"}
                                                class={"mx-name-actionButton5 spacing-outer-bottom"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Add new model" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }, "config": { "operationId": "QgbW3F+/f1mg1/sPdhoUfw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton6$visibility"
                                        $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton6$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton6"
                                                $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton6"
                                                buttonId={"p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton6"}
                                                class={"mx-name-actionButton6 spacing-outer-bottom spacing-outer-left-medium"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Generate default OpenAI models" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "callMicroflow", "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }, "config": { "operationId": "FJyP4Qw3/1ymn1tK/USczw", "progress": { "message": t([ "Creating models.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$Datagrid key="p.OpenAIConnector.OpenAIDeployedModel_Overview.dataGrid21"
                                        $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.dataGrid21"
                                        datasource={DatabaseObjectListProperty({
                                            "dataSourceId": "p.4",
                                            "entity": "OpenAIConnector.OpenAIDeployedModel",
                                            "scope": "p.OpenAIConnector.OpenAIDeployedModel_Overview.dataView1",
                                            "operationId": "lkLc85r7BV2mdxpfUzHjhA",
                                            "sort": [
                                                [
                                                    "OutputModality",
                                                    "desc"
                                                ],
                                                [
                                                    "DisplayName",
                                                    "desc"
                                                ]
                                            ],
                                            "arguments": {
                                                "currentObject": [
                                                    "$Configuration"
                                                ],
                                                "CurrentObject": [
                                                    "$Configuration"
                                                ]
                                            },
                                            "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "OpenAIConnector.OpenAIDeployedModel_Configuration", "context": "OpenAIConnector.OpenAIDeployedModel", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" } ] }
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
                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                    "attribute": "DisplayName",
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
                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                    "attribute": "Model",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
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
                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                    "attribute": "OutputModality",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Output modality" }, "args": {} }
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
                                                "content": TemplatedWidgetProperty({
                                                    "dataSourceId": "p.4",
                                                    "editable": false,
                                                    "children": () => [
                                                        <$ListView key="p.OpenAIConnector.OpenAIDeployedModel_Overview.listView1"
                                                            $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.listView1"
                                                            class={"mx-name-listView1 listview-horizontal listview-hide-on-empty listview-stylingless listview-sm"}
                                                            style={undefined}
                                                            listValue={AssociationObjectListProperty({
                                                                "dataSourceId": "p.5",
                                                                "entity": "GenAICommons.InputModality",
                                                                "scope": "p.OpenAIConnector.OpenAIDeployedModel_Overview.dataGrid21",
                                                                "operationId": "lwRUZl1kn16Mxjsnl1z69A",
                                                                "directPath": "GenAICommons.DeployedModel_InputModality/GenAICommons.InputModality"
                                                            })}
                                                            itemTemplate={TemplatedWidgetProperty({
                                                                "dataSourceId": "p.5",
                                                                "editable": false,
                                                                "children": () => [
                                                                    <$Text key="p.OpenAIConnector.OpenAIDeployedModel_Overview.text2"
                                                                        $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.text2"
                                                                        class={"mx-name-text2"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ModelModality" }, { "type": "literal", "value": "GenAICommons.ENUM_ModelModality" } ] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.OpenAIDeployedModel_Overview.listView1", "source": "object" } } }
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
                                                        "expression": { "expr": { "type": "literal", "value": "Input modalities" }, "args": {} }
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
                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                    "attribute": "AzureApiVersion",
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
                                                        "expression": { "expr": { "type": "literal", "value": "API version" }, "args": {} }
                                                    })
                                                ]),
                                                "tooltip": t([
                                                    undefined
                                                ]),
                                                "filter": undefined,
                                                "visible": ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" } ] }, "args": { "currentObject": { "widget": "$Configuration", "source": "object" } } }
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
                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                    "attribute": "IsActive",
                                                    "attributeType": "Boolean",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Active" }, "args": {} }
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
                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                    "attribute": "DisplayName",
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
                                                        <$ConditionalVisibilityWrapper key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton2$visibility"
                                                            $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton2$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton2"
                                                                    $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton2"
                                                                    buttonId={"p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton2"}
                                                                    class={"mx-name-actionButton2 spacing-outer-right"}
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
                                                                        "action": { "type": "callMicroflow", "argMap": { "OpenAIDeployedModel": { "widget": "p.OpenAIConnector.OpenAIDeployedModel_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "Bnw83YOVrluycoiRjPKeGg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                        "abortOnServerValidation": true
                                                                    })} />
                                                            ]} />,
                                                        <$ConditionalVisibilityWrapper key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton4$visibility"
                                                            $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton4$visibility"
                                                            visible={ExpressionProperty({
                                                                "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                            })}
                                                            contents={[
                                                                <$ActionButton key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton4"
                                                                    $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton4"
                                                                    buttonId={"p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton4"}
                                                                    class={"mx-name-actionButton4"}
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
                                                                        "action": { "type": "callMicroflow", "argMap": { "OpenAIDeployedModel": { "widget": "p.OpenAIConnector.OpenAIDeployedModel_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "mkq5NuJKfle+RBZtMw9Bug", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
                                                "resizable": false,
                                                "draggable": false,
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
                                        onClickTrigger={"single"}
                                        onClick={ListActionProperty({
                                            "action": { "type": "callMicroflow", "argMap": { "OpenAIDeployedModel": { "widget": "p.OpenAIConnector.OpenAIDeployedModel_Overview.dataGrid21", "source": "object" } }, "config": { "operationId": "Bnw83YOVrluycoiRjPKeGg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                            "abortOnServerValidation": false,
                                            "dataSourceId": "p.4",
                                            "argumentTypes": { }
                                        })}
                                        onSelectionChange={undefined}
                                        columnsSortable={true}
                                        columnsResizable={true}
                                        columnsDraggable={true}
                                        columnsHidable={true}
                                        configurationStorageType={"attribute"}
                                        filtersPlaceholder={[
                                            <$DatagridTextFilter key="p.OpenAIConnector.OpenAIDeployedModel_Overview.textFilter1"
                                                $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.textFilter1"
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
                                                            "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                            "attribute": "DisplayName",
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
                                                            "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                            "attribute": "Model",
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
                                                            "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                            "attribute": "AzureApiVersion",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.4",
                                                            "isList": false
                                                        })
                                                    }
                                                ]}
                                                class={"mx-name-textFilter1 spacing-outer-top spacing-outer-bottom"}
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
                                    <$ActionButton key="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton1"
                                        $widgetId="p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton1"
                                        buttonId={"p.OpenAIConnector.OpenAIDeployedModel_Overview.actionButton1"}
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
    "Manage Deployed Models"
]);

export const classes = "";

export const cancelChangesOperationId = "6x4ztsZkDFWZzVXZXstRjQ";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
