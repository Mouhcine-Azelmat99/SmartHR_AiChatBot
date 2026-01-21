import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectListProperty } from "mendix/AssociationObjectListProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DatabaseObjectListProperty } from "mendix/DatabaseObjectListProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { DynamicClassProperty } from "mendix/DynamicClassProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";
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
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { ListView } from "mendix/widgets/web/ListView";
import * as SwitchWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.mjs";
const Switch = Object.getOwnPropertyDescriptor(SwitchWidgetModule, "Switch")?.value || Object.getOwnPropertyDescriptor(SwitchWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/custom/switch/Switch.css";
import { Text } from "mendix/widgets/web/Text";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $Combobox, $Image, $Switch, $ListView } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, Combobox, Image, Switch, ListView });

addEnumerations({
    "AgentCommons.MCP_ToolType": [
        [
            "Server",
            t([
                "Server"
            ])
        ],
        [
            "Tool",
            t([
                "Tool"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.MCPView_New.layoutGrid1"
        $widgetId="p.AgentCommons.MCPView_New.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.MCPView_New.layoutGrid1$row0"
                $widgetId="p.AgentCommons.MCPView_New.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.MCPView_New.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.MCPView_New.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.MCPView_New.dataView6"
                                $widgetId="p.AgentCommons.MCPView_New.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.26",
                                    "scope": "$MCPView",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.MCPView_New.container3"
                                        $widgetId="p.AgentCommons.MCPView_New.container3"
                                        class={"mx-name-container3"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.AgentCommons.MCPView_New.container39"
                                                $widgetId="p.AgentCommons.MCPView_New.container39"
                                                class={"mx-name-container39 row-left"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.AgentCommons.MCPView_New.text3"
                                                        $widgetId="p.AgentCommons.MCPView_New.text3"
                                                        class={"mx-name-text3 custom-control-label"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "MCP server configuration*" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />,
                                                    <$Container key="p.AgentCommons.MCPView_New.container44"
                                                        $widgetId="p.AgentCommons.MCPView_New.container44"
                                                        class={"mx-name-container44 icon-info-wrapper"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Tooltip key="p.AgentCommons.MCPView_New.tooltip3"
                                                                $widgetId="p.AgentCommons.MCPView_New.tooltip3"
                                                                trigger={[
                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.actionButton22$visibility"
                                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton22$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AgentCommons.MCPView_New.actionButton22"
                                                                                $widgetId="p.AgentCommons.MCPView_New.actionButton22"
                                                                                buttonId={"p.AgentCommons.MCPView_New.actionButton22"}
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
                                                                    <$Container key="p.AgentCommons.MCPView_New.container103"
                                                                        $widgetId="p.AgentCommons.MCPView_New.container103"
                                                                        class={"mx-name-container103 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Text key="p.AgentCommons.MCPView_New.text45"
                                                                                $widgetId="p.AgentCommons.MCPView_New.text45"
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
                                            <$FormGroup key="p.AgentCommons.MCPView_New.comboBox2$formGroup"
                                                $widgetId="p.AgentCommons.MCPView_New.comboBox2$formGroup"
                                                class={"mx-name-comboBox2 combobox-model-selection combobox-selection-height-small"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.AgentCommons.MCPView_New.comboBox2"
                                                        $widgetId="p.AgentCommons.MCPView_New.comboBox2"
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
                                                            "entity": "AgentCommons.MCPView",
                                                            "path": "",
                                                            "attribute": "AgentCommons.MCPView_MCPServerConfiguration",
                                                            "endpointEntity": "MCPClient.MCPServerConfiguration",
                                                            "selectableObjectsId": "p.2",
                                                            "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                        })}
                                                        optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                            "dataSourceId": "p.2",
                                                            "entity": "MCPClient.MCPServerConfiguration",
                                                            "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                            "operationId": "IVsgiWps0lS9412lhyRlXg",
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
                                                                <$Container key="p.AgentCommons.MCPView_New.container23"
                                                                    $widgetId="p.AgentCommons.MCPView_New.container23"
                                                                    class={"mx-name-container23 model-selection"}
                                                                    style={undefined}
                                                                    renderMode={"div"}
                                                                    onClick={undefined}
                                                                    content={[
                                                                        <$Image key="p.AgentCommons.MCPView_New.image1"
                                                                            $widgetId="p.AgentCommons.MCPView_New.image1"
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
                                                                        <$Text key="p.AgentCommons.MCPView_New.text9"
                                                                            $widgetId="p.AgentCommons.MCPView_New.text9"
                                                                            class={"mx-name-text9"}
                                                                            style={undefined}
                                                                            caption={t([
                                                                                ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.comboBox2", "source": "object" } } }
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
                                                        onChangeEvent={ActionProperty({
                                                            "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "W4JaSEYM7lWl16p6X1T09w", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                            "argumentTypes": { }
                                                        })}
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
                                                            "widgetId": "p.AgentCommons.MCPView_New.comboBox2"
                                                        })} />
                                                ]}
                                                caption={undefined}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.MCPView_New.comboBox2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.AgentCommons.MCPView_New.comboBox2"
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.container7$visibility"
                                                $widgetId="p.AgentCommons.MCPView_New.container7$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "currentObject" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.AgentCommons.MCPView_New.container7"
                                                        $widgetId="p.AgentCommons.MCPView_New.container7"
                                                        class={"mx-name-container7 spacing-outer-top-none spacing-inner-top"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Container key="p.AgentCommons.MCPView_New.container40"
                                                                $widgetId="p.AgentCommons.MCPView_New.container40"
                                                                class={"mx-name-container40 row-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.MCPView_New.text4"
                                                                        $widgetId="p.AgentCommons.MCPView_New.text4"
                                                                        class={"mx-name-text4 custom-control-label"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Import type*" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        renderMode={"span"} />,
                                                                    <$Container key="p.AgentCommons.MCPView_New.container45"
                                                                        $widgetId="p.AgentCommons.MCPView_New.container45"
                                                                        class={"mx-name-container45 icon-info-wrapper"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Tooltip key="p.AgentCommons.MCPView_New.tooltip4"
                                                                                $widgetId="p.AgentCommons.MCPView_New.tooltip4"
                                                                                trigger={[
                                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.actionButton23$visibility"
                                                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton23$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$ActionButton key="p.AgentCommons.MCPView_New.actionButton23"
                                                                                                $widgetId="p.AgentCommons.MCPView_New.actionButton23"
                                                                                                buttonId={"p.AgentCommons.MCPView_New.actionButton23"}
                                                                                                class={"mx-name-actionButton23 spacing-outer-left spacing-outer-right"}
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
                                                                                    <$Container key="p.AgentCommons.MCPView_New.container104"
                                                                                        $widgetId="p.AgentCommons.MCPView_New.container104"
                                                                                        class={"mx-name-container104 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Text key="p.AgentCommons.MCPView_New.text46"
                                                                                                $widgetId="p.AgentCommons.MCPView_New.text46"
                                                                                                class={"mx-name-text46 text-normal text-break text-small"}
                                                                                                style={undefined}
                                                                                                caption={t([
                                                                                                    ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Select how you would like to import this server's tools. You can either add all the tools of this server by selecting \"Server\" or you can add individual tools in this server by selecting \"Tool\"." }, "args": {} }
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
                                                                                class={"mx-name-tooltip4 agent-tooltip"}
                                                                                style={undefined}
                                                                                tabIndex={undefined} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$Container key="p.AgentCommons.MCPView_New.container10"
                                                                $widgetId="p.AgentCommons.MCPView_New.container10"
                                                                class={"mx-name-container10 segmented-control"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.actionButton7$visibility"
                                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton7$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Server" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AgentCommons.MCPView_New.actionButton7"
                                                                                $widgetId="p.AgentCommons.MCPView_New.actionButton7"
                                                                                buttonId={"p.AgentCommons.MCPView_New.actionButton7"}
                                                                                class={"mx-name-actionButton7"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"button"}
                                                                                role={undefined}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Server" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.actionButton6$visibility"
                                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton6$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Tool" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": null } ] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AgentCommons.MCPView_New.actionButton6"
                                                                                $widgetId="p.AgentCommons.MCPView_New.actionButton6"
                                                                                buttonId={"p.AgentCommons.MCPView_New.actionButton6"}
                                                                                class={DynamicClassProperty({
                                                                                    "staticClasses": "mx-name-actionButton6",
                                                                                    "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": null } ] }, "then": { "type": "literal", "value": "border-right" }, "else": { "type": "literal", "value": "" } }, "args": { "currentObject": { "widget": "$MCPView", "source": "object" } } }
                                                                                })}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"button"}
                                                                                role={undefined}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Server" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "rCSJMZneZ1KImyX7wuZOjg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.actionButton8$visibility"
                                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton8$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Server" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": null } ] } }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AgentCommons.MCPView_New.actionButton8"
                                                                                $widgetId="p.AgentCommons.MCPView_New.actionButton8"
                                                                                buttonId={"p.AgentCommons.MCPView_New.actionButton8"}
                                                                                class={"mx-name-actionButton8"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"button"}
                                                                                role={undefined}
                                                                                buttonClass={"btn-default"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Tool" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "MjX9PnUbrViIitb9Kfk93Q", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.actionButton9$visibility"
                                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton9$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Tool" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.AgentCommons.MCPView_New.actionButton9"
                                                                                $widgetId="p.AgentCommons.MCPView_New.actionButton9"
                                                                                buttonId={"p.AgentCommons.MCPView_New.actionButton9"}
                                                                                class={"mx-name-actionButton9"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"button"}
                                                                                role={undefined}
                                                                                buttonClass={"btn-primary"}
                                                                                caption={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Tool" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                tooltip={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": {}, "config": { "operationId": "Wokkt+t3ClyPUSP3ZLk51A", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$FormGroup key="p.AgentCommons.MCPView_New.comboBox1$formGroup"
                                                                $widgetId="p.AgentCommons.MCPView_New.comboBox1$formGroup"
                                                                class={"mx-name-comboBox1 combobox-hidden-with-validation"}
                                                                style={undefined}
                                                                control={[
                                                                    <$Combobox key="p.AgentCommons.MCPView_New.comboBox1"
                                                                        $widgetId="p.AgentCommons.MCPView_New.comboBox1"
                                                                        source={"context"}
                                                                        optionsSourceType={"enumeration"}
                                                                        attributeEnumeration={AttributeProperty({
                                                                            "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                                            "path": "",
                                                                            "entity": "AgentCommons.MCPView",
                                                                            "attribute": "ToolType",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false
                                                                        })}
                                                                        optionsSourceDatabaseDataSource={undefined}
                                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                                        optionsSourceAssociationDataSource={undefined}
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
                                                                        optionsSourceAssociationCustomContentType={"no"}
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
                                                                            "widgetId": "p.AgentCommons.MCPView_New.comboBox1"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.AgentCommons.MCPView_New.comboBox1"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.AgentCommons.MCPView_New.comboBox1"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.container6$visibility"
                                                $widgetId="p.AgentCommons.MCPView_New.container6$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "currentObject" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolType" }, { "type": "literal", "value": "Tool" } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.AgentCommons.MCPView_New.container6"
                                                        $widgetId="p.AgentCommons.MCPView_New.container6"
                                                        class={"mx-name-container6 spacing-outer-top-none spacing-inner-top"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Container key="p.AgentCommons.MCPView_New.container2"
                                                                $widgetId="p.AgentCommons.MCPView_New.container2"
                                                                class={"mx-name-container2 spacing-outer-bottom"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Div key="p.AgentCommons.MCPView_New.layoutGrid2"
                                                                        $widgetId="p.AgentCommons.MCPView_New.layoutGrid2"
                                                                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.AgentCommons.MCPView_New.layoutGrid2$row0"
                                                                                $widgetId="p.AgentCommons.MCPView_New.layoutGrid2$row0"
                                                                                class={"row align-children-center"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$Div key="p.AgentCommons.MCPView_New.layoutGrid2$row0$column0"
                                                                                        $widgetId="p.AgentCommons.MCPView_New.layoutGrid2$row0$column0"
                                                                                        class={"col-lg col-md col"}
                                                                                        style={undefined}
                                                                                        content={[
                                                                                            <$Container key="p.AgentCommons.MCPView_New.container12"
                                                                                                $widgetId="p.AgentCommons.MCPView_New.container12"
                                                                                                class={"mx-name-container12 row-left"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.AgentCommons.MCPView_New.text8"
                                                                                                        $widgetId="p.AgentCommons.MCPView_New.text8"
                                                                                                        class={"mx-name-text8 custom-control-label spacing-outer-bottom-none"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Tools" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]} />,
                                                                                    <$Div key="p.AgentCommons.MCPView_New.layoutGrid2$row0$column1"
                                                                                        $widgetId="p.AgentCommons.MCPView_New.layoutGrid2$row0$column1"
                                                                                        class={"col-lg col-md col"}
                                                                                        style={undefined}
                                                                                        content={[
                                                                                            <$Container key="p.AgentCommons.MCPView_New.container13"
                                                                                                $widgetId="p.AgentCommons.MCPView_New.container13"
                                                                                                class={"mx-name-container13 padding-right-4 row-right pull-right"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Text key="p.AgentCommons.MCPView_New.text10"
                                                                                                        $widgetId="p.AgentCommons.MCPView_New.text10"
                                                                                                        class={"mx-name-text10 spacing-inner-right"}
                                                                                                        style={undefined}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "conditional", "condition": { "type": "variable", "variable": "currentObject", "path": "EnableAll" }, "then": { "type": "literal", "value": "Disable all" }, "else": { "type": "literal", "value": "Enable all" } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.dataView6", "source": "object" } } }
                                                                                                            })
                                                                                                        ])}
                                                                                                        renderMode={"span"} />,
                                                                                                    <$FormGroup key="p.AgentCommons.MCPView_New.switch5$formGroup"
                                                                                                        $widgetId="p.AgentCommons.MCPView_New.switch5$formGroup"
                                                                                                        class={"mx-name-switch5 switch spacing-outer-bottom-none"}
                                                                                                        style={undefined}
                                                                                                        control={[
                                                                                                            <$Switch key="p.AgentCommons.MCPView_New.switch5"
                                                                                                                $widgetId="p.AgentCommons.MCPView_New.switch5"
                                                                                                                booleanAttribute={AttributeProperty({
                                                                                                                    "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                                                                                    "path": "",
                                                                                                                    "entity": "AgentCommons.MCPView",
                                                                                                                    "attribute": "EnableAll",
                                                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                                    "isList": false
                                                                                                                })}
                                                                                                                action={ActionProperty({
                                                                                                                    "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "e78SXKsaAFKuytqIuohRqg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                                                                                    "argumentTypes": { }
                                                                                                                })}
                                                                                                                tabIndex={undefined}
                                                                                                                id={DerivedUniqueIdProperty({
                                                                                                                    "widgetId": "p.AgentCommons.MCPView_New.switch5"
                                                                                                                })} />
                                                                                                        ]}
                                                                                                        caption={undefined}
                                                                                                        labelFor={DerivedUniqueIdProperty({
                                                                                                            "widgetId": "p.AgentCommons.MCPView_New.switch5"
                                                                                                        })}
                                                                                                        width={undefined}
                                                                                                        orientation={"vertical"}
                                                                                                        hasError={ValidationProperty({
                                                                                                            "inputWidgetId": "p.AgentCommons.MCPView_New.switch5"
                                                                                                        })} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]} />
                                                                                ]} />
                                                                        ]} />
                                                                ]}
                                                                ariaHidden={false} />,
                                                            <$ListView key="p.AgentCommons.MCPView_New.listView2"
                                                                $widgetId="p.AgentCommons.MCPView_New.listView2"
                                                                class={"mx-name-listView2 listview-empty-text listview-empty-text--mcp-tools listview-stylingless"}
                                                                style={undefined}
                                                                listValue={AssociationObjectListProperty({
                                                                    "dataSourceId": "p.13",
                                                                    "entity": "AgentCommons.SingleMCPToolView",
                                                                    "scope": "p.AgentCommons.MCPView_New.dataView6",
                                                                    "operationId": "9R4tL3/9CFmfNAdguAQHnA"
                                                                })}
                                                                itemTemplate={TemplatedWidgetProperty({
                                                                    "dataSourceId": "p.13",
                                                                    "editable": true,
                                                                    "children": () => [
                                                                        <$Container key="p.AgentCommons.MCPView_New.container36"
                                                                            $widgetId="p.AgentCommons.MCPView_New.container36"
                                                                            class={DynamicClassProperty({
                                                                                "staticClasses": "mx-name-container36",
                                                                                "dynamicClasses": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "IsEnabled" }, { "type": "literal", "value": true } ] }, "then": { "type": "literal", "value": "list" }, "else": { "type": "literal", "value": "disabled list" } }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.listView2", "source": "object" } } }
                                                                            })}
                                                                            style={undefined}
                                                                            renderMode={"div"}
                                                                            onClick={undefined}
                                                                            content={[
                                                                                <$Container key="p.AgentCommons.MCPView_New.container37"
                                                                                    $widgetId="p.AgentCommons.MCPView_New.container37"
                                                                                    class={"mx-name-container37 col-center"}
                                                                                    style={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={undefined}
                                                                                    content={[
                                                                                        <$Image key="p.AgentCommons.MCPView_New.image28"
                                                                                            $widgetId="p.AgentCommons.MCPView_New.image28"
                                                                                            datasource={"image"}
                                                                                            imageObject={WebStaticImageProperty({
                                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$wrench_purple.svg" }
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
                                                                                                    "expression": { "expr": { "type": "literal", "value": "Enabled" }, "args": {} }
                                                                                                })
                                                                                            ])}
                                                                                            widthUnit={"auto"}
                                                                                            width={100}
                                                                                            heightUnit={"auto"}
                                                                                            height={100}
                                                                                            iconSize={14}
                                                                                            displayAs={"fullImage"}
                                                                                            responsive={true}
                                                                                            class={"mx-name-image28"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined} />
                                                                                    ]}
                                                                                    ariaHidden={false} />,
                                                                                <$Container key="p.AgentCommons.MCPView_New.container38"
                                                                                    $widgetId="p.AgentCommons.MCPView_New.container38"
                                                                                    class={"mx-name-container38 col-left"}
                                                                                    style={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={undefined}
                                                                                    content={[
                                                                                        <$Text key="p.AgentCommons.MCPView_New.text7"
                                                                                            $widgetId="p.AgentCommons.MCPView_New.text7"
                                                                                            class={"mx-name-text7"}
                                                                                            style={undefined}
                                                                                            caption={t([
                                                                                                ExpressionProperty({
                                                                                                    "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "Name" }, "args": { "currentObject": { "widget": "p.AgentCommons.MCPView_New.listView2", "source": "object" } } }
                                                                                                })
                                                                                            ])}
                                                                                            renderMode={"span"} />
                                                                                    ]}
                                                                                    ariaHidden={false} />,
                                                                                <$Container key="p.AgentCommons.MCPView_New.container9"
                                                                                    $widgetId="p.AgentCommons.MCPView_New.container9"
                                                                                    class={"mx-name-container9 spacing-inner-left"}
                                                                                    style={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={undefined}
                                                                                    content={[
                                                                                        <$Tooltip key="p.AgentCommons.MCPView_New.tooltip11"
                                                                                            $widgetId="p.AgentCommons.MCPView_New.tooltip11"
                                                                                            trigger={[
                                                                                                <$Container key="p.AgentCommons.MCPView_New.container41"
                                                                                                    $widgetId="p.AgentCommons.MCPView_New.container41"
                                                                                                    class={"mx-name-container41 hover-btn spacing-outer-right spacing-outer-left"}
                                                                                                    style={undefined}
                                                                                                    tabIndex={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": { "SingleMCPToolView": { "widget": "p.AgentCommons.MCPView_New.listView2", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "se0l96wu4FCfPPMoiejtjw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true }
                                                                                                    })}
                                                                                                    content={[
                                                                                                        <$Image key="p.AgentCommons.MCPView_New.image2"
                                                                                                            $widgetId="p.AgentCommons.MCPView_New.image2"
                                                                                                            datasource={"image"}
                                                                                                            imageObject={WebStaticImageProperty({
                                                                                                                "image": { "uri": "img/AgentCommons$Images_AgentBuilder$pencil.svg" }
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
                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Edit tool" }, "args": {} }
                                                                                                                })
                                                                                                            ])}
                                                                                                            widthUnit={"pixels"}
                                                                                                            width={20}
                                                                                                            heightUnit={"pixels"}
                                                                                                            height={20}
                                                                                                            iconSize={14}
                                                                                                            displayAs={"fullImage"}
                                                                                                            responsive={true}
                                                                                                            class={"mx-name-image2"}
                                                                                                            style={undefined}
                                                                                                            tabIndex={undefined} />
                                                                                                    ]}
                                                                                                    ariaHidden={false} />
                                                                                            ]}
                                                                                            renderMethod={"custom"}
                                                                                            htmlMessage={[
                                                                                                <$Container key="p.AgentCommons.MCPView_New.container112"
                                                                                                    $widgetId="p.AgentCommons.MCPView_New.container112"
                                                                                                    class={"mx-name-container112"}
                                                                                                    style={undefined}
                                                                                                    renderMode={"div"}
                                                                                                    onClick={undefined}
                                                                                                    content={[
                                                                                                        <$Text key="p.AgentCommons.MCPView_New.text61"
                                                                                                            $widgetId="p.AgentCommons.MCPView_New.text61"
                                                                                                            class={"mx-name-text61 text-normal text-break text-small"}
                                                                                                            style={undefined}
                                                                                                            caption={t([
                                                                                                                ExpressionProperty({
                                                                                                                    "expression": { "expr": { "type": "literal", "value": "Edit tool\r\n" }, "args": {} }
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
                                                                                            class={"mx-name-tooltip11 agent-tooltip"}
                                                                                            style={undefined}
                                                                                            tabIndex={undefined} />
                                                                                    ]}
                                                                                    ariaHidden={false} />,
                                                                                <$Container key="p.AgentCommons.MCPView_New.container11"
                                                                                    $widgetId="p.AgentCommons.MCPView_New.container11"
                                                                                    class={"mx-name-container11"}
                                                                                    style={undefined}
                                                                                    renderMode={"div"}
                                                                                    onClick={undefined}
                                                                                    content={[
                                                                                        <$FormGroup key="p.AgentCommons.MCPView_New.switch2$formGroup"
                                                                                            $widgetId="p.AgentCommons.MCPView_New.switch2$formGroup"
                                                                                            class={"mx-name-switch2 switch spacing-outer-bottom-none"}
                                                                                            style={undefined}
                                                                                            control={[
                                                                                                <$Switch key="p.AgentCommons.MCPView_New.switch2"
                                                                                                    $widgetId="p.AgentCommons.MCPView_New.switch2"
                                                                                                    booleanAttribute={AttributeProperty({
                                                                                                        "scope": "p.AgentCommons.MCPView_New.listView2",
                                                                                                        "path": "",
                                                                                                        "entity": "AgentCommons.SingleMCPToolView",
                                                                                                        "attribute": "IsEnabled",
                                                                                                        "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                                        "isList": false
                                                                                                    })}
                                                                                                    action={ActionProperty({
                                                                                                        "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" } }, "config": { "operationId": "fJfjGZU0MleWUa/dB2CMvg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
                                                                                                        "argumentTypes": { }
                                                                                                    })}
                                                                                                    tabIndex={undefined}
                                                                                                    id={DerivedUniqueIdProperty({
                                                                                                        "widgetId": "p.AgentCommons.MCPView_New.switch2"
                                                                                                    })} />
                                                                                            ]}
                                                                                            caption={undefined}
                                                                                            labelFor={DerivedUniqueIdProperty({
                                                                                                "widgetId": "p.AgentCommons.MCPView_New.switch2"
                                                                                            })}
                                                                                            width={undefined}
                                                                                            orientation={"vertical"}
                                                                                            hasError={ValidationProperty({
                                                                                                "inputWidgetId": "p.AgentCommons.MCPView_New.switch2"
                                                                                            })} />
                                                                                    ]}
                                                                                    ariaHidden={false} />
                                                                            ]}
                                                                            ariaHidden={false} />
                                                                    ]
                                                                })}
                                                                onClick={undefined}
                                                                pageSize={0} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.MCPView_New.container5"
                                        $widgetId="p.AgentCommons.MCPView_New.container5"
                                        class={"mx-name-container5"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.AgentCommons.MCPView_New.container1"
                                                $widgetId="p.AgentCommons.MCPView_New.container1"
                                                class={"mx-name-container1 row-right"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$ActionButton key="p.AgentCommons.MCPView_New.actionButton2"
                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton2"
                                                        buttonId={"p.AgentCommons.MCPView_New.actionButton2"}
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
                                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "58RRZggiNFGaUbN10t7dgQ", "closePage": true }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />,
                                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.MCPView_New.actionButton1$visibility"
                                                        $widgetId="p.AgentCommons.MCPView_New.actionButton1$visibility"
                                                        visible={ExpressionProperty({
                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                        })}
                                                        contents={[
                                                            <$ActionButton key="p.AgentCommons.MCPView_New.actionButton1"
                                                                $widgetId="p.AgentCommons.MCPView_New.actionButton1"
                                                                buttonId={"p.AgentCommons.MCPView_New.actionButton1"}
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
                                                                    "action": { "type": "callMicroflow", "argMap": { "MCPView": { "widget": "$MCPView", "source": "object" }, "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "xRLIbxIeZ1CPIF7aL3zudw", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Add MCP server"
]);

export const classes = "";

export const cancelChangesOperationId = "Q9UW4UV0JVKWOtj4clDZhw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
