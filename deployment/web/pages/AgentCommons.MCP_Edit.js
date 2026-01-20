import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
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
import { Fragment } from "mendix/widgets/web/Fragment";
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import * as SwitchWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.mjs";
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.css";
import { Text } from "mendix/widgets/web/Text";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $Combobox, $Image, $Fragment, $Switch } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, Combobox, Image, Fragment, Switch });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.MCP_Edit.layoutGrid1"
        $widgetId="p.AgentCommons.MCP_Edit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.MCP_Edit.layoutGrid1$row0"
                $widgetId="p.AgentCommons.MCP_Edit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.MCP_Edit.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.MCP_Edit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.MCP_Edit.dataView6"
                                $widgetId="p.AgentCommons.MCP_Edit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.19",
                                    "scope": "$MCP",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.MCP_Edit.container3"
                                        $widgetId="p.AgentCommons.MCP_Edit.container3"
                                        class={"mx-name-container3"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.AgentCommons.MCP_Edit.container39"
                                                $widgetId="p.AgentCommons.MCP_Edit.container39"
                                                class={"mx-name-container39 row-left"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.AgentCommons.MCP_Edit.text3"
                                                        $widgetId="p.AgentCommons.MCP_Edit.text3"
                                                        class={"mx-name-text3 custom-control-label"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "MCP server configuration*" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />,
                                                    <$Container key="p.AgentCommons.MCP_Edit.container44"
                                                        $widgetId="p.AgentCommons.MCP_Edit.container44"
                                                        class={"mx-name-container44 icon-info-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Tooltip key="p.AgentCommons.MCP_Edit.tooltip3"
                                                                $widgetId="p.AgentCommons.MCP_Edit.tooltip3"
                                                                trigger={[
                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCP_Edit.actionButton22$visibility"
                                                                        $widgetId="p.AgentCommons.MCP_Edit.actionButton22$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AgentCommons.MCP_Edit.actionButton22"
                                                                                $widgetId="p.AgentCommons.MCP_Edit.actionButton22"
                                                                                buttonId={"p.AgentCommons.MCP_Edit.actionButton22"}
                                                                                class={"mx-name-actionButton22 spacing-outer-left spacing-outer-right"}
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
                                                                                    "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]}
                                                                renderMethod={"custom"}
                                                                htmlMessage={[
                                                                    <$Container key="p.AgentCommons.MCP_Edit.container103"
                                                                        $widgetId="p.AgentCommons.MCP_Edit.container103"
                                                                        class={"mx-name-container103 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Text key="p.AgentCommons.MCP_Edit.text45"
                                                                                $widgetId="p.AgentCommons.MCP_Edit.text45"
                                                                                class={"mx-name-text45 text-normal text-break text-small"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Select a configuration for the MCP server so the agent can use its exposed tools." }, "args": {} }
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
                                                                class={"mx-name-tooltip3 agent-tooltip"}
                                                                style={undefined}
                                                                tabIndex={undefined} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$FormGroup key="p.AgentCommons.MCP_Edit.comboBox2$formGroup"
                                                $widgetId="p.AgentCommons.MCP_Edit.comboBox2$formGroup"
                                                class={"mx-name-comboBox2 combobox-model-selection combobox-selection-height-small"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.AgentCommons.MCP_Edit.comboBox2"
                                                        $widgetId="p.AgentCommons.MCP_Edit.comboBox2"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "MCPClient.MCPServerConfiguration",
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
                                                            "entity": "AgentCommons.MCP",
                                                            "path": "",
                                                            "attribute": "AgentCommons.MCP_MCPServerConfiguration",
                                                            "endpointEntity": "MCPClient.MCPServerConfiguration",
                                                            "selectableObjectsId": "p.2",
                                                            "scope": "p.AgentCommons.MCP_Edit.dataView6",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.2",
                                                            "entity": "MCPClient.MCPServerConfiguration",
                                                            "scope": "p.AgentCommons.MCP_Edit.dataView6",
                                                            "operationId": "0WbkmswbD1W11AIXouMFrQ",
                                                            "sort": [
                                                                [
                                                                    "Name",
                                                                    "asc"
                                                                ]
                                                            ]
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
                                                                <$Container key="p.AgentCommons.MCP_Edit.container23"
                                                                    $widgetId="p.AgentCommons.MCP_Edit.container23"
                                                                    class={"mx-name-container23 model-selection"}
                                                                    style={undefined}
                                                                    renderMode={"div"}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$Image key="p.AgentCommons.MCP_Edit.image1"
                                                                            $widgetId="p.AgentCommons.MCP_Edit.image1"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$MCP_black.svg" }
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
                                                                            class={"mx-name-image1"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />,
                                                                        <$Text key="p.AgentCommons.MCP_Edit.text9"
                                                                            $widgetId="p.AgentCommons.MCP_Edit.text9"
                                                                            class={"mx-name-text9"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.MCP_Edit.comboBox2", "source": "object" } } }
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
                                                        tabIndex={undefined}
                                                        id={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AgentCommons.MCP_Edit.comboBox2"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.MCP_Edit.comboBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.AgentCommons.MCP_Edit.comboBox2"
                                                })} />,
                                            <$Container key="p.AgentCommons.MCP_Edit.container4"
                                                $widgetId="p.AgentCommons.MCP_Edit.container4"
                                                class={"mx-name-container4"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Fragment key="p.AgentCommons.MCP_Edit.snippetCall1"
                                                        $widgetId="p.AgentCommons.MCP_Edit.snippetCall1"
                                                        content={[
                                                            <$Container key="p.AgentCommons.Snippet_Tool_Enable.container8"
                                                                $widgetId="p.AgentCommons.Snippet_Tool_Enable.container8"
                                                                class={"mx-name-container8 col-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Container key="p.AgentCommons.Snippet_Tool_Enable.container48"
                                                                        $widgetId="p.AgentCommons.Snippet_Tool_Enable.container48"
                                                                        class={"mx-name-container48 row-left"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Text key="p.AgentCommons.Snippet_Tool_Enable.text6"
                                                                                $widgetId="p.AgentCommons.Snippet_Tool_Enable.text6"
                                                                                class={"mx-name-text6 custom-control-label"}
                                                                                style={undefined}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Enabled" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                renderMode={"span"} />,
                                                                            <$Container key="p.AgentCommons.Snippet_Tool_Enable.container49"
                                                                                $widgetId="p.AgentCommons.Snippet_Tool_Enable.container49"
                                                                                class={"mx-name-container49 icon-info-wrapper"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Tooltip key="p.AgentCommons.Snippet_Tool_Enable.tooltip7"
                                                                                        $widgetId="p.AgentCommons.Snippet_Tool_Enable.tooltip7"
                                                                                        trigger={[
                                                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Snippet_Tool_Enable.actionButton26$visibility"
                                                                                                $widgetId="p.AgentCommons.Snippet_Tool_Enable.actionButton26$visibility"
                                                                                                visible={ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                                })}
                                                                                                contents={[
                                                                                                    <$ActionButton key="p.AgentCommons.Snippet_Tool_Enable.actionButton26"
                                                                                                        $widgetId="p.AgentCommons.Snippet_Tool_Enable.actionButton26"
                                                                                                        buttonId={"p.AgentCommons.Snippet_Tool_Enable.actionButton26"}
                                                                                                        class={"mx-name-actionButton26 spacing-outer-left spacing-outer-right"}
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
                                                                                                            "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$info_circle_grey.svg" }
                                                                                                        })}
                                                                                                        action={ActionProperty({
                                                                                                            "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                                            "abortOnServerValidation": true
                                                                                                        })} />
                                                                                                ]} />
                                                                                        ]}
                                                                                        renderMethod={"custom"}
                                                                                        htmlMessage={[
                                                                                            <$Container key="p.AgentCommons.Snippet_Tool_Enable.container107"
                                                                                                $widgetId="p.AgentCommons.Snippet_Tool_Enable.container107"
                                                                                                class={"mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.AgentCommons.Snippet_Tool_Enable.text48"
                                                                                                        $widgetId="p.AgentCommons.Snippet_Tool_Enable.text48"
                                                                                                        class={"mx-name-text48 text-normal text-break text-small"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "The LLM is only aware of enabled tools and, as such, cannot call disabled tools. This holds for this Agent Builder interface as well as the Agent being used in the app logic. Disabling a tool can help during development to (temporarily) exclude a tool. It prevents having to add it back from scratch when it is needed again later." }, "args": {} }
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
                                                                                        class={"mx-name-tooltip7 agent-tooltip"}
                                                                                        style={undefined}
                                                                                        tabIndex={undefined} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        ariaHidden={false} />,
                                                                    <$FormGroup key="p.AgentCommons.Snippet_Tool_Enable.switch1$formGroup"
                                                                        $widgetId="p.AgentCommons.Snippet_Tool_Enable.switch1$formGroup"
                                                                        class={"mx-name-switch1 switch"}
                                                                        style={undefined}
                                                                        control={[
                                                                            <$Switch key="p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                                                $widgetId="p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                                                booleanAttribute={AttributeProperty({
                                                                                    "scope": "$MCP",
                                                                                    "path": "",
                                                                                    "entity": "AgentCommons.Tool",
                                                                                    "attribute": "IsEnabled",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                    "isList": false
                                                                                })}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                                                    "argumentTypes": { }
                                                                                })}
                                                                                tabIndex={undefined}
                                                                                id={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                                                })} />
                                                                        ]}
                                                                        caption={undefined}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                                        })}
                                                                        width={undefined}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.AgentCommons.Snippet_Tool_Enable.switch1"
                                                                        })} />
                                                                ]}
                                                                ariaHidden={false} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.MCP_Edit.container5"
                                        $widgetId="p.AgentCommons.MCP_Edit.container5"
                                        class={"mx-name-container5"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.AgentCommons.MCP_Edit.container2"
                                                $widgetId="p.AgentCommons.MCP_Edit.container2"
                                                class={"mx-name-container2 pull-left"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCP_Edit.actionButton18$visibility"
                                                        $widgetId="p.AgentCommons.MCP_Edit.actionButton18$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.MCP_Edit.actionButton18"
                                                                $widgetId="p.AgentCommons.MCP_Edit.actionButton18"
                                                                buttonId={"p.AgentCommons.MCP_Edit.actionButton18"}
                                                                class={"mx-name-actionButton18 btn-without-border-red"}
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
                                                                icon={WebIconProperty({
                                                                    "icon": { "type": "image", "iconUrl": "img/AgentCommons$Images_AgentBuilder$trash_can_red.svg" }
                                                                })}
                                                                action={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$MCP", "source": "object" } }, "config": { "operationId": "7ZdWmAvSvl2aSPXKla5uCw", "validate": "view", "confirmation": { "question": t([ "Are you sure?" ]), "proceed": t([ "Proceed" ]), "cancel": t([ "Cancel" ]) }, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Container key="p.AgentCommons.MCP_Edit.container1"
                                                $widgetId="p.AgentCommons.MCP_Edit.container1"
                                                class={"mx-name-container1 row-right"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ActionButton key="p.AgentCommons.MCP_Edit.actionButton2"
                                                        $widgetId="p.AgentCommons.MCP_Edit.actionButton2"
                                                        buttonId={"p.AgentCommons.MCP_Edit.actionButton2"}
                                                        class={"mx-name-actionButton2 spacing-outer-right-medium"}
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
                                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "rfMEnSDoTV6k2Y60bJz7iA", "closePage": true }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />,
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCP_Edit.actionButton1$visibility"
                                                        $widgetId="p.AgentCommons.MCP_Edit.actionButton1$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.MCP_Edit.actionButton1"
                                                                $widgetId="p.AgentCommons.MCP_Edit.actionButton1"
                                                                buttonId={"p.AgentCommons.MCP_Edit.actionButton1"}
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
                                                                    "action": { "type": "callMicroflow", "argMap": { "Tool": { "widget": "$MCP", "source": "object" } }, "config": { "operationId": "yH+ZbH0WqlmmX9zdgAUCkw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                    "abortOnServerValidation": true
                                                                })} />
                                                        ]} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit tool"
]);

export const classes = "";

export const cancelChangesOperationId = "DVMFzrX8klKelAgnRiLMZA";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
