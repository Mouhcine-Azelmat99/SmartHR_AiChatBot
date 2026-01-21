import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AssociationProperty } from "mendix/AssociationProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { ListAttributeProperty } from "mendix/ListAttributeProperty";
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
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
import { Text } from "mendix/widgets/web/Text";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $ConditionalVisibilityWrapper, $Container, $Text, $Tooltip, $ActionButton, $Image, $FormGroup, $Combobox } = asPluginWidgets({ Div, DataView, ConditionalVisibilityWrapper, Container, Text, Tooltip, ActionButton, Image, FormGroup, Combobox });

addEnumerations({
    "GenAICommons.ENUM_ToolChoice": [
        [
            "auto",
            t([
                "Auto"
            ])
        ],
        [
            "none",
            t([
                "None"
            ])
        ],
        [
            "any",
            t([
                "Any"
            ])
        ],
        [
            "tool",
            t([
                "Tool"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.Version_EditToolChoice.layoutGrid1"
        $widgetId="p.AgentCommons.Version_EditToolChoice.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid spacing-inner-top-medium"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0"
                $widgetId="p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.Version_EditToolChoice.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.Version_EditToolChoice.dataView1"
                                $widgetId="p.AgentCommons.Version_EditToolChoice.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.17",
                                    "scope": "$Version",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_EditToolChoice.container41$visibility"
                                        $widgetId="p.AgentCommons.Version_EditToolChoice.container41$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_EditToolChoice.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$Container key="p.AgentCommons.Version_EditToolChoice.container41"
                                                $widgetId="p.AgentCommons.Version_EditToolChoice.container41"
                                                class={"mx-name-container41"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Container key="p.AgentCommons.Version_EditToolChoice.container49"
                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.container49"
                                                        class={"mx-name-container49 row-left"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.AgentCommons.Version_EditToolChoice.text9"
                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.text9"
                                                                class={"mx-name-text9 custom-control-label spacing-outer-right"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Tool choice" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$Container key="p.AgentCommons.Version_EditToolChoice.container43"
                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.container43"
                                                                class={"mx-name-container43 icon-info-wrapper"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Tooltip key="p.AgentCommons.Version_EditToolChoice.tooltip2"
                                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.tooltip2"
                                                                        trigger={[
                                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_EditToolChoice.actionButton21$visibility"
                                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.actionButton21$visibility"
                                                                                visible={ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                                })}
                                                                                contents={[
                                                                                    <$ActionButton key="p.AgentCommons.Version_EditToolChoice.actionButton21"
                                                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.actionButton21"
                                                                                        buttonId={"p.AgentCommons.Version_EditToolChoice.actionButton21"}
                                                                                        class={"mx-name-actionButton21 info-icon btn-sm spacing-outer-bottom-none"}
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
                                                                            <$Container key="p.AgentCommons.Version_EditToolChoice.container102"
                                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.container102"
                                                                                class={"mx-name-container102 w306 spacing-inner-top spacing-inner-bottom spacing-inner-left spacing-inner-right"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Container key="p.AgentCommons.Version_EditToolChoice.container57"
                                                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.container57"
                                                                                        class={"mx-name-container57"}
                                                                                        style={undefined}
                                                                                        renderMode={"div"}
                                                                                        onClick={undefined}
                                                                                        content={[
                                                                                            <$Text key="p.AgentCommons.Version_EditToolChoice.text57"
                                                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.text57"
                                                                                                class={"mx-name-text57 text-normal text-break text-small text-header"}
                                                                                                style={undefined}
                                                                                                caption={t([
                                                                                                    ExpressionProperty({
                                                                                                        "expression": { "expr": { "type": "literal", "value": "Control the behavior of the agent regarding tools used. Not all values are supported for all models & providers. Please refer to the documentation of your LLM provider for more information." }, "args": {} }
                                                                                                    })
                                                                                                ])}
                                                                                                renderMode={"p"} />,
                                                                                            <$Container key="p.AgentCommons.Version_EditToolChoice.container2"
                                                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.container2"
                                                                                                class={"mx-name-container2 row-left"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$ActionButton key="p.AgentCommons.Version_EditToolChoice.actionButton5"
                                                                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.actionButton5"
                                                                                                        buttonId={"p.AgentCommons.Version_EditToolChoice.actionButton5"}
                                                                                                        class={"mx-name-actionButton5 text-sm spacing-inner-left-none btn-sm"}
                                                                                                        style={undefined}
                                                                                                        tabIndex={undefined}
                                                                                                        renderType={"link"}
                                                                                                        role={"button"}
                                                                                                        buttonClass={"btn-default"}
                                                                                                        caption={t([
                                                                                                            ExpressionProperty({
                                                                                                                "expression": { "expr": { "type": "literal", "value": "Read more about the options" }, "args": {} }
                                                                                                            })
                                                                                                        ])}
                                                                                                        tooltip={TextProperty({
                                                                                                            "value": t([
                                                                                                                ""
                                                                                                            ])
                                                                                                        })}
                                                                                                        icon={undefined}
                                                                                                        action={ActionProperty({
                                                                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice" }, "disabledDuringExecution": true },
                                                                                                            "abortOnServerValidation": true
                                                                                                        })} />,
                                                                                                    <$Container key="p.AgentCommons.Version_EditToolChoice.container58"
                                                                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.container58"
                                                                                                        class={"mx-name-container58"}
                                                                                                        style={undefined}
                                                                                                        renderMode={"div"}
                                                                                                        onClick={undefined}
                                                                                                        content={[
                                                                                                            <$Image key="p.AgentCommons.Version_EditToolChoice.image3"
                                                                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.image3"
                                                                                                                datasource={"image"}
                                                                                                                imageObject={WebStaticImageProperty({
                                                                                                                    "image": { "uri": "img/AgentCommons$Images_AgentBuilder$link_attachments.svg" }
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
                                                                                                                onClick={ActionProperty({
                                                                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mendix.com/appstore/modules/genai/genai-for-mx/commons/#enum-toolchoice" }, "disabledDuringExecution": false },
                                                                                                                    "argumentTypes": { }
                                                                                                                })}
                                                                                                                alternativeText={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                widthUnit={"pixels"}
                                                                                                                width={14}
                                                                                                                heightUnit={"auto"}
                                                                                                                height={100}
                                                                                                                iconSize={14}
                                                                                                                displayAs={"fullImage"}
                                                                                                                responsive={true}
                                                                                                                class={"mx-name-image3 spacing-inner-left"}
                                                                                                                style={undefined}
                                                                                                                tabIndex={undefined} />
                                                                                                        ]}
                                                                                                        ariaHidden={false} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]}
                                                                                        ariaHidden={false} />
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
                                                                        class={"mx-name-tooltip2 agent-tooltip"}
                                                                        style={undefined}
                                                                        tabIndex={undefined} />
                                                                ]}
                                                                ariaHidden={false} />
                                                        ]}
                                                        ariaHidden={false} />,
                                                    <$FormGroup key="p.AgentCommons.Version_EditToolChoice.comboBox2$formGroup"
                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.comboBox2$formGroup"
                                                        class={"mx-name-comboBox2 width-full"}
                                                        style={undefined}
                                                        control={[
                                                            <$Combobox key="p.AgentCommons.Version_EditToolChoice.comboBox2"
                                                                $widgetId="p.AgentCommons.Version_EditToolChoice.comboBox2"
                                                                source={"context"}
                                                                optionsSourceType={"enumeration"}
                                                                attributeEnumeration={AttributeProperty({
                                                                    "scope": "p.AgentCommons.Version_EditToolChoice.dataView1",
                                                                    "path": "",
                                                                    "entity": "AgentCommons.Version",
                                                                    "attribute": "ToolChoice",
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
                                                                readOnlyStyle={"bordered"}
                                                                onChangeEvent={ActionProperty({
                                                                    "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "e+K6+4OKyFq9mRTwuQk75w", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
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
                                                                    "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox2"
                                                                })} />
                                                        ]}
                                                        caption={undefined}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox2"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AgentCommons.Version_EditToolChoice.comboBox2"
                                                        })} />
                                                ]}
                                                ariaHidden={false} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup$visibility"
                                        $widgetId="p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ToolChoice" }, { "type": "literal", "value": "tool" } ] }, "args": { "currentObject": { "widget": "p.AgentCommons.Version_EditToolChoice.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$FormGroup key="p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup"
                                                $widgetId="p.AgentCommons.Version_EditToolChoice.comboBox3$formGroup"
                                                class={"mx-name-comboBox3"}
                                                style={undefined}
                                                control={[
                                                    <$Combobox key="p.AgentCommons.Version_EditToolChoice.comboBox3"
                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.comboBox3"
                                                        source={"context"}
                                                        optionsSourceType={"association"}
                                                        optionsSourceDatabaseDataSource={undefined}
                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                        optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                            "path": "",
                                                            "entity": "AgentCommons.Tool",
                                                            "attribute": "Name",
                                                            "attributeType": "String",
                                                            "sortable": true,
                                                            "filterable": true,
                                                            "dataSourceId": "p.4",
                                                            "isList": false
                                                        })}
                                                        optionsSourceAssociationCaptionExpression={undefined}
                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                        attributeAssociation={AssociationProperty({
                                                            "type": "Reference",
                                                            "entity": "AgentCommons.Version",
                                                            "path": "",
                                                            "attribute": "AgentCommons.Version_ToolChoice",
                                                            "endpointEntity": "AgentCommons.Tool",
                                                            "selectableObjectsId": "p.4",
                                                            "scope": "p.AgentCommons.Version_EditToolChoice.dataView1",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } }
                                                        })}
                                                        optionsSourceAssociationDataSource={MicroflowObjectListProperty({
                                                            "argMap": { "Version": { "widget": "$Version", "source": "object" } },
                                                            "dataSourceId": "p.4",
                                                            "entity": "AgentCommons.Tool",
                                                            "scope": "p.AgentCommons.Version_EditToolChoice.dataView1",
                                                            "operationId": "gFftL1LVAlqQ2fU5plMtig"
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
                                                        optionsSourceAssociationCustomContentType={"no"}
                                                        optionsSourceAssociationCustomContent={undefined}
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
                                                            "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "e+K6+4OKyFq9mRTwuQk75w", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": false },
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
                                                            "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Tool" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.AgentCommons.Version_EditToolChoice.comboBox3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.AgentCommons.Version_EditToolChoice.comboBox3"
                                                })} />
                                        ]} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.Version_EditToolChoice.container1"
                                        $widgetId="p.AgentCommons.Version_EditToolChoice.container1"
                                        class={"mx-name-container1 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.Version_EditToolChoice.actionButton2"
                                                $widgetId="p.AgentCommons.Version_EditToolChoice.actionButton2"
                                                buttonId={"p.AgentCommons.Version_EditToolChoice.actionButton2"}
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
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "lpvvhckpHlqxL+B12ABOhg", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_EditToolChoice.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.Version_EditToolChoice.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.Version_EditToolChoice.actionButton1"
                                                        $widgetId="p.AgentCommons.Version_EditToolChoice.actionButton1"
                                                        buttonId={"p.AgentCommons.Version_EditToolChoice.actionButton1"}
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
                                                            "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "9hEX9SpPDVak9WVrjTLfBQ", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Edit tool choice"
]);

export const classes = "overflow";

export const cancelChangesOperationId = "JmpPSBBEH1ybmm6zZL6zWw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
