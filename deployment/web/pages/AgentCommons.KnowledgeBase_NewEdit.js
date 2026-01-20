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
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $Combobox, $Image, $Fragment, $Switch, $TextBox, $TextArea } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, Combobox, Image, Fragment, Switch, TextBox, TextArea });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1"
        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0"
                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.KnowledgeBase_NewEdit.dataView6"
                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.25",
                                    "scope": "$KnowledgeBase",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container54"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container54"
                                        class={"mx-name-container54 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text8"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text8"
                                                class={"mx-name-text8 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Knowledge base*" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container55"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container55"
                                                class={"mx-name-container55 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.KnowledgeBase_NewEdit.tooltip9"
                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.tooltip9"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton28$visibility"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton28$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton28"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton28"
                                                                        buttonId={"p.AgentCommons.KnowledgeBase_NewEdit.actionButton28"}
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
                                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container109"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container109"
                                                                class={"mx-name-container109 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text50"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text50"
                                                                        class={"mx-name-text50 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "This is your your knowledge base. See nothing here? Make sure to configure the connection to your knowledge base(s) in this app first. Refer to the documentation of the connector of choice for configuration instructions. " }, "args": {} }
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
                                    <$FormGroup key="p.AgentCommons.KnowledgeBase_NewEdit.comboBox2$formGroup"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.comboBox2$formGroup"
                                        class={"mx-name-comboBox2 combobox-model-selection combobox-selection-height-small"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "GenAICommons.DeployedKnowledgeBase",
                                                    "attribute": "DisplayName",
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
                                                    "entity": "AgentCommons.KnowledgeBase",
                                                    "path": "",
                                                    "attribute": "AgentCommons.KnowledgeBase_DeployedKnowledgeBase",
                                                    "endpointEntity": "GenAICommons.DeployedKnowledgeBase",
                                                    "selectableObjectsId": "p.2",
                                                    "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.2",
                                                    "entity": "GenAICommons.DeployedKnowledgeBase",
                                                    "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                                    "operationId": "Zcu6etjVe1W6wOWDuUruDw",
                                                    "sort": [
                                                        [
                                                            "Architecture",
                                                            "asc"
                                                        ],
                                                        [
                                                            "DisplayName",
                                                            "asc"
                                                        ]
                                                    ],
                                                    "constraints": { "type": "attribute", "attribute": "IsActive", "context": "GenAICommons.DeployedKnowledgeBase", "attributeType": "Boolean" }
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
                                                        <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container23"
                                                            $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container23"
                                                            class={"mx-name-container23 model-selection"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$Image key="p.AgentCommons.KnowledgeBase_NewEdit.image1"
                                                                    $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.image1"
                                                                    datasource={"image"}
                                                                    imageObject={WebStaticImageProperty({
                                                                        "image": { "uri": "img/AgentCommons$Images_AgentBuilder$book_open_sparkle_disabled.svg" }
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
                                                                <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text9"
                                                                    $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text9"
                                                                    class={"mx-name-text9"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2", "source": "object" } } }
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
                                                    "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.comboBox2"
                                        })} />,
                                    <$Fragment key="p.AgentCommons.KnowledgeBase_NewEdit.snippetCall1"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.snippetCall1"
                                        content={[
                                            <$Container key="p.AgentCommons.Snippet_KnowledgeBase_Enable.container8"
                                                $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.container8"
                                                class={"mx-name-container8 col-left"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.AgentCommons.Snippet_KnowledgeBase_Enable.container48"
                                                        $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.container48"
                                                        class={"mx-name-container48 row-left"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.AgentCommons.Snippet_KnowledgeBase_Enable.text6"
                                                                $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.text6"
                                                                class={"mx-name-text6 custom-control-label"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Enabled" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$Container key="p.AgentCommons.Snippet_KnowledgeBase_Enable.container49"
                                                                $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.container49"
                                                                class={"mx-name-container49 icon-info-wrapper"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Tooltip key="p.AgentCommons.Snippet_KnowledgeBase_Enable.tooltip7"
                                                                        $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.tooltip7"
                                                                        trigger={[
                                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26$visibility"
                                                                                $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26$visibility"
                                                                                visible={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                })}
                                                                                contents={[
                                                                                    <$ActionButton key="p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26"
                                                                                        $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26"
                                                                                        buttonId={"p.AgentCommons.Snippet_KnowledgeBase_Enable.actionButton26"}
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
                                                                            <$Container key="p.AgentCommons.Snippet_KnowledgeBase_Enable.container107"
                                                                                $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.container107"
                                                                                class={"mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Text key="p.AgentCommons.Snippet_KnowledgeBase_Enable.text48"
                                                                                        $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.text48"
                                                                                        class={"mx-name-text48 text-normal text-break text-small"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "The LLM is only aware of enabled knowledge bases and, as such, cannot call disabled knowledge bases. This holds for this Agent Builder interface as well as the Agent being used in the app logic. Disabling a knowledge base can help during development to (temporarily) exclude a knowledge base. It prevents having to add it back from scratch when it is needed again later." }, "args": {} }
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
                                                    <$FormGroup key="p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1$formGroup"
                                                        $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1$formGroup"
                                                        class={"mx-name-switch1 switch"}
                                                        style={undefined}
                                                        control={[
                                                            <$Switch key="p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
                                                                $widgetId="p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
                                                                booleanAttribute={AttributeProperty({
                                                                    "scope": "$KnowledgeBase",
                                                                    "path": "",
                                                                    "entity": "AgentCommons.KnowledgeBase",
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
                                                                    "widgetId": "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
                                                                })} />
                                                        ]}
                                                        caption={undefined}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AgentCommons.Snippet_KnowledgeBase_Enable.switch1"
                                                        })} />
                                                ]}
                                                ariaHidden={false} />
                                        ]} />,
                                    <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container40"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container40"
                                        class={"mx-name-container40 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text4"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text4"
                                                class={"mx-name-text4 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Name*" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container45"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container45"
                                                class={"mx-name-container45 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.KnowledgeBase_NewEdit.tooltip5"
                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.tooltip5"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton24$visibility"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton24$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton24"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton24"
                                                                        buttonId={"p.AgentCommons.KnowledgeBase_NewEdit.actionButton24"}
                                                                        class={"mx-name-actionButton24 spacing-outer-left spacing-outer-right"}
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
                                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container105"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container105"
                                                                class={"mx-name-container105 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text46"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text46"
                                                                        class={"mx-name-text46 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "This is the name of the knowledge base that is sent to the LLM: it can only contain alphanumeric characters.\r\nIt is used in combination with the description by the model to determine what retrieves are necessary when, for example GetTicketData." }, "args": {} }
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
                                                        class={"mx-name-tooltip5 agent-tooltip"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.AgentCommons.KnowledgeBase_NewEdit.textBox1$formGroup"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "AgentCommons.KnowledgeBase",
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
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox1"
                                        })} />,
                                    <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container43"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container43"
                                        class={"mx-name-container43 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text5"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text5"
                                                class={"mx-name-text5 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Description*" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container46"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container46"
                                                class={"mx-name-container46 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.KnowledgeBase_NewEdit.tooltip6"
                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.tooltip6"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton25$visibility"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton25$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton25"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton25"
                                                                        buttonId={"p.AgentCommons.KnowledgeBase_NewEdit.actionButton25"}
                                                                        class={"mx-name-actionButton25 spacing-outer-left spacing-outer-right"}
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
                                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container106"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container106"
                                                                class={"mx-name-container106 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text47"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text47"
                                                                        class={"mx-name-text47 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "This is a description for the LLM that explains in human language what data is present in the knowledge base and how (or when) data should be retrieved in the context of the task.\r\nIt is used in combination with the name by the model to determine what retrieves are necessary when." }, "args": {} }
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
                                                        class={"mx-name-tooltip6 agent-tooltip"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.AgentCommons.KnowledgeBase_NewEdit.textArea1$formGroup"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textArea1$formGroup"
                                        class={"mx-name-textArea1 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "AgentCommons.KnowledgeBase",
                                                    "attribute": "Description",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                counterMessage={TextProperty({
                                                    "value": t([
                                                        ""
                                                    ])
                                                })}
                                                maxLength={4096}
                                                numberOfLines={5}
                                                autoGrow={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                readOnlyStyle={"control"}
                                                textTooLongMessage={TextProperty({
                                                    "value": t([
                                                        "Value too long."
                                                    ])
                                                })}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textArea1"
                                        })} />,
                                    <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container48"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container48"
                                        class={"mx-name-container48 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text6"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text6"
                                                class={"mx-name-text6 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Maximum number of results" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container49"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container49"
                                                class={"mx-name-container49 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.KnowledgeBase_NewEdit.tooltip7"
                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.tooltip7"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton26$visibility"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton26$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton26"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton26"
                                                                        buttonId={"p.AgentCommons.KnowledgeBase_NewEdit.actionButton26"}
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
                                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container107"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container107"
                                                                class={"mx-name-container107 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text48"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text48"
                                                                        class={"mx-name-text48 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "This is the highest number of data chunks that can be returned in a single retrieve.\r\nIf left empty, many records could be retrieved, so it's recommended to set this number (to e.g. 5), or set the minimum similarity in the next field, or to set both." }, "args": {} }
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
                                    <$FormGroup key="p.AgentCommons.KnowledgeBase_NewEdit.textBox4$formGroup"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "AgentCommons.KnowledgeBase",
                                                    "attribute": "MaxNumberOfResults",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "numberFormat": {
                                                            "groupDigits": false
                                                        }
                                                    }
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
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox4"
                                        })} />,
                                    <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container51"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container51"
                                        class={"mx-name-container51 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text7"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text7"
                                                class={"mx-name-text7 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Minimum similarity" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container52"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container52"
                                                class={"mx-name-container52 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.KnowledgeBase_NewEdit.tooltip8"
                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.tooltip8"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton27$visibility"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton27$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton27"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton27"
                                                                        buttonId={"p.AgentCommons.KnowledgeBase_NewEdit.actionButton27"}
                                                                        class={"mx-name-actionButton27 spacing-outer-left spacing-outer-right"}
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
                                                            <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container108"
                                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container108"
                                                                class={"mx-name-container108 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.KnowledgeBase_NewEdit.text49"
                                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.text49"
                                                                        class={"mx-name-text49 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "This is the cosine-similarity cut-off for retrievals; allowed values lie between 0 and 1. It can be used to only retrieve data chunks of high relevance. A high value (e.g. 0.8) is stricter than a low value (e.g. 0.2)." }, "args": {} }
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
                                                        class={"mx-name-tooltip8 agent-tooltip"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.AgentCommons.KnowledgeBase_NewEdit.textBox5$formGroup"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textBox5$formGroup"
                                        class={"mx-name-textBox5 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.KnowledgeBase_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "AgentCommons.KnowledgeBase",
                                                    "attribute": "MinimumSimilarity",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null,
                                                    "formatting": {
                                                        "numberFormat": {
                                                            "groupDigits": false,
                                                            "decimalPrecision": 2
                                                        }
                                                    }
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
                                                ariaLabel={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                autocomplete={"on"}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                ariaRequired={undefined}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.KnowledgeBase_NewEdit.textBox5"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.KnowledgeBase_NewEdit.container1"
                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.container1"
                                        class={"mx-name-container1 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton3"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton3"
                                                buttonId={"p.AgentCommons.KnowledgeBase_NewEdit.actionButton3"}
                                                class={"mx-name-actionButton3 spacing-outer-right-medium"}
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
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "jME2knmZrFCtsYhwZzW02Q", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.KnowledgeBase_NewEdit.actionButton1"
                                                        $widgetId="p.AgentCommons.KnowledgeBase_NewEdit.actionButton1"
                                                        buttonId={"p.AgentCommons.KnowledgeBase_NewEdit.actionButton1"}
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
                                                            "action": { "type": "callMicroflow", "argMap": { "KnowledgeBase": { "widget": "$KnowledgeBase", "source": "object" } }, "config": { "operationId": "mwE7s1l9NF+zM3A7eis63Q", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Edit knowledge base"
]);

export const classes = "";

export const cancelChangesOperationId = "iC8nq2LQhlu1ykEmYjVU6g";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
