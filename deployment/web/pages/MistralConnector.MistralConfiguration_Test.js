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
import * as ImageWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.mjs";
const Image = Object.getOwnPropertyDescriptor(ImageWidgetModule, "Image")?.value || Object.getOwnPropertyDescriptor(ImageWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/image/Image.css";
import { Label } from "mendix/widgets/web/Label";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $TextArea, $Combobox, $ConditionalVisibilityWrapper, $ActionButton, $Container, $Label, $Image, $Text } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, TextArea, Combobox, ConditionalVisibilityWrapper, ActionButton, Container, Label, Image, Text });

addEnumerations({
    "OpenAIConnector.ENUM_TestSuccess": [
        [
            "Success",
            t([
                "Success"
            ])
        ],
        [
            "Failure",
            t([
                "Failure"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid1"
        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid1$row0"
                $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid1$row0$column0"
                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MistralConnector.MistralConfiguration_Test.dataView1"
                                $widgetId="p.MistralConnector.MistralConfiguration_Test.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.11",
                                    "scope": "$MistralConfiguration",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$DataView key="p.MistralConnector.MistralConfiguration_Test.dataView5"
                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.dataView5"
                                        class={"mx-name-dataView5 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={AssociationObjectProperty({
                                            "dataSourceId": "p.14",
                                            "scope": "$ConfigurationTest",
                                            "editable": true
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid2"
                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid2"
                                                class={"mx-name-layoutGrid2 mx-layoutgrid mx-layoutgrid-fluid"}
                                                style={undefined}
                                                content={[
                                                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid2$row0"
                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid2$row0"
                                                        class={"row"}
                                                        style={undefined}
                                                        content={[
                                                            <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid2$row0$column0"
                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid2$row0$column0"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$FormGroup key="p.MistralConnector.MistralConfiguration_Test.textBox1$formGroup"
                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.textBox1$formGroup"
                                                                        class={"mx-name-textBox1 mx-textbox"}
                                                                        style={undefined}
                                                                        control={[
                                                                            <$TextBox key="p.MistralConnector.MistralConfiguration_Test.textBox1"
                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.textBox1"
                                                                                inputValue={AttributeProperty({
                                                                                    "scope": "$MistralConfiguration",
                                                                                    "path": "",
                                                                                    "entity": "MistralConnector.MistralConfiguration",
                                                                                    "attribute": "DisplayName",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                    "isList": false,
                                                                                    "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
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
                                                                                    "widgetId": "p.MistralConnector.MistralConfiguration_Test.textBox1"
                                                                                })} />
                                                                        ]}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Configuration name" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.MistralConnector.MistralConfiguration_Test.textBox1"
                                                                        })}
                                                                        width={undefined}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.MistralConnector.MistralConfiguration_Test.textBox1"
                                                                        })} />,
                                                                    <$FormGroup key="p.MistralConnector.MistralConfiguration_Test.textArea3$formGroup"
                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.textArea3$formGroup"
                                                                        class={"mx-name-textArea3 mx-textarea"}
                                                                        style={undefined}
                                                                        control={[
                                                                            <$TextArea key="p.MistralConnector.MistralConfiguration_Test.textArea3"
                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.textArea3"
                                                                                inputValue={AttributeProperty({
                                                                                    "scope": "$MistralConfiguration",
                                                                                    "path": "",
                                                                                    "entity": "MistralConnector.MistralConfiguration",
                                                                                    "attribute": "Endpoint",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                                    "isList": false,
                                                                                    "isEditable": { "expr": { "type": "literal", "value": false }, "args": {} },
                                                                                    "validation": null
                                                                                })}
                                                                                counterMessage={TextProperty({
                                                                                    "value": t([
                                                                                        ""
                                                                                    ])
                                                                                })}
                                                                                maxLength={500}
                                                                                numberOfLines={undefined}
                                                                                autoGrow={true}
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
                                                                                ariaLabel={undefined}
                                                                                ariaRequired={undefined}
                                                                                submitWhileEditing={false}
                                                                                submitDelay={300}
                                                                                tabIndex={undefined}
                                                                                id={DerivedUniqueIdProperty({
                                                                                    "widgetId": "p.MistralConnector.MistralConfiguration_Test.textArea3"
                                                                                })} />
                                                                        ]}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Endpoint" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.MistralConnector.MistralConfiguration_Test.textArea3"
                                                                        })}
                                                                        width={undefined}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.MistralConnector.MistralConfiguration_Test.textArea3"
                                                                        })} />
                                                                ]} />,
                                                            <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid2$row0$column1"
                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid2$row0$column1"
                                                                class={"col-lg col-md col"}
                                                                style={undefined}
                                                                content={[
                                                                    <$FormGroup key="p.MistralConnector.MistralConfiguration_Test.comboBox1$formGroup"
                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.comboBox1$formGroup"
                                                                        class={"mx-name-comboBox1"}
                                                                        style={undefined}
                                                                        control={[
                                                                            <$Combobox key="p.MistralConnector.MistralConfiguration_Test.comboBox1"
                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.comboBox1"
                                                                                source={"context"}
                                                                                optionsSourceType={"association"}
                                                                                optionsSourceDatabaseDataSource={undefined}
                                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                                optionsSourceDatabaseDefaultValue={undefined}
                                                                                attributeAssociation={AssociationProperty({
                                                                                    "type": "Reference",
                                                                                    "entity": "OpenAIConnector.ConfigurationTest",
                                                                                    "path": "",
                                                                                    "attribute": "OpenAIConnector.ConfigurationTest_OpenAIDeployedModel",
                                                                                    "endpointEntity": "OpenAIConnector.OpenAIDeployedModel",
                                                                                    "selectableObjectsId": "p.0",
                                                                                    "scope": "p.MistralConnector.MistralConfiguration_Test.dataView5",
                                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                                })}
                                                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                                                    "dataSourceId": "p.0",
                                                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
                                                                                    "scope": "p.MistralConnector.MistralConfiguration_Test.dataView5",
                                                                                    "operationId": "4vHCm6gwQlSWf3k4hLmoNw",
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
                                                                                        "dataView1": [
                                                                                            "$MistralConfiguration"
                                                                                        ]
                                                                                    },
                                                                                    "constraints": { "type": "function", "name": "=", "parameters": [ { "type": "attribute", "attribute": "OpenAIConnector.OpenAIDeployedModel_Configuration", "context": "OpenAIConnector.OpenAIDeployedModel", "attributeType": "ObjectReference" }, { "type": "variable", "name": "dataView1" } ] }
                                                                                })}
                                                                                optionsSourceAssociationCaptionType={"attribute"}
                                                                                optionsSourceAssociationCaptionAttribute={ListAttributeProperty({
                                                                                    "path": "",
                                                                                    "entity": "OpenAIConnector.OpenAIDeployedModel",
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
                                                                                filterType={"contains"}
                                                                                noOptionsText={t([
                                                                                    ExpressionProperty({
                                                                                        "expression": { "expr": { "type": "literal", "value": "Please register deployed models for the configuration on the overview page." }, "args": {} }
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
                                                                                    "widgetId": "p.MistralConnector.MistralConfiguration_Test.comboBox1"
                                                                                })} />
                                                                        ]}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Deployed model" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        labelFor={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.MistralConnector.MistralConfiguration_Test.comboBox1"
                                                                        })}
                                                                        width={undefined}
                                                                        orientation={"vertical"}
                                                                        hasError={ValidationProperty({
                                                                            "inputWidgetId": "p.MistralConnector.MistralConfiguration_Test.comboBox1"
                                                                        })} />,
                                                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.MistralConfiguration_Test.actionButton1$visibility"
                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.actionButton1$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                        })}
                                                                        contents={[
                                                                            <$ActionButton key="p.MistralConnector.MistralConfiguration_Test.actionButton1"
                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.actionButton1"
                                                                                buttonId={"p.MistralConnector.MistralConfiguration_Test.actionButton1"}
                                                                                class={"mx-name-actionButton1 spacing-outer-bottom-medium"}
                                                                                style={undefined}
                                                                                tabIndex={undefined}
                                                                                renderType={"button"}
                                                                                role={undefined}
                                                                                buttonClass={"btn-primary"}
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
                                                                                icon={undefined}
                                                                                action={ActionProperty({
                                                                                    "action": { "type": "callMicroflow", "argMap": { "ConfigurationTest": { "widget": "$ConfigurationTest", "source": "object" } }, "config": { "operationId": "xgS7Sd1u91u3D4yUB7Tl+w", "async": true, "progress": { "message": t([ "" ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                                    "abortOnServerValidation": true
                                                                                })} />
                                                                        ]} />,
                                                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.MistralConfiguration_Test.container3$visibility"
                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.container3$visibility"
                                                                        visible={ExpressionProperty({
                                                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Success" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Failure" } ] } }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralConfiguration_Test.dataView5", "source": "object" } } }
                                                                        })}
                                                                        contents={[
                                                                            <$Container key="p.MistralConnector.MistralConfiguration_Test.container3"
                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.container3"
                                                                                class={"mx-name-container3 label-with-text"}
                                                                                style={undefined}
                                                                                renderMode={"div"}
                                                                                onClick={undefined}
                                                                                content={[
                                                                                    <$Label key="p.MistralConnector.MistralConfiguration_Test.label1"
                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.label1"
                                                                                        class={"mx-name-label1"}
                                                                                        style={undefined}
                                                                                        id={DerivedUniqueIdProperty({
                                                                                            "widgetId": "p.MistralConnector.MistralConfiguration_Test.label1"
                                                                                        })}
                                                                                        caption={TextProperty({
                                                                                            "value": t([
                                                                                                "Assistant response"
                                                                                            ])
                                                                                        })} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.MistralConfiguration_Test.container6$visibility"
                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.container6$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Success" } ] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralConfiguration_Test.dataView5", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$Container key="p.MistralConnector.MistralConfiguration_Test.container6"
                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.container6"
                                                                                                class={"mx-name-container6 alert alert-success spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid6"
                                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid6"
                                                                                                        class={"mx-name-layoutGrid6 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid6$row0"
                                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid6$row0"
                                                                                                                class={"row"}
                                                                                                                style={undefined}
                                                                                                                content={[
                                                                                                                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid6$row0$column0"
                                                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid6$row0$column0"
                                                                                                                        class={"col-lg-auto col-md-auto col-auto align-self-start"}
                                                                                                                        style={undefined}
                                                                                                                        content={[
                                                                                                                            <$Image key="p.MistralConnector.MistralConfiguration_Test.image3"
                                                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.image3"
                                                                                                                                datasource={"icon"}
                                                                                                                                imageObject={undefined}
                                                                                                                                defaultImageDynamic={undefined}
                                                                                                                                imageUrl={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                imageIcon={WebIconProperty({
                                                                                                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-info-sign" }
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
                                                                                                                                iconSize={24}
                                                                                                                                displayAs={"fullImage"}
                                                                                                                                responsive={true}
                                                                                                                                class={"mx-name-image3"}
                                                                                                                                style={undefined}
                                                                                                                                tabIndex={undefined} />
                                                                                                                        ]} />,
                                                                                                                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid6$row0$column1"
                                                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid6$row0$column1"
                                                                                                                        class={"col-lg col-md col align-self-center"}
                                                                                                                        style={undefined}
                                                                                                                        content={[
                                                                                                                            <$Text key="p.MistralConnector.MistralConfiguration_Test.text27"
                                                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.text27"
                                                                                                                                class={"mx-name-text27 alert-title text-bold spacing-outer-bottom-none"}
                                                                                                                                style={undefined}
                                                                                                                                caption={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Success!" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                renderMode={"h5"} />
                                                                                                                        ]} />
                                                                                                                ]} />
                                                                                                        ]} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]} />,
                                                                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.MistralConfiguration_Test.container7$visibility"
                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.container7$visibility"
                                                                                        visible={ExpressionProperty({
                                                                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "TestSuccess" }, { "type": "literal", "value": "Failure" } ] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralConfiguration_Test.dataView5", "source": "object" } } }
                                                                                        })}
                                                                                        contents={[
                                                                                            <$Container key="p.MistralConnector.MistralConfiguration_Test.container7"
                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.container7"
                                                                                                class={"mx-name-container7 alert alert-danger spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium"}
                                                                                                style={undefined}
                                                                                                renderMode={"div"}
                                                                                                onClick={undefined}
                                                                                                content={[
                                                                                                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid7"
                                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid7"
                                                                                                        class={"mx-name-layoutGrid7 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                                                        style={undefined}
                                                                                                        content={[
                                                                                                            <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid7$row0"
                                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid7$row0"
                                                                                                                class={"row"}
                                                                                                                style={undefined}
                                                                                                                content={[
                                                                                                                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid7$row0$column0"
                                                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid7$row0$column0"
                                                                                                                        class={"col-lg-auto col-md-auto col-auto align-self-start"}
                                                                                                                        style={undefined}
                                                                                                                        content={[
                                                                                                                            <$Image key="p.MistralConnector.MistralConfiguration_Test.image4"
                                                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.image4"
                                                                                                                                datasource={"icon"}
                                                                                                                                imageObject={undefined}
                                                                                                                                defaultImageDynamic={undefined}
                                                                                                                                imageUrl={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                imageIcon={WebIconProperty({
                                                                                                                                    "icon": { "type": "glyph", "iconClass": "glyphicon-exclamation-sign" }
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
                                                                                                                                iconSize={24}
                                                                                                                                displayAs={"fullImage"}
                                                                                                                                responsive={true}
                                                                                                                                class={"mx-name-image4"}
                                                                                                                                style={undefined}
                                                                                                                                tabIndex={undefined} />
                                                                                                                        ]} />,
                                                                                                                    <$Div key="p.MistralConnector.MistralConfiguration_Test.layoutGrid7$row0$column1"
                                                                                                                        $widgetId="p.MistralConnector.MistralConfiguration_Test.layoutGrid7$row0$column1"
                                                                                                                        class={"col-lg col-md col align-self-center"}
                                                                                                                        style={undefined}
                                                                                                                        content={[
                                                                                                                            <$Text key="p.MistralConnector.MistralConfiguration_Test.text28"
                                                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.text28"
                                                                                                                                class={"mx-name-text28 alert-title text-bold spacing-outer-bottom-none"}
                                                                                                                                style={undefined}
                                                                                                                                caption={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Failure!" }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                renderMode={"h5"} />,
                                                                                                                            <$Text key="p.MistralConnector.MistralConfiguration_Test.text3"
                                                                                                                                $widgetId="p.MistralConnector.MistralConfiguration_Test.text3"
                                                                                                                                class={"mx-name-text3"}
                                                                                                                                style={undefined}
                                                                                                                                caption={t([
                                                                                                                                    ExpressionProperty({
                                                                                                                                        "expression": { "expr": { "type": "literal", "value": "Check the logs for details." }, "args": {} }
                                                                                                                                    })
                                                                                                                                ])}
                                                                                                                                renderMode={"span"} />
                                                                                                                        ]} />
                                                                                                                ]} />
                                                                                                        ]} />
                                                                                                ]}
                                                                                                ariaHidden={false} />
                                                                                        ]} />
                                                                                ]}
                                                                                ariaHidden={false} />
                                                                        ]} />
                                                                ]} />
                                                        ]} />
                                                ]} />
                                        ]}
                                        hideFooter={true}
                                        footer={undefined} />
                                ]}
                                hideFooter={true}
                                footer={undefined} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Test configuration"
]);

export const classes = "";

export const cancelChangesOperationId = "nrTHpAVMQ1WVYxEJ46G8Rw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
