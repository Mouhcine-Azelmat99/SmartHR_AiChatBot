import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { MicroflowObjectProperty } from "mendix/MicroflowObjectProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
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
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";
import { ACT_Configuration_SetEndpoint_DefaultOpenAI } from "../nanoflows/OpenAIConnector.ACT_Configuration_SetEndpoint_DefaultOpenAI.js";

const { $Div, $DataView, $FormGroup, $TextBox, $RadioButtonGroup, $TextArea, $Container, $ConditionalVisibilityWrapper, $Text, $ActionButton, $Image } = asPluginWidgets({ Div, DataView, FormGroup, TextBox, RadioButtonGroup, TextArea, Container, ConditionalVisibilityWrapper, Text, ActionButton, Image });

addEnumerations({
    "OpenAIConnector.ENUM_ApiType": [
        [
            "AzureOpenAI",
            t([
                "Azure OpenAI"
            ])
        ],
        [
            "OpenAI",
            t([
                "OpenAI"
            ])
        ]
    ],
    "OpenAIConnector.ENUM_KeyType": [
        [
            "Bearer_Token",
            t([
                "Microsoft Entra token"
            ])
        ],
        [
            "API_key",
            t([
                "API key"
            ])
        ]
    ]
});

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.OpenAIConnector.Configuration_NewEdit.layoutGrid1"
        $widgetId="p.OpenAIConnector.Configuration_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0"
                $widgetId="p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.OpenAIConnector.Configuration_NewEdit.dataView1"
                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.14",
                                    "scope": "$Configuration",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.OpenAIConnector.Configuration_NewEdit.textBox4$formGroup"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.textBox4$formGroup"
                                        class={"mx-name-textBox4 mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.OpenAIConnector.Configuration_NewEdit.textBox4"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.textBox4"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.Configuration",
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
                                                    "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox4"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Display name *" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox4"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox4"
                                        })} />,
                                    <$FormGroup key="p.OpenAIConnector.Configuration_NewEdit.radioButtons1$formGroup"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.radioButtons1$formGroup"
                                        class={"mx-name-radioButtons1 mx-radiobuttons inline"}
                                        style={undefined}
                                        control={[
                                            <$RadioButtonGroup key="p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                                                value={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.Configuration",
                                                    "attribute": "ApiType",
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
                                                    "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "API type *" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons1"
                                        })} />,
                                    <$FormGroup key="p.OpenAIConnector.Configuration_NewEdit.textArea1$formGroup"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.textArea1$formGroup"
                                        class={"mx-name-textArea1 spacing-outer-bottom-none mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.OpenAIConnector.Configuration_NewEdit.textArea1"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.Configuration",
                                                    "attribute": "Endpoint",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
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
                                                    "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textArea1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Endpoint *" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.textArea1"
                                        })} />,
                                    <$Container key="p.OpenAIConnector.Configuration_NewEdit.container2"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.container2"
                                        class={"mx-name-container2 spacing-outer-bottom-medium"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Configuration_NewEdit.container4$visibility"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.container4$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" } ] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.OpenAIConnector.Configuration_NewEdit.container4"
                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.container4"
                                                        class={"mx-name-container4 row-right"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.OpenAIConnector.Configuration_NewEdit.text1"
                                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.text1"
                                                                class={"mx-name-text1 text-detail text-small spacing-outer-bottom"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "e.g. https://your-resource-name.openai.azure.com/openai/deployments/" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"p"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />,
                                            <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Configuration_NewEdit.container1$visibility"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.container1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "OpenAI" } ] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.OpenAIConnector.Configuration_NewEdit.container1"
                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.container1"
                                                        class={"mx-name-container1 row-right"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.OpenAIConnector.Configuration_NewEdit.text2"
                                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.text2"
                                                                class={"mx-name-text2 text-detail text-small spacing-outer-bottom-none"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "e.g. https://api.openai.com/v1/" }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />,
                                                            <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Configuration_NewEdit.actionButton3$visibility"
                                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.actionButton3$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.OpenAIConnector.Configuration_NewEdit.actionButton3"
                                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.actionButton3"
                                                                        buttonId={"p.OpenAIConnector.Configuration_NewEdit.actionButton3"}
                                                                        class={"mx-name-actionButton3 btn-sm spacing-outer-left spacing-outer-bottom-none"}
                                                                        style={undefined}
                                                                        tabIndex={undefined}
                                                                        renderType={"link"}
                                                                        role={"button"}
                                                                        buttonClass={"btn-default"}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Apply" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        tooltip={TextProperty({
                                                                            "value": t([
                                                                                ""
                                                                            ])
                                                                        })}
                                                                        icon={undefined}
                                                                        action={ActionProperty({
                                                                            "action": { "type": "callNanoflow", "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }, "config": { "nanoflow": () => ACT_Configuration_SetEndpoint_DefaultOpenAI, "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                                            "abortOnServerValidation": true
                                                                        })} />
                                                                ]} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />,
                                            <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Configuration_NewEdit.container6$visibility"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.container6$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" } ] }, "then": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "endsWith", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "Endpoint" }, { "type": "literal", "value": "/openai/deployments/" } ] }, { "type": "literal", "value": false } ] }, "else": { "type": "literal", "value": false } }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.OpenAIConnector.Configuration_NewEdit.container6"
                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.container6"
                                                        class={"mx-name-container6 alert alert-warning spacing-inner-top-medium spacing-inner-bottom-medium spacing-inner-left-medium spacing-inner-right-medium"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Div key="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4"
                                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4"
                                                                class={"mx-name-layoutGrid4 mx-layoutgrid mx-layoutgrid-fluid"}
                                                                style={undefined}
                                                                content={[
                                                                    <$Div key="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0"
                                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0"
                                                                        class={"row"}
                                                                        style={undefined}
                                                                        content={[
                                                                            <$Div key="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column0"
                                                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column0"
                                                                                class={"col-lg-auto col-md-auto col-auto align-self-start"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$Image key="p.OpenAIConnector.Configuration_NewEdit.image3"
                                                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.image3"
                                                                                        datasource={"icon"}
                                                                                        imageObject={undefined}
                                                                                        defaultImageDynamic={undefined}
                                                                                        imageUrl={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        imageIcon={WebIconProperty({
                                                                                            "icon": { "type": "glyph", "iconClass": "glyphicon-warning-sign" }
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
                                                                            <$Div key="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column1"
                                                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.layoutGrid4$row0$column1"
                                                                                class={"col-lg col-md col align-self-center"}
                                                                                style={undefined}
                                                                                content={[
                                                                                    <$Text key="p.OpenAIConnector.Configuration_NewEdit.text27"
                                                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.text27"
                                                                                        class={"mx-name-text27 alert-title text-bold spacing-outer-bottom-none"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "Warning" }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"h5"} />,
                                                                                    <$Text key="p.OpenAIConnector.Configuration_NewEdit.text30"
                                                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.text30"
                                                                                        class={"mx-name-text30 alert-description spacing-outer-bottom-none"}
                                                                                        style={undefined}
                                                                                        caption={t([
                                                                                            ExpressionProperty({
                                                                                                "expression": { "expr": { "type": "literal", "value": "For configurations of type 'Azure OpenAI', the endpoint URL should usually end with '/openai/deployments/'.\r\nPlease verify that you've entered the correct endpoint URL." }, "args": {} }
                                                                                            })
                                                                                        ])}
                                                                                        renderMode={"p"} />
                                                                                ]} />
                                                                        ]} />
                                                                ]} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup$visibility"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "currentObject", "path": "ApiType" }, { "type": "literal", "value": "AzureOpenAI" } ] }, "args": { "currentObject": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                        })}
                                        contents={[
                                            <$FormGroup key="p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.radioButtons2$formGroup"
                                                class={"mx-name-radioButtons2 mx-radiobuttons inline"}
                                                style={undefined}
                                                control={[
                                                    <$RadioButtonGroup key="p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                                        value={AttributeProperty({
                                                            "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                                            "path": "",
                                                            "entity": "OpenAIConnector.Configuration",
                                                            "attribute": "KeyType",
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
                                                            "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Azure key type *" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.radioButtons2"
                                                })} />
                                        ]} />,
                                    <$DataView key="p.OpenAIConnector.Configuration_NewEdit.dataView2"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.dataView2"
                                        class={"mx-name-dataView2 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={MicroflowObjectProperty({
                                            "dataSourceId": "p.60",
                                            "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView1",
                                            "editable": true,
                                            "operationId": "8+XJ0gsfUFeSvSsCUnt5Tw",
                                            "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$FormGroup key="p.OpenAIConnector.Configuration_NewEdit.textBox5$formGroup"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.textBox5$formGroup"
                                                class={"mx-name-textBox5 spacing-outer-bottom-none mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p.OpenAIConnector.Configuration_NewEdit.dataView2",
                                                            "path": "",
                                                            "entity": "OpenAIConnector.ApiKey",
                                                            "attribute": "ApiKey",
                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                            "isList": false,
                                                            "validation": null,
                                                            "formatting": { }
                                                        })}
                                                        isPassword={true}
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
                                                            "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "function", "name": "+", "parameters": [ { "type": "conditional", "condition": { "type": "function", "name": "=", "parameters": [ { "type": "variable", "variable": "dataView1", "path": "KeyType" }, { "type": "literal", "value": "API_key" } ] }, "then": { "type": "literal", "value": "API key" }, "else": { "type": "literal", "value": "Token" } }, { "type": "literal", "value": " *" } ] }, "args": { "dataView1": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.OpenAIConnector.Configuration_NewEdit.textBox5"
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Configuration_NewEdit.container3$visibility"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.container3$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "dataView1" } ] }, { "type": "literal", "value": false } ] }, "args": { "dataView1": { "widget": "p.OpenAIConnector.Configuration_NewEdit.dataView1", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.OpenAIConnector.Configuration_NewEdit.container3"
                                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.container3"
                                                        class={"mx-name-container3 row-right"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.OpenAIConnector.Configuration_NewEdit.text3"
                                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.text3"
                                                                class={"mx-name-text3 text-detail text-small spacing-outer-bottom"}
                                                                style={undefined}
                                                                caption={t([
                                                                    ExpressionProperty({
                                                                        "expression": { "expr": { "type": "literal", "value": "If you don't enter a new value, it will remain unchanged." }, "args": {} }
                                                                    })
                                                                ])}
                                                                renderMode={"span"} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]} />
                                        ]}
                                        hideFooter={false}
                                        footer={undefined} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$ConditionalVisibilityWrapper key="p.OpenAIConnector.Configuration_NewEdit.actionButton1$visibility"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.OpenAIConnector.Configuration_NewEdit.actionButton1"
                                                $widgetId="p.OpenAIConnector.Configuration_NewEdit.actionButton1"
                                                buttonId={"p.OpenAIConnector.Configuration_NewEdit.actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "Configuration": { "widget": "$Configuration", "source": "object" } }, "config": { "operationId": "yBFq7Yv/WFqirJ4XQn2JHA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.OpenAIConnector.Configuration_NewEdit.actionButton2"
                                        $widgetId="p.OpenAIConnector.Configuration_NewEdit.actionButton2"
                                        buttonId={"p.OpenAIConnector.Configuration_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "bKeSg6aSA1+keOmuUycdvQ", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit Configuration"
]);

export const classes = "";

export const cancelChangesOperationId = "w3waLjTFjFqJcnHKNgLnzA";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
