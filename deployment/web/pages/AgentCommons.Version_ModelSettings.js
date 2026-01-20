import { createElement } from "react";
const React = { createElement };

import { PageFragment } from "mendix/PageFragment";
import { ActionProperty } from "mendix/ActionProperty";
import { AssociationObjectProperty } from "mendix/AssociationObjectProperty";
import { AttributeProperty } from "mendix/AttributeProperty";
import { DerivedUniqueIdProperty } from "mendix/DerivedUniqueIdProperty";
import { ExpressionProperty } from "mendix/ExpressionProperty";
import { TextProperty } from "mendix/TextProperty";
import { ValidationProperty } from "mendix/ValidationProperty";
import { WebIconProperty } from "mendix/WebIconProperty";

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Text } from "mendix/widgets/web/Text";
import { TextBox } from "mendix/widgets/web/TextBox";
import * as TooltipWidgetModule from "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.mjs";
const Tooltip = Object.getOwnPropertyDescriptor(TooltipWidgetModule, "Tooltip")?.value || Object.getOwnPropertyDescriptor(TooltipWidgetModule, "default")?.value;   
import "C:/Users/MouhcineAZELMAT/Desktop/Mendix Projects/SmartHRAssistance/deployment/web/widgets/com/mendix/widget/web/tooltip/Tooltip.css";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $Div, $DataView, $Container, $Text, $Tooltip, $ConditionalVisibilityWrapper, $ActionButton, $FormGroup, $TextBox } = asPluginWidgets({ Div, DataView, Container, Text, Tooltip, ConditionalVisibilityWrapper, ActionButton, FormGroup, TextBox });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$Div key="p.AgentCommons.Version_ModelSettings.layoutGrid1"
        $widgetId="p.AgentCommons.Version_ModelSettings.layoutGrid1"
        class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
        style={undefined}
        content={[
            <$Div key="p.AgentCommons.Version_ModelSettings.layoutGrid1$row0"
                $widgetId="p.AgentCommons.Version_ModelSettings.layoutGrid1$row0"
                class={"row"}
                style={undefined}
                content={[
                    <$Div key="p.AgentCommons.Version_ModelSettings.layoutGrid1$row0$column0"
                        $widgetId="p.AgentCommons.Version_ModelSettings.layoutGrid1$row0$column0"
                        class={"col-lg col-md col"}
                        style={undefined}
                        content={[
                            <$DataView key="p.AgentCommons.Version_ModelSettings.dataView1"
                                $widgetId="p.AgentCommons.Version_ModelSettings.dataView1"
                                class={"mx-name-dataView1 form-vertical"}
                                style={undefined}
                                tabIndex={undefined}
                                object={AssociationObjectProperty({
                                    "dataSourceId": "p.18",
                                    "scope": "$Version",
                                    "editable": true
                                })}
                                emptyMessage={TextProperty({
                                    "value": t([
                                        ""
                                    ])
                                })}
                                body={[
                                    <$Container key="p.AgentCommons.Version_ModelSettings.container51"
                                        $widgetId="p.AgentCommons.Version_ModelSettings.container51"
                                        class={"mx-name-container51 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.Version_ModelSettings.text7"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.text7"
                                                class={"mx-name-text7 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Temperature" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.Version_ModelSettings.container52"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.container52"
                                                class={"mx-name-container52 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.Version_ModelSettings.tooltip8"
                                                        $widgetId="p.AgentCommons.Version_ModelSettings.tooltip8"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_ModelSettings.actionButton27$visibility"
                                                                $widgetId="p.AgentCommons.Version_ModelSettings.actionButton27$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.Version_ModelSettings.actionButton27"
                                                                        $widgetId="p.AgentCommons.Version_ModelSettings.actionButton27"
                                                                        buttonId={"p.AgentCommons.Version_ModelSettings.actionButton27"}
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
                                                            <$Container key="p.AgentCommons.Version_ModelSettings.container108"
                                                                $widgetId="p.AgentCommons.Version_ModelSettings.container108"
                                                                class={"mx-name-container108 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.Version_ModelSettings.text49"
                                                                        $widgetId="p.AgentCommons.Version_ModelSettings.text49"
                                                                        class={"mx-name-text49 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Temperature controls the randomness of the model response. Low values generate a more predictable output, while higher values allow creativity and diversity. It is recommended to steer either the temperature or TopP, but not both. Review the documentation of the model provider for more information about the allowed temperature range." }, "args": {} }
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
                                    <$FormGroup key="p.AgentCommons.Version_ModelSettings.textBox1$formGroup"
                                        $widgetId="p.AgentCommons.Version_ModelSettings.textBox1$formGroup"
                                        class={"mx-name-textBox1 width-full mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.Version_ModelSettings.textBox1"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.textBox1"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.Version_ModelSettings.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.Version",
                                                    "attribute": "Temperature",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } },
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
                                                    "widgetId": "p.AgentCommons.Version_ModelSettings.textBox1"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Version_ModelSettings.textBox1"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Version_ModelSettings.textBox1"
                                        })} />,
                                    <$Container key="p.AgentCommons.Version_ModelSettings.container53"
                                        $widgetId="p.AgentCommons.Version_ModelSettings.container53"
                                        class={"mx-name-container53 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.Version_ModelSettings.text8"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.text8"
                                                class={"mx-name-text8 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Max tokens" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.Version_ModelSettings.container54"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.container54"
                                                class={"mx-name-container54 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.Version_ModelSettings.tooltip9"
                                                        $widgetId="p.AgentCommons.Version_ModelSettings.tooltip9"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_ModelSettings.actionButton28$visibility"
                                                                $widgetId="p.AgentCommons.Version_ModelSettings.actionButton28$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.Version_ModelSettings.actionButton28"
                                                                        $widgetId="p.AgentCommons.Version_ModelSettings.actionButton28"
                                                                        buttonId={"p.AgentCommons.Version_ModelSettings.actionButton28"}
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
                                                            <$Container key="p.AgentCommons.Version_ModelSettings.container109"
                                                                $widgetId="p.AgentCommons.Version_ModelSettings.container109"
                                                                class={"mx-name-container109 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.Version_ModelSettings.text50"
                                                                        $widgetId="p.AgentCommons.Version_ModelSettings.text50"
                                                                        class={"mx-name-text50 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "The maximum number of tokens per request." }, "args": {} }
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
                                    <$FormGroup key="p.AgentCommons.Version_ModelSettings.textBox2$formGroup"
                                        $widgetId="p.AgentCommons.Version_ModelSettings.textBox2$formGroup"
                                        class={"mx-name-textBox2 width-full mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.Version_ModelSettings.textBox2"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.textBox2"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.Version_ModelSettings.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.Version",
                                                    "attribute": "MaxTokens",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } },
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
                                                    "widgetId": "p.AgentCommons.Version_ModelSettings.textBox2"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Version_ModelSettings.textBox2"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Version_ModelSettings.textBox2"
                                        })} />,
                                    <$Container key="p.AgentCommons.Version_ModelSettings.container55"
                                        $widgetId="p.AgentCommons.Version_ModelSettings.container55"
                                        class={"mx-name-container55 row-left"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Text key="p.AgentCommons.Version_ModelSettings.text9"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.text9"
                                                class={"mx-name-text9 custom-control-label"}
                                                style={undefined}
                                                caption={t([
                                                    ExpressionProperty({
                                                        "expression": { "expr": { "type": "literal", "value": "Top P" }, "args": {} }
                                                    })
                                                ])}
                                                renderMode={"span"} />,
                                            <$Container key="p.AgentCommons.Version_ModelSettings.container56"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.container56"
                                                class={"mx-name-container56 icon-info-wrapper"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Tooltip key="p.AgentCommons.Version_ModelSettings.tooltip10"
                                                        $widgetId="p.AgentCommons.Version_ModelSettings.tooltip10"
                                                        trigger={[
                                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_ModelSettings.actionButton29$visibility"
                                                                $widgetId="p.AgentCommons.Version_ModelSettings.actionButton29$visibility"
                                                                visible={ExpressionProperty({
                                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                                })}
                                                                contents={[
                                                                    <$ActionButton key="p.AgentCommons.Version_ModelSettings.actionButton29"
                                                                        $widgetId="p.AgentCommons.Version_ModelSettings.actionButton29"
                                                                        buttonId={"p.AgentCommons.Version_ModelSettings.actionButton29"}
                                                                        class={"mx-name-actionButton29 spacing-outer-left spacing-outer-right"}
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
                                                            <$Container key="p.AgentCommons.Version_ModelSettings.container110"
                                                                $widgetId="p.AgentCommons.Version_ModelSettings.container110"
                                                                class={"mx-name-container110 w306 spacing-inner-top spacing-inner-right spacing-inner-bottom spacing-inner-left"}
                                                                style={undefined}
                                                                renderMode={"div"}
                                                                onClick={undefined}
                                                                content={[
                                                                    <$Text key="p.AgentCommons.Version_ModelSettings.text51"
                                                                        $widgetId="p.AgentCommons.Version_ModelSettings.text51"
                                                                        class={"mx-name-text51 text-normal text-break text-small"}
                                                                        style={undefined}
                                                                        caption={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "Top P is an alternative to temperature for controlling the randomness of the model response. Top P defines a probability threshold so that only words with probabilities greater than or equal to the threshold will be included in the response. It is recommended to steer either the temperature or Top P, but not both. Review the documentation of the model provider for more information about the allowed Top P range." }, "args": {} }
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
                                                        class={"mx-name-tooltip10 agent-tooltip"}
                                                        style={undefined}
                                                        tabIndex={undefined} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />,
                                    <$FormGroup key="p.AgentCommons.Version_ModelSettings.textBox3$formGroup"
                                        $widgetId="p.AgentCommons.Version_ModelSettings.textBox3$formGroup"
                                        class={"mx-name-textBox3 width-full mx-textbox"}
                                        style={undefined}
                                        control={[
                                            <$TextBox key="p.AgentCommons.Version_ModelSettings.textBox3"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.textBox3"
                                                inputValue={AttributeProperty({
                                                    "scope": "p.AgentCommons.Version_ModelSettings.dataView1",
                                                    "path": "",
                                                    "entity": "AgentCommons.Version",
                                                    "attribute": "TopP",
                                                    "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                    "isList": false,
                                                    "isEditable": { "expr": { "type": "variable", "variable": "currentObject", "path": "IsDraftVersion" }, "args": { "currentObject": { "widget": "$Version", "source": "object" } } },
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
                                                    "widgetId": "p.AgentCommons.Version_ModelSettings.textBox3"
                                                })} />
                                        ]}
                                        caption={undefined}
                                        labelFor={DerivedUniqueIdProperty({
                                            "widgetId": "p.AgentCommons.Version_ModelSettings.textBox3"
                                        })}
                                        width={undefined}
                                        orientation={"vertical"}
                                        hasError={ValidationProperty({
                                            "inputWidgetId": "p.AgentCommons.Version_ModelSettings.textBox3"
                                        })} />
                                ]}
                                hideFooter={false}
                                footer={[
                                    <$Container key="p.AgentCommons.Version_ModelSettings.container1"
                                        $widgetId="p.AgentCommons.Version_ModelSettings.container1"
                                        class={"mx-name-container1 row-right"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$ActionButton key="p.AgentCommons.Version_ModelSettings.actionButton2"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.actionButton2"
                                                buttonId={"p.AgentCommons.Version_ModelSettings.actionButton2"}
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
                                                    "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "mLwEQ1dnN1mz/qHspR74og", "closePage": true }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />,
                                            <$ConditionalVisibilityWrapper key="p.AgentCommons.Version_ModelSettings.actionButton1$visibility"
                                                $widgetId="p.AgentCommons.Version_ModelSettings.actionButton1$visibility"
                                                visible={ExpressionProperty({
                                                    "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                                })}
                                                contents={[
                                                    <$ActionButton key="p.AgentCommons.Version_ModelSettings.actionButton1"
                                                        $widgetId="p.AgentCommons.Version_ModelSettings.actionButton1"
                                                        buttonId={"p.AgentCommons.Version_ModelSettings.actionButton1"}
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
                                                            "action": { "type": "callMicroflow", "argMap": { "Version": { "widget": "$Version", "source": "object" } }, "config": { "operationId": "WQPP6WveQFKglv+71mNnYA", "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
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
    "Model settings"
]);

export const classes = "";

export const cancelChangesOperationId = "R262ag/mxViVrBTNm5BaDw";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
