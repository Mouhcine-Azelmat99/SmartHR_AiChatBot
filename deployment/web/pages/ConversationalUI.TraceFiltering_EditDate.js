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

import { ActionButton } from "mendix/widgets/web/ActionButton";
import { ConditionalVisibilityWrapper } from "mendix/widgets/web/ConditionalVisibilityWrapper";
import { Container } from "mendix/widgets/web/Container";
import { DataView } from "mendix/widgets/web/DataView";
import { DatePicker } from "mendix/widgets/web/DatePicker";
import { Div } from "mendix/widgets/web/Div";
import { FormGroup } from "mendix/widgets/web/FormGroup";
import { Text } from "mendix/widgets/web/Text";
import { addEnumerations, asPluginWidgets, t } from "mendix";

import { content as parentContent } from "../layouts/Atlas_Core.PopupLayout.js";

const { $DataView, $Div, $Container, $Text, $FormGroup, $DatePicker, $ActionButton, $ConditionalVisibilityWrapper } = asPluginWidgets({ DataView, Div, Container, Text, FormGroup, DatePicker, ActionButton, ConditionalVisibilityWrapper });

const region$Main = (historyId) => (<PageFragment renderKey={historyId}>{[
    <$DataView key="p.ConversationalUI.TraceFiltering_EditDate.dataView6"
        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.dataView6"
        class={"mx-name-dataView6 form-vertical"}
        style={undefined}
        tabIndex={undefined}
        object={AssociationObjectProperty({
            "dataSourceId": "p.6",
            "scope": "$TraceFiltering",
            "editable": true
        })}
        emptyMessage={TextProperty({
            "value": t([
                ""
            ])
        })}
        body={[
            <$Div key="p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1"
                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1"
                class={"mx-name-layoutGrid1 mx-layoutgrid mx-layoutgrid-fluid container-fluid"}
                style={undefined}
                content={[
                    <$Div key="p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0"
                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0"
                        class={"row"}
                        style={undefined}
                        content={[
                            <$Div key="p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0$column0"
                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.layoutGrid1$row0$column0"
                                class={"col-lg col-md col"}
                                style={undefined}
                                content={[
                                    <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container2"
                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container2"
                                        class={"mx-name-container2 filter-date-input-wrapper"}
                                        style={undefined}
                                        renderMode={"div"}
                                        onClick={undefined}
                                        content={[
                                            <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container4"
                                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container4"
                                                class={"mx-name-container4"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.ConversationalUI.TraceFiltering_EditDate.text2"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.text2"
                                                        class={"mx-name-text2 font-weight-semibold"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "Start time from" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container6"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container6"
                                                        class={"mx-name-container6 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_EditDate.datePicker1$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker1$formGroup"
                                                                class={"mx-name-datePicker1 filter-date-input mx-datepicker"}
                                                                style={undefined}
                                                                control={[
                                                                    <$DatePicker key="p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                                        mode={"date"}
                                                                        showCalendarButton={true}
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "DateFrom",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null,
                                                                            "formatting": {
                                                                                "dateFormat": t([
                                                                                    {
                                                                                        "type": "date"
                                                                                    }
                                                                                ])
                                                                            }
                                                                        })}
                                                                        placeholder={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        buttonLabel={TextProperty({
                                                                            "value": t([
                                                                                "Show date picker"
                                                                            ])
                                                                        })}
                                                                        readOnlyStyle={"control"}
                                                                        onEnter={undefined}
                                                                        onLeave={undefined}
                                                                        ariaLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        ariaRequired={undefined}
                                                                        tabIndex={undefined}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker1"
                                                                })} />,
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_EditDate.datePicker7$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker7$formGroup"
                                                                class={"mx-name-datePicker7 filter-time-input mx-datepicker"}
                                                                style={undefined}
                                                                control={[
                                                                    <$DatePicker key="p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                                        mode={"time"}
                                                                        showCalendarButton={false}
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "DateFrom",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null,
                                                                            "formatting": {
                                                                                "dateFormat": t([
                                                                                    {
                                                                                        "type": "time"
                                                                                    }
                                                                                ])
                                                                            }
                                                                        })}
                                                                        placeholder={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        buttonLabel={TextProperty({
                                                                            "value": t([
                                                                                "Show date picker"
                                                                            ])
                                                                        })}
                                                                        readOnlyStyle={"control"}
                                                                        onEnter={undefined}
                                                                        onLeave={undefined}
                                                                        ariaLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        ariaRequired={undefined}
                                                                        tabIndex={undefined}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker7"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />,
                                            <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container3"
                                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container3"
                                                class={"mx-name-container3"}
                                                style={undefined}
                                                renderMode={"div"}
                                                onClick={undefined}
                                                content={[
                                                    <$Text key="p.ConversationalUI.TraceFiltering_EditDate.text1"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.text1"
                                                        class={"mx-name-text1 font-weight-semibold"}
                                                        style={undefined}
                                                        caption={t([
                                                            ExpressionProperty({
                                                                "expression": { "expr": { "type": "literal", "value": "End time to" }, "args": {} }
                                                            })
                                                        ])}
                                                        renderMode={"span"} />,
                                                    <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container5"
                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container5"
                                                        class={"mx-name-container5 row-left-aligned"}
                                                        style={undefined}
                                                        renderMode={"div"}
                                                        onClick={undefined}
                                                        content={[
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_EditDate.datePicker4$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker4$formGroup"
                                                                class={"mx-name-datePicker4 filter-date-input mx-datepicker"}
                                                                style={undefined}
                                                                control={[
                                                                    <$DatePicker key="p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                                        mode={"date"}
                                                                        showCalendarButton={true}
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "DateTo",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null,
                                                                            "formatting": {
                                                                                "dateFormat": t([
                                                                                    {
                                                                                        "type": "date"
                                                                                    }
                                                                                ])
                                                                            }
                                                                        })}
                                                                        placeholder={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        buttonLabel={TextProperty({
                                                                            "value": t([
                                                                                "Show date picker"
                                                                            ])
                                                                        })}
                                                                        readOnlyStyle={"control"}
                                                                        onEnter={undefined}
                                                                        onLeave={undefined}
                                                                        ariaLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        ariaRequired={undefined}
                                                                        tabIndex={undefined}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker4"
                                                                })} />,
                                                            <$FormGroup key="p.ConversationalUI.TraceFiltering_EditDate.datePicker10$formGroup"
                                                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker10$formGroup"
                                                                class={"mx-name-datePicker10 filter-time-input mx-datepicker"}
                                                                style={undefined}
                                                                control={[
                                                                    <$DatePicker key="p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                                        mode={"time"}
                                                                        showCalendarButton={false}
                                                                        inputValue={AttributeProperty({
                                                                            "scope": "p.ConversationalUI.TraceFiltering_EditDate.dataView6",
                                                                            "path": "",
                                                                            "entity": "ConversationalUI.TraceFiltering",
                                                                            "attribute": "DateTo",
                                                                            "onChange": { "type": "doNothing", "argMap": {}, "config": {}, "disabledDuringExecution": false },
                                                                            "isList": false,
                                                                            "validation": null,
                                                                            "formatting": {
                                                                                "dateFormat": t([
                                                                                    {
                                                                                        "type": "time"
                                                                                    }
                                                                                ])
                                                                            }
                                                                        })}
                                                                        placeholder={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        buttonLabel={TextProperty({
                                                                            "value": t([
                                                                                "Show date picker"
                                                                            ])
                                                                        })}
                                                                        readOnlyStyle={"control"}
                                                                        onEnter={undefined}
                                                                        onLeave={undefined}
                                                                        ariaLabel={t([
                                                                            ExpressionProperty({
                                                                                "expression": { "expr": { "type": "literal", "value": "" }, "args": {} }
                                                                            })
                                                                        ])}
                                                                        ariaRequired={undefined}
                                                                        tabIndex={undefined}
                                                                        id={DerivedUniqueIdProperty({
                                                                            "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                                        })} />
                                                                ]}
                                                                caption={undefined}
                                                                labelFor={DerivedUniqueIdProperty({
                                                                    "widgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                                })}
                                                                width={undefined}
                                                                orientation={"vertical"}
                                                                hasError={ValidationProperty({
                                                                    "inputWidgetId": "p.ConversationalUI.TraceFiltering_EditDate.datePicker10"
                                                                })} />
                                                        ]}
                                                        ariaHidden={false} />
                                                ]}
                                                ariaHidden={false} />
                                        ]}
                                        ariaHidden={false} />
                                ]} />
                        ]} />
                ]} />
        ]}
        hideFooter={false}
        footer={[
            <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container73"
                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container73"
                class={"mx-name-container73 pop-up-footer-flex-container"}
                style={undefined}
                renderMode={"div"}
                onClick={undefined}
                content={[
                    <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container7"
                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container7"
                        class={"mx-name-container7 pop-up-flex-items"}
                        style={undefined}
                        renderMode={"div"}
                        onClick={undefined}
                        content={[
                            <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container8"
                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container8"
                                class={"mx-name-container8 row-left-aligned"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={undefined}
                                ariaHidden={false} />,
                            <$Container key="p.ConversationalUI.TraceFiltering_EditDate.container1"
                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.container1"
                                class={"mx-name-container1 row-right-aligned"}
                                style={undefined}
                                renderMode={"div"}
                                onClick={undefined}
                                content={[
                                    <$ActionButton key="p.ConversationalUI.TraceFiltering_EditDate.actionButton2"
                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.actionButton2"
                                        buttonId={"p.ConversationalUI.TraceFiltering_EditDate.actionButton2"}
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
                                            "action": { "type": "cancelChanges", "argMap": {}, "config": { "operationId": "txFTjzhka1Gv3cUujM+Wng", "closePage": true }, "disabledDuringExecution": true },
                                            "abortOnServerValidation": true
                                        })} />,
                                    <$ConditionalVisibilityWrapper key="p.ConversationalUI.TraceFiltering_EditDate.actionButton1$visibility"
                                        $widgetId="p.ConversationalUI.TraceFiltering_EditDate.actionButton1$visibility"
                                        visible={ExpressionProperty({
                                            "expression": { "expr": { "type": "function", "name": "_hasSomeRole", "parameters": [ { "type": "literal", "value": "Administrator" } ] }, "args": {} }
                                        })}
                                        contents={[
                                            <$ActionButton key="p.ConversationalUI.TraceFiltering_EditDate.actionButton1"
                                                $widgetId="p.ConversationalUI.TraceFiltering_EditDate.actionButton1"
                                                buttonId={"p.ConversationalUI.TraceFiltering_EditDate.actionButton1"}
                                                class={"mx-name-actionButton1"}
                                                style={undefined}
                                                tabIndex={undefined}
                                                renderType={"button"}
                                                role={undefined}
                                                buttonClass={"btn-primary"}
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
                                                    "action": { "type": "callMicroflow", "argMap": { "TraceFiltering": { "widget": "$TraceFiltering", "source": "object" } }, "config": { "operationId": "L+HQj+FcFV6WsCEsid3JKQ", "progress": { "message": t([ "Updating graph.." ]), "modal": true }, "validate": "view", "allowedRoles": [ "Administrator" ] }, "disabledDuringExecution": true },
                                                    "abortOnServerValidation": true
                                                })} />
                                        ]} />
                                ]}
                                ariaHidden={false} />
                        ]}
                        ariaHidden={false} />
                ]}
                ariaHidden={false} />
        ]} />
]}</PageFragment>);

export const title = t([
    "Custom time frame"
]);

export const classes = "";

export const cancelChangesOperationId = "G6L9gEsn7lucqGFjqIz3XQ";
export const closeButton = "p.ConversationalUI.TraceFiltering_EditDate.actionButton2";
export const style = {};
export const content = { ...parentContent,
    "Atlas_Core.PopupLayout.Main": region$Main,
};
