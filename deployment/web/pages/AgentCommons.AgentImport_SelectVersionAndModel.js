import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

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
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Fragment, $FormGroup, $Combobox, $Text, $ConditionalVisibilityWrapper, $Image, $ActionButton } = asPluginWidgets({ Div, DataView, Container, Fragment, FormGroup, Combobox, Text, ConditionalVisibilityWrapper, Image, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.AgentImport_SelectVersionAndModel.layoutGrid1"
        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.AgentImport_SelectVersionAndModel.layoutGrid1$row0"
                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.AgentImport_SelectVersionAndModel.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.AgentImport_SelectVersionAndModel.dataView2"
                                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.dataView2"
                                class={"mx-name-dataView2 dataview-without-border form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.14",
                                    "scope": "$Agent",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.AgentImport_SelectVersionAndModel.container1"
                                        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.container1"
                                        class={"mx-name-container1 spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Fragment key="p.AgentCommons.AgentImport_SelectVersionAndModel.snippetCall2"
                                                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.snippetCall2"
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
                                                                    "operationId": "ymMVdmvvMVej0Yyx759F7w"
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
                                        ariaHidden={false} />,
                                    <$Container key="p.AgentCommons.AgentImport_SelectVersionAndModel.container5"
                                        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.container5"
                                        class={"mx-name-container5 spacing-outer-top-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$DataView key="p.AgentCommons.AgentImport_SelectVersionAndModel.dataView1"
                                                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.dataView1"
                                                class={"mx-name-dataView1 form-vertical"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                object={AssociationObjectProperty({
                                                    "dataSourceId": "p.39",
                                                    "scope": "$Agent",
                                                    "editable": true,
                                                    "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version",
                                                    "operationId": "BYgzt7044FW1eR/MeL/v8A"
                                                })}
                                                emptyMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                body={[
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImport_SelectVersionAndModel.container3$visibility"
                                                        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.container3$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "dataView2", "path": "AgentCommons.Agent_Version_InUse" }, { "type": "literal", "value": null } ] }, "args": { "dataView2": { "widget": "p.AgentCommons.AgentImport_SelectVersionAndModel.dataView2", "source": "object" } } }
                                                        })}
                                                        contents={[
                                                            <$Container key="p.AgentCommons.AgentImport_SelectVersionAndModel.container3"
                                                                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.container3"
                                                                class={"mx-name-container3"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$FormGroup key="p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1$formGroup"
                                                                        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1$formGroup"
                                                                        class={"mx-name-comboBox1 combobox-model-selection"}
                                                                        style={undefined}
                                                                        control={[
                                                                            <$Combobox key="p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1"
                                                                                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1"
                                                                                source={"context"}
                                                                                optionsSourceType={"association"}
                                                                                optionsSourceDatabaseDataSource={undefined}
                                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                                optionsSourceDatabaseDefaultValue={undefined}
                                                                                attributeAssociation={AssociationProperty({
                                                                                    "type": "Reference",
                                                                                    "entity": "AgentCommons.Version",
                                                                                    "path": "",
                                                                                    "attribute": "AgentCommons.Version_DeployedModel",
                                                                                    "endpointEntity": "GenAICommons.DeployedModel",
                                                                                    "selectableObjectsId": "p.1",
                                                                                    "scope": "p.AgentCommons.AgentImport_SelectVersionAndModel.dataView1",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                                })}
                                                                                optionsSourceAssociationDataSource={MicroflowObjectListProperty({
                                                                                    "argMap": { "Agent": { "expression": { "expr": { "type": "variable", "variable": "Agent" }, "args": { "Agent": { "widget": "$Agent", "source": "object" } } }, "kind": "object" } },
                                                                                    "dataSourceId": "p.1",
                                                                                    "entity": "GenAICommons.DeployedModel",
                                                                                    "scope": "p.AgentCommons.AgentImport_SelectVersionAndModel.dataView1",
                                                                                    "operationId": "wFEKtzx+I1Og0THHsSsPTw"
                                                                                })}
                                                                                optionsSourceAssociationCaptionType={"attribute"}
                                                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "GenAICommons.DeployedModel",
                                                                                    "attribute": "DisplayName",
                                                                                    "attributeType": "String",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.1",
                                                                                    "isList": false
                                                                                })}
                                                                                optionsSourceAssociationCaptionExpression={undefined}
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
                                                                                    "dataSourceId": "p.1",
                                                                                    "editable": false,
                                                                                    "children": () => [
                                                                                        <$Container key="p.AgentCommons.AgentImport_SelectVersionAndModel.container11"
                                                                                            $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.container11"
                                                                                            class={"mx-name-container11 model-selection"}
                                                                                            style={undefined}
                                                                                            renderMode={"div"}
                                                                                            onClick={undefined}
                                                                                            content={[
                                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage1$visibility"
                                                                                                    $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage1$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "OpenAI" } ] } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Amazon" } ] } ] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Mistral" } ] } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Image key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage1"
                                                                                                            $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage1"
                                                                                                            datasource={"image"}
                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$mxcloud.svg" }
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
                                                                                                            class={"mx-name-staticImage1 img--22-22"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage2$visibility"
                                                                                                    $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage2$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "OpenAI" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Azure" } ] }, { "type": "literal", "value": false } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Image key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage2"
                                                                                                            $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage2"
                                                                                                            datasource={"image"}
                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$OpenAI_Icon.svg" }
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
                                                                                                            class={"mx-name-staticImage2 img--22-22"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage4$visibility"
                                                                                                    $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage4$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Azure" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Image key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage4"
                                                                                                            $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage4"
                                                                                                            datasource={"image"}
                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$azure.svg" }
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
                                                                                                            class={"mx-name-staticImage4 img--22-22"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage3$visibility"
                                                                                                    $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage3$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Amazon" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Image key="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage3"
                                                                                                            $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.staticImage3"
                                                                                                            datasource={"image"}
                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$Amazon_Bedrock_Icon.svg" }
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
                                                                                                            class={"mx-name-staticImage3 img--22-22"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />
                                                                                                    ]} />,
                                                                                                <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImport_SelectVersionAndModel.image37$visibility"
                                                                                                    $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.image37$visibility"
                                                                                                    visible={ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Mistral" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1", "source": "object" } } }
                                                                                                    })}
                                                                                                    contents={[
                                                                                                        <$Image key="p.AgentCommons.AgentImport_SelectVersionAndModel.image37"
                                                                                                            $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.image37"
                                                                                                            datasource={"image"}
                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$Mistral_Icon.png" }
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
                                                                                                            widthUnit={"pixels"}
                                                                                                            width={20}
                                                                                                            heightUnit={"pixels"}
                                                                                                            height={20}
                                                                                                            iconSize={14}
                                                                                                            displayAs={"fullImage"}
                                                                                                            responsive={true}
                                                                                                            class={"mx-name-image37 img--22-22"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />
                                                                                                    ]} />,
                                                                                                <$Text key="p.AgentCommons.AgentImport_SelectVersionAndModel.text1"
                                                                                                    $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.text1"
                                                                                                    class={"mx-name-text1"}
                                                                                                    style={undefined}
                                                                                                    caption={t([
                                                                                                        ExpressionProperty({
                                                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1", "source": "object" } } }
                                                                                                        })
                                                                                                    ])}
                                                                                                    renderMode={"span"} />
                                                                                            ]}
                                                                                            ariaHidden={false} />
                                                                                    ]
                                                                                })}
                                                                                optionsSourceDatabaseCustomContentType={"no"}
                                                                                staticDataSourceCustomContentType={"no"}
                                                                                showFooter={false}
                                                                                menuFooterContent={undefined}
                                                                                selectionMethod={"checkbox"}
                                                                                selectedItemsStyle={"text"}
                                                                                selectAllButton={false}
                                                                                selectAllButtonCaption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Select all" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                readOnlyStyle={"bordered"}
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
                                                                                    "widgetId": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1"
                                                                                })} />
                                                                        ]}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Model for the selected version" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1"
                                                                        })}
                                                                        width={undefined}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.AgentCommons.AgentImport_SelectVersionAndModel.comboBox1"
                                                                        })} />
                                                                ]}
                                                                ariaHidden={false} />
                                                        ]} />
                                                ]}
                                                hideFooter={false}
                                                footer={undefined} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.AgentImport_SelectVersionAndModel.container2"
                                        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.container2"
                                        class={"mx-name-container2 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton2"
                                                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton2"
                                                buttonId={"p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton2"}
                                                class={"mx-name-actionButton2"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-default"}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Not now" }, "args": {} }
                                                    })
                                                ])}
                                                tooltip={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                icon={undefined}
                                                action={ActionProperty({
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "3+P621wvXViaYrNw1K9nLA", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton1"
                                                        $widgetId="p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton1"
                                                        buttonId={"p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton1"}
                                                        class={"mx-name-actionButton1"}
                                                        style={undefined}
                                                        tabIndex={1}
                                                        renderType={"button"}
                                                        role={undefined}
                                                        buttonClass={"btn-primary"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Confirm" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "Agent": { "widget": "$Agent", "source": "object" }, "Version": { "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "AgentCommons.Agent_Version_InUse/AgentCommons.Version" }, "args": { "currentObject": { "widget": "$Agent", "source": "object" } } }, "kind": "object" } }, "config": { "operationId": "JB49yc+5P1KoGsAdvPaBtA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Check Agent settings after import"
]);

export const classes = "";

export const cancelChangesOperationId = "TMsDupm2tFCXBlpGrxPKrA";
export const closeButton = "p.AgentCommons.AgentImport_SelectVersionAndModel.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
