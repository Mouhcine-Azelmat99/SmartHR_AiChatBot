import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectListProperty } from "mendix/AssociationObjectListProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
import { WebStaticImageProperty } from "mendix/WebStaticImageProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $RadioButtonGroup, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $Combobox, $Image } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, RadioButtonGroup, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, Combobox, Image });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1"
        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0"
                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MCPClient.MCPServerConfiguration_NewEdit.dataView1"
                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.15",
                                    "scope": "$MCPServerConfiguration",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.MCPClient.MCPServerConfiguration_NewEdit.textBox2$formGroup"
                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "Name",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p.MCPClient.MCPServerConfiguration_NewEdit.textBox1$formGroup"
                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "MCPEndpoint",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "MCP endpoint" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox1"
                                        })} />,
                                    <$FormGroup key="p.MCPClient.MCPServerConfiguration_NewEdit.textBox3$formGroup"
                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.textBox3$formGroup"
                                        class={"mx-name-textBox3 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "Version",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": { }
                                                })}
                                                isPassword={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                mask={""}
                                                readOnlyStyle={"control"}
                                                maxLength={200}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                onEnterKeyPress={undefined}
                                                ariaLabel={undefined}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Version" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.textBox3"
                                        })} />,
                                    <$FormGroup key="p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1$formGroup"
                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1$formGroup"
                                        class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                                                value={AttributeProperty({
                                                    "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MCPClient.MCPServerConfiguration",
                                                    "attribute": "ProtocolVersion",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                readOnlyStyle={"control"}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Protocol version" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.radioButtons1"
                                        })} />,
                                    <$DataView key="p.MCPClient.MCPServerConfiguration_NewEdit.dataView3"
                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.dataView3"
                                        class={"mx-name-dataView3 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={MicroflowObjectProperty({
                                            "dataSourceId": "p.30",
                                            "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView1",
                                            "editable": true,
                                            "operationId": "9v/zW+abTFWmrO5d/I4iaQ",
                                            "argMap": { "MCPServerConfiguration": { "widget": "$MCPServerConfiguration", "source": "object" } }
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$Container key="p.MCPClient.MCPServerConfiguration_NewEdit.container54"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.container54"
                                                class={"mx-name-container54 row-left"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.MCPClient.MCPServerConfiguration_NewEdit.text8"
                                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.text8"
                                                        class={"mx-name-text8 custom-control-label"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Get credentials microflow (optional)" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />,
                                                    <$Container key="p.MCPClient.MCPServerConfiguration_NewEdit.container55"
                                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.container55"
                                                        class={"mx-name-container55 icon-info-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Tooltip key="p.MCPClient.MCPServerConfiguration_NewEdit.tooltip9"
                                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.tooltip9"
                                                                trigger={[
                                                                    <$ConditionalVisibilityWrapper key="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28$visibility"
                                                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28"
                                                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28"
                                                                                buttonId={"p.MCPClient.MCPServerConfiguration_NewEdit.actionButton28"}
                                                                                class={"mx-name-actionButton28 spacing-outer-left spacing-outer-right"}
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
                                                                                    "icon": { "type": "image", "iconUrl": "img/MCPClient$Images_MCPClient$info_circle_grey.svg" }
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "zFtg1lfSLF63oiQ+hpeOXA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]}
                                                                renderMethod={"custom"}
                                                                htmlMessage={[
                                                                    <$Container key="p.MCPClient.MCPServerConfiguration_NewEdit.container109"
                                                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.container109"
                                                                        class={"mx-name-container109 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Text key="p.MCPClient.MCPServerConfiguration_NewEdit.text50"
                                                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.text50"
                                                                                class={"mx-name-text50 text-normal text-break text-small"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Select a microflow that contains credentials that can be used to authenticate to the MCP server. The microflow needs to return a list of System.HttpHeader objects. Input parameters are not allowed." }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                renderMode={"span"} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]}
                                                                textMessage={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                    })
                                                                ])}
                                                                tooltipPosition={"bottom"}
                                                                arrowPosition={"none"}
                                                                openOn={"hover"}
                                                                class={"mx-name-tooltip9 agent-tooltip"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$FormGroup key="p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1$formGroup"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1$formGroup"
                                                class={"mx-name-comboBox1"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
                                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.Microflow",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.2",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "MCPClient.MicroflowSelection",
                                                            "path": "",
                                                            "attribute": "MCPClient.MicroflowSelection_Microflow_Active",
                                                            "endpointEntity": "MCPClient.Microflow",
                                                            "selectableObjectsId": "p.2",
                                                            "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView3",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={AssociationObjectListProperty({
                                                            "dataSourceId": "p.2",
                                                            "entity": "MCPClient.Microflow",
                                                            "scope": "p.MCPClient.MCPServerConfiguration_NewEdit.dataView3",
                                                            "operationId": "TpkTqL7le12tlI5U3u4ISg",
                                                            "directPath": "MCPClient.MicroflowSelection_Microflow/MCPClient.Microflow"
                                                        })}
                                                        optionsSourceStaticDataSource={[]}
                                                        emptyOptionText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        filterType={"contains"}
                                                        noOptionsText={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                            })
                                                        ])}
                                                        clearable={true}
                                                        optionsSourceAssociationCustomContentType={"yes"}
                                                        optionsSourceAssociationCustomContent={TemplatedWidgetProperty({
                                                            "dataSourceId": "p.2",
                                                            "editable": false,
                                                            "children": () => [
                                                                <$Container key="p.MCPClient.MCPServerConfiguration_NewEdit.container6"
                                                                    $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.container6"
                                                                    class={"mx-name-container6 row-left"}
                                                                    style={undefined}
                                                                    renderMode={"div"}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$Image key="p.MCPClient.MCPServerConfiguration_NewEdit.staticImage2"
                                                                            $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.staticImage2"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/MCPClient$Images_MCPClient$microflow.svg" }
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
                                                                            class={"mx-name-staticImage2 img-22--22"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />,
                                                                        <$Text key="p.MCPClient.MCPServerConfiguration_NewEdit.text1"
                                                                            $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.text1"
                                                                            class={"mx-name-text1 spacing-outer-left-medium"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1", "source": "object" } } }
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
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.MCPClient.MCPServerConfiguration_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        hideFooter={false}
                                        footer={undefined} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1$visibility"
                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1"
                                                $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1"
                                                buttonId={"p.MCPClient.MCPServerConfiguration_NewEdit.actionButton1"}
                                                class={"mx-name-actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "MCPServerConfiguration": { "widget": "$MCPServerConfiguration", "source": "object" } }, "config": { "operationId": "gQiLYunnOlKI3HAhlnQQHg", "progress": { "message": t([ "Syncing MCP tools. This may take a while." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton2"
                                        $widgetId="p.MCPClient.MCPServerConfiguration_NewEdit.actionButton2"
                                        buttonId={"p.MCPClient.MCPServerConfiguration_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "QWH28v66x1WlBXvoEJ8O7w", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit MCP Server"
]);

export const classes = "";

export const cancelChangesOperationId = "yKGbPebffVCdfDXRGuBvow";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
