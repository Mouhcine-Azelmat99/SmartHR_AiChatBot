import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
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
import { Container } from "mendix/widgets/web/Container";
import * as DatagridWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagrid/Datagrid.mjs";
const Datagrid = Object.getOwnPropertyDescriptor(DatagridWidgetModule, "Datagrid")?.value || Object.getOwnPropertyDescriptor(DatagridWidgetModule, "default")?.value;   
import * as DatagridTextFilterWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/datagridtextfilter/DatagridTextFilter.mjs";
const DatagridTextFilter = Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "DatagridTextFilter")?.value || Object.getOwnPropertyDescriptor(DatagridTextFilterWidgetModule, "default")?.value;   
import { Div } from "mendix/widgets/web/Div";
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { ListView } from "mendix/widgets/web/ListView";
import * as PopupMenuWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/popupmenu/PopupMenu.mjs";
const PopupMenu = Object.getOwnPropertyDescriptor(PopupMenuWidgetModule, "PopupMenu")?.value || Object.getOwnPropertyDescriptor(PopupMenuWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/popupmenu/PopupMenu.css";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.Atlas_Default.js";

const { $Div, $Text, $Fragment, $ConditionalVisibilityWrapper, $ActionButton, $Datagrid, $ListView, $PopupMenu, $Image, $Container, $DatagridTextFilter } = asPluginWidgets({ Div, Text, Fragment, ConditionalVisibilityWrapper, ActionButton, Datagrid, ListView, PopupMenu, Image, Container, DatagridTextFilter });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MistralConnector.MistralConfiguration_Overview.layoutGrid1"
        $widgetId="p.MistralConnector.MistralConfiguration_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MistralConnector.MistralConfiguration_Overview.layoutGrid1$row0"
                $widgetId="p.MistralConnector.MistralConfiguration_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MistralConnector.MistralConfiguration_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.MistralConnector.MistralConfiguration_Overview.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$Text key="p.MistralConnector.MistralConfiguration_Overview.text1"
                                $widgetId="p.MistralConnector.MistralConfiguration_Overview.text1"
                                class={"mx-name-text1"}
                                style={undefined}
                                caption={t([
                                    ExpressionProperty({
                                        "expression": { "expr": { "type": "literal", "value": "Mistral configurations" }, "args": {} }
                                    })
                                ])}
                                renderMode={"h2"} />,
                            <$Fragment key="p.MistralConnector.MistralConfiguration_Overview.snippetCall1"
                                $widgetId="p.MistralConnector.MistralConfiguration_Overview.snippetCall1"
                                content={[
                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.Snippet_MistralConfigurations.actionButton6$visibility"
                                        $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton6$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MistralConnector.Snippet_MistralConfigurations.actionButton6"
                                                $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton6"
                                                buttonId={"p.MistralConnector.Snippet_MistralConfigurations.actionButton6"}
                                                class={"mx-name-actionButton6"}
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
                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "25eQH2uKKVSqO+UJfLY9CQ", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$Datagrid key="p.MistralConnector.Snippet_MistralConfigurations.dataGrid21"
                                        $widgetId="p.MistralConnector.Snippet_MistralConfigurations.dataGrid21"
                                        datasource={DatabaseObjectListProperty({
                                            "dataSourceId": "p.2",
                                            "entity": "MistralConnector.MistralConfiguration",
                                            "operationId": "SEKt/lAOJla4RSENZgq2PA",
                                            "sort": []
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
                                                    "entity": "MistralConnector.MistralConfiguration",
                                                    "attribute": "DisplayName",
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
                                                    "entity": "MistralConnector.MistralConfiguration",
                                                    "attribute": "Endpoint",
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
                                                        "expression": { "expr": { "type": "literal", "value": "Endpoint" }, "args": {} }
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
                                                    "entity": "MistralConnector.MistralConfiguration",
                                                    "attribute": "DisplayName",
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
                                                        <$ListView key="p.MistralConnector.Snippet_MistralConfigurations.listView1"
                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.listView1"
                                                            class={"mx-name-listView1 listview-horizontal listview-empty-deployed-models listview-stylingless listview-sm"}
                                                            style={undefined}
                                                            listValue={DatabaseObjectListProperty({
                                                                "dataSourceId": "p.3",
                                                                "entity": "MistralConnector.MistralDeployedModel",
                                                                "scope": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21",
                                                                "operationId": "9ONho0gdkVmI0OvEEoTMcQ",
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
                                                                        "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21"
                                                                    ],
                                                                    "CurrentObject": [
                                                                        "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21"
                                                                    ]
                                                                },
                                                                "constraints": { "type": "function", "name": "and", "parameters": [ { "type": "attribute", "attribute": "IsActive", "context": "MistralConnector.MistralDeployedModel", "attributeType": "Boolean" }, { "type": "relatedEntity", "left": { "type": "attribute", "attribute": "id", "context": "MistralConnector.MistralDeployedModel", "attributeType": "ObjectReference" }, "rightEntity": "OpenAIConnector.OpenAIDeployedModel", "rightEntityAlias": "OpenAIConnector.OpenAIDeployedModel", "right": { "type": "attribute", "attribute": "OpenAIConnector.OpenAIDeployedModel_Configuration", "context": "OpenAIConnector.OpenAIDeployedModel", "attributeType": "ObjectReference" }, "next": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "id", "context": "OpenAIConnector.OpenAIDeployedModel", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" } ] } } ] }
                                                            })}
                                                            itemTemplate={TemplatedWidgetProperty({
                                                                "dataSourceId": "p.3",
                                                                "editable": false,
                                                                "children": () => [
                                                                    <$Text key="p.MistralConnector.Snippet_MistralConfigurations.text1"
                                                                        $widgetId="p.MistralConnector.Snippet_MistralConfigurations.text1"
                                                                        class={"mx-name-text1"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.listView1", "source": "object" } } }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />
                                                                ]
                                                            })}
                                                            onClick={undefined}
                                                            pageSize={22} />
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
                                                        "expression": { "expr": { "type": "literal", "value": "Deployed models" }, "args": {} }
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
                                                "hidable": "yes",
                                                "allowEventPropagation": false,
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
                                                    "entity": "MistralConnector.MistralConfiguration",
                                                    "attribute": "DisplayName",
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
                                                        <$PopupMenu key="p.MistralConnector.Snippet_MistralConfigurations.pop_upMenu1"
                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.pop_upMenu1"
                                                            advancedMode={true}
                                                            menuTrigger={[
                                                                <$Image key="p.MistralConnector.Snippet_MistralConfigurations.image1"
                                                                    $widgetId="p.MistralConnector.Snippet_MistralConfigurations.image1"
                                                                    datasource={"icon"}
                                                                    imageObject={undefined}
                                                                    defaultImageDynamic={undefined}
                                                                    imageUrl={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                        })
                                                                    ])}
                                                                    imageIcon={WebIconProperty({
                                                                        "icon": { "type": "image", "iconUrl": "img/OpenAIConnector$Image_collection$ellipsis.svg" }
                                                                    })}
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
                                                                    class={"mx-name-image1"}
                                                                    style={undefined}
                                                                    tabIndex={undefined} />
                                                            ]}
                                                            basicItems={[]}
                                                            customItems={[
                                                                {
                                                                    "content": [
                                                                        <$Container key="p.MistralConnector.Snippet_MistralConfigurations.container3"
                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.container3"
                                                                            class={"mx-name-container3 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.MistralConnector.Snippet_MistralConfigurations.actionButton2$visibility"
                                                                                    $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton2$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$ActionButton key="p.MistralConnector.Snippet_MistralConfigurations.actionButton2"
                                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton2"
                                                                                            buttonId={"p.MistralConnector.Snippet_MistralConfigurations.actionButton2"}
                                                                                            class={"mx-name-actionButton2 btn-without-border btn-no-hover"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined}
                                                                                            renderType={"link"}
                                                                                            role={"button"}
                                                                                            buttonClass={"btn-default"}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Edit configuration" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            tooltip={TextProperty({
                                                                                                "value": t([
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            icon={WebIconProperty({
                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-pencil" }
                                                                                            })}
                                                                                            action={ActionProperty({
                                                                                                "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "FwhZ5oM8ilWcEpoB3puu6g", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                "abortOnServerValidation": true
                                                                                            })} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ],
                                                                    "visible": ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                    }),
                                                                    "action": undefined
                                                                },
                                                                {
                                                                    "content": [
                                                                        <$Container key="p.MistralConnector.Snippet_MistralConfigurations.container4"
                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.container4"
                                                                            class={"mx-name-container4 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.MistralConnector.Snippet_MistralConfigurations.actionButton3$visibility"
                                                                                    $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton3$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$ActionButton key="p.MistralConnector.Snippet_MistralConfigurations.actionButton3"
                                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton3"
                                                                                            buttonId={"p.MistralConnector.Snippet_MistralConfigurations.actionButton3"}
                                                                                            class={"mx-name-actionButton3 btn-without-border btn-no-hover"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined}
                                                                                            renderType={"link"}
                                                                                            role={"button"}
                                                                                            buttonClass={"btn-default"}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Manage deployed models" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            tooltip={TextProperty({
                                                                                                "value": t([
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            icon={WebIconProperty({
                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-th-list" }
                                                                                            })}
                                                                                            action={ActionProperty({
                                                                                                "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "3lE3zfoe91u0/zMVPls3wg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                "abortOnServerValidation": true
                                                                                            })} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ],
                                                                    "visible": ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                    }),
                                                                    "action": undefined
                                                                },
                                                                {
                                                                    "content": [
                                                                        <$Container key="p.MistralConnector.Snippet_MistralConfigurations.container7"
                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.container7"
                                                                            class={"mx-name-container7 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.MistralConnector.Snippet_MistralConfigurations.actionButton4$visibility"
                                                                                    $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton4$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$ActionButton key="p.MistralConnector.Snippet_MistralConfigurations.actionButton4"
                                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton4"
                                                                                            buttonId={"p.MistralConnector.Snippet_MistralConfigurations.actionButton4"}
                                                                                            class={"mx-name-actionButton4 btn-without-border btn-no-hover"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined}
                                                                                            renderType={"link"}
                                                                                            role={"button"}
                                                                                            buttonClass={"btn-default"}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Duplicate" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            tooltip={TextProperty({
                                                                                                "value": t([
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            icon={WebIconProperty({
                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-plus" }
                                                                                            })}
                                                                                            action={ActionProperty({
                                                                                                "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration_Existing": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "twVQQ+NDkF+4/7A2o9Pnvg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                "abortOnServerValidation": true
                                                                                            })} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ],
                                                                    "visible": ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                    }),
                                                                    "action": undefined
                                                                },
                                                                {
                                                                    "content": [
                                                                        <$Container key="p.MistralConnector.Snippet_MistralConfigurations.container6"
                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.container6"
                                                                            class={"mx-name-container6 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.MistralConnector.Snippet_MistralConfigurations.actionButton11$visibility"
                                                                                    $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton11$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$ActionButton key="p.MistralConnector.Snippet_MistralConfigurations.actionButton11"
                                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton11"
                                                                                            buttonId={"p.MistralConnector.Snippet_MistralConfigurations.actionButton11"}
                                                                                            class={"mx-name-actionButton11 btn-without-border btn-no-hover"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined}
                                                                                            renderType={"link"}
                                                                                            role={"button"}
                                                                                            buttonClass={"btn-default"}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Test" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            tooltip={TextProperty({
                                                                                                "value": t([
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            icon={WebIconProperty({
                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-play-circle" }
                                                                                            })}
                                                                                            action={ActionProperty({
                                                                                                "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "1Qdr1voRL1WsNuw15TENLA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                "abortOnServerValidation": true
                                                                                            })} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ],
                                                                    "visible": ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                    }),
                                                                    "action": undefined
                                                                },
                                                                {
                                                                    "content": [
                                                                        <$Container key="p.MistralConnector.Snippet_MistralConfigurations.container8"
                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.container8"
                                                                            class={"mx-name-container8 popupmenu-custom-item-container spacing-outer-top-none spacing-outer-bottom-none"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$ConditionalVisibilityWrapper key="p.MistralConnector.Snippet_MistralConfigurations.actionButton12$visibility"
                                                                                    $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton12$visibility"
                                                                                    visible={ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                    })}
                                                                                    contents={[
                                                                                        <$ActionButton key="p.MistralConnector.Snippet_MistralConfigurations.actionButton12"
                                                                                            $widgetId="p.MistralConnector.Snippet_MistralConfigurations.actionButton12"
                                                                                            buttonId={"p.MistralConnector.Snippet_MistralConfigurations.actionButton12"}
                                                                                            class={"mx-name-actionButton12 btn-without-border btn-no-hover"}
                                                                                            style={undefined}
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
                                                                                                    ""
                                                                                                ])
                                                                                            })}
                                                                                            icon={WebIconProperty({
                                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                                            })}
                                                                                            action={ActionProperty({
                                                                                                "action": { "type": "callMicroflow", "argMap": { "Configuration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "a/rltKwOJF+2hp7/gjNIIA", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                "abortOnServerValidation": true
                                                                                            })} />
                                                                                    ]} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ],
                                                                    "visible": ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": true }, "args": {} }
                                                                    }),
                                                                    "action": undefined
                                                                }
                                                            ]}
                                                            trigger={"onhover"}
                                                            position={"left"}
                                                            menuToggle={false}
                                                            hoverCloseOn={"onHoverLeave"}
                                                            class={"mx-name-pop_upMenu1 popupmenu-custom-item-hover popupmenu--display-flex"}
                                                            style={undefined}
                                                            tabIndex={undefined} />
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
                                            "action": { "type": "callMicroflow", "argMap": { "MistralConfiguration": { "widget": "p.MistralConnector.Snippet_MistralConfigurations.dataGrid21", "source": "object" } }, "config": { "operationId": "FwhZ5oM8ilWcEpoB3puu6g", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                            "abortOnServerValidation": false,
                                            "dataSourceId": "p.2",
                                            "argumentTypes": { }
                                        })}
                                        onSelectionChange={undefined}
                                        columnsSortable={true}
                                        columnsResizable={true}
                                        columnsDraggable={true}
                                        columnsHidable={true}
                                        configurationStorageType={"attribute"}
                                        filtersPlaceholder={[
                                            <$DatagridTextFilter key="p.MistralConnector.Snippet_MistralConfigurations.textFilter1"
                                                $widgetId="p.MistralConnector.Snippet_MistralConfigurations.textFilter1"
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
                                                            "entity": "MistralConnector.MistralConfiguration",
                                                            "attribute": "DisplayName",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.2",
                                                            "isList": false
                                                        })
                                                    },
                                                    {
                                                        "attribute": AttributeMetaDataProperty({
                                                            "path": "",
                                                            "entity": "MistralConnector.MistralConfiguration",
                                                            "attribute": "Endpoint",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.2",
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
                                        class={"mx-name-dataGrid21 datagrid--no-scroll table-hover"}
                                        style={undefined}
                                        tabIndex={undefined} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Configuration Overview"
]);

export const classes = "layout-atlas layout-atlas-responsive-default";

export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.Atlas_Default.Main": region$Main,
};
