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
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
import { TemplatedWidgetProperty } from "mendix/TemplatedWidgetProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
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
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $FormGroup, $TextBox, $RadioButtonGroup, $Combobox, $ConditionalVisibilityWrapper, $Image, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, Container, FormGroup, TextBox, RadioButtonGroup, Combobox, ConditionalVisibilityWrapper, Image, Text, ActionButton });

addEnumerations({
    "MyFirstAIBot.ENUM_ActionMicroflowSelection": [
        [
            "ChatContext_ChatWithHistory_ActionMicroflow",
            t([
                "ChatContext_ChatWithHistory_ActionMicroflow"
            ])
        ],
        [
            "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow",
            t([
                "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1"
        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0"
                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MyFirstAIBot.BotConfig_NewEdit.dataView1"
                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.22",
                                    "scope": "$BotConfig",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container1"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container1"
                                        class={"mx-name-container1"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.textBox3$formGroup"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.textBox3$formGroup"
                                                class={"mx-name-textBox3 mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                            "path": "",
                                                            "entity": "MyFirstAIBot.BotConfig",
                                                            "attribute": "DisplayName",
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
                                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox3"
                                                })} />,
                                            <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2$formGroup"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2$formGroup"
                                                class={"mx-name-radioButtons2 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                                        value={AttributeProperty({
                                                            "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                            "path": "",
                                                            "entity": "MyFirstAIBot.BotConfig",
                                                            "attribute": "IsSelectable",
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
                                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Is selectable in UI" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.radioButtons2"
                                                })} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox8$formGroup"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox8$formGroup"
                                        class={"mx-name-comboBox8 combobox-model-selection"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceDatabaseDefaultValue={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstAIBot.BotConfig",
                                                    "path": "",
                                                    "attribute": "ConversationalUI.ProviderConfig_DeployedModel",
                                                    "endpointEntity": "GenAICommons.DeployedModel",
                                                    "selectableObjectsId": "p.0",
                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.0",
                                                    "entity": "GenAICommons.DeployedModel",
                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                    "operationId": "KzoUBQr7+lWi9Z7gFe61QQ",
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
                                                    "constraints": { "type": "function", "name": "and", "parameters": [ { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "OutputModality", "context": "GenAICommons.DeployedModel", "attributeType": "#GenAICommons.ENUM_ModelModality" }, { "type": "literal", "value": "Text" } ] }, { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "SupportsConversationsWithHistory", "context": "GenAICommons.DeployedModel", "attributeType": "#GenAICommons.ENUM_ModelSupport" }, { "type": "literal", "value": "_True" } ] }, { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "SupportsSystemPrompt", "context": "GenAICommons.DeployedModel", "attributeType": "#GenAICommons.ENUM_ModelSupport" }, { "type": "literal", "value": "_True" } ] }, { "type": "attribute", "attribute": "IsActive", "context": "GenAICommons.DeployedModel", "attributeType": "Boolean" } ] }
                                                })}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "GenAICommons.DeployedModel",
                                                    "attribute": "DisplayName",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.0",
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
                                                    "dataSourceId": "p.0",
                                                    "editable": false,
                                                    "children": () => [
                                                        <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container14"
                                                            $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container14"
                                                            class={"mx-name-container14 model-selection"}
                                                            style={undefined}
                                                            renderMode={"div"}
                                                            onClick={undefined}
                                                            content={[
                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.image1$visibility"
                                                                    $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image1$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "conditional", "condition": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "OpenAI" } ] } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Mistral" } ] } ] }, "else": { "type": "literal", "value": false } }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Amazon" } ] } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Image key="p.MyFirstAIBot.BotConfig_NewEdit.image1"
                                                                            $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image1"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_collection$mxcloud.svg" }
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
                                                                            class={"mx-name-image1 img--22-22"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />
                                                                    ]} />,
                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.image2$visibility"
                                                                    $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image2$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "OpenAI" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Azure" } ] }, { "type": "literal", "value": false } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Image key="p.MyFirstAIBot.BotConfig_NewEdit.image2"
                                                                            $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image2"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_collection$openai.svg" }
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
                                                                            class={"mx-name-image2 img--22-22"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />
                                                                    ]} />,
                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.image3$visibility"
                                                                    $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image3$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Azure" } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Image key="p.MyFirstAIBot.BotConfig_NewEdit.image3"
                                                                            $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image3"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_collection$azure.svg" }
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
                                                                            class={"mx-name-image3 img--22-22"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />
                                                                    ]} />,
                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.image4$visibility"
                                                                    $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image4$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Amazon" } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Image key="p.MyFirstAIBot.BotConfig_NewEdit.image4"
                                                                            $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image4"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_collection$bedrock.svg" }
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
                                                                            class={"mx-name-image4 img--22-22"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />
                                                                    ]} />,
                                                                <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.image5$visibility"
                                                                    $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image5$visibility"
                                                                    visible={ExpressionProperty({
                                                                        "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Mistral" } ] }, "then": { "type": "function", "name": "not", "parameters": [ { "type": "function", "name": "contains", "parameters": [ { "type": "function", "name": "trim", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Architecture" } ] }, { "type": "literal", "value": "Amazon" } ] } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
                                                                    })}
                                                                    contents={[
                                                                        <$Image key="p.MyFirstAIBot.BotConfig_NewEdit.image5"
                                                                            $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.image5"
                                                                            datasource={"image"}
                                                                            imageObject={WebStaticImageProperty({
                                                                                "image": { "uri": "img/ConversationalUI$Image_collection$mistral.png" }
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
                                                                            class={"mx-name-image5 img--22-22"}
                                                                            style={undefined}
                                                                            tabIndex={undefined} />
                                                                    ]} />,
                                                                <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text5"
                                                                    $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text5"
                                                                    class={"mx-name-text5"}
                                                                    style={undefined}
                                                                    caption={t([
                                                                        ExpressionProperty({
                                                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "DisplayName" }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8", "source": "object" } } }
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
                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Model" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox8"
                                        })} />,
                                    <$DataView key="p.MyFirstAIBot.BotConfig_NewEdit.dataView2"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dataView2"
                                        class={"mx-name-dataView2 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.55",
                                            "scope": "$BotConfig",
                                            "editable": true,
                                            "path": "ConversationalUI.ProviderConfig_DeployedModel/AmazonBedrockConnector.BedrockDeployedModel",
                                            "operationId": "zkYuDNgiI1O7bfwxXKxm2A"
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.container3$visibility"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container3$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.dataView2", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container3"
                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container3"
                                                        class={"mx-name-container3"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.container9$visibility"
                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container9$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "BotConfig", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" } ] }, "args": { "BotConfig": { "widget": "$BotConfig", "source": "object" } } }
                                                                })}
                                                                contents={[
                                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container9"
                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container9"
                                                                        class={"mx-name-container9 spacing-outer-top-medium spacing-outer-bottom-medium"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container10"
                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container10"
                                                                                class={"mx-name-container10 alert alert-primary spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4"
                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4"
                                                                                        class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                        style={undefined}
                                                                                        content={[
                                                                                            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0"
                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0"
                                                                                                class={"row"}
                                                                                                style={undefined}
                                                                                                content={[
                                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column0"
                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column0"
                                                                                                        class={"col-lg-auto col-md-auto col-auto align-self-start"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container11"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container11"
                                                                                                                class={"mx-name-container11 alert-icon mx-icon mx-icon-filled mx-icon-info-circle"}
                                                                                                                style={undefined}
                                                                                                                renderMode={"div"}
                                                                                                                onClick={undefined}
                                                                                                                content={undefined}
                                                                                                                ariaHidden={false} />
                                                                                                        ]} />,
                                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column1"
                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid4$row0$column1"
                                                                                                        class={"col-lg col-md col align-self-center"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text28"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text28"
                                                                                                                class={"mx-name-text28 alert-title text-bold spacing-outer-bottom-none"}
                                                                                                                style={undefined}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Model Information" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                renderMode={"h5"} />,
                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text32"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text32"
                                                                                                                class={"mx-name-text32 alert-description spacing-outer-bottom-none"}
                                                                                                                style={undefined}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "The Model dropdown has a list of currently active models available on Bedrock for on-demand throughput.\r\nYou can find an overview here:" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                renderMode={"p"} />,
                                                                                                            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5"
                                                                                                                class={"mx-name-layoutGrid5 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                                style={undefined}
                                                                                                                content={[
                                                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0"
                                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0"
                                                                                                                        class={"row"}
                                                                                                                        style={undefined}
                                                                                                                        content={[
                                                                                                                            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0$column0"
                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid5$row0$column0"
                                                                                                                                class={"col-lg col-md col"}
                                                                                                                                style={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container12"
                                                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container12"
                                                                                                                                        class={"mx-name-container12 row-left spacing-outer-top-medium spacing-inner-bottom-medium"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text3"
                                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text3"
                                                                                                                                                class={"mx-name-text3 spacing-inner-right"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "- " }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />,
                                                                                                                                            <$ActionButton key="p.MyFirstAIBot.BotConfig_NewEdit.actionButton5"
                                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.actionButton5"
                                                                                                                                                buttonId={"p.MyFirstAIBot.BotConfig_NewEdit.actionButton5"}
                                                                                                                                                class={"mx-name-actionButton5"}
                                                                                                                                                style={undefined}
                                                                                                                                                tabIndex={undefined}
                                                                                                                                                renderType={"link"}
                                                                                                                                                role={"button"}
                                                                                                                                                buttonClass={"btn-default"}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Amazon Bedrock Model ID's" }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                tooltip={TextProperty({
                                                                                                                                                    "value": t([
                                                                                                                                                        ""
                                                                                                                                                    ])
                                                                                                                                                })}
                                                                                                                                                icon={undefined}
                                                                                                                                                action={ActionProperty({
                                                                                                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arnshttps://docs.aws.amazon.com/bedrock/latest/userguide/model-ids.html#model-ids-arns" }, "disabledDuringExecution": true },
                                                                                                                                                    "abortOnServerValidation": true
                                                                                                                                                })} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />
                                                                                                                        ]} />
                                                                                                                ]} />,
                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text33"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text33"
                                                                                                                class={"mx-name-text33 alert-description spacing-outer-bottom-none text-semibold"}
                                                                                                                style={undefined}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "For convenience, models that don't support system prompts or conversations are excluded.\r\nIf you want to include them you can do so by changing the Model combobox on this page (BotConfig_NewEdit)." }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                renderMode={"p"} />
                                                                                                        ]} />
                                                                                                ]} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]} />,
                                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.container5$visibility"
                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container5$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "BotConfig", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" } ] }, "args": { "BotConfig": { "widget": "$BotConfig", "source": "object" } } }
                                                                })}
                                                                contents={[
                                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container5"
                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container5"
                                                                        class={"mx-name-container5 spacing-outer-top-medium spacing-outer-bottom-medium"}
                                                                        style={undefined}
                                                                        renderMode={"div"}
                                                                        onClick={undefined}
                                                                        content={[
                                                                            <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container7"
                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container7"
                                                                                class={"mx-name-container7 alert alert-primary spacing-inner-top-medium spacing-inner-right-medium spacing-inner-bottom-medium spacing-inner-left-medium"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2"
                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2"
                                                                                        class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                        style={undefined}
                                                                                        content={[
                                                                                            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0"
                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0"
                                                                                                class={"row"}
                                                                                                style={undefined}
                                                                                                content={[
                                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column0"
                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column0"
                                                                                                        class={"col-lg-auto col-md-auto col-auto align-self-start"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container4"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container4"
                                                                                                                class={"mx-name-container4 alert-icon mx-icon mx-icon-filled mx-icon-info-circle"}
                                                                                                                style={undefined}
                                                                                                                renderMode={"div"}
                                                                                                                onClick={undefined}
                                                                                                                content={undefined}
                                                                                                                ariaHidden={false} />
                                                                                                        ]} />,
                                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column1"
                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid2$row0$column1"
                                                                                                        class={"col-lg col-md col align-self-center"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text27"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text27"
                                                                                                                class={"mx-name-text27 alert-title text-bold spacing-outer-bottom-none"}
                                                                                                                style={undefined}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Knowledge Base Information" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                renderMode={"h5"} />,
                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text30"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text30"
                                                                                                                class={"mx-name-text30 alert-description spacing-outer-bottom-none"}
                                                                                                                style={undefined}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "For additional details regarding the supported models and regions when using Amazon Bedrock’s Knowledge Bases, please refer to the official documentation:" }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                renderMode={"p"} />,
                                                                                                            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3"
                                                                                                                class={"mx-name-layoutGrid3 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                                style={undefined}
                                                                                                                content={[
                                                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0"
                                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0"
                                                                                                                        class={"row"}
                                                                                                                        style={undefined}
                                                                                                                        content={[
                                                                                                                            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0$column0"
                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row0$column0"
                                                                                                                                class={"col-lg col-md col"}
                                                                                                                                style={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container6"
                                                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container6"
                                                                                                                                        class={"mx-name-container6 row-left spacing-outer-top-medium"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text1"
                                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text1"
                                                                                                                                                class={"mx-name-text1 spacing-inner-right"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "- " }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />,
                                                                                                                                            <$ActionButton key="p.MyFirstAIBot.BotConfig_NewEdit.actionButton3"
                                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.actionButton3"
                                                                                                                                                buttonId={"p.MyFirstAIBot.BotConfig_NewEdit.actionButton3"}
                                                                                                                                                class={"mx-name-actionButton3"}
                                                                                                                                                style={undefined}
                                                                                                                                                tabIndex={undefined}
                                                                                                                                                renderType={"link"}
                                                                                                                                                role={"button"}
                                                                                                                                                buttonClass={"btn-default"}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Supported AWS Regions" }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                tooltip={TextProperty({
                                                                                                                                                    "value": t([
                                                                                                                                                        ""
                                                                                                                                                    ])
                                                                                                                                                })}
                                                                                                                                                icon={undefined}
                                                                                                                                                action={ActionProperty({
                                                                                                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.aws.amazon.com/bedrock/latest/userguide/bedrock-regions.html" }, "disabledDuringExecution": true },
                                                                                                                                                    "abortOnServerValidation": true
                                                                                                                                                })} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />
                                                                                                                        ]} />,
                                                                                                                    <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1"
                                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1"
                                                                                                                        class={"row"}
                                                                                                                        style={undefined}
                                                                                                                        content={[
                                                                                                                            <$Div key="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1$column0"
                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.layoutGrid3$row1$column0"
                                                                                                                                class={"col-lg col-md col"}
                                                                                                                                style={undefined}
                                                                                                                                content={[
                                                                                                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container8"
                                                                                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container8"
                                                                                                                                        class={"mx-name-container8 row-left spacing-outer-top-none spacing-inner-bottom-medium"}
                                                                                                                                        style={undefined}
                                                                                                                                        renderMode={"div"}
                                                                                                                                        onClick={undefined}
                                                                                                                                        content={[
                                                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text2"
                                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text2"
                                                                                                                                                class={"mx-name-text2 spacing-inner-right"}
                                                                                                                                                style={undefined}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "- " }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                renderMode={"span"} />,
                                                                                                                                            <$ActionButton key="p.MyFirstAIBot.BotConfig_NewEdit.actionButton4"
                                                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.actionButton4"
                                                                                                                                                buttonId={"p.MyFirstAIBot.BotConfig_NewEdit.actionButton4"}
                                                                                                                                                class={"mx-name-actionButton4"}
                                                                                                                                                style={undefined}
                                                                                                                                                tabIndex={undefined}
                                                                                                                                                renderType={"link"}
                                                                                                                                                role={"button"}
                                                                                                                                                buttonClass={"btn-default"}
                                                                                                                                                caption={t([
                                                                                                                                                    ExpressionProperty({
                                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Model support by feature" }, "args": {} }
                                                                                                                                                    })
                                                                                                                                                ])}
                                                                                                                                                tooltip={TextProperty({
                                                                                                                                                    "value": t([
                                                                                                                                                        ""
                                                                                                                                                    ])
                                                                                                                                                })}
                                                                                                                                                icon={undefined}
                                                                                                                                                action={ActionProperty({
                                                                                                                                                    "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.aws.amazon.com/bedrock/latest/userguide/models-features.html" }, "disabledDuringExecution": true },
                                                                                                                                                    "abortOnServerValidation": true
                                                                                                                                                })} />
                                                                                                                                        ]}
                                                                                                                                        ariaHidden={false} />
                                                                                                                                ]} />
                                                                                                                        ]} />
                                                                                                                ]} />,
                                                                                                            <$Text key="p.MyFirstAIBot.BotConfig_NewEdit.text31"
                                                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.text31"
                                                                                                                class={"mx-name-text31 alert-description spacing-outer-bottom-none text-semibold"}
                                                                                                                style={undefined}
                                                                                                                caption={t([
                                                                                                                    ExpressionProperty({
                                                                                                                        "expression": { "expr": { "type": "literal", "value": "A list of available knowledge bases can only be displayed if the environment variables are valid and set accordingly." }, "args": {} }
                                                                                                                    })
                                                                                                                ])}
                                                                                                                renderMode={"p"} />
                                                                                                        ]} />
                                                                                                ]} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]}
                                                                        ariaHidden={false} />
                                                                ]} />,
                                                            <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.dropDown3$formGroup"
                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dropDown3$formGroup"
                                                                class={"mx-name-dropDown3"}
                                                                style={undefined}
                                                                control={[
                                                                    <$Combobox key="p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                                        source={"static"}
                                                                        optionsSourceType={"association"}
                                                                        optionsSourceDatabaseDataSource={undefined}
                                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                                        optionsSourceAssociationDataSource={undefined}
                                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                                        staticAttribute={AttributeProperty({
                                                                            "scope": "$BotConfig",
                                                                            "path": "",
                                                                            "entity": "MyFirstAIBot.BotConfig",
                                                                            "attribute": "ActionMicroflowSelection",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false
                                                                        })}
                                                                        optionsSourceStaticDataSource={[
                                                                            {
                                                                                "staticDataSourceValue": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, "args": {} }
                                                                                }),
                                                                                "staticDataSourceCustomContent": undefined,
                                                                                "staticDataSourceCaption": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" } ] }, "args": {} }
                                                                                    })
                                                                                ])
                                                                            },
                                                                            {
                                                                                "staticDataSourceValue": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" }, "args": {} }
                                                                                }),
                                                                                "staticDataSourceCustomContent": undefined,
                                                                                "staticDataSourceCaption": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" } ] }, "args": {} }
                                                                                    })
                                                                                ])
                                                                            }
                                                                        ]}
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
                                                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Action Microflow" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown3"
                                                                })} />,
                                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup$visibility"
                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "BotConfig", "path": "ActionMicroflowSelection" }, { "type": "literal", "value": "ChatContext_BedrockRetrieveAndGenerate_ActionMicroflow" } ] }, "args": { "BotConfig": { "widget": "$BotConfig", "source": "object" } } }
                                                                })}
                                                                contents={[
                                                                    <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup"
                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox3$formGroup"
                                                                        class={"mx-name-comboBox3"}
                                                                        style={undefined}
                                                                        control={[
                                                                            <$Combobox key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
                                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
                                                                                source={"context"}
                                                                                optionsSourceType={"association"}
                                                                                optionsSourceDatabaseDataSource={undefined}
                                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                                optionsSourceDatabaseDefaultValue={undefined}
                                                                                attributeAssociation={AssociationProperty({
                                                                                    "type": "Reference",
                                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                                    "path": "",
                                                                                    "attribute": "MyFirstAIBot.BotConfig_AmazonBedrockKnowledgeBase",
                                                                                    "endpointEntity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                    "selectableObjectsId": "p.7",
                                                                                    "scope": "$BotConfig",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                                })}
                                                                                optionsSourceAssociationDataSource={MicroflowObjectListProperty({
                                                                                    "argMap": {},
                                                                                    "dataSourceId": "p.7",
                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView2",
                                                                                    "operationId": "EENIGv4/xlqTWBgrK7+nfA"
                                                                                })}
                                                                                optionsSourceAssociationCaptionType={"attribute"}
                                                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "AmazonBedrockConnector.AmazonBedrockKnowledgeBase",
                                                                                    "attribute": "Name",
                                                                                    "attributeType": "String",
                                                                                    "sortable": true,
                                                                                    "filterable": true,
                                                                                    "dataSourceId": "p.7",
                                                                                    "isList": false
                                                                                })}
                                                                                optionsSourceAssociationCaptionExpression={undefined}
                                                                                optionsSourceStaticDataSource={[]}
                                                                                emptyOptionText={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                    })
                                                                                ])}
                                                                                filterType={"contains"}
                                                                                noOptionsText={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Create a Bedrock configuration and click 'Save & Sync' to see available knowledge bases." }, "args": {} }
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
                                                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
                                                                                })} />
                                                                        ]}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Knowledge base" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
                                                                        })}
                                                                        width={undefined}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox3"
                                                                        })} />
                                                                ]} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        hideFooter={false}
                                        footer={undefined} />,
                                    <$DataView key="p.MyFirstAIBot.BotConfig_NewEdit.dataView6"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dataView6"
                                        class={"mx-name-dataView6 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.138",
                                            "scope": "$BotConfig",
                                            "editable": true,
                                            "path": "ConversationalUI.ProviderConfig_DeployedModel/OpenAIConnector.OpenAIDeployedModel",
                                            "operationId": "tSSPw/PSxF66pP4TL8Rl7g"
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.container2$visibility"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container2$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.dataView6", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container2"
                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container2"
                                                        class={"mx-name-container2"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.dropDown4$formGroup"
                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dropDown4$formGroup"
                                                                class={"mx-name-dropDown4"}
                                                                style={undefined}
                                                                control={[
                                                                    <$Combobox key="p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                                        source={"static"}
                                                                        optionsSourceType={"association"}
                                                                        optionsSourceDatabaseDataSource={undefined}
                                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                                        optionsSourceAssociationDataSource={undefined}
                                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                                        staticAttribute={AttributeProperty({
                                                                            "scope": "$BotConfig",
                                                                            "path": "",
                                                                            "entity": "MyFirstAIBot.BotConfig",
                                                                            "attribute": "ActionMicroflowSelection",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false
                                                                        })}
                                                                        optionsSourceStaticDataSource={[
                                                                            {
                                                                                "staticDataSourceValue": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, "args": {} }
                                                                                }),
                                                                                "staticDataSourceCustomContent": undefined,
                                                                                "staticDataSourceCaption": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" } ] }, "args": {} }
                                                                                    })
                                                                                ])
                                                                            }
                                                                        ]}
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
                                                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Action Microflow" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown4"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        hideFooter={false}
                                        footer={undefined} />,
                                    <$DataView key="p.MyFirstAIBot.BotConfig_NewEdit.dataView7"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dataView7"
                                        class={"mx-name-dataView7 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.147",
                                            "scope": "$BotConfig",
                                            "editable": true,
                                            "path": "ConversationalUI.ProviderConfig_DeployedModel/MxGenAIConnector.MxCloudDeployedModel",
                                            "operationId": "7jWWqblqT1CeJOj/uLE+1w"
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.container13$visibility"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container13$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "!=", "parameters": [ { "type": "variable", "variable": "currentObject" }, { "type": "literal", "value": null } ] }, "args": { "currentObject": { "widget": "p.MyFirstAIBot.BotConfig_NewEdit.dataView7", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.MyFirstAIBot.BotConfig_NewEdit.container13"
                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.container13"
                                                        class={"mx-name-container13"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.dropDown5$formGroup"
                                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dropDown5$formGroup"
                                                                class={"mx-name-dropDown5"}
                                                                style={undefined}
                                                                control={[
                                                                    <$Combobox key="p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                                        source={"static"}
                                                                        optionsSourceType={"association"}
                                                                        optionsSourceDatabaseDataSource={undefined}
                                                                        optionsSourceDatabaseCaptionType={"attribute"}
                                                                        optionsSourceDatabaseDefaultValue={undefined}
                                                                        optionsSourceAssociationDataSource={undefined}
                                                                        optionsSourceAssociationCaptionType={"attribute"}
                                                                        staticAttribute={AttributeProperty({
                                                                            "scope": "$BotConfig",
                                                                            "path": "",
                                                                            "entity": "MyFirstAIBot.BotConfig",
                                                                            "attribute": "ActionMicroflowSelection",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false
                                                                        })}
                                                                        optionsSourceStaticDataSource={[
                                                                            {
                                                                                "staticDataSourceValue": ExpressionProperty({
                                                                                    "expression": { "expr": { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, "args": {} }
                                                                                }),
                                                                                "staticDataSourceCustomContent": undefined,
                                                                                "staticDataSourceCaption": t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "function", "name": "getCaption", "parameters": [ { "type": "literal", "value": "ChatContext_ChatWithHistory_ActionMicroflow" }, { "type": "literal", "value": "MyFirstAIBot.ENUM_ActionMicroflowSelection" } ] }, "args": {} }
                                                                                    })
                                                                                ])
                                                                            }
                                                                        ]}
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
                                                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                                        })} />
                                                                ]}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "Action Microflow" }, "args": {} }
                                                                    })
                                                                ])}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.dropDown5"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        hideFooter={false}
                                        footer={undefined} />,
                                    <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox2$formGroup"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox2$formGroup"
                                        class={"mx-name-comboBox2"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceDatabaseDefaultValue={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstAIBot.BotConfig",
                                                    "path": "",
                                                    "attribute": "MyFirstAIBot.BotConfig_EmbeddingDeployedModel",
                                                    "endpointEntity": "GenAICommons.DeployedModel",
                                                    "selectableObjectsId": "p.8",
                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.8",
                                                    "entity": "GenAICommons.DeployedModel",
                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                    "operationId": "y2kQzmrp9F+lzbaxeZ4vIQ",
                                                    "sort": []
                                                })}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "GenAICommons.DeployedModel",
                                                    "attribute": "DisplayName",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.8",
                                                    "isList": false
                                                })}
                                                optionsSourceAssociationCaptionExpression={undefined}
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
                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Embedding Model" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox2"
                                        })} />,
                                    <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox1$formGroup"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox1$formGroup"
                                        class={"mx-name-comboBox1"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceDatabaseDefaultValue={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "Reference",
                                                    "entity": "MyFirstAIBot.BotConfig",
                                                    "path": "",
                                                    "attribute": "MyFirstAIBot.BotConfig_DatabaseConfiguration",
                                                    "endpointEntity": "PgVectorKnowledgeBase.DatabaseConfiguration",
                                                    "selectableObjectsId": "p.9",
                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.9",
                                                    "entity": "PgVectorKnowledgeBase.DatabaseConfiguration",
                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                    "operationId": "Oe43FVYJJ1CMeZjLg/fjGA",
                                                    "sort": []
                                                })}
                                                optionsSourceAssociationCaptionType={"attribute"}
                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                    "path": "",
                                                    "entity": "PgVectorKnowledgeBase.DatabaseConfiguration",
                                                    "attribute": "DisplayName",
                                                    "attributeType": "String",
                                                    "sortable": true,
                                                    "filterable": true,
                                                    "dataSourceId": "p.9",
                                                    "isList": false
                                                })}
                                                optionsSourceAssociationCaptionExpression={undefined}
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
                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "DatabaseConfiguration" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.comboBox1"
                                        })} />,
                                    <$FormGroup key="p.MyFirstAIBot.BotConfig_NewEdit.textBox1$formGroup"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.textBox1$formGroup"
                                        class={"mx-name-textBox1 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MyFirstAIBot.BotConfig_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "MyFirstAIBot.BotConfig",
                                                    "attribute": "KnowledgeBaseName",
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
                                                    "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Knowledge base name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MyFirstAIBot.BotConfig_NewEdit.textBox1"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.actionButton1$visibility"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MyFirstAIBot.BotConfig_NewEdit.actionButton1"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.actionButton1"
                                                buttonId={"p.MyFirstAIBot.BotConfig_NewEdit.actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "$BotConfig", "source": "object" } }, "config": { "operationId": "/6vDFvoJQVWl+P2f49eRLg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ConditionalVisibilityWrapper key="p.MyFirstAIBot.BotConfig_NewEdit.actionButton2$visibility"
                                        $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.actionButton2$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MyFirstAIBot.BotConfig_NewEdit.actionButton2"
                                                $widgetId="p.MyFirstAIBot.BotConfig_NewEdit.actionButton2"
                                                buttonId={"p.MyFirstAIBot.BotConfig_NewEdit.actionButton2"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "BotConfig": { "widget": "$BotConfig", "source": "object" } }, "config": { "operationId": "iJIhuY1I5lOIhlh5dT0ktg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Bot Configuration New edit"
]);

export const classes = "";

export const cancelChangesOperationId = "d60LmsD8sVyZJf/lcUPA8Q";
export const closeButton = "p.MyFirstAIBot.BotConfig_NewEdit.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
