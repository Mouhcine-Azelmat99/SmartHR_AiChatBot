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
import { ListExpressionProperty } from "mendix/ListExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import * as ComboboxWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.mjs";
const Combobox = Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "Combobox")?.value || Object.getOwnPropertyDescriptor(ComboboxWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRChatBot/deployment/web/widgets/com/mendix/widget/web/combobox/Combobox.css";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $Container, $Text, $ActionButton, $RadioButtonGroup, $ConditionalVisibilityWrapper, $Combobox } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, Container, Text, ActionButton, RadioButtonGroup, ConditionalVisibilityWrapper, Combobox });

addEnumerations({
    "GenAICommons.ENUM_ModelModality": [
        [
            "Text",
            t([
                "Text"
            ])
        ],
        [
            "Embeddings",
            t([
                "Embeddings"
            ])
        ],
        [
            "Image",
            t([
                "Image"
            ])
        ],
        [
            "Document",
            t([
                "Document"
            ])
        ],
        [
            "Audio",
            t([
                "Audio"
            ])
        ],
        [
            "Video",
            t([
                "Video"
            ])
        ],
        [
            "Other",
            t([
                "Other"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1"
        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0"
                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.MistralConnector.MistralDeployedModel_NewEdit.dataView6"
                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.15",
                                    "scope": "$MistralDeployedModel",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.textBox2$formGroup"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.textBox2$formGroup"
                                        class={"mx-name-textBox2 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MistralConnector.MistralDeployedModel",
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
                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Display name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox2"
                                        })} />,
                                    <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.textBox4$formGroup"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 spacing-outer-bottom-none mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "$MistralDeployedModel",
                                                    "path": "",
                                                    "entity": "MistralConnector.MistralDeployedModel",
                                                    "attribute": "Model",
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
                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Model name" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.textBox4"
                                        })} />,
                                    <$Container key="p.MistralConnector.MistralDeployedModel_NewEdit.container2"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.container2"
                                        class={"mx-name-container2 spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.MistralConnector.MistralDeployedModel_NewEdit.container5"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.container5"
                                                class={"mx-name-container5 row-left"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.MistralConnector.MistralDeployedModel_NewEdit.text2"
                                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.text2"
                                                        class={"mx-name-text2 text-detail text-small spacing-outer-bottom-none"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "The name of the model as indicated by " }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"p"} />,
                                                    <$ActionButton key="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton4"
                                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton4"
                                                        buttonId={"p.MistralConnector.MistralDeployedModel_NewEdit.actionButton4"}
                                                        class={"mx-name-actionButton4 btn-sm spacing-outer-bottom-none spacing-outer-left spacing-outer-top-none"}
                                                        style={undefined}
                                                        tabIndex={undefined}
                                                        renderType={"link"}
                                                        role={"button"}
                                                        buttonClass={"btn-default"}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Mistral" }, "args": {} }
                                                            })
                                                        ])}
                                                        tooltip={TextProperty({
                                                            "value": t([
                                                                ""
                                                            ])
                                                        })}
                                                        icon={undefined}
                                                        action={ActionProperty({
                                                            "action": { "type": "openLink", "argMap": {}, "config": { "schema": "web", "address": "https://docs.mistral.ai/getting-started/models/models_overview/" }, "disabledDuringExecution": true },
                                                            "abortOnServerValidation": true
                                                        })} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1$formGroup"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1$formGroup"
                                        class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                                                value={AttributeProperty({
                                                    "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "MistralConnector.MistralDeployedModel",
                                                    "attribute": "OutputModality",
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
                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Output modality" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons1"
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.MistralDeployedModel_NewEdit.container1$visibility"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.container1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "OutputModality" }, { "type": "literal", "value": "Text" } ] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$Container key="p.MistralConnector.MistralDeployedModel_NewEdit.container1"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.container1"
                                                class={"mx-name-container1"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2$formGroup"
                                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2$formGroup"
                                                        class={"mx-name-radioButtons2 mx-radiobuttons inline"}
                                                        style={undefined}
                                                        control={[
                                                            <$RadioButtonGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                                                value={AttributeProperty({
                                                                    "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                                    "path": "",
                                                                    "entity": "MistralConnector.MistralDeployedModel",
                                                                    "attribute": "SupportsSystemPrompt",
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
                                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Supports system prompt" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons2"
                                                        })} />,
                                                    <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3$formGroup"
                                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3$formGroup"
                                                        class={"mx-name-radioButtons3 mx-radiobuttons inline"}
                                                        style={undefined}
                                                        control={[
                                                            <$RadioButtonGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                                                value={AttributeProperty({
                                                                    "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                                    "path": "",
                                                                    "entity": "MistralConnector.MistralDeployedModel",
                                                                    "attribute": "SupportsConversationsWithHistory",
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
                                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Supports conversations with history" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons3"
                                                        })} />,
                                                    <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4$formGroup"
                                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4$formGroup"
                                                        class={"mx-name-radioButtons4 mx-radiobuttons inline"}
                                                        style={undefined}
                                                        control={[
                                                            <$RadioButtonGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
                                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
                                                                value={AttributeProperty({
                                                                    "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                                    "path": "",
                                                                    "entity": "MistralConnector.MistralDeployedModel",
                                                                    "attribute": "SupportsFunctionCalling",
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
                                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Supports function calling" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons4"
                                                        })} />
                                                ]}
                                                ariaHidden={false} />
                                        ]} />,
                                    <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1$formGroup"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1$formGroup"
                                        class={"mx-name-comboBox1"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceDatabaseDefaultValue={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "ReferenceSet",
                                                    "entity": "MistralConnector.MistralDeployedModel",
                                                    "path": "",
                                                    "attribute": "GenAICommons.DeployedModel_InputModality",
                                                    "endpointEntity": "GenAICommons.InputModality",
                                                    "selectableObjectsId": "p.2",
                                                    "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                    "dataSourceId": "p.2",
                                                    "entity": "GenAICommons.InputModality",
                                                    "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                    "operationId": "tOOXacxciVyYNO3Kg8pgTQ",
                                                    "sort": [
                                                        [
                                                            "ModelModality",
                                                            "asc"
                                                        ]
                                                    ]
                                                })}
                                                optionsSourceAssociationCaptionType={"expression"}
                                                optionsSourceAssociationCaptionExpression={ListExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "getKey", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ModelModality" } ] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1", "source": "object" } } },
                                                    "dataSourceId": "p.2"
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
                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Input modality" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.comboBox1"
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup$visibility"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "currentObject" } ] }, { "type": "literal", "value": false } ] }, "args": { "currentObject": { "widget": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$FormGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5$formGroup"
                                                class={"mx-name-radioButtons5 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
                                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
                                                        value={AttributeProperty({
                                                            "scope": "p.MistralConnector.MistralDeployedModel_NewEdit.dataView6",
                                                            "path": "",
                                                            "entity": "MistralConnector.MistralDeployedModel",
                                                            "attribute": "IsActive",
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
                                                            "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Is active" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.MistralConnector.MistralDeployedModel_NewEdit.radioButtons5"
                                                })} />
                                        ]} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1$visibility"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1"
                                                $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1"
                                                buttonId={"p.MistralConnector.MistralDeployedModel_NewEdit.actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "MistralDeployedModel": { "widget": "$MistralDeployedModel", "source": "object" } }, "config": { "operationId": "TS5xr8/Pw1i4fA+rj1Gcsg", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton2"
                                        $widgetId="p.MistralConnector.MistralDeployedModel_NewEdit.actionButton2"
                                        buttonId={"p.MistralConnector.MistralDeployedModel_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "VLxC3IEWQFWql56wjlfVag", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Deployed Model"
]);

export const classes = "";

export const cancelChangesOperationId = "42xO1Cs08liwn89sHOdqEQ";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
