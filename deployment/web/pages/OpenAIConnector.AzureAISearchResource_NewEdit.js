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

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextArea } from "mendix/widgets/web/TextArea";
import { TextBox } from "mendix/widgets/web/TextBox";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $FormGroup, $TextArea, $TextBox, $ConditionalVisibilityWrapper, $Container, $Text, $ActionButton } = asPluginWidgets({ Div, DataView, FormGroup, TextArea, TextBox, ConditionalVisibilityWrapper, Container, Text, ActionButton });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1"
        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0"
                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0$column0"
                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6"
                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6"
                                class={"mx-name-dataView6 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.12",
                                    "scope": "$AzureAISearchResource",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$FormGroup key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1$formGroup"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1$formGroup"
                                        class={"mx-name-textArea1 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.AzureAISearchResource",
                                                    "attribute": "DisplayName",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                counterMessage={undefined}
                                                maxLength={undefined}
                                                numberOfLines={1}
                                                autoGrow={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                readOnlyStyle={"control"}
                                                textTooLongMessage={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Display name*" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea1"
                                        })} />,
                                    <$FormGroup key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2$formGroup"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2$formGroup"
                                        class={"mx-name-textArea2 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.AzureAISearchResource",
                                                    "attribute": "Endpoint",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                counterMessage={undefined}
                                                maxLength={undefined}
                                                numberOfLines={1}
                                                autoGrow={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                readOnlyStyle={"control"}
                                                textTooLongMessage={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "Endpoint URL*" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea2"
                                        })} />,
                                    <$FormGroup key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3$formGroup"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3$formGroup"
                                        class={"mx-name-textArea3 mx-textarea"}
                                        style={undefined}
                                        control={[
                                            <$TextArea key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                                    "path": "",
                                                    "entity": "OpenAIConnector.AzureAISearchResource",
                                                    "attribute": "ApiVersion",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "validation": null
                                                })}
                                                counterMessage={undefined}
                                                maxLength={undefined}
                                                numberOfLines={1}
                                                autoGrow={false}
                                                placeholder={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                    })
                                                ])}
                                                readOnlyStyle={"control"}
                                                textTooLongMessage={undefined}
                                                onEnter={undefined}
                                                onLeave={undefined}
                                                ariaLabel={undefined}
                                                ariaRequired={undefined}
                                                submitWhileEditing={false}
                                                submitDelay={300}
                                                tabIndex={undefined}
                                                id={DerivedUniqueIdProperty({
                                                    "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                                                })} />
                                        ]}
                                        caption={t([
                                            ExpressionProperty({
                                                "expression": { "expr": { "type": "literal", "value": "API version*" }, "args": {} }
                                            })
                                        ])}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textArea3"
                                        })} />,
                                    <$DataView key="p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView2"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView2"
                                        class={"mx-name-dataView2 form-vertical"}
                                        style={undefined}
                                        tabIndex={undefined}
                                        object={MicroflowObjectProperty({
                                            "dataSourceId": "p.24",
                                            "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6",
                                            "editable": true,
                                            "operationId": "K1Z8rl7gCV6HTUUMrOtlEg",
                                            "argMap": { "AzureAISearchResource": { "widget": "$AzureAISearchResource", "source": "object" } }
                                        })}
                                        emptyMessage={TextProperty({
                                            "value": t([
                                                ""
                                            ])
                                        })}
                                        body={[
                                            <$FormGroup key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5$formGroup"
                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5$formGroup"
                                                class={"mx-name-textBox5 spacing-outer-bottom-none mx-textbox"}
                                                style={undefined}
                                                control={[
                                                    <$TextBox key="p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                                        inputValue={AttributeProperty({
                                                            "scope": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView2",
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
                                                            "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                                        })} />
                                                ]}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "API key*" }, "args": {} }
                                                    })
                                                ])}
                                                labelFor={DerivedUniqueIdProperty({
                                                    "widgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                                })}
                                                width={undefined}
                                                orientation={"vertical"}
                                                hasError={ValidationProperty({
                                                    "inputWidgetId": "p.OpenAIConnector.AzureAISearchResource_NewEdit.textBox5"
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.OpenAIConnector.AzureAISearchResource_NewEdit.container3$visibility"
                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.container3$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "=", "parameters": [ { "type": "function", "name": "isNew", "parameters": [ { "type": "variable", "variable": "dataView6" } ] }, { "type": "literal", "value": false } ] }, "args": { "dataView6": { "widget": "p.OpenAIConnector.AzureAISearchResource_NewEdit.dataView6", "source": "object" } } }
                                                })}
                                                contents={[
                                                    <$Container key="p.OpenAIConnector.AzureAISearchResource_NewEdit.container3"
                                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.container3"
                                                        class={"mx-name-container3 row-right"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$Text key="p.OpenAIConnector.AzureAISearchResource_NewEdit.text3"
                                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.text3"
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
                                    <$ConditionalVisibilityWrapper key="p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1$visibility"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1"
                                                $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1"
                                                buttonId={"p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton1"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "AzureAISearchResource": { "widget": "$AzureAISearchResource", "source": "object" } }, "config": { "operationId": "7rY8g1O5kV+4IcLZjCf05w", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />,
                                    <$ActionButton key="p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton2"
                                        $widgetId="p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton2"
                                        buttonId={"p.OpenAIConnector.AzureAISearchResource_NewEdit.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "slHKAKd2EFi7w6Tpzh5Orw", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />
                                ]} />
                        ]} />
                ]} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Edit AI Search Resource"
]);

export const classes = "";

export const cancelChangesOperationId = "aRjthIwMXl2iu0bGqKlWFw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
