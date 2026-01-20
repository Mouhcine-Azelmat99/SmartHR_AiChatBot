import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Fragment } from "mendix/widgets/web/Fragment";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $Fragment, $FormGroup, $Combobox, $ConditionalVisibilityWrapper, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Text, Fragment, FormGroup, Combobox, ConditionalVisibilityWrapper, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.Agent_SelectVersion.layoutGrid1"
        $widgetId="p.AgentCommons.Agent_SelectVersion.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0"
                $widgetId="p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.Agent_SelectVersion.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.Agent_SelectVersion.dataView2"
                                $widgetId="p.AgentCommons.Agent_SelectVersion.dataView2"
                                class={"mx-name-dataView2 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.13",
                                    "scope": "$Agent",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.Agent_SelectVersion.container3"
                                        $widgetId="p.AgentCommons.Agent_SelectVersion.container3"
                                        class={"mx-name-container3 spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.Agent_SelectVersion.text1"
                                                $widgetId="p.AgentCommons.Agent_SelectVersion.text1"
                                                class={"mx-name-text1 text-detail"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Select the version you want to use from the options below." }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$Container key="p.AgentCommons.Agent_SelectVersion.container1"
                                        $widgetId="p.AgentCommons.Agent_SelectVersion.container1"
                                        class={"mx-name-container1 spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Fragment key="p.AgentCommons.Agent_SelectVersion.snippetCall1"
                                                $widgetId="p.AgentCommons.Agent_SelectVersion.snippetCall1"
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
                                                                    "entity": "AgentCommons.Agent",
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
                                                                    "operationId": "eb9exQ5ZV1Gin7+JWC1Ofw"
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
                                        ariaHidden={false} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.Agent_SelectVersion.container2"
                                        $widgetId="p.AgentCommons.Agent_SelectVersion.container2"
                                        class={"mx-name-container2 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.Agent_SelectVersion.actionButton2"
                                                $widgetId="p.AgentCommons.Agent_SelectVersion.actionButton2"
                                                buttonId={"p.AgentCommons.Agent_SelectVersion.actionButton2"}
                                                class={"mx-name-actionButton2"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Cancel" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "wG5Ix6XuE1qxos9Ya6kgzA", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Agent_SelectVersion.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.Agent_SelectVersion.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.Agent_SelectVersion.actionButton1"
                                                        $widgetId="p.AgentCommons.Agent_SelectVersion.actionButton1"
                                                        buttonId={"p.AgentCommons.Agent_SelectVersion.actionButton1"}
                                                        class={"mx-name-actionButton1"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-primary"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Select" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" } }, "config": { "operationId": "m8YizBKkGF6IxBkwxjxm/w", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Select version in use"
]);

export const classes = "";

export const cancelChangesOperationId = "n1xHQo9lzFCXHrYPUcs/LA";
export const closeButton = "p.AgentCommons.Agent_SelectVersion.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
