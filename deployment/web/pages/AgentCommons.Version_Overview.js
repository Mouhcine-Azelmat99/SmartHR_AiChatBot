import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import { ListView } from "mendix/widgets/web/ListView";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $Fragment, $FormGroup, $Combobox, $ConditionalVisibilityWrapper, $ActionButton, $ListView } = asPluginWidgets({ Div, DataView, Container, Text, Fragment, FormGroup, Combobox, ConditionalVisibilityWrapper, ActionButton, ListView });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.Version_Overview.layoutGrid1"
        $widgetId="p.AgentCommons.Version_Overview.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.Version_Overview.layoutGrid1$row0"
                $widgetId="p.AgentCommons.Version_Overview.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Version_Overview.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.Version_Overview.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.Version_Overview.dataView1"
                                $widgetId="p.AgentCommons.Version_Overview.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.18",
                                    "scope": "$Agent",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.Version_Overview.container3"
                                        $widgetId="p.AgentCommons.Version_Overview.container3"
                                        class={"mx-name-container3 spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.Version_Overview.text3"
                                                $widgetId="p.AgentCommons.Version_Overview.text3"
                                                class={"mx-name-text3 text-detail"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Select the version you want to use from the options below." }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.AgentCommons.Version_Overview.container4"
                                        $widgetId="p.AgentCommons.Version_Overview.container4"
                                        class={"mx-name-container4 align-flex-end row-left spacing-outer-bottom-large"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$DataView key="p.AgentCommons.Version_Overview.dataView2"
                                                $widgetId="p.AgentCommons.Version_Overview.dataView2"
                                                class={"mx-name-dataView2 width--40-percent form-vertical"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={AssociationObjectProperty({
                                                    "dataSourceId": "p.27",
                                                    "scope": "$Version_InUse_Current",
                                                    "editable": true
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$Fragment key="p.AgentCommons.Version_Overview.snippetCall1"
                                                        $widgetId="p.AgentCommons.Version_Overview.snippetCall1"
                                                        content={[
                                                            <$FormGroup key="p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3$formGroup"
                                                                $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3$formGroup"
                                                                class={"mx-name-comboBox3 combobox-selection spacing-outer-bottom-none"}
                                                                style={undefined}
                                                                control={[
                                                                    <$Combobox key="p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                                                        $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                                                        source={"context"}
                                                                        optionsSourceType={"association"}
                                                                        optionsSourceDatabaseDataSource={undefined}
                                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                                        attributeAssociation={AssociationProperty({
                                                                            "type": "Reference",
                                                                            "entity": "AgentCommons.Version",
                                                                            "path": "",
                                                                            "attribute": "AgentCommons.Agent_Version_InUse",
                                                                            "endpointEntity": "AgentCommons.Version",
                                                                            "selectableObjectsId": "p.0",
                                                                            "scope": "$Agent",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                        })}
                                                                        optionsSourceAssociationDataSource={MicroflowObjectListProperty({
                                                                            "argMap": { "Agent": { "widget": "$Agent", "source": "object" } },
                                                                            "dataSourceId": "p.0",
                                                                            "entity": "AgentCommons.Version",
                                                                            "scope": "$Version_InUse_Current",
                                                                            "operationId": "mQpqps6xRVOf+q8P7yJYoQ"
                                                                        })}
                                                                        optionsSourceAssociationCaptionType={"expression"}
                                                                        optionsSourceAssociationCaptionExpression={ListExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "variable", "variable": "currentObject", "path": "VersionNumber" } ] }, { "type": "literal", "value": " " } ] }, { "type": "variable", "variable": "currentObject", "path": "Title" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" } } },
                                                                            "dataSourceId": "p.0"
                                                                        })}
                                                                        optionsSourceStaticDataSource={[]}
                                                                        emptyOptionText={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        filterType={"none"}
                                                                        noOptionsText={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        clearable={true}
                                                                        optionsSourceAssociationCustomContentType={"yes"}
                                                                        optionsSourceAssociationCustomContent={TemplatedWidgetProperty({
                                                                            "dataSourceId": "p.0",
                                                                            "editable": false,
                                                                            "children": () => [
                                                                                <$Container key="p.AgentCommons.Snippet_Agent_SelectVersion.container31"
                                                                                    $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.container31"
                                                                                    class={"mx-name-container31 item-selection row-left"}
                                                                                    style={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={undefined}
                                                                                    content={[
                                                                                        <$Text key="p.AgentCommons.Snippet_Agent_SelectVersion.text24"
                                                                                            $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.text24"
                                                                                            class={"mx-name-text24 text-bold spacing-outer-right"}
                                                                                            style={undefined}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" } } }
                                                                                                })
                                                                                            ])}
                                                                                            renderMode={"span"} />,
                                                                                        <$Text key="p.AgentCommons.Snippet_Agent_SelectVersion.text25"
                                                                                            $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.text25"
                                                                                            class={"mx-name-text25"}
                                                                                            style={undefined}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" } } }
                                                                                                })
                                                                                            ])}
                                                                                            renderMode={"span"} />,
                                                                                        <$ConditionalVisibilityWrapper key="p.AgentCommons.Snippet_Agent_SelectVersion.container5$visibility"
                                                                                            $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.container5$visibility"
                                                                                            visible={ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "variable", "variable": "Version_InUse_Current" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3", "source": "object" }, "Version_InUse_Current": { "widget": "$Version_InUse_Current", "source": "object" } } }
                                                                                            })}
                                                                                            contents={[
                                                                                                <$Container key="p.AgentCommons.Snippet_Agent_SelectVersion.container5"
                                                                                                    $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.container5"
                                                                                                    class={"mx-name-container5 badge-with-circle badge-with-circle--success"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Container key="p.AgentCommons.Snippet_Agent_SelectVersion.container6"
                                                                                                            $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.container6"
                                                                                                            class={"mx-name-container6 circle"}
                                                                                                            style={undefined}
                                                                                                            renderMode={"div"}
                                                                                                            onClick={undefined}
                                                                                                            content={undefined}
                                                                                                            ariaHidden={false} />,
                                                                                                        <$Text key="p.AgentCommons.Snippet_Agent_SelectVersion.text3"
                                                                                                            $widgetId="p.AgentCommons.Snippet_Agent_SelectVersion.text3"
                                                                                                            class={"mx-name-text3 badge-text text-small"}
                                                                                                            style={undefined}
                                                                                                            caption={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Currently in use" }, "args": {} }
                                                                                                                })
                                                                                                            ])}
                                                                                                            renderMode={"span"} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />
                                                                                            ]} />
                                                                                    ]}
                                                                                    ariaHidden={false} />
                                                                            ]
                                                                        })}
                                                                        optionsSourceDatabaseCustomContentType={"no"}
                                                                        staticDataSourceCustomContentType={"no"}
                                                                        showFooter={false}
                                                                        menuFooterContent={undefined}
                                                                        selectionMethod={"rowclick"}
                                                                        selectedItemsStyle={"text"}
                                                                        selectAllButton={false}
                                                                        selectAllButtonCaption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        readOnlyStyle={"text"}
                                                                        onChangeEvent={undefined}
                                                                        onEnterEvent={undefined}
                                                                        onLeaveEvent={undefined}
                                                                        ariaRequired={false}
                                                                        clearButtonAriaLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Clear selection" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        removeValueAriaLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Remove value" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        a11ySelectedValue={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Selected value:" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        a11yOptionsAvailable={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Number of options available:" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        a11yInstructions={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Use up and down arrow keys to navigate. Press Enter or Space Bar keys to select." }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        lazyLoading={true}
                                                                        loadingType={"spinner"}
                                                                        tabIndex={-1}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Agent version In use" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.AgentCommons.Snippet_Agent_SelectVersion.comboBox3"
                                                                })} />
                                                        ]} />
                                                ]}
                                                hideFooter={false}
                                                footer={undefined} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_Overview.actionButton5$visibility"
                                                $widgetId="p.AgentCommons.Version_Overview.actionButton5$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.Version_Overview.actionButton5"
                                                        $widgetId="p.AgentCommons.Version_Overview.actionButton5"
                                                        buttonId={"p.AgentCommons.Version_Overview.actionButton5"}
                                                        class={"mx-name-actionButton5 spacing-outer-left-medium"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-primary"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Save" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" } }, "config": { "operationId": "YygIHWoFkFCUwRJdToXHMw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.AgentCommons.Version_Overview.container43"
                                        $widgetId="p.AgentCommons.Version_Overview.container43"
                                        class={"mx-name-container43 version-table table-header"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.Version_Overview.text51"
                                                $widgetId="p.AgentCommons.Version_Overview.text51"
                                                class={"mx-name-text51 version-grid-item text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Text key="p.AgentCommons.Version_Overview.text52"
                                                $widgetId="p.AgentCommons.Version_Overview.text52"
                                                class={"mx-name-text52 text-title text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Title" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Text key="p.AgentCommons.Version_Overview.text53"
                                                $widgetId="p.AgentCommons.Version_Overview.text53"
                                                class={"mx-name-text53 text-in-use text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "In use" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Text key="p.AgentCommons.Version_Overview.text54"
                                                $widgetId="p.AgentCommons.Version_Overview.text54"
                                                class={"mx-name-text54 version-grid-item text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Owner" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Text key="p.AgentCommons.Version_Overview.text58"
                                                $widgetId="p.AgentCommons.Version_Overview.text58"
                                                class={"mx-name-text58 version-grid-item text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Last edited by" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Text key="p.AgentCommons.Version_Overview.text55"
                                                $widgetId="p.AgentCommons.Version_Overview.text55"
                                                class={"mx-name-text55 version-grid-item text-semibold"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Last edited" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$ListView key="p.AgentCommons.Version_Overview.listView3"
                                        $widgetId="p.AgentCommons.Version_Overview.listView3"
                                        class={"mx-name-listView3 listview-stylingless"}
                                        style={undefined}
                                        listValue={DatabaseObjectListProperty({
                                            "dataSourceId": "p.3",
                                            "entity": "AgentCommons.Version",
                                            "scope": "p.AgentCommons.Version_Overview.dataView1",
                                            "operationId": "vjheheUWglamlc6iUqLKrg",
                                            "sort": [],
                                            "arguments": {
                                                "currentObject": [
                                                    "$Agent"
                                                ]
                                            },
                                            "constraints": { "type": "function", "name": "and", "parameters": [ { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "AgentCommons.Version_Agent", "context": "AgentCommons.Version", "attributeType": "ObjectReference" }, { "type": "variable", "name": "currentObject" } ] }, { "type": "function", "name": "not", "parameters": [ { "type": "attribute", "attribute": "IsDraftVersion", "context": "AgentCommons.Version", "attributeType": "Boolean" } ] } ] }
                                        })}
                                        itemTemplate={TemplatedWidgetProperty({
                                            "dataSourceId": "p.3",
                                            "editable": false,
                                            "children": () => [
                                                <$Container key="p.AgentCommons.Version_Overview.container48"
                                                    $widgetId="p.AgentCommons.Version_Overview.container48"
                                                    class={"mx-name-container48 version-table spacing-outer-top-medium"}
                                                    style={undefined}
                                                    renderMode={"div"}
                                                    onClick={undefined}
                                                    content={[
                                                        <$Text key="p.AgentCommons.Version_Overview.text56"
                                                            $widgetId="p.AgentCommons.Version_Overview.text56"
                                                            class={"mx-name-text56 version-grid-item text-semibold"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "literal", "value": "v" }, { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "VersionNumber" }, { "type": "literal", "value": "{}" } ] } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"span"} />,
                                                        <$Text key="p.AgentCommons.Version_Overview.text57"
                                                            $widgetId="p.AgentCommons.Version_Overview.text57"
                                                            class={"mx-name-text57 version-grid-item"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Title" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"span"} />,
                                                        <$Container key="p.AgentCommons.Version_Overview.container6"
                                                            $widgetId="p.AgentCommons.Version_Overview.container6"
                                                            class={"mx-name-container6 version-grid-item"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_Overview.text1$visibility"
                                                                    $widgetId="p.AgentCommons.Version_Overview.text1$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "Version_InUse_Current" }, { "type": "variable", "variable": "currentObject" } ] }, "args": { "Version_InUse_Current": { "widget": "$Version_InUse_Current", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Text key="p.AgentCommons.Version_Overview.text1"
                                                                            $widgetId="p.AgentCommons.Version_Overview.text1"
                                                                            class={"mx-name-text1"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": " " }, "args": {} }
                                                                                })
                                                                            ])}
                                                                            renderMode={"span"} />
                                                                    ]} />,
                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_Overview.container1$visibility"
                                                                    $widgetId="p.AgentCommons.Version_Overview.container1$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "Version_InUse_Current" }, { "type": "variable", "variable": "currentObject" } ] }, "args": { "Version_InUse_Current": { "widget": "$Version_InUse_Current", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Container key="p.AgentCommons.Version_Overview.container1"
                                                                            $widgetId="p.AgentCommons.Version_Overview.container1"
                                                                            class={"mx-name-container1"}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$Container key="p.AgentCommons.Version_Overview.container2"
                                                                                    $widgetId="p.AgentCommons.Version_Overview.container2"
                                                                                    class={"mx-name-container2 badge--in-use"}
                                                                                    style={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={undefined}
                                                                                    content={[
                                                                                        <$Text key="p.AgentCommons.Version_Overview.text2"
                                                                                            $widgetId="p.AgentCommons.Version_Overview.text2"
                                                                                            class={"mx-name-text2 badge-text text-small"}
                                                                                            style={undefined}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "literal", "value": "In use" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            renderMode={"span"} />
                                                                                    ]}
                                                                                    ariaHidden={false} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ]} />
                                                            ]}
                                                            ariaHidden={false} />,
                                                        <$Text key="p.AgentCommons.Version_Overview.text59"
                                                            $widgetId="p.AgentCommons.Version_Overview.text59"
                                                            class={"mx-name-text59 version-grid-item"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "VersionOwner" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"span"} />,
                                                        <$Text key="p.AgentCommons.Version_Overview.text60"
                                                            $widgetId="p.AgentCommons.Version_Overview.text60"
                                                            class={"mx-name-text60 version-grid-item"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "LastChangedBy" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"span"} />,
                                                        <$Text key="p.AgentCommons.Version_Overview.text61"
                                                            $widgetId="p.AgentCommons.Version_Overview.text61"
                                                            class={"mx-name-text61 version-grid-item"}
                                                            style={undefined}
                                                            caption={t([
                                                                ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_format", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "VersionChangedDate" }, { "type": "literal", "value": "{\"type\":\"datetime\"}" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                })
                                                            ])}
                                                            renderMode={"span"} />,
                                                        <$Container key="p.AgentCommons.Version_Overview.container5"
                                                            $widgetId="p.AgentCommons.Version_Overview.container5"
                                                            class={"mx-name-container5 version-grid-item"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_Overview.actionButton1$visibility"
                                                                    $widgetId="p.AgentCommons.Version_Overview.actionButton1$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "dataView1", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "variable", "variable": "currentObject" } ] }, "else": { "type": "literal", "value": false } }, "args": { "dataView1": { "widget": "p.AgentCommons.Version_Overview.dataView1", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$ActionButton key="p.AgentCommons.Version_Overview.actionButton1"
                                                                            $widgetId="p.AgentCommons.Version_Overview.actionButton1"
                                                                            buttonId={"p.AgentCommons.Version_Overview.actionButton1"}
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
                                                                                    ""
                                                                                ])
                                                                            })}
                                                                            icon={WebIconProperty({
                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                            })}
                                                                            action={ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" }, "Agent": { "widget": "$Agent", "source": "object" }, "PageHelper": { "widget": "$PageHelper", "source": "object" } }, "config": { "operationId": "DLgPNrkNZVGctgA/rmyH7w", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                            })} />
                                                                    ]} />,
                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_Overview.actionButton3$visibility"
                                                                    $widgetId="p.AgentCommons.Version_Overview.actionButton3$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "dataView1", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "variable", "variable": "currentObject" } ] }, "else": { "type": "literal", "value": false } }, "args": { "dataView1": { "widget": "p.AgentCommons.Version_Overview.dataView1", "source": "object" }, "currentObject": { "widget": "p.AgentCommons.Version_Overview.listView3", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$ActionButton key="p.AgentCommons.Version_Overview.actionButton3"
                                                                            $widgetId="p.AgentCommons.Version_Overview.actionButton3"
                                                                            buttonId={"p.AgentCommons.Version_Overview.actionButton3"}
                                                                            class={"mx-name-actionButton3 delete-icon disabled"}
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
                                                                                    ""
                                                                                ])
                                                                            })}
                                                                            icon={WebIconProperty({
                                                                                "icon": { "type": "glyph", "iconClass": "glyphicon-trash" }
                                                                            })}
                                                                            action={ActionProperty({
                                                                                "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                "abortOnServerValidation": true
                                                                            })} />
                                                                    ]} />
                                                            ]}
                                                            ariaHidden={false} />
                                                    ]}
                                                    ariaHidden={false} />
                                            ]
                                        })}
                                        onClick={undefined}
                                        pageSize={10} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ActionButton key="p.AgentCommons.Version_Overview.actionButton2"
                                        $widgetId="p.AgentCommons.Version_Overview.actionButton2"
                                        buttonId={"p.AgentCommons.Version_Overview.actionButton2"}
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
    "Manage versions"
]);

export const classes = "popup-mid-size";

export const cancelChangesOperationId = "mRYJg1qlW12xUIPO3/gBvg";
export const closeButton = "p.AgentCommons.Version_Overview.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
