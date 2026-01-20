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
import { MicroflowObjectListProperty } from "mendix/MicroflowObjectListProperty";
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
import { RadioButtonGroup } from "mendix/widgets/web/RadioButtonGroup";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextBox, $ConditionalVisibilityWrapper, $Container, $RadioButtonGroup, $Combobox, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, ConditionalVisibilityWrapper, Container, RadioButtonGroup, Combobox, ActionButton });

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
    <$Div key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1"
        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0"
                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg-12 col-md-12 col-12"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1"
                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.14",
                                    "scope": "$BedrockDeployedModel",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4$formGroup"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
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
                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Display name*" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox4"
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2$visibility"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsCustom" }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$Container key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2"
                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container2"
                                                class={"mx-name-container2"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3$formGroup"
                                                        class={"mx-name-textBox3 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                    "attribute": "ProviderName",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Provider name" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox3"
                                                        })} />,
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6$formGroup"
                                                        class={"mx-name-textBox6 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Model id*" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox6"
                                                        })} />,
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1$formGroup"
                                                        class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                                        style={undefined}
                                                        control={[
                                                            <$RadioButtonGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                                                value={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                    "attribute": "LifecycleStatus",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Lifecycle status" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons1"
                                                        })} />,
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2$formGroup"
                                                        class={"mx-name-textBox2 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                    "attribute": "ModelName",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Model name" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox2"
                                                        })} />,
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1$formGroup"
                                                        class={"mx-name-textBox1 mx-textbox"}
                                                        style={undefined}
                                                        control={[
                                                            <$TextBox key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                                                inputValue={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                    "attribute": "ModelARN",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Model ARN" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.textBox1"
                                                        })} />,
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2$formGroup"
                                                        class={"mx-name-comboBox2"}
                                                        style={undefined}
                                                        control={[
                                                            <$Combobox key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                                                source={"context"}
                                                                optionsSourceType={"association"}
                                                                optionsSourceDatabaseDataSource={undefined}
                                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                                optionsSourceDatabaseDefaultValue={undefined}
                                                                attributeAssociation={AssociationProperty({
                                                                    "type": "ReferenceSet",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                                    "path": "",
                                                                    "attribute": "AmazonBedrockConnector.BedrockDeployedModel_ModelInferenceType",
                                                                    "endpointEntity": "AmazonBedrockConnector.ModelInferenceType",
                                                                    "selectableObjectsId": "p.0",
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                                })}
                                                                optionsSourceAssociationDataSource={DatabaseObjectListProperty({
                                                                    "dataSourceId": "p.0",
                                                                    "entity": "AmazonBedrockConnector.ModelInferenceType",
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "operationId": "MdY6UeWlnV6taXIByCkisg",
                                                                    "sort": []
                                                                })}
                                                                optionsSourceAssociationCaptionType={"expression"}
                                                                optionsSourceAssociationCaptionExpression={ListExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "getKey", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "InferenceType" } ] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2", "source": "object" } } },
                                                                    "dataSourceId": "p.0"
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Inference type" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox2"
                                                        })} />
                                                ]}
                                                ariaHidden={false} />
                                        ]} />,
                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2$formGroup"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2$formGroup"
                                        class={"mx-name-radioButtons2 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                                                value={AttributeProperty({
                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
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
                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Output modality*" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons2"
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1$visibility"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "OutputModality" }, { "type": "literal", "value": "Text" } ] }, "then": { "type": "literal", "value": true }, "else": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "OutputModality" }, { "type": "literal", "value": "Other" } ] } }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$Container key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1"
                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.container1"
                                                class={"mx-name-container1"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4$formGroup"
                                                        class={"mx-name-radioButtons4 mx-radiobuttons inline"}
                                                        style={undefined}
                                                        control={[
                                                            <$RadioButtonGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                                                value={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Supports system prompt*" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons4"
                                                        })} />,
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5$formGroup"
                                                        class={"mx-name-radioButtons5 mx-radiobuttons inline"}
                                                        style={undefined}
                                                        control={[
                                                            <$RadioButtonGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                                                value={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Supports conversations with history*" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons5"
                                                        })} />,
                                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6$formGroup"
                                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6$formGroup"
                                                        class={"mx-name-radioButtons6 mx-radiobuttons inline"}
                                                        style={undefined}
                                                        control={[
                                                            <$RadioButtonGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                                                value={AttributeProperty({
                                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                                    "path": "",
                                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
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
                                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                                                })} />
                                                        ]}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Supports function calling*" }, "args": {} }
                                                            })
                                                        ])}
                                                        labelFor={DerivedUniqueIdProperty({
                                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                                        })}
                                                        width={undefined}
                                                        orientation={"vertical"}
                                                        hasError={ValidationProperty({
                                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons6"
                                                        })} />
                                                ]}
                                                ariaHidden={false} />
                                        ]} />,
                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1$formGroup"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1$formGroup"
                                        class={"mx-name-comboBox1"}
                                        style={undefined}
                                        control={[
                                            <$Combobox key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                                                source={"context"}
                                                optionsSourceType={"association"}
                                                optionsSourceDatabaseDataSource={undefined}
                                                optionsSourceDatabaseCaptionType={"attribute"}
                                                optionsSourceDatabaseDefaultValue={undefined}
                                                attributeAssociation={AssociationProperty({
                                                    "type": "ReferenceSet",
                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
                                                    "path": "",
                                                    "attribute": "GenAICommons.DeployedModel_InputModality",
                                                    "endpointEntity": "GenAICommons.InputModality",
                                                    "selectableObjectsId": "p.1",
                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false }
                                                })}
                                                optionsSourceAssociationDataSource={MicroflowObjectListProperty({
                                                    "argMap": {},
                                                    "dataSourceId": "p.1",
                                                    "entity": "GenAICommons.InputModality",
                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                    "operationId": "im3UQpMbeFWQMQ6yoA1EPQ"
                                                })}
                                                optionsSourceAssociationCaptionType={"expression"}
                                                optionsSourceAssociationCaptionExpression={ListExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "getKey", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ModelModality" } ] }, "args": { "currentObject": { "widget": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1", "source": "object" } } },
                                                    "dataSourceId": "p.1"
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
                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Input modality*" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.comboBox1"
                                        })} />,
                                    <$FormGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7$formGroup"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7$formGroup"
                                        class={"mx-name-radioButtons7 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                                                value={AttributeProperty({
                                                    "scope": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "AmazonBedrockConnector.BedrockDeployedModel",
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
                                                    "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Is active" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.radioButtons7"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1$visibility"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1"
                                                $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1"
                                                buttonId={"p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "BedrockDeployedModel": { "widget": "$BedrockDeployedModel", "source": "object" } }, "config": { "operationId": "p/JnoMN21lqCX7WgGDoBoQ", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton2"
                                        $widgetId="p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton2"
                                        buttonId={"p.AmazonBedrockConnector.BedrockDeployedModel_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "meTpet3yul6NzFAHuZSmHw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Bedrock Model"
]);

export const classes = "";

export const cancelChangesOperationId = "fa72ETlJhlm39KvuKQ4Fhw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
